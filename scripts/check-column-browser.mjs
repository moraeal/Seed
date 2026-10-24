// Browser rendering gate for a local built article. Requires Playwright Chromium.
// Usage: node scripts/check-column-browser.mjs <slug>
import { chromium } from "file:///tmp/seed-browser-tools/node_modules/playwright/index.mjs";
import { spawn } from "node:child_process";
const slug = process.argv[2];
const isHome = slug === "home";
const expectedArticleHeadings = {
  "politicians-who-take-public-debt-lightly-2026": "국가 빚, 너무 가볍게 보는 건 아닌가",
  "populism-collapse-generational-conflict-2026": "포퓰리즘의 몰락",
  "forced-repatriation-seven-years-human-rights-2026": "강제북송 7년 만에 유죄 판결",
  "merkel-china-industrial-dependence-2026": "독일은 자동차를 팔았고",
};
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || "")) process.exit(2);
const server = spawn("pnpm", ["exec","vite","preview","--host","127.0.0.1","--port","4179","--strictPort"], { stdio:"pipe" });
const base = "http://127.0.0.1:4179";
const wait = ms => new Promise(r=>setTimeout(r,ms));
let browser;
try {
  let ready=false;
  for(let i=0;i<30;i++){try{const res=await fetch(base);if(res.ok){ready=true;break;}}catch{}await wait(500);}
  if(!ready)throw Error("Preview server failed to start");
  browser=await chromium.launch({headless:true});
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const page=await browser.newPage({viewport,deviceScaleFactor:1});
    const failures=[];
    page.on("pageerror",e=>failures.push("JS: "+e.message));
    await page.goto(base+(isHome ? "/" : "/columns/"+slug+"/"),{waitUntil:"networkidle",timeout:45000});
    await page.locator("body").waitFor();
    await page.evaluate(async()=>{for(const img of document.images){img.loading="eager";}await Promise.all(Array.from(document.images).map(img=>img.decode().catch(()=>{})));});
    const info=await page.evaluate(()=>({
      images:Array.from(document.images).filter(i=>i.getClientRects().length).map(i=>({src:i.currentSrc||i.src,ok:i.complete&&i.naturalWidth>0})),
      overflow:document.documentElement.scrollWidth>innerWidth+2,
      text:document.body.innerText,
      h1:document.querySelector("main h1")?.innerText?.trim() || document.querySelector("h1")?.innerText?.trim() || "",
      ogImage:document.querySelector('meta[property="og:image"]')?.content || "",
    }));
    if(isHome && info.text.trim().length<100) failures.push("Homepage content not rendered");
    if(!isHome && info.text.trim().length<500) failures.push("Article body not rendered");
    if(!isHome && !info.h1.includes(expectedArticleHeadings[slug] || slug)) failures.push("Missing or wrong article H1: "+info.h1);
    if(!isHome && !info.ogImage) failures.push("Missing article og:image metadata");
    if(info.images.some(i=>!i.ok)) failures.push("Broken images: "+info.images.filter(i=>!i.ok).map(i=>i.src).join(", "));
    if(info.images.length<2)failures.push("Too few visible images");
    if(info.overflow)failures.push("Horizontal overflow");
    console.log(JSON.stringify({slug,viewport,images:info.images.length,failures}));
    await page.close();
    if(failures.length)process.exitCode=1;
  }
} catch(e){console.error(e);process.exitCode=1;}finally{await browser?.close();server.kill("SIGTERM");}
