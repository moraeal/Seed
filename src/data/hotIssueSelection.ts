import type { Language } from "../i18n";
import type { LegislativeBill } from "../lib/legislativeMonitoring";
import { columns } from "./columns";
import { getFeaturedContentCandidates } from "./featuredContent";
import { getHotIssueClusters } from "./hotIssueClusters";
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

// Published reporting, explainers, columns and civic/legislative/tax watch
// share one candidate pool. A desk label must never bar a new current issue.
// Glossary entries and poems remain in their own reading sections.
export function getHotIssueCards(language: Language, legislativeBills: LegislativeBill[] = []): HotIssueCard[] {
  const nonIssuePaths = new Set(columns.filter((item) => item.presentation === "poem").map((item) => `/columns/${item.slug}`));
  const candidates = getFeaturedContentCandidates(language, legislativeBills)
    .filter((item) => item.category !== "language" && !nonIssuePaths.has(item.path));
  const clusters = getHotIssueClusters(language, candidates);
  const clusteredPaths = new Set(clusters.flatMap((cluster) => cluster.items.map((item) => item.to)));
  const cards: HotIssueCard[] = [
    ...clusters.map((cluster) => ({
      id: cluster.id,
      to: `/news/issues/${cluster.id}`,
      title: cluster.title,
      latestChange: cluster.latestChange,
      updatedAt: cluster.updatedAt,
      imageSrc: cluster.imageSrc,
      imageAlt: cluster.imageAlt,
      paths: cluster.items.map((item) => item.to),
    })),
    ...candidates.filter((item) => !clusteredPaths.has(item.path)).map((item) => ({
      id: item.path,
      to: item.path,
      title: item.title,
      latestChange: item.summary,
      updatedAt: item.date,
      imageSrc: item.image.src,
      imageAlt: item.image.alt,
      paths: [item.path],
    })),
  ];
  // Fresh material wins. An old curated collection receives no fixed-slot
  // preference, and grouping never invents a newer publication date.
  const seenTopics = new Set<string>();
  return cards.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.id.localeCompare(b.id))
    .filter((card) => {
      const topics = card.paths.map(getHomeTopic);
      if (topics.some((topic) => seenTopics.has(topic))) return false;
      topics.forEach((topic) => seenTopics.add(topic));
      return true;
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
