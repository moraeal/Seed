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
const attempts = [];
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const check = async (target, type) => {
  // Bounded retry for transient network/5xx failures; do not retry 4xx or bad content.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(target, { signal: AbortSignal.timeout(20000), redirect: "follow", headers: { "User-Agent": "SEED-VOICE-publish-verifier/1.0" } });
      attempts.push({ type, attempt, status: response.status });
      if (response.ok) return response;
      if (response.status < 500 || attempt === 3) throw new Error(type + " HTTP " + response.status + ": " + target);
    } catch (error) {
      if (attempt === 3 || / HTTP 4\d\d:/.test(String(error.message))) throw error;
      attempts.push({ type, attempt, error: String(error.message || error) });
    }
    await pause(1500 * attempt);
  }
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
const report = { url, passed: errors.length === 0, attempts, errors, limitation: "HTTP metadata check only; manual/browser mobile, body text, and all inline images require separate inspection" };
// Validate the three declared article photographs from the source data.
if (slug === "america-street-essay-2026") {
  const images = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_Homeless_Tents.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Market_Street,_San_Francisco_at_night_2023-02-18.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Permanently_closed_Walgreens_-_Market_St.,_San_Francisco.jpg",
  ];
  for (const [index, src] of images.entries()) {
    try {
      const response = await check(src, "Article photo " + (index + 1));
      if (!(response.headers.get("content-type") || "").startsWith("image/")) {
        errors.push("Article photo " + (index + 1) + " is not an image response");
      }
    } catch (error) { errors.push("Article photo " + (index + 1) + ": " + String(error.message || error)); }
  }
}
// For the forced-repatriation replacement, confirm the *new* hero bytes are live.
// A 200 article shell or an old social card is not enough to certify an image swap.
if (slug === "forced-repatriation-seven-years-human-rights-2026") {
  const heroPath = "images/columns/forced-repatriation-rights-2026/hero-no-text-20261022.jpg";
  try {
    const { readFile } = await import("node:fs/promises");
    const localBytes = await readFile("public/" + heroPath);
    const imageResponse = await check(base + "/" + heroPath, "Replacement article hero");
    if (!(imageResponse.headers.get("content-type") || "").startsWith("image/")) {
      errors.push("Replacement hero response is not an image");
    } else {
      const liveBytes = Buffer.from(await imageResponse.arrayBuffer());
      if (!localBytes.equals(liveBytes)) errors.push("Replacement hero bytes differ from deployed image");
    }
  } catch (error) { errors.push("Replacement hero: " + String(error.message || error)); }
}
report.passed = errors.length === 0;
console.log(JSON.stringify(report, null, 2));
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFileSync } = await import("node:fs");
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Public article verification: ${slug}\n\nResult: ${report.passed ? "PASS" : "FAIL"}\n\nAttempts: ${attempts.length}\n\nErrors: ${errors.join("; ") || "None"}\n`);
}
if (errors.length) process.exitCode = 1;
