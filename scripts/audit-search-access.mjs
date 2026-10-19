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
console.log('Search access audit passed: crawl permissions, sitemap, canonical, HTML content, links, and duplicate aliases.');
