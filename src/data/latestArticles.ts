import type { Language } from "../i18n";
import type { LegislativeBill } from "../lib/legislativeMonitoring";
import { getFeaturedContentCandidates, type FeaturedContent } from "./featuredContent";
import { getContentRevisions } from "./contentRevisions";

const koreaTimestamp = (date: string) => Date.parse(date.length === 10 ? `${date}T00:00:00+09:00` : date) || 0;
export type LatestArticle = FeaturedContent & { latestDate: string; isUpdated: boolean };

export function latestArticleDate(item: FeaturedContent): string {
  const parts = item.path.split("/").filter(Boolean);
  const slug = parts[parts.length - 1] || "";
  const revisions = [
    ...getContentRevisions(slug, item.date),
    ...getContentRevisions(`${item.path.split("/").filter(Boolean)[0]}-${slug}`, item.date),
  ];
  return revisions.filter((entry) => entry.kind === "content")
    .map((entry) => entry.date).filter((date) => koreaTimestamp(date) >= koreaTimestamp(item.date))
    .sort((a, b) => koreaTimestamp(b) - koreaTimestamp(a))[0] || item.date;
}

// Publication is enough to enter this feed; an operator's homepage-selection
// history is not required. Inclusion does not fabricate historical selections.
// A canonical-path tie break keeps Korean and English editions in the same order.
export function selectLatestArticles(items: FeaturedContent[], excludedPaths: ReadonlySet<string> = new Set(), limit = 8, revisionDate: (item: FeaturedContent) => string = latestArticleDate): LatestArticle[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const path = item.path.replace(/\/$/, "");
    if (seen.has(path) || excludedPaths.has(path) || !koreaTimestamp(item.date)) return false;
    seen.add(path);
    return true;
  }).map((item) => {
    const latestDate = revisionDate(item);
    const validDate = koreaTimestamp(latestDate) >= koreaTimestamp(item.date) ? latestDate : item.date;
    return { ...item, latestDate: validDate, isUpdated: koreaTimestamp(validDate) > koreaTimestamp(item.date) };
  }).sort((a, b) => koreaTimestamp(b.latestDate) - koreaTimestamp(a.latestDate) || a.path.localeCompare(b.path)).slice(0, Math.max(0, limit));
}

export function getLatestArticles(language: Language, bills: LegislativeBill[] = [], excludedPaths: ReadonlySet<string> = new Set(), limit = 8) {
  return selectLatestArticles(getFeaturedContentCandidates(language, bills), excludedPaths, limit);
}
