import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns } from "./data/columns";
import { newsArticles } from "./data/news";
import { publicInterestWatchCases } from "./data/publicInterestWatch";
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
const latestDate = newest([...newsArticles.map((item) => item.date), ...columns.map((item) => item.date), ...getAllBriefingsNewestFirst().map((item) => item.date), ...allSeedLanguageArticlesKo.map((item) => item.date)]);

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
  { path: "/news", title: "오늘의뉴스 | 씨앗의 소리", description: "한국 정치·사회 이슈의 확인된 사실과 아직 확인되지 않은 부분을 구분하고 시민이 지켜볼 점을 설명합니다.", type: "website", lastModified: newest(newsArticles.map((item) => item.date)) },
  { path: "/briefings", title: "시민브리핑 | 씨앗의 소리", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "칼럼 | 씨앗의 소리", description: "자유, 법치, 책임, 시장의 자율성과 강한 시민사회의 관점에서 오늘의 쟁점을 논평합니다.", type: "website", lastModified: newest(columns.map((item) => item.date)) },
  { path: "/monitoring", title: "공익감시 | 씨앗의 소리", description: "공익조직과 공공제도가 시민에게 권한과 재정, 성과를 충분히 설명하는지 근거를 바탕으로 점검합니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/proposals", title: "시민제안 | 씨앗의 소리", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨앗의 소리 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/founding-statement", title: "씨앗의 소리 취지문 | 씨앗의 소리", description: "한 사람의 생각과 목소리도 세상을 향해 자랄 수 있다는 믿음에서 시작한 독립 시민미디어 씨앗의 소리의 취지문입니다.", type: "article", lastModified: latestDate, author: "박경석", section: "씨앗의 소리 취지문" },
  { path: "/seed-language", title: "씨앗언어 | 씨앗의 소리", description: "특정 진영이 독점한 시민사회의 언어를 해체하고 본래 의미를 되살려 시민의 언어로 다시 구성합니다.", type: "website", lastModified: newest(allSeedLanguageArticlesKo.map((item) => item.date)) },
  { path: "/about", title: "씨드 보이스 소개 | 씨앗의 소리", description: "자유의 영역을 넓히고 기업의 도전과 혁신을 보호하며 국가와 시민사회의 권력을 감시하는 독립 시민저널 씨앗의 소리를 소개합니다.", type: "website", lastModified: latestDate },
  { path: "/publisher-message", title: "발행인 인사말 | 씨앗의 소리", description: "한 사람의 질문과 판단에서 시작된 독립 시민미디어 씨앗의 소리의 발행인 인사말입니다.", type: "article", lastModified: latestDate, author: "박경석", section: "발행인 인사말" },
  { path: "/search", title: "통합검색 | 씨앗의 소리", description: "씨앗의 소리의 뉴스, 브리핑, 칼럼과 씨앗언어 콘텐츠를 한 번에 검색합니다.", type: "website", lastModified: latestDate, noindex: true },
];

const newsRoutes: SeoRoute[] = newsArticles.map((article) => ({
  path: `/news/${article.slug}`,
  title: `${article.title} | 씨앗의 소리`,
  description: article.summary,
  type: "article",
  lastModified: article.date,
  author: SITE_NAME,
  section: article.category,
  image: socialImageUrl("news", article.slug, article.date),
  imageAlt: article.heroImage.alt,
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
  lastModified: column.date,
  author: column.author,
  section: "씨앗의 소리",
  image: socialImageUrl("columns", column.slug, `${column.date}-${stableHash(column.heroImage.src)}`),
  imageAlt: column.heroImage.alt,
}));

const monitoringRoutes: SeoRoute[] = publicInterestWatchCases.map((item) => ({
  path: `/monitoring/${item.slug}`,
  title: `${item.title.ko} | 씨앗의 소리`,
  description: item.summary.ko,
  type: "article",
  lastModified: item.updatedAt,
  author: SITE_NAME,
  section: "공익감시",
}));

const researchRoutes: SeoRoute[] = [{
  path: "/research/community-chest-of-korea",
  title: "사랑의열매는 시민의 공익을 어떻게 배분하는가 | 씨앗의 소리",
  description: "사랑의열매의 2021~2025년 모금·배분·이월재원·지정기탁·운영비와 시민 참여 구조를 공식자료로 다시 검증한 씨앗 심층연구입니다.",
  type: "article",
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
  lastModified: article.date,
  author: SITE_NAME,
  section: "씨앗언어",
  image: socialImageUrl("seed-language", article.slug, `${article.date}-${stableHash(article.heroImage.src)}`),
  imageAlt: article.heroImage.alt,
}));

export const seoRoutes: SeoRoute[] = [
  ...staticRoutes,
  ...newsRoutes,
  ...briefingRoutes,
  ...columnRoutes,
  ...monitoringRoutes,
  ...researchRoutes,
  ...seedLanguageRoutes,
];

export const normalizeSeoPath = (pathname: string) => {
  const withoutLegacyBase = pathname.replace(/^\/Seed(?=\/|$)/, "");
  if (!withoutLegacyBase || withoutLegacyBase === "/") return "/";
  return withoutLegacyBase.replace(/\/+$/, "");
};

export const getSeoRoute = (pathname: string) => seoRoutes.find((route) => route.path === normalizeSeoPath(pathname));
