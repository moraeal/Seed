// Local article asset validator; no mutations or network requests.
// Usage: node scripts/verify-article-assets.mjs <slug>
import { createServer } from "vite";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const slug = process.argv[2];
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || "")) process.exit(2);
const server = await createServer({ configFile:false, root:process.cwd(), appType:"custom", server:{middlewareMode:true}, optimizeDeps:{noDiscovery:true} });
let article;
try {
  const { columns } = await server.ssrLoadModule("/src/data/columns.ts");
  const matches = columns.filter(c => c.slug === slug);
  if (matches.length !== 1) throw new Error("Expected one article for " + slug);
  article = matches[0];
} finally { await server.close(); }

const errors = [], warnings = [];
const assets = [
  ["heroImage", article.heroImage],
  ...(article.displayInlineImage === false ? [] : [["inlineImage", article.inlineImage]]),
  ...(article.additionalImages || []).map((v,i)=>["additionalImages["+i+"]",v]),
  ...((article.sourceDocument?.pageImages || []).map((src,i)=>["sourceDocument.pageImages["+i+"]",{src}]))
];
const magic = {
  png:b=>b.length>=24 && b.subarray(0,8).equals(Buffer.from("89504e470d0a1a0a","hex")),
  jpg:b=>b.length>=4 && b[0]===0xff && b[1]===0xd8 && b[b.length-2]===0xff && b[b.length-1]===0xd9,
  jpeg:b=>magic.jpg(b),
  gif:b=>b.length>=6 && ["GIF87a","GIF89a"].includes(b.toString("ascii",0,6)),
  webp:b=>b.length>=12 && b.toString("ascii",0,4)==="RIFF" && b.toString("ascii",8,12)==="WEBP",
  avif:b=>b.length>=16 && b.toString("ascii",4,8)==="ftyp" && ["avif","avis","mif1"].includes(b.toString("ascii",8,12)),
  svg:b=>/^\s*(?:<\?xml[^>]*>\s*)?(?:<!--[\s\S]*?-->\s*)*<svg[\s>]/i.test(b.toString("utf8")) 
};
for (const [role,img] of assets) {
  if (!img?.src || typeof img.src !== "string") { errors.push(role+": missing src"); continue; }
  if (!role.startsWith("sourceDocument") && (!img.alt?.trim() || !img.credit?.trim()))
    errors.push(role+": missing alt or credit");
  if (role.startsWith("additionalImages")) {
    if (!Number.isInteger(img.afterSection) || img.afterSection < -1 || img.afterSection >= article.sections.length)
      errors.push(role+": afterSection out of range");
  }
  if (/^https?:\/\//.test(img.src)) { warnings.push(role+": remote image needs live/browser check: "+img.src); continue; }
  if (/^(?:data:|\/\/)/.test(img.src) || img.src.includes("?") || img.src.includes("#")) {
    errors.push(role+": unsupported or unstable URL: "+img.src); continue;
  }
  const relative = img.src.replace(/^\//,"");
  const filepath = path.resolve("public",relative);
  const root = path.resolve("public")+path.sep;
  if (!filepath.startsWith(root)) { errors.push(role+": path traversal"); continue; }
  const ext = path.extname(filepath).slice(1).toLowerCase();
  if (!magic[ext]) { errors.push(role+": unsupported image extension "+ext); continue; }
  try {
    const info = await stat(filepath);
    if (!info.isFile() || info.size < 32) { errors.push(role+": empty or tiny file"); continue; }
    const bytes = await readFile(filepath);
    if (!magic[ext](bytes)) errors.push(role+": file signature/extension mismatch or corrupted image");
    if (ext === "svg" && /<script\b|\bon\w+\s*=|<foreignObject\b/i.test(bytes.toString("utf8")))
      errors.push(role+": potentially unsafe SVG markup");
  } catch(err) { errors.push(role+": unreadable image "+relative+" ("+err.code+")"); }
}
console.log(JSON.stringify({slug,assets:assets.length,passed:errors.length===0,errors,warnings},null,2));
if (errors.length) process.exitCode=1;
