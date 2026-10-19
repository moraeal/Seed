#!/usr/bin/env node
/**
 * Browser smoke check for the public NEWS TRACKING UI.
 * Tests the deployed site on desktop and mobile; records screenshots.
 * No modification of site content or external sources.
 */
import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://seedvoice.kr";
const OUT = "tracker-smoke-artifacts";
const TRACKERS = [
  "france-protests-fiscal-crisis-2026",
  "dmz-mine-blast-2026",
  "yeosu-world-island-expo-tracker",
  "supreme-court-renomination-tracker-2026",
  "banking-privacy-ai-hacking-tracker-2026",
];
const results = [];
const errors = [];
const check = (ok, note) => {
  results.push({ ok: Boolean(ok), note });
  if (!ok) errors.push(note);
  console.log((ok ? "PASS " : "FAIL ") + note);
};

async function checkPage(browser, name, viewport) {
  const page = await browser.newPage({ viewport, locale: "ko-KR", timezoneId: "Asia/Seoul" });
  page.setDefaultTimeout(22000);
  try {
    const response = await page.goto(BASE + "/monitoring?view=trackers", { waitUntil: "domcontentloaded", timeout: 30000 });
    check((response?.status() ?? 500) < 400, name + ": index HTTP response below 400");
    await page.locator('section[aria-label="뉴스트래커 기사 목록"] a[href^="/monitoring/"]').first().waitFor({ state: "visible" });
    const cards = page.locator('section[aria-label="뉴스트래커 기사 목록"] a[href^="/monitoring/"]');
    const count = await cards.count();
    check(count >= 14, name + ": at least 14 tracker cards, got " + count);
    const links = await cards.evaluateAll((els) => els.map((e) => e.getAttribute("href")));
    for (const slug of TRACKERS) check(links.includes("/monitoring/" + slug), name + ": " + slug + " card present");
    let failedImages = [];
    for (const card of await cards.all()) {
      const img = card.locator("img");
      if (await img.count() === 0) continue;
      await card.scrollIntoViewIfNeeded();
      await img.waitFor({ state: "visible", timeout: 12000 });
      // SafeImage can replace a broken original with the local fallback.
      await page.waitForTimeout(180);
      try {
        await img.evaluate(async (i) => {
          if (!i.complete) await Promise.race([
            new Promise((resolve) => { i.addEventListener("load", resolve, {once:true}); i.addEventListener("error", resolve, {once:true}); }),
            new Promise((resolve) => setTimeout(resolve, 4000)),
          ]);
        });
      } catch {}
      const ok = await img.evaluate(i => i.complete && i.naturalWidth > 0);
      if (!ok) failedImages.push(await card.getAttribute("href"));
    }
    check(failedImages.length === 0, name + ": cards with broken image even after fallback = " + JSON.stringify(failedImages));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    check(overflow <= 8, name + ": horizontal overflow <=8px (measured " + overflow + "px)");
    await page.screenshot({ path: OUT + "/tracker-index-" + name + ".png", fullPage: true });
    // Public detail pages: do not fetch external newspaper sites, just check cards and their article views.
    for (const slug of TRACKERS.slice(0, name === "mobile" ? 3 : 5)) {
      const p = await page.goto(BASE + "/monitoring/" + slug, { waitUntil: "domcontentloaded", timeout: 30000 });
      check((p?.status() ?? 500) < 400, name + ": detail HTTP " + slug);
      await page.locator("article h1").first().waitFor({ state:"visible", timeout: 20000 });
      const heading = await page.locator("article h1").first().innerText();
      check(heading.trim().length >= 10, name + ": readable article title " + slug);
      const external = await page.locator('article a[href^="http"]').count();
      check(external > 0, name + ": article source/external link(s) " + slug);
      const mainImage = page.locator("article figure img").first();
      if (await mainImage.count()) {
        await mainImage.scrollIntoViewIfNeeded();
        await page.waitForTimeout(450);
        const loaded = await mainImage.evaluate(i => i.complete && i.naturalWidth > 0);
        check(loaded, name + ": detail hero image loads " + slug);
      }
      const wide = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      check(wide <= 8, name + ": article no horizontal overflow " + slug + " (" + wide + "px)");
    }
  } finally {
    await page.close();
  }
}
async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true, args:["--no-sandbox","--disable-dev-shm-usage"] });
  try {
    await checkPage(browser, "desktop", {width:1365,height:900});
    await checkPage(browser, "mobile", {width:390,height:844,isMobile:true,deviceScaleFactor:1});
  } finally {
    await browser.close();
    await writeFile(OUT + "/report.json", JSON.stringify({ checkedAt:new Date().toISOString(), results, errors },null,2));
  }
  if(errors.length) { console.error("FAILED CHECKS: " + errors.join(" | "));process.exitCode=1; }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
