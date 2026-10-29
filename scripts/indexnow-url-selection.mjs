// Select newly published articles from the public RSS feed.
// IndexNow is a change notification, never a guarantee of search indexing.
const ARTICLE_PATH = /^\/(?:news|briefings|columns|seed-language|monitoring|research)\//;

export function selectRecentArticleUrls(rssXml, origin, {
  now = new Date(),
  withinHours = 72,
  maxUrls = 50,
} = {}) {
  if (!rssXml.includes("<rss") || !rssXml.includes("<item")) {
    throw new Error("The live RSS feed is empty or not an RSS document");
  }

  const base = new URL(origin);
  const cutoff = now.getTime() - withinHours * 60 * 60 * 1000;
  const urls = [];
  const seen = new Set();
  const items = rssXml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi);

  for (const [, item] of items) {
    const link = item.match(/<link>\s*(https?:\/\/[^<\s]+)\s*<\/link>/i)?.[1];
    const published = item.match(/<pubDate>\s*([^<]+)\s*<\/pubDate>/i)?.[1];
    if (!link || !published) continue;
    const timestamp = Date.parse(published);
    if (!Number.isFinite(timestamp) || timestamp < cutoff || timestamp > now.getTime() + 60 * 60 * 1000) continue;

    let url;
    try {
      url = new URL(link);
    } catch {
      continue;
    }
    // The feed is public input. Never send arbitrary hosts or noncanonical links.
    if (url.origin !== base.origin || url.search || url.hash || !ARTICLE_PATH.test(url.pathname)) continue;
    if (seen.has(url.href)) continue;
    seen.add(url.href);
    urls.push(url.href);
    if (urls.length >= maxUrls) break;
  }
  return urls;
}
