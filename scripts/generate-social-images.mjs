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
const [newsModule, briefingModule, columnModule, seedLanguageModule, seedLanguageEnvironmentModule] = await Promise.all([
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/seedLanguage.ts"),
  server.ssrLoadModule("/src/data/seedLanguageEnvironment.ts"),
]);
await server.close();

const rasterBriefingImages = (item) => item.images
  .filter((image) => !/^https?:\/\//i.test(image.src) && /\.(?:jpe?g|png|webp)$/i.test(image.src))
  .map((image) => image.src);

const jobs = [
  { section: "site", slug: "home", src: "images/brand/seedvoice-independent-watchdog.webp" },
  ...newsModule.newsArticles.map((item) => ({ section: "news", slug: item.slug, src: item.heroImage.src })),
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
  ...seedLanguageEnvironmentModule.seedLanguageEnvironmentArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: environmentHero })),
  ...seedLanguageModule.seedLanguageArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: item.heroImage.src })),
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
    if (existingPreviewIsAvailable && !job.fallbackSrc) {
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
