import { createServer } from "vite";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
const server = await createServer({ configFile:false, ssr:{noExternal:["react-router-dom","react-router"],resolve:{conditions:["module","import","development"]}}, esbuild:{jsx:"automatic"}, appType:"custom", server:{middlewareMode:true}, optimizeDeps:{noDiscovery:true} });
try {
const load = path => server.ssrLoadModule(path);
const [cit,columns,news,briefings,seed,environment,tax,taxCommentaries,legislation,local,watch,research,components] = await Promise.all([
  load('/src/lib/articleCitations.ts'), load('/src/data/columns.ts'), load('/src/data/news.ts'), load('/src/data/allBriefings.ts'), load('/src/data/seedLanguage.ts'), load('/src/data/seedLanguageEnvironment.ts'), load('/src/data/taxWatch.ts'), load('/src/data/taxCommentaries.ts'), load('/src/data/legislativeCommentaries.ts'), load('/src/data/localizedContent.ts'), load('/src/data/newsTrackerRegistry.ts'), load('/src/data/communityChestResearch.ts'), load('/src/components/ArticleCitations.tsx'),
]);
const { MemoryRouter } = await load("react-router-dom");
// These checks protect source meaning and link behavior, not just typography.
const sourceInputs = [
 {url:'https://example.org/a',label:{ko:'첫 자료',en:'First source'}},
 {url:'https://example.org/a',label:'Duplicate'},
 {url:'https://example.org/b?year=2026#table',label:{ko:'둘째 자료',en:'Second source'},note:'2026-10-09'},
];
for (const language of ['ko','en']) {
 const registry = cit.createArticleCitations(sourceInputs, '[7](https://example.org/c)', language);
 assert.equal(registry.sources.length, 3);
 assert.equal(cit.resolveCitationToken('[2]', registry).url, sourceInputs[0].url);
 assert.equal(cit.resolveCitationToken('[3]', registry).number, 2);
 assert.equal(cit.resolveCitationToken('[99]', registry), undefined);
 assert.equal(cit.resolveCitationToken('[7](https://example.org/c)', registry).number, 3);
 const body = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(components.ArticleText, {
  text:'내용[2] · [보고서](https://example.org/b?year=2026#table)를 검토했다. [관련 씨앗 기사](/columns/related). [7](https://example.org/c)', citations:registry,
 })));
 assert.match(body, /href="https:\/\/example.org\/a"[^>]*target="_blank"[^>]*rel="noreferrer"/);
 assert.match(body, /보고서<sup/);
 assert.match(body, /href="\/columns\/related"/);
 assert.match(body, /href="https:\/\/example.org\/c"/);
 assert.doesNotMatch(body, /href="#article-source-/);
 assert.match(body, /href="https:\/\/example.org\/b\?year=2026#table"/);
 const internalRegistry = cit.createArticleCitations([{url:'/columns/original',label:'SEED original'}], [], language);
 const internalReference = renderToStaticMarkup(createElement(components.CitationReference, {number:1,citations:internalRegistry}));
 assert.match(internalReference, /href="\/columns\/original"/);
 assert.doesNotMatch(internalReference, /target=|href="#article-source-/);
 const namedEnding = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(components.ArticleText, {
  text:'자세한 내용은 [공식 보고서](https://example.org/a).', citations:registry,
 })));
 assert.match(namedEnding, /자세한 내용은 공식 보고서<sup/);
 const detachedEnding = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(components.ArticleText, {
  text:'확인한 사실입니다. [자료명](https://example.org/a)', citations:registry,
 })));
 assert.doesNotMatch(detachedEnding, /자료명/);
 const footer = renderToStaticMarkup(createElement(components.ArticleSources, {citations:registry}));
 assert.equal((footer.match(/id="article-source-\d+"/g) || []).length, 3);
 assert.match(footer, /year=2026#table/);
 assert.match(footer, /2026-10-09/);
 assert.match(footer, language === 'ko' ? /둘째 자료/ : /Second source/);
}
// Article families must use the same footer and cannot introduce private parsers.
const renderers = ['ColumnDetail','NewsDetail','BriefingDetail','BriefingCommentary','SeedLanguageDetailBase','TaxCommentaryDetail','LegislativeCommentaryDetail','PublicInterestWatchDetail','LivingWatchDetail','PublicInstitutionReformTracker','InstitutionWatchArticle','CommunityChestWatchArticle','CommunityChestResearch','BCorpDeepDive','TaxPolicyDetail','LegislativeBillDetail'];
for (const file of [...renderers.map(name => `src/pages/${name}.tsx`), 'src/components/TaxPolicyArticle.tsx']) {
 const code = await readFile(file, 'utf8');
 assert.doesNotMatch(code, /\{(?:item|article|policy|publicInstitutionReformTracker)\.sources\.map/, `${file}: private source list is forbidden`);
 assert.match(code, /<ArticleSources\s/, `${file}: shared source footer required`);
 assert.doesNotMatch(code, /<sup\b|InlineLinkedText|TaxSourceText|subtleFootnotes/, `${file}: private citation format is forbidden`);
}
const localizeTree = (value, language) => {
 if (!value || typeof value !== 'object') return value;
 if (typeof value.ko === 'string' && typeof value.en === 'string') return value[language];
 if (Array.isArray(value)) return value.map(item => localizeTree(item, language));
 return Object.fromEntries(Object.entries(value).map(([key,item]) => [key,localizeTree(item,language)]));
};
const entries=[];
for(const lang of ['ko','en']) {
 for(const a of columns.columns) entries.push({kind:'column',route:`/columns/${a.slug}`,lang,article:local.localizeColumn(a,lang)});
 for(const a of news.newsArticles) entries.push({kind:'news',route:`/news/${a.slug}`,lang,article:local.localizeNewsArticle(a,lang)});
 for(const a of briefings.getAllBriefingsNewestFirst()) {
  const article=local.localizeBriefing(a,lang);entries.push({kind:'briefing',route:`/briefings/${a.slug}`,lang,article});
  if(article.commentary) entries.push({kind:'deep-read',route:`/briefings/${a.slug}/commentary`,lang,article:{...article.commentary,sources:article.sources}});
 }
 for(const a of seed.seedLanguageArticlesKo) entries.push({kind:'seed-language',route:`/seed-language/${a.slug}`,lang,article:seed.getSeedLanguageArticle(a.slug,lang)});
 for(const a of environment.seedLanguageEnvironmentArticlesKo) entries.push({kind:'seed-language',route:`/seed-language/${a.slug}`,lang,article:environment.getSeedLanguageEnvironmentArticle(a.slug,lang)});
 for(const a of tax.taxPolicies) entries.push({kind:'tax',route:`/monitoring/tax/${a.slug}`,lang,article:{sources:a.sources,...(a.article ? {intro:a.article.intro[lang],sections:a.article.sections[lang]} : {})}});
 for(const a of taxCommentaries.taxCommentaries) entries.push({kind:'tax-commentary',route:`/monitoring/tax/commentary/${a.slug}`,lang,article:{...taxCommentaries.getTaxCommentaryEdition(a,lang),sources:a.sources}});
 for(const a of watch.publicInterestWatchCases) entries.push({kind:'public-interest',route:`/monitoring/${a.slug}`,lang,article:localizeTree(a,lang)});
 entries.push({kind:'research',route:'/research/community-chest-of-korea',lang,article:research.communityChestResearch[lang]});
 for(const a of legislation.legislativeCommentaries) entries.push({kind:'legislative-commentary',route:`/monitoring/legislation/commentary/${a.slug}`,lang,article:{...legislation.getLegislativeCommentaryEdition(a,lang),sources:a.sources}});
}
const report=[];
const missing=[];
for(const entry of entries) {
 const a=entry.article;
 const registry=cit.createArticleCitations(a.sources,a,entry.lang,a.paragraphLinks?.flatMap(e=>e.links.filter(l=>/^https?:/.test(l.url))));
 const texts=cit.articleTextValues(a);
 let refs=0;
 for (const section of a.sections ?? []) for (const index of section.sourceIndices ?? []) {
  refs++;
  if (!registry.originalSources[index]) missing.push({route:entry.route,lang:entry.lang,token:`sourceIndices[${index}]`});
 }
 for (const group of a.paragraphLinks ?? []) for (const link of group.links) if (cit.isExternalCitationUrl(link.url)) refs++;
 for(const text of texts) for(const match of text.matchAll(cit.citationTokenPattern)) {
  const link=match[0].match(cit.citationLinkPattern);
  if(link && !cit.isExternalCitationUrl(link[2]) && !/^\d+$/.test(link[1]))continue;
  refs++;
  if(!cit.resolveCitationToken(match[0],registry))missing.push({route:entry.route,lang:entry.lang,token:match[0],context:text.slice(Math.max(0,match.index-65),match.index+65)});
 }
 report.push({kind:entry.kind,route:entry.route,lang:entry.lang,references:refs,sources:registry.sources.length});
}
await mkdir('.seed-build',{recursive:true});
await writeFile('.seed-build/article-citations-audit.json',JSON.stringify({articles:report,missing},null,2));
console.log(JSON.stringify({editions:report.length,articlesWithReferences:new Set(report.filter(a=>a.references).map(a=>a.route)).size,references:report.reduce((sum,a)=>sum+a.references,0),byKind:Object.fromEntries([...new Set(report.map(a=>a.kind))].map(k=>[k,report.filter(a=>a.kind===k && a.references).length])),missing},null,2));
if(missing.length)process.exitCode=1;
else console.log("Citation source mapping, bilingual rendering, internal links and shared footer checks passed.");

} finally { await server.close(); }
