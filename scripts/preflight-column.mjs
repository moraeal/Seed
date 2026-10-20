// Read-only article preflight. Usage: node scripts/preflight-column.mjs <slug>
import { createServer } from "vite";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/preflight-column.mjs <article-slug>");
  process.exit(2);
}
const errors = [];
const warnings = [];
const server = await createServer({
  configFile: false, root: process.cwd(), appType: "custom",
  server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true },
});
let column;
try {
  const [{ columns }, { columnTranslations }, civic, continuation] = await Promise.all([
    server.ssrLoadModule("/src/data/columns.ts"),
    server.ssrLoadModule("/src/data/contentTranslations/columns/index.ts"),
    server.ssrLoadModule("/src/data/civicSections.ts"),
    server.ssrLoadModule("/src/data/editorialContinuations.ts"),
  ]);
  const matches = columns.filter((item) => item.slug === slug);
  if (matches.length !== 1) errors.push("Expected exactly one published column entry; found " + matches.length);
  column = matches[0];
  if (column) {
    const en = columnTranslations[column.issue];
    if (!en?.title?.trim() || !en?.summary?.trim()) errors.push("English edition missing title/summary");
    if ((en?.sections?.length ?? 0) !== (column.sections?.length ?? 0)) errors.push("Korean/English section counts do not match");
    if (!column.summary?.trim()) errors.push("Korean summary missing");
    const images = [column.heroImage, ...(column.additionalImages ?? [])].filter(Boolean);
    if (images.length < 3) errors.push("Expected three distinct article photographs or graphics");
    const seen = new Set();
    for (const img of images) {
      if (!img.src) { errors.push("Image without src"); continue; }
      if (seen.has(img.src)) errors.push("Duplicated displayed image: " + img.src);
      seen.add(img.src);
      if (!img.alt?.trim() || !img.credit?.trim()) errors.push("Image missing alt/credit: " + img.src);
      if (/^https?:/.test(img.src)) warnings.push("External image requires HTTP/render verification: " + img.src);
      else {
        const local = path.join(process.cwd(), "public", img.src.replace(/^\\//, ""));
        try { await access(local); } catch { errors.push("Local image missing: " + img.src); }
      }
    }
    if (!Array.isArray(column.sources) || column.sources.length === 0) errors.push("Source list missing");
    const route = "/columns/" + slug;
    if (!civic.civicLifeArticlePaths.includes(route)) warnings.push("Not in Civic Life listing (verify editorial classification)");
    for (const lang of ["ko", "en"]) {
      if (!continuation.getEditorialContinuation("column", slug, lang)) errors.push("Editorial continuation missing for " + lang);
    }
    if ((column.sections?.length ?? 0) < 2) errors.push("Insufficient titled sections");
    try { await access(path.join(process.cwd(), "public/images/social/columns", slug + ".jpg")); }
    catch { warnings.push("Social preview missing before build (generate during full build)"); }
  }
} catch (error) {
  errors.push("Preflight failed to load article data: " + (error?.message ?? String(error)));
} finally {
  await server.close();
}
const report = { slug, ok: errors.length === 0, errors, warnings };
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
