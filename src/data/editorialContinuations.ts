import { procurementTaxWatchNoticeSlug } from "./procurementTaxWatchNotice";
import { taxWatchCaseSlug, civicNoticeSlug } from "./civicHubArticles";
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

const farmlandRetirementContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/monitoring/farmland-census-disposal-orders-tracker",
    title: "농지 27%는 누가 사나",
    relationship: "농지조사 사실과 절차",
    reason: "고령농의 은퇴 통로를 살펴봤다면, 전수조사의 의심 필지와 처분 절차, 정부의 후속 조치를 날짜별 자료로 확인합니다.",
    listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
  },
  en: {
    href: "/monitoring/farmland-census-disposal-orders-tracker",
    title: "Who Will Buy the 27% of Farmland Flagged?",
    relationship: "FARMLAND CENSUS FACTS",
    reason: "After examining retirement options, check the census figures, disposal process and government response in the source-backed tracker.",
    listHref: "/briefings",
    listLabel: "All briefings",
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

const unificationLanguageContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "자유는 방임이 아니라, 스스로 설 수 있는 힘이다",
    relationship: "통일과 자유",
    reason: "통일을 자유의 영토를 넓히는 일로 보았다면, 씨앗이 말하는 자유가 시민을 어떻게 삶의 주체로 세우는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "시민언어 전체 보기",
  },
  en: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "Freedom Is Not Neglect. It Is What Makes Citizens Agents",
    relationship: "UNIFICATION AND FREEDOM",
    reason: "If unification should expand the realm of freedom, continue with how SEED defines the freedom that makes citizens agents in their own lives.",
    listHref: "/seed-language",
    listLabel: "All Glossary articles",
  },
};

const skHynixHackathonContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/briefings/social-economy-fair-competition",
    title: "국가가 키우는 사회적경제, 공정한가",
    relationship: "좋은 취지에서 검증 가능한 성과로",
    reason: "학벌 대신 실력을 보겠다는 채용 실험에 이어, 기업과 조직의 사회적 가치를 이름이나 인증이 아니라 실제 성과와 시민의 선택으로 판단하는 기준을 살펴봅니다.",
    listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
  },
  en: {
    href: "/briefings/social-economy-fair-competition",
    title: "When the State Builds the Social Economy, Is Competition Still Fair?",
    relationship: "FROM GOOD INTENTIONS TO VERIFIABLE RESULTS",
    reason: "After examining a skills-first hiring experiment, continue with how social value should be judged by measurable conduct and public choice rather than labels or certification.",
    listHref: "/briefings",
    listLabel: "All briefings",
  },
};

const hospitalInheritanceTaxContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/public-health-proved-by-function",
    title: "공공의료는 병원 간판으로 증명되지 않는다",
    relationship: "기업을 계속할 자유에서 공공의료로",
    reason: "상속세가 병원의 승계를 가로막는 문제에 이어, 병원의 공공성도 소유 주체가 아니라 실제 기능과 시민이 얻는 결과로 판단해야 한다는 글을 읽습니다.",
    listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
  },
  en: {
    href: "/columns/public-health-proved-by-function",
    title: "Public Healthcare Is Not Proven by the Name on the Hospital",
    relationship: "FROM BUSINESS CONTINUITY TO PUBLIC HEALTH",
    reason: "After examining how inheritance tax can obstruct hospital succession, continue with why a hospital's public character should be judged by what it does for citizens rather than who owns it.",
    listHref: "/briefings",
    listLabel: "All briefings",
  },
};

const isFreedom = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "freedom-as-citizen-agency";
const isProgress = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-progress";
const isConservatism = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-conservatism";
const isDiscourse = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "discourse-many-words-no-direction";
const isFarmlandOwnership = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "farmland-ownership-without-an-exit";
const isFarmlandTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "farmland-census-disposal-orders-tracker";
const isFarmlandRetirement = (kind: EditorialContentKind, slug: string) => kind === "briefing" && slug === "farmland-census-elderly-farmers-retirement";
const isNuclearPolicyColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "democratic-party-nuclear-policy-reversal";
const isNuclearPolicyTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "democratic-party-nuclear-policy-reversal-tracker";
const isProsecutionReformColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && ["prosecution-reform-power-transfer-2026", "who-watches-power-now-2026"].includes(slug);
const isMilitaryAcademyColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "military-academy-integration-rotc-question";
const isMilitaryAcademyTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "military-academy-integration-tracker";
const isFukushimaJourney = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "fukushima-journey-original";
const isKorea97Generation = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "korea-97-generation-political-emotion";
const isPublicHealthFunction = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "public-health-proved-by-function";
const isPublicLanguage = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "public-beyond-state-ownership";
const isUnificationLanguage = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "unification-freedom-responsibility";
const isSkHynixHackathon = (kind: EditorialContentKind, slug: string) => kind === "briefing" && slug === "sk-hynix-ai-hackathon-skills-first-hiring";
const isHospitalInheritanceTax = (kind: EditorialContentKind, slug: string) => kind === "briefing" && slug === "hospital-inheritance-tax-maternity-care";
const isBusinessSuccessionThreshold = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "business-succession-deduction-threshold-2026";

const businessSuccessionContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/inheritance-tax-capital-and-talent-mobility",
    title: "상속세가 자본과 인재의 망명을 자극하는 나라",
    relationship: "관련 칼럼",
    reason: "가업 승계 문제와 함께 상속세가 기업의 투자와 경영 결정에 미치는 영향을 살펴봅니다.",
    listHref: "/columns", listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/columns/inheritance-tax-capital-and-talent-mobility",
    title: "How Inheritance Tax Can Push Capital and Talent Abroad",
    relationship: "RELATED COLUMN",
    reason: "Read more about how inheritance taxation can affect business investment and management decisions.",
    listHref: "/columns", listLabel: "All columns",
  },
};

const isCorporateCitizenColumn = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "corporations-are-citizens-too";

const corporateCitizenContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/briefings/sk-hynix-ai-hackathon-skills-first-hiring",
    title: "SK하이닉스 AI 해커톤, 채용 전에 문제를 풀게 하다",
    relationship: "기업의 기회 만들기",
    reason: "기업이 청년에게 기술을 익히고 도전할 기회를 제공하는 또 다른 방식을 살펴봅니다.",
    listHref: "/columns", listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/briefings/sk-hynix-ai-hackathon-skills-first-hiring",
    title: "SK hynix's AI Hackathon and Skills-First Hiring",
    relationship: "EXPANDING OPPORTUNITY",
    reason: "Explore another way a company can open a path for young people to learn and demonstrate their skills.",
    listHref: "/columns", listLabel: "All columns",
  },
};

const securityPrideContinuation: Record<Language, EditorialContinuation> = {
  "ko": {
    "href": "/columns/dmz-mine-response-accountability-2026",
    "title": "지뢰를 밟고서야 움직인 군, 이게 나라를 지키는 태도인가",
    "relationship": "경계 실패와 결정 기록",
    "reason": "안보 자신감의 문제에 이어, 사고 전 위험 징후와 사고 뒤 조사 일정에 관해 군과 정부가 밝혀야 할 기록을 살펴봅니다.",
    "listHref": "/columns",
    "listLabel": "칼럼 전체 보기"
  },
  "en": {
    "href": "/columns/dmz-mine-response-accountability-2026",
    "title": "Only After Soldiers Stepped on Mines Did the Military Move",
    "relationship": "VIGILANCE AND THE DECISION RECORD",
    "reason": "Continue with the records the military and government must disclose about the risks before the accident and the investigation that followed.",
    "listHref": "/columns",
    "listLabel": "All columns"
  }
};

const realEstateCitizenFreedomContinuation: Record<Language, EditorialContinuation> = {
  "ko": {
    "href": "/briefings/real-estate-supervisor-bill-2221573-explained",
    "title": "부동산감독원법, 집 거래를 누가 어떻게 조사하게 되나",
    "relationship": "법안의 권한과 절차",
    "reason": "생활 사례에서 본 부담을 법안의 조사 착수 경로, 금융정보 요구와 보호장치에 연결해 확인합니다.",
    "listHref": "/briefings",
    "listLabel": "브리핑 전체 보기"
  },
  "en": {
    "href": "/briefings/real-estate-supervisor-bill-2221573-explained",
    "title": "Who Would Investigate a Home Purchase Under the Real Estate Supervisor Bill?",
    "relationship": "POWERS AND PROCEDURES",
    "reason": "Connect the everyday examples to the bill's inquiry thresholds, financial-record requests and safeguards.",
    "listHref": "/briefings",
    "listLabel": "All briefings"
  }
};

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  if (kind === "column" && slug === "taxpayer-movement-03-britain-spending-watch") return true;
  if (kind === "column" && slug === "atr-taxpayer-movement-02-protection-pledge") return true;
  if (kind === "column" && slug === "robak-solar-smart-farming-farmland-2026") return true;
  if (kind === "column" && slug === "citizens-dilemma-02-neighbor-noise") return true;
  if (kind === "column" && slug === "no-more-tax-increases-civic-declaration-2026") return true;
  if (kind === "column" && slug === "citizens-dilemma-01-cafe-customer-choice") return true;
  if (kind === "column" && slug === "pspd-prosecution-reform-state-power-watch-2026") return true;
  if (kind === "seed-language" && slug === "history-facts-memory-civic-judgment") return true;
  if (kind === "briefing" && slug === "korean-civic-tax-watch-movement-ktr") return true;
  if (kind === "briefing" && [taxWatchCaseSlug, civicNoticeSlug, procurementTaxWatchNoticeSlug].includes(slug)) return true;
  if (kind === "briefing" && slug === "foreign-pension-birth-credit-reciprocity-fairness-2026") return true;
  if (kind === "column" && slug === "assassins-film-history-memory-war-2026") return true;
  if (kind === "column" && slug === "presidential-language-civic-language-2026") return true;
  if (kind === "seed-language" && slug === "petition-and-shared-freedom") return true;
  if (kind === "column" && ["citizenization-kimchi-jar-freedom-2026", "mfds-sauce-portioning-autonomy-2026"].includes(slug)) return true;
  if (kind === "briefing" && slug === "real-estate-supervisor-citizen-freedom-property-rights") return true;
  if (kind === "column" && slug === "security-pride-vigilance-armed-forces-day-2026") return true;
  if (isBusinessSuccessionThreshold(kind, slug)) return true;
  if (isCorporateCitizenColumn(kind, slug)) return true;
  if (isUnificationLanguage(kind, slug)) return true;
  if (isSkHynixHackathon(kind, slug)) return true;
  if (isHospitalInheritanceTax(kind, slug)) return true;
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
  if (isFarmlandRetirement(kind, slug)) return true;
  if (isFarmlandOwnership(kind, slug)) return true;
  if (isDiscourse(kind, slug)) return true;
  if (isProgress(kind, slug)) return true;
  if (isFreedom(kind, slug)) return true;
  return hasBaseEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  if (kind === "column" && slug === "taxpayer-movement-03-britain-spending-watch") return language === "ko" ? {"href": "/columns/atr-taxpayer-movement-02-protection-pledge", "title": "‘세금 안 올리겠습니다’ 서약서 한 장이 정치인을 묶었다", "relationship": "세금 내는 시민이 정치를 바꾸다 ②", "reason": "지출 감시와 함께, 세율 인상과 공제 축소를 막는 정치인의 서약을 앞선 편에서 읽습니다.", "listHref": "/tax-watch-movement", "listLabel": "세금감시운동 전체 보기"} : {"href": "/columns/atr-taxpayer-movement-02-protection-pledge", "title": "One Written Promise\u2014\u2018I Will Not Raise Taxes\u2019\u2014Held Politicians to Account", "relationship": "WHEN TAXPAYING CITIZENS CHANGE POLITICS, PART 2", "reason": "Read the preceding article on written promises against higher rates and smaller deductions.", "listHref": "/tax-watch-movement", "listLabel": "All Tax Watch Movement articles"};
  if (kind === "seed-language" && slug === "social-dialogue-understanding-beyond-camps-2026") return language === "ko" ? { href: "/seed-language/citizen-as-seed", title: "시민은 주어지는 이름이 아니라 자라나는 존재라는 말이다", relationship: "대화와 시민", reason: "대화를 설계하는 권력에 이어 시민이 스스로 공적인 주체로 성장하는 과정을 살펴봅니다.", listHref: "/seed-language", listLabel: "시민언어 전체 보기" } : { href: "/seed-language/citizen-as-seed", title: "A Citizen Is a Growing Being", relationship: "DIALOGUE AND CITIZENSHIP", reason: "Continue with citizens’ growth as independent public agents.", listHref: "/seed-language", listLabel: "All Glossary entries" };
  if (kind === "column" && slug === "stop-the-politics-of-dismantling-2026") return language === "ko" ? {"href": "/columns/prosecution-reform-power-transfer-2026", "title": "검찰개혁은 권력을 옮겨 심는 일이 아니다", "relationship": "권한의 이동과 시민 보호", "reason": "수사권 재편이 권력 견제와 시민의 구제 통로에 미치는 영향을 관련 칼럼에서 이어서 살펴봅니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/prosecution-reform-power-transfer-2026", "title": "Prosecution Reform Must Not Simply Transplant Power", "relationship": "POWER TRANSFERS AND CITIZEN PROTECTION", "reason": "Continue with the related column on how investigative restructuring affects checks on power and avenues for redress.", "listHref": "/columns", "listLabel": "All columns"};

  if (kind === "column" && slug === "atr-taxpayer-movement-02-protection-pledge") return language === "ko" ? { href: "/columns/atr-taxpayer-movement-01-california", title: "집값은 올랐는데, 세금 낼 돈은 없었다", relationship: "세금 내는 시민이 정치를 바꾸다 ①", reason: "미국 납세자운동이 생활 속 세금 고지서에서 어떻게 시작됐는지 첫 편을 함께 읽습니다.", listHref: "/tax-watch-movement", listLabel: "세금감시운동 전체 보기" } : { href: "/columns/atr-taxpayer-movement-01-california", title: "The House Was Worth More. There Was No More Money for Taxes", relationship: "WHEN TAXPAYING CITIZENS CHANGE POLITICS, PART 1", reason: "Read how America’s taxpayer movement began with ordinary people’s tax bills.", listHref: "/tax-watch-movement", listLabel: "All Tax Watch Movement articles" };

  if (kind === "column" && slug === "robak-solar-smart-farming-farmland-2026") return language === "ko" ? {"href": "/columns/farmland-solar-cartel-professional-farming-2026", "title": "농지를 태양광 부지로 바꿔 쓰라는 정부", "relationship": "농지와 농업", "reason": "농지 이용의 변화와 농업의 지속 가능성을 다룬 관련 칼럼을 이어서 읽습니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/farmland-solar-cartel-professional-farming-2026", "title": "The Government Wants Farmland Turned into Solar Sites", "relationship": "FARMLAND AND FARMING", "reason": "Continue with the related column on changing farmland uses and the future of agriculture.", "listHref": "/columns", "listLabel": "All columns"};
  if (kind === "column" && slug === "citizens-dilemma-02-neighbor-noise") return language === "ko" ? {"href": "/columns/citizens-dilemma-01-cafe-customer-choice", "title": "내 가게인데, 손님을 골라도 될까?", "relationship": "시민의 딜레마 ①", "reason": "연재 첫 회에서 가게를 지킬 자유와 손님의 이용 기회가 만나는 선택을 읽습니다.", "listHref": "/civic-life", "listLabel": "시민생활 전체 보기"} : {"href": "/columns/citizens-dilemma-01-cafe-customer-choice", "title": "It’s My Café. Can I Choose Who Comes In?", "relationship": "A CITIZEN’S DILEMMA, NO. 1", "reason": "Read the first essay on the choices between protecting a business and giving customers a chance to enter.", "listHref": "/civic-life", "listLabel": "All Civic Life articles"};
  if (kind === "column" && slug === "no-more-tax-increases-civic-declaration-2026") return language === "ko" ? {"href": "/briefings/korean-civic-tax-watch-movement-ktr", "title": "한국형 세금감시 운동을 제안한다", "relationship": "세금감시운동의 실천", "reason": "증세반대 선언에 이어 시민이 예산과 조세를 감시할 구체적인 방법을 읽습니다.", "listHref": "/tax-watch-movement", "listLabel": "세금감시운동 전체 보기"} : {"href": "/briefings/korean-civic-tax-watch-movement-ktr", "title": "A Proposal for a Korean Civic Tax Watch Movement", "relationship": "PUTTING TAX WATCH INTO PRACTICE", "reason": "Continue with practical ways for citizens to scrutinize taxes and public spending.", "listHref": "/tax-watch-movement", "listLabel": "All Tax Watch Movement articles"};
  if (kind === "column" && slug === "atr-taxpayer-movement-01-california") return language === "ko" ? { href: "/columns/atr-taxpayer-movement-02-protection-pledge", title: "‘세금 안 올리겠습니다’ 서약서 한 장이 정치인을 묶었다", relationship: "세금 내는 시민이 정치를 바꾸다 ②", reason: "ATR이 정치인의 약속을 문서로 남기고, 공제 축소까지 감시한 방법을 이어서 읽습니다.", listHref: "/tax-watch-movement", listLabel: "세금감시운동 전체 보기" } : { href: "/columns/atr-taxpayer-movement-02-protection-pledge", title: "One Written Promise—‘I Will Not Raise Taxes’—Held Politicians to Account", relationship: "WHEN TAXPAYING CITIZENS CHANGE POLITICS, PART 2", reason: "Continue with ATR’s written promise and its scrutiny of tax increases through smaller deductions.", listHref: "/tax-watch-movement", listLabel: "All Tax Watch Movement articles" };
  if (kind === "column" && slug === "citizens-dilemma-01-cafe-customer-choice") return language === "ko" ? {"href": "/columns/citizens-dilemma-02-neighbor-noise", "title": "윗집에 항의하면, 나만 까다로운 사람이 될까?", "relationship": "시민의 딜레마 ②", "reason": "이웃을 배려하는 마음과 내 생활을 지킬 권리 사이의 다음 선택을 읽습니다.", "listHref": "/civic-life", "listLabel": "시민생활 전체 보기"} : {"href": "/columns/citizens-dilemma-02-neighbor-noise", "title": "If I Complain About the Upstairs Noise, Will I Be the Difficult Neighbor?", "relationship": "A CITIZEN’S DILEMMA, NO. 2", "reason": "Continue with the choice between consideration for neighbors and protecting your own rest.", "listHref": "/civic-life", "listLabel": "All Civic Life articles"};
  if (kind === "seed-language" && slug === "history-facts-memory-civic-judgment") return language === "ko"
    ? { href: "/columns/film-imagination-history-distortion-ryoma-2026", title: "영화적 상상력은 역사 왜곡의 면죄부인가", relationship: "역사와 영화의 경계", reason: "료마의 신화와 역사물의 각색을 구체적인 사례에서 이어 살펴봅니다.", listHref: "/seed-language", listLabel: "시민언어 전체 보기" }
    : { href: "/columns/film-imagination-history-distortion-ryoma-2026", title: "Is Cinematic Imagination a License to Distort History?", relationship: "HISTORY AND CINEMA", reason: "Continue with the Ryoma myth and dramatization through concrete examples.", listHref: "/seed-language", listLabel: "All Glossary entries" };
  if (kind === "briefing" && slug === "korean-civic-tax-watch-movement-ktr") return language === "ko" ? { href: `/briefings/${taxWatchCaseSlug}`, title: "정권이 바뀌어도 영수증을 묻는다 — 한국납세자연맹", relationship: "세금감시의 실제 방법", reason: "정보공개와 소송의 실제 사례에서 운동의 방법과 한계를 살펴봅니다.", listHref: "/civic-campaign", listLabel: "시민캠페인 전체 보기" } : { href: `/briefings/${taxWatchCaseSlug}`, title: "Ask for Receipts, Whoever Governs: The Korean Taxpayers Association", relationship: "TAX SCRUTINY IN PRACTICE", reason: "Examine disclosure and litigation to understand methods and limits.", listHref: "/civic-campaign", listLabel: "All Civic Campaigns" };
  if (kind === "briefing" && [taxWatchCaseSlug, civicNoticeSlug, procurementTaxWatchNoticeSlug].includes(slug)) return language === "ko" ? { href: "/monitoring/tax", title: "세금감시", relationship: "세금과 시민의 책임", reason: "운동의 방법과 참여 통로를 살펴봤다면, 새 세금정책의 근거와 시민 부담도 함께 확인합니다.", listHref: slug === taxWatchCaseSlug ? "/tax-watch-movement" : "/civic-notices", listLabel: slug === taxWatchCaseSlug ? "세금감시운동 전체 보기" : "시민운동 공지사항 전체 보기" } : { href: "/monitoring/tax", title: "Tax Watch", relationship: "TAXES AND PUBLIC RESPONSIBILITY", reason: "Continue with the evidence for tax policies and their effects on citizens.", listHref: slug === taxWatchCaseSlug ? "/tax-watch-movement" : "/civic-notices", listLabel: slug === taxWatchCaseSlug ? "All Tax Watch Movement Articles" : "All Civic Notices" };

  if (kind === "briefing" && slug === "foreign-pension-birth-credit-reciprocity-fairness-2026") return language === "ko" ? {"href": "/seed-language/fairness-rules-trust", "title": "공정은 같은 결과가 아니라, 노력의 길을 지키는 약속이다", "relationship": "공정의 기준", "reason": "공적 지원과 책임의 기준을 살펴봤다면, 노력과 약속을 지키는 공정의 의미를 이어서 읽습니다.", "listHref": "/briefings", "listLabel": "브리핑 전체 보기"} : {"href": "/seed-language/fairness-rules-trust", "title": "Fairness is not equal outcomes but a promise to keep the path of effort open", "relationship": "STANDARDS OF FAIRNESS", "reason": "Continue with fairness as a commitment to consistent rules and responsibility.", "listHref": "/briefings", "listLabel": "All briefings"};
  if (kind === "column" && slug === "assassins-film-history-memory-war-2026") return language === "ko" ? {"href": "/columns/presidential-language-civic-language-2026", "title": "대통령의 언어, 시민의 언어", "relationship": "표현을 판단하는 기준", "reason": "역사적 표현을 판단하는 기준에 이어, 대통령과 시민의 말에 적용되는 책임을 살펴봅니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/presidential-language-civic-language-2026", "title": "Presidential Language, Civic Language", "relationship": "STANDARDS FOR PUBLIC EXPRESSION", "reason": "Continue with the responsibilities attached to presidential and civic speech.", "listHref": "/columns", "listLabel": "All Columns"};
  if (kind === "column" && slug === "presidential-language-civic-language-2026") return language === "ko" ? { href: "/columns/do-they-represent-korean-civil-society", title: "그들이 대한민국 시민사회를 대표하는가", relationship: "시민사회의 대표성과 참여", reason: "대통령의 말에 이어 시민사회 간담회의 참석 구성과 참여 통로를 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" } : { href: "/columns/do-they-represent-korean-civil-society", title: "Do They Represent Korean Civil Society?", relationship: "REPRESENTATION AND PARTICIPATION", reason: "Continue with the composition of the president’s civil-society meeting and citizens’ access to participation.", listHref: "/columns", listLabel: "All Columns" };
  if (kind === "seed-language" && slug === "petition-and-shared-freedom") return language === "ko" ? { href: "/columns/citizenization-kimchi-jar-freedom-2026", title: "김치항아리 속 젓가락 하나가 모두의 자유를 줄인다", relationship: "시민화와 공동의 자유", reason: "민원의 책임에 이어, 함께 쓰는 식탁에서 자율과 공공성이 만나는 순간을 살펴봅니다.", listHref: "/seed-language", listLabel: "시민언어 전체 보기" } : { href: "/columns/citizenization-kimchi-jar-freedom-2026", title: "One Pair of Chopsticks in a Kimchi Jar Can Shrink Everyone’s Freedom", relationship: "CITIZENIZATION AND SHARED FREEDOM", reason: "Continue with how autonomy and public responsibility meet at a shared restaurant table.", listHref: "/seed-language", listLabel: "All Glossary entries" };
  if (kind === "column" && slug === "citizenization-kimchi-jar-freedom-2026") return language === "ko" ? {"href": "/columns/mfds-sauce-portioning-autonomy-2026", "title": "소스 소분 고시, 위생과 자율을 함께 지킬 수는 없나", "relationship": "관련 논평", "reason": "위생 기준의 적용 범위와 영업자의 부담을 함께 살펴봅니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/mfds-sauce-portioning-autonomy-2026", "title": "Sauce Portioning Rules: Can We Protect Hygiene and Autonomy Together?", "relationship": "RELATED COMMENTARY", "reason": "Examine the scope of the hygiene standard alongside the burden on operators.", "listHref": "/columns", "listLabel": "All Columns"};
  if (kind === "column" && slug === "mfds-sauce-portioning-autonomy-2026") return language === "ko" ? {"href": "/columns/citizenization-kimchi-jar-freedom-2026", "title": "김치항아리 속 젓가락 하나가 모두의 자유를 줄인다", "relationship": "시민화 칼럼", "reason": "식탁에서 시작되는 시민의 책임과 생활의 자유를 이어서 읽습니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/citizenization-kimchi-jar-freedom-2026", "title": "One Pair of Chopsticks in a Kimchi Jar Can Shrink Everyone’s Freedom", "relationship": "CITIZENIZATION COLUMN", "reason": "Continue with civic responsibility and everyday freedom, beginning at the restaurant table.", "listHref": "/columns", "listLabel": "All Columns"};
  if (kind === "briefing" && slug === "real-estate-supervisor-citizen-freedom-property-rights") return realEstateCitizenFreedomContinuation[language];
  if (kind === "column" && slug === "security-pride-vigilance-armed-forces-day-2026") return securityPrideContinuation[language];
  if (isBusinessSuccessionThreshold(kind, slug)) return businessSuccessionContinuation[language];
  if (isCorporateCitizenColumn(kind, slug)) return corporateCitizenContinuation[language];
  if (isUnificationLanguage(kind, slug)) return unificationLanguageContinuation[language];
  if (isSkHynixHackathon(kind, slug)) return skHynixHackathonContinuation[language];
  if (isHospitalInheritanceTax(kind, slug)) return hospitalInheritanceTaxContinuation[language];
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
  if (isFarmlandRetirement(kind, slug)) return farmlandRetirementContinuation[language];
  if (isFarmlandOwnership(kind, slug)) return farmlandOwnershipContinuation[language];
  if (isDiscourse(kind, slug)) return discourseContinuation[language];
  if (isProgress(kind, slug)) return progressContinuation[language];
  if (isFreedom(kind, slug)) return freedomContinuation[language];
  if (kind === "column" && slug === "pspd-prosecution-reform-state-power-watch-2026") return language === "ko" ? {"href": "/columns/prosecution-reform-power-transfer-2026", "title": "검찰개혁은 권력을 옮겨 심는 일이 아니다", "relationship": "권력 이동과 시민의 자유", "reason": "권한의 이동과 권력의 제한을 구분한 씨앗의 앞선 분석을 이어서 읽습니다.", "listHref": "/monitoring/public-interest", "listLabel": "공익감시 전체 보기"} : {"href": "/columns/prosecution-reform-power-transfer-2026", "title": "Prosecution Reform Is Not the Transplanting of Power", "relationship": "POWER TRANSFERS AND CIVIC FREEDOM", "reason": "Continue with SEED\u2019s earlier analysis of authority transfers and effective limits on power.", "listHref": "/monitoring/public-interest", "listLabel": "All Public-Interest Watch articles"};
  if (kind === "column" && slug === "robak-housing-names-hangeul-communication-2026") return language === "ko" ? {"href": "/columns/robak-sejong-taxpayer-rights-2026", "title": "57%가 찬성해도 세종은 세금을 밀어붙이지 않았다", "relationship": "노박의 건설읽기", "reason": "세종의 제도와 오늘의 시민 생활을 연결한 노박의 다른 칼럼을 읽습니다.", "listHref": "/columns", "listLabel": "칼럼 전체 보기"} : {"href": "/columns/robak-sejong-taxpayer-rights-2026", "title": "Even with 57% Support, King Sejong Did Not Rush Through His Tax Reform", "relationship": "ROBAK’S COLUMNS", "reason": "Read another Robak column connecting Sejong’s institutions with civic life today.", "listHref": "/columns", "listLabel": "All columns"};
  return getBaseEditorialContinuation(kind, slug, language);
}
