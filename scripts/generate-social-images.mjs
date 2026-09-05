import { execFile } from "node:child_process";
import { access, mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { createServer } from "vite";

const run = promisify(execFile);
const root = process.cwd();
const publicRoot = path.join(root, "public");
const outputRoot = path.join(publicRoot, "images", "social");

const server = await createServer({
  configFile: false,
  root,
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const [newsModule, briefingModule, columnModule, seedLanguageModule] = await Promise.all([
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/seedLanguage.ts"),
]);
await server.close();

const jobs = [
  { section: "site", slug: "home", src: "images/support/founding-partners-watercolor.webp" },
  ...newsModule.newsArticles.map((item) => ({ section: "news", slug: item.slug, src: item.heroImage.src })),
  ...briefingModule.getAllBriefingsNewestFirst().map((item) => ({
    section: "briefings",
    slug: item.slug,
    src: item.images.find((image) => !/^https?:\/\//i.test(image.src) && /\.(?:jpe?g|png|webp)$/i.test(image.src))?.src
      ?? "images/briefings/briefing-05-budget-ledger.webp",
  })),
  ...columnModule.columns.map((item) => ({ section: "columns", slug: item.slug, src: item.heroImage.src, fallbackSrc: item.heroImage.socialSrc })),
  ...seedLanguageModule.seedLanguageArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: item.heroImage.src })),
];

for (const job of jobs) {
  const targetDirectory = path.join(outputRoot, job.section);
  const target = path.join(targetDirectory, `${job.slug}.jpg`);
  await mkdir(targetDirectory, { recursive: true });
  let temporarySource;
  let source = path.join(publicRoot, job.src.replace(/^\/+/, ""));

  if (/^https?:\/\//i.test(job.src)) {
    const existingPreviewIsAvailable = await access(target).then(() => true).catch(() => false);
    if (existingPreviewIsAvailable && !job.fallbackSrc) {
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
        console.warn(`Keeping existing social image for ${job.slug}: ${error.message}`);
        continue;
      }
    }
  }

  try {
    await run("convert", [
      source,
      "-auto-orient",
      "-resize", "1200x630^",
      "-gravity", "center",
      "-extent", "1200x630",
      "-strip",
      "-interlace", "Plane",
      "-quality", "88",
      target,
    ]);
  } finally {
    if (temporarySource) await unlink(temporarySource).catch(() => {});
  }
}

console.log(`Generated ${jobs.length} social-preview JPEG images at 1200x630.`);
