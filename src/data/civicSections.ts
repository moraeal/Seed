import { procurementTaxWatchNoticeSlug } from "./procurementTaxWatchNotice";
import type { Language } from "../i18n";
import { getFeaturedContentCandidates, type FeaturedContent } from "./featuredContent";
import { taxCommentaries } from "./taxCommentaries";
import { taxWatchCaseSlug, civicNoticeSlug } from "./civicHubArticles";

export const civicSections = [
  { key: "campaign", path: "/civic-campaign", title: { ko: "시민캠페인", en: "Civic Campaigns" }, description: { ko: "시민이 제안하고 함께 실천할 운동을 소개합니다.", en: "Ideas for civic action and participation." } },
  { key: "cases", path: "/tax-watch-movement", title: { ko: "세금감시운동", en: "Tax Watch Movement" }, description: { ko: "세금을 거두는 근거와 쓰는 결과를 묻습니다. 세금감시 논평과 시민운동의 제안·사례를 함께 읽어보세요.", en: "Scrutinize why taxes are collected and how public money is spent. Read SEED’s tax commentaries, civic proposals and case studies." } },
  { key: "notices", path: "/civic-notices", title: { ko: "시민운동 공지사항", en: "Civic Notices" }, description: { ko: "시민운동의 참여·모집·행사 정보를 원문과 함께 안내합니다.", en: "Participation opportunities, calls and events with original notices." } },
] as const;
export type CivicSectionKey = typeof civicSections[number]["key"];

// Movement articles and all published tax commentaries share one collection.
// Policy explainers retain their separate Tax Watch listing.
export const civicArticlePaths: Record<CivicSectionKey, string[]> = {
  campaign: ["/briefings/korean-civic-tax-watch-movement-ktr"],
  cases: ["/columns/taxpayer-movement-03-britain-spending-watch", "/columns/atr-taxpayer-movement-02-protection-pledge", "/columns/no-more-tax-increases-civic-declaration-2026", "/columns/atr-taxpayer-movement-01-california", `/briefings/${taxWatchCaseSlug}`, "/briefings/korean-civic-tax-watch-movement-ktr", ...taxCommentaries.map((article) => `/monitoring/tax/commentary/${article.slug}`)],
  notices: [`/briefings/${procurementTaxWatchNoticeSlug}`, `/briefings/${civicNoticeSlug}`],
};
export const campaignPending = {
  title: { ko: "한국형 세금감시 운동을 제안한다", en: "A Proposal for a Korean Civic Tax Watch Movement" },
  summary: { ko: "증세의 근거를 검증하고, 예산 낭비의 책임을 묻는 시민운동을 제안합니다.", en: "A civic proposal to scrutinize tax increases and responsibility for wasted public money." },
};

export function getCivicSectionArticles(key: CivicSectionKey, language: Language, candidates = getFeaturedContentCandidates(language)): FeaturedContent[] {
  const paths = new Set(civicArticlePaths[key]);
  if (key === "campaign") {
    // The campaign article is being edited separately. Connect only after it is
    // actually published; never turn a private working draft into a public link.
    const published = getFeaturedContentCandidates("ko").find((item) => /한국형\s*(?:세금감시|시민감시)\s*운동을?\s*제안한다/.test(item.title));
    if (published) paths.add(published.path);
  }
  return candidates.filter((item) => paths.has(item.path)).sort((a, b) => b.date.localeCompare(a.date));
}

export function getCivicSectionForArticle(path: string) {
  return civicSections.find((section) => civicArticlePaths[section.key].includes(path));
}

// Editorial selection of published everyday-life and community stories.
// Keep canonical routes so the original articles and their editions stay intact.
// Assess every new article under CONTENT_PUBLISHING_RULES.md §14 and add
// suitable stories here in the same publishing update, regardless of category.
export const civicLifeArticlePaths = [
  "/columns/taxpayer-movement-03-britain-spending-watch",
  "/monitoring/tax/lh-unsold-housing-purchase-commitment-2026",
  "/monitoring/tax/commentary/lh-unsold-housing-public-cost-2026",
  "/seed-language/social-dialogue-understanding-beyond-camps-2026",
  "/columns/robak-housing-names-hangeul-communication-2026",
  "/columns/farmland-farming-freedom-smart-agriculture-2026",
  "/briefings/leveraged-etfs-government-signals-citizen-losses-2026",
  "/news/privacy-leaks-ai-security-accountability-2026",
  "/monitoring/banking-privacy-ai-hacking-tracker-2026",
  `/briefings/${procurementTaxWatchNoticeSlug}`,
  "/columns/atr-taxpayer-movement-02-protection-pledge",
  "/columns/robak-solar-smart-farming-farmland-2026",
  "/columns/citizens-dilemma-02-neighbor-noise",
  "/columns/atr-taxpayer-movement-01-california",
  "/monitoring/tax/commentary/inheritance-tax-automatic-increase-2026",
  "/columns/citizens-dilemma-01-cafe-customer-choice",
  "/monitoring/tax/commentary/card-sales-credit-normalization-burden-2026",
  "/seed-language/history-facts-memory-civic-judgment",
  "/columns/film-imagination-history-distortion-ryoma-2026",
  "/briefings/government-policy-funds-risk-and-taxpayer-cost-2026",
  "/columns/robak-sejong-taxpayer-rights-2026",
  "/columns/robak-contract-freedom-third-party-rights-2026",
  "/columns/citizenization-kimchi-jar-freedom-2026",
  "/columns/mfds-sauce-portioning-autonomy-2026",
  "/columns/the-day-i-did-not-post-a-photo",
  "/briefings/seojin-school-neighbors-civic-solidarity",
  "/briefings/sk-hynix-ai-hackathon-skills-first-hiring",
  "/briefings/monthly-rent-tax-credit-2026-bills-explained",
  "/columns/welfare-exit-risk-work-and-fairness",
  "/columns/suicide-prevention-mois-local-community",
  "/columns/corporations-are-citizens-too",
  "/columns/public-health-proved-by-function",
  "/columns/fukushima-journey-original",
] as const;

export function getCivicLifeArticles(language: Language): FeaturedContent[] {
  const paths = new Set<string>(civicLifeArticlePaths);
  return getFeaturedContentCandidates(language).filter((article) => paths.has(article.path));
}

// Only civic movement coverage can lead the collection; newer policy commentaries
// join the list without displacing the latest movement article.
export function getTaxWatchMovementArticles(language: Language, candidates = getFeaturedContentCandidates(language)): FeaturedContent[] {
  return getCivicSectionArticles("cases", language, candidates)
    .filter((article) => !article.path.startsWith("/monitoring/tax/commentary/"))
    .sort((a, b) => b.date.localeCompare(a.date) || civicArticlePaths.cases.indexOf(a.path) - civicArticlePaths.cases.indexOf(b.path));
}
