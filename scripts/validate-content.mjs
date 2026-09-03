import { createServer } from "vite";

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

const [newsModule, briefingModule, columnModule, newsTranslationModule, briefingTranslationModule, columnTranslationModule] = await Promise.all([
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/news.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/briefings.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/columns/index.ts"),
]);
await server.close();

const errors = [];
for (const article of newsModule.newsArticles) {
  if (!newsTranslationModule.newsTranslations[article.slug]) errors.push(`Missing English news translation: ${article.slug}`);
  if (!article.heroImage?.src) errors.push(`Missing social-preview image for news: ${article.slug}`);
}
for (const briefing of briefingModule.getAllBriefingsNewestFirst()) {
  if (!briefingTranslationModule.briefingTranslations[briefing.slug]) errors.push(`Missing English briefing translation: ${briefing.slug}`);
  if (!briefing.images?.[0]?.src) errors.push(`Missing social-preview image for briefing: ${briefing.slug}`);
}
for (const column of columnModule.columns) {
  if (!columnTranslationModule.columnTranslations[column.issue]) errors.push(`Missing English column translation: issue ${column.issue} (${column.slug})`);
  if (!column.heroImage?.src) errors.push(`Missing social-preview image for column: ${column.slug}`);
}

if (errors.length) {
  console.error("Content publishing checks failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Content publishing checks passed: Korean/English editions and preview images are present.");
