import { execFile } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { createServer } from "vite";

const run = promisify(execFile);
const root = process.cwd();
const publicRoot = path.join(root, "public");
const outputRoot = path.join(publicRoot, "images", "social");
const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "seed-social-images-"));

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
    src: item.images[0]?.src,
  })),
  ...columnModule.columns.map((item) => ({ section: "columns", slug: item.slug, src: item.heroImage.src })),
  ...seedLanguageModule.seedLanguageArticlesKo.map((item) => ({ section: "seed-language", slug: item.slug, src: item.heroImage.src })),
];

const sourcePath = async (job) => {
  if (!job.src) throw new Error(`Missing primary image for ${job.section}/${job.slug}`);
  if (!/^https?:\/\//i.test(job.src)) return path.join(publicRoot, job.src.replace(/^\/+/, ""));

  const response = await fetch(job.src, {
    headers: { Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8", "User-Agent": "SeedAllianceSocialPreview/1.0" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Could not download primary image for ${job.section}/${job.slug}: ${response.status}`);
  const source = path.join(temporaryRoot, `${job.section}-${job.slug}`);
  await writeFile(source, Buffer.from(await response.arrayBuffer()));
  return source;
};

try {
  for (const job of jobs) {
    const source = await sourcePath(job);
    const targetDirectory = path.join(outputRoot, job.section);
    const target = path.join(targetDirectory, `${job.slug}.jpg`);
    await mkdir(targetDirectory, { recursive: true });
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
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

console.log(`Generated ${jobs.length} social-preview JPEG images at 1200x630.`);
