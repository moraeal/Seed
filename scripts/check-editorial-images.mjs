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
console.log("Editorial image failure and verification checks passed.");
