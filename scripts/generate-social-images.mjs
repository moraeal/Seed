import { execFile } from "node:child_process";
import { access, mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { createServer } from "vite";

const run = promisify(execFile);
const root = process.cwd();
const publicRoot = path.join(root, "public");
const outputRoot = path.join(publicRoot, "images", "social");
const environmentHero = "images/seed-language/environment-shared-condition-hero.webp";
const defaultBriefingHero = "images/briefings/briefing-05-budget-ledger.webp";

const server = await createServer({
  configFile: false,
  root,
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const [newsModule, briefingModule, columnModule, hotIssueClusterModule, seedLanguageModule, seedLanguageEnvironmentModule, publicInterestWatchModule, taxWatchModule, taxCommentaryModule, legislativeCommentaryModule] = await Promise.all([
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/hotIssueClusters.ts"),
  server.ssrLoadModule("/src/data/seedLanguage.ts"),
  server.ssrLoadModule("/src/data/seedLanguageEnvironment.ts"),
  server.ssrLoadModule("/src/data/newsTrackerRegistry.ts"),
  server.ssrLoadModule("/src/data/taxWatch.ts"),
  server.ssrLoadModule("/src/data/taxCommentaries.ts"),
  server.ssrLoadModule("/src/data/legislativeCommentaries.ts"),
]);
await server.close();

const rasterBriefingImages = (item) => item.images
  .filter((image) => !/^https?:\/\//i.test(image.src) && /\.(?:jpe?g|png|webp)$/i.test(image.src))
  .map((image) => image.src);

const supabaseUrl = (process.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";
const billsResponse = await fetch(`${supabaseUrl}/rest/v1/legislative_bills?review_state=eq.published&select=bill_id,slug,title,analysis,editorial_image,public_summary_ko,public_summary_en,seed_view_ko,detail_url,proposed_date,published_at,review_state,importance_score,editorial_updated_at,updated_at,official_summary&order=published_at.desc&limit=1000`, { headers: { apikey: supabaseKey }, signal: AbortSignal.timeout(20000) });
if (!billsResponse.ok) throw new Error(`Cannot load bill images: HTTP ${billsResponse.status}`);
const billImages = await billsResponse.json();
if (!Array.isArray(billImages) || billImages.length >= 1000) throw new Error("Invalid or truncated bill image list");
// SEO uses this same public snapshot so a mid-build publication cannot create
// metadata for an image that was not included in the image generation phase.
await mkdir(path.join(root, ".seed-build"), { recursive: true });
await writeFile(path.join(root, ".seed-build", "published-bills.json"), JSON.stringify(billImages));
const jobs = [
  { section: "site", slug: "home", src: "images/brand/seedvoice-independent-watchdog.webp" },
  { section: "site", slug: "founding-statement", src: "images/columns/checks-and-balances.png" },
  { section: "seed-language", slug: "why-civic-language", src: "images/seed-language/civic-language-map-hero.webp" },
  ...newsModule.newsArticles.map((item) => ({
    section: "news",
    slug: item.slug,
    src: item.heroImage.src,
    fallbackSrc: item.selectedNews?.thumbnailFallbackUrl?.match(/\.(?:jpe?g|png|webp)$/i)
      ? item.selectedNews.thumbnailFallbackUrl
      : "images/brand/seedvoice-independent-watchdog.webp",
  })),
  ...briefingModule.getAllBriefingsNewestFirst().map((item) => {
    const images = rasterBriefingImages(item);
    return {
      section: "briefings",
      slug: item.slug,
      src: images[0] ?? defaultBriefingHero,
      fallbackSrc: images[1] ?? defaultBriefingHero,
    };
  }),
  ...columnModule.columns.map((item) => ({ section: "columns", slug: item.slug, src: item.heroImage.src, fallbackSrc: item.heroImage.socialSrc })),
  ...hotIssueClusterModule.getHotIssueClusters("ko").map((item) => ({
    section: "hot-issues", slug: item.id, src: item.imageSrc, fallbackSrc: item.items[0]?.imageSrc,
  })),
  ...seedLanguageEnvironmentModule.seedLanguageEnvironmentArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: environmentHero })),
  ...seedLanguageModule.seedLanguageArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: item.heroImage.src })),
  ...publicInterestWatchModule.publicInterestWatchCases
    .filter((item) => item.heroImage?.src)
    .map((item) => ({ section: "monitoring", slug: item.slug, src: item.heroImage.src })),
  ...taxWatchModule.taxPolicies.map((item) => ({ section: "tax", slug: item.slug, src: item.heroImage.ko })),
  ...taxCommentaryModule.taxCommentaries.map((item) => ({ section: "tax-commentary", slug: item.slug, src: item.heroSrc })),
  ...legislativeCommentaryModule.legislativeCommentaries.map((item) => ({ section: "legislation", slug: item.slug, src: item.heroSrc })),
  ...billImages.filter((bill) => bill.editorial_image?.status === "ready" && bill.editorial_image.src && bill.editorial_image.verified_at)
    .map((bill) => ({ section: "legislation", slug: bill.slug, src: bill.editorial_image.src, strict: true, forceRefresh: true })),
  { section: "research", slug: "community-chest-of-korea", src: "images/monitoring/community-chest-deep-hero.png" },
];

// Rasterized from the site's existing seed symbol for portable, font-free builds.
const badgePng = path.join(publicRoot, "images/brand/seed-social-badge.png");

const convertToSocialImage = async (source, target) => run("convert", [
  source,
  "-auto-orient",
  "-resize", "1200x630^",
  "-gravity", "center",
  "-extent", "1200x630",
  "(", badgePng, "-resize", "88x88", ")",
  "-gravity", "southeast",
  "-geometry", "+28+28",
  "-composite",
  "-strip",
  "-interlace", "Plane",
  "-quality", "88",
  target,
]);

for (const job of jobs) {
  const targetDirectory = path.join(outputRoot, job.section);
  const target = path.join(targetDirectory, `${job.slug}.jpg`);
  await mkdir(targetDirectory, { recursive: true });
  let temporarySource;
  let source = path.join(publicRoot, job.src.replace(/^\/+/, ""));

  if (/^https?:\/\//i.test(job.src)) {
    const existingPreviewIsAvailable = await access(target).then(() => true).catch(() => false);
    if (existingPreviewIsAvailable && !job.fallbackSrc && !job.forceRefresh) {
      await convertToSocialImage(target, target);
      console.warn(`Keeping existing social image for remote source: ${job.slug}`);
      continue;
    }
    temporarySource = path.join(targetDirectory, `.${job.slug}-remote-image`);
    try {
      const response = await fetch(job.src, { signal: AbortSignal.timeout(20_000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await writeFile(temporarySource, Buffer.from(await response.arrayBuffer()));
      source = temporarySource;
    } catch (error) {
      if (job.strict) throw new Error(`Required bill image unavailable: ${job.slug}: ${error.message}`);
      if (job.fallbackSrc) {
        source = path.join(publicRoot, job.fallbackSrc.replace(/^\/+/, ""));
        console.warn(`Using fallback social image for ${job.slug}: ${error.message}`);
      } else {
        const existingPreviewIsAvailable = await access(target).then(() => true).catch(() => false);
        if (!existingPreviewIsAvailable) throw new Error(`Could not fetch social image for ${job.slug}: ${error.message}`);
        await convertToSocialImage(target, target);
        console.warn(`Keeping existing social image for ${job.slug}: ${error.message}`);
        continue;
      }
    }
  }

  try {
    await convertToSocialImage(source, target);
  } catch (error) {
    if (job.strict) throw new Error(`Required bill social image failed: ${job.slug}: ${error.message}`);
    if (job.fallbackSrc) {
      try {
        const fallbackSource = path.join(publicRoot, job.fallbackSrc.replace(/^\/+/, ""));
        await convertToSocialImage(fallbackSource, target);
        console.warn(`Using fallback social image for ${job.slug}: ${error.message}`);
        continue;
      } catch (fallbackError) {
        console.warn(`Fallback social image failed for ${job.slug}: ${fallbackError.message}`);
      }
    }
    const existingPreviewIsAvailable = await access(target).then(() => true).catch(() => false);
    if (existingPreviewIsAvailable) {
      console.warn(`Keeping existing social image for ${job.slug}: ${error.message}`);
    } else {
      console.warn(`Skipping social image for ${job.slug}: ${error.message}`);
    }
  } finally {
    if (temporarySource) await unlink(temporarySource).catch(() => {});
  }
}

console.log("Generated branded social-preview JPEG images at 1200x630 where source images were available.");
