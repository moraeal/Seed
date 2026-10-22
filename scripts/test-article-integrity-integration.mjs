// Integration checks are read-only. Never create or modify approval snapshots.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import assert from "node:assert/strict";
import { fingerprint, verifyApproved } from "./manuscript-integrity-core.mjs";
const canonical={slug:"read-only-fixture",title:"승인한 원고",subtitle:"",summary:"",sections:[{title:"내용",paragraphs:["편집자가 승인한 본문입니다."]}]};
const approved={schemaVersion:1,slug:canonical.slug,canonical,sha256:fingerprint(canonical)};
assert.equal(verifyApproved(canonical,approved),approved.sha256);
assert.throws(()=>verifyApproved({...canonical,title:"무단 변경"},approved),/MISMATCH/);
assert.throws(()=>verifyApproved(canonical,{...approved,sha256:"0".repeat(64)}),/integrity/);
assert.throws(()=>verifyApproved(canonical,undefined),/Invalid approval/);
const slug="politicians-who-take-public-debt-lightly-2026";
const lock="editorial/approved/"+slug+".json";
const result=spawnSync(process.execPath,["scripts/article-integrity.mjs","verify",slug],{encoding:"utf8",env:{...process.env,SEED_EDITOR_APPROVED:""}});
if(result.error)throw result.error;
if(existsSync(lock))assert.equal(result.status,0,"Committed approval must verify: "+result.stderr);
else assert.notEqual(result.status,0,"Missing approval snapshot must be rejected");
console.log("PASS: read-only manuscript checks; no approval files created");
