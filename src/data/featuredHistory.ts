export type FeaturedHistoryEntry = {
  content_path: string;
  featured_at: string;
};

export function formatFeaturedDate(timestamp: string): string {
  // The journal's editorial calendar uses Korea time, including for overseas readers.
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) return "";
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10).replace(/-/g, ".");
}
