import type { LocalizedText, PublicInterestWatchCase } from "./publicInterestWatch";

export type ReformLens = "tax" | "tariff" | "housing" | "region-jobs";
export type ReformStage = "announced" | "follow-up" | "legislation" | "implementation" | "verified";

export type ReformMediaArticle = {
  outlet: LocalizedText;
  title: LocalizedText;
  url: string;
  publishedAt: string;
  thumbnailSrc: string;
  thumbnailAlt: LocalizedText;
};

export type PublicInstitutionReformTask = {
  id: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  reformType: LocalizedText;
  stage: ReformStage;
  lenses: ReformLens[];
  institutions: LocalizedText;
  plannedStructure: LocalizedText;
  governmentPromise: LocalizedText;
  confirmed: LocalizedText;
  unresolved: LocalizedText[];
  citizenImpact: LocalizedText;
  lawStatus: LocalizedText;
  costStatus: LocalizedText;
  updatedAt: string;
  media: ReformMediaArticle;
};

export const reformLensLabels: Record<ReformLens | "all", LocalizedText> = {
  all: { ko: "전체", en: "All" },
  tax: { ko: "내 세금", en: "My taxes" },
  tariff: { ko: "내 요금", en: "My bills" },
  housing: { ko: "내 집", en: "My housing" },
  "region-jobs": { ko: "내 지역·일자리", en: "My region & jobs" },
};

export const reformStageLabels: Record<ReformStage, LocalizedText> = {
  announced: { ko: "정부 발표", en: "Government announcement" },
  "follow-up": { ko: "후속안 마련", en: "Follow-up design" },
  legislation: { ko: "입법 절차", en: "Legislative process" },
  implementation: { ko: "시행 준비", en: "Implementation" },
  verified: { ko: "결과 검증", en: "Outcome verification" },
};

export const publicInstitutionReformTasks: PublicInstitutionReformTask[] = [
  {
    id: "power-five",
    title: { ko: "발전공기업 5사를 하나의 ‘한국발전’으로", en: "Merging five power generators into a single Korea Power Generation" },
    shortTitle: { ko: "발전 5사 통합", en: "Five-generator merger" },
    reformType: { ko: "5개 법인 → 1개 법인", en: "Five companies → one" },
    stage: "follow-up",
    lenses: ["tax", "tariff", "region-jobs"],
    institutions: {
      ko: "한국남동발전·한국중부발전·한국서부발전·한국남부발전·한국동서발전",
      en: "Korea South-East, Midland, Western, Southern and East-West Power",
    },
    plannedStructure: { ko: "정부 전액 출자 단일 법인 ‘한국발전’(가칭)", en: "A single, wholly state-owned company tentatively named Korea Power Generation" },
    governmentPromise: {
      ko: "중복 투자를 줄이고 재생에너지 전환과 석탄발전 감축을 일관되게 추진하겠다는 구상입니다.",
      en: "The government says one company would reduce duplicate investment and coordinate the renewable and coal transition.",
    },
    confirmed: {
      ko: "정부가 2026년 9월 3일 통합 방침을 발표했고, 다음 날 기후에너지환경부가 5개사와 후속 간담회를 열었습니다. 법인 통합은 아직 완료되지 않았습니다.",
      en: "The government announced the merger on September 3, 2026, and the climate-energy ministry met the five companies the next day. The legal merger has not been completed.",
    },
    unresolved: [
      { ko: "통합 특별법의 제출·의결 일정", en: "Timing for filing and passing the special merger law" },
      { ko: "본사 위치와 지역별 발전소·인력 배치", en: "Headquarters location and the allocation of plants and staff" },
      { ko: "통합비용과 전기요금·한전 부채에 미칠 실제 효과", en: "Merger costs and the actual effect on tariffs and KEPCO debt" },
    ],
    citizenImpact: {
      ko: "전력 공급의 큰 비중이 한 법인에 모이면 투자 효율을 높일 수도 있지만, 잘못된 투자와 비용을 시민이 비교·검증하기는 더 어려워질 수 있습니다.",
      en: "Consolidation may improve investment coordination, but it can also make it harder for citizens to compare costs and hold one dominant supplier to account.",
    },
    lawStatus: { ko: "특별법 제정 추진 단계", en: "Special legislation is planned" },
    costStatus: { ko: "통합 총비용 미공개", en: "Total merger cost not disclosed" },
    updatedAt: "2026-09-04",
    media: {
      outlet: { ko: "YTN", en: "YTN" },
      title: { ko: "5개 발전사, 25년 만에 하나로…‘발전공기업 통합방안 간담회’", en: "Five generators to reunite after 25 years as ministry opens merger talks" },
      url: "https://www.ytn.co.kr/replay/view.php?idx=21&key=202609041431364041",
      publishedAt: "2026-09-04",
      thumbnailSrc: "images/monitoring/public-institution-reform/power-five-ytn-20260904.jpg",
      thumbnailAlt: { ko: "발전공기업 통합방안 간담회 현장", en: "Meeting on the proposed merger of five power generators" },
    },
  },
  {
    id: "oil-gas",
    title: { ko: "석유공사와 가스공사를 ‘에너지자원공사’로", en: "Combining the oil and gas corporations into an energy-resource company" },
    shortTitle: { ko: "석유·가스공사 통합", en: "Oil-gas corporation merger" },
    reformType: { ko: "2개 공사 → 1개 공사", en: "Two corporations → one" },
    stage: "announced",
    lenses: ["tax", "tariff", "region-jobs"],
    institutions: { ko: "한국석유공사·한국가스공사", en: "Korea National Oil Corporation and Korea Gas Corporation" },
    plannedStructure: { ko: "에너지자원공사(가칭)", en: "A tentative Energy Resources Corporation" },
    governmentPromise: {
      ko: "해외 자원개발과 도입 협상력을 묶어 에너지 안보와 수급 대응력을 높이겠다는 계획입니다.",
      en: "The government says consolidated overseas development and procurement would strengthen energy security and bargaining power.",
    },
    confirmed: {
      ko: "통합 방향과 가칭 기관명은 발표됐지만, 자산·부채 배분과 법률안은 아직 확정된 것으로 확인되지 않았습니다.",
      en: "The merger direction and tentative name have been announced, but the debt-and-asset plan and final legislation have not been confirmed.",
    },
    unresolved: [
      { ko: "두 공사의 부채와 해외 부실자산 승계 방식", en: "How debt and impaired overseas assets will be inherited" },
      { ko: "가스 도입가격과 국내 가스요금에 미칠 영향", en: "Effects on import prices and domestic gas tariffs" },
      { ko: "조달·개발 의사결정의 공개와 외부 통제", en: "Disclosure and external oversight of procurement and development decisions" },
    ],
    citizenImpact: {
      ko: "해외사업 손실과 에너지 조달비용은 결국 공공요금이나 재정 부담으로 돌아올 수 있어 부채·자산 통합 장부가 핵심입니다.",
      en: "Because overseas losses and procurement costs can return through tariffs or public finances, the combined debt-and-asset ledger is the central public test.",
    },
    lawStatus: { ko: "관련 공사법 정비 필요", en: "Governing statutes require revision" },
    costStatus: { ko: "통합비용·절감액 미공개", en: "Merger cost and savings not disclosed" },
    updatedAt: "2026-09-03",
    media: {
      outlet: { ko: "뉴시스", en: "Newsis" },
      title: { ko: "공공기관 109개 줄인다…발전5사·석유-가스공사 통합", en: "Government plans 109-entity reduction, merging power generators and oil-gas corporations" },
      url: "https://www.newsis.com/view/NISX20260903_0003774565",
      publishedAt: "2026-09-03",
      thumbnailSrc: "images/monitoring/public-institution-reform/energy-companies-newsis-20260903.jpg",
      thumbnailAlt: { ko: "한국가스공사 인천 생산기지 전경", en: "Korea Gas Corporation's Incheon production base" },
    },
  },
  {
    id: "lh-split",
    title: { ko: "LH를 개발·건설과 주거복지·자산관리로 분리", en: "Splitting LH between development and housing-welfare functions" },
    shortTitle: { ko: "LH 기능 분리", en: "LH functional split" },
    reformType: { ko: "1개 공사 → 2개 공사 구상", en: "One corporation → proposed two" },
    stage: "follow-up",
    lenses: ["tax", "housing", "region-jobs"],
    institutions: { ko: "한국토지주택공사(LH)", en: "Korea Land and Housing Corporation (LH)" },
    plannedStructure: { ko: "개발·건설 법인과 주거복지·자산관리 법인", en: "A development-construction company and a housing-welfare asset manager" },
    governmentPromise: {
      ko: "개발 실행력과 주거복지 운영을 분리해 주택 공급 속도와 책임성을 높이겠다는 구상입니다.",
      en: "The government says separating development from welfare management will accelerate housing supply and clarify responsibility.",
    },
    confirmed: {
      ko: "분리 원칙은 발표됐지만 두 법인의 정확한 명칭, 자금이전 구조, 부채와 임대주택 자산 배분은 확정되지 않았습니다.",
      en: "The split principle is public, but the final entities, cash-transfer mechanism, debt allocation and rental-housing assets remain unsettled.",
    },
    unresolved: [
      { ko: "약 174조 원으로 거론되는 부채의 귀속 기준", en: "Criteria for allocating debt reported at about KRW 174 trillion" },
      { ko: "개발이익을 주거복지 재원으로 이전하는 방식", en: "How development gains will finance housing welfare" },
      { ko: "분리가 실제 착공·입주 속도를 높이는지", en: "Whether the split actually accelerates construction and occupancy" },
    ],
    citizenImpact: {
      ko: "분할 뒤에도 개발이익과 주거복지 비용은 연결됩니다. 시민에게 중요한 것은 법인 수가 아니라 부채와 공급 지연의 책임이 더 선명해지는가입니다.",
      en: "Development income and welfare costs remain connected after a split. The public test is whether responsibility for debt and delayed supply becomes clearer, not the number of corporate boxes.",
    },
    lawStatus: { ko: "LH법 등 제도 정비 필요", en: "The LH Act and related rules require revision" },
    costStatus: { ko: "분할·전산·자산이전 비용 미공개", en: "Split, systems and asset-transfer costs not disclosed" },
    updatedAt: "2026-09-17",
    media: {
      outlet: { ko: "연합인포맥스", en: "Yonhap Infomax" },
      title: { ko: "LH 노조 ‘174조 부채, 정책성…분리 아닌 재정 지원이 해법’", en: "LH union calls KRW 174 trillion debt policy-driven and opposes split" },
      url: "https://news.einfomax.co.kr/news/articleView.html?idxno=4435437",
      publishedAt: "2026-09-17",
      thumbnailSrc: "images/monitoring/public-institution-reform/lh-split-infomax-20260917.jpg",
      thumbnailAlt: { ko: "LH 분리 방침에 반대하는 공공부문 노동조합 기자회견", en: "Public-sector union press conference opposing the LH split" },
    },
  },
  {
    id: "ports-four",
    title: { ko: "4개 항만공사를 하나의 ‘한국항만공사’로", en: "Merging four port authorities into one Korea Port Authority" },
    shortTitle: { ko: "항만공사 4사 통합", en: "Four-port-authority merger" },
    reformType: { ko: "4개 공사 → 1개 공사·4개 지사", en: "Four authorities → one authority with four branches" },
    stage: "announced",
    lenses: ["tax", "tariff", "region-jobs"],
    institutions: { ko: "부산·인천·울산·여수광양항만공사", en: "Busan, Incheon, Ulsan and Yeosu-Gwangyang port authorities" },
    plannedStructure: { ko: "한국항만공사(가칭)와 4개 지역지사", en: "A tentative Korea Port Authority with four regional branches" },
    governmentPromise: {
      ko: "항만 투자와 해외 경쟁 전략을 한 기관에서 조정해 국제 경쟁력을 높이겠다는 계획입니다.",
      en: "The government says a single authority can coordinate investment and international competition strategy.",
    },
    confirmed: {
      ko: "통합 방침과 지역지사 구상은 발표됐지만 본사 위치, 항만별 예산권과 자산 운용 기준은 아직 확정되지 않았습니다.",
      en: "The merger and branch concept are announced, but headquarters, regional budget authority and asset rules remain unsettled.",
    },
    unresolved: [
      { ko: "수익이 큰 항만의 재원이 다른 지역에 배분되는 기준", en: "Rules for redistributing revenue between ports" },
      { ko: "지역별 투자 우선순위와 지사 권한", en: "Regional investment priorities and branch authority" },
      { ko: "항만 이용료와 물류 서비스에 미칠 효과", en: "Effects on port charges and logistics services" },
    ],
    citizenImpact: {
      ko: "국가 물류전략은 일원화할 수 있지만 지역 항만의 투자 판단이 중앙으로 이동할 수 있습니다. 비용 절감뿐 아니라 지역의 결정권을 함께 봐야 합니다.",
      en: "National logistics planning may become more coherent, but regional investment authority may shift to the center. Local decision rights matter alongside savings.",
    },
    lawStatus: { ko: "항만공사법 개정 필요", en: "The Port Authority Act requires amendment" },
    costStatus: { ko: "통합비용·자산배분안 미공개", en: "Merger cost and asset allocation not disclosed" },
    updatedAt: "2026-09-03",
    media: {
      outlet: { ko: "YTN", en: "YTN" },
      title: { ko: "항만·에너지 공공기관 대대적 통폐합…LH는 ‘개발·주거’ 분리", en: "Government announces major port and energy consolidation alongside LH split" },
      url: "https://www.ytn.co.kr/_cs/_ln_0102_202609032034067810_005.html",
      publishedAt: "2026-09-03",
      thumbnailSrc: "images/monitoring/public-institution-reform/ports-ytn-20260903.jpg",
      thumbnailAlt: { ko: "공공기관 기능개혁 발표를 설명하는 정부 브리핑", en: "Government briefing on public-institution restructuring" },
    },
  },
  {
    id: "second-relocation",
    title: { ko: "2차 공공기관 지방이전, 2027년부터 선도 이전", en: "Second wave of public-institution relocation to begin with pilot moves in 2027" },
    shortTitle: { ko: "2차 공공기관 지방이전", en: "Second relocation wave" },
    reformType: { ko: "수도권 기관 → 지역 이전", en: "Capital-region bodies → regional relocation" },
    stage: "follow-up",
    lenses: ["tax", "region-jobs"],
    institutions: { ko: "이전 대상은 세부계획에서 확정 예정", en: "Institutions will be named in the detailed plan" },
    plannedStructure: { ko: "혁신도시 중심 배치와 2027년 선도 이전 착수", en: "Innovation-city-centered placement with pilot moves beginning in 2027" },
    governmentPromise: {
      ko: "수도권 집중을 완화하고 이전 기관과 지역 산업을 연결해 균형성장을 촉진하겠다는 계획입니다.",
      en: "The government says relocation will ease capital-region concentration and connect institutions to regional industries.",
    },
    confirmed: {
      ko: "정부가 2027년 선도 이전 착수와 수도권 잔류 최소화 원칙을 밝혔지만, 대상기관·지역·총비용은 아직 확정되지 않았습니다.",
      en: "The government has set a 2027 pilot start and a principle of minimizing capital-region retention, but the institutions, destinations and total cost are not final.",
    },
    unresolved: [
      { ko: "이전 대상 선정 기준과 지역별 배치 원칙", en: "Selection criteria and regional allocation rules" },
      { ko: "청사 건립·이전·통근 지원의 총비용", en: "Total cost of offices, moving and commuting support" },
      { ko: "직원 실제 이주율과 지역 일자리·서비스 효과", en: "Actual staff relocation and effects on local jobs and services" },
    ],
    citizenImpact: {
      ko: "기관 주소만 옮기고 직원과 거래·의사결정은 수도권에 남는다면 지역 효과는 제한적입니다. 이전비용과 정착률, 지역조달을 함께 공개해야 합니다.",
      en: "Regional gains will be limited if only addresses move while staff, procurement and decisions remain in the capital. Costs, settlement rates and local procurement should be disclosed together.",
    },
    lawStatus: { ko: "세부 이전계획 수립 단계", en: "Detailed relocation plan under preparation" },
    costStatus: { ko: "대상기관·총사업비 미확정", en: "Institutions and total budget not finalized" },
    updatedAt: "2026-09-08",
    media: {
      outlet: { ko: "YTN", en: "YTN" },
      title: { ko: "정부 ‘공공기관 이전 2027년부터 착수…수도권 잔류 최소화’", en: "Government says public-institution relocation will start in 2027" },
      url: "https://www.ytn.co.kr/_cs/_ln_0101_202609031156161399_005.html",
      publishedAt: "2026-09-03",
      thumbnailSrc: "images/monitoring/public-institution-reform/relocation-ytn-20260903.jpg",
      thumbnailAlt: { ko: "공공기관 지방이전 방향을 발표하는 정부 기자회견", en: "Government press conference announcing the relocation direction" },
    },
  },
];

export const publicInstitutionReformTracker: PublicInterestWatchCase = {
  slug: "public-institution-reform-109",
  organization: { ko: "정부·공공기관", en: "Government and public institutions" },
  eyebrow: { ko: "공공기관 개혁·시민 부담", en: "Public-sector reform · Civic cost" },
  title: { ko: "공공기관 109, 정말 줄어드나", en: "Will Korea's 109-entity public-sector reduction really happen?" },
  summary: {
    ko: "정부는 공공기관 109개 감축을 내걸었습니다. 씨앗은 기관 숫자보다 통합비용과 부채, 전기·가스요금, 주택 공급, 지역의 결정권이 실제로 어떻게 달라지는지 추적합니다.",
    en: "The government has announced a net reduction of 109 public entities. SEED tracks what happens to merger costs, debt, utility bills, housing supply and regional authority—not just the headline count.",
  },
  status: { ko: "정부안 발표·후속안 추적", en: "Plan announced · Follow-up under watch" },
  publishedAt: "2026-09-21",
  updatedAt: "2026-09-21",
  sourceBasis: {
    ko: "2026년 9월 3일 제11차 공공기관운영위원회에서 의결된 정부 합동 기능개혁 방안과 각 부처 후속 발표를 기준으로, 언론 원문에서 시민 생활에 미칠 쟁점을 교차 확인했습니다. 109는 단순 대상기관 수가 아니라 정부가 제시한 순감축 목표입니다.",
    en: "This tracker starts from the government-wide reform plan approved by the 11th Public Institution Management Committee on September 3, 2026, then cross-checks ministry follow-ups and original media reporting. The figure 109 is a net reduction target, not a simple count of affected institutions.",
  },
  heroImage: {
    src: "images/monitoring/public-institution-reform/public-institution-reform-109-hero.webp",
    alt: { ko: "공공기관 명패를 철거하는 동안 뒤편 사무조직은 그대로 업무를 이어가는 모습", en: "Public-institution nameplates being removed while the office organization behind them continues operating" },
    caption: { ko: "기관 명패가 줄어드는 것과 조직의 비용·기능·권한이 실제로 줄어드는 것은 같은 일이 아닙니다.", en: "Removing institutional nameplates is not the same as reducing the underlying costs, functions and authority." },
    credit: { ko: "씨앗의 소리 AI 제작 이미지", en: "AI-generated image by SEED VOICE" },
  },
  confirmedFacts: [
    { ko: "정부가 제시한 감축 목표는 전략적 구조개혁 15개, 유사·중복기능 일원화 11개, 자회사·소규모기관 통합 83개로 합계 109개입니다.", en: "The reduction target consists of 15 entities under strategic restructuring, 11 under overlapping-function consolidation and 83 subsidiaries or small bodies." },
    { ko: "109는 개편 영향을 받는 기관의 단순한 명단 수가 아니라 통합과 청산 뒤 줄이겠다는 순감축 목표입니다.", en: "The 109 figure is a net reduction target after mergers and liquidation, not a simple list of every affected institution." },
    { ko: "핵심 통합·분리 과제의 법률 개정, 자산·부채 승계, 통합비용은 대부분 후속 결정이 필요합니다.", en: "Most major tasks still require legislation and decisions on assets, debt and implementation costs." },
  ],
  questions: [
    { ko: "통합과 분할에 드는 총비용은 얼마이며 정부가 말한 절감액보다 작은가", en: "Will total restructuring cost be lower than the savings claimed by government?" },
    { ko: "전기·가스·철도·항만 요금과 주택 공급이 실제로 개선되는가", en: "Will electricity, gas, rail, port charges and housing supply actually improve?" },
    { ko: "기관이 줄어든 뒤 자회사·기금·민간위탁으로 기능과 인력이 다시 늘어나지 않는가", en: "Will functions and staffing reappear through subsidiaries, funds or outsourcing after the headline reduction?" },
  ],
  proposals: [
    { ko: "기관별 통합비용·절감액·부채·자산 승계를 한 장부로 공개합니다.", en: "Publish merger costs, savings, debt and asset succession in one institution-by-institution ledger." },
    { ko: "발표·입법·시행·결과검증 단계를 분리해 완료되지 않은 개혁을 성과로 계산하지 않습니다.", en: "Separate announcement, legislation, implementation and verification so unfinished plans are not counted as results." },
    { ko: "공공요금·주택 공급·지역 일자리처럼 시민이 체감할 결과를 개편 전후 같은 기준으로 공개합니다.", en: "Report pre- and post-reform outcomes using consistent measures for tariffs, housing and regional jobs." },
  ],
  nextCheck: {
    ko: "정부의 세부 기관 명단, 관련 법률안 제출, 핵심 5개 과제의 통합·분할 비용 공개 여부를 확인합니다.",
    en: "Next checks: the detailed institution list, filing of enabling legislation and disclosure of costs for the five priority reforms.",
  },
  sources: [
    {
      label: { ko: "관계부처합동 — 공공기관 기능개혁 추진방안 정책뉴스 (2026.09.03)", en: "Government-wide public-institution reform policy release (Sep. 3, 2026)" },
      url: "https://www.korea.kr/news/policyNewsView.do?newsId=148971154",
    },
    {
      label: { ko: "재정경제부 — 공공기관 기능개혁 추진방안 보도자료와 첨부문서 (2026.09.03)", en: "Ministry of Economy and Finance press release and attachments (Sep. 3, 2026)" },
      url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156780030",
    },
    {
      label: { ko: "행정안전부 — 행정·공공기관 이전 및 기능개혁 기자회견 (2026.09.04)", en: "Interior ministry briefing on relocation and reform (Sep. 4, 2026)" },
      url: "https://www.mois.go.kr/video/bbs/type019/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000255&nttId=129276&searchCode1=A04",
    },
  ],
  continuationEligible: false,
};
