import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { captureOfflineArticle, downloadOfflineDocument, embedOfflineImages, offlineDocument, verifyOfflineOwner } from '../lib/operatorOffline';
import type { SeoRoute } from '../seo';
import type { EditorialSeries } from '../data/editorialSeries';

export default function OperatorOffline() {
  const { user, loading, getValidAccessToken } = useAuth();
  const { language } = useLanguage();
  const ko = language === 'ko';
  const owner = user?.app_metadata?.seed_role === 'owner';
  const [status, setStatus] = useState<'checking' | 'ready' | 'error'>('checking');
  const [articles, setArticles] = useState<SeoRoute[]>([]);
  const [series, setSeries] = useState<EditorialSeries[]>([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const [retry, setRetry] = useState(0);
  const [limit, setLimit] = useState(40);
  const operation = useRef<AbortController | null>(null);
  const MAX_ARTICLES = 30;

  useEffect(() => {
    const controller = new AbortController();
    setStatus('checking'); setArticles([]); setSeries([]); setSelected([]); setNotice('');
    if (!loading && owner && user) void (async () => {
      try {
        await verifyOfflineOwner(await getValidAccessToken(), user.id, controller.signal);
        const [{ seoRoutes }, { getEditorialSeries }, { isReadingPage }] = await Promise.all([
          import('../seo'), import('../data/editorialSeries'), import('../lib/readingRoutes'),
        ]);
        if (controller.signal.aborted) return;
        setArticles(seoRoutes.filter(item => item.type === 'article' && !item.noindex && isReadingPage(item.path) && item.language !== 'en')
          .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '')));
        setSeries(getEditorialSeries(language)); setStatus('ready');
      } catch (error) {
        if (controller.signal.aborted) return;
        setStatus('error'); setNotice(error instanceof Error ? error.message : '권한 확인 실패 / Verification failed');
      }
    })();
    return () => { controller.abort(); operation.current?.abort(); };
  }, [loading, owner, user?.id, language, retry]);

  useEffect(() => { setLimit(40); }, [query]);
  const filtered = useMemo(() => articles.filter(item => `${item.title} ${item.description}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [articles, query]);

  function toggle(path: string) {
    setSelected(previous => previous.includes(path) ? previous.filter(item => item !== path) : previous.length < MAX_ARTICLES ? [...previous, path] : previous);
  }

  async function save() {
    if (!user || !owner || busy || !selected.length || selected.length > MAX_ARTICLES) return;
    const controller = new AbortController(); operation.current = controller;
    setBusy(true); setNotice('');
    const deadline = window.setTimeout(() => controller.abort(), 10 * 60 * 1000);
    try {
      await verifyOfflineOwner(await getValidAccessToken(), user.id, controller.signal);
      const entries: { path: string; title: string; html: string }[] = [];
      for (const path of selected) {
        controller.signal.throwIfAborted();
        const item = articles.find(article => article.path === path);
        if (!item) throw new Error('기사 목록을 다시 확인해주세요. / Refresh the article list.');
        setNotice(`${entries.length + 1} / ${selected.length} · ${item.title.replace(/ \| .*$/, '')}`);
        const article = await captureOfflineArticle(path, controller.signal);
        await embedOfflineImages(article, controller.signal);
        entries.push({ path, title: article.querySelector('h1')!.textContent || item.title, html: article.outerHTML });
      }
      // Do not finish a download after logout, revocation or an account switch.
      await verifyOfflineOwner(await getValidAccessToken(), user.id, controller.signal);
      controller.signal.throwIfAborted();
      const html = offlineDocument(entries, ko);
      if (new Blob([html]).size > 100 * 1024 * 1024) throw new Error('파일이 큽니다. 기사를 나누어 저장해주세요. / Split the selection into smaller files.');
      downloadOfflineDocument(html);
      setNotice(ko ? `${entries.length}편의 읽기 파일 다운로드를 요청했습니다. 기기의 다운로드 폴더에서 확인해주세요.` : `Download requested for ${entries.length} articles. Check your Downloads folder.`);
    } catch (error) {
      if (controller.signal.aborted) setNotice(ko ? '저장을 중지했습니다. 파일은 생성하지 않았습니다.' : 'Cancelled. No file was created.');
      else setNotice(error instanceof Error ? error.message : '저장에 실패했습니다. / Download failed.');
    } finally { clearTimeout(deadline); setBusy(false); operation.current = null; }
  }

  if (loading) return <div className="container-page py-20" role="status">{ko ? '계정을 확인하고 있습니다.' : 'Checking your account…'}</div>;
  if (!user) return <section className="container-page py-20"><h1 className="text-3xl font-bold">{ko ? '운영자 오프라인 읽기' : 'Owner offline reading'}</h1><p className="mt-4">{ko ? '운영자 계정으로 로그인해주세요.' : 'Sign in with the owner account.'}</p><Link to="/account?returnTo=/insights/offline" className="button-primary mt-6">{ko ? '로그인' : 'Sign in'}</Link></section>;
  if (!owner) return <section className="container-page py-20"><h1 className="text-3xl font-bold">{ko ? '접근할 수 없습니다' : 'Access denied'}</h1><p className="mt-4">{ko ? '운영자만 사용할 수 있습니다.' : 'Owner access required.'}</p></section>;
  return <section className="container-page py-8 sm:py-12">
    <h1 className="text-3xl font-bold text-navy">{ko ? '운영자 오프라인 읽기' : 'Owner offline reading'}</h1>
    <p className="mt-4 max-w-3xl leading-7">{ko ? '기사를 선택하면 본문·이미지·도표를 하나의 HTML 읽기 파일로 내려받습니다. 저장한 파일은 기기의 다운로드 폴더에서 인터넷 없이 열 수 있습니다.' : 'Download selected articles, images and charts as one HTML reading file. Open it from your Downloads folder without internet access.'}</p>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/65">{ko ? '다운로드는 운영자만 가능합니다. 파일은 로그아웃 후에도 기기에 남으며 파일 앱에서 직접 삭제해야 합니다. 동영상·외부 링크는 인터넷이 필요합니다. 수정된 원고는 다시 저장해주세요. 한 번에 최대 30편까지 저장할 수 있습니다.' : 'Only the owner can create a download. Files remain after logout; delete them using your file manager. Videos and external links require internet. Download again for corrections. Up to 30 articles per file.'}</p>
    {status === 'checking' && <p className="py-8" role="status">{ko ? '운영자 권한을 확인하고 있습니다.' : 'Verifying owner access…'}</p>}
    {status === 'error' && <div className="mt-6"><p role="alert">{notice}</p><button className="button-secondary mt-4" onClick={() => setRetry(value => value + 1)}>{ko ? '다시 확인' : 'Retry'}</button></div>}
    {status === 'ready' && <>
      <div className="mt-6 flex flex-wrap gap-2">{series.map(item => <button key={item.slug} disabled={busy} className="button-secondary" onClick={() => {
        const paths = item.chapters.map(chapter => chapter.path).filter(path => articles.some(article => article.path === path));
        setSelected(paths.slice(0, MAX_ARTICLES));
      }}>{ko ? `${item.title} 전체 선택` : `Select ${item.title}`}</button>)}</div>
      <label className="mt-6 block"><span className="text-sm font-bold">{ko ? '기사 검색' : 'Search articles'}</span><input type="search" value={query} disabled={busy} onChange={event => setQuery(event.target.value)} placeholder={ko ? '제목 또는 설명으로 찾기' : 'Search titles or descriptions'} className="mt-2 w-full rounded border border-green-deep/30 bg-white px-4 py-3"/></label>
      <div className="sticky top-0 z-10 mt-5 flex flex-wrap items-center gap-3 border-y border-green-deep/20 bg-paper py-4">
        <strong>{ko ? `선택 ${selected.length}편 / 최대 ${MAX_ARTICLES}편` : `${selected.length} selected / maximum ${MAX_ARTICLES}`}</strong>
        <button className="button-primary" disabled={busy || !selected.length} onClick={() => void save()}>{ko ? '선택 기사 오프라인 파일 저장' : 'Download selected articles'}</button>
        <button className="button-secondary" disabled={busy || !selected.length} onClick={() => setSelected([])}>{ko ? '선택 해제' : 'Clear selection'}</button>
        {busy && <button className="button-secondary" onClick={() => operation.current?.abort()}>{ko ? '중지' : 'Cancel'}</button>}
      </div>
      {notice && <p className="my-4 break-words text-sm" role="status" aria-live="polite">{notice}</p>}
      <p className="mt-4 text-sm text-charcoal/60">{ko ? `검색 결과 ${filtered.length}편 · 선택은 검색어를 바꿔도 유지됩니다.` : `${filtered.length} results · selections persist across searches.`}</p>
      <ul className="mt-3 divide-y divide-green-deep/15">{filtered.slice(0, limit).map(item => <li key={item.path}><label className="flex cursor-pointer items-start gap-4 py-4"><input type="checkbox" className="mt-1 h-5 w-5 shrink-0" checked={selected.includes(item.path)} disabled={busy || (!selected.includes(item.path) && selected.length >= MAX_ARTICLES)} onChange={() => toggle(item.path)}/><span><span className="block font-bold text-navy">{item.title.replace(/ \| .*$/, '')}</span><span className="mt-1 block text-sm text-charcoal/65">{item.publishedAt?.slice(0, 10)} · {item.description}</span></span></label></li>)}</ul>
      {filtered.length > limit && <button className="button-secondary mt-4" disabled={busy} onClick={() => setLimit(value => value + 40)}>{ko ? '더 보기' : 'Show more'}</button>}
    </>}
  </section>;
}
