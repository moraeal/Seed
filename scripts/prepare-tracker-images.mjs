import { createServer } from 'vite';
import { readFile, writeFile, mkdir, access, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const manifestPath = 'src/data/trackerSourceImages.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const server = await createServer({ configFile: false, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
const { newsTrackerCases } = await server.ssrLoadModule('/src/data/newsTrackerRegistry.ts');
await server.close();
const sources = new Map();
for (const tracker of newsTrackerCases) for (const entry of tracker.timeline ?? []) for (const source of entry.sources ?? []) {
  if (source.kind === 'document') continue;
  if (source.thumbnailSrc) {
    if (!/^https?:/.test(source.thumbnailSrc)) await access(`public/${source.thumbnailSrc.replace(/^\//, '')}`);
    continue;
  }
  sources.set(source.url, source);
}
const errors = [];
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
async function download(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response;
}
async function prepare([url, source]) {
  const cached = manifest[url];
  if (cached) {
    try { await access(`public/${cached.src.replace(/^\//, "")}`); await run('identify', ['-ping', `public/${cached.src.replace(/^\//, "")}`]); return; } catch { /* Recover a missing asset. */ }
  }
  try {
    let imageUrl;
    const video = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/);
    if (video) imageUrl = `https://i.ytimg.com/vi/${video[1]}/hqdefault.jpg`;
    else {
      const html = await (await download(url)).text();
      const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
      for (const key of ['og:image', 'twitter:image']) {
        const tag = tags.find(tag => new RegExp(`(?:property|name)=["']${key}["']`, 'i').test(tag));
        const content = tag?.match(/\bcontent\s*=\s*["']([^"']+)["']/i)?.[1];
        if (content) { imageUrl = new URL(decode(content), url).href; break; }
      }
    }
    if (!imageUrl || /ytn_sns_default|Khan_CI_|(?:^|[\/_-])(?:logo|noimage|default)[\/_.-]/i.test(imageUrl) || !/^https?:\/\//.test(imageUrl)) throw new Error('No article image metadata; provide a verified thumbnailSrc before publishing');
    const imageResponse = await download(imageUrl);
    if (!imageResponse.headers.get('content-type')?.startsWith('image/')) throw new Error('Image URL did not return an image');
    const bytes = Buffer.from(await imageResponse.arrayBuffer());
    if (bytes.length > 15000000) throw new Error('Image exceeds 15 MB');
    const id = createHash('sha256').update(url).digest('hex').slice(0, 20);
    await mkdir('public/images/monitoring/source-articles', { recursive: true });
    const temporary = `public/images/monitoring/source-articles/${id}.download`;
    const src = `/images/monitoring/source-articles/${id}.jpg`;
    await writeFile(temporary, bytes);
    try {
      const { stdout } = await run('identify', ['-format', '%w %h', `${temporary}[0]`]);
      const [width, height] = stdout.trim().split(/\s+/).map(Number);
      if (width < 240 || height < 120) throw new Error('Article image is too small');
      await run('convert', [`${temporary}[0]`, '-auto-orient', '-resize', '960x960>', '-background', 'white', '-alpha', 'remove', '-strip', '-quality', '85', `public${src}`]);
      manifest[url] = { src, originalImageUrl: imageUrl, verifiedAt: new Date().toISOString() };
      console.log(`Saved ${source.publisher.ko}: ${source.title.ko}`);
    } finally { await unlink(temporary).catch(() => {}); }
  } catch (error) { errors.push(`${url}: ${error.message}`); }
}
const entries = [...sources];
for (let index = 0; index < entries.length; index += 6) await Promise.all(entries.slice(index, index + 6).map(prepare));
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Tracker source images verified: ${sources.size}`);
