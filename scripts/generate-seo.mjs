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
const [{ seoRoutes, canonicalUrl, SITE_NAME, ENGLISH_SITE_NAME, SITE_URL }, newsModule, briefingModule, columnModule, watchModule, siteContentModule] = await Promise.all([
  server.ssrLoadModule("/src/seo.ts"),
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/publicInterestWatch.ts"),
  server.ssrLoadModule("/src/data/siteContent.ts"),
]);
await server.close();

const news = newsModule.newsArticles;
const briefings = briefingModule.getAllBriefingsNewestFirst();
const columns = columnModule.columns;
const watchCases = watchModule.publicInterestWatchCases;
const englishContent = siteContentModule.getContent("en");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const cdata = (value = "") => `<![CDATA[${String(value).replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;
const rfc822 = (date) => new Date(`${date}T00:00:00+09:00`).toUTCString();

const paragraphList = (items = []) => items.filter(Boolean).map((item) => `<p>${escapeHtml(item)}</p>`).join("\n");
const bulletList = (items = []) => items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";

function articleBody(route) {
  if (route.path === "/en") return [
    `<section><h2>About SEED Civic Partners</h2><p>${escapeHtml(englishContent.home.description)}</p></section>`,
    `<section><h2>Our Core Values</h2>${bulletList(englishContent.home.pillars.map(([title, description]) => `${title}: ${description}`))}</section>`,
    `<section><h2>Core Programs</h2>${bulletList(englishContent.home.programs.map(([title, description]) => `${title}: ${description}`))}</section>`,
    `<section><h2>Political and Organizational Independence</h2><p>${escapeHtml(englishContent.about.independence)}</p></section>`,
    `<section><h2>Founder &amp; President</h2><p><strong>${escapeHtml(englishContent.about.founderName)}</strong></p><p>${escapeHtml(englishContent.about.founderBio)}</p></section>`,
    `<section><h2>Contact</h2><p>${escapeHtml(englishContent.about.contact)}</p></section>`,
  ].join("\n");

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
  const language = route.language === "en" ? "en" : "ko-KR";
  const siteName = route.language === "en" ? ENGLISH_SITE_NAME : SITE_NAME;
  if (route.path === "/" || route.path === "/en") return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: canonicalUrl(route.path),
    description: route.description,
    inLanguage: language,
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
    inLanguage: language,
    ...(route.image ? { image: route.image } : {}),
  };
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: route.title.replace(/ \| .*$/, ""),
    description: route.description,
    url: canonicalUrl(route.path),
    isPartOf: { "@type": "WebSite", name: siteName, url: SITE_URL },
    inLanguage: language,
  };
}

function render(route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = canonicalUrl(route.path);
  const language = route.language === "en" ? "en" : "ko";
  const siteName = route.language === "en" ? ENGLISH_SITE_NAME : SITE_NAME;
  const languageAlternates = route.path === "/" || route.path === "/en"
    ? `\n    <link rel="alternate" hreflang="ko" href="${canonicalUrl("/")}" />\n    <link rel="alternate" hreflang="en" href="${canonicalUrl("/en")}" />\n    <link rel="alternate" hreflang="x-default" href="${canonicalUrl("/")}" />`
    : "";
  const jsonLd = JSON.stringify(structuredData(route)).replaceAll("<", "\\u003c");
  const socialImage = route.image ? `
    <meta property="og:image" content="${escapeHtml(route.image)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(route.image)}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(route.imageAlt || route.title)}" />
    <meta name="twitter:image" content="${escapeHtml(route.image)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(route.imageAlt || route.title)}" />` : "";
  const head = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />${languageAlternates}
    <meta property="og:type" content="${route.type}" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    ${socialImage}
    <meta name="twitter:card" content="${route.image ? "summary_large_image" : "summary"}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <script type="application/ld+json">${jsonLd}</script>`;
  const fallbackLabel = route.language === "en" ? "Search-engine content" : "검색엔진용 본문";
  const fallbackSection = route.section || siteName;
  const fallback = `<article aria-label="${fallbackLabel}" style="max-width:860px;margin:0 auto;padding:48px 24px;font-family:system-ui,sans-serif;line-height:1.85;color:#26332f"><p style="font-size:12px;letter-spacing:.12em;color:#426b59">${escapeHtml(fallbackSection)}</p><h1 style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.2;color:#123b30">${title.replace(/ \| .*$/, "")}</h1><p style="font-size:1.1rem;color:#4d5c56">${description}</p>${articleBody(route)}</article>`;

  return template
    .replace(/<html\s+lang="[^"]*">/i, `<html lang="${language}">`)
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
const feedRoutes = seoRoutes
  .filter((route) => route.type === "article" && route.lastModified)
  .sort((a, b) => b.lastModified.localeCompare(a.lastModified) || a.path.localeCompare(b.path))
  .slice(0, 50);
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}/</link>
    <description>확인된 사실과 맥락, 분명한 관점으로 한국 정치·사회 이슈를 전하는 씨드 시민저널의 최신 콘텐츠입니다.</description>
    <language>ko-KR</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${rfc822(feedRoutes[0].lastModified)}</lastBuildDate>
${feedRoutes.map((route) => `    <item>
      <title>${cdata(route.title.replace(/ \| .*$/, ""))}</title>
      <link>${canonicalUrl(route.path)}</link>
      <guid isPermaLink="true">${canonicalUrl(route.path)}</guid>
      <pubDate>${rfc822(route.lastModified)}</pubDate>
      <dc:creator>${cdata(route.author || SITE_NAME)}</dc:creator>
      <category>${cdata(route.section || SITE_NAME)}</category>
      <description>${cdata(route.description)}</description>
      <content:encoded>${cdata(articleBody(route))}</content:encoded>
    </item>`).join("\n")}
  </channel>
</rss>
`;
await writeFile(path.join(dist, "rss.xml"), rss);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
