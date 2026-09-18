import { createServer } from "vite";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

const [newsModule, briefingModule, columnModule, seedLanguageModule, seedLanguageEnvironmentModule, publicInterestWatchModule, taxWatchModule, editorialContinuationModule, newsTranslationModule, briefingTranslationModule, columnTranslationModule, legislativeCommentaryModule] = await Promise.all([
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/seedLanguage.ts"),
  server.ssrLoadModule("/src/data/seedLanguageEnvironment.ts"),
  server.ssrLoadModule("/src/data/newsTrackerRegistry.ts"),
  server.ssrLoadModule("/src/data/taxWatch.ts"),
  server.ssrLoadModule("/src/data/editorialContinuations.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/news.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/briefings.ts"),
  server.ssrLoadModule("/src/data/contentTranslations/columns/index.ts"),
  server.ssrLoadModule("/src/data/legislativeCommentaries.ts"),
]);
await server.close();

const errors = [];
const optionalEnglishNewsSlugs = new Set([
  "lh-split-public-agency-experiment",
]);
const optionalSeedLanguageSocialSlugs = new Set([
  "freedom-as-citizen-agency",
]);
const accountabilitySurfaces = [
  "src/pages/NewsDetail.tsx",
  "src/pages/BriefingDetail.tsx",
  "src/pages/BriefingCommentary.tsx",
  "src/pages/ColumnDetail.tsx",
  "src/pages/PublicInterestWatchDetail.tsx",
  "src/pages/CommunityChestResearch.tsx",
  "src/pages/SeedLanguageDetailBase.tsx",
  "src/pages/TaxPolicyDetail.tsx",
  "src/pages/LegislativeCommentaryDetail.tsx",
];

for (const pagePath of accountabilitySurfaces) {
  const source = await readFile(path.join(process.cwd(), pagePath), "utf8");
  if (!source.includes("<ContentAccountability")) {
    errors.push(`Content accountability system is missing from ${pagePath}`);
  }
}

const requireEditorialStructure = (kind, item, visualCount) => {
  if (!item.summary?.trim()) errors.push(`Missing top summary for ${kind}: ${item.slug}`);
  if ((item.readMinutes ?? 0) < 8) return;
  if ((item.sections?.length ?? 0) < 2) errors.push(`Long-form ${kind} needs at least two titled sections: ${item.slug}`);
  if (visualCount < 2) errors.push(`Long-form ${kind} needs at least two purposeful visuals: ${item.slug}`);
};
const requireSocialImage = async (section, slug) => {
  try {
    await access(path.join(process.cwd(), "public", "images", "social", section, `${slug}.jpg`));
  } catch {
    errors.push(`Missing 1200x630 JPEG social-preview image: ${section}/${slug}.jpg`);
  }
};
await requireSocialImage("site", "home");
await requireSocialImage("research", "community-chest-of-korea");
for (const article of newsModule.newsArticles) {
  if (!editorialContinuationModule.getEditorialContinuation("news", article.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("news", article.slug, "en")) errors.push(`Editorial continuation is missing or incomplete for news: ${article.slug}`);
  if (!optionalEnglishNewsSlugs.has(article.slug) && !newsTranslationModule.newsTranslations[article.slug]) errors.push(`Missing English news translation: ${article.slug}`);
  if (!article.heroImage?.src) errors.push(`Missing social-preview image for news: ${article.slug}`);
  requireEditorialStructure("news", article, [article.heroImage, article.inlineImage, ...(article.additionalImages ?? [])].filter((image) => image?.src).length);
  await requireSocialImage("news", article.slug);
}
for (const briefing of briefingModule.getAllBriefingsNewestFirst()) {
  if (!editorialContinuationModule.getEditorialContinuation("briefing", briefing.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("briefing", briefing.slug, "en")) errors.push(`Editorial continuation is missing or incomplete for briefing: ${briefing.slug}`);
  if (!briefingTranslationModule.briefingTranslations[briefing.slug]) errors.push(`Missing English briefing translation: ${briefing.slug}`);
  if (!briefing.images?.[0]?.src) errors.push(`Missing social-preview image for briefing: ${briefing.slug}`);
  requireEditorialStructure("briefing", briefing, briefing.images?.filter((image) => image?.src).length ?? 0);
  await requireSocialImage("briefings", briefing.slug);
}
for (const column of columnModule.columns) {
  if (!editorialContinuationModule.getEditorialContinuation("column", column.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("column", column.slug, "en")) errors.push(`Editorial continuation is missing or incomplete for column: ${column.slug}`);
  if (!columnTranslationModule.columnTranslations[column.issue]) errors.push(`Missing English column translation: issue ${column.issue} (${column.slug})`);
  if (!column.heroImage?.src) errors.push(`Missing social-preview image for column: ${column.slug}`);
  requireEditorialStructure("column", column, [column.heroImage, column.inlineImage, ...(column.additionalImages ?? [])].filter((image) => image?.src).length);
  await requireSocialImage("columns", column.slug);
}
for (const article of seedLanguageModule.seedLanguageArticlesKo) {
  if (!editorialContinuationModule.getEditorialContinuation("seed-language", article.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("seed-language", article.slug, "en")) errors.push(`Editorial continuation is missing or incomplete for SEED Language: ${article.slug}`);
  const english = seedLanguageModule.getSeedLanguageArticle(article.slug, "en");
  if (!english || english.title === article.title) errors.push(`Missing English SEED Language edition: ${article.slug}`);
  const visualCount = [article.heroImage, article.inlineImage, article.secondaryImage].filter((image) => image?.src).length + (article.chart?.rows?.length ? 1 : 0);
  if (!article.heroImage?.src || visualCount < 2) errors.push(`SEED Language article needs a primary image and two purposeful visuals: ${article.slug}`);
  requireEditorialStructure("SEED Language article", article, visualCount);
  if (!optionalSeedLanguageSocialSlugs.has(article.slug)) await requireSocialImage("seed-language", article.slug);
}
for (const article of seedLanguageEnvironmentModule.seedLanguageEnvironmentArticlesKo) {
  if (!editorialContinuationModule.getEditorialContinuation("seed-language", article.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("seed-language", article.slug, "en")) errors.push(`Editorial continuation is missing or incomplete for SEED Language: ${article.slug}`);
}
for (const item of publicInterestWatchModule.publicInterestWatchCases) {
  if (item.continuationEligible !== false && (!editorialContinuationModule.getEditorialContinuation("monitoring", item.slug, "ko") || !editorialContinuationModule.getEditorialContinuation("monitoring", item.slug, "en"))) errors.push(`Editorial continuation is missing or incomplete for public-interest watch: ${item.slug}`);
  if (item.heroImage?.src) await requireSocialImage("monitoring", item.slug);
}
for (const item of taxWatchModule.taxPolicies) {
  if (!item.title?.ko || !item.title?.en || !item.summary?.ko || !item.summary?.en) errors.push(`Missing Korean or English tax policy edition: ${item.slug}`);
  if (!item.heroImage?.ko || !item.heroImage?.en) errors.push(`Missing bilingual tax policy image: ${item.slug}`);
  await requireSocialImage("tax", item.slug);
}
for (const item of legislativeCommentaryModule.legislativeCommentaries) {
  const ko = item.editions?.ko;
  const en = item.editions?.en;
  if (!ko?.title || !ko?.summary || !en?.title || !en?.summary) errors.push(`Missing Korean or English legislative commentary edition: ${item.slug}`);
  if (!item.heroSrc) errors.push(`Missing primary image for legislative commentary: ${item.slug}`);
  if (!ko?.chart?.rows?.length || !en?.chart?.rows?.length) errors.push(`Missing Korean or English chart for legislative commentary: ${item.slug}`);
  requireEditorialStructure("legislative commentary", { ...item, summary: ko?.summary, sections: ko?.sections }, 2);
  await requireSocialImage("legislation", item.slug);
}

if (errors.length) {
  console.error("Content publishing checks failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Content publishing checks passed: content editions and preview images are present.");
