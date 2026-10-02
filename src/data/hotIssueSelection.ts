import type { Language } from "../i18n";
import type { LegislativeBill } from "../lib/legislativeMonitoring";
import { getFeaturedContentCandidates } from "./featuredContent";
import type { FeaturedHistoryEntry } from "./featuredHistory";
import { getHomeTopic } from "./homeTopics";

export type HotIssueCard = {
  id: string;
  to: string;
  title: string;
  latestChange: string;
  updatedAt: string;
  imageSrc: string;
  imageAlt: string;
  paths: string[];
};

// Only actual homepage selections qualify. Publication dates and later edits
// never change their position; re-selection moves the same route to the top.
export function getHotIssueCards(language: Language, legislativeBills: LegislativeBill[] = [], history: FeaturedHistoryEntry[] = []): HotIssueCard[] {
  const candidates = new Map(getFeaturedContentCandidates(language, legislativeBills).map((item) => [item.path, item]));
  const seenPaths = new Set<string>();
  return [...history]
    .filter((entry) => Number.isFinite(Date.parse(entry.featured_at)))
    .sort((a, b) => Date.parse(b.featured_at) - Date.parse(a.featured_at) || a.content_path.localeCompare(b.content_path))
    .flatMap((entry) => {
      const item = candidates.get(entry.content_path);
      if (!item || seenPaths.has(item.path)) return [];
      seenPaths.add(item.path);
      return [{
        id: item.path,
        to: item.path,
        title: item.title,
        latestChange: item.summary,
        updatedAt: entry.featured_at,
        imageSrc: item.image.src,
        imageAlt: item.image.alt,
        paths: [item.path],
      }];
    });
}

export function selectHotIssueCards(cards: HotIssueCard[], claimedTopics: Set<string>, limit = 4): HotIssueCard[] {
  const selected: HotIssueCard[] = [];
  for (const card of cards) {
    if (selected.length >= limit) break;
    const topics = card.paths.map(getHomeTopic);
    if (topics.some((topic) => claimedTopics.has(topic))) continue;
    topics.forEach((topic) => claimedTopics.add(topic));
    selected.push(card);
  }
  return selected;
}
