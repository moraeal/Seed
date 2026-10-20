// New article modules must have a valid approved manuscript snapshot before merge.
// Existing articles without a historical snapshot are reported but not retroactively blocked.
// Usage: node scripts/check-new-article-approvals.mjs <base-ref> [head-ref]
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
const [base,head="HEAD"]=process.argv.slice(2);
if(!base)process.exit(2);
const changes=execFileSync("git",["diff","--name-status",base,head,"--","src/data/columns/"],{encoding:"utf8"}).trim().split("\n").filter(Boolean);
let failed=false;
for(const row of changes){
  const [status,file]=row.split("\t");
  if(status!=="A" || !/^src\/data\/columns\/[^/]+\.tsx?$/.test(file||""))continue;
  const source=readFileSync(file,"utf8");
  const slugs=[...source.matchAll(/\bslug\s*:\s*["']([a-z0-9]+(?:-[a-z0-9]+)*)["']/g)].map(x=>x[1]);
  if(slugs.length!==1){console.error("New article requires exactly one literal slug:",file);failed=true;continue;}
  const slug=slugs[0],lock="editorial/approved/"+slug+".json";
  if(!existsSync(lock)){console.error("Missing editor-approved manuscript snapshot for new article:",slug);failed=true;continue;}
  try{
    const data=JSON.parse(readFileSync(lock,"utf8"));
    const hash=createHash("sha256").update(JSON.stringify(data.canonical)).digest("hex");
    if(data.schemaVersion!==1||data.slug!==slug||data.sha256!==hash)throw Error("invalid approval fingerprint");
    const verified=spawnSync(process.execPath,["scripts/article-integrity.mjs","verify",slug],{stdio:"inherit"});
    if(verified.status!==0 || verified.error)throw Error("Approved snapshot differs from article body");
    console.log("Approved snapshot and article body verified:",slug);
  }catch(err){console.error("Invalid approved snapshot",slug,err.message);failed=true;}
}
if(failed)process.exit(1);
console.log("PASS: newly added article modules have valid approval snapshots.");
