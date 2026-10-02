import assert from "node:assert/strict";
import { createServer } from "vite";

const server = await createServer({ configFile: false, appType: "custom", server: { middlewareMode: true, hmr: false }, optimizeDeps: { noDiscovery: true } });
try {
  const { getHotIssueCards, selectHotIssueCards } = await server.ssrLoadModule("/src/data/hotIssueSelection.ts");
  const { getHomeTopic } = await server.ssrLoadModule("/src/data/homeTopics.ts");
  const { getHotIssueClusters, getHotIssueClusterForArticle } = await server.ssrLoadModule("/src/data/hotIssueClusters.ts");
  const { getFeaturedContentCandidates } = await server.ssrLoadModule("/src/data/featuredContent.ts");
  const cards = getHotIssueCards("ko");
  assert(cards.some((card) => card.to === "/columns/civic-groups-audit-lawmakers-evaluation-criteria-2026"), "New public-interest columns must enter the pool");
  assert(cards.some((card) => card.to === "/columns/factory-investment-staffing-freedom-2026"), "Ordinary current-issue columns must enter the pool");
  assert(cards.some((card) => card.to.startsWith("/briefings/")), "Briefings must enter the pool");
  assert(cards.some((card) => card.to.startsWith("/monitoring/tax/")), "Tax watch must enter the pool");
  assert(!cards.some((card) => card.to.includes("the-day-i-did-not-post-a-photo") || card.to.startsWith("/seed-language/")), "Poems and glossary entries belong in their own sections");
  const dmz = cards.find((card) => card.id === "dmz-blast-investigation");
  assert(dmz.updatedAt >= "2026-09-30", "The September 30 follow-up must refresh the old September 28 collection");
  assert(dmz.paths.includes("/monitoring/dmz-mine-blast-2026") && dmz.paths.includes("/columns/dmz-mine-response-accountability-2026"), "Tracker and commentary must join the same collection");
  assert.equal(getHotIssueClusterForArticle("column", "dmz-mine-response-accountability-2026", "ko")?.id, dmz.id, "New follow-ups must link back to their collection");
  const candidates = getFeaturedContentCandidates("ko");
  const nextDate = new Date(Date.parse(`${cards[0].updatedAt.slice(0, 10)}T00:00:00Z`) + 86400000).toISOString().slice(0, 10);
  const futureDmz = { ...candidates.find((item) => item.path === "/columns/dmz-mine-response-accountability-2026"), date: nextDate, summary: "A verified new development" };
  const refreshedDmz = getHotIssueClusters("ko", [futureDmz]).find((cluster) => cluster.id === dmz.id);
  assert.equal(refreshedDmz.updatedAt, nextDate);
  assert.equal(refreshedDmz.latestChange, "A verified new development", "Follow-up refresh must not need a collection edit");
  const claimed = new Set([getHomeTopic("/monitoring/legislation/commentary/nuclear-submarine-special-act-oversight"), getHomeTopic("/news/debt-relief-repaid-borrowers-fairness-2026"), getHomeTopic("/briefings/farmland-census-elderly-farmers-retirement"), getHomeTopic("/monitoring/public-institution-reform-109")]);
  const selected = selectHotIssueCards(cards, claimed);
  assert.equal(selected.length, 4);
  assert(!selected.some((card) => card.id === "public-institution-reform"), "Higher placements must still prevent subject duplicates");
  const english = getHotIssueCards("en");
  assert.deepEqual(english.map((card) => card.id), cards.map((card) => card.id), "Both languages must select identical issues");
  assert.notEqual(english.find((card) => card.id === dmz.id).latestChange, dmz.latestChange);
  const bill = { slug: "selection-check", title: "Verified published bill", review_state: "published", editorial_updated_at: nextDate, analysis: {}, editorial_image: { status: "ready", src: "https://example.org/verified.jpg", alt_ko: "Law illustration", alt_en: "Law illustration", verified_at: new Date().toISOString() }, public_summary_ko: "A substantive legislative update" };
  assert.equal(getHotIssueCards("ko", [bill])[0].to, "/monitoring/legislation/selection-check", "A new legislative issue must enter without a homepage edit");
  assert(!getHotIssueCards("ko", [{ ...bill, review_state: "review" }]).some((card) => card.to.includes("selection-check")), "Unpublished bills must never enter the pool");
  assert(!getHotIssueCards("ko", [{ ...bill, editorial_image: undefined }]).some((card) => card.to.includes("selection-check")), "Bills without verified artwork must not be promoted");
  assert(!getHotIssueCards("ko", [{ ...bill, editorial_image: { status: "error" } }]).some((card) => card.to.includes("selection-check")), "Image failures must not become logo cards");
  console.log("Hot-issue selection checks passed. Homepage candidates:");
  console.table(selected.map((card) => ({ date: card.updatedAt, title: card.title, path: card.to })));
} finally {
  await server.close();
}
