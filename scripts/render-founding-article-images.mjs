import { execFileSync } from "node:child_process";
import { access, stat } from "node:fs/promises";
import path from "node:path";
const base = path.join(process.cwd(), "public/images/seed-language/founding-state-1948-2026");
const images = ["hero", "declaration", "timeline-ko", "timeline-en"];
for (const name of images) {
  const svg=path.join(base,name+".svg");
  const png=path.join(base,name+".png");
  await access(svg);
  execFileSync("convert", ["-background","white",svg,"-strip",png], {stdio:"inherit"});
  const result=await stat(png);
  if(result.size<4000) throw new Error("Image conversion failed: "+name);
  console.log("Rendered "+name+".png ("+result.size+" bytes)");
}