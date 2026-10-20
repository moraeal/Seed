// Validate a single column, then run the existing full production build.
// Usage: node scripts/verify-column-publication.mjs <slug>
// The command exits nonzero on any failed step; it does NOT push or deploy.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("Usage: node scripts/verify-column-publication.mjs <article-slug>");
  process.exit(2);
}
const tasks = [
  ["Article preflight", process.execPath, ["scripts/preflight-column.mjs", slug]],
  ["Production build", process.platform === "win32" ? "pnpm.cmd" : "pnpm", ["run", "build"]],
];
for (const [label, command, args] of tasks) {
  console.log("\n=== " + label + " ===");
  const result = spawnSync(command, args, { stdio: "inherit", shell: false });
  if (result.error || result.status !== 0) {
    console.error(label + " failed:", result.error?.message ?? "exit " + result.status);
    process.exit(result.status || 1);
  }
}
const social = path.join("public", "images", "social", "columns", slug + ".jpg");
const output = path.join("dist", "images", "social", "columns", slug + ".jpg");
if (!existsSync(social) && !existsSync(output)) {
  console.error("Missing generated social preview: " + social);
  process.exit(1);
}
console.log("\nPASS: preflight, full build and social preview checked for " + slug);
console.log("Deployment and live page checks still required.");
