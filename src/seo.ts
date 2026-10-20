import { civicSections } from "./data/civicSections";
import { noMoreTaxLanding } from "./data/noMoreTaxLanding";
import { getAllBriefingsNewestFirst } from "./data/allBriefings";
import { columns, getColumnsNewestFirst, getHotIssueColumnsNewestFirst, getPublicInterestColumnsNewestFirst, isHotIssueColumn, publicInterestColumnSlugs } from "./data/columns";
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
  { path: "/tax-watch-cases", title: "세금감시운동 | 씨앗의 소리", description: "세금감시운동은 /tax-watch-movement 주소에서 확인할 수 있습니다.", type: "website", lastModified: "2026-10-19", noindex: true },
  { path: "/civic-life", title: "시민생활 | 씨앗의 소리", description: "일상, 이웃, 일자리, 주거와 건강 등 시민의 생활에 닿는 기사를 모아 읽어보세요.", type: "website", lastModified: "2026-10-03" },
  ...civicSections.map((section): SeoRoute => section.key === "campaign" ? {
    path: section.path,
    title: noMoreTaxLanding.ko.seoTitle,
    description: noMoreTaxLanding.ko.seoDescription,
    type: "website",
    lastModified: "2026-10-19",
    image: socialImageUrl("columns", "no-more-tax-increases-civic-declaration-2026", "2026-10-11"),
    imageAlt: "증세, 더 이상은 안 돼! NO MORE TAX! 캠페인 배너",
  } : {
    path: section.path,
    title: `${section.title.ko} | 씨앗의 소리`,
    description: section.description.ko,
    type: "website",
    lastModified: section.key === "cases" ? "2026-10-19" : "2026-10-03",
  }),
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
  { path: "/news", title: "핫이슈 | 씨앗의 소리", description: "메인페이지에서 소개한 글을 최근에 올린 순서대로 다시 읽습니다.", type: "website", lastModified: newest([...newsArticles.map((item) => item.date), ...getHotIssueColumnsNewestFirst().map((item) => item.date)]) },
  { path: "/briefings", title: "브리핑 | 씨앗의 소리", description: "복잡한 정책과 제도 논쟁을 사실, 맥락, 관찰 지점과 씨드의 관점으로 차분하게 풀어냅니다.", type: "website", lastModified: newest(getAllBriefingsNewestFirst().map((item) => item.date)) },
  { path: "/columns", title: "칼럼 | 씨앗의 소리", description: "특정 사건의 기록에 종속되지 않는 독립적인 주장과 사유를 통해 자유, 책임, 시장과 시민사회를 깊이 생각합니다.", type: "website", lastModified: newest(getColumnsNewestFirst().map((item) => item.date)) },
  { path: "/contributions", title: "필자 기고 | 씨앗의 소리", description: "씨앗의 소리 필자들이 쓰고 편집부 검토를 거쳐 게시한 칼럼과 브리핑을 읽습니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring", title: "이슈감시 | 씨앗의 소리", description: "주요 사건의 확인된 사실과 최근 변화, 아직 풀리지 않은 질문을 뉴스트래커에 기록하고 관련 기사와 함께 보여드립니다.", type: "website", lastModified: newest(publicInterestWatchCases.map((item) => item.updatedAt)) },
  { path: "/monitoring/legislation", title: "입법감시 | 씨앗의 소리", description: "국회 법안이 시민의 권리와 선택, 기업 활동, 국가 권한과 재정에 미칠 변화를 공식 자료와 함께 추적합니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring/tax", title: "세금감시 | 씨앗의 소리", description: "정부의 세제정책과 세법·시행령·국세청 집행 기준이 시민과 기업의 실제 부담을 어떻게 바꾸는지 추적합니다.", type: "website", lastModified: latestDate },
  { path: "/monitoring/public-interest", title: "공익감시 | 씨앗의 소리", description: "공공기관·공익기관·시민단체와 보조사업이 시민의 이름으로 사용하는 권한과 돈, 설명 책임과 실제 결과를 공개자료로 점검합니다.", type: "website", lastModified: newest([...publicInterestWatchCases.map((item) => item.updatedAt), ...getPublicInterestColumnsNewestFirst().map((item) => item.date)]) },
  { path: "/proposals", title: "시민제안 | 씨앗의 소리", description: "시민의 문제의식을 구체적인 제도와 정책의 제안으로 키우는 씨앗의 소리 제안 공간입니다.", type: "website", lastModified: latestDate },
  { path: "/founding-statement", title: "왜 지금 씨앗의 소리인가 | 씨앗의 소리", description: "다수결만으로 민주주의가 완성되지 않는 이유와 법의 지배, 제한된 정부, 권력분립과 시민의 자유를 지키려는 씨앗의 소리의 취지문입니다.", type: "article", publishedAt: latestDate, lastModified: latestDate, author: "작은씨앗", section: "씨앗의 소리 취지문", image: socialImageUrl("site", "founding-statement", latestDate), imageAlt: "국회, 정부와 법원의 권력분립과 시민의 자유를 상징하는 이미지" },
  { path: "/seed-language", title: "시민언어 | 씨앗의 소리", description: "특정 진영이 독점한 시민사회의 언어를 해체하고 본래 의미를 되살려 시민의 언어로 다시 구성합니다.", type: "website", lastModified: newest(allSeedLanguageArticlesKo.map((item) => item.date)) },
  { path: "/seed-language/why-civic-language", title: "우리가 다시 뜻을 새겨야 할 말들 | 씨앗의 소리", description: "말이 현실을 어떻게 나누고 무엇을 감추는지 살피며, 자유·권력의 제한·책임·시민의 성장이라는 기준으로 씨앗이 정리할 시민언어 전체 지도입니다.", type: "article", publishedAt: "2026-09-22", lastModified: "2026-09-22", author: "작은씨앗", section: "시민언어", image: socialImageUrl("seed-language", "why-civic-language", "2026-09-22-hero1"), imageAlt: "여러 세대의 시민이 진영의 표식을 걷어내고 흩어진 말의 조각을 다시 잇는 모습" },
  { path: "/seed-language/words-turn-citizens-into-enemies", title: "말이 시민을 적으로 만든다 | 씨앗의 소리", description: "이 글은 칼럼으로 이동했습니다. 기존 주소로 들어온 독자를 새 칼럼 주소로 연결합니다.", type: "article", publishedAt: "2026-09-13", lastModified: "2026-09-22", author: "작은씨앗", section: "칼럼", noindex: true },
  { path: "/about", title: "내 삶에 닿는 뉴스, 씨앗과 함께 읽어요 | 씨앗의 소리", description: "내 세금은 어디에 쓰였을까? 동네 의료에는 어떤 변화가 생길까? 씨앗의 소리는 뉴스 속 숫자와 제도를 쉬운 말로 풀고, 시민의 일상과 이어서 설명합니다.", type: "website", lastModified: latestDate, image: assetUrl("images/about-citizens-social.jpg"), imageAlt: "햇살이 드는 동네에서 밝게 이야기를 나누는 시민들" },
  { path: "/why-seed", title: "왜 씨앗인가? | 씨앗의 소리", description: "시민을 씨앗이라 부르는 이유와 SEED의 네 뜻, AI 시대에 함께 자라는 큰 시민, 씨야의 두 잎이 품은 자유와 공정을 소개합니다.", type: "website", lastModified: "2026-09-28", image: assetUrl("images/about/why-seed-social.jpg"), imageAlt: "작은 질문에서 시작해 여러 시민의 삶으로 자라나는 씨앗의 소리" },
  { path: "/contributors", title: "필진 소개 | 씨앗의 소리", description: "작은씨앗, 경계의 시민, 생각 너머, 푸른지평, 이음. 서로 다른 현장에서 질문을 가져오는 씨앗의 소리 필진을 소개합니다.", type: "website", lastModified: "2026-09-28", image: assetUrl("images/about/contributors-writing-social.jpg"), imageAlt: "여러 사람이 자료를 살피고 함께 글을 준비하는 모습" },
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
  image: socialImageUrl("news", article.slug, article.slug === "debt-relief-repaid-borrowers-fairness-2026" ? `${article.date}-3` : article.date),
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
  const socialImageVersion = briefing.slug === "inheritance-tax-frozen-allowance-middle-class"
    ? `${briefing.date}-2`
    : briefing.date;
  const routes: SeoRoute[] = [{
    path: `/briefings/${briefing.slug}`,
    title: `${briefing.title} | 씨앗의 소리`,
    description: briefing.summary,
    type: "article",
    publishedAt: briefing.date,
    lastModified: briefing.date,
    author: briefing.author,
    section: briefing.category,
    image: previewImage ? socialImageUrl("briefings", briefing.slug, socialImageVersion) : undefined,
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
    image: previewImage ? socialImageUrl("briefings", briefing.slug, socialImageVersion) : undefined,
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
  section: isHotIssueColumn(column.slug) ? "핫이슈" : publicInterestColumnSlugs.has(column.slug) ? "공익감시" : "칼럼",
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

// Editorial SEO overrides: preserve on-page headlines and canonical article paths.
// Only use query language grounded in the published article itself.
const prioritySearchMetadata: Record<string, { title: string; description: string }> = {
  "/briefings/why-protests-spread-across-europe-october-2026": {
    title: "2026 유럽 시위 확산 이유 | 프랑스와 유럽 각국 갈등 | 씨앗의 소리",
    description: "2026년 유럽 시위는 왜 확산됐을까? 물가와 생활비, 재정 문제를 살펴보고 각국 시위의 서로 다른 배경과 시민에게 미치는 영향을 비교합니다.",
  },
  "/columns/populism-collapse-generational-conflict-2026": {
    title: "한국 재정위기 가능성 | 국가채무와 미래세대 부담 | 씨앗의 소리",
    description: "국가채무와 복지 지출이 증가할 때 미래세대는 어떤 부담을 지게 될까? 유럽의 재정 갈등과 한국의 지속가능한 재정 문제를 함께 살펴봅니다.",
  },
  "/columns/housing-tax-promise-policy-uncertainty-2026": {
    title: "2026 부동산 대책 | 대출 규제·주택 세금·공급 영향 | 씨앗의 소리",
    description: "부동산 대출 규제와 세금 정책은 집값과 거래, 실수요자의 내 집 마련에 어떤 영향을 미칠까? 주택 공급과 정책 불확실성 문제를 분석합니다.",
  },
  "/monitoring/tax/commentary/inheritance-tax-automatic-increase-2026": {
    title: "상속세 부담은 왜 늘어나나? 집값 상승과 공제 기준 | 씨앗의 소리",
    description: "상속세율이 그대로여도 집값과 자산 가격이 오르면 상속세 부담이 달라질 수 있습니다. 상속세 공제 기준과 조용한 증세 논쟁을 살펴봅니다.",
  },
  "/columns/jangjado-future-response-fund-no-more-tax-2026": {
    title: "정부 지원금·보조금 예산 논쟁 | 청년패스와 세금감시 | 씨앗의 소리",
    description: "청년문화예술패스와 각종 지원사업 예산을 납세자의 시선으로 검토합니다. 재정 지출의 목적과 효과, 정부 예산감시의 기준을 묻습니다.",
  },
  "/seed-language/basic-income-universal-payments-public-cost-2026": {
    title: "기본소득의 장단점과 문제점 | 재원·복지·세금 부담 | 씨앗의 소리",
    description: "기본소득은 기존 복지와 어떻게 다를까? 모든 국민에게 지급하는 정책의 장단점과 재원 마련, 납세자 부담을 시민의 언어로 설명합니다.",
  },
  "/briefings/health-insurance-state-support-144-percent-citizen-cost-2026": {
    title: "건강보험 국고지원 14.4% 논란 | 보험료 부담은? | 씨앗의 소리",
    description: "건강보험 국고지원 예산과 법률상 지원 기준은 어떻게 다를까? 국가 지원의 부족이 향후 건강보험 재정과 시민의 보험료에 미칠 영향을 살펴봅니다.",
  },
  "/monitoring/prosecution-service-abolition-tracker": {
    title: "검찰개혁 진행 상황 | 공소청·중수청과 수사권 변화 | 씨앗의 소리",
    description: "검찰제도 개편으로 공소청과 중수청의 역할은 어떻게 달라질까? 수사권과 기소권의 변화, 시민의 권리와 주요 쟁점을 추적합니다.",
  },
  "/seed-language/limited-state-citizen-power-boundaries-2026": {
    title: "사법부 독립과 삼권분립 | 제한된 국가란 무엇인가 | 씨앗의 소리",
    description: "제한된 국가는 무엇이고 사법부 독립이 시민의 자유에 중요한 이유는 무엇일까? 국가 권력의 경계와 삼권분립의 의미를 설명합니다.",
  },
  "/columns/security-slogans-alliance-2026": {
    title: "전작권 전환과 한미동맹 | 자주국방 논쟁의 쟁점 | 씨앗의 소리",
    description: "전시작전통제권 전환과 자주국방, 한미동맹을 둘러싼 논쟁을 분석합니다. 실질적인 군사능력과 안보 위험에 관한 질문을 살펴봅니다.",
  },
  "/columns/atr-taxpayer-movement-04-wednesday-meeting": {
    title: "시민단체 세금감시 운동 | 미국 ATR의 수요모임 | 씨앗의 소리",
    description: "미국의 납세자운동 단체 ATR은 어떻게 세금감시 네트워크를 만들었을까? 수요모임 운영과 한국 시민 세금감시운동에 대한 시사점을 살펴봅니다.",
  },
  "/columns/taxpayer-movement-03-britain-spending-watch": {
    title: "납세자 권리란 무엇인가 | 세금 신고 부담과 해외 사례 | 씨앗의 소리",
    description: "납세자의 부담은 세율뿐 아니라 신고에 드는 시간과 비용에서도 발생합니다. 해외 사례를 통해 납세자 권리와 행정 부담 문제를 살펴봅니다.",
  },
  "/columns/politicians-who-take-public-debt-lightly-2026": {
    title: "한국 국가부채, 누가 갚나? 국가 빚과 미래세대의 부담 | 씨앗의 소리",
    description: "국가부채가 늘면 국민 세금과 미래세대의 부담은 어떻게 달라질까? 이재명 대통령의 국가채무 설명과 프랑스 멜랑숑의 국채 탕감 주장을 비교합니다.",
  },
  "/columns/atr-taxpayer-movement-05-sustainable-budgets": {
    title: "정부 예산 낭비와 쪽지예산 | 국민 세금은 어디에 쓰이나? | 씨앗의 소리",
    description: "국회의원은 지역 예산 확보를 성과로 내세우지만 비용은 국민이 부담합니다. 쪽지예산과 지역사업 경쟁 구조, 시민의 예산감시 방법을 살펴봅니다.",
  },
  "/columns/france-fiscal-crisis-korea-spending-no-more-tax-2026": {
    title: "프랑스 재정위기와 한국의 세금 인상 논쟁 | 씨앗의 소리",
    description: "프랑스의 재정 조정 갈등은 한국에 무엇을 경고할까? 복지·보조금 확대와 재정 적자, 향후 증세 가능성의 연결 구조를 살펴봅니다.",
  },
  "/columns/youth-agency-not-policy-targets-2026": {
    title: "청년문화예술패스 2027 예산안 7925억 원 | 청년 지원정책 논란 | 씨앗의 소리",
    description: "청년문화예술패스 2027년 정부 예산안 7925억 원은 아직 확정·집행액이 아닙니다. 지원 확대의 목적과 청년 취업·주거·자립에 미치는 효과를 따져봅니다.",
  },
};

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
].map((route) => {
  const override = prioritySearchMetadata[route.path];
  return override ? { ...route, ...override } : route;
});

export const normalizeSeoPath = (pathname: string) => {
  const withoutLegacyBase = pathname.replace(/^\/Seed(?=\/|$)/, "");
  if (!withoutLegacyBase || withoutLegacyBase === "/") return "/";
  return withoutLegacyBase.replace(/\/+$/, "");
};

export const getSeoRoute = (pathname: string) => seoRoutes.find((route) => route.path === normalizeSeoPath(pathname));
