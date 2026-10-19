import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const readOutput = (name) => readFile(path.join(dist, name), 'utf8');

const [robots, sitemap, campaign, movement, homepage, oldPath, internalSearch] = await Promise.all([
  'robots.txt',
  'sitemap.xml',
  'civic-campaign/index.html',
  'tax-watch-movement/index.html',
  'index.html',
  'tax-watch-cases/index.html',
  'search/index.html',
].map(readOutput));

for (const agent of ['OAI-SearchBot', 'Googlebot', 'bingbot', '*']) {
  assert.ok(robots.includes(`User-agent: ${agent}\nAllow: /`), `${agent} must be permitted`);
}
assert.ok(robots.includes('Sitemap: https://seedvoice.kr/sitemap.xml'), 'Main sitemap must be advertised');
assert.ok(robots.includes('Sitemap: https://seedvoice.kr/news-sitemap.xml'), 'News sitemap must be advertised');

for (const route of ['civic-campaign', 'tax-watch-movement']) {
  assert.ok(sitemap.includes(`<loc>https://seedvoice.kr/${route}/</loc>`), `Sitemap missing ${route}`);
}
assert.ok(!sitemap.includes('<loc>https://seedvoice.kr/tax-watch-cases/</loc>'), 'Legacy alias must not appear in sitemap');
assert.match(campaign, /<meta name="robots" content="index, follow, max-image-preview:large"/);
assert.match(campaign, /<link rel="canonical" href="https:\/\/seedvoice\.kr\/civic-campaign\/"/);
assert.ok(campaign.includes('씨앗의 소리(Seed Voice)'), 'Campaign must identify its publisher in crawlable HTML');
assert.ok(campaign.includes('2026 증세반대운동'), 'Campaign must describe the movement in crawlable HTML');
assert.ok(campaign.includes('세금감시운동 활동과 기록'), 'Campaign must link to activity records');
assert.match(movement, /<meta name="robots" content="index, follow, max-image-preview:large"/);
assert.ok(movement.includes('https://seedvoice.kr/civic-campaign/'), 'Movement archive must link to the campaign in crawlable HTML');
assert.ok(homepage.includes('href="/civic-campaign"'), 'Homepage must link to campaign');
assert.ok(homepage.includes('href="/tax-watch-movement"'), 'Homepage must link to movement archive');
assert.match(oldPath, /<meta name="robots" content="noindex, follow"/);
assert.match(internalSearch, /<meta name="robots" content="noindex, follow"/);
// Both pages must carry exactly one valid JSON-LD graph that matches public content.
function parseGraph(html, label) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, label + ': expected one JSON-LD script');
  const data = JSON.parse(scripts[0][1]);
  assert.equal(data['@context'], 'https://schema.org');
  assert.ok(Array.isArray(data['@graph']), label + ': @graph must be an array');
  return data['@graph'];
}
const orgId = 'https://seedvoice.kr/#organization';
const siteId = 'https://seedvoice.kr/#website';
const campaignUrl = 'https://seedvoice.kr/civic-campaign/';
const movementUrl = 'https://seedvoice.kr/tax-watch-movement/';
const campaignGraph = parseGraph(campaign, 'campaign');
const campaignPage = campaignGraph.find((node) => node['@type'] === 'WebPage');
const campaignThing = campaignGraph.find((node) => node['@type'] === 'Thing');
const campaignBreadcrumb = campaignGraph.find((node) => node['@type'] === 'BreadcrumbList');
assert.ok(campaignPage && campaignThing && campaignBreadcrumb, 'campaign entities are required');
assert.equal(campaignPage.url, campaignUrl);
assert.equal(campaignPage.publisher['@id'], orgId);
assert.equal(campaignPage.isPartOf['@id'], siteId);
assert.equal(campaignPage.mainEntity['@id'], campaignThing['@id']);
assert.equal(campaignThing.url, campaignUrl);
assert.ok(campaignThing.description.includes('씨앗의 소리(Seed Voice)'));
assert.ok(campaignThing.description.includes('No More Tax'));
assert.ok(campaign.includes('씨앗의 소리(Seed Voice)'), 'campaign description must be visible to readers');
assert.ok(campaignPage.relatedLink.includes(movementUrl));
assert.equal(campaignBreadcrumb.itemListElement.at(-1).item, campaignUrl);
assert.ok(!campaignGraph.some((node) => node['@type'] === 'NGO' || node['@type'] === 'Event'), 'campaign is not represented as a separate NGO or event');

const archiveGraph = parseGraph(movement, 'movement');
const archivePage = archiveGraph.find((node) => node['@type'] === 'CollectionPage');
const archiveList = archiveGraph.find((node) => node['@type'] === 'ItemList');
const archiveBreadcrumb = archiveGraph.find((node) => node['@type'] === 'BreadcrumbList');
assert.ok(archivePage && archiveList && archiveBreadcrumb, 'movement archive entities are required');
assert.equal(archivePage.url, movementUrl);
assert.equal(archivePage.publisher['@id'], orgId);
assert.equal(archivePage.isPartOf['@id'], siteId);
assert.equal(archivePage.about['@id'], campaignThing['@id']);
assert.equal(archivePage.mainEntity['@id'], archiveList['@id']);
assert.ok(archivePage.relatedLink.includes(campaignUrl));
assert.ok(archiveList.numberOfItems > 0, 'movement archive must have published entries');
assert.equal(archiveList.numberOfItems, archiveList.itemListElement.length);
for (const [index, item] of archiveList.itemListElement.entries()) {
  assert.equal(item.position, index + 1);
  assert.ok(item.item.url.startsWith('https://seedvoice.kr/'));
  assert.ok(movement.includes('href="' + item.item.url + '"'), 'indexed entry must be present in crawler-visible HTML: ' + item.item.url);
}
assert.equal(archiveBreadcrumb.itemListElement.at(-1).item, movementUrl);
console.log('Campaign structured data audit passed: publisher, campaign, links, breadcrumbs and visible article listing.');

// The main search entry points must link to the actual campaign in static,
// indexable HTML rather than relying on client-side JavaScript for discovery.
const [aboutHtml, columnsHtml] = await Promise.all([
  readOutput('about/index.html'),
  readOutput('columns/index.html'),
]);
for (const [route, html] of [['about', aboutHtml], ['columns', columnsHtml]]) {
  assert.ok(html.includes('<link rel="canonical" href="https://seedvoice.kr/' + route + '/"'), route + ': canonical mismatch');
  assert.ok(html.includes('<meta name="robots" content="index, follow, max-image-preview:large"'), route + ': page not indexable');
  assert.ok(html.includes('href="https://seedvoice.kr/civic-campaign/"'), route + ': missing static campaign link');
  assert.ok(html.includes('href="https://seedvoice.kr/tax-watch-movement/"'), route + ': missing static movement link');
  assert.ok(html.includes('No More Tax'), route + ': campaign context missing from static HTML');
}
console.log('Campaign discovery audit passed: About and Columns contain crawlable official campaign and activity links.');

console.log('Search access audit passed: crawl permissions, sitemap, canonical, HTML content, links, and duplicate aliases.');
