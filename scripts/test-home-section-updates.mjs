import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
const server = await createServer({ configFile: false, ssr: { resolve: { externalConditions: ['node', 'module-sync'] } }, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
try {
  const { default: Home } = await server.ssrLoadModule('/src/pages/Home.tsx');
  const { LanguageProvider } = await server.ssrLoadModule('/src/i18n.tsx');
  const {getCivicWatchFeed,selectLatestCivicWatchItems}=await server.ssrLoadModule('/src/data/civicWatchFeed.ts');
  const {getLatestArticles}=await server.ssrLoadModule('/src/data/latestArticles.ts');
  const timestamp=date=>Date.parse(date.length===10?`${date}T00:00:00+09:00`:date)||0;
  const canonical=path=>path.replace(/^\/en(?=\/)/,'').replace(/\/$/,'');
  const links=html=>[...html.matchAll(/href="([^"]+)"/g)].map(x=>canonical(x[1]));
  const orders=[];
  const old={key:'old',category:'tax',date:'2026-10-26',to:'/news/old',title:'old',summary:'',status:''};
  const newer=Array.from({length:4},(_,i)=>({...old,key:`new-${i}`,to:`/monitoring/new-${i}`,date:'2026-09-01',updatedAt:'2026-10-28'}));
  assert.deepEqual(selectLatestCivicWatchItems([old,...newer],new Set()).map(x=>x.to),newer.slice(0,3).map(x=>x.to),'New revisions must displace older tax items from top three');
  assert(selectLatestCivicWatchItems([old,...newer],new Set(),5).some(x=>x.to===old.to),'Older item must remain eligible outside top three');
  assert.deepEqual(selectLatestCivicWatchItems([old,...newer,newer[0]],new Set([newer[0].to])).map(x=>x.to),newer.slice(1).map(x=>x.to),'Exclusions and duplicate removal must precede the three-item limit');
  const source = await readFile('src/pages/Home.tsx', 'utf8');
  assert(!source.includes('latestArticles.map'), 'An all-category feed must not reserve existing section slots');
  for (const route of ['/', '/en']) {
    const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(LanguageProvider, null, React.createElement(Home))));
    assert(!html.includes('latest-articles-title'), 'Separate latest-articles section must be absent');
    const sections = html.split('<section');
    const briefings = sections.find(x => x.includes('>BRIEFINGS<'));
    const watch = sections.find(x => x.includes('id="recent-civic-watch-title"'));
    assert(watch,'Existing Civic Watch desk must remain');
    const language=route==='/en'?'en':'ko';
    const feed=getCivicWatchFeed(language);
    for(const path of ['/briefings/youth-rent-tax-credit-20-percent-bill-2222071','/news/crypto-tax-fourth-deferral-2026'])
      assert(feed.some(x=>x.to===path),'Published tax content must remain in complete civic candidates');
    const freshness=new Map(getLatestArticles(language,[],new Set(),Number.MAX_SAFE_INTEGER).map(x=>[x.path,x.latestDate]));
    const before=html.slice(0,html.indexOf('<section'+watch));
    const excluded=new Set([...links(before),...links(briefings||'')]);
    const seen=new Set();
    const expected=feed.map(x=>({...x,effective:Math.max(timestamp(freshness.get(x.to)||x.date),timestamp(x.updatedAt||x.date))}))
      .sort((a,b)=>b.effective-a.effective||a.to.localeCompare(b.to))
      .filter(x=>{if(excluded.has(x.to)||seen.has(x.to))return false;seen.add(x.to);return true;}).slice(0,3).map(x=>x.to);
    const cardStart=watch.indexOf('<div class="mt-5 grid gap-3');
    assert(cardStart>=0,'Civic record-card container must remain');
    const cards=watch.slice(cardStart);
    const rendered=links(cards);
    assert.deepEqual(rendered,expected,'Rendered civic cards must match newest eligible candidates after upper-desk exclusions');
    assert.equal(new Set(rendered).size,rendered.length,'Civic cards must not repeat');
    assert(rendered.every(path=>!excluded.has(path)),'Civic cards must not repeat upper or briefing desk articles');
    orders.push(rendered);
    assert(briefings?.includes('/briefings/'), 'Existing briefing desk must retain its own articles');
    assert(html.includes('id="hot-issues-title"') && html.includes('id="news-tracking-title"'), 'Existing carousels must remain');
    console.log(`${route}: existing desks preserve current newest-first candidates; separate feed absent`);
  }
  assert.deepEqual(orders[0],orders[1],'Korean and English Civic Watch card order must agree');
} finally { await server.close(); }
