import type { EditorialSeries } from "./editorialSeries";
import { canonicalHomePath, claimHomeStories } from "./homeTopics";

// A serialized article belongs to the Editorial Series homepage desk, even
// when it is not the newest chapter shown on the series card. Keep it in the
// full /columns archive; only the homepage's standalone column desk excludes it.
// Derive this at render time from the published series registry so every new
// approved chapter is protected automatically, without maintaining a slug list.
export function selectHomeStandaloneColumns<T extends { slug: string }>(
  columns: readonly T[],
  series: readonly Pick<EditorialSeries, "chapters">[],
  claimedTopics: Set<string>,
  limit = 5,
): T[] {
  const seriesArticlePaths = new Set(series.flatMap((item) =>
    item.chapters.map((chapter) => canonicalHomePath(chapter.path)),
  ));
  return claimHomeStories(
    columns.filter((column) =>
      !seriesArticlePaths.has(canonicalHomePath(`/columns/${column.slug}`)),
    ),
    (column) => `/columns/${column.slug}`,
    claimedTopics,
    limit,
  );
}
