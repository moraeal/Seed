import { farmlandCensusTracker } from "./farmlandCensusTracker";
import { militaryAcademyIntegrationTracker } from "./militaryAcademyIntegrationTracker";
import { kimSeungWonHearingWatch } from "./kimSeungWonHearingWatch";
import { nuclearPolicyReversalTracker } from "./nuclearPolicyReversalTracker";
import { prosecutionServiceAbolitionTracker } from "./prosecutionServiceAbolitionTracker";
import { yeosuIslandExpoTracker } from "./yeosuIslandExpoTracker";

export type LocalizedText = { ko: string; en: string };

export type WatchTimelineStatus = "confirmed" | "response" | "new" | "pending";

export type WatchTimelineSource = {
  publisher: LocalizedText;
  title: LocalizedText;
  url: string;
  publishedAt?: string;
  thumbnailSrc?: string;
  kind?: "article" | "video" | "document";
};

export type WatchTimelineEntry = {
  date: string;
  title: LocalizedText;
  description: LocalizedText;
  change?: LocalizedText;
  status: WatchTimelineStatus;
  sources?: WatchTimelineSource[];
};

export type WatchIssue = {
  title: LocalizedText;
  claim: LocalizedText;
  response: LocalizedText;
  assessment: LocalizedText;
  status: "confirmed" | "contested" | "pending";
};

export type WatchKeyChange = {
  date: string;
  text: LocalizedText;
};

export type WatchControversy = {
  title: LocalizedText;
  description: LocalizedText;
};

export type WatchAuthorityMap = {
  institution: LocalizedText;
  role: LocalizedText;
  citizenCheck: LocalizedText;
};

export type WatchRelatedContent = {
  href: string;
  label: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  date: string;
};

export type WatchSource = {
  label: LocalizedText;
  url: string;
  note?: LocalizedText;
};

export type PublicInterestWatchCase = {
  slug: string;
  organization: LocalizedText;
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  status: LocalizedText;
  updatedAt: string;
  sourceBasis: LocalizedText;
  confirmedFacts: LocalizedText[];
  questions: LocalizedText[];
  proposals: LocalizedText[];
  caution?: LocalizedText;
  supportNote?: LocalizedText;
  hideSourceBasis?: boolean;
  sources: WatchSource[];
  researchHref?: string;
  researchLabel?: LocalizedText;
  openedAt?: string;
  nextCheck?: LocalizedText;
  heroImage?: {
    src: string;
    alt: LocalizedText;
    caption: LocalizedText;
    credit: LocalizedText;
  };
  keyChanges?: WatchKeyChange[];
  timeline?: WatchTimelineEntry[];
  issues?: WatchIssue[];
  currentControversies?: WatchControversy[];
  authorityMap?: WatchAuthorityMap[];
  authorityMapIntro?: LocalizedText;
  followUpChecks?: LocalizedText[];
  sectionHeadings?: {
    facts?: LocalizedText;
    controversies?: LocalizedText;
    followUp?: LocalizedText;
  };
  continuationEligible?: boolean;
  relatedContents?: WatchRelatedContent[];
};

export const publicInterestWatchCases: PublicInterestWatchCase[] = [
  militaryAcademyIntegrationTracker,
  nuclearPolicyReversalTracker,
  farmlandCensusTracker,
  prosecutionServiceAbolitionTracker,
  yeosuIslandExpoTracker,
  kimSeungWonHearingWatch,
  {
    slug: "beautiful-store",
    organization: { ko: "아름다운가게", en: "Beautiful Store" },
    eyebrow: { ko: "자원순환·나눔 경제", en: "Resource circulation · Giving economy" },
    title: {
      ko: "기부한 물건과 시민의 참여는 얼마나 공익으로 돌아오는가",
      en: "How much donated value returns to citizens as public benefit?",
    },
    summary: {
      ko: "아름다운가게는 시민이 기부한 물품을 판매해 자원순환과 나눔을 연결하는 대규모 공익조직입니다. 씨드는 회계의 적정성을 인정하면서도 물품의 흐름, 축적된 자산, 공익지원과 지역 참여가 시민에게 충분히 설명되는지 묻습니다.",
      en: "Beautiful Store turns donated goods into resource circulation and public benefit at significant scale. SEED recognizes its clean audit opinion while asking whether goods flows, accumulated assets, grants and local participation are explained clearly enough.",
    },
    status: { ko: "재정·시민참여 점검", en: "Finance and participation review" },
    updatedAt: "2026-09-01",
    sourceBasis: {
      ko: "씨드가 보관한 「2025 아름다운가게 감사보고서」의 재무제표와 주석을 중심으로, 아름다운가게의 투명경영 공시·연차보고서·임원 및 위원회 자료를 함께 검토했습니다. 다른 기관의 자료는 포함하지 않았습니다.",
      en: "This record is based on SEED's archived 2025 Beautiful Store audit report, cross-checked with the organization's transparency, annual-report and governance pages. It does not use Beautiful Foundation or ChildFund Korea materials.",
    },
    confirmedFacts: [
      {
        ko: "2025년 외부감사인은 아름다운가게 재무제표가 공익법인회계기준과 일반기업회계기준에 따라 중요성의 관점에서 공정하게 표시됐다는 감사의견을 냈습니다.",
        en: "The 2025 independent auditor concluded that Beautiful Store's statements were fairly presented in all material respects under applicable nonprofit and business accounting standards.",
      },
      {
        ko: "2025년 사업수익은 394억 7,764만 원입니다. 이 가운데 기부금수익은 81억 1,745만 원, 자원재순환사업수익은 277억 6,784만 원입니다.",
        en: "2025 program revenue was KRW 39.478 billion, including KRW 8.117 billion in donations and KRW 27.768 billion from resource-circulation activities.",
      },
      {
        ko: "같은 해 개인 및 공익활동지원사업 비용은 39억 386만 원, 자원재순환사업 비용은 251억 1,353만 원이며 일반관리비용은 37억 3,517만 원, 모금비용은 4억 9,304만 원입니다.",
        en: "Spending included KRW 3.904 billion for individual and public-interest support, KRW 25.114 billion for circulation operations, KRW 3.735 billion in general administration and KRW 493 million in fundraising.",
      },
      {
        ko: "2025년 말 자산은 528억 7,861만 원, 순자산은 374억 7,168만 원입니다. 현금및현금성자산은 155억 3,717만 원이고 장기차입금은 110억 6,378만 원입니다.",
        en: "At year-end, assets were KRW 52.879 billion and net assets KRW 37.472 billion. Cash and cash equivalents were KRW 15.537 billion, while long-term borrowings were KRW 11.064 billion.",
      },
      {
        ko: "미처분이익잉여금 364억 7,168만 원은 전액 차기로 이월됐습니다. 토지·건물 장부가액 174억 4,346만 원은 금융기관 차입과 관련해 담보로 제공됐습니다.",
        en: "Unappropriated retained earnings of KRW 36.472 billion were fully carried forward. Land and buildings with a KRW 17.443 billion book value secured bank borrowing.",
      },
    ],
    questions: [
      {
        ko: "기부물품의 접수·선별·판매·재활용·폐기 수량과 평가금액을 지역·품목별로 연결해 시민이 물품의 전 과정을 확인할 수 있습니까?",
        en: "Can citizens trace donated goods from receipt through sorting, sale, recycling or disposal, with quantities and valuations by region and category?",
      },
      {
        ko: "364억 7천만 원의 미처분이익잉여금 가운데 현금성 재원, 부동산·보증금 등 비현금성 자산, 이미 용도가 정해진 재원을 구분하고 향후 사용계획을 공개할 수 있습니까?",
        en: "Can the KRW 36.47 billion retained-earnings balance be separated into cash, property and deposits, and committed funds, with a forward spending plan?",
      },
      {
        ko: "장기차입금이 95억 7천만 원에서 110억 6천만 원으로 증가한 이유와 상환계획, 서울그물코센터 건립 모금액·총사업비·운영효율 개선 효과를 한 표로 설명할 수 있습니까?",
        en: "Can Beautiful Store explain