import type { Language } from "../i18n";
import { getFeaturedContentCandidates, type FeaturedContent } from "./featuredContent";
import { taxWatchCaseSlug, civicNoticeSlug } from "./civicHubArticles";

export const civicSections = [
  { key: "campaign", path: "/civic-campaign", title: { ko: "시민캠페인", en: "Civic Campaigns" }, description: { ko: "시민이 제안하고 함께 실천할 운동을 소개합니다.", en: "Ideas for civic action and participation." } },
  { key: "cases", path: "/tax-watch-cases", title: { ko: "세금감시운동 사례연구", en: "Tax Watch Case Studies" }, description: { ko: "한국과 외국의 세금감시운동을 살펴보고, 받아들일 점과 비판할 점을 분석합니다.", en: "Examine tax-watch efforts in Korea and abroad, their lessons and limitations." } },
  { key: "notices", path: "/civic-notices", title: { ko: "시민운동 공지사항", en: "Civic Notices" }, description: { ko: "시민운동의 참여·모집·행사 정보를 원문과 함께 안내합니다.", en: "Participation opportunities, calls and events with original notices." } },
] as const;
export type CivicSectionKey = typeof civicSections[number]["key"];

// Add new case studies and notices here in publication order. The same list drives
// the homepage and collection pages; it never pulls unrelated latest news.
export const civicArticlePaths: Record<CivicSectionKey, string[]> = {
  campaign: ["/briefings/korean-civic-tax-watch-movement-ktr"],
  cases: [`/briefings/${taxWatchCaseSlug}`],
  notices: [`/briefings/${civicNoticeSlug}`],
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
