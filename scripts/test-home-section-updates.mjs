import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
const server = await createServer({ configFile: false, ssr: { resolve: { externalConditions: ['node', 'module-sync'] } }, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
try {
  const { default: Home } = await server.ssrLoadModule('/src/pages/Home.tsx');
  const { LanguageProvider } = await server.ssrLoadModule('/src/i18n.tsx');
  const source = await readFile('src/pages/Home.tsx', 'utf8');
  assert(!source.includes('latestArticles.map'), 'An all-category feed must not reserve existing section slots');
  for (const route of ['/', '/en']) {
    const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(LanguageProvider, null, React.createElement(Home))));
    assert(!html.includes('latest-articles-title'), 'Separate latest-articles section must be absent');
    const sections = html.split('<section');
    const briefings = sections.find(x => x.includes('>BRIEFINGS<'));
    const watch = sections.find(x => x.includes('id="recent-civic-watch-title"'));
    assert(watch?.includes('/briefings/youth-rent-tax-credit-20-percent-bill-2222071'), 'New tax explainer must appear in the existing civic watch desk');
    assert(briefings?.includes('/briefings/'), 'Existing briefing desk must retain its own articles');
    assert(watch?.includes('/news/crypto-tax-fourth-deferral-2026'), 'New tax news must appear in the existing civic watch desk');
    assert(html.includes('id="hot-issues-title"') && html.includes('id="news-tracking-title"'), 'Existing carousels must remain');
    console.log(`${route}: existing desks include new articles; separate feed absent`);
  }
} finally { await server.close(); }
