// Tests the same pure verifier used in production, with in-memory fixtures only.
import test from "node:test";
import assert from "node:assert/strict";
import { fingerprint, verifyApproved } from "./manuscript-integrity-core.mjs";
const canonical={slug:"fixture",title:"승인 원고",subtitle:"",summary:"요약",sections:[{title:"첫 문단",paragraphs:["삭제되면 안 되는 본문입니다."]}]};
const approved={schemaVersion:1,slug:"fixture",canonical,sha256:fingerprint(canonical)};
test("unchanged manuscript passes",()=>assert.equal(verifyApproved(structuredClone(canonical),approved),approved.sha256));
test("deleted paragraph fails",()=>{const changed=structuredClone(canonical);changed.sections[0].paragraphs=[];assert.throws(()=>verifyApproved(changed,approved),/MISMATCH/)});
test("changed title fails",()=>assert.throws(()=>verifyApproved({...canonical,title:"승인되지 않은 제목"},approved),/MISMATCH/));
test("tampered approval fails",()=>assert.throws(()=>verifyApproved(canonical,{...approved,canonical:{...canonical,title:"변조"}}),/integrity/));
test("missing approval fails",()=>assert.throws(()=>verifyApproved(canonical,null),/Invalid approval/));
