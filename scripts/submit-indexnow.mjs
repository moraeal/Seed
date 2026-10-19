import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const host = 'seedvoice.kr';
const key = '90ca15f2bb28a24058cec5f0340a3cab';
const origin = 'https://' + host;
const keyLocation = origin + '/' + key + '.txt';
const urlList = [
  origin + '/',
  origin + '/civic-campaign/',
  origin + '/tax-watch-movement/',
  origin + '/about/',
  origin + '/columns/',
  origin + '/columns/no-more-tax-increases-civic-declaration-2026/',
  origin + '/briefings/korean-civic-tax-watch-movement-ktr/',
];

const localKey = (await readFile(path.join(root, 'public', key + '.txt'), 'utf8')).trim();
if (localKey !== key) throw new Error('IndexNow ownership file does not match the configured key');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function assertPublished(url, acceptsContent, attempts = 6) {
  let lastError = 'unknown';
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(12000),
        headers: { 'User-Agent': 'SeedVoiceIndexNowRegistration/1.0' },
      });
      const body = await res.text();
      if (res.ok && acceptsContent(body)) {
        console.log('[Public accessibility] HTTP ' + res.status + ': ' + url);
        return;
      }
      lastError = 'HTTP ' + res.status + ' or unexpected content';
    } catch (e) {
      lastError = String(e?.message || e);
    }
    if (i < attempts - 1) await sleep(5000);
  }
  throw new Error('Could not verify public URL ' + url + ': ' + lastError);
}

try {
  // IndexNow ownership can only be established when the public key file
  // is actually served by the deployed domain.
  await assertPublished(keyLocation, (body) => body.trim() === key);
  await assertPublished(origin + '/robots.txt', (body) => body.includes('Sitemap: ' + origin + '/sitemap.xml'));
  await assertPublished(origin + '/sitemap.xml', (body) => body.includes(origin + '/civic-campaign/') && body.includes(origin + '/tax-watch-movement/'));
  await assertPublished(origin + '/civic-campaign/', (body) => body.includes('증세반대운동') && body.includes('씨앗의 소리'));
  await assertPublished(origin + '/about/', (body) => body.includes('href="https://seedvoice.kr/civic-campaign/"'));
  await assertPublished(origin + '/columns/', (body) => body.includes('href="https://seedvoice.kr/civic-campaign/"'));
} catch (error) {
  console.error('::warning::IndexNow submission skipped because the site could not be verified: ' + error.message);
  process.exitCode = 1;
  process.exit();
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  signal: AbortSignal.timeout(20000),
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'User-Agent': 'SeedVoiceIndexNowRegistration/1.0' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});
const reply = (await response.text()).slice(0, 1200);
console.log('[IndexNow] status=' + response.status + ' URLs=' + urlList.length + ' response=' + reply);
if (![200, 202].includes(response.status)) {
  console.error('::warning::IndexNow did not accept the URLs; check response before claiming submission.');
  process.exitCode = 1;
} else {
  console.log('[IndexNow] Search engines were notified. This is not confirmation of indexing.');
}
