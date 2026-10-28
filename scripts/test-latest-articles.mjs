import assert from 'node:assert/strict';
import { createServer } from 'vite';
const server=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true},optimizeDeps:{noDiscovery:true}});
try {
  const {selectLatestArticles,getLatestArticles,latestArticleDate}=await server.ssrLoadModule('/src/data/latestArticles.ts');
  const {getFeaturedContentCandidates}=await server.ssrLoadModule('/src/data/featuredContent.ts');
  const timestamp=date=>Date.parse(date.length===10?`${date}T00:00:00+09:00`:date)||0;
  const item=(path,date)=>({path,date,title:path,summary:'',category:'briefing',categoryLabel:'',kicker:'',image:{src:'x.webp',alt:''}});
  const old=item('/briefings/old','2026-10-01');
  const fresh=item('/news/fresh','2026-10-27');
  assert.equal(selectLatestArticles([old,fresh])[0].path,fresh.path,'New articles must not require featured history');
  assert.equal(selectLatestArticles([old,fresh],new Set([fresh.path]))[0].path,old.path,'Pinned article excluded before limit');
  assert.equal(selectLatestArticles([fresh,{...fresh,path:fresh.path+'/'}]).length,1,'Canonical paths deduplicated');
  assert.deepEqual(selectLatestArticles([old,fresh],new Set(),1,x=>x===old?'2026-10-28':x.date).map(x=>[x.path,x.isUpdated]),[[old.path,true]],'Real revisions can promote older content without changing publication');
  assert.equal(old.date,'2026-10-01','Original publication date preserved');
  assert.equal(selectLatestArticles([fresh],new Set(),0).length,0);
  assert.equal(latestArticleDate(item('/monitoring/community-chest-of-korea','2026-09-01')),'2026-09-10','Public content revision used, not system log');
  const displaced=item('/news/former-latest','2026-10-26');
  const revisions=Array.from({length:9},(_,i)=>item(`/monitoring/revised-${i}`,'2026-09-01'));
  const fixture=[displaced,...revisions];
  const revisionDate=x=>x===displaced?x.date:'2026-10-28';
  assert(!selectLatestArticles(fixture,new Set(),8,revisionDate).some(x=>x.path===displaced.path),'Newer revisions displace older articles from a bounded feed');
  assert(selectLatestArticles(fixture,new Set(),fixture.length,revisionDate).some(x=>x.path===displaced.path),'Displacement must not remove an article from the complete feed');
  for(const language of ['ko','en']) {
    const latest=getLatestArticles(language);
    const all=getLatestArticles(language,[],new Set(),Number.MAX_SAFE_INTEGER);
    const candidates=getFeaturedContentCandidates(language);
    const expected=[...new Map(candidates.filter(x=>timestamp(x.date)).map(x=>[x.path.replace(/\/$/,''),x])).values()]
      .sort((a,b)=>timestamp(latestArticleDate(b))-timestamp(latestArticleDate(a))||a.path.localeCompare(b.path)).slice(0,8);
    assert.deepEqual(latest.map(x=>x.path),expected.map(x=>x.path),'Bounded feed must match current eligible candidates in newest-first order');
    assert(all.some(x=>x.path==='/briefings/youth-rent-tax-credit-20-percent-bill-2222071'),'Published tax explainer absent from complete candidates');
    assert(all.some(x=>x.path==='/news/crypto-tax-fourth-deferral-2026'),'Published tax news absent from complete candidates');
    assert.equal(new Set(all.map(x=>x.path.replace(/\/$/,''))).size,all.length,'Complete feed must deduplicate canonical paths');
    assert.equal(latest.length,Math.min(8,all.length));
    console.log(language,latest.map(x=>({path:x.path,date:x.latestDate})));
  }
  assert.deepEqual(getLatestArticles('ko',[],new Set(),Number.MAX_SAFE_INTEGER).map(x=>x.path),getLatestArticles('en',[],new Set(),Number.MAX_SAFE_INTEGER).map(x=>x.path),'Bilingual complete candidate order must agree');
  assert.deepEqual(getLatestArticles('ko').map(x=>x.path),getLatestArticles('en').map(x=>x.path),'Bilingual newest-first order must agree');
  console.log('Latest feed regression checks passed');
} finally { await server.close(); }
