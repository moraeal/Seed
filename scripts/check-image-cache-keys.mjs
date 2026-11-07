// Block replacing an image in-place under an unchanged URL: browsers/CDNs may keep old bytes.
// Usage: node scripts/check-image-cache-keys.mjs <base-ref> <head-ref>
import { execFileSync } from "node:child_process";
const [base, head = "HEAD"] = process.argv.slice(2);
if (!base || !/^[a-zA-Z0-9._/-]+$/.test(base)) {
  console.error("Usage: check-image-cache-keys.mjs <base-ref> [head-ref]");
  process.exit(2);
}
const changed = execFileSync("git", ["diff", "--name-status", base, head, "--", "public/images/"], {encoding:"utf8"})
  .trim().split("\n").filter(Boolean);
const replaced = changed
  .map(row=>row.split("\t"))
  .filter(([status, file])=>status==="M" && /\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(file || ""))
  .map(([,file])=>file);
if (replaced.length) {
  console.error("Image files replaced at unchanged URLs. Publish new versioned filenames and update all article references:");
  for (const file of replaced) console.error(" - "+file);
  process.exit(1);
}
console.log("PASS: no in-place replacement of existing public image URLs.");
