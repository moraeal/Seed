import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");

const server = await createServer({
  configFile: false,
  root,
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const [{ seoRoutes, canonicalUrl, SITE_NAME, SITE_URL }, newsModule, briefingModule, columnModule, watchModule] = await Promise.all([
  server.ssrLoadModule("/src/seo.ts"),
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/publicInterestWatch.ts"),
]);
await server.close();

const news = newsModule.newsArticles;
const briefings = briefingModule.getAllBriefingsNewestFirst();
const columns = columnModule.columns;
const watchCases = watchModule.publicInterestWatchCases;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const paragraphList = (items = []) => items.filter(Boolean).map((item) => `<p>${escapeHtml(item)}</p>`).join("\n");
const bulletList = (items = []) => items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";

function articleBody(route) {
  const newsMatch = route.path.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const item = news.find((entry) => entry.slug === newsMatch[1]);
    if (item) return [
      `<p><strong>${escapeHtml(item.keySentence)}</strong></p>`,
      ...item.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}${bulletList(section.bullets)}</section>`),
      `<section><h2>시민이 지켜볼 점</h2>${bulletList(item.watchPoints)}</section>`,
      `<section><h2>씨드의 관점</h2>${paragraphList(item.seedPerspective)}</section>`,
    ].join("\n");
  }

  const briefingMatch = route.path.match(/^\/briefings\/([^/]+)(?:\/commentary)?$/);
  if (briefingMatch) {
    const item = briefings.find((entry) => entry.slug === briefingMatch[1]);
    if (item) {
      if (route.path.endsWith("/commentary") && item.commentary) return paragraphList(item.commentary.paragraphs);
      return [
        paragraphList(item.content),
        ...(item.sections ?? []).map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}${bulletList(section.bullets)}</section>`),
        item.watchPoints?.length ? `<section><h2>시민이 지켜볼 점</h2>${bulletList(item.watchPoints)}</section>` : "",
      ].join("\n");
    }
  }

  const columnMatch = route.path.match(/^\/columns\/([^/]+)$/);
  if (columnMatch) {
    const item = columns.find((entry) => entry.slug === columnMatch[1]);
    if (item) return item.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}${bulletList(section.quote)}</section>`).join("\n");
  }

  const watchMatch = route.path.match(/^\/monitoring\/([^/]+)$/);
  if (watchMatch) {
    const item = watchCases.find((entry) => entry.slug === watchMatch[1]);
    if (item) return [
      `<section><h2>확인된 사실</h2>${bulletList(item.confirmedFacts.map((fact) => fact.ko))}</section>`,
      `<section><h2>시민이 물을 점</h2>${bulletList(item.questions.map((question) => question.ko))}</section>`,
      `<section><h2>씨드의 제안</h2>${bulletList(item.proposals.map((proposal) => proposal.ko))}</section>`,
    ].join("\n");
  }

  const listing = route.path === "/news" ? news.map((item) => ({ path: `/news/${item.slug}`, title: item.title, summary: item.summary }))
    : route.path === "/briefings" ? briefings.map((item) => ({ path: `/briefings/${item.slug}`, title: item.title, summary: item.summary }))
    : route.path === "/columns" ? columns.map((item) => ({ path: `/columns/${item.slug}`, title: item.title, summary: item.summary }))
    : route.path === "/monitoring" ? watchCases.map((item) => ({ path: `/monitoring/${item.slug}`, title: item.title.ko, summary: item.summary.ko }))
    : [];

  if (listing.length) return `<ul>${listing.map((item) => `<li><a href="${canonicalUrl(item.path)}"><strong>${escapeHtml(item.title)}</strong></a><p>${escapeHtml(item.summary)}</p></li>`).join("\n")}</ul>`;
  return `<p>${escapeHtml(route.description)}</p>`;
}

function structuredData(route) {
  if (route.path === "/") return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: route.description,
  };
  if (route.type === "article") return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: route.title.replace(/ \| .*$/, ""),
    description: route.description,
    datePublished: route.lastModified,
    dateModified: route.lastModified,
    mainEntityOfPage: canonicalUrl(route.path),
    author: { "@type": "Person", name: route.author || SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    articleSection: route.section,
    inLanguage: "ko-KR",
  };
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: route.title.replace(/ \| .*$/, ""),
    description: route.description,
    url: canonicalUrl(route.path),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    inLanguage: "ko-KR",
  };
}

function render(route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = canonicalUrl(route.path);
  const jsonLd = JSON.stringify(structuredData(route)).replaceAll("<", "\\u003c");
  const head = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${route.type}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <script type="application/ld+json">${jsonLd}</script>`;
  const fallback = `<article aria-label="검색엔진용 본문" style="max-width:860px;margin:0 auto;padding:48px 24px;font-family:system-ui,sans-serif;line-height:1.85;color:#26332f"><p style="font-size:12px;letter-spacing:.12em;color:#426b59">${escapeHtml(route.section || SITE_NAME)}</p><h1 style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.2;color:#123b30">${title.replace(/ \| .*$/, "")}</h1><p style="font-size:1.1rem;color:#4d5c56">${description}</p>${articleBody(route)}</article>`;

  return template
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/i, "")
    .replace(/\s*<meta\s+name="robots"[\s\S]*?\/>/i, "")
    .replace(/\s*<link\s+rel="canonical"[\s\S]*?\/>/i, "")
    .replace(/\s*<meta\s+(?:property="og:[^"]+"|name="twitter:[^"]+")[\s\S]*?\/>/gi, "")
    .replace("</head>", `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
}

for (const route of seoRoutes) {
  const output = route.path === "/" ? path.join(dist, "index.html") : path.join(dist, route.path.slice(1), "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, render(route));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoRoutes.map((route) => `  <url>\n    <loc>${canonicalUrl(route.path)}</loc>${route.lastModified ? `\n    <lastmod>${route.lastModified}</lastmod>` : ""}\n  </url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
