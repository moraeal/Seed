import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns, getColumnsNewestFirst, getHotIssueColumnsNewestFirst, isHotIssueColumn } from "./data/columns";
import { newsArticles } from "./data/news";
import { publicInterestWatchCases } from "./data/newsTrackerRegistry";
import { taxPolicies } from "./data/taxWatch";
import { taxCommentaries } from "./data/taxCommentaries";
import { legislativeCommentaries } from "./data/legislativeCommentaries";
import { getHotIssueClusters } from "./data/hotIssueClusters";
import { seedLanguageArticlesKo } from "./data/seedLanguage";
import { seedLanguageEnvironmentArticlesKo } from "./data/seedLanguageEnvironment";
import {
  ENGLISH_SITE_NAME,
  ENGLISH_SOCIAL_SITE_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_SITE_NAME,
} from "./siteMeta";

export {
  ENGLISH_SITE_NAME,
  ENGLISH_SOCIAL_SITE_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_SITE_NAME,
} from "./siteMeta";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  type: "website" | "article";
  publishedAt?: string;
  lastModified?: string;
  author?: string;
  section?: string;
  language?: "ko" | "en";
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
};

const canonicalPath = (path: string) => path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
export const canonicalUrl = (path: string) => `${SITE_URL}${canonicalPath(path)}`;
export const assetUrl = (path: string) => `${SITE_URL}/${path.replace(/^\/+/, "")}`;
const socialImageUrl = (section: string, slug: string, version: string) => assetUrl(`images/social/${section}/${slug}.jpg?v=brand1-${version.replace(/[^0-9]/g, "")}`);
const stableHash = (value: string) => [...value].reduce((hash, character) => ((hash * 31) + character.charCodeAt(0)) >>> 0, 0).toString();
const firstLocalRasterImage = <T extends { src: string }>(images?: T[]) => images?.find((image) => !/^https?:\/\//i.test(image.src) && /\.(?:jpe?g|png|webp)$/i.test(image.src));

const allSeedLanguageArticlesKo = [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo];
const newest = (dates: string[]) => [...dates].sort()[dates.length - 1];
const latestDate = newest([...newsArticles.map((item) => item.date), ...publicInterestWatchCases.map((item) => item.updatedAt), ...columns.map((item) => item.date), ...getAllBriefingsNewestFirst().map((item) => item.date), ...allSeedLanguageArticlesKo.map((item) => item.date), ...legislativeCommentaries.map((item) => item.date)]);

const staticRoutes: SeoRoute[] = [
  {
    path: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    lastModified: latestDate,
    image: socialImageUrl("site", "home", latestDate),
    imageAlt: "Young citizens gathering around a shared civic project",
  },
  {
    path: "/en",
    title: "SEED VOICE | Facts, Context, Civic Judgment",
    description: "SEED VOICE is an independent publication in South Korea offering verified facts, context, and clear civic argument.",
    type: "website",
    lastModified: latestDate,
    language: "en",
  },
  { path: "/news", title: "핫이슈 | 씨앗의 소리", description: "꼭 보아야 할 현안을 네 개의 이슈로 묶어 기사·브리핑·칼럼·시민감시 기록의 흐름을 한눈에 보여줍니다.", type: "website", lastModified: newest([...newsArticles.map((item) => item.date), ...getHotIssueColumnsNewestFirst().map((item) => item.date)]) },
  { path: "/briefings", title: "브리핑 | 씨앗의 소리", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "칼럼 | 씨앗의 소리", description: "특정 사건의 기록에 종속되지 않는 독립적인 주장과 사유를 통해 자유, 책임, 시장과 시민사회를 깊이 생각합니다.", type: "website", lastModified: newest(getColumnsNewestFirst().map((item) => item.date)) },
  { path: "/contributions", title: "필자 기고 | 씨앗의 소리", description: "씨앗의 소리 필자들이 쓰고 편집부 검토를 거쳐 게시한 칼럼과 브리핑을 읽습니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring", title: "시민감시 | 씨앗의 소리", description: "뉴스트래커로 사건과 정책의 변화를 날짜별로 기록하고, 국가와 시민사회의 권력·예산·성과를 공개자료와 기관 답변으로 점검합니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/monitoring/legislation", title: "입법감시 | 씨앗의 소리", description: "국회 법안이 시민의 권리와 선택, 기업 활동, 국가 권한과 재정에 미칠 변화를 공식 자료와 함께 추적합니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring/tax", title: "세금감시 | 씨앗의 소리", description: "정부의 세제정책과 세법·시행령·국세청 집행 기준이 시민과 기업의 실제 부담을 어떻게 바꾸는지 추적합니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring/public-interest", title: "공익감시 | 씨앗의 소리", description: "공공기관·공익기관·시민단체와 보조사업이 시민의 이름으로 사용하는 권한과 돈, 설명 책임과 실제 결과를 공개자료로 점검합니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/proposals", title: "시민제안 | 씨앗의 소리", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨앗의 소리 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/founding-statement", title: "왜 지금 씨앗의 소리인가 | 씨앗의 소리", description: "다수결만으로 민주주의가 완성되지 않는 이유와 법의 지배, 제한된 정부, 권력분립과 시민의 자유를 지키려는 씨앗의 소리의 취지문입니다.", type: "article", publishedAt: latestDate, lastModified: latestDate, author: "작은씨앗", section: "씨앗의 소리 취지문", image: socialImageUrl("site", "founding-statement", latestDate), imageAlt: "국회, 정부와 법원의 권력분립과 시민의 자유를 상징하는 이미지" },
  { path: "/seed-language", title: "시민언어 | 씨앗의 소리", description: "특정 진영이 독점한 시민사회의 언어를 해체하고 본래 의미를 되살려 시민의 언어로 다시 구성합니다.", type: "website", lastModified: newest(allSeedLanguageArticlesKo.map((item) => item.date)) },
  { path: "/seed-language/why-civic-language", title: "우리가 다시 뜻을 새겨야 할 말들 | 씨앗의 소리", description: "말이 현실을 어떻게 나누고 무엇을 감추는지 살피며, 자유·권력의 제한·책임·시민의 성장이라는 기준으로 씨앗이 정리할 시민언어 전체 지도입니다.", type: "article", publishedAt: "2026-09-22", lastModified: "2026-09-22", author: "작은씨앗", section: "시민언어", image: socialImageUrl("seed-language", "why-civic-language", "2026-09-22-hero1"), imageAlt: "여러 세대의 시민이 진영의 표식을 걷어내고 흩어진 말의 조각을 다시 잇는 모습" },
  { path: "/seed-language/words-turn-citizens-into-enemies", title: "말이 시민을 적으로 만든다 | 씨앗의 소리", description: "이 글은 칼럼으로 이동했습니다. 기존 주소로 들어온 독자를 새 칼럼 주소로 연결합니다.", type: "article", publishedAt: "2026-09-13", lastModified: "2026-09-22", author: "작은씨앗", section: "칼럼", noindex: true },
  { path: "/about", title: "씨앗의 소리가 지키려는 것 | 씨앗의 소리", description: "법의 지배와 권력분립을 토대로 시민과 기업의 자유를 지키고, 국가와 시민사회의 권력을 감시하며, 공익을 바로 세우는 독립 시민저널 씨앗의 소리의 선언입니다.", type: "website", lastModified: latestDate },
  { path: "/publisher-message", title: "발행인 소개 | 씨앗의 소리", description: "한 사람의 질문과 판단에서 시작된 독립 시민저널 씨앗의 소리의 발행인 소개입니다.", type: "article", publishedAt: latestDate, lastModified: latestDate, author: "작은씨앗", section: "발행인 소개" },
  { path: "/search", title: "통합검색 | 씨앗의 소리", description: "씨앗의 소리의 핫이슈, 브리핑, 칼럼, 시민감시와 시민언어을 한 번에 검색합니다.", type: "website", lastModified: latestDate, noindex: true },
];

const newsRoutes: SeoRoute[] = newsArticles.map((article) => ({
  path: `/news/${article.slug}`,
  title: `${article.title} | 씨앗의 소리`,
  description: article.summary,
  type: "article",
  publishedAt: article.date,
  lastModified: article.date,
  author: SITE_NAME,
  section: article.category,
  image: socialImageUrl("news", article.slug, article.date),
  imageAlt: article.heroImage.alt,
}));

const hotIssueClusterRoutes: SeoRoute[] = getHotIssueClusters("ko").map((cluster) => ({
  path: `/news/issues/${cluster.id}`,
  title: `${cluster.title} | 씨앗의 소리`,
  description: cluster.summary,
  type: "article",
  lastModified: cluster.updatedAt,
  author: SITE_NAME,
  section: "핫이슈",
  image: socialImageUrl("hot-issues", cluster.id, cluster.updatedAt),
  imageAlt: cluster.imageAlt,
}));

const briefingRoutes: SeoRoute[] = getAllBriefingsNewestFirst().flatMap((briefing) => {
  const previewImage = firstLocalRasterImage(briefing.images) ?? (briefing.slug === "gyeonggi-fiscal-emergency" ? {
    src: "images/briefings/briefing-05-budget-ledger.webp",
    alt: "시민들이 국가 재정과 예산 장부를 점검하는 상징 이미지",
  } : undefined);
  const routes: SeoRoute[] = [{
    path: `/briefings/${briefing.slug}`,
    title: `${briefing.title} | 씨앗의 소리`,
    description: briefing.summary,
    type: "article",
    publishedAt: briefing.date,
    lastModified: briefing.date,
    author: briefing.author,
    section: briefing.category,
    image: previewImage ? socialImageUrl("briefings", briefing.slug, briefing.date) : undefined,
    imageAlt: previewImage?.alt,
  }];
  if (briefing.commentary) routes.push({
    path: `/briefings/${briefing.slug}/commentary`,
    title: `${briefing.commentary.title} | 씨앗의 소리`,
    description: briefing.commentary.summary,
    type: "article",
    publishedAt: briefing.date,
    lastModified: briefing.date,
    author: briefing.author,
    section: "브리핑 깊게 보기",
    image: previewImage ? socialImageUrl("briefings", briefing.slug, briefing.date) : undefined,
    imageAlt: previewImage?.alt,
  });
  return routes;
});

const columnRoutes: SeoRoute[] = columns.map((column) => ({
  path: `/columns/${column.slug}`,
  title: `${column.title} | 씨앗의 소리`,
  description: column.summary,
  type: "article",
  publishedAt: column.date,
  lastModified: column.date,
  author: column.author,
  section: isHotIssueColumn(column.slug) ? "핫이슈" : "칼럼",
  image: socialImageUrl("columns", column.slug, `${column.date}-${stableHash(column.heroImage.src)}`),
  imageAlt: column.heroImage.alt,
}));

const monitoringRoutes: SeoRoute[] = publicInterestWatchCases.map((item) => ({
  path: `/monitoring/${item.slug}`,
  title: `${item.title.ko} | 씨앗의 소리`,
  description: item.summary.ko,
  type: "article",
  publishedAt: item.publishedAt ?? item.openedAt ?? item.updatedAt,
  lastModified: item.updatedAt,
  author: SITE_NAME,
  section: "시민감시",
  image: item.heroImage ? socialImageUrl("monitoring", item.slug, item.updatedAt) : undefined,
  imageAlt: item.heroImage?.alt.ko,
}));

const taxRoutes: SeoRoute[] = taxPolicies.map((item) => ({
  path: `/monitoring/tax/${item.slug}`,
  title: `${item.title.ko} | 씨앗의 소리`,
  description: item.summary.ko,
  type: "article",
  publishedAt: item.checkedAt,
  lastModified: item.checkedAt,
  author: SITE_NAME,
  section: "세금감시",
  image: socialImageUrl("tax", item.slug, item.checkedAt),
  imageAlt: item.heroImage.alt.ko,
}));

const taxCommentaryRoutes: SeoRoute[] = taxCommentaries.map((item) => ({
  path: `/monitoring/tax/commentary/${item.slug}`,
  title: `${item.editions.ko.title} | 씨앗의 소리`,
  description: item.editions.ko.summary,
  type: "article",
  publishedAt: item.date,
  lastModified: item.date,
  author: SITE_NAME,
  section: "세금 논평",
  image: socialImageUrl("tax-commentary", item.slug, `${item.date}-${stableHash(item.heroSrc)}`),
  imageAlt: item.editions.ko.heroAlt,
}));

const legislativeCommentaryRoutes: SeoRoute[] = legislativeCommentaries.map((item) => ({
  path: `/monitoring/legislation/commentary/${item.slug}`,
  title: `${item.editions.ko.title} | 씨앗의 소리`,
  description: item.editions.ko.summary,
  type: "article",
  publishedAt: item.date,
  lastModified: item.date,
  author: SITE_NAME,
  section: "입법 논평",
  image: socialImageUrl("legislation", item.slug, `${item.date}-${stableHash(item.heroSrc)}`),
  imageAlt: item.editions.ko.heroAlt,
}));

const researchRoutes: SeoRoute[] = [{
  path: "/research/community-chest-of-korea",
  title: "사랑의열매는 시민의 공익을 어떻게 배분하는가 | 씨앗의 소리",
  description: "사랑의열매의 2021~2025년 모금·배분·이월재원·지정기탁·운영비와 시민 참여 구조를 공식자료로 다시 검증한 씨앗 심층연구입니다.",
  type: "article",
  publishedAt: "2026-09-10",
  lastModified: "2026-09-10",
  author: SITE_NAME,
  section: "씨앗 심층연구",
  image: socialImageUrl("research", "community-chest-of-korea", "2026-09-10-2"),
  imageAlt: "공익자금의 흐름을 장부와 돋보기로 점검하는 시민 공익감시 일러스트",
}];

const seedLanguageRoutes: SeoRoute[] = allSeedLanguageArticlesKo.map((article) => ({
  path: `/seed-language/${article.slug}`,
  title: `${article.title} | 씨앗의 소리`,
  description: article.summary,
  type: "article",
  publishedAt: article.date,
  lastModified: article.date,
  author: SITE_NAME,
  section: "시민언어",
  image: socialImageUrl("seed-language", article.slug, `${article.date}-${stableHash(article.heroImage.src)}`),
  imageAlt: article.heroImage.alt,
}));

export const seoRoutes: SeoRoute[] = [
  ...staticRoutes,
  ...newsRoutes,
  ...hotIssueClusterRoutes,
  ...briefingRoutes,
  ...columnRoutes,
  ...monitoringRoutes,
  ...legislativeCommentaryRoutes,
  ...taxRoutes,
  ...taxCommentaryRoutes,
  ...researchRoutes,
  ...seedLanguageRoutes,
];

export const normalizeSeoPath = (pathname: string) => {
  const withoutLegacyBase = pathname.replace(/^\/Seed(?=\/|$)/, "");
  if (!withoutLegacyBase || withoutLegacyBase === "/") return "/";
  return withoutLegacyBase.replace(/\/+$/, "");
};

export const getSeoRoute = (pathname: string) => seoRoutes.find((route) => route.path === normalizeSeoPath(pathname));
