import type { Language } from "../i18n";
import { getEditorialContinuation, type EditorialContentKind, type EditorialContinuation } from "./editorialContinuations";
import { getHotIssueClusterForArticle } from "./hotIssueClusters";

type ReadingPath = { items: EditorialContinuation[]; topic?: string };

// The issue desk already maintains these groups and resolves only published articles.
// Keep its membership as the source of truth for links at the bottom of each article.
export function getArticleReadingPath(kind: EditorialContentKind, slug: string, language: Language): ReadingPath {
  const primary = getEditorialContinuation(kind, slug, language);
  const cluster = getHotIssueClusterForArticle(kind === "monitoring" ? "watch" : kind, slug, language);

  if (!cluster) return { items: primary ? [primary] : [] };

  const items: EditorialContinuation[] = primary ? [primary] : [];
  const used = new Set([`/${kind === "monitoring" ? "monitoring" : kind === "briefing" ? "briefings" : kind === "column" ? "columns" : kind}/${slug}`, ...items.map((entry) => entry.href)]);
  const related = cluster.items
    .filter((entry) => !used.has(entry.to))
    .sort((a, b) => {
      // Show a different form of coverage before another article of the same kind.
      const sameKind = (entry: typeof a) => entry.key.startsWith(`${kind === "monitoring" ? "watch" : kind}-`) ? 1 : 0;
      return sameKind(a) - sameKind(b);
    });

  for (const entry of related) {
    if (items.length >= 3) break;
    items.push({
      href: entry.to,
      title: entry.title,
      relationship: entry.kindLabel,
      reason: entry.summary,
      listHref: "/news",
      listLabel: language === "ko" ? "핫이슈 전체 보기" : "All Hot Issues",
    });
    used.add(entry.to);
  }

  return { items, topic: cluster.title };
}
