import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns } from "./data/columns";
import { newsArticles } from "./data/news";
import { publicInterestWatchCases } from "./data/publicInterestWatch";

export const SITE_URL = "https://seedpartners.org";
export const SITE_NAME = "씨드 시민저널";
export const ENGLISH_SITE_NAME = "SEED Civic Journal";
export const SOCIAL_SITE_NAME = "씨드시민파트너스";
export const ENGLISH_SOCIAL_SITE_NAME = "SEED Civic Partners";

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
};

const canonicalPath = (path: string) => path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
export const canonicalUrl = (path: string) => `${SITE_URL}${canonicalPath(path)}`;
export const assetUrl = (path: string) => `${SITE_URL}/${path.replace(/^\/+/, "")}`;
const socialImageUrl = (section: string, slug: string, version: string) => assetUrl(`images/social/${section}/${slug}.jpg?v=${version.replace(/[^0-9]/g, "")}`);
const firstLocalRasterImage = <T extends { src: string }>(images?: T[]) => images?.find((image) => !/^https?:\/\//i.test(image.src) && /\.(?:jpe?g|png|webp)$/i.test(image.src));

const newest = (dates: string[]) => [...dates].sort()[dates.length - 1];
const latestDate = newest([...newsArticles.map((item) => item.date), ...columns.map((item) => item.date), ...getAllBriefingsNewestFirst().map((item) => item.date)]);

const staticRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "씨드 시민저널 | 사실은 정확하게, 관점은 분명하게",
    description: "씨드 시민저널은 확인된 사실과 맥락을 바탕으로 시민이 스스로 판단할 수 있도록 돕는 독립 시민저널입니다.",
    type: "website",
    lastModified: latestDate,
    image: socialImageUrl("site", "home", latestDate),
    imageAlt: "Young citizens gathering around a shared civic project",
  },
  {
    path: "/en",
    title: "SEED Civic Journal | Facts, Context, Civic Judgment",
    description: "SEED Civic Journal is an independent publication in South Korea offering verified facts, context, and clear civic argument.",
    type: "website",
    lastModified: latestDate,
    language: "en",
  },
  { path: "/news", title: "씨드뉴스 | 씨드 시민저널", description: "한국 정치·사회 이슈의 확인된 사실과 아직 확인되지 않은 부분을 구분하고 시민이 지켜볼 점을 설명합니다.", type: "website", lastModified: newest(newsArticles.map((item) => item.date)) },
  { path: "/briefings", title: "시민브리핑 | 씨드 시민저널", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "씨앗의 소리 | 씨드 시민저널", description: "자유, 법치, 책임, 시장의 자율성과 강한 시민사회의 관점에서 오늘의 쟁점을 논평합니다.", type: "website", lastModified: newest(columns.map((item) => item.date)) },
  { path: "/monitoring", title: "공익감시 | 씨드시민파트너스", description: "공익조직과 공공제도가 시민에게 권한과 재정, 성과를 충분히 설명하는지 근거를 바탕으로 점검합니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/proposals", title: "시민제안 | 씨드시민파트너스", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨드시민파트너스의 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/founding-statement", title: "창립취지문 | 씨드 시민저널", description: "자유로운 시민과 책임 있는 공익, 강한 시민사회를 지향하는 씨드시민파트너스의 창립취지문 전문입니다.", type: "article", lastModified: latestDate, author: "씨드시민파트너스", section: "창립취지문" },
  { path: "/about", title: "씨드저널을 시작하며 | 씨드저널", description: "한 사람의 씨앗이 시작한 독립 시민미디어, 씨드저널의 출발과 AI 활용 원칙을 소개합니다.", type: "website", lastModified: latestDate },
];

const newsRoutes: SeoRoute[] = newsArticles.map((article) => ({
  path: `/news/${article.slug}`,
  title: `${article.title} | 씨드뉴스`,
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
    title: `${briefing.title} | 시민브리핑`,
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
    title: `${briefing.commentary.title} | 씨드 논평`,
    description: briefing.commentary.summary,
    type: "article",
    lastModified: briefing.date,
    author: briefing.author,
    section: "씨드 논평",
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
  image: socialImageUrl("columns", column.slug, column.date),
  imageAlt: column.heroImage.alt,
}));

const monitoringRoutes: SeoRoute[] = publicInterestWatchCases.map((item) => ({
  path: `/monitoring/${item.slug}`,
  title: `${item.title.ko} | 공익감시`,
  description: item.summary.ko,
  type: "article",
  lastModified: item.updatedAt,
  author: SITE_NAME,
  section: "공익감시",
}));

export const seoRoutes: SeoRoute[] = [
  ...staticRoutes,
  ...newsRoutes,
  ...briefingRoutes,
  ...columnRoutes,
  ...monitoringRoutes,
];

export const normalizeSeoPath = (pathname: string) => {
  const withoutLegacyBase = pathname.replace(/^\/Seed(?=\/|$)/, "");
  if (!withoutLegacyBase || withoutLegacyBase === "/") return "/";
  return withoutLegacyBase.replace(/\/+$/, "");
};

export const getSeoRoute = (pathname: string) => seoRoutes.find((route) => route.path === normalizeSeoPath(pathname));
