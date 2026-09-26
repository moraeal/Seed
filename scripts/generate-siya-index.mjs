import { writeFile } from "node:fs/promises";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });

function textParts(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(textParts);
  if (!value || typeof value !== "object") return [];
  return Object.entries(value)
    .filter(([key]) => ["title", "subtitle", "summary", "keySentence", "content", "sections", "paragraphs", "leadParagraphs", "bullets", "keyPoints", "overview", "watchPoints", "seedPerspective", "closing", "quote"].includes(key))
    .flatMap(([, item]) => textParts(item));
}

function entry(item, path, edition = item) {
  const title = edition.title || item.title;
  const summary = edition.summary || item.summary || "";
  if (!title || !item.date || !item.slug) return null;
  return {
    title,
    summary,
    ...(item.term ? { term: item.term } : {}),
    date: item.date,
    path: `${path}/${encodeURIComponent(item.slug)}`,
    text: [...new Set(textParts(edition))].join("\n").slice(0, 14000),
  };
}

try {
  const [{ newsArticles }, { getAllBriefingsNewestFirst }, { columns }, { legislativeCommentaries }, { taxCommentaries }, { seedLanguageArticlesKo }, { seedLanguageEnvironmentArticlesKo }, { publicInterestWatchCases }] = await Promise.all([
    server.ssrLoadModule("/src/data/news.ts"),
    server.ssrLoadModule("/src/data/allBriefings.ts"),
    server.ssrLoadModule("/src/data/columns.ts"),
    server.ssrLoadModule("/src/data/legislativeCommentaries.ts"),
    server.ssrLoadModule("/src/data/taxCommentaries.ts"),
    server.ssrLoadModule("/src/data/seedLanguage.ts"),
    server.ssrLoadModule("/src/data/seedLanguageEnvironment.ts"),
    server.ssrLoadModule("/src/data/newsTrackerRegistry.ts"),
  ]);
  const entries = [
    ...newsArticles.map((item) => entry(item, "/news")),
    ...getAllBriefingsNewestFirst().map((item) => entry(item, "/briefings")),
    ...columns.map((item) => entry(item, "/columns")),
    ...legislativeCommentaries.map((item) => entry(item, "/monitoring/legislation/commentary", item.editions.ko)),
    ...taxCommentaries.map((item) => entry(item, "/monitoring/tax/commentary", item.editions.ko)),
    ...[...seedLanguageArticlesKo, ...seedLanguageEnvironmentArticlesKo].map((item) => entry(item, "/seed-language")),
    ...publicInterestWatchCases.map((item) => ({
      title: item.title.ko,
      summary: item.summary.ko,
      date: item.updatedAt,
      path: `/monitoring/${encodeURIComponent(item.slug)}`,
      text: [item.sourceBasis.ko, ...(item.snapshot?.keyFacts ?? []).map((value) => value.ko),
        ...item.confirmedFacts.map((value) => value.ko),
        ...(item.keyChanges ?? []).map((value) => value.text.ko),
        ...(item.timeline ?? []).flatMap((value) => [value.title.ko, value.description.ko]),
        ...item.questions.map((value) => value.ko), ...item.proposals.map((value) => value.ko),
      ].filter(Boolean).join("\n").slice(0, 14000),
    })),
  ].filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));
  await writeFile("public/siya-articles.json", JSON.stringify({ entries }));
  console.log(`Siya article index: ${entries.length} articles`);
} finally {
  await server.close();
}
