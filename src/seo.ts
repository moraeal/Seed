import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns } from "./data/columns";
import { newsArticles } from "./data/news";
import { publicInterestWatchCases } from "./data/publicInterestWatch";

export const SITE_URL = "https://seedpartners.org";
export const SITE_NAME = "씨드시민파트너스";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  type: "website" | "article";
  lastModified?: string;
  author?: string;
  section?: string;
};

const canonicalPath = (path: string) => path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
export const canonicalUrl = (path: string) => `${SITE_URL}${canonicalPath(path)}`;

const newest = (dates: string[]) => [...dates].sort()[dates.length - 1];
const latestDate = newest([...newsArticles.map((item) => item.date), ...columns.map((item) => item.date), ...getAllBriefingsNewestFirst().map((item) => item.date)]);

const staticRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "씨드시민파트너스 | 자유와 책임의 시민운동",
    description: "씨드시민파트너스는 자유와 책임의 언어로 시민사회 공론장을 다시 세우는 독립 시민저널입니다.",
    type: "website",
    lastModified: latestDate,
  },
  { path: "/news", title: "씨드뉴스 | 씨드시민파트너스", description: "한국 정치·사회 이슈의 확인된 사실과 아직 확인되지 않은 부분을 구분하고 시민이 지켜볼 점을 설명합니다.", type: "website", lastModified: newest(newsArticles.map((item) => item.date)) },
  { path: "/briefings", title: "시민브리핑 | 씨드시민파트너스", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "씨드칼럼 | 씨드시민파트너스", description: "자유, 법치, 책임, 시장의 자율성과 강한 시민사회의 관점에서 오늘의 쟁점을 논평합니다.", type: "website", lastModified: newest(columns.map((item) => item.date)) },
  { path: "/monitoring", title: "공익감시 | 씨드시민파트너스", description: "공익조직과 공공제도가 시민에게 권한과 재정, 성과를 충분히 설명하는지 근거를 바탕으로 점검합니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/proposals", title: "시민제안 | 씨드시민파트너스", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨드시민파트너스의 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/about", title: "소개 | 씨드시민파트너스", description: "시민의 자유와 책임, 제한되고 유능한 국가, 시장의 자율성과 강한 사회를 지향하는 씨드시민파트너스를 소개합니다.", type: "website", lastModified: latestDate },
];

const newsRoutes: SeoRoute[] = newsArticles.map((article) => ({
  path: `/news/${article.slug}`,
  title: `${article.title} | 씨드뉴스`,
  description: article.summary,
  type: "article",
  lastModified: article.date,
  author: SITE_NAME,
  section: article.category,
}));

const briefingRoutes: SeoRoute[] = getAllBriefingsNewestFirst().flatMap((briefing) => {
  const routes: SeoRoute[] = [{
    path: `/briefings/${briefing.slug}`,
    title: `${briefing.title} | 시민브리핑`,
    description: briefing.summary,
    type: "article",
    lastModified: briefing.date,
    author: briefing.author,
    section: briefing.category,
  }];
  if (briefing.commentary) routes.push({
    path: `/briefings/${briefing.slug}/commentary`,
    title: `${briefing.commentary.title} | 씨드 논평`,
    description: briefing.commentary.summary,
    type: "article",
    lastModified: briefing.date,
    author: briefing.author,
    section: "씨드 논평",
  });
  return routes;
});

const columnRoutes: SeoRoute[] = columns.map((column) => ({
  path: `/columns/${column.slug}`,
  title: `${column.title} | 씨드칼럼`,
  description: column.summary,
  type: "article",
  lastModified: column.date,
  author: column.author,
  section: "씨드칼럼",
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
