import test from "node:test";
import assert from "node:assert/strict";
import { selectRecentArticleUrls } from "./indexnow-url-selection.mjs";

const NOW = new Date("2026-10-29T07:22:00Z");
const item = (url, pubDate) =>
  "<item><link>" + url + "</link><pubDate>" + pubDate + "</pubDate></item>";
const rss = (items) => "<rss version=\"2.0\"><channel>" + items.join("") + "</channel></rss>";
const recent = "Wed, 28 Oct 2026 15:00:00 GMT";
const old = "Thu, 01 Oct 2026 15:00:00 GMT";

test("includes newly published canonical site articles, not static or old pages", () => {
  const feed = rss([
    item("https://seedvoice.kr/columns/new-article/", recent),
    item("https://seedvoice.kr/briefings/new-briefing/", recent),
    item("https://seedvoice.kr/columns/old-article/", old),
    item("https://seedvoice.kr/about/", recent),
  ]);
  assert.deepEqual(selectRecentArticleUrls(feed, "https://seedvoice.kr", { now: NOW }), [
    "https://seedvoice.kr/columns/new-article/",
    "https://seedvoice.kr/briefings/new-briefing/",
  ]);
});

test("rejects foreign hosts, URL parameters, duplicate URLs, and future timestamps", () => {
  const feed = rss([
    item("https://seedvoice.kr/columns/good/", recent),
    item("https://seedvoice.kr/columns/good/", recent),
    item("https://seedvoice.kr.evil.test/columns/foreign/", recent),
    item("https://seedvoice.kr/columns/query/?ref=spam", recent),
    item("https://seedvoice.kr/columns/future/", "Sun, 08 Nov 2026 15:00:00 GMT"),
  ]);
  assert.deepEqual(selectRecentArticleUrls(feed, "https://seedvoice.kr", { now: NOW }), [
    "https://seedvoice.kr/columns/good/",
  ]);
});

test("rejects malformed or empty RSS before notifying search engines", () => {
  assert.throws(() => selectRecentArticleUrls("", "https://seedvoice.kr", { now: NOW }), /RSS/);
  assert.throws(() => selectRecentArticleUrls("<html>oops</html>", "https://seedvoice.kr", { now: NOW }), /RSS/);
});

test("honors URL selection cap", () => {
  const feed = rss([
    item("https://seedvoice.kr/news/1/", recent),
    item("https://seedvoice.kr/news/2/", recent),
  ]);
  assert.deepEqual(selectRecentArticleUrls(feed, "https://seedvoice.kr", { now: NOW, maxUrls: 1 }), [
    "https://seedvoice.kr/news/1/",
  ]);
});
