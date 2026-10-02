import assert from 'node:assert/strict';
import { createServer } from 'vite';
const server = await createServer({configFile:false, appType:'custom', server:{middlewareMode:true,hmr:false}, optimizeDeps:{noDiscovery:true}});
try {
  const {getIssueWatchRows,getCivicWatchFeed,selectLatestCivicWatchItems}=await server.ssrLoadModule('/src/data/civicWatchFeed.ts');
  const saucePath='/columns/mfds-sauce-portioning-autonomy-2026';
  const ko=getCivicWatchFeed('ko'); const en=getCivicWatchFeed('en');
  assert(ko.some(x=>x.to===saucePath),'Today’s Issue Watch article must also enter the homepage feed');
  assert(getIssueWatchRows('ko').some(x=>x.tracker.href===saucePath && x.article.external && x.article.href.includes('mfds.go.kr')),'Keep the official notice alongside the shared article');
  assert(ko.some(x=>x.to==='/columns/worker-owned-country-union-subsidies-2026'),'Published public-interest articles must qualify automatically');
  assert.deepEqual(en.map(x=>x.to),ko.map(x=>x.to),'Both languages must show the same records in the same order');
  assert.notEqual(en.find(x=>x.to===saucePath).title,ko.find(x=>x.to===saucePath).title);
  const main=new Set(['/columns/citizenization-kimchi-jar-freedom-2026']);
  assert(selectLatestCivicWatchItems(ko,main).some(x=>x.to===saucePath),'A distinct new analysis must not disappear because the main article has a related topic');
  const bill={bill_id:'test-one',slug:'test-one',title:'법안 하나',review_state:'published',published_at:'2026-10-01T21:30:00Z',editorial_updated_at:'2026-09-30T00:00:00Z',updated_at:'2026-10-01T21:30:00Z',analysis:{title_en:'Bill one'},importance_score:85,editorial_image:{status:'ready',src:'https://example.org/verified.jpg',verified_at:'2026-10-01T21:30:00Z'}};
  const second={...bill,bill_id:'test-two',slug:'test-two',title:'법안 둘',published_at:'2026-10-01T21:20:00Z'};
  const feed=getCivicWatchFeed('ko',[bill,second]); const selected=selectLatestCivicWatchItems(feed,main);
  assert.deepEqual(selected.map(x=>x.to),['/monitoring/legislation/test-one','/monitoring/legislation/test-two',saucePath],'New records replace older category placeholders');
  assert.equal(selected[0].date,'2026-10-02','A Korean morning publication must display today, not yesterday’s UTC date');
  assert.equal(selected.filter(x=>x.category==='legislation').length,2,'Multiple fresh articles from one category must qualify');
  for(const unavailable of [{...bill,review_state:'review'},{...bill,editorial_image:{status:'pending'}},{...bill,editorial_image:{status:'ready',src:'https://example.org/unverified.jpg'}}]) assert(!getCivicWatchFeed('ko',[unavailable]).some(x=>x.to.includes('/test-one')),'Do not promote drafts or unverified artwork');
  const replaced=getCivicWatchFeed('ko',[{...bill,editorial_updated_at:'2026-10-03T01:00:00Z'}]);
  assert.equal(selectLatestCivicWatchItems(replaced,new Set())[0].date,'2026-10-03','A later live update moves its record to the top');
  const withoutMain=selectLatestCivicWatchItems([...feed,...feed],new Set([saucePath,'/monitoring/legislation/test-one']));
  assert.equal(new Set(withoutMain.map(x=>x.to)).size,withoutMain.length,'Do not duplicate links');
  assert(!withoutMain.some(x=>x.to===saucePath || x.to==='/monitoring/legislation/test-one'),'Current homepage articles stay excluded');
  console.log('Civic Watch source, freshness, Korea-date, publication and duplicate checks passed.');
}finally {await server.close();}
