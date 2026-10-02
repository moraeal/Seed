import assert from "node:assert/strict";
import { createServer } from "vite";

const server = await createServer({ configFile: false, appType: "custom", server: { middlewareMode: true, hmr: false }, optimizeDeps: { noDiscovery: true } });
try {
  const { getHotIssueCards, selectHotIssueCards } = await server.ssrLoadModule("/src/data/hotIssueSelection.ts");
  const { getHomeTopic } = await server.ssrLoadModule("/src/data/homeTopics.ts");
  const { getFeaturedContentCandidates } = await server.ssrLoadModule("/src/data/featuredContent.ts");
  const { formatFeaturedDate } = await server.ssrLoadModule("/src/data/featuredHistory.ts");
  const candidates = getFeaturedContentCandidates("ko");
  const picks = [
    candidates.find((item) => item.path === "/columns/citizenization-kimchi-jar-freedom-2026"),
    candidates.find((item) => item.category === "briefing"),
    candidates.find((item) => item.category === "language"),
    candidates.find((item) => item.path.startsWith("/monitoring/tax/")),
    candidates.find((item) => item.path === "/columns/dmz-mine-response-accountability-2026"),
    candidates.find((item) => item.path === "/monitoring/dmz-mine-blast-2026"),
  ];
  assert(picks.every(Boolean), "Fixtures must be real published articles");
  const history = picks.map((item, index) => ({ content_path: item.path, featured_at: `2026-09-${String(20 + index).padStart(2, "0")}T03:00:00Z` }));
  const cards = getHotIssueCards("ko", [], history);
  assert.equal(getHotIssueCards("ko").length, 0, "Unrecorded articles must never fill the list");
  assert.deepEqual(cards.map((card) => card.to), picks.map((item) => item.path).reverse(), "Homepage selection date, not publication date, determines order");
  assert(cards.every((card) => card.id === card.to && card.paths.length === 1), "Link directly to the selected article, never an expanded collection");
  assert(cards.some((card) => card.to.startsWith("/seed-language/")), "Selected glossary articles must qualify");
  assert.equal(cards.filter((card) => getHomeTopic(card.to) === getHomeTopic(picks[4].path)).length, 2, "Distinct selected articles on one topic remain in the archive");
  const reselected = getHotIssueCards("ko", [], [...history, { content_path: picks[0].path, featured_at: "2026-10-02T03:00:00Z" }]);
  assert.equal(reselected[0].to, picks[0].path);
  assert.equal(reselected.length, cards.length, "A repeated selection moves a route instead of duplicating it");
  assert.equal(getHotIssueCards("ko", [], [...history, { content_path: "/columns/missing", featured_at: "2026-10-03T03:00:00Z" }, { content_path: picks[0].path, featured_at: "invalid" }]).length, cards.length, "Unavailable records must be skipped without substituting unrelated articles");
  const selected = selectHotIssueCards(reselected, new Set());
  assert.equal(selected.length, 4);
  assert.deepEqual(selected, reselected.slice(0, 4), "Eligible homepage cards preserve operator selection order");
  const claimedTopics = new Set(reselected.slice(0, 2).map((card) => getHomeTopic(card.to)));
  const eligible = reselected.filter((card) => !claimedTopics.has(getHomeTopic(card.to)));
  const withoutMain = selectHotIssueCards(reselected, claimedTopics);
  assert.deepEqual(withoutMain, eligible.slice(0, 4), "Filter all upper placements before filling homepage slots from later selections");
  assert(withoutMain.every((card) => !claimedTopics.has(getHomeTopic(card.to))), "Main and Hot Issues must not overlap, including linked articles on the same topic");
  assert.deepEqual(selectHotIssueCards(reselected, new Set([getHomeTopic(picks[4].path)])), reselected.filter((card) => getHomeTopic(card.to) !== getHomeTopic(picks[4].path)).slice(0, 4), "A main tracker also excludes its related column");
  assert.deepEqual(getHotIssueCards("ko", [], [...history, { content_path: picks[0].path, featured_at: "2026-10-02T03:00:00Z" }]), reselected, "Homepage filtering never deletes or reorders the complete archive");
  const onlyCurrent = getHotIssueCards("ko", [], [{ content_path: picks[0].path, featured_at: "2026-10-02T00:55:00Z" }]);
  assert.equal(selectHotIssueCards(onlyCurrent, new Set([getHomeTopic(picks[0].path)])).length, 0, "A sole current selection is hidden on the homepage without adding unselected stories");
  assert.equal(selectHotIssueCards(onlyCurrent, new Set()).length, 1, "The selection returns when it is no longer displayed above");
  assert.equal(selected.filter((card) => getHomeTopic(card.to) === getHomeTopic(picks[5].path)).length, 2, "Independently selected articles on one topic keep their archive positions");
  const english = getHotIssueCards("en", [], history);
  assert.deepEqual(english.map((card) => card.id), cards.map((card) => card.id));
  assert.notEqual(english[0].title, cards[0].title, "The same selections must have translated titles");
  assert.equal(formatFeaturedDate("2026-10-01T16:00:00Z"), "2026.10.02", "Feature labels use the journal's Korea calendar");
  const bill = { slug: "selection-check", title: "Verified published bill", review_state: "published", editorial_updated_at: "2026-10-05", analysis: {}, editorial_image: { status: "ready", src: "https://example.org/verified.jpg", alt_ko: "Law illustration", alt_en: "Law illustration", verified_at: "2026-10-02T00:00:00Z" }, public_summary_ko: "A substantive legislative update" };
  assert(!getHotIssueCards("ko", [bill], history).some((card) => card.to.includes("selection-check")), "A fresh unselected bill must stay out");
  const billHistory = [{ content_path: "/monitoring/legislation/selection-check", featured_at: "2026-10-02T00:00:00Z" }];
  assert.equal(getHotIssueCards("ko", [bill], billHistory).length, 1);
  for (const unavailable of [{ ...bill, review_state: "review" }, { ...bill, editorial_image: undefined }, { ...bill, editorial_image: { status: "error" } }]) {
    assert.equal(getHotIssueCards("ko", [unavailable], billHistory).length, 0, "Unpublished or unverified bills must not be promoted");
  }
  console.log("Homepage-history selection checks passed.");
} finally {
  await server.close();
}
