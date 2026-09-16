import type { Language } from "../i18n";
import {
  getEditorialContinuation as getLegacyEditorialContinuation,
  hasEditorialContinuation as hasLegacyEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsLegacy";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsLegacy";

const extraContinuations: Record<string, { ko: EditorialContinuation; en: EditorialContinuation }> = {
  "monitoring:prosecution-service-abolition-tracker": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "사건에서 판단으로",
      reason: "검찰청 폐지 뒤 수사·기소 권한이 어디로 이동하는지 확인했다면, 그 변화가 국가의 강제력을 실제로 줄이고 더 엄격히 통제하는 개혁인지 이어서 살펴봅니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "FROM RECORD TO JUDGMENT",
      reason: "After tracing where investigative and prosecutorial powers move, examine whether the new system actually reduces state coercion and subjects it to stricter control.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "monitoring:yeosu-world-island-expo-tracker": {
    ko: {
      href: "/briefings/yeosu-world-island-expo",
      title: "행사는 외주로 맡겨도 책임까지 외주로 넘길 수는 없습니다",
      relationship: "예산과 책임 깊게 보기",
      reason: "타임라인에서 확인한 사업비 확대와 운영 과정을 바탕으로 계약·사업수익·사후 활용에 남은 책임을 더 자세히 살펴봅니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/briefings/yeosu-world-island-expo",
      title: "An Event May Be Outsourced. Responsibility Cannot Be.",
      relationship: "BUDGET AND ACCOUNTABILITY",
      reason: "Use the timeline's record of expansion and operations to examine procurement, operating revenue and post-event responsibilities in greater depth.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "monitoring:kim-seung-won-confirmation-hearing": {
    ko: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "청문회 80%가 증인 0명—이쯤 가면 막 하자는 겁니까",
      relationship: "사건의 제도적 배경",
      reason: "김승원 후보자 한 사람의 청문회를 넘어, 증인 없는 청문회가 반복되며 시민의 검증권이 어떻게 약해졌는지 살펴봅니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "Zero Witnesses in Nearly 80% of Hearings—Has Scrutiny Collapsed?",
      relationship: "THE INSTITUTIONAL CONTEXT",
      reason: "Move beyond one nominee to examine how repeated witness-free hearings weaken citizens' right to scrutinize executive appointments.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "news:fuel-price-cap-tax-bill": {
    ko: {
      href: "/news/national-debt-ratio-gdp-comparison",
      title: "나랏빚 106조 늘었는데 채무비율은 하락?",
      relationship: "재정의 숨은 비용",
      reason: "가격표 뒤로 옮겨간 재정 부담을 확인했다면, 정부가 국가채무를 설명할 때 비교 기준을 어떻게 선택하는지도 이어서 살펴봅니다.",
      listHref: "/news",
    listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/news/national-debt-ratio-gdp-comparison",
      title: "Debt Rises by KRW 106 Trillion—So Why Does the Ratio Fall?",
      relationship: "HIDDEN FISCAL COSTS",
      reason: "After tracing the public cost behind a lower fuel-price sign, continue with how the government chooses the comparison basis used to describe national debt.",
      listHref: "/news",
    listLabel: "All Hot Issues",
    },
  },
  "briefing:confirmation-hearings-zero-witnesses": {
    ko: {
      href: "/news/kim-seung-won-confirmation-hearing",
      title: "김승원 후보자 청문회, 지금까지 무엇이 달라졌나",
      relationship: "이 사건 계속 보기",
      reason: "9월 15일 청문회 개최와 새롭게 확인된 사실, 후보자의 해명, 경과보고서와 임명 여부를 하나의 타임라인에서 계속 확인합니다.",
      listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/news/kim-seung-won-confirmation-hearing",
      title: "Kim Seung-won's Hearing: What Has Changed?",
      relationship: "FOLLOW THIS CASE",
      reason: "Follow the September 15 hearing, newly verified facts, the nominee's responses and the pending committee report and appointment decision in one timeline.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "seed-language:words-turn-citizens-into-enemies": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
      relationship: "언어와 시민",
      reason: "진영이 붙인 이름에서 벗어난 시민이 어떻게 스스로 묻고 판단하는 공공의 주체로 성장하는지 이어서 살펴봅니다.",
      listHref: "/seed-language",
    listLabel: "용어해설 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "Citizenship Is Not a Given Label; It Is Something We Grow Into",
      relationship: "LANGUAGE AND CITIZENSHIP",
      reason: "Continue with how citizens move beyond partisan labels and grow into public agents who question and judge for themselves.",
      listHref: "/seed-language",
    listLabel: "All Glossary entries",
    },
  },
  "news:national-debt-ratio-gdp-comparison": {
    ko: {
      href: "/briefings/2027-national-budget-revenue-debt",
      title: "820.9조 원 슈퍼예산, 나라살림은?",
      relationship: "숫자 더 깊게 보기",
      reason: "국가채무비율의 비교 기준을 확인한 뒤, 2027년 예산의 세입·지출·기금 구조를 같은 기준으로 더 자세히 살펴봅니다.",
      listHref: "/news",
    listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/briefings/2027-national-budget-revenue-debt",
      title: "The KRW 820.9 Trillion Budget Test",
      relationship: "READ THE NUMBERS",
      reason: "After checking the GDP basis behind the debt ratio, examine the revenue, spending and fund structure of the 2027 budget in greater detail.",
      listHref: "/news",
    listLabel: "All Hot Issues",
    },
  },
  "column:state-cannot-monopolize-life-2026": {
    ko: {
      href: "/columns/civic-groups-are-not-state-vanguard-2026",
      title: "시민단체는 정부의 돌격대가 아니다",
      relationship: "시민사회와 국가",
      reason: "자살예방 정책의 국가 독점 문제를 넘어, 정부 사업에 동원되는 시민사회가 어떻게 독립성과 비판 기능을 잃는지 이어서 살펴봅니다.",
      listHref: "/columns",
    listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/civic-groups-are-not-state-vanguard-2026",
      title: "Civic Groups Are Not the Government’s Vanguard",
      relationship: "CIVIL SOCIETY AND THE STATE",
      reason: "Continue from the state monopoly over suicide prevention to how civic organizations lose their independence and critical role when drafted into government programs.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "news:media-appeal-justice-press-play": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "함께 읽기",
      reason: "검찰청 해체와 보완수사권 논란이 시민의 권리와 권력 통제 문제로 이어지는 지점을 더 넓게 살펴봅니다.",
      listHref: "/news",
    listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "READ NEXT",
      reason: "Continue with the broader question of how prosecution reform, investigative powers and institutional checks affect citizen rights.",
      listHref: "/news",
    listLabel: "All Hot Issues",
    },
  },
  "column:civic-groups-are-not-state-vanguard-2026": {
    ko: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "시민의 이름으로 시민을 지배할 때",
      relationship: "시민권력 감시",
      reason: "국가권력과 결합한 시민단체의 도덕적 권위가 어떻게 시민을 압박하는 또 하나의 권력이 될 수 있는지 이어서 살펴봅니다.",
      listHref: "/columns",
    listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "When Citizens Are Ruled in the Name of Citizens",
      relationship: "WATCHING CIVIC POWER",
      reason: "Continue with how the moral authority of civic groups, when joined to state power, can become another form of pressure over citizens.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "column:control-power-before-ten-percent-penalty-2026": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "권력 통제의 관점",
      reason: "기업에 대한 행정 제재의 문제를 넘어 국가의 강제력이 어느 기관으로 이동하고 어떤 절차로 통제돼야 하는지 이어서 살펴봅니다.",
      listHref: "/columns",
    listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "CONSTRAINING STATE POWER",
      reason: "Continue from administrative sanctions on companies to the broader question of where state coercion moves and how institutions should constrain it.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "column:citizenization-before-advancement-2026": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
      relationship: "시민화 더 깊게 읽기",
      reason: "선진화의 출발점으로 제안한 시민화가 시민 한 사람의 자유와 책임, 공익의 실천에서 어떻게 시작되는지 이어서 살펴봅니다.",
      listHref: "/columns",
    listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "Citizenship Is Not a Given Label; It Is Something We Grow Into",
      relationship: "EXPLORE CIVIC FORMATION",
      reason: "Continue with how civic formation begins in each person's freedom, responsibility and practice of the public good.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "column:no-one-stopped-it-silence-and-power": {
    ko: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "시민의 이름으로 시민을 지배할 때",
      relationship: "침묵과 시민권력",
      reason: "한 사람의 침묵이 권력의 빈자리를 만드는 장면에서 출발해, 시민의 이름으로 커진 권력을 시민이 어떻게 다시 감시해야 하는지 이어서 살펴봅니다.",
      listHref: "/columns",
      listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "When Citizens Are Ruled in the Name of Citizens",
      relationship: "SILENCE AND CIVIC POWER",
      reason: "Continue from the silence that leaves room for power to the question of how citizens should scrutinize authority exercised in their own name.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "briefing:social-economy-fair-competition": {
    ko: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "사회연대경제기본법, 청년몰 실패 사례에서 배우자",
      relationship: "관련 사례",
      reason: "국가가 공급자를 만들어도 시민의 선택과 지속 가능한 시장까지 만들 수 있는 것은 아니라는 점을 청년몰 사례에서 확인합니다.",
      listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "Korea's Social and Solidarity Economy Act: Lessons from the Youth Mall Failure",
      relationship: "RELATED CASE",
      reason: "See how Korea's Youth Mall experience shows that government can create suppliers without creating durable citizen demand or a sustainable market.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
};

const keyOf = (kind: EditorialContentKind, slug: string) => `${kind}:${slug}`;

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  return Boolean(extraContinuations[keyOf(kind, slug)]) || hasLegacyEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  const extra = extraContinuations[keyOf(kind, slug)];
  if (extra) return extra[language];
  return getLegacyEditorialContinuation(kind, slug, language);
}
