import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile("supabase/functions/legislative-monitor/editorial-images.ts", "utf8");
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { validJpeg, readyImage, createEditorialImage } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const jpeg = new Uint8Array(10002);
jpeg.set([255, 216]);
jpeg.set([255, 217], 10000);
assert(validJpeg(jpeg));
assert(!validJpeg(new Uint8Array(10002)), "An HTML/error response must not count as artwork");
assert(!validJpeg(jpeg.slice(0, -1)), "A truncated upload must not count as artwork");
assert(!readyImage({ status: "ready", src: "x" }), "A URL without verification is insufficient");

globalThis.Deno = { env: { get: (key) => key === "OPENAI_API_KEY" ? "test-key" : "https://example.supabase.co" } };
let mode = "success";
let calls = [];
globalThis.fetch = async (url, init) => {
  calls.push(url);
  if (url.includes("api.openai.com")) return new Response(JSON.stringify({ data: [{ b64_json: Buffer.from(jpeg).toString("base64") }] }));
  if (init?.method === "POST") return new Response("", { status: mode === "upload-failure" ? 500 : 200 });
  return new Response(mode === "html" ? "<!doctype html>" : jpeg, { headers: { "Content-Type": mode === "html" ? "text/html" : "image/jpeg" } });
};
const bill = { slug: "bill-test", title: "Test bill" };
const analysis = { title_en: "Test bill", summary_ko: "Safety change" };
const image = await createEditorialImage(bill, analysis, {});
assert(readyImage(image));
assert.equal(calls.length, 3, "Generation, permanent upload and public read verification must all run");
assert.match(image.src, /\/storage\/v1\/object\/public\/editorial-images\/legislation\/bill-test\//);
mode = "upload-failure";
await assert.rejects(createEditorialImage(bill, analysis, {}), /storage returned HTTP 500/);
mode = "html";
await assert.rejects(createEditorialImage(bill, analysis, {}), /not publicly readable/);
// Recover a failed publication after the image was already verified, without
// spending another generation attempt or publishing an unauthorized draft.
const analysisFixture = { title_en: "Bill", official_rationale_en: "Purpose", summary_ko: "요약", summary_en: "Summary", direction_classification: "mixed", confidence: "medium" };
for (const field of ["changes", "positive_effects", "risks", "citizen_impact", "business_impact", "authority_shift", "direction_rationale", "watch_points", "evidence_gaps"]) {
  for (const language of ["ko", "en"]) analysisFixture[`${field}_${language}`] = [];
}
const completedImage = { ...image, attempts: 3 };
const rows = [
  { bill_id: "retry", slug: "bill-retry", review_state: "error", auto_published: true, analysis: analysisFixture, editorial_image: completedImage },
  { bill_id: "draft", slug: "bill-draft", review_state: "review", auto_published: false, analysis: analysisFixture, editorial_image: completedImage },
];
const writes = [];
globalThis.Deno.serve = () => {};
globalThis.fetch = async (url, init) => {
  assert(!url.includes("api.openai.com"), "Ready artwork must never be generated again");
  if (init?.method === "PATCH") {
    writes.push({ url, body: JSON.parse(init.body) });
    return new Response(null, { status: 204 });
  }
  return new Response(JSON.stringify(url.includes("bill_id=eq.") ? [{ editorial_image: completedImage }] : rows));
};
const helperUrl = `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`;
const monitorSource = (await readFile("supabase/functions/legislative-monitor/index.ts", "utf8"))
  .replace('import "jsr:@supabase/functions-js/edge-runtime.d.ts";', "")
  .replace('from "./editorial-images.ts"', `from "${helperUrl}"`) + "\nexport { repairBillImages };";
const monitorJs = ts.transpileModule(monitorSource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { repairBillImages } = await import(`data:text/javascript;base64,${Buffer.from(monitorJs).toString("base64")}`);
await repairBillImages(2);
assert.equal(writes.length, 1, "Only an authorized automatic publication can resume");
assert.match(writes[0].url, /bill_id=eq.retry/);
assert.equal(writes[0].body.review_state, "published");
console.log("Editorial image verification and publication recovery checks passed.");
