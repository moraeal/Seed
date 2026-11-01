import { canonicalHomePath } from "./homeTopics";

// A tracker and a commentary can discuss the same topic while remaining
// separate articles. Exclude only articles already displayed elsewhere.
export function selectHomeCommentaries<T extends { to: string }>(
  candidates: readonly T[],
  excludedPaths: ReadonlySet<string>,
  limit: number,
): T[] {
  if (limit <= 0) return [];
  const seen = new Set([...excludedPaths].map(canonicalHomePath));
  const selected: T[] = [];
  for (const article of candidates) {
    const path = canonicalHomePath(article.to);
    if (seen.has(path)) continue;
    seen.add(path);
    selected.push(article);
    if (selected.length >= limit) break;
  }
  return selected;
}
