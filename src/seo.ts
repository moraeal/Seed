import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns } from "./data/columns";
import { newsArticles } from "./data/news";
import { newsTrackerCases, publicInterestWatchCases } from "./data/publicInterestWatch";
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
const latestDate = newest([...newsArticles.map((item) => item.date), ...publicInterestWatchCases.map((item) => item.updatedAt), ...columns.map((item) => item.date), ...getAllBriefingsNewestFirst().map((item) => item.date), ...allSeedLanguageArticlesKo.map((item) => item.date)]);

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
  { path: "/news", title: "핫이슈 | 씨앗의 소리", description: "정치·사회 이슈의 핵심 보도와 뉴스트래커를 한곳에 모아 확인된 사실과 아직 결정되지 않은 내용을 구분합니다.", type: "website", lastModified: newest([...newsArticles.map((item) => item.date), ...newsTrackerCases.map((item) => item.updatedAt)]) },
  { path: "/briefings", title: "브리핑 | 씨앗의 소리", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "칼럼 | 씨앗의 소리", description: "자유, 법치, 책임, 시장의 자율성과 강한 시민사회의 관점에서 오늘의 쟁점을 논평합니다.", type: "website", lastModified: newest(columns.map((item) => item.date)) },
  { path: "/monitoring", title: "시민감시 | 씨앗의 소리", description: "국가와 시민사회의 권력, 예산과 성과를 공개자료와 기관의 답변으로 점검하고 후속 변화를 기록합니다.", type: "website", lastModified: latestDate },
  { path: "/proposals", title: "시민제안 | 씨앗의 소리", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨앗의 소리 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/founding-statement", title: "왜 지금 씨앗의 소리인가 | 씨앗의 소리", description: "다수결만으로 민주주의가 완성되지 않는 이유와 법의 지배, 제한된 정부, 권력분립과 시민의 자유를 지키려는 씨앗의 소리의 취지문입니다.", type: "article", publishedAt: latestDate, lastModified: latestDate, author: "작은씨앗", section: "씨앗의 소리 취지문", image: socialImageUrl("site", "founding-statement", latestDate), imageAlt: "국회, 정부와 법원의 권력분립과 시민의 자유를 상징하는 이미지" },
  { path: "/seed-language", title: "용어해설 | 씨앗의 소리", description: "특정 진영이 독점한 시민사회의 언어를 해체하고 본래 의미를 되살려 시민의 언어로 다시 구성합니다.", type: "website", lastModified: newest(allSeedLanguageArticlesKo.map((item) => item.date)) },
  { path: "/about", title: "씨앗의 소리가 지키려는 것 | 씨앗의 소리", description: "법의 지배, 제한된 정부, 권력분립과 시민·기업의 자유를 지키며 국가와 시민사회의 권력을 감시하는 독립 시민저널 씨앗의 소리의 선언입니다.", type: "website", lastModified: latestDate },
  { path: "/publisher-message", title: "발행인 소개 | 씨앗의 소리", description: "한 사람의 질문과 판단에서 시작된 독립 시민저널 씨앗의 소리의 발행인 소개입니다.", type: "article", publishedAt: latestDate, lastModified: latestDate, author: "작은씨앗", section: "발행인 소개" },
  { path: "/search", title: "통합검색 | 씨앗의 소리", description: "씨앗의 소리의 핫이슈, 브리핑, 칼럼, 시민감시와 용어해설을 한 번에 검색합니다.", type: "website", lastModified: latestDate, noindex: true },
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
  section: "칼럼",
  image: socialImageUrl("columns", column.slug, `${column.date}-${stableHash(column.heroImage.src)}`),
  imageAlt: column.heroImage.alt,
}));

const monitoringRoutes: SeoRoute[] = publicInterestWatchCases.map((item) => ({
  path: item.timeline?.length ? `/news/${item.slug}` : `/monitoring/${item.slug}`,
  title: `${item.title.ko} | 씨앗의 소리`,
  description: item.summary.ko,
  type: "article",
  publishedAt: item.openedAt ?? item.updatedAt,
  lastModified: item.updatedAt,
  author: SITE_NAME,
  section: item.timeline?.length ? "핫이슈" : "시민감시",
  image: item.heroImage ? socialImageUrl("monitoring", item.slug, item.updatedAt) : undefined,
  imageAlt: item.heroImage?.alt.ko,
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
  section: "용어해설",
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
