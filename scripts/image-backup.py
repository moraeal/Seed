#!/usr/bin/env python3
"""Public image snapshots and append-only Drive deltas; standard library only."""
import argparse, hashlib, json, os, pathlib, shutil, subprocess, urllib.request, urllib.parse, zipfile
from datetime import datetime, timezone
from concurrent.futures import ThreadPoolExecutor

EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'}
SQL = """select coalesce(json_agg(json_build_object('bucket_id',o.bucket_id,'name',o.name) order by o.bucket_id,o.name),'[]'::json) from storage.objects o join storage.buckets b on b.id=o.bucket_id where b.public=true and (o.metadata->>'mimetype' like 'image/%' or o.name ~* '\\.(png|jpg|jpeg|webp|gif|svg|avif)$');"""

def digest(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for block in iter(lambda: f.read(1024 * 1024), b''): h.update(block)
    return h.hexdigest()

def safe_path(value):
    p = pathlib.PurePosixPath(value)
    if p.is_absolute() or '..' in p.parts or '\\' in value: raise ValueError('Unsafe image path')
    return p

def snapshot(args):
    root, out = pathlib.Path(args.root).resolve(), pathlib.Path(args.output).resolve()
    if out.exists(): raise ValueError('Output must be a new directory')
    out.mkdir(parents=True)
    entries = {}
    def record(source, key, url=None):
        safe_path(key)
        destination = out / 'files' / key
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
        if not destination.stat().st_size: raise ValueError('Empty image: ' + key)
        entries[key] = {'sha256': digest(destination), 'size': destination.stat().st_size}
        if url: entries[key]['source_url'] = url
    for source in sorted((root / 'public/images').rglob('*')):
        if source.is_file() and source.suffix.lower() in EXTENSIONS:
            if source.is_symlink(): raise ValueError('Symlink in image source')
            record(source, source.relative_to(root).as_posix())
    if args.storage_inventory:
        inventory = json.loads(pathlib.Path(args.storage_inventory).read_text())
    else:
        if not os.environ.get('SUPABASE_DB_URL'): raise ValueError('SUPABASE_DB_URL is required for complete public-image coverage')
        result = subprocess.run(['psql', os.environ['SUPABASE_DB_URL'], '-X', '-A', '-t', '-v', 'ON_ERROR_STOP=1', '-c', SQL], capture_output=True, text=True)
        if result.returncode: raise RuntimeError('Storage inventory query failed; credentials are never printed')
        inventory = json.loads(result.stdout)
    def download(item):
        bucket, name = item['bucket_id'], item['name']
        safe_path(bucket); safe_path(name)
        key = 'storage/' + bucket + '/' + name
        url = 'https://wajlmbahjyazkftwaeem.supabase.co/storage/v1/object/public/' + urllib.parse.quote(bucket, safe='') + '/' + urllib.parse.quote(name, safe='/')
        temp = out / (hashlib.sha256(key.encode()).hexdigest() + '.tmp')
        with urllib.request.urlopen(url, timeout=30) as response:
            if not response.headers.get('Content-Type', '').startswith('image/'): raise ValueError('Storage returned a non-image response')
            with open(temp, 'wb') as f: shutil.copyfileobj(response, f)
        return temp, key, url
    with ThreadPoolExecutor(max_workers=8) as pool:
        for temp, key, url in pool.map(download, inventory):
            record(temp, key, url); temp.unlink()
    if not entries: raise ValueError('No images found')
    revision = subprocess.check_output(['git', '-C', str(root), 'rev-parse', 'HEAD'], text=True).strip()
    manifest = {'version': 1, 'created_at': datetime.now(timezone.utc).isoformat(), 'commit': revision, 'files': entries, 'coverage': ['repository public/images', 'all public Supabase image objects'], 'excluded': ['private uploads', 'third-party hotlinked images', 'unpublished originals outside these stores']}
    (out / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    shutil.copyfile(__file__, out / 'image-backup.py')
    print(json.dumps({'images': len(entries), 'storage_images': len(inventory), 'commit': revision}))

def delta(args):
    source, out = pathlib.Path(args.snapshot), pathlib.Path(args.output)
    manifest = json.loads((source / 'manifest.json').read_text())
    previous = json.loads(pathlib.Path(args.previous).read_text()) if args.previous else None
    if previous and 'manifest' in previous: previous = previous['manifest']
    known = previous['files'] if previous else {}
    changed = [k for k, v in manifest['files'].items() if known.get(k, {}).get('sha256') != v['sha256']]
    removed = sorted(set(known) - set(manifest['files']))
    out.mkdir(parents=True, exist_ok=False)
    groups, group, size = [], [], 0
    limit = 24 * 1024 * 1024
    for key in changed:
        safe_path(key); path = source / 'files' / key
        if path.is_symlink() or digest(path) != manifest['files'][key]['sha256']: raise ValueError('Image checksum mismatch: ' + key)
        image_size = path.stat().st_size
        if image_size > limit: raise ValueError('Image exceeds per-part limit: ' + key)
        if size + image_size > limit: groups.append(group); group, size = [], 0
        group.append(key); size += image_size
    if group: groups.append(group)
    token = manifest['created_at'].replace(':', '-').replace('+00-00', 'Z')
    prefix = 'seedvoice-images-' + ('delta-' if previous else 'baseline-') + token
    parts = []
    for index, keys in enumerate(groups, 1):
        name = prefix + f'-part{index:03d}.zip'
        path = out / name
        with zipfile.ZipFile(path, 'w', compression=zipfile.ZIP_STORED) as archive:
            for key in keys: archive.write(source / 'files' / key, key)
            archive.writestr('part-manifest.json', json.dumps({k: manifest['files'][k] for k in keys}, ensure_ascii=False))
        with zipfile.ZipFile(path) as archive:
            if archive.testzip(): raise ValueError('Invalid ZIP')
        parts.append({'name': name, 'sha256': digest(path), 'size': path.stat().st_size, 'images': len(keys)})
    receipt = {'version': 1, 'manifest': manifest, 'parent_created_at': previous.get('created_at') if previous else None, 'changed_count': len(changed), 'removed_paths': removed, 'parts': parts, 'verified_drive_upload': False}
    receipt_path = out / (prefix + '-receipt.json')
    receipt_path.write_text(json.dumps(receipt, ensure_ascii=False, indent=2))
    print(json.dumps({'images': len(manifest['files']), 'changed': len(changed), 'removed': len(removed), 'parts': len(parts), 'receipt': str(receipt_path)}))

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest='command', required=True)
    p = sub.add_parser('snapshot'); p.add_argument('--root', default='.'); p.add_argument('--output', required=True); p.add_argument('--storage-inventory')
    p = sub.add_parser('delta'); p.add_argument('--snapshot', required=True); p.add_argument('--output', required=True); p.add_argument('--previous')
    args = parser.parse_args()
    snapshot(args) if args.command == 'snapshot' else delta(args)
