import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Images, RefreshCw, X } from 'lucide-react';
import { useAuth, type AuthUser } from '../auth';
import { useLanguage } from '../i18n';
import SafeImage from '../components/SafeImage';
import type { ArchiveImage } from '../data/articleImageArchive';

const url = (import.meta.env.VITE_SUPABASE_URL || 'https://wajlmbahjyazkftwaeem.supabase.co').replace(/\/$/, '');
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje';
const originalUrl = (src: string) => /^https:\/\//.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;
const PAGE_SIZE = 48;

export default function ImageArchive() {
  const { user, session, loading: authLoading, getValidAccessToken } = useAuth();
  const { language } = useLanguage();
  const ko = language === 'ko';
  const [images, setImages] = useState<ArchiveImage[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'denied' | 'error'>('loading');
  const [notice, setNotice] = useState('');
  const [refresh, setRefresh] = useState(0);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<ArchiveImage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const localOwner = user?.app_metadata?.seed_role === 'owner';

  useEffect(() => {
    let active = true;
    setImages([]); setSelected(null); setStatus('loading'); setNotice('');
    if (authLoading || !localOwner || !session) return;
    const load = async () => {
      try {
        const token = await getValidAccessToken();
        if (!token) { if (active) setStatus('denied'); return; }
        // Confirm the current role with Auth, never trust editable local storage.
        const response = await fetch(`${url}/auth/v1/user`, { headers: { apikey: key, Authorization: `Bearer ${token}` }, cache: 'no-store' });
        if (response.status === 401 || response.status === 403) { if (active) setStatus('denied'); return; }
        if (!response.ok) throw new Error('auth unavailable');
        const verified: AuthUser = await response.json();
        if (verified.id !== user?.id || verified.app_metadata?.seed_role !== 'owner') { if (active) setStatus('denied'); return; }
        if (!active) return;
        // Only published article assets are read, and only after owner verification.
        const [{ getArticleImageArchive }, { getPublishedLegislativeBills }] = await Promise.all([import('../data/articleImageArchive'), import('../lib/legislativeMonitoring')]);
        let bills: Awaited<ReturnType<typeof getPublishedLegislativeBills>> = [];
        try { bills = await getPublishedLegislativeBills(1000); }
        catch { if (active) setNotice(ko ? '입법 이미지 일부를 불러오지 못했습니다. 새로고침으로 다시 확인해주세요.' : 'Some legislative images could not load. Please refresh.'); }
        if (active) { setImages(getArticleImageArchive(bills)); setStatus('ready'); }
      } catch { if (active) setStatus('error'); }
    };
    void load();
    return () => { active = false; };
  }, [authLoading, session?.access_token, user?.id, localOwner, refresh, ko]);
  useEffect(() => { setLimit(PAGE_SIZE); }, [query, category]);
  useEffect(() => { if (selected) dialog.current?.showModal(); else dialog.current?.close(); }, [selected]);
  const categories = useMemo(() => [...new Set(images.flatMap(image => image.uses.map(use => use.category)))], [images]);
  const filtered = useMemo(() => images.filter(image => (category === 'all' || image.uses.some(use => use.category === category)) && `${image.alt} ${image.src} ${image.uses.map(use => use.title).join(' ')}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [images, query, category]);

  if (authLoading) return <div className="container-page py-20" role="status">{ko ? '계정을 확인하고 있습니다.' : 'Checking your account…'}</div>;
  if (!user) return <section className="container-page min-h-[60vh] py-20"><h1 className="text-3xl font-bold">{ko ? '이미지 보관함' : 'Image archive'}</h1><p className="mt-4">{ko ? '운영자 계정으로 로그인해주세요.' : 'Sign in with the owner account.'}</p><Link className="button-primary mt-6" to="/account?returnTo=/insights/images">{ko ? '로그인' : 'Sign in'}</Link></section>;
  if (!localOwner || status === 'denied') return <section className="container-page min-h-[60vh] py-20"><h1 className="text-3xl font-bold">{ko ? '접근할 수 없습니다' : 'Access denied'}</h1><p className="mt-4">{ko ? '운영자만 볼 수 있는 보관함입니다.' : 'This archive is for the owner only.'}</p></section>;
  return <section className="bg-ivory py-8 sm:py-12"><div className="container-page">
    <Link to="/insights" className="text-sm font-bold text-green-deep">{ko ? '운영자 대시보드' : 'Owner dashboard'}</Link>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b-2 border-navy pb-5"><div><h1 className="flex items-center gap-3 text-3xl font-bold text-navy"><Images aria-hidden size={28}/>{ko ? '이미지 보관함' : 'Image archive'}</h1><p className="mt-3 text-sm text-charcoal/70">{ko ? '게시된 기사의 이미지와 도표 · 최신 기사순 · 같은 이미지는 한 번만 표시' : 'Published article images and charts · newest first · duplicates combined'}</p></div><button className="button-secondary" disabled={status === 'loading'} onClick={() => setRefresh(value => value + 1)}><RefreshCw size={16}/>{ko ? '새로고침' : 'Refresh'}</button></div>
    {status === 'loading' && <p role="status" className="py-12">{ko ? '운영자 권한과 이미지를 확인하고 있습니다.' : 'Verifying access and loading images…'}</p>}
    {status === 'error' && <p role="alert" className="py-12 text-red-700">{ko ? '보관함을 열지 못했습니다. 새로고침으로 다시 시도해주세요.' : 'Could not open the archive. Please refresh.'}</p>}
    {status === 'ready' && <>
      {notice && <p className="mt-4 text-amber-800" role="alert">{notice}</p>}
      <div className="my-6 flex flex-wrap items-center gap-3"><label className="flex-1 min-w-[220px]"><span className="sr-only">{ko ? '기사 제목 또는 이미지 검색' : 'Search images'}</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={ko ? '기사 제목 또는 이미지 설명 검색' : 'Search article titles or image descriptions'} className="w-full rounded border border-green-deep/25 bg-white px-4 py-3 text-base"/></label><label><span className="sr-only">{ko ? '분류' : 'Category'}</span><select value={category} onChange={event => setCategory(event.target.value)} className="rounded border border-green-deep/25 bg-white px-4 py-3 text-base"><option value="all">{ko ? '전체 분류' : 'All categories'}</option>{categories.map(item => <option key={item}>{item}</option>)}</select></label><p className="text-sm text-charcoal/70">{filtered.length.toLocaleString()} / {images.length.toLocaleString()} {ko ? '장' : 'images'}</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.slice(0, limit).map(image => <article key={image.src} className="overflow-hidden rounded-lg border border-green-deep/15 bg-white shadow-sm"><button type="button" onClick={() => setSelected(image)} aria-label={`${ko ? '크게 보기' : 'Enlarge'}: ${image.uses[0].title}`} className="block w-full bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep"><SafeImage src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-contain p-2 transition-opacity hover:opacity-80"/></button><div className="p-4"><p className="text-sm text-charcoal/60">{image.uses[0].category} · {image.uses[0].date.slice(0, 10)}</p><Link to={image.uses[0].path} className="mt-2 block font-bold leading-relaxed text-navy hover:underline">{image.uses[0].title}</Link>{image.uses.length > 1 && <p className="mt-2 text-sm text-charcoal/60">{ko ? `총 ${image.uses.length}개 기사에서 사용` : `Used in ${image.uses.length} articles`}</p>}</div></article>)}</div>
      {!filtered.length && <p className="py-16 text-center">{ko ? '조건에 맞는 이미지가 없습니다.' : 'No matching images.'}</p>}
      {filtered.length > limit && <div className="mt-8 text-center"><button className="button-secondary" onClick={() => setLimit(value => value + PAGE_SIZE)}>{ko ? '이미지 더 보기' : 'Show more images'}</button></div>}
    </>}
    <dialog ref={dialog} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === dialog.current) setSelected(null); }} className="max-h-[90vh] w-[min(1100px,95vw)] overflow-y-auto rounded-xl bg-white p-0 shadow-2xl backdrop:bg-black/70" aria-label={ko ? '이미지 크게 보기' : 'Image preview'}>{selected && <div className="p-4 sm:p-6"><div className="flex items-start justify-between gap-4"><h2 className="text-xl font-bold leading-relaxed">{selected.uses[0].title}</h2><button autoFocus onClick={() => setSelected(null)} className="rounded p-2 hover:bg-slate-100" aria-label={ko ? '닫기' : 'Close'}><X/></button></div><SafeImage src={selected.src} alt={selected.alt} loading="eager" className="mt-4 max-h-[60vh] w-full object-contain"/><p className="mt-3 text-sm text-charcoal/70">{selected.alt}</p><div className="mt-4 flex flex-wrap gap-3"><a href={originalUrl(selected.src)} target="_blank" rel="noopener noreferrer" className="button-secondary">{ko ? '원본 이미지 열기' : 'Open original image'}</a></div><h3 className="mt-5 font-bold">{ko ? '사용한 기사' : 'Articles using this image'}</h3><ul className="mt-2 space-y-2">{selected.uses.map(use => <li key={use.path}><Link to={use.path} onClick={() => setSelected(null)} className="text-green-deep underline">{use.title}</Link></li>)}</ul></div>}</dialog>
  </div></section>;
}
