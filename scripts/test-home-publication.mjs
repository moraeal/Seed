import assert from "node:assert/strict";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

const server = await createServer({ configFile: false, appType: "custom", server: { middlewareMode: true },
  ssr: { resolve: { externalConditions: ["node", "module-sync"] } }, optimizeDeps: { noDiscovery: true } });
const flush = () => new Promise(resolve => setImmediate(resolve));
try {
  const { columns } = await server.ssrLoadModule("/src/data/columns.ts");
  const { default: Home } = await server.ssrLoadModule("/src/pages/Home.tsx");
  const { LanguageProvider } = await server.ssrLoadModule("/src/i18n.tsx");
  const { getEditorialSeries } = await server.ssrLoadModule("/src/data/editorialSeries.ts");
  const originalLength = columns.length;
  try {
    const template = columns.find(x => x.slug === "emergency-room-warrant-defensive-medicine-2026") || columns[0];
    const fixture = (slug, issue) => ({ ...template, slug, issue, date: "2099-01-01", series: undefined, subtitle: "" });
    columns.push(fixture("zz-newest-published-article", 9002), fixture("aa-older-published-article", 9001));
    for (const route of ["/", "/en"]) {
      const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [route] },
        React.createElement(LanguageProvider, null, React.createElement(Home))));
      const anchors = [...html.matchAll(/<a\b[^>]+>/g)].map(x => x[0]);
      assert(anchors.some(x => x.includes('/columns/zz-newest-published-article"') && x.includes('class="group block border-y')),
        `${route}: a newly published article must become the illustrated column lead without editing Home`);
      assert(anchors.some(x => x.includes('/columns/aa-older-published-article"') && x.includes('class="group grid')),
        `${route}: the older same-day article must remain in the accompanying list`);
    }
    const china = columns.find(x => x.series?.slug === "china");
    assert(china, "Published series fixture must exist");
    columns.push({ ...china, slug: "china-auto-chapter-13", date: "2099-01-02", issue: 9013, series: { slug: "china", chapter: 13 } },
      { ...china, slug: "china-auto-chapter-14", date: "2099-01-02", issue: 9014, series: { slug: "china", chapter: 14 } });
    for (const language of ["ko", "en"]) assert.equal(getEditorialSeries(language).find(x => x.slug === "china").latest.path,
      "/columns/china-auto-chapter-14", "Same-day series publications must show the later chapter");
  } finally { columns.splice(originalLength); }

  const { watchHomePublication } = await server.ssrLoadModule("/src/lib/homePublicationRefresh.ts");
  const nativeFetch = globalThis.fetch;
  const windowEvents = new Map(), documentEvents = new Map();
  const reloads = [], requests = [];
  let interval, responseEntry = "/assets/index-current.js", failure = false, deferred;
  globalThis.window = {
    location: { origin: "https://seedvoice.kr", href: "https://seedvoice.kr/en/?source=test#columns", replace: url => reloads.push(url) },
    setInterval: fn => { interval = fn; return 1; }, clearInterval: () => { interval = undefined; },
    addEventListener: (key, fn) => windowEvents.set(key, fn), removeEventListener: key => windowEvents.delete(key),
  };
  globalThis.document = {
    visibilityState: "visible", querySelector: () => ({ src: "https://seedvoice.kr/assets/index-current.js" }),
    addEventListener: (key, fn) => documentEvents.set(key, fn), removeEventListener: key => documentEvents.delete(key),
  };
  globalThis.fetch = async (url, options) => {
    requests.push({ url, options });
    if (deferred) await deferred;
    if (failure) throw new Error("offline");
    return { ok: true, json: async () => ({ entry: responseEntry }) };
  };
  try {
    let stop = watchHomePublication();
    await flush();
    assert.equal(reloads.length, 0, "Unchanged deployment must not reload");
    assert.equal(requests[0].options.cache, "no-store");
    assert.match(requests[0].url, /^\/publication-version.json\?t=\d+$/);
    document.visibilityState = "hidden";
    interval(); await flush();
    assert.equal(requests.length, 1, "Hidden tabs must not poll");
    document.visibilityState = "visible";
    failure = true;
    await windowEvents.get("focus")();
    assert.equal(reloads.length, 0, "Network failures preserve the working page");
    failure = false;
    responseEntry = "https://example.com/untrusted.js";
    await interval();
    assert.equal(reloads.length, 0, "Malformed or foreign manifests cannot trigger navigation");
    responseEntry = "/assets/index-new.js";
    document.activeElement = { matches: () => true };
    await interval();
    assert.equal(reloads.length, 0, "Form input must not be interrupted by a deployment refresh");
    document.activeElement = null;
    await documentEvents.get("visibilitychange")();
    assert.equal(reloads.length, 1, "A new deployment refreshes an open homepage");
    const target = new URL(reloads[0]);
    assert.equal(target.pathname, "/en/");
    assert.equal(target.searchParams.get("source"), "test");
    assert(target.searchParams.has("seed-reload"), "Navigation must bypass cached HTML");
    assert.equal(target.hash, "#columns");
    await interval();
    assert.equal(reloads.length, 1, "A pending reload must not repeat");
    stop();
    assert.equal(windowEvents.size + documentEvents.size, 0, "Unmount removes event listeners");
    assert.equal(interval, undefined, "Unmount clears polling");
    let resolve;
    deferred = new Promise(done => { resolve = done; });
    const before = requests.length;
    stop = watchHomePublication();
    interval(); windowEvents.get("focus")();
    assert.equal(requests.length, before + 1, "Concurrent events share one in-flight check");
    stop(); resolve(); await flush();
    assert.equal(reloads.length, 1, "A response after unmount must not reload");
    assert(requests.at(-1).options.signal.aborted);
  } finally {
    globalThis.fetch = nativeFetch;
    delete globalThis.window;
    delete globalThis.document;
  }
  console.log("Automatic publication, same-day ordering, bilingual series and open-homepage refresh checks passed.");
} finally { await server.close(); }
