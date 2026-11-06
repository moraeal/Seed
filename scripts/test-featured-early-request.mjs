import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", optimizeDeps: { noDiscovery: true } });
const oldWindow = globalThis.window;
const oldFetch = globalThis.fetch;
try {
  const html = await server.transformIndexHtml("/", await readFile("index.html", "utf8"));
  const earlyScript = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
    .map(match => match[1]).find(source => source.includes("__seedFeaturedRequest"));
  assert(earlyScript, "The early request must be in the initial HTML");
  assert(html.indexOf("__seedFeaturedRequest") < html.indexOf('src="/src/main.tsx"'), "Request must start before the application");
  let resolveFetch;
  const calls = [];
  const fetchStub = (url, options) => {
    calls.push({ url, options });
    return new Promise(resolve => { resolveFetch = resolve; });
  };
  const browserWindow = {};
  vm.runInNewContext(earlyScript, { location: { pathname: "/" }, window: browserWindow, fetch: fetchStub, AbortSignal });
  assert.equal(calls.length, 1, "The selection request starts immediately");
  assert.equal(calls[0].options.cache, "no-store");
  vm.runInNewContext(earlyScript, { location: { pathname: "/columns/example" }, window: {}, fetch: fetchStub, AbortSignal });
  assert.equal(calls.length, 1, "Article pages must not request a homepage selection");
  globalThis.window = browserWindow;
  globalThis.fetch = fetchStub;
  const { getFeaturedContentPath } = await server.ssrLoadModule("/src/lib/featuredContent.ts");
  const first = getFeaturedContentPath();
  const second = getFeaturedContentPath();
  assert.equal(calls.length, 1, "Concurrent mounts must reuse the early request");
  resolveFetch({ ok: true, json: async () => [{ content_path: "/columns/current" }] });
  assert.deepEqual(await Promise.all([first, second]), ["/columns/current", "/columns/current"]);
  const refresh = getFeaturedContentPath();
  assert.equal(calls.length, 2, "A later refresh must request a fresh selection");
  resolveFetch({ ok: false, status: 503 });
  await assert.rejects(refresh, /503/, "A server error must reach the existing fallback");
  const retry = getFeaturedContentPath();
  assert.equal(calls.length, 3, "A failed request must not prevent retry");
  resolveFetch({ ok: true, json: async () => [{ content_path: "/columns/new" }] });
  assert.equal(await retry, "/columns/new");
  console.log("Early selection, shared request, server failure and retry checks passed.");
} finally {
  globalThis.window = oldWindow;
  globalThis.fetch = oldFetch;
  await server.close();
}
