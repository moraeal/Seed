// Integration negative tests against actual article-integrity.mjs, without changing articles.
// Creates an ephemeral approval snapshot for one existing article and deletes it afterward.
import { spawnSync } from "node:child_process";
import { readFile, writeFile, rm, mkdir, access } from "node:fs/promises";
const slug = "politicians-who-take-public-debt-lightly-2026";
const path = "editorial/approved/" + slug + ".json";
try { await access(path); throw Error("Cannot use existing approved snapshot in integration test"); }
catch(e) { if(e.code !== "ENOENT") throw e; }
const run=(action,env={})=>spawnSync(process.execPath,["scripts/article-integrity.mjs",action,slug],{env:{...process.env,...env},encoding:"utf8"});
await mkdir("editorial/approved",{recursive:true});
try {
  const unapproved = run("snapshot");
  if(unapproved.status===0)throw Error("Snapshot creation without approval was allowed");
  const approved = run("snapshot",{SEED_EDITOR_APPROVED:"1"});
  if(approved.status!==0)throw Error("Could not create temporary approval fixture: "+approved.stderr);
  if(run("verify").status!==0)throw Error("Valid approved article rejected");
  const data=JSON.parse(await readFile(path,"utf8"));
  const original=data.canonical;
  data.canonical={...original,title:"Unauthorized changed title"};
  await writeFile(path,JSON.stringify(data));
  if(run("verify").status===0)throw Error("Tampered approval snapshot accepted");
  await writeFile(path,JSON.stringify({...data,canonical:original}));
  if(run("verify").status!==0)throw Error("Valid snapshot did not recover");
  console.log("PASS actual verifier: unauthorized snapshot denied, approved accepted, tampered snapshot rejected");
} finally { await rm(path,{force:true}); }
if(run("verify").status===0)throw Error("Missing snapshot accepted");
console.log("PASS actual verifier: missing approval rejected");
