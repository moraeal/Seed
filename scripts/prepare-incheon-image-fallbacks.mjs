import { readdir, access } from "node:fs/promises";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const folder = "public/images/monitoring/incheon-stabbing-2026";
const images = (await readdir(folder)).filter(name => name.endsWith(".svg"));
for (const name of images) {
  const source = join(folder, name);
  const dest = join(folder, name.replace(/\.svg$/, ".jpg"));
  // JPEG is the dependable fallback for browser and social previews.
  await run("convert", ["-background", "white", source, "-background", "white", "-alpha", "remove", "-strip", "-quality", "88", dest], { timeout: 30000 });
  await run("identify", ["-ping", dest], { timeout: 10000 });
  await access(dest);
}
console.log("Incheon incident JPEG fallback images verified:", images.length);
