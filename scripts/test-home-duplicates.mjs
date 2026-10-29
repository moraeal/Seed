import assert from "node:assert/strict";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

// This is a publication gate, not a presentation snapshot. It checks the
// actual homepage's article destinations in both locales, then verifies the
// selectors with duplication/route-alias fixtures.
const server = await createServer({
  configFile: false,
  ssr: { resolve: { externalConditions: ["node", "module-sync"] } },
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const { default: Home } = await server.ssrLoadModule("/src/pages/Home.tsx");
  const { LanguageProvider } = await server.ssrLoadModule("/src/i18n.tsx");
  const { canonicalHomePath, getHomeTopic, claimHomeStories } = await server.ssrLoadModule("/src/data/homeTopics.ts");
  const { selectHotIssueCards } = await server.ssrLoadModule("/src/data/hotIssueSelection.ts");
  const { selectNewsTrackingCards } = await server.ssrLoadModule("/src/data/newsTracking.ts");
  const { selectLatestCivicWatchItems } = await server.ssrLoadModule("/src/data/civicWatchFeed.ts");

  assert.equal(canonicalHomePath("/en/columns/example/?utm_source=test#top"), "/columns/example");
  assert.equal(getHomeTopic("/en/news/olympic-park-protest-115-days/"),
    getHomeTopic("/monitoring/olympic-park-election-protest-tracker"),
    "Topic aliases must converge before selecting homepage cards");

  const fixtures = [
    { to: "/news/olympic-park-protest-115-days", date: "2026-10-29" },
    { to: "/monitoring/olympic-park-election-protest-tracker", date: "2026-10-28" },
    { to: "/news/olympic-park-protest-115-days/?source=carousel", date: "2026-10-27" },
    { to: "/news/unrelated-test", date: "2026-10-26" },
  ];
  assert.deepEqual(
    claimHomeStories(fixtures, (item) => item.to, new Set(), 8).map((item) => item.to),
    [fixtures[0].to, fixtures[3].to],
    "Shared claim registry must select only the first eligible story per topic");
  assert.equal(claimHomeStories(fixtures, (item) => item.to, new Set(), 0).length, 0);

  const selectedHot = selectHotIssueCards(fixtures, new Set(), 8);
  assert.deepEqual(selectedHot.map((item) => item.to), [fixtures[0].to, fixtures[3].to],
    "Hot-issues carousel must deduplicate before applying its limit");
  const selectedTrackers = selectNewsTrackingCards(fixtures, new Set(), 8);
  assert.deepEqual(selectedTrackers.map((item) => item.to), [fixtures[0].to, fixtures[3].to],
    "Tracking carousel must use the same registry");
  const civic = fixtures.map((item, i) => ({
    ...item, key: String(i), category: "issue",
    updatedAt: item.date, title: item.to, summary: "", status: "",
  }));
  assert.deepEqual(selectLatestCivicWatchItems(civic, new Set(), 8).map((item) => item.to),
    [fixtures[0].to, fixtures[1].to, fixtures[3].to],
    "Distinct articles on a shared topic remain eligible in the civic-watch desk");
  assert.deepEqual(selectLatestCivicWatchItems(civic, new Set(["/en/news/olympic-park-protest-115-days/"]), 8).map((item) => item.to),
    [fixtures[1].to, fixtures[3].to], "Civic-watch exclusions must canonicalize aliases");

  // The carousel intentionally adds off-screen DOM clones for wraparound;
  // these are one desk, not repeat placements. Deduplicate within a section,
  // then reject any article identity found in another homepage section.
  const isArticle = (path) =>
    /^\/(?:columns|briefings|news|seed-language)\/[^/]+$/.test(path) ||
    /^\/monitoring\/(?:[^/]+\/)*[^/]+$/.test(path);
  for (const route of ["/", "/en"]) {
    const html = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: [route] },
        React.createElement(LanguageProvider, null, React.createElement(Home))));
    const sections = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)];
    assert(sections.length >= 6, "Homepage sections must render");
    const seen = new Map();
    let checked = 0;
    for (const [sectionIndex, match] of sections.entries()) {
      const articleLinks = [...match[0].matchAll(/<a\b[^>]*href="([^"]+)"/g)]
        .map((entry) => canonicalHomePath(entry[1])).filter(isArticle);
      for (const path of new Set(articleLinks)) {
        assert(!seen.has(path),
          `${route}: duplicate homepage article ${path}, section ${seen.get(path)} and ${sectionIndex}`);
        seen.set(path, sectionIndex);
        checked += 1;
      }
    }
    assert(checked >= 8, `${route}: homepage inventory unexpectedly sparse (${checked})`);
    console.log(`${route}: ${checked} distinct article placements across ${sections.length} sections; no repeats`);
  }
  console.log("Homepage article deduplication regression checks passed.");
} finally {
  await server.close();
}
