// Approved-body snapshot utility. Snapshot creation must only follow editor approval.
// Usage: node scripts/article-integrity.mjs verify <slug>
//        node scripts/article-integrity.mjs snapshot <slug> (requires SEED_EDITOR_APPROVED=1)
import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fingerprint, verifyApproved } from "./manuscript-integrity-core.mjs";
import path from "node:path";

const [action, slug] = process.argv.slice(2);
if (!["verify", "snapshot"].includes(action) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || "")) {
  console.error("Usage: article-integrity.mjs <verify|snapshot> <slug>");
  process.exit(2);
}
const server = await createServer({configFile:false, root:process.cwd(), appType:"custom", server:{middlewareMode:true}, optimizeDeps:{noDiscovery:true}});
let article;
try {
  const {columns} = await server.ssrLoadModule("/src/data/columns.ts");
  const matches = columns.filter(c => c.slug === slug);
  if (matches.length !== 1) throw Error("Expected one article, found "+matches.length);
  article = matches[0];
} finally { await server.close(); }

const canonical = {
  slug: article.slug,
  title: article.title,
  subtitle: article.subtitle || "",
  summary: article.summary || "",
  sections: (article.sections || []).map(s=>({title:s.title||"",paragraphs:s.paragraphs||[]})),
};
const digest = fingerprint(canonical);
const lockFile = path.join("editorial","approved",slug+".json");
if (action === "snapshot") {
  if (process.env.SEED_EDITOR_APPROVED !== "1") throw Error("Editor approval required: SEED_EDITOR_APPROVED=1");
  await mkdir(path.dirname(lockFile),{recursive:true});
  await writeFile(lockFile,JSON.stringify({schemaVersion:1,slug,sha256:digest,canonical},null,2)+"\n",{flag:"wx"});
  console.log("Created immutable candidate editorial snapshot:",lockFile,digest);
} else {
  const approved = JSON.parse(await readFile(lockFile,"utf8"));
  try {
    const expected = verifyApproved(canonical, approved, slug);
    console.log("PASS approved-text match:", slug, expected);
  } catch (error) {
    console.error("APPROVED TEXT VERIFICATION FAILED:", slug, error.message);
    process.exitCode = 1;
  }
}
