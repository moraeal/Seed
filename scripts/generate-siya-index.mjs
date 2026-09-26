import { writeFile } from "node:fs/promises";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });

function textParts(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(textParts);
  if (!value || typeof value !== "object") return [];
  return Object.entries(value)
    .filter(([key]) => ["title", "subtitle", "summary", "keySentence", "content", "sections", "paragraphs", "bullets", "keyPoints", "watchPoints", "seedPerspective", "closing", "quote"].includes(key))
    .flatMap(([, item]) => textParts(item));
}

function entry(item, path, edition = item) {
  const title = edition.title || item.title;
  const summary = edition.summary || item.summary || "";
  if (!title || !item.date || !item.slug) return null;
  return {
    title,
    summary,
    date: item.date,
    path: `${path}/${encodeURIComponent(item.slug)}`,
    text: [...new Set(textParts(edition))].join("\n").slice(0, 14000),
  };
}

try {
  const [{ newsArticles }, { getAllBriefingsNewestFirst }, { columns }, { legislativeCommentaries }, { taxCommentaries }] = await Promise.all([
    server.ssrLoadModule("/src/data/news.ts"),
    server.ssrLoadModule("/src/data/allBriefings.ts"),
    server.ssrLoadModule("/src/data/columns.ts"),
    server.ssrLoadModule("/src/data/legislativeCommentaries.ts"),
    server.ssrLoadModule("/src/data/taxCommentaries.ts"),
  ]);
  const entries = [
    ...newsArticles.map((item) => entry(item, "/news")),
    ...getAllBriefingsNewestFirst().map((item) => entry(item, "/briefings")),
    ...columns.map((item) => entry(item, "/columns")),
    ...legislativeCommentaries.map((item) => entry(item, "/monitoring/legislation/commentary", item.editions.ko)),
    ...taxCommentaries.map((item) => entry(item, "/monitoring/tax/commentary", item.editions.ko)),
  ].filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));
  await writeFile("public/siya-articles.json", JSON.stringify({ generatedAt: new Date().toISOString(), entries }));
  console.log(`Siya article index: ${entries.length} articles`);
} finally {
  await server.close();
}
