import type { Language } from "../i18n";
import {
  getEditorialContinuation as getBaseEditorialContinuation,
  hasEditorialContinuation as hasBaseEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsBase";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsBase";

const freedomContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/citizen-as-seed",
    title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
    relationship: "자유와 시민",
    reason: "자유가 시민을 주체로 세우는 조건이라면, 그 시민이 어떻게 공공의 주체로 성장하는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/seed-language/citizen-as-seed",
    title: "A Citizen Is Not a Given Label but a Growing Being",
    relationship: "FREEDOM AND CITIZENSHIP",
    reason: "If freedom makes citizens agents, continue with how those citizens grow into public responsibility.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const progressContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "자유는 방임이 아니라, 스스로 설 수 있는 힘이다",
    relationship: "진보와 자유",
    reason: "진보를 시민의 자유를 넓히는 태도로 판단했다면, 자유가 방임이나 보호의 반대말을 넘어 시민을 어떻게 주체로 세우는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "Freedom Is Not Neglect. It Is What Makes Citizens Agents",
    relationship: "PROGRESS AND FREEDOM",
    reason: "If progress is judged by whether it expands citizens' freedom, continue with how freedom makes citizens agents rather than objects of protection.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const conservatismContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/what-is-true-progress",
    title: "무엇이 진짜 진보인가",
    relationship: "보수와 진보",
    reason: "보수가 무엇을 지킬 것인지 살펴봤다면, 진보가 무엇을 바꾸고 자기편의 권력까지 고칠 수 있는지 같은 기준으로 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/seed-language/what-is-true-progress",
    title: "What Is Real Progress?",
    relationship: "CONSERVATISM AND PROGRESS",
    reason: "After asking what conservatism should preserve, continue with whether progress can reform unjust institutions—and the power held by its own camp.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const discourseContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "선진화를 위해서는 시민화가 우선이다",
    relationship: "담론과 시민화",
    reason: "선진화 담론이 시민의 실천과 어떻게 만날 수 있는지, 시민화를 하나의 판단 잣대로 제안한 글로 이어갑니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "Citizenization Must Come Before Advancement",
    relationship: "DISCOURSE AND CITIZENIZATION",
    reason: "Continue with how the advancement discourse can meet civic practice, and why citizenization is offered as one standard of judgment.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const farmlandOwnershipContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/monitoring/farmland-census-disposal-orders-tracker",
    title: "농지 27%는 누가 사나",
    relationship: "사실과 절차 추적",
    reason: "칼럼이 제기한 질문에 이어 전수조사 수치, 처분 절차, 연간 25% 이행강제금과 후속 조치를 자료별로 확인합니다.",
    listHref: "/news",
    listLabel: "핫이슈 전체 보기",
  },
  en: {
    href: "/monitoring/farmland-census-disposal-orders-tracker",
    title: "Who Will Buy the 27% of Farmland Flagged?",
    relationship: "TRACK THE FACTS AND PROCESS",
    reason: "Continue from the column's questions to a source-by-source tracker of the survey figures, disposal process, annual 25% enforcement charge and next steps.",
    listHref: "/news",
    listLabel: "All Hot Issues",
  },
};

const farmlandTrackerContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/farmland-ownership-without-an-exit",
    title: "소유권은 남았지만 소유할 수 없다",
    relationship: "씨앗의 소리",
    reason: "농지 전수조사의 숫자와 절차를 확인했다면, 팔리지 않는 농지와 반복되는 이행강제금이 시민의 재산권에 남기는 문제를 이어서 읽습니다.",
    listHref: "/monitoring",
    listLabel: "시민감시 전체 보기",
  },
  en: {
    href: "/columns/farmland-ownership-without-an-exit",
    title: "Ownership on Paper, but No Practical Right to Keep It",
    relationship: "SEED VOICE",
    reason: "After reviewing the census figures and enforcement process, continue with what unsellable farmland and recurring charges mean for citizens' property rights.",
    listHref: "/monitoring",
    listLabel: "All Civic Watch records",
  },
};

const nuclearPolicyColumnContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/monitoring/democratic-party-nuclear-policy-reversal-tracker",
    title: "탈원전에서 신규 원전 추진까지",
    relationship: "사실과 정책 변화 추적",
    reason: "칼럼이 제기한 정책의 예측가능성과 기업 자율성 문제에 이어, 2017년 이후 원전정책과 기업 이전 논의가 어떻게 바뀌었는지 날짜별 자료로 확인합니다.",
    listHref: "/news",
    listLabel: "핫이슈 전체 보기",
  },
  en: {
    href: "/monitoring/democratic-party-nuclear-policy-reversal-tracker",
    title: "From a Nuclear Phase-Down to New Reactor Construction",
    relationship: "TRACK THE FACTS AND POLICY SHIFTS",
    reason: "Continue from the column's argument to a dated record of nuclear policy, regional industrial planning and corporate relocation since 2017.",
    listHref: "/news",
    listLabel: "All Hot Issues",
  },
};

const nuclearPolicyTrackerContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/democratic-party-nuclear-policy-reversal",
        title: "탈원전 외치더니 이젠 친원전 하자고?",
    relationship: "씨앗의 소리",
    reason: "날짜별 정책 변화를 확인했다면, 탈원전에서 원전 확대로의 전환과 기업 이전 정책이 국가의 예측가능성과 권력의 한계에 남기는 문제를 이어서 읽습니다.",
    listHref: "/monitoring",
    listLabel: "시민감시 전체 보기",
  },
  en: {
    href: "/columns/democratic-party-nuclear-policy-reversal",
    title: "Now South Korea's Democrats Want to Build Nuclear Plants Again",
    relationship: "SEED VOICE",
    reason: "After reviewing the dated record, continue with what the reversal and corporate-relocation policy mean for predictability and the limits of state power.",
    listHref: "/monitoring",
    listLabel: "All Civic Watch records",
  },
};

const prosecutionReformColumnContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/monitoring/prosecution-service-abolition-tracker",
    title: "검찰청 폐지, 무엇이 사라지고 무엇이 남나",
    relationship: "사실과 제도 변화 추적",
    reason: "권력 이전의 위험을 짚은 논평에 이어, 검찰청 폐지와 수사·기소 권한 재편이 실제로 어떻게 진행되는지 날짜별 기록으로 확인합니다.",
    listHref: "/news",
    listLabel: "핫이슈 전체 보기",
  },
  en: {
    href: "/monitoring/prosecution-service-abolition-tracker",
    title: "Abolishing the Prosecution Service: What Disappears, and What Remains?",
    relationship: "TRACK THE INSTITUTIONAL CHANGE",
    reason: "Continue from the argument about relocated power to a dated record of the prosecution service's abolition and the redistribution of investigative and charging authority.",
    listHref: "/news",
    listLabel: "All Hot Issues",
  },
};

const militaryAcademyColumnContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/news/military-academy-integration-tracker",
    title: "사관학교를 합치면 군은 강해지나",
    relationship: "계획과 변화 추적",
    reason: "칼럼의 판단에 이어 기본계획, 장교 양성 통계, 공청회와 장관 후보자의 보완 발언이 어떻게 정책에 반영되는지 날짜별로 확인합니다.",
    listHref: "/columns",
    listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/news/military-academy-integration-tracker",
    title: "Will Merging the Service Academies Make the Military Stronger?",
    relationship: "TRACK THE PLAN",
    reason: "Continue from the column to a dated record of the basic plan, commissioning data, the hearing and the incoming minister's proposed revisions.",
    listHref: "/columns",
    listLabel: "All columns",
  },
};

const militaryAcademyTrackerContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/military-academy-integration-rotc-question",
    title: "사관학교 통합, 전력 강화보다 정치가 먼저 보인다",
    relationship: "사실에서 판단으로",
    reason: "통합안의 변화와 확인된 수치를 본 뒤, 왜 14%가 나오는 사관학교의 물리적 통합이 군 전체의 전력 강화로 이어지는지 씨앗의 관점에서 따져봅니다.",
    listHref: "/news",
    listLabel: "핫이슈 전체 보기",
  },
  en: {
    href: "/columns/military-academy-integration-rotc-question",
    title: "A Service Academy Merger Driven More by Politics Than Military Need",
    relationship: "FROM FACTS TO JUDGMENT",
    reason: "After reviewing the plan and the verified numbers, examine whether merging the academies that produce 14 percent of new officers can strengthen the force as a whole.",
    listHref: "/news",
    listLabel: "All Hot Issues",
  },
};

const fukushimaJourneyContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/democratic-party-nuclear-policy-reversal",
        title: "탈원전 외치더니 이젠 친원전 하자고?",
    relationship: "기행에서 정책으로",
    reason: "후쿠시마 현장 기록에 이어, 한국의 원전정책이 탈원전에서 신규 원전 추진으로 바뀌는 과정과 정책의 예측가능성을 살펴봅니다.",
    listHref: "/columns",
    listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/columns/democratic-party-nuclear-policy-reversal",
    title: "Now South Korea's Democrats Want to Build Nuclear Plants Again",
    relationship: "FROM FIELD NOTES TO POLICY",
    reason: "Continue from the Fukushima field record to South Korea's shift from a nuclear phase-down toward new reactors and the question of policy predictability.",
    listHref: "/columns",
    listLabel: "All columns",
  },
};

const korea97GenerationContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "선진화를 위해서는 시민화가 우선이다",
    relationship: "광장의 감정에서 시민의 판단으로",
    reason: "한 세대가 공유한 광장의 정서를 돌아봤다면, 시민이 진영의 확신을 넘어 사실을 확인하고 스스로 판단하는 힘을 어떻게 기를지 이어서 살펴봅니다.",
    listHref: "/columns",
    listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "Citizenization Must Come Before Advancement",
    relationship: "FROM COLLECTIVE EMOTION TO CIVIC JUDGMENT",
    reason: "After examining the emotional politics of a generation, continue with how citizens can verify facts and judge for themselves beyond the certainty of political camps.",
    listHref: "/columns",
    listLabel: "All columns",
  },
};

const publicHealthFunctionContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/state-cannot-monopolize-life-2026",
    title: "국가는 생명을 독점할 수 없다",
    relationship: "지역의료에서 시민의 생명으로",
    reason: "지역의료의 공공성을 소유가 아니라 기능과 결과로 판단했다면, 생명을 지키는 정책에서 국가와 시민사회가 책임과 권한을 어떻게 나눌지 이어서 살펴봅니다.",
    listHref: "/columns",
    listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/columns/state-cannot-monopolize-life-2026",
    title: "The State Cannot Monopolize the Work of Saving Lives",
    relationship: "FROM REGIONAL CARE TO CIVIC RESPONSIBILITY",
    reason: "After judging public health care by function and outcomes rather than ownership, continue with how government and civil society should share responsibility and authority in policies that protect life.",
    listHref: "/columns",
    listLabel: "All columns",
  },
};

const publicLanguageContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/public-health-proved-by-function",
    title: "공공의료는 병원 간판으로 증명되지 않는다",
    relationship: "개념에서 생활로",
    reason: "공공을 소유가 아니라 기능·참여·책임의 관계로 이해했다면, 지역의료에서 그 기준이 실제로 어떻게 작동하는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/columns/public-health-proved-by-function",
    title: "Public Healthcare Is Not Proven by the Name on the Hospital",
    relationship: "FROM CONCEPT TO DAILY LIFE",
    reason: "After understanding publicness as a relationship of function, participation and accountability rather than ownership, see how that standard works in regional healthcare.",
    listHref: "/seed-language",
    listLabel: "All Glossary articles",
  },
};

const isFreedom = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "freedom-as-citizen-agency";
const isProgress = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-progress";
const isConservatism = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-conservatism";
const isDiscourse = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "discourse-many-words-no-direction";
const isFarmlandOwnership = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "farmland-ownership-without-an-exit";
const isFarmlandTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "farmland-census-disposal-orders-tracker";
const isNuclearPolicyColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "democratic-party-nuclear-policy-reversal";
const isNuclearPolicyTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "democratic-party-nuclear-policy-reversal-tracker";
const isProsecutionReformColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "prosecution-reform-power-transfer-2026";
const isMilitaryAcademyColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "military-academy-integration-rotc-question";
const isMilitaryAcademyTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "military-academy-integration-tracker";
const isFukushimaJourney = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "fukushima-journey-original";
const isKorea97Generation = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "korea-97-generation-political-emotion";
const isPublicHealthFunction = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "public-health-proved-by-function";
const isPublicLanguage = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "public-beyond-state-ownership";

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  if (isPublicLanguage(kind, slug)) return true;
  if (isPublicHealthFunction(kind, slug)) return true;
  if (isKorea97Generation(kind, slug)) return true;
  if (isFukushimaJourney(kind, slug)) return true;
  if (isNuclearPolicyTracker(kind, slug)) return true;
  if (isNuclearPolicyColumn(kind, slug)) return true;
  if (isProsecutionReformColumn(kind, slug)) return true;
  if (isConservatism(kind, slug)) return true;
  if (isMilitaryAcademyTracker(kind, slug)) return true;
  if (isMilitaryAcademyColumn(kind, slug)) return true;
  if (isFarmlandTracker(kind, slug)) return true;
  if (isFarmlandOwnership(kind, slug)) return true;
  if (isDiscourse(kind, slug)) return true;
  if (isProgress(kind, slug)) return true;
  if (isFreedom(kind, slug)) return true;
  return hasBaseEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  if (isPublicLanguage(kind, slug)) return publicLanguageContinuation[language];
  if (isPublicHealthFunction(kind, slug)) return publicHealthFunctionContinuation[language];
  if (isKorea97Generation(kind, slug)) return korea97GenerationContinuation[language];
  if (isFukushimaJourney(kind, slug)) return fukushimaJourneyContinuation[language];
  if (isMilitaryAcademyTracker(kind, slug)) return militaryAcademyTrackerContinuation[language];
  if (isMilitaryAcademyColumn(kind, slug)) return militaryAcademyColumnContinuation[language];
  if (isNuclearPolicyTracker(kind, slug)) return nuclearPolicyTrackerContinuation[language];
  if (isNuclearPolicyColumn(kind, slug)) return nuclearPolicyColumnContinuation[language];
  if (isProsecutionReformColumn(kind, slug)) return prosecutionReformColumnContinuation[language];
  if (isConservatism(kind, slug)) return conservatismContinuation[language];
  if (isFarmlandTracker(kind, slug)) return farmlandTrackerContinuation[language];
  if (isFarmlandOwnership(kind, slug)) return farmlandOwnershipContinuation[language];
  if (isDiscourse(kind, slug)) return discourseContinuation[language];
  if (isProgress(kind, slug)) return progressContinuation[language];
  if (isFreedom(kind, slug)) return freedomContinuation[language];
  return getBaseEditorialContinuation(kind, slug, language);
}
