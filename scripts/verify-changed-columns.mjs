// Verify public routes for changed article modules, not a fixed withdrawn essay.
// Usage: node scripts/verify-changed-columns.mjs <before-sha> <after-sha>
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
const [before, after = "HEAD"] = process.argv.slice(2);
if (!before || !/^[0-9a-f]{40}$/.test(before)) {
  console.error("Missing valid push base SHA; cannot determine changed articles.");
  process.exit(2);
}
const files = execFileSync("git", ["diff", "--name-only", before, after], { encoding: "utf8" })
  .trim().split("\n").filter(Boolean);
const modules = files.filter((p) => /^src\/data\/columns\/[^/]+\.tsx?$/.test(p));
// Fail closed for editorial routes not covered by this module-level detector.
const unsupported = files.filter(p =>
  p === "src/data/columnsLegacy.ts" ||
  p === "src/data/columns.ts" ||
  p.startsWith("src/data/contentTranslations/columns/") ||
  p.startsWith("src/data/civicSections") ||
  p.startsWith("src/data/editorialContinuations")
);
if (unsupported.length) {
  console.error("Manual live/browser verification required for uncovered editorial changes:", unsupported);
  process.exitCode = 1;
}
const slugs = new Set();
for (const path of modules) {
  if (!existsSync(path)) continue; // Removed article is not a published route.
  const source = readFileSync(path, "utf8");
  const matches = [...source.matchAll(/\bslug\s*:\s*["']([a-z0-9]+(?:-[a-z0-9]+)*)["']/g)];
  for (const match of matches) slugs.add(match[1]);
  if (matches.length === 0) {
    console.error("Changed article module has no literal slug; manual verification required:", path);
    process.exitCode = 1;
  }
}
if (process.exitCode) process.exit(1);
console.log("Changed article modules:", modules.length, "public article slugs:", [...slugs]);
if (modules.length === 0) {
  console.log("No individual article modules changed; route verification not applicable to this push.");
}
for (const slug of slugs) {
  const run = spawnSync(process.execPath, ["scripts/verify-live-column.mjs", slug], { stdio: "inherit" });
  if (run.status !== 0) process.exitCode = 1;
}
