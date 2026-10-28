import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");

const server = await createServer({
  configFile: false,
  ssr: { resolve: { externalConditions: ["node", "module-sync"] } },
  root,
  appType: "custom",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const civicSectionsModule = await server.ssrLoadModule("/src/data/civicSections.ts");
const campaignDiscoveryModule = await server.ssrLoadModule("/src/data/campaignDiscovery.ts");
const noMoreTaxLandingModule = await server.ssrLoadModule("/src/data/noMoreTaxLanding.ts");
const socialProfilesModule = await server.ssrLoadModule("/src/data/officialSocialProfiles.ts");
const [{ seoRoutes, canonicalUrl, SITE_NAME, SITE_DESCRIPTION, SOCIAL_SITE_NAME, ENGLISH_SOCIAL_SITE_NAME, SITE_URL }, newsModule, briefingModule, columnModule, watchModule, seedWatchModule, siteContentModule, seedLanguageModule, seedLanguageEnvironmentModule, communityChestModule, legislativeCommentaryModule] = await Promise.all([
  server.ssrLoadModule("/src/seo.ts"),
  server.ssrLoadModule("/src/data/news.ts"),
  server.ssrLoadModule("/src/data/allBriefings.ts"),
  server.ssrLoadModule("/src/data/columns.ts"),
  server.ssrLoadModule("/src/data/newsTrackerRegistry.ts"),
  server.ssrLoadModule("/src/data/seedWatchIndex.ts"),
  server.ssrLoadModule("/src/data/siteContent.ts"),
  server.ssrLoadModule("/src/data/seedLanguage.ts"),
  server.ssrLoadModule("/src/data/seedLanguageEnvironment.ts"),
  server.ssrLoadModule("/src/data/communityChestResearch.ts"),
  server.ssrLoadModule("/src/data/legislativeCommentaries.ts"),
]);
const { prerenderHome } = await server.ssrLoadModule("/src/prerenderHome.tsx");
const { getEditorialSeries } = await server.ssrLoadModule("/src/data/editorialSeries.ts");
const publishedSeries = getEditorialSeries("ko");
const { getHomepageArchiveCards } = await server.ssrLoadModule("/src/data/hotIssueSelection.ts");
const homeSnapshot = JSON.parse(await readFile(path.join(root, "src/data/homeSnapshot.json"), "utf8"));
const homepageArchive = getHomepageArchiveCards("ko", homeSnapshot.bills, homeSnapshot.history);
const homeHtml = new Map([["/", prerenderHome("/")], ["/en", prerenderHome("/en/")]]);
await server.close();

const news = newsModule.newsArticles;
const briefings = briefingModule.getAllBriefingsNewestFirst();
const columns = columnModule.columns;
const editorialColumns = columnModule.getColumnsNewestFirst();
const watchCases = watchModule.publicInterestWatchCases;
const seedWatchReferences = seedWatchModule.seedWatchReferences;
const englishContent = siteContentModule.getContent("en");
const seedLanguageArticles = [
  ...seedLanguageEnvironmentModule.seedLanguageEnvironmentArticlesKo,
  ...seedLanguageModule.seedLanguageArticlesKo,
];
const communityChestResearch = communityChestModule.communityChestResearch.ko;
const legislativeCommentaries = legislativeCommentaryModule.legislativeCommentaries;
const publisherLogo = `${SITE_URL}/images/brand/seed-civic-partners-logo.svg`;
const officialSocialUrls = socialProfilesModule.officialSocialProfiles.map((profile) => profile.url);
const koreaDateTime = (date) => date ? `${date}T00:00:00+09:00` : undefined;

// GitHub Pages needs a physical file for each database-backed bill detail URL.
// Read only public, published records so previews never enter the sitemap.
const publishedBills = JSON.parse(await readFile(path.join(process.cwd(), ".seed-build", "published-bills.json"), "utf8"));
if (!Array.isArray(publishedBills) || publishedBills.length >= 1000) {
  throw new Error("Published bill list is invalid or exceeds the current page limit");
}
const publishedBillBySlug = new Map(publishedBills.map((bill) => [bill.slug, bill]));
const allRoutes = [
  ...seoRoutes,
  ...publishedBills.filter((bill) => /^bill-\d+$/.test(bill.slug)).map((bill) => ({
    path: `/monitoring/legislation/${bill.slug}`,
    title: `${bill.title} | 씨앗의 소리`,
    description: bill.public_summary_ko || `${bill.title}의 발의 내용과 입법 진행 상황을 살펴봅니다.`,
    type: "article",
    image: bill.editorial_image?.status === "ready" ? `${SITE_URL}/images/social/legislation/${bill.slug}.jpg` : undefined,
    imageAlt: bill.editorial_image?.alt_ko || bill.title,
    publishedAt: bill.published_at?.slice(0, 10),
    lastModified: bill.published_at?.slice(0, 10),
    author: SITE_NAME,
    section: "입법감시",
  })),
];

const seedWatchListing = seedWatchReferences.map((reference) => {
  if (reference.kind === "news") {
    const item = news.find((entry) => entry.slug === reference.slug);
    return item ? { path: `/news/${item.slug}`, title: item.title, summary: item.summary, date: item.date } : null;
  }
  if (reference.kind === "briefing") {
    const item = briefings.find((entry) => entry.slug === reference.slug);
    return item ? { path: `/briefings/${item.slug}`, title: item.title, summary: item.summary, date: item.date } : null;
  }
  const item = columns.find((entry) => entry.slug === reference.slug);
  return item ? { path: `/columns/${item.slug}`, title: item.title, summary: item.summary, date: item.date } : null;
}).filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));

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

function campaignDiscoveryHtml(section) {
  const content = campaignDiscoveryModule.campaignDiscovery.ko;
  const title = section === "about" ? content.aboutTitle : content.columnsTitle;
  const description = section === "about" ? content.aboutDescription : content.columnsDescription;
  return `<section><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p><nav aria-label="No More Tax 관련 페이지"><a href="${canonicalUrl("/civic-campaign")}">${escapeHtml(content.campaignCta)}</a> · <a href="${canonicalUrl("/tax-watch-movement")}">${escapeHtml(content.archiveCta)}</a></nav></section>`;
}

function articleBody(route) {
  // Pre-render series navigation for readers without JavaScript and crawlers.
  // Only chapters already registered in the public columns registry appear here.
  if (route.path === "/series") return `<section aria-label="기획연재 전체 목록"><h2>연재별로 읽기</h2><ul>${publishedSeries.map((series) => `<li><a href="${canonicalUrl("/series/" + series.slug)}"><strong>${escapeHtml(series.title)}</strong></a><p>${escapeHtml(series.description)}</p><p>공개된 기사 ${series.chapters.length}편</p></li>`).join("")}</ul></section>`;
  const seriesMatch = route.path.match(/^\/series\/([^/]+)$/);
  if (seriesMatch) {
    const series = publishedSeries.find((item) => item.slug === seriesMatch[1]);
    if (series) return `<section aria-label="${escapeHtml(series.title)} 연재 목차"><h2>연재 목차</h2><ol>${series.chapters.map((chapter) => `<li><a href="${canonicalUrl(chapter.path)}"><strong>${escapeHtml(chapter.title)}</strong></a><p>${escapeHtml(chapter.summary)}</p><time datetime="${escapeHtml(chapter.date)}">${escapeHtml(chapter.date)}</time></li>`).join("")}</ol><p><a href="${canonicalUrl("/series")}">기획연재 전체보기</a></p></section>`;
  }
  if (route.path === "/about") return campaignDiscoveryHtml("about");
  if (route.path === "/civic-campaign") {
    const campaign = noMoreTaxLandingModule.noMoreTaxLanding.ko;
    return [
      `<section><h2>증세반대운동 No More Tax 소개</h2>${paragraphList([campaign.introduction, campaign.activities])}</section>`,
      `<section><h2>시민 참여 방법</h2>${paragraphList([campaign.participation])}<p><a href="${canonicalUrl("/civic-campaign")}#campaign-signature-form">No More Tax 서명 참여</a></p></section>`,
      `<section><h2>증세반대운동 참여 안내 · 자주 묻는 질문</h2>${campaign.faq.map((item) => {
        const [pathPart, fragment] = item.href.split("#");
        const href = canonicalUrl(pathPart) + (fragment ? "#" + fragment : "");
        return `<article><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p><p><a href="${escapeHtml(href)}">${escapeHtml(item.linkLabel)}</a></p></article>`;
      }).join("\n")}</section>`,
      `<section><h2>관련 활동 및 자료</h2><ul>
        <li><a href="${canonicalUrl("/tax-watch-movement")}">세금감시운동 활동과 기록</a></li>
        <li><a href="${canonicalUrl("/columns/no-more-tax-increases-civic-declaration-2026")}">증세반대 시민선언</a></li>
        <li><a href="${canonicalUrl("/briefings/korean-civic-tax-watch-movement-ktr")}">한국형 시민 세금감시운동 제안</a></li>
      </ul></section>`,
    ].join("\n");
  }
  const billMatch = route.path.match(/^\/monitoring\/legislation\/(bill-\d+)$/);
  if (billMatch) {
    const bill = publishedBillBySlug.get(billMatch[1]);
    if (bill) return [
      bill.public_summary_ko ? `<section><h2>법안 요약</h2>${paragraphList([bill.public_summary_ko])}</section>` : "",
      bill.seed_view_ko ? `<section><h2>씨앗의 관점</h2>${paragraphList([bill.seed_view_ko])}</section>` : "",
      bill.detail_url ? `<p><a href="${escapeHtml(bill.detail_url)}">국회 의안정보 원문</a></p>` : "",
    ].join("\n");
  }
  if (route.path === "/") {
    const latest = [
      ...news.map((item) => ({ path: `/news/${item.slug}`, title: item.title, summary: item.summary, date: item.date })),
      ...briefings.map((item) => ({ path: `/briefings/${item.slug}`, title: item.title, summary: item.summary, date: item.date })),
      ...columns.map((item) => ({ path: `/columns/${item.slug}`, title: item.title, summary: item.summary, date: item.date })),
      ...seedLanguageArticles.map((item) => ({ path: `/seed-language/${item.slug}`, title: item.title, summary: item.summary, date: item.date })),
      ...legislativeCommentaries.map((item) => ({ path: `/monitoring/legislation/commentary/${item.slug}`, title: item.editions.ko.title, summary: item.editions.ko.summary, date: item.date })),
    ].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title)).slice(0, 12);
    return `<section><h2>최신 기사</h2><ul>${latest.map((item) => `<li><a href="${canonicalUrl(item.path)}"><strong>${escapeHtml(item.title)}</strong></a><p>${escapeHtml(item.summary)}</p></li>`).join("\n")}</ul></section>`;
  }

  if (route.path === "/en") return [
    `<section><h2>About SEED VOICE</h2><p>${escapeHtml(englishContent.home.description)}</p></section>`,
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
    if (item) {
      const related = {
        "politicians-who-take-public-debt-lightly-2026": [
          ["/columns/atr-taxpayer-movement-05-sustainable-budgets", "정부 예산 낭비와 쪽지예산"],
          ["/columns/france-fiscal-crisis-korea-spending-no-more-tax-2026", "프랑스 재정위기의 교훈"],
          ["/civic-campaign", "No More Tax 시민 서명과 세금감시"],
        ],
        "atr-taxpayer-movement-05-sustainable-budgets": [
          ["/columns/politicians-who-take-public-debt-lightly-2026", "국가부채와 미래세대의 부담"],
          ["/columns/france-fiscal-crisis-korea-spending-no-more-tax-2026", "프랑스 재정위기와 예산"],
          ["/civic-campaign", "No More Tax 시민운동"],
        ],
        "france-fiscal-crisis-korea-spending-no-more-tax-2026": [
          ["/columns/politicians-who-take-public-debt-lightly-2026", "국가부채 문제 분석"],
          ["/columns/atr-taxpayer-movement-05-sustainable-budgets", "지속가능한 예산운동"],
          ["/civic-campaign", "No More Tax 시민운동 소개"],
        ],
      }[item.slug] ?? [];
      return [
        ...item.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}${bulletList(section.quote)}</section>`),
        related.length ? `<nav aria-label="관련 기사 더 읽기"><h2>관련 기사 더 읽기</h2><ul>${related.map(([href, label]) => `<li><a href="${canonicalUrl(href)}">${escapeHtml(label)}</a></li>`).join("")}</ul></nav>` : "",
      ].join("\n");
    }
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

  const legislativeCommentaryMatch = route.path.match(/^\/monitoring\/legislation\/commentary\/([^/]+)$/);
  if (legislativeCommentaryMatch) {
    const item = legislativeCommentaries.find((entry) => entry.slug === legislativeCommentaryMatch[1]);
    if (item) {
      const edition = item.editions.ko;
      return [
        `<section><h2>핵심 요약</h2>${bulletList(edition.keyPoints)}</section>`,
        ...edition.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}${section.quote ? `<blockquote>${escapeHtml(section.quote)}</blockquote>` : ""}</section>`),
        `<section><h2>자료와 확인 기준</h2><p>${escapeHtml(edition.sourceNote)}</p><ul>${item.sources.map((source) => `<li><a href="${escapeHtml(source.url)}">${escapeHtml(source.label.ko)}</a></li>`).join("")}</ul></section>`,
      ].join("\n");
    }
  }

  const seedLanguageMatch = route.path.match(/^\/seed-language\/([^/]+)$/);
  if (seedLanguageMatch) {
    const item = seedLanguageArticles.find((entry) => entry.slug === seedLanguageMatch[1]);
    if (item) return [
      `<section><h2>핵심 요약</h2>${bulletList(item.keyPoints)}</section>`,
      paragraphList(item.leadParagraphs),
      ...item.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${paragraphList(section.paragraphs)}</section>`),
    ].join("\n");
  }

  if (route.path === "/research/community-chest-of-korea") return [
    `<section><h2>핵심 요약</h2>${paragraphList(communityChestResearch.summary)}</section>`,
    ...communityChestResearch.sections.map((section) =>
      `<section><h2>${escapeHtml(section.title)}</h2><p><strong>${escapeHtml(section.deck)}</strong></p>${paragraphList(section.paragraphs)}${bulletList(section.bullets ?? [])}</section>`
    ),
    `<section><h2>결론</h2>${paragraphList(communityChestResearch.conclusion)}</section>`,
    `<section><h2>확인 자료</h2><ul>${communityChestResearch.sources.map((source) => `<li><a href="${escapeHtml(source.url)}">${escapeHtml(source.label)}</a></li>`).join("")}</ul></section>`,
  ].join("\n");

  if (route.path === "/tax-watch-movement") {
    const activities = civicSectionsModule.getCivicSectionArticles("cases", "ko");
    return [
      `<section><h2>씨앗의 소리의 증세반대운동과 세금감시</h2><p>씨앗의 소리(Seed Voice)는 2026년 10월부터 No More Tax 증세반대운동을 전개하고 있습니다. 증세반대 서명과 활동 소개는 공식 시민캠페인 페이지에서 확인할 수 있습니다.</p><p><a href="${canonicalUrl("/civic-campaign")}">No More Tax 증세반대운동 공식 소개와 서명 참여</a></p></section>`,
      `<section><h2>세금감시운동 기사 및 활동 기록</h2><ul>${activities.map((item) => `<li><a href="${canonicalUrl(item.path)}"><strong>${escapeHtml(item.title)}</strong></a><p>${escapeHtml(item.summary)}</p></li>`).join("\n")}</ul></section>`,
    ].join("\n");
  }

  const civicSection = civicSectionsModule.civicSections.find((section) => section.path === route.path);
  const listing = civicSection ? civicSectionsModule.getCivicSectionArticles(civicSection.key, "ko").map((item) => ({ path: item.path, title: item.title, summary: item.summary }))
    : route.path === "/civic-life" ? civicSectionsModule.getCivicLifeArticles("ko").map((item) => ({ path: item.path, title: item.title, summary: item.summary }))
    : route.path === "/news" ? homepageArchive.map((item) => ({ path: item.to, title: item.title, summary: item.latestChange }))
    : route.path === "/briefings" ? briefings.map((item) => ({ path: `/briefings/${item.slug}`, title: item.title, summary: item.summary }))
    : route.path === "/columns" ? editorialColumns.map((item) => ({ path: `/columns/${item.slug}`, title: item.title, summary: item.summary }))
    : route.path === "/monitoring" ? [
      ...seedWatchListing,
      ...watchCases.map((item) => ({ path: `/monitoring/${item.slug}`, title: item.title.ko, summary: item.summary.ko })),
    ]
    : route.path === "/monitoring/legislation" ? legislativeCommentaries.map((item) => ({ path: `/monitoring/legislation/commentary/${item.slug}`, title: item.editions.ko.title, summary: item.editions.ko.summary }))
    : [];

  if (listing.length) return `${route.path === "/columns" ? campaignDiscoveryHtml("columns") : ""}<ul>${listing.map((item) => `<li><a href="${canonicalUrl(item.path)}"><strong>${escapeHtml(item.title)}</strong></a><p>${escapeHtml(item.summary)}</p></li>`).join("\n")}</ul>`;
  return `<p>${escapeHtml(route.description)}</p>`;
}

function structuredData(route) {
  const language = route.language === "en" ? "en" : "ko-KR";
  const siteName = route.language === "en" ? ENGLISH_SOCIAL_SITE_NAME : SOCIAL_SITE_NAME;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const campaignUrl = canonicalUrl("/civic-campaign");
  const movementUrl = canonicalUrl("/tax-watch-movement");

  // No More Tax is an initiative of the publisher, not a separate legal entity.
  if (route.path === "/civic-campaign") {
    const campaign = noMoreTaxLandingModule.noMoreTaxLanding.ko;
    const webPageId = `${campaignUrl}#webpage`;
    const campaignId = `${campaignUrl}#campaign`;
    const breadcrumbId = `${campaignUrl}#breadcrumb`;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": webPageId,
          url: campaignUrl,
          name: campaign.heading,
          description: campaign.seoDescription,
          inLanguage: language,
          isPartOf: { "@id": websiteId },
          publisher: { "@id": organizationId },
          mainEntity: { "@id": campaignId },
          dateModified: route.lastModified,
          relatedLink: [
            movementUrl,
            canonicalUrl("/columns/no-more-tax-increases-civic-declaration-2026"),
          ],
          breadcrumb: { "@id": breadcrumbId },
        },
        {
          "@type": "Thing",
          "@id": campaignId,
          name: "No More Tax 증세반대운동",
          alternateName: ["NO MORE TAX!", "2026 증세반대운동"],
          description: `${campaign.introduction} ${campaign.activities}`,
          url: campaignUrl,
          mainEntityOfPage: { "@id": webPageId },
        },
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: "시민생활", item: canonicalUrl("/civic-life") },
            { "@type": "ListItem", position: 3, name: "No More Tax 증세반대운동", item: campaignUrl },
          ],
        },
      ],
    };
  }
  if (route.path === "/tax-watch-movement") {
    const webPageId = `${movementUrl}#webpage`;
    const archiveId = `${movementUrl}#article-list`;
    const breadcrumbId = `${movementUrl}#breadcrumb`;
    // Use precisely the published article list rendered on the public page.
    const activities = civicSectionsModule.getCivicSectionArticles("cases", "ko");
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": webPageId,
          url: movementUrl,
          name: "세금감시운동",
          description: route.description,
          inLanguage: language,
          isPartOf: { "@id": websiteId },
          publisher: { "@id": organizationId },
          about: { "@id": `${campaignUrl}#campaign` },
          mainEntity: { "@id": archiveId },
          relatedLink: [campaignUrl],
          dateModified: route.lastModified,
          breadcrumb: { "@id": breadcrumbId },
        },
        {
          "@type": "ItemList",
          "@id": archiveId,
          name: "씨앗의 소리 세금감시운동 활동과 기사",
          numberOfItems: activities.length,
          itemListElement: activities.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "WebPage",
              name: article.title,
              url: canonicalUrl(article.path),
            },
          })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: "시민생활", item: canonicalUrl("/civic-life") },
            { "@type": "ListItem", position: 3, name: "세금감시운동", item: movementUrl },
          ],
        },
      ],
    };
  }
  if (route.path === "/" || route.path === "/en") return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteName,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: publisherLogo },
        description: route.description,
        sameAs: officialSocialUrls,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: siteName,
        url: canonicalUrl(route.path),
        inLanguage: language,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  if (route.type === "article") return {
    "@context": "https://schema.org",
    "@type": /^\/(?:news|briefings|monitoring)\//.test(route.path) ? "NewsArticle" : "Article",
    headline: route.title.replace(/ \| .*$/, ""),
    description: route.description,
    datePublished: koreaDateTime(route.publishedAt ?? route.lastModified),
    dateModified: koreaDateTime(route.lastModified ?? route.publishedAt),
    mainEntityOfPage: canonicalUrl(route.path),
    author: { "@type": route.author && route.author !== SITE_NAME ? "Person" : "Organization", name: route.author || SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: publisherLogo }, sameAs: officialSocialUrls },
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
  const siteName = route.language === "en" ? ENGLISH_SOCIAL_SITE_NAME : SOCIAL_SITE_NAME;
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
    <meta name="robots" content="${route.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
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
    .replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${homeHtml.get(route.path) ?? `<div class="seed-static-loader" role="status" aria-label="${language === "en" ? "Loading page" : "페이지 불러오는 중"}">${language === "en" ? "SEED VOICE" : "씨앗의 소리"}</div>${fallback}`}</div>`);
}

for (const route of allRoutes) {
  const output = route.path === "/" ? path.join(dist, "index.html") : path.join(dist, route.path.slice(1), "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, render(route));
}

// Serve the account screen directly instead of routing through the cached
// homepage shell. This also makes newly deployed signup form changes appear
// immediately at /account.
const accountShell = template
  .replace(/<title>[\s\S]*?<\/title>/i, "<title>내 계정 | 씨앗의 소리</title>")
  .replace(/<meta\s+name="robots"[\s\S]*?\/>/i, '<meta name="robots" content="noindex" />')
  .replace(/<link\s+rel="canonical"[\s\S]*?\/>/i, '<link rel="canonical" href="https://seedvoice.kr/account" />')
  .replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
await mkdir(path.join(dist, "account"), { recursive: true });
await writeFile(path.join(dist, "account", "index.html"), accountShell);

// Private application routes also need a physical entry file on GitHub Pages
// so refreshes and post-login redirects do not fall through to a 404 page.
const privateShellRoutes = [
  ["writer", "필자 집필실 | 씨앗의 소리"],
  ["writer/preview", "기사 페이지 미리보기 | 씨앗의 소리"],
  ["insights", "운영 통계 | 씨앗의 소리"],
  ["insights/content", "콘텐츠 통계 | 씨앗의 소리"],
  ["insights/traffic", "유입 분석 | 씨앗의 소리"],
  ["insights/subscribers", "이메일 구독자 | 씨앗의 소리"],
  ["insights/members", "회원·필자 관리 | 씨앗의 소리"],
  ["insights/images", "이미지 보관함 | 씨앗의 소리"],
  ["insights/editorial", "편집부 원고함 | 씨앗의 소리"],
  ["insights/comments", "댓글·씨야 답글 관리 | 씨앗의 소리"],
  ["insights/featured", "메인기사 관리 | 씨앗의 소리"],
  ["insights/legislation", "입법감시 관리 | 씨앗의 소리"],
];

for (const [privatePath, privateTitle] of privateShellRoutes) {
  const privateShell = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${privateTitle}</title>`)
    .replace(/<meta\s+name="robots"[\s\S]*?\/>/i, '<meta name="robots" content="noindex" />')
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>/i, `<link rel="canonical" href="https://seedvoice.kr/${privatePath}" />`)
    .replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
  const output = path.join(dist, privatePath, "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, privateShell);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allRoutes.filter((route) => !route.noindex).map((route) => `  <url>\n    <loc>${canonicalUrl(route.path)}</loc>${route.lastModified ? `\n    <lastmod>${route.lastModified}</lastmod>` : ""}\n  </url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);

const newsCutoff = new Date();
newsCutoff.setUTCDate(newsCutoff.getUTCDate() - 2);
const recentNewsRoutes = allRoutes.filter((route) =>
  route.type === "article"
  && route.lastModified
  && !["/founding-statement", "/publisher-message"].includes(route.path)
  && new Date(`${route.lastModified}T23:59:59Z`) >= newsCutoff
);
const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentNewsRoutes.map((route) => `  <url>
    <loc>${canonicalUrl(route.path)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeHtml(SITE_NAME)}</news:name>
        <news:language>ko</news:language>
      </news:publication>
      <news:publication_date>${route.lastModified}</news:publication_date>
      <news:title>${escapeHtml(route.title.replace(/ \| .*$/, ""))}</news:title>
    </news:news>
  </url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "news-sitemap.xml"), newsSitemap);
const feedRoutes = allRoutes
  .filter((route) => route.type === "article" && route.lastModified)
  .sort((a, b) => b.lastModified.localeCompare(a.lastModified) || a.path.localeCompare(b.path))
  .slice(0, 50);
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}/</link>
    <description>${cdata(SITE_DESCRIPTION)}</description>
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
await writeFile(path.join(dist, "robots.txt"), `# Main search crawlers, including ChatGPT Search, are permitted.\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: bingbot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\nSitemap: ${SITE_URL}/news-sitemap.xml\n#DaumWebMasterTool:77f2a0c9e06772a46ee491e84f6c85fa6b878de6c334a176259e3904179a0dcd:7v7Co2KibzUex4fH7zWmNA==\n`);
