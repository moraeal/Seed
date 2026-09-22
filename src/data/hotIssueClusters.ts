import type { Language } from "../i18n";
import { getAllBriefing } from "./allBriefings";
import { getColumn } from "./columns";
import { getLegislativeCommentary, getLegislativeCommentaryEdition } from "./legislativeCommentaries";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "./localizedContent";
import { getNewsArticle } from "./news";
import { getPublicInterestWatchCase } from "./newsTrackerRegistry";

type HotIssueReference =
  | { kind: "briefing" | "column" | "news" | "watch"; slug: string }
  | { kind: "legislative-commentary"; slug: string };

export type HotIssueClusterItem = {
  key: string;
  to: string;
  title: string;
  summary: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  kindLabel: string;
  readMinutes?: number;
  status?: string;
};

export type HotIssueCluster = {
  id: string;
  number: string;
  title: string;
  summary: string;
  focus: string;
  items: HotIssueClusterItem[];
  updatedAt: string;
};

const fallbackImage = "/images/brand/editorial-image-fallback.svg";

const clusterDefinitions: Array<{
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  focus: Record<Language, string>;
  references: HotIssueReference[];
}> = [
  {
    id: "yeosu-island-expo",
    title: {
      ko: "여수세계섬박람회, 커진 예산과 늦어진 준비",
      en: "Yeosu World Island Expo: a larger budget and a late rush",
    },
    summary: {
      ko: "248억 원으로 승인된 행사는 직접사업비 713억 원으로 커졌습니다. 개막 뒤에도 현장 혼선과 계약 논란이 이어지는 가운데, 씨앗은 예산·입찰·계약 자료를 한 흐름으로 묶어 추적합니다.",
      en: "An event approved at KRW 24.8 billion grew to KRW 71.3 billion in direct project spending. SEED VOICE connects the budget, tenders, contracts and post-opening problems in one continuing record.",
    },
    focus: {
      ko: "지금 볼 질문 · 713억 원의 예산과 412건의 계약은 어디로 흘렀나",
      en: "Question now · Where did the KRW 71.3 billion budget and 412 contract records go?",
    },
    references: [
      { kind: "column", slug: "yeosu-island-expo-procurement-ledger" },
      { kind: "watch", slug: "yeosu-world-island-expo-tracker" },
      { kind: "briefing", slug: "yeosu-world-island-expo" },
    ],
  },
  {
    id: "inheritance-tax-business-continuity",
    title: {
      ko: "상속세와 기업승계, 세금이 기업의 존속을 흔들 때",
      en: "Inheritance tax and business succession",
    },
    summary: {
      ko: "상속은 개인 재산의 이전만이 아닙니다. 기업의 주식과 고용, 투자와 서비스가 다음 세대로 이어질 수 있는지를 함께 결정합니다. 씨앗은 고율 과세가 기업과 인재의 이동에 미치는 영향을 살펴봅니다.",
      en: "Inheritance is not only a transfer of private wealth. It can determine whether ownership, jobs, investment and services survive into the next generation. These stories examine how high rates affect business continuity and mobility.",
    },
    focus: {
      ko: "지금 볼 질문 · 편법을 막는 세금이 정상적인 기업승계까지 막고 있지 않은가",
      en: "Question now · Is a tax meant to deter avoidance also obstructing legitimate succession?",
    },
    references: [
      { kind: "briefing", slug: "hospital-inheritance-tax-maternity-care" },
      { kind: "column", slug: "inheritance-tax-capital-and-talent-mobility" },
      { kind: "column", slug: "wealth-crosses-borders-inheritance-tax" },
    ],
  },
  {
    id: "prosecution-power-transfer",
    title: {
      ko: "검찰청 폐지, 수사권력은 어디로 이동하나",
      en: "After abolishing the prosecution service, where does investigative power go?",
    },
    summary: {
      ko: "검찰청 간판이 사라져도 국가의 강제력은 사라지지 않습니다. 공소청·중수청 출범과 보완수사권 폐지 논쟁을 시민의 방어권, 피해자 구제, 책임의 연결이라는 기준으로 계속 확인합니다.",
      en: "Removing the prosecution service does not remove the state's coercive power. SEED VOICE follows the new agencies, the loss of supplementary-investigation powers, remedies for victims and lines of accountability.",
    },
    focus: {
      ko: "지금 볼 질문 · 권력은 줄었나, 아니면 주소만 바뀌었나",
      en: "Question now · Has power shrunk, or merely changed address?",
    },
    references: [
      { kind: "watch", slug: "prosecution-service-abolition-tracker" },
      { kind: "legislative-commentary", slug: "criminal-investigation-power-and-accountability" },
      { kind: "column", slug: "prosecution-reform-power-transfer-2026" },
      { kind: "briefing", slug: "prosecution-service-abolition" },
    ],
  },
  {
    id: "public-institution-reform",
    title: {
      ko: "공공기관 109, 통합과 분할이 정말 개혁인가",
      en: "Public-sector reform: do mergers and splits add up to reform?",
    },
    summary: {
      ko: "정부는 발전 공기업을 합치고 LH는 나누며 공공기관 109개를 줄이겠다고 밝혔습니다. 조직도보다 중요한 것은 부채와 비용, 권력과 책임이 시민에게 더 잘 보이게 되는가입니다.",
      en: "The government plans to merge power generators, split LH and reduce the public-sector count by 109. The real test is whether debt, cost, power and responsibility become more visible to citizens.",
    },
    focus: {
      ko: "지금 볼 질문 · 한쪽에서는 빚을 나누고 다른 쪽에서는 권력을 합치는 기준은 무엇인가",
      en: "Question now · What principle justifies splitting debt on one side while concentrating power on the other?",
    },
    references: [
      { kind: "news", slug: "lh-debt-split-power-five-merge" },
      { kind: "watch", slug: "public-institution-reform-109" },
      { kind: "news", slug: "lh-split-public-agency-experiment" },
      { kind: "column", slug: "lh-reform-politics-2026" },
    ],
  },
];

function resolveReference(reference: HotIssueReference, language: Language): HotIssueClusterItem | null {
  const ko = language === "ko";

  if (reference.kind === "column") {
    const source = getColumn(reference.slug);
    if (!source) return null;
    const item = localizeColumn(source, language);
    return {
      key: `column-${item.slug}`,
      to: `/columns/${item.slug}`,
      title: item.title,
      summary: item.summary,
      date: item.date,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
      kindLabel: ko ? "칼럼" : "Column",
      readMinutes: item.readMinutes,
    };
  }

  if (reference.kind === "briefing") {
    const source = getAllBriefing(reference.slug);
    if (!source) return null;
    const item = localizeBriefing(source, language);
    return {
      key: `briefing-${item.slug}`,
      to: `/briefings/${item.slug}`,
      title: item.title,
      summary: item.summary,
      date: item.date,
      imageSrc: item.images?.[0]?.src ?? fallbackImage,
      imageAlt: item.images?.[0]?.alt ?? item.title,
      kindLabel: ko ? "브리핑" : "Briefing",
      readMinutes: item.readMinutes,
    };
  }

  if (reference.kind === "news") {
    const source = getNewsArticle(reference.slug);
    if (!source) return null;
    const item = localizeNewsArticle(source, language);
    return {
      key: `news-${item.slug}`,
      to: `/news/${item.slug}`,
      title: item.title,
      summary: item.summary,
      date: item.date,
      imageSrc: item.selectedNews.thumbnailUrl ?? item.heroImage.src,
      imageAlt: item.selectedNews.thumbnailAlt ?? item.heroImage.alt,
      kindLabel: ko ? "핫이슈 기사" : "Hot-issue report",
      readMinutes: item.readMinutes,
    };
  }

  if (reference.kind === "legislative-commentary") {
    const source = getLegislativeCommentary(reference.slug);
    if (!source) return null;
    const item = getLegislativeCommentaryEdition(source, language);
    return {
      key: `legislative-commentary-${source.slug}`,
      to: `/monitoring/legislation/commentary/${source.slug}`,
      title: item.title,
      summary: item.summary,
      date: source.date,
      imageSrc: source.heroSrc,
      imageAlt: item.heroAlt,
      kindLabel: ko ? "입법 논평" : "Legislative commentary",
      readMinutes: source.readMinutes,
    };
  }

  const item = getPublicInterestWatchCase(reference.slug);
  if (!item) return null;
  return {
    key: `watch-${item.slug}`,
    to: `/monitoring/${item.slug}`,
    title: item.title[language],
    summary: item.summary[language],
    date: item.updatedAt,
    imageSrc: item.heroImage?.src ?? fallbackImage,
    imageAlt: item.heroImage?.alt[language] ?? item.title[language],
    kindLabel: ko ? "시민감시" : "Civic Watch",
    status: item.status[language],
  };
}

export function getHotIssueClusters(language: Language): HotIssueCluster[] {
  return clusterDefinitions.map((cluster, index) => {
    const items = cluster.references
      .map((reference) => resolveReference(reference, language))
      .filter((item): item is HotIssueClusterItem => Boolean(item))
      .sort((a, b) => b.date.localeCompare(a.date));

    return {
      id: cluster.id,
      number: String(index + 1).padStart(2, "0"),
      title: cluster.title[language],
      summary: cluster.summary[language],
      focus: cluster.focus[language],
      items,
      updatedAt: items[0]?.date ?? "",
    };
  }).filter((cluster) => cluster.items.length > 0);
}
