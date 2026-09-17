export type LocalizedText = { ko: string; en: string };

export type TaxPolicy = {
  slug: string;
  importance: number;
  status: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  affected: LocalizedText;
  checkedAt: string;
  deadline: string;
  heroImage: { ko: string; en: string; alt: LocalizedText };
  oneSentence: LocalizedText;
  keyChanges: Array<{ title: LocalizedText; body: LocalizedText }>;
  changeMap: Array<{ title: LocalizedText; items: LocalizedText[] }>;
  officialRationale: LocalizedText;
  risks: LocalizedText[];
  questions: LocalizedText[];
  seedView: LocalizedText;
  timeline: Array<{ date: string; title: LocalizedText }>;
  sources: Array<{ label: LocalizedText; url: string }>;
};

const officialPlan = "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=129005";
const publicLegislation = "https://opinion.lawmaking.go.kr/gcom/ogLmPp";

export const taxPolicies: TaxPolicy[] = [
  {
    slug: "local-housing-welfare-tax",
    importance: 88,
    status: { ko: "입법예고", en: "Public notice" },
    title: { ko: "없어질 세금이 이름을 바꿔 남습니다", en: "A tax due to expire returns under a new name" },
    summary: {
      ko: "2026년 말 종료될 담배분 지방교육세를 지방주거복지세로 바꿔, 연간 약 1조5천억 원의 세수를 계속 유지하는 정책입니다.",
      en: "The government plans to replace an expiring tobacco-linked local education tax with a local housing welfare tax, preserving roughly KRW 1.5 trillion in annual revenue.",
    },
    affected: { ko: "담배 관련 세 부담 · 지방재정 · 공공주택", en: "Tobacco-linked taxation · Local finance · Public housing" },
    checkedAt: "2026-09-17",
    deadline: "2026-09-23",
    heroImage: {
      ko: "images/monitoring/local-housing-welfare-tax-flow-ko.png",
      en: "images/monitoring/local-housing-welfare-tax-flow-en.png",
      alt: { ko: "연 1조5천억 원 규모의 담배분 지방교육세가 지방주거복지세로 전환되는 흐름", en: "Flow showing KRW 1.5 trillion shifting from a tobacco-linked local education tax to a local housing welfare tax" },
    },
    oneSentence: {
      ko: "2026년 말 없어질 예정이던 담배분 지방교육세를 지방주거복지세로 바꿔, 연간 약 1조5천억 원의 세수를 계속 유지하는 정책입니다.",
      en: "A tax scheduled to end in 2026 would be renamed and redirected, keeping about KRW 1.5 trillion in annual revenue in place.",
    },
    keyChanges: [
      {
        title: { ko: "교육재정에서 주거복지로", en: "From education to housing welfare" },
        body: { ko: "담배소비세에 붙는 지방교육세를 종료하고 같은 규모의 지방주거복지세를 만들어 공공주택과 주거복지 사업에 사용합니다.", en: "The tobacco-linked local education tax would end and an equivalent local housing welfare tax would finance public housing and local housing programs." },
      },
      {
        title: { ko: "종료될 부담은 계속 유지", en: "An expiring burden continues" },
        body: { ko: "정부는 현재보다 더 걷지 않는다고 설명하지만, 현행 법률대로라면 2027년부터 종료될 세금이 다른 이름으로 이어집니다.", en: "The government says the current burden will not rise, but the levy would continue under a new name instead of expiring in 2027." },
      },
    ],
    changeMap: [
      {
        title: { ko: "시민의 부담", en: "Citizen burden" },
        items: [
          { ko: "2026년과 비교하면 세액이 늘지는 않습니다.", en: "The amount does not rise relative to 2026." },
          { ko: "그러나 2027년 종료를 기준으로 보면 예정된 부담 감소가 사라집니다.", en: "But compared with the scheduled 2027 expiry, the expected reduction disappears." },
        ],
      },
      {
        title: { ko: "세금의 사용처", en: "Use of revenue" },
        items: [
          { ko: "교육재정에 쓰던 돈을 주거복지 재원으로 돌립니다.", en: "Revenue moves from education finance to housing welfare." },
          { ko: "법률상 담배제조업자와 수입판매업자가 납부합니다.", en: "Manufacturers and import sellers remain the statutory taxpayers." },
        ],
      },
      {
        title: { ko: "정부의 책임", en: "Government responsibility" },
        items: [
          { ko: "지방자치단체별 배분 기준과 사업별 집행 내역이 필요합니다.", en: "Allocation rules and program-level spending must be disclosed." },
          { ko: "새 세금에도 일몰과 재검토 장치가 있는지 확인해야 합니다.", en: "The new tax needs an expiry or formal review mechanism." },
        ],
      },
    ],
    officialRationale: {
      ko: "정부는 지방자치단체가 공공주택 공급과 지역별 주거복지 사업을 안정적으로 추진하려면 별도 재원이 필요하다고 설명합니다. 현재 내는 세금의 총액이 늘어나는 것은 아니므로 새로운 부담은 아니라는 입장입니다.",
      en: "The government says local governments need a stable funding source for public housing and locally tailored housing welfare. It argues that the measure creates no new burden because the amount currently collected would not increase.",
    },
    risks: [
      { ko: "‘추가 부담이 없다’는 설명이 2027년 예정된 일몰을 비교 기준에서 제외합니다.", en: "The 'no additional burden' claim leaves the scheduled 2027 expiry out of the comparison." },
      { ko: "교육에서 주거로 사용처가 바뀌지만 재원 배분 기준은 아직 충분히 보이지 않습니다.", en: "The purpose shifts from education to housing, but allocation rules remain unclear." },
      { ko: "새 세금이 일몰 없이 장기 재원으로 굳어질 수 있습니다.", en: "The replacement tax could become a permanent funding stream without review." },
    ],
    questions: [
      { ko: "담배 관련 세금으로 주거복지를 충당해야 하는 이유는 무엇입니까?", en: "Why should a tobacco-linked tax finance housing welfare?" },
      { ko: "1조5천억 원을 지방자치단체별로 어떤 기준에 따라 나눕니까?", en: "How will the KRW 1.5 trillion be allocated among local governments?" },
      { ko: "지방주거복지세에도 일몰기한과 성과 재검토 절차를 둡니까?", en: "Will the new tax include an expiry date and performance review?" },
    ],
    seedView: {
      ko: "정부가 말하는 ‘추가 부담 없음’은 2026년과 비교할 때의 이야기입니다. 예정대로 세금이 종료되는 2027년과 비교하면 시민이 기대했던 부담 감소는 사라집니다. 주거복지는 필요하지만, 그 필요가 종료될 세금을 다른 이름으로 계속 걷는 일을 자동으로 정당화하지는 않습니다. 왜 이 세금이어야 하는지, 누가 혜택을 받고 어디에 얼마를 쓰며 언제 다시 검토할지 먼저 밝혀야 합니다.",
      en: "The government's 'no additional burden' claim is true only against the 2026 baseline. Against the scheduled 2027 expiry, the expected reduction disappears. Housing welfare matters, but that goal does not automatically justify preserving an expiring tax under a new name. The government should explain why this tax is the right instrument, who benefits, where the money goes, and when the policy will be reviewed.",
    },
    timeline: [
      { date: "2026-08-26", title: { ko: "행정안전부 지방세제 개편안 발표", en: "Interior Ministry announces local tax reform plan" } },
      { date: "2026-08-27", title: { ko: "지방세입 관계법률 개정안 입법예고 시작", en: "Public notice period begins" } },
      { date: "2026-09-17", title: { ko: "씨앗의 소리 확인·분석", en: "Seed Voice verification and analysis" } },
      { date: "2026-09-23", title: { ko: "시민 의견 제출 마감", en: "Deadline for public comments" } },
      { date: "2026-10", title: { ko: "국회 제출 예정", en: "Planned submission to the National Assembly" } },
    ],
    sources: [
      { label: { ko: "행정안전부 2026년 지방세제 개편안", en: "2026 local tax reform plan" }, url: officialPlan },
      { label: { ko: "국민참여입법센터", en: "Public Legislation Portal" }, url: publicLegislation },
    ],
  },
  {
    slug: "social-solidarity-local-tax-exemption",
    importance: 84,
    status: { ko: "입법예고", en: "Public notice" },
    title: { ko: "사회연대경제 조직, 지방세 최대 100% 감면", en: "Up to 100% local tax relief for social-solidarity organizations" },
    summary: { ko: "협동조합과 마을기업 등은 조건에 따라 취득세와 재산세를 전액 감면받을 수 있습니다. 공익 지원과 조세 형평성을 함께 확인해야 합니다.", en: "Cooperatives, village enterprises and similar organizations could receive full acquisition and property tax relief under stacked eligibility conditions." },
    affected: { ko: "협동조합 · 마을기업 · 일반 중소기업", en: "Cooperatives · Village enterprises · Small businesses" },
    checkedAt: "2026-09-17",
    deadline: "2026-09-23",
    heroImage: {
      ko: "images/monitoring/social-solidarity-tax-exemption-ko.png",
      en: "images/monitoring/social-solidarity-tax-exemption-en.png",
      alt: { ko: "사회연대경제 조직 지방세 감면율이 조건에 따라 최대 100%가 되는 구조", en: "Stacked local tax relief for social-solidarity organizations reaching up to 100 percent" },
    },
    oneSentence: { ko: "정부가 지정한 사회연대경제 조직은 여러 감면 조건을 합쳐 취득세와 재산세를 최대 100%까지 감면받을 수 있습니다.", en: "Eligible social-solidarity organizations could stack several benefits and receive up to 100% relief from acquisition and property taxes." },
    keyChanges: [
      { title: { ko: "조건을 더하면 최대 100%", en: "Stacked relief can reach 100%" }, body: { ko: "기본 55%에 설립 초기·낮은 담세력·비수도권 또는 인구감소지역 조건을 각각 더해 최대 전액 감면합니다.", en: "A 55% base relief can be combined with additions for early-stage organizations, low tax capacity, and non-capital or depopulating regions." } },
      { title: { ko: "등록면허세 부담도 완화", en: "Registration tax is also reduced" }, body: { ko: "소규모 협동조합 등은 대도시 자본증자 중과 대상에서 제외되고 최저납부세액도 50% 감면받습니다.", en: "Small cooperatives would avoid the metropolitan surcharge on capital increases and receive a 50% reduction in the minimum tax." } },
    ],
    changeMap: [
      { title: { ko: "시민의 부담", en: "Citizen burden" }, items: [{ ko: "감면된 세수는 다른 납세자나 지방재정이 부담하게 됩니다.", en: "Foregone revenue must be absorbed by other taxpayers or local budgets." }] },
      { title: { ko: "일과 기업의 자유", en: "Work and enterprise" }, items: [{ ko: "같은 시장의 일반 소상공인·중소기업과 세금 조건이 달라집니다.", en: "Ordinary small businesses in the same market face different tax conditions." }] },
      { title: { ko: "정부의 권한", en: "Government power" }, items: [{ ko: "어떤 조직을 지원 대상으로 인정할지 행정의 판단이 중요해집니다.", en: "Administrative decisions determine which organizations qualify." }] },
    ],
    officialRationale: { ko: "정부는 사회연대경제 조직이 설립 초기 자금 부담이 크고 지역사회 공익에 기여하므로 지방세 지원이 필요하다고 설명합니다. 비수도권과 인구감소지역의 조직에는 더 큰 감면을 적용할 계획입니다.", en: "The government argues that early-stage social-solidarity organizations face financial constraints while serving community goals. It proposes larger benefits in non-capital and depopulating regions." },
    risks: [
      { ko: "조직의 법적 명칭만으로 실제 공익성과 성과가 검증되지 않을 수 있습니다.", en: "Legal status may substitute for evidence of actual public benefit." },
      { ko: "같은 사업을 하는 일반 기업과 경쟁 조건이 달라질 수 있습니다.", en: "Businesses offering similar services may compete under unequal tax conditions." },
      { ko: "여러 감면을 합쳐 전액 면제하는 기준이 과도하게 넓어질 수 있습니다.", en: "Stacked benefits could make full exemption too broadly available." },
    ],
    questions: [
      { ko: "지원 대상의 공익성과 성과를 어떤 지표로 검증합니까?", en: "Which indicators will verify public benefit and performance?" },
      { ko: "일반 중소기업과의 조세 형평성을 어떻게 평가했습니까?", en: "How was tax fairness with ordinary small businesses assessed?" },
      { ko: "감면 종료 뒤 자립하지 못한 조직에는 어떤 기준을 적용합니까?", en: "What happens when a recipient remains dependent after relief expires?" },
    ],
    seedView: { ko: "공익을 내세운 조직일수록 지원 근거와 성과를 더 투명하게 공개해야 합니다. 정부가 선택한 조직의 세금을 전액 면제한다면, 같은 시장에서 세금을 내는 시민과 기업이 납득할 수 있는 기준이 먼저 있어야 합니다. 좋은 명칭은 세금 면제의 충분한 근거가 아닙니다.", en: "Organizations claiming a public mission should face stronger transparency, not weaker scrutiny. Full tax relief for state-recognized entities requires standards that ordinary taxpayers and competing businesses can understand. A worthy label is not sufficient evidence for a full exemption." },
    timeline: [
      { date: "2026-08-26", title: { ko: "행정안전부 지방세제 개편안 발표", en: "Local tax reform plan announced" } },
      { date: "2026-08-27", title: { ko: "입법예고 시작", en: "Public notice begins" } },
      { date: "2026-09-17", title: { ko: "씨앗의 소리 확인·분석", en: "Seed Voice verification and analysis" } },
      { date: "2026-09-23", title: { ko: "시민 의견 제출 마감", en: "Public comment deadline" } },
    ],
    sources: [
      { label: { ko: "행정안전부 2026년 지방세제 개편안", en: "2026 local tax reform plan" }, url: officialPlan },
      { label: { ko: "국민참여입법센터", en: "Public Legislation Portal" }, url: publicLegislation },
    ],
  },
  {
    slug: "regional-business-local-tax-relief",
    importance: 78,
    status: { ko: "입법예고", en: "Public notice" },
    title: { ko: "수도권 기업 감면은 줄이고 지방은 늘립니다", en: "Business tax relief shifts away from the capital region" },
    summary: { ko: "벤처기업집적시설과 신기술창업집적지역의 취득세·재산세 감면이 지역별로 달라집니다. 인구감소지역은 확대하고 수도권은 축소합니다.", en: "Acquisition and property tax relief for designated venture and startup facilities would increase in depopulating regions and shrink in the capital area." },
    affected: { ko: "벤처기업 · 창업기업 · 지역 투자", en: "Venture firms · Startups · Regional investment" },
    checkedAt: "2026-09-17",
    deadline: "2026-09-23",
    heroImage: {
      ko: "images/monitoring/regional-business-tax-relief-ko.png",
      en: "images/monitoring/regional-business-tax-relief-en.png",
      alt: { ko: "수도권은 세금 감면이 줄고 인구감소지역은 10~15%포인트 늘어나는 지역 차등 구조", en: "Regional tax relief structure showing reduced capital-area support and 10 to 15 percentage-point additions in depopulating regions" },
    },
    oneSentence: { ko: "특정 벤처·창업 시설의 지방세 감면을 인구감소지역은 확대하고 수도권은 줄여 기업 입지를 세금으로 유도하는 정책입니다.", en: "The policy uses differentiated local tax relief to steer designated venture and startup facilities toward depopulating regions and away from the capital area." },
    keyChanges: [
      { title: { ko: "인구감소지역은 10~15%p 추가", en: "10–15 percentage points more in depopulating regions" }, body: { ko: "인구감소지역의 벤처기업집적시설과 신기술창업집적지역에는 취득세·재산세 감면을 더합니다.", en: "Designated venture and startup facilities in depopulating regions receive additional acquisition and property tax relief." } },
      { title: { ko: "수도권 감면은 축소", en: "Capital-area relief is reduced" }, body: { ko: "비수도권은 현행 수준을 유지하고 수도권의 해당 시설은 감면을 줄이는 3단계 차등 구조를 적용합니다.", en: "The non-capital area keeps current benefits while eligible capital-area facilities receive less under a three-tier system." } },
    ],
    changeMap: [
      { title: { ko: "시민의 선택", en: "Citizen choice" }, items: [{ ko: "지역 일자리 확대 가능성과 세수 감소 부담을 함께 봐야 합니다.", en: "Potential job gains must be weighed against foregone local revenue." }] },
      { title: { ko: "일과 기업의 자유", en: "Work and enterprise" }, items: [{ ko: "입지에 따라 같은 투자에도 다른 세금 조건이 적용됩니다.", en: "The same investment faces different tax conditions depending on location." }] },
      { title: { ko: "정부의 권한", en: "Government power" }, items: [{ ko: "정부가 세제 혜택을 통해 기업의 입지 선택을 유도합니다.", en: "Government uses tax preferences to influence location decisions." }] },
    ],
    officialRationale: { ko: "정부는 인구감소지역과 비수도권에 기업 투자를 유치하고 지역 일자리를 늘리기 위해 지역별 감면 차등이 필요하다고 설명합니다. 수도권 지원을 줄이고 지방 지원을 강화해 균형성장을 유도한다는 구상입니다.", en: "The government says regional differentiation is needed to attract investment and jobs to depopulating and non-capital areas. Its goal is to reinforce balanced growth by shifting support away from the capital region." },
    risks: [
      { ko: "수도권 감면 축소가 지방 이전보다 국내 투자 지연으로 이어질 수 있습니다.", en: "Reduced capital-area relief may delay domestic investment rather than cause relocation." },
      { ko: "세금 혜택만 받고 실질 고용을 만들지 않는 형식적 이전이 생길 수 있습니다.", en: "Firms may relocate on paper without creating substantive local employment." },
      { ko: "감면 효과와 지역별 세수 감소 규모가 충분히 제시되지 않았습니다.", en: "Evidence on effectiveness and foregone local revenue remains limited." },
    ],
    questions: [
      { ko: "수도권 대상 시설의 실제 부담은 얼마나 늘어납니까?", en: "How much will the actual burden rise for eligible capital-area facilities?" },
      { ko: "기존 지역 감면이 투자와 고용을 늘렸다는 근거가 있습니까?", en: "What evidence shows previous regional relief increased investment and jobs?" },
      { ko: "주소만 옮기는 형식적 이전을 어떻게 막습니까?", en: "How will paper relocations be prevented?" },
    ],
    seedView: { ko: "지역을 살리는 가장 좋은 방법은 수도권 기업에 불이익을 주는 것이 아니라 지방에서 사업하기 좋은 조건을 만드는 것입니다. 인력·시장·교통·규제가 그대로인데 세금만 달리하면 기업은 이전보다 투자를 미룰 수 있습니다. 감면 확대의 성과와 수도권 축소의 비용을 함께 공개해야 합니다.", en: "The strongest regional policy is to improve the conditions for doing business outside the capital area, not merely penalize capital-area investment. If labor, markets, transport and regulation remain unchanged, differentiated taxes may delay investment rather than relocate it. Both the gains from expanded relief and the costs of reduced relief should be disclosed." },
    timeline: [
      { date: "2026-08-26", title: { ko: "행정안전부 지방세제 개편안 발표", en: "Local tax reform plan announced" } },
      { date: "2026-08-27", title: { ko: "입법예고 시작", en: "Public notice begins" } },
      { date: "2026-09-17", title: { ko: "씨앗의 소리 확인·분석", en: "Seed Voice verification and analysis" } },
      { date: "2026-09-23", title: { ko: "시민 의견 제출 마감", en: "Public comment deadline" } },
    ],
    sources: [
      { label: { ko: "행정안전부 2026년 지방세제 개편안", en: "2026 local tax reform plan" }, url: officialPlan },
      { label: { ko: "국민참여입법센터", en: "Public Legislation Portal" }, url: publicLegislation },
    ],
  },
];

export const getTaxPolicy = (slug: string) => taxPolicies.find((policy) => policy.slug === slug);
