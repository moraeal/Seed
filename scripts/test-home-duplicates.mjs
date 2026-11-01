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
  plugins: [{
    name: "test-featured-content-loading",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith("/src/hooks/useFeaturedContent.ts")) return;
      return `import snapshot from "/src/data/homeSnapshot.json";
        let ready = false;
        let fixtureHistory = null;
        export function setFixtureReady(value) { ready = value; }
        export function setFixtureHistory(value) { fixtureHistory = value; }
        export function useFeaturedContent() {
          return { featuredPath: snapshot.featuredPath, history: fixtureHistory ?? snapshot.history, ready, historyError: false };
        }`;
    },
  }],
  ssr: { resolve: { externalConditions: ["node", "module-sync"] } },
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const { setFixtureReady, setFixtureHistory } = await server.ssrLoadModule("/src/hooks/useFeaturedContent.ts");
  const { default: Home } = await server.ssrLoadModule("/src/pages/Home.tsx");
  const { LanguageProvider } = await server.ssrLoadModule("/src/i18n.tsx");
  const { canonicalHomePath, getHomeTopic, claimHomeStories } = await server.ssrLoadModule("/src/data/homeTopics.ts");
  const { selectHotIssueCards } = await server.ssrLoadModule("/src/data/hotIssueSelection.ts");
  const { selectNewsTrackingCards } = await server.ssrLoadModule("/src/data/newsTracking.ts");
  const { selectLatestCivicWatchItems } = await server.ssrLoadModule("/src/data/civicWatchFeed.ts");
  const { selectHomeCommentaries } = await server.ssrLoadModule("/src/data/homeCommentarySelection.ts");
  const { farmlandSpecialActCommentary } = await server.ssrLoadModule("/src/data/farmlandSpecialActCommentary.ts");
  const { getEditorialSeries } = await server.ssrLoadModule("/src/data/editorialSeries.ts");
  const { columns, getColumnsNewestFirst } = await server.ssrLoadModule("/src/data/columns.ts");
  const { selectHomeStandaloneColumns } = await server.ssrLoadModule("/src/data/homeColumnSelection.ts");


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

  // Reproduce the fully loaded homepage: a related farmland tracker is
  // already visible before the newer legislative commentary is selected.
  const farmlandPath = `/monitoring/legislation/commentary/${farmlandSpecialActCommentary.slug}`;
  const farmlandTracker = "/monitoring/farmland-census-disposal-orders-tracker";
  assert.equal(getHomeTopic(farmlandPath), getHomeTopic(farmlandTracker));
  const commentaryFixtures = [{ to: farmlandPath }, { to: `/en${farmlandPath}/?ref=duplicate` }, { to: "/monitoring/legislation/commentary/another" }];
  assert.deepEqual(selectHomeCommentaries(commentaryFixtures, new Set([farmlandTracker]), 3).map((item) => item.to),
    [farmlandPath, commentaryFixtures[2].to],
    "A related tracker must not hide a distinct commentary after loading; aliases still deduplicate");
  assert.deepEqual(selectHomeCommentaries(commentaryFixtures, new Set([`/en${farmlandPath}/`]), 3).map((item) => item.to),
    [commentaryFixtures[2].to], "The same article displayed above must remain excluded");
  assert.equal(selectHomeCommentaries(commentaryFixtures, new Set(), 0).length, 0);

  // A new published chapter automatically leaves the standalone homepage
  // column desk even if it is not the most recently published series chapter.
  const standaloneFixtures = [
    { slug: "series-chapter-1" },
    { slug: "series-chapter-2" },
    { slug: "standalone-1" },
    { slug: "standalone-2" },
    { slug: "standalone-3" },
  ];
  const serializedFixtures = [{ chapters: [
    { path: "/columns/series-chapter-1" },
    { path: "/en/columns/series-chapter-2/?ref=series" },
  ] }];
  assert.deepEqual(
    selectHomeStandaloneColumns(standaloneFixtures, serializedFixtures, new Set(), 2).map((c) => c.slug),
    ["standalone-1", "standalone-2"],
    "Published series chapters must never take slots in the homepage column desk",
  );
  assert.deepEqual(
    selectHomeStandaloneColumns(standaloneFixtures, serializedFixtures, new Set([getHomeTopic("/columns/standalone-1")]), 2).map((c) => c.slug),
    ["standalone-2", "standalone-3"],
    "Excluded chapters and claimed articles must be skipped before limiting",
  );
  assert.equal(standaloneFixtures.length, 5, "Filtering cannot delete published column records");

  // The carousel intentionally adds off-screen DOM clones for wraparound;
  // these are one desk, not repeat placements. Deduplicate within a section,
  // then reject any article identity found in another homepage section.
  const isArticle = (path) =>
    /^\/(?:columns|briefings|news|seed-language)\/[^/]+$/.test(path) ||
    /^\/monitoring\/(?:[^/]+\/)*[^/]+$/.test(path);
  // A historical selection on the same topic used to swallow a new follow-up
  // from every desk after the live featured history finished loading.
  const followUp = columns.find(x => x.slug === "emergency-room-warrant-defensive-medicine-2026");
  assert(followUp);
  const publicationDate = followUp.date;
  try {
    followUp.date = "2099-01-01";
    setFixtureReady(true);
    setFixtureHistory([{ content_path: "/columns/politics-abandon-devotion-conviction-2026", featured_at: "2099-01-02T00:00:00+09:00" }]);
    for (const route of ["/", "/en"]) {
      const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [route] },
        React.createElement(LanguageProvider, null, React.createElement(Home))));
      const desk = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].find(x => x[0].includes('>COLUMNS</p>') && !x[0].includes('home-today-section'))?.[0];
      assert(desk?.includes(`/columns/${followUp.slug}`), `${route}: an older historical selection must not hide a new follow-up from the column desk`);
      const hot = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].find(x => x[0].includes('id="hot-issues-title"'))?.[0];
      assert(!hot?.includes('/columns/politics-abandon-devotion-conviction-2026'), `${route}: the historical carousel must yield the claimed topic`);
    }
  } finally { followUp.date = publicationDate; setFixtureHistory(null); }
  for (const ready of [false, true]) {
    setFixtureReady(ready);
  for (const route of ["/", "/en"]) {
    const html = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: [route] },
        React.createElement(LanguageProvider, null, React.createElement(Home))));
    const sections = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)];
    assert(sections.length >= 6, "Homepage sections must render");

    // Series cards display an actual chapter headline without linking directly
    // to its article. Checking article hrefs alone misses that visible repeat.
    const language = route === "/" ? "ko" : "en";
    const series = getEditorialSeries(language);
    const serializedPaths = new Set(series.flatMap((item) =>
      item.chapters.map((chapter) => canonicalHomePath(chapter.path)),
    ));
    assert(serializedPaths.size > 0, `${route}: expected published editorial series chapters`);
    assert(getColumnsNewestFirst().some((column) =>
      serializedPaths.has(`/columns/${column.slug}`)),
      `${route}: regression scenario must contain series chapters in the full columns archive`);
    const columnsSection = sections.find((section) => section[0].includes('>COLUMNS</p>') && !section[0].includes('home-today-section'));
    assert(columnsSection, `${route}: standalone column desk must exist`);
    const renderedColumns = [...columnsSection[0].matchAll(/<a\b[^>]*href="([^"]+)"/g)]
      .map((match) => canonicalHomePath(match[1]))
      .filter((path) => /^\/columns\/[^/]+$/.test(path));
    assert(renderedColumns.length >= 3, `${route}: excluding series must preserve a useful standalone column desk`);
    assert(renderedColumns.every((path) => !serializedPaths.has(path)),
      `${route}: serialized article repeated in standalone columns: ${renderedColumns.filter((path) => serializedPaths.has(path)).join(", ")}`);
    const seriesSection = sections.find((section) => section[0].includes('id="editorial-series-title"'));
    assert(seriesSection && seriesSection[0].includes('href="/series/'),
      `${route}: editorial series navigation must remain available`);

    const civicSection = sections.find((section) => section[0].includes('id="recent-civic-watch-title"'));
    assert(civicSection, `${route}: civic-watch desk must exist`);
    const commentaryLinks = [...civicSection[0].matchAll(/<a\b[^>]*href="[^"]*\/monitoring\/legislation\/commentary\/[^"/]+"[^>]*>[\s\S]*?<\/a>/g)];
    assert(commentaryLinks.length > 0, `${route}: legislative commentaries must remain visible`);
    for (const [link] of commentaryLinks) {
      assert(link.includes('<img') && link.includes(language === "ko" ? "입법 논평" : "LEGISLATIVE"),
        `${route}: legislative commentary must use the illustrated commentary row`);
      assert(!link.includes(language === "ko" ? "기록 보기" : "View record"),
        `${route}: legislative commentary must not appear as a monitoring record`);
    }

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
    console.log(`${route} (${ready ? "loaded" : "loading"}): ${checked} distinct article placements across ${sections.length} sections; no repeats`);
  }
  }
  console.log("Homepage article deduplication regression checks passed.");
} finally {
  await server.close();
}
