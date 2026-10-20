// Post-deploy HTTP smoke check for one public column. No credentials needed.
// Usage: node scripts/verify-live-column.mjs <slug> [base-url]
const slug = process.argv[2];
const base = (process.argv[3] || "https://seedvoice.kr").replace(/\/$/, "");
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("Usage: node scripts/verify-live-column.mjs <slug> [base-url]");
  process.exit(2);
}
const url = base + "/columns/" + slug + "/";
const errors = [];
const check = async (target, type) => {
  const response = await fetch(target, { signal: AbortSignal.timeout(20000), redirect: "follow", headers: { "User-Agent": "SEED-VOICE-publish-verifier/1.0" } });
  if (!response.ok) throw new Error(type + " HTTP " + response.status + ": " + target);
  return response;
};
let html = "";
try {
  const response = await check(url, "Article");
  html = await response.text();
  if (!/<html[\s>]/i.test(html)) errors.push("Article URL did not return HTML");
  if (!html.includes(slug)) errors.push("Article slug not found in returned HTML (could be SPA shell; inspect browser)");
  if (!html.includes('og:image')) errors.push("Open Graph image metadata not found");
  const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (match) {
    try {
      const imageUrl = new URL(match[1].replace(/&amp;/g, "&"), url).href;
      const imageResponse = await check(imageUrl, "Social image");
      if (!(imageResponse.headers.get("content-type") || "").startsWith("image/")) errors.push("Social image response is not image/*");
    } catch (error) { errors.push(String(error.message || error)); }
  }
} catch (error) { errors.push(String(error.message || error)); }
console.log(JSON.stringify({ url, passed: errors.length === 0, errors, limitation: "HTTP metadata check only; manual/browser mobile, body text, and all inline images require separate inspection" }, null, 2));
if (errors.length) process.exitCode = 1;
