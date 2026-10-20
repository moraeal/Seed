// Unit tests for manuscript fingerprints: valid, altered, and missing approval.
// No production articles are modified.
import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
const digest = v => createHash("sha256").update(JSON.stringify(v)).digest("hex");
const approved={slug:"fixture",title:"승인 원고",subtitle:"",summary:"요약",sections:[{title:"첫 문단",paragraphs:["삭제되면 안 되는 본문입니다."]}]};
const lock={schemaVersion:1,slug:"fixture",sha256:digest(approved),canonical:approved};
function verify(article,snapshot){
  if(!snapshot) return false;
  return snapshot.schemaVersion===1 && snapshot.slug===article.slug &&
    digest(snapshot.canonical)===snapshot.sha256 && digest(article)===snapshot.sha256;
}
test("unchanged manuscript passes",()=>assert.equal(verify(structuredClone(approved),lock),true));
test("deleted paragraph fails",()=>{const changed=structuredClone(approved);changed.sections[0].paragraphs=[];assert.equal(verify(changed,lock),false)});
test("changed title fails",()=>{const changed={...approved,title:"승인되지 않은 제목"};assert.equal(verify(changed,lock),false)});
test("tampered approval file fails",()=>{const changed={...lock,canonical:{...approved,title:"변조"}};assert.equal(verify(approved,changed),false)});
test("missing approval fails",()=>assert.equal(verify(approved,null),false));
