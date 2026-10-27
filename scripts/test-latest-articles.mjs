import assert from 'node:assert/strict';
import { createServer } from 'vite';
const server=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true},optimizeDeps:{noDiscovery:true}});
try {
  const {selectLatestArticles,getLatestArticles,latestArticleDate}=await server.ssrLoadModule('/src/data/latestArticles.ts');
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
  for(const language of ['ko','en']) {
    const latest=getLatestArticles(language);
    assert(latest.some(x=>x.path==='/briefings/youth-rent-tax-credit-20-percent-bill-2222071'),'Published tax explainer absent from latest');
    assert(latest.some(x=>x.path==='/news/crypto-tax-fourth-deferral-2026'),'Published tax news absent from latest');
    assert.equal(new Set(latest.map(x=>x.path)).size,latest.length);
    console.log(language,latest.map(x=>({path:x.path,date:x.latestDate})));
  }
  assert.deepEqual(getLatestArticles('ko').map(x=>x.path),getLatestArticles('en').map(x=>x.path),'Bilingual newest-first order must agree');
  console.log('Latest feed regression checks passed');
} finally { await server.close(); }
