import { execFileSync } from "node:child_process";
import { accessSync, mkdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

// Generate broadly compatible raster images before Vite copies /public.
// Keep vector originals for reproducibility. SVGs can be displayed inconsistently
// by external previews, social scrapers and embedded mobile browsers.
const root = path.resolve("public/images/columns/security-slogans-alliance-2026");
const jobs = [
  { input: "hero.svg", output: "hero.webp", width: 1440, height: 810, format: "webp" },
  { input: "frontline.svg", output: "frontline.webp", width: 1440, height: 810, format: "webp" },
  { input: "surveillance-ko.svg", output: "surveillance-ko.png", width: 1400, height: 780, format: "png" },
];

mkdirSync(root, { recursive: true });
const checkReadable = (file, format) => {
  const bytes = readFileSync(file);
  if (bytes.length < 4000) throw new Error(`Too-small rendered article image: ${file} (${bytes.length} bytes)`);
  if (format === "png" && bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") throw new Error(`Not a PNG: ${file}`);
  if (format === "webp" && (bytes.toString("ascii", 0, 4) !== "RIFF" || bytes.toString("ascii", 8, 12) !== "WEBP")) throw new Error(`Not a WebP: ${file}`);
};
for (const job of jobs) {
  const from = path.join(root, job.input);
  const to = path.join(root, job.output);
  accessSync(from);
  const intermediate = path.join(root, ".tmp-" + job.output + ".png");
  // librsvg uses its own safe SVG rendering backend and supports CJK font fallback.
  try {
    execFileSync("rsvg-convert", ["--width", String(job.width), "--height", String(job.height), "--output", intermediate, from], { stdio: "pipe", timeout: 45000 });
  } catch (error) {
    throw new Error(`Failed to render ${job.input}: ${error?.stderr?.toString() || error.message}`);
  }
  if (job.format === "png") {
    const { copyFileSync, unlinkSync } = await import("node:fs");
    copyFileSync(intermediate, to);
    unlinkSync(intermediate);
  } else {
    execFileSync("convert", [intermediate, "-strip", "-quality", "88", to], { stdio: "pipe", timeout: 45000 });
    const { unlinkSync } = await import("node:fs");
    unlinkSync(intermediate);
  }
  checkReadable(to, job.format);
  console.log(`Rendered ${job.output} (${statSync(to).size} bytes)`);
}
