// New article modules must have a valid approved manuscript snapshot before merge.
// Existing articles without a historical snapshot are reported but not retroactively blocked.
// Usage: node scripts/check-new-article-approvals.mjs <base-ref> [head-ref]
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
const [base,head="HEAD"]=process.argv.slice(2);
if(!base)process.exit(2);
const changes=execFileSync("git",["diff","--no-renames","--name-status",base,head,"--","src/data/columns/"],{encoding:"utf8"}).trim().split("\n").filter(Boolean);
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
// Existing approval records are write-once: a changed or deleted approved
// snapshot cannot silently redefine what the editor previously approved.
const lockChanges=execFileSync("git",["diff","--no-renames","--name-status",base,head,"--","editorial/approved/"],{encoding:"utf8"}).trim().split("\n").filter(Boolean);
for(const row of lockChanges){
  const [status,file]=row.split("\t");
  if(status!=="A"){
    console.error("Approved manuscript snapshot cannot be edited or deleted without a versioned editorial process:",status,file);
    failed=true;
  }
}
// Check every committed approval against the actual article, not only
// modules newly added in this PR. This also detects edits to locked articles.
if(existsSync("editorial/approved")){
  for(const filename of readdirSync("editorial/approved").filter(n=>/^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(n))){
    const slug=filename.slice(0,-5);
    const verified=spawnSync(process.execPath,["scripts/article-integrity.mjs","verify",slug],{stdio:"inherit"});
    if(verified.status!==0 || verified.error){
      console.error("Previously approved manuscript no longer matches published article:",slug);
      failed=true;
    }
  }
}
if(failed)process.exit(1);
console.log("PASS: newly added article modules have valid approval snapshots.");
