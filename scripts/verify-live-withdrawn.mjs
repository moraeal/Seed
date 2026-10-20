// Post-deploy read-only verification: withdrawn articles must not be linked,
// indexed, or served as a live article. Usage: node scripts/verify-live-withdrawn.mjs
import { readFile } from "node:fs/promises";

const policy = JSON.parse(await readFile(new URL("../editorial/withdrawn-slugs.json", import.meta.url), "utf8"));
if (policy.schemaVersion !== 1 || !Array.isArray(policy.slugs) || !policy.slugs.length) {
  throw Error("Missing or invalid withdrawn-article policy");
}
const base = (process.env.SEED_PUBLIC_BASE_URL || "https://seedvoice.kr").replace(/\\/$/, "");
const failures = [];
const get = async (path) => {
  let error;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(base + path, {
        redirect: "follow", signal: AbortSignal.timeout(20000),
        headers: { "User-Agent": "SeedVoice-withdrawn-deployment-check/1.0" },
      });
      if (response.status >= 500) throw Error("HTTP " + response.status);
      return { response, body: await response.text() };
    } catch (caught) {
      error = caught;
      if (attempt !== 3) await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
  throw Error(path + ": " + String(error));
};
const pages = ["/", "/columns/", "/sitemap.xml", "/news-sitemap.xml"];
for (const page of pages) {
  try {
    const { response, body } = await get(page);
    if (!response.ok) failures.push(page + " returned HTTP " + response.status);
    for (const slug of policy.slugs) {
      if (body.includes(slug)) failures.push(page + " still references withdrawn article " + slug);
    }
  } catch (error) { failures.push(String(error)); }
}
for (const slug of policy.slugs) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw Error("Invalid withdrawn slug " + slug);
  const url = "/columns/" + slug + "/";
  try {
    const { response, body } = await get(url);
    const noindex = /<meta\\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(body)
      || /<meta\\s+[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots/i.test(body)
      || /\\bnoindex\\b/i.test(response.headers.get("x-robots-tag") || "");
    if (response.status !== 404 && response.status !== 410 && !(noindex && response.ok)) {
      failures.push(url + " has public HTTP " + response.status + " without noindex");
    }
    if (response.ok && /<meta\\s+[^>]*property=["']og:type["'][^>]*content=["']article/i.test(body)) {
      failures.push(url + " still renders indexable article metadata");
    }
    console.log("Withdrawn URL", url, "status", response.status, "noindex", noindex);
  } catch (error) { failures.push(String(error)); }
}
if (failures.length) {
  console.error("POST-DEPLOY WITHDRAWN ARTICLE FAILURES:\\n" + failures.join("\\n"));
  process.exitCode = 1;
} else console.log("PASS: withdrawn articles are absent from public lists and indexes and not served as public articles");
