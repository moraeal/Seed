import assert from 'node:assert/strict';
import { createHash, webcrypto } from 'node:crypto';
import { createHandler } from '../supabase/functions/facebook-chat-worker/worker.mjs';

const dispatch = 'a'.repeat(64);
const dispatchHash = createHash('sha256').update(dispatch).digest('hex');
const id = '11111111-2222-3333-4444-555555555555';
const post = '1438854115971733_12345';
const env = {
  SUPABASE_URL: 'https://example.test', SUPABASE_SERVICE_ROLE_KEY: 'test-service',
  FACEBOOK_PAGE_ID: '1438854115971733', FACEBOOK_PAGE_ACCESS_TOKEN: 'test-page-token',
};
const response = (data, status = 200) => new Response(JSON.stringify(data), { status });
let tests = 0;
async function run({ action = 'check', jobChanges = {}, graphError = false, graphStatus = 200, graphData, authorization = `Bearer ${dispatch}`, emptyClaim = false, envChanges = {}, expectedStatus = 200, expectedGraph = 1, expectedJobStatus = 'succeeded' } = {}) {
  const finishes = [];
  let graphCalls = 0;
  const fetchImpl = async (url, options = {}) => {
    const target = String(url);
    if (target.includes('seed_facebook_chat_auth')) return response([{ token_hash: dispatchHash }]);
    if (target.includes('seed_facebook_chat_jobs')) {
      assert.equal(options.headers.Authorization, 'Bearer test-service');
      const body = JSON.parse(options.body);
      if (body.status === 'processing') return response(emptyClaim ? [] : [{ id, action, message: 'Approved test', post_id: post, link: null, approved: true, ...jobChanges }]);
      finishes.push(body);
      return new Response(null, { status: 204 });
    }
    assert(target.startsWith('https://graph.facebook.com/v25.0/'));
    assert(!target.includes('test-page-token'));
    assert.equal(options.headers.Authorization, 'Bearer test-page-token');
    assert.equal(options.method, action === 'check' ? 'GET' : action === 'delete' ? 'DELETE' : 'POST');
    graphCalls++;
    if (graphError) throw new TypeError('network interruption containing test-page-token');
    return response(graphData ?? (action === 'check' ? { id: env.FACEBOOK_PAGE_ID, name: '씨앗의 소리' } : action === 'create' ? { id: post } : { success: true }), graphStatus);
  };
  const handler = createHandler({ env: { ...env, ...envChanges }, fetchImpl, cryptoImpl: webcrypto });
  const result = await handler(new Request('https://worker.test', {
    method: 'POST', headers: { authorization, 'Content-Type': 'application/json' }, body: JSON.stringify({ job_id: id }),
  }));
  assert.equal(result.status, expectedStatus);
  assert.equal(graphCalls, expectedGraph);
  if (finishes.length) assert.equal(finishes.at(-1).status, expectedJobStatus);
  const output = await result.text();
  assert(!output.includes('test-page-token'));
  assert(!JSON.stringify(finishes).includes('test-page-token'));
  tests++;
}
for (const action of ['check', 'create', 'update', 'delete']) await run({ action });
await run({ authorization: '', expectedStatus: 401, expectedGraph: 0 });
await run({ authorization: 'Bearer ' + 'b'.repeat(64), expectedStatus: 401, expectedGraph: 0 });
await run({ jobChanges: { approved: false }, expectedStatus: 400, expectedGraph: 0, expectedJobStatus: 'failed' });
await run({ action: 'delete', jobChanges: { post_id: '999_12345' }, expectedStatus: 400, expectedGraph: 0, expectedJobStatus: 'failed' });
await run({ action: 'create', jobChanges: { link: 'http://example.test' }, expectedStatus: 400, expectedGraph: 0, expectedJobStatus: 'failed' });
await run({ emptyClaim: true, expectedGraph: 0 });
await run({ envChanges: { FACEBOOK_PAGE_ACCESS_TOKEN: '••••' }, expectedStatus: 503, expectedGraph: 0, expectedJobStatus: 'failed' });
await run({ action: 'create', graphError: true, expectedStatus: 502, expectedJobStatus: 'uncertain' });
await run({ action: 'create', graphStatus: 500, graphData: { error: { code: 2 } }, expectedStatus: 502, expectedJobStatus: 'uncertain' });
await run({ graphStatus: 400, graphData: { error: { code: 190 } }, expectedStatus: 502, expectedJobStatus: 'failed' });
await run({ action: 'create', graphData: { id: '999_12345' }, expectedStatus: 502, expectedJobStatus: 'uncertain' });
console.log(`${tests} Facebook chat worker checks passed`);
