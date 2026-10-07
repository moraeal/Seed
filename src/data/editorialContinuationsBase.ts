import type { Language } from "../i18n";
import {
  getEditorialContinuation as getLegacyEditorialContinuation,
  hasEditorialContinuation as hasLegacyEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsLegacy";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsLegacy";

const extraContinuations: Record<string, { ko: EditorialContinuation; en: EditorialContinuation }> = {
"column:seoul-social-investment-fund-public-interest-ecosystem-2026": {
  "ko": {
    "href": "/columns/civic-groups-are-not-state-vanguard-2026",
    "title": "시민단체는 정부의 돌격대가 아니다",
    "relationship": "공익의 기준과 시민사회의 자율성",
    "reason": "공익기관이 누구의 이익에 복무해야 하는지, 시민사회의 자율성과 책임을 함께 살펴본 칼럼으로 이어갑니다.",
    "listHref": "/monitoring/public-interest",
    "listLabel": "공익감시 전체 보기"
  },
  "en": {
    "href": "/columns/civic-groups-are-not-state-vanguard-2026",
    "title": "Civic Groups Are Not the Government's Advance Guard",
    "relationship": "PUBLIC INTEREST AND CIVIC AUTONOMY",
    "reason": "Continue with the autonomy and accountability of civic organisations, and whose interests they should serve.",
    "listHref": "/monitoring/public-interest",
    "listLabel": "All Public-interest Watch articles"
  }
},
  "column:film-imagination-history-distortion-ryoma-2026": {
  "ko": {
    "href": "/columns/assassins-film-history-memory-war-2026",
    "title": "탱크데이는 단죄하고, 영화의 음모론은 상상력인가",
    "relationship": "영화와 역사적 기억",
    "reason": "같은 영화 논란에서 출발해, 역사적 상처와 음모론을 평가하는 기준이 일관적인지 이어서 살펴봅니다.",
    "listHref": "/columns",
    "listLabel": "칼럼 전체 보기"
  },
  "en": {
    "href": "/columns/assassins-film-history-memory-war-2026",
    "title": "Tank Day Is Condemned. Are Film Conspiracies Just Imagination?",
    "relationship": "FILM AND HISTORICAL MEMORY",
    "reason": "Continue with the same controversy and the need for consistent standards when judging historical hurt and conspiracy narratives.",
    "listHref": "/columns",
    "listLabel": "All columns"
  }
},
  "briefing:government-policy-funds-risk-and-taxpayer-cost-2026": {
    ko: {
      href: "/briefings/korean-civic-tax-watch-movement-ktr",
      title: "한국형 세금감시 운동을 제안한다",
      relationship: "공공자금과 시민의 감시",
      reason: "정책펀드의 위험 부담을 살펴봤다면, 시민이 예산 지출의 근거와 성과를 어떻게 감시할 수 있는지 이어서 읽습니다.",
      listHref: "/briefings", listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/korean-civic-tax-watch-movement-ktr",
      title: "A Proposal for a Korean Civic Tax Watch Movement",
      relationship: "PUBLIC MONEY AND CIVIC SCRUTINY",
      reason: "Continue with how citizens can scrutinise the justification and outcomes of public spending.",
      listHref: "/briefings", listLabel: "All briefings",
    },
  },

  "column:robak-sejong-taxpayer-rights-2026": {
  "ko": {
    "href": "/briefings/korean-civic-tax-watch-movement-ktr",
    "title": "한국형 세금감시 운동을 제안한다",
    "relationship": "세금과 예산의 시민감시",
    "reason": "과세의 기준과 함께 예산 지출의 책임을 시민이 어떻게 감시할 수 있는지 이어서 살펴봅니다.",
    "listHref": "/columns",
    "listLabel": "칼럼 전체 보기"
  },
  "en": {
    "href": "/briefings/korean-civic-tax-watch-movement-ktr",
    "title": "A Proposal for a Korean Civic Tax Watch Movement",
    "relationship": "CITIZEN SCRUTINY OF TAX AND SPENDING",
    "reason": "Continue with how citizens can scrutinize public spending alongside the rules for taxation.",
    "listHref": "/columns",
    "listLabel": "All columns"
  }
},
  "column:farmland-solar-cartel-professional-farming-2026": {
  "ko": {
    "href": "/briefings/farmland-census-elderly-farmers-retirement",
    "title": "농지를 내놓으라면서, 은퇴할 길은 어디 있나",
    "relationship": "고령 농민의 선택권",
    "reason": "태양광과 전문 영농의 선택을 살펴봤다면, 고령 농민에게 실제로 열려 있는 은퇴 지원과 농지 처분의 출구를 이어서 확인합니다.",
    "listHref": "/columns",
    "listLabel": "칼럼 전체 보기"
  },
  "en": {
    "href": "/briefings/farmland-census-elderly-farmers-retirement",
    "title": "Asked to Give Up Farmland, but Where Is the Route to Retirement?",
    "relationship": "CHOICES FOR AGING FARMERS",
    "reason": "Continue with retirement support and workable options for older owners facing farmland-disposal requirements.",
    "listHref": "/columns",
    "listLabel": "All columns"
  }
},
  "seed-language:corporate-citizenship-company-and-people": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재라는 말이다",
      relationship: "기업시민과 시민의 성장",
      reason: "기업 구성원 개인의 시민적 역량이 어떻게 공공의 실천으로 자라는지 이어서 살펴봅니다.",
      listHref: "/seed-language", listLabel: "시민언어 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "A Citizen Is Not a Given Label but a Growing Being",
      relationship: "CORPORATE CITIZENSHIP AND CIVIC GROWTH",
      reason: "Continue with how employees' individual civic capabilities can grow into public action.",
      listHref: "/seed-language", listLabel: "All civic language entries",
    },
  },
  "column:robak-contract-freedom-third-party-rights-2026": {
  "ko": {
    "href": "/contributors",
    "title": "노박과 씨앗의 필진",
    "relationship": "필자 소개",
    "reason": "건축 민원과 시민의 권리를 설명하는 노박과 씨앗의 소리 필진을 만나보세요.",
    "listHref": "/columns",
    "listLabel": "칼럼 전체 보기"
  },
  "en": {
    "href": "/contributors",
    "title": "Robak and the SEED VOICE contributors",
    "relationship": "ABOUT THE AUTHOR",
    "reason": "Meet Robak, who writes about construction complaints and civic rights, and the other SEED VOICE contributors.",
    "listHref": "/columns",
    "listLabel": "All columns"
  }
},
  "news:business-growth-regulatory-thresholds-2026": {
  "ko": {
    "href": "/columns/factory-investment-staffing-freedom-2026",
    "title": "공장은 기업이 짓는데, 사람을 보낼 때는 허락을 받아야 하나",
    "relationship": "기업의 자유 이어 읽기",
    "reason": "기업이 성장할 때의 제도 부담에 이어 투자 실행과 인력 배치의 자유를 살펴봅니다.",
    "listHref": "/news",
    "listLabel": "오늘의 뉴스 전체 보기"
  },
  "en": {
    "href": "/columns/factory-investment-staffing-freedom-2026",
    "title": "Companies Build Factories—Must They Seek Permission to Staff Them?",
    "relationship": "ENTERPRISE FREEDOM",
    "reason": "Continue from size-related burdens to freedom to execute investment and staffing decisions.",
    "listHref": "/news",
    "listLabel": "All Today’s News"
  }
},
  "column:worker-owned-country-union-subsidies-2026": {
    ko: { href: "/columns/factory-investment-staffing-freedom-2026", title: "공장은 기업이 짓는데, 사람을 보낼 때는 허락을 받아야 하나", relationship: "기업의 자유 이어 읽기", reason: "노동의 경영 참여와 기업의 투자 실행 사이에서 인력 배치의 쟁점을 더 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/columns/factory-investment-staffing-freedom-2026", title: "A Company Can Build a Factory. Must It Seek Permission to Staff It?", relationship: "ENTERPRISE FREEDOM", reason: "Examine the staffing dispute at the point where an investment becomes a working factory.", listHref: "/columns", listLabel: "All columns" },
  },
  "column:civic-groups-audit-lawmakers-evaluation-criteria-2026": {
    ko: { href: "/columns/civic-groups-are-not-state-vanguard-2026", title: "시민단체는 정부의 돌격대가 아니다", relationship: "시민운동의 독립성", reason: "정부를 향한 시민단체의 감시 기준도 함께 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/columns/civic-groups-are-not-state-vanguard-2026", title: "Civic Groups Are Not the Government's Vanguard", relationship: "CIVIC INDEPENDENCE", reason: "Read how a civic group's scrutiny of government can retain its independence.", listHref: "/columns", listLabel: "All columns" },
  },
  "column:dmz-mine-response-accountability-2026": {
    ko: { href: "/monitoring/dmz-mine-blast-2026", title: "DMZ 지뢰폭발, 장병 3명이 다친 9월 21일부터 무엇이 밝혀졌나", relationship: "날짜별 사실 추적", reason: "사고 전 경고부터 현장조사와 북한군 지뢰 판단까지 확인된 사실을 날짜별로 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/monitoring/dmz-mine-blast-2026", title: "Three Soldiers Injured in DMZ Blasts: What Has Emerged Since September 21?", relationship: "FOLLOW THE RECORD", reason: "Review the dated record of earlier warnings, the field inquiry and the military's interim findings.", listHref: "/columns", listLabel: "All columns" },
  },
  "briefing:real-estate-supervisor-bill-2221573-explained": {
    ko: { href: "/columns/seoul-housing-prices-rent-broken-ladder", title: "서울 집값 85주째 상승, 전세에서 내 집으로 가는 길은 좁아졌다", relationship: "주거 문제 이어 읽기", reason: "거래를 조사하는 권한에 이어 집을 구할 기회와 공급 문제를 살펴봅니다.", listHref: "/briefings", listLabel: "브리핑 전체 보기" },
    en: { href: "/columns/seoul-housing-prices-rent-broken-ladder", title: "Seoul Home Prices Keep Rising as the Path from Renting to Ownership Narrows", relationship: "MORE ON HOUSING", reason: "Continue from transaction oversight to access to homes and housing supply.", listHref: "/briefings", listLabel: "All briefings" },
  },
  "briefing:monthly-rent-tax-credit-2026-bills-explained": {
    ko: { href: "/columns/seoul-housing-prices-rent-broken-ladder", title: "서울 집값 85주째 상승, 전세에서 내 집으로 가는 길은 좁아졌다", relationship: "월세 부담 이어 읽기", reason: "세액공제 밖에서 임대료와 주택 공급이 세입자의 선택에 미치는 영향을 살펴봅니다.", listHref: "/briefings", listLabel: "브리핑 전체 보기" },
    en: { href: "/columns/seoul-housing-prices-rent-broken-ladder", title: "Seoul Home Prices Keep Rising as the Path from Renting to Ownership Narrows", relationship: "MORE ON RENTS", reason: "Examine how rent and housing supply shape tenants' options beyond tax relief.", listHref: "/briefings", listLabel: "All briefings" },
  },
  "column:factory-investment-staffing-freedom-2026": {
    ko: { href: "/columns/government-electricity-prepayment-pressure", title: "기업을 정부의 현금인출기로 보지 마라", relationship: "기업의 자유 이어 읽기", reason: "인력 운용의 불확실성에 이어 전력망과 전기료가 기업의 투자 선택에 미치는 압박을 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/columns/government-electricity-prepayment-pressure", title: "Do Not Treat Companies as the Government's Cash Machine", relationship: "ENTERPRISE FREEDOM", reason: "Continue from staffing uncertainty to the pressure that electricity supply and prepayment proposals can place on investment choices.", listHref: "/columns", listLabel: "All columns" },
  },
  "seed-language:fairness-rules-trust": {
    ko: { href: "/news/debt-relief-repaid-borrowers-fairness-2026", title: "빚 갚고 갈아탄 22만 명 앞에서, 이재명 정부는 또 탕감인가", relationship: "공정의 정책 사례", reason: "상환과 대환으로 버틴 사람과 새 채무조정 대상자의 기준을 확인합니다.", listHref: "/seed-language", listLabel: "시민언어 전체 보기" },
    en: { href: "/news/debt-relief-repaid-borrowers-fairness-2026", title: "For 220,000 Who Repaid or Refinanced, Is the Government Offering Yet More Debt Relief?", relationship: "FAIRNESS IN POLICY", reason: "Examine the criteria for borrowers who repaid or refinanced and for those offered new relief.", listHref: "/seed-language", listLabel: "All civic language entries" },
  },
  "news:olympic-park-protest-115-days": {
    ko: {
      href: "/monitoring/olympic-park-election-protest-tracker",
      title: "올공 100일, 투표지는 모자랐고 불신은 남았다",
      relationship: "날짜별 사실 추적",
      reason: "투표용지 부족부터 특검 수사까지 확인된 사실과 남은 의혹을 날짜별로 살펴봅니다.",
      listHref: "/news", listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/monitoring/olympic-park-election-protest-tracker",
      title: "100 Days at Olympic Park: Ballots Ran Short, Distrust Remained",
      relationship: "FOLLOW THE RECORD",
      reason: "Review the dated record of confirmed ballot shortages, the special investigation and unresolved claims.",
      listHref: "/news", listLabel: "All Hot Issues",
    },
  },
  "news:debt-relief-repaid-borrowers-fairness-2026": {
    ko: { href: "/news/national-debt-ratio-gdp-comparison", title: "나랏빚 106조 늘었는데 채무비율은 하락?", relationship: "정부 재정 숫자 읽기", reason: "채무조정의 액면과 실제 비용을 구별했다면, 국가채무 통계의 비교 기준도 함께 살펴봅니다.", listHref: "/news", listLabel: "핫이슈 전체 보기" },
    en: { href: "/news/national-debt-ratio-gdp-comparison", title: "Debt Rises by KRW 106 Trillion—So Why Does the Ratio Fall?", relationship: "READING PUBLIC FINANCE", reason: "After separating the face value and actual cost of debt relief, examine the basis for a government debt-ratio comparison.", listHref: "/news", listLabel: "All Hot Issues" },
  },
  "column:the-day-i-did-not-post-a-photo": {
    ko: { href: "/seed-language/citizen-as-seed", title: "시민은 주어지는 이름이 아니라 자라나는 존재다", relationship: "일상에서 이어 읽기", reason: "일상의 작은 마음과 목소리가 어떻게 시민의 이야기로 자라는지 이어서 읽습니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/seed-language/citizen-as-seed", title: "A Citizen Is Not a Given Label but a Growing Being", relationship: "CONTINUE READING", reason: "Read how small moments and voices in daily life can grow into a civic story.", listHref: "/columns", listLabel: "All columns" },
  },
  "column:participatory-democracy-supreme-court-appointments": {
    ko: { href: "/news/supreme-court-renomination-standoff-2026", title: "손봉기 재제청 공방, 대법원과 청와대는 왜 충돌하나", relationship: "인사 갈등 사실 확인", reason: "제청과 재제청 요청의 날짜별 경과와 양측의 입장을 확인합니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/news/supreme-court-renomination-standoff-2026", title: "Why the Supreme Court and Presidential Office Clashed over Son Bong-gi", relationship: "THE APPOINTMENT DISPUTE", reason: "Review the chronology and the positions of both institutions.", listHref: "/columns", listLabel: "All columns" },
  },
  "column:seoul-housing-prices-rent-broken-ladder": {
    ko: { href: "/columns/real-estate-supervisor-citizens-accounts", title: "집을 사는 시민에게 계좌부터 내놓으라는 법인가", relationship: "부동산 정책 이어 읽기", reason: "집을 구할 기회의 문제에 이어 거래를 조사하는 국가의 권한을 살펴봅니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/columns/real-estate-supervisor-citizens-accounts", title: "Must Homebuyers Open Their Bank Accounts to the State?", relationship: "MORE ON HOUSING POLICY", reason: "Continue from access to homes to the state's powers over property transactions.", listHref: "/columns", listLabel: "All columns" },
  },
  "column:welfare-exit-risk-work-and-fairness": {
    ko: { href: "/columns/family-deduction-work-income-threshold", title: "월 50만 원 일하면 가족이 아니게 되는 세금 기준", relationship: "세금의 경계선", reason: "가족의 소득이 조금 늘었을 때 부양가족 공제는 어떻게 달라지는지 이어서 확인합니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/columns/family-deduction-work-income-threshold", title: "When a Spouse Earns KRW 500,000 a Month, the Tax Code Drops the Family Deduction", relationship: "A TAX THRESHOLD", reason: "Read how modest earnings affect the dependent-family tax deduction.", listHref: "/columns", listLabel: "All columns" },
  },
  "briefing:income-tax-family-deduction-2026-proposals": {
    ko: { href: "/columns/family-deduction-work-income-threshold", title: "월 50만 원 일하면 가족이 아니게 되는 세금 기준", relationship: "씨앗의 소리 논평", reason: "세 가지 공제 기준을 확인했다면, 고정된 기준선이 가족의 일과 세금에 남기는 문제를 이어서 읽습니다.", listHref: "/briefings", listLabel: "브리핑 전체 보기" },
    en: { href: "/columns/family-deduction-work-income-threshold", title: "When a Spouse Earns KRW 500,000 a Month, the Tax Code Drops the Family Deduction", relationship: "SEED VOICE OPINION", reason: "Continue from the three thresholds to what a fixed earnings line means for families and tax policy.", listHref: "/briefings", listLabel: "All briefings" },
  },
  "column:family-deduction-work-income-threshold": {
    ko: { href: "/briefings/income-tax-family-deduction-2026-proposals", title: "배우자 연 800만 원 벌면 가족공제는? 정부안 750만 원, 의원안 900만 원", relationship: "사실과 법안 비교", reason: "논평의 근거가 된 현행법, 정부안, 의원안을 사례와 출처로 다시 확인합니다.", listHref: "/columns", listLabel: "칼럼 전체 보기" },
    en: { href: "/briefings/income-tax-family-deduction-2026-proposals", title: "If Your Spouse Earns KRW 8 Million, Do You Lose the Family Deduction?", relationship: "THE FACTS AND PROPOSALS", reason: "Review current law and both proposals, with an example and sources behind the argument.", listHref: "/columns", listLabel: "All columns" },
  },
  "news:major-crimes-agency-investigator-staffing-2026": {
    ko: {
      href: "/monitoring/prosecution-service-abolition-tracker",
      title: "검찰청 폐지 이후, 수사와 기소는 어떻게 바뀌나",
      relationship: "형사사법 개편 추적",
      reason: "중수청 출범을 앞둔 인력 문제에 이어 사건 인계와 수사·기소 권한의 변화를 날짜별로 확인합니다.",
      listHref: "/news", listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/monitoring/prosecution-service-abolition-tracker",
      title: "How Investigation and Prosecution Are Changing",
      relationship: "CRIMINAL JUSTICE TRACKER",
      reason: "Follow the case transfers and changing responsibilities after the new agency opens.",
      listHref: "/news", listLabel: "All Hot Issues",
    },
  },
  "briefing:inheritance-tax-frozen-allowance-middle-class": {
    ko: {
      href: "/briefings/hospital-inheritance-tax-maternity-care",
      title: "상속세 40억원이 330억원으로—정부는 기업을 계속할 자유까지 거둬도 됩니까",
      relationship: "집 한 채에서 기업 승계로",
      reason: "가족의 주거를 넘어서, 상속세가 병원과 일자리의 계속 운영에 어떤 부담을 주는지 이어서 살펴봅니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/hospital-inheritance-tax-maternity-care",
      title: "From KRW 4 Billion to KRW 33 Billion in Inheritance Tax",
      relationship: "FROM A HOME TO BUSINESS CONTINUITY",
      reason: "Continue from an inherited family home to the potential impact of inheritance tax on a hospital, its staff and its patients.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "briefing:platform-advertising-cost-small-merchants": {
    ko: {
      href: "/columns/corporations-are-citizens-too",
      title: "기업도 시민이다",
      relationship: "기업과 시민의 거래",
      reason: "플랫폼과 가게의 거래조건에서 출발해 기업의 시민적 책임을 본업 안에서 생각합니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/columns/corporations-are-citizens-too",
      title: "Corporations Are Citizens Too",
      relationship: "BUSINESS AND CIVIC RESPONSIBILITY",
      reason: "Continue from platform trading terms to corporate responsibility in a company's everyday business.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "briefing:north-korean-pows-south-korea-zelensky-un": {
    ko: {
      href: "/seed-language/unification-freedom-responsibility",
      title: "통일은 자유와 책임을 함께 묻는 일이다",
      relationship: "북한 주민의 선택과 자유",
      reason: "두 포로의 자유의사를 살펴본 뒤, 통일이라는 말 속에서 북한 주민을 스스로 결정하는 사람으로 대하는 기준을 이어서 읽습니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/seed-language/unification-freedom-responsibility",
      title: "Unification Must Bring Freedom and Responsibility Together",
      relationship: "CHOICE AND FREEDOM FOR NORTH KOREANS",
      reason: "After examining the prisoners' own wishes, consider what it means to treat North Koreans as people with choices in discussions of unification.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "column:real-estate-supervisor-citizens-accounts": {
    ko: {
      href: "/columns/farmland-ownership-without-an-exit",
      title: "소유권은 남았지만 소유할 수 없다",
      relationship: "재산권과 국가의 조사 권한",
      reason: "부동산 거래를 조사하는 국가 권한에 이어, 농지 처분명령과 이행강제금이 시민의 재산권에 남기는 부담을 살펴봅니다.",
      listHref: "/columns",
      listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/farmland-ownership-without-an-exit",
      title: "Ownership on Paper, but No Practical Right to Keep It",
      relationship: "PROPERTY RIGHTS AND STATE POWER",
      reason: "Continue from oversight of property transactions to the burden that farmland disposal orders and recurring penalties can place on citizens' property rights.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "news:supreme-court-renomination-standoff-2026": {
    ko: {
      href: "/columns/control-power-before-ten-percent-penalty-2026",
      title: "10%의 책임을 묻기 전에, 10%의 권력을 통제하라",
      relationship: "권력을 견제하는 법",
      reason: "대법관 인선의 권한 충돌에 이어, 국가가 가진 강한 권력을 누가 어떻게 통제할지 살펴봅니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/columns/control-power-before-ten-percent-penalty-2026",
      title: "Control the Power Before Imposing a 10% Penalty",
      relationship: "CHECKS ON STATE POWER",
      reason: "Continue from the appointment dispute to the broader question of who controls strong state powers and how.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "briefing:seojin-school-neighbors-civic-solidarity": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
      relationship: "시민의 의미",
      reason: "서진학교 이웃의 자발적인 행동에서 출발해, 시민이 자유와 책임을 함께 배우며 자라는 과정을 이어서 생각합니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "Citizenship Is Not a Given Label; It Is Something We Grow Into",
      relationship: "WHAT IT MEANS TO BE A CITIZEN",
      reason: "Continue from Seojin's neighbors to the way citizens grow through freedom, responsibility and action alongside others.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "column:suicide-prevention-mois-local-community": {
    ko: {
      href: "/columns/state-cannot-monopolize-life-2026",
      title: "국가는 생명을 독점할 수 없다",
      relationship: "국가 책임과 시민사회의 역할",
      reason: "행안부와 지방정부의 책임을 살펴봤다면, 자살예방 예산과 정책 결정권이 중앙기관에 집중된 구조를 이어서 확인합니다.",
      listHref: "/columns",
      listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/state-cannot-monopolize-life-2026",
      title: "The State Cannot Monopolize the Work of Saving Lives",
      relationship: "STATE RESPONSIBILITY AND CIVIC ACTION",
      reason: "After examining the Interior Ministry's local responsibilities, continue with how suicide-prevention budgets and policy authority have become concentrated in central institutions.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "news:dmz-security-command-failure": {
    ko: {
      href: "/news/dmz-blast-investigation-timeline-2026",
      title: "사고 엿새 만에 현장조사, 폭발 지점엔 못 갔다",
      relationship: "DMZ 폭발 후속 기사",
      reason: "사고 전 대비태세에 이어 21일부터의 조사 준비와 현장 접근 경과를 확인합니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/news/dmz-blast-investigation-timeline-2026",
      title: "Six Days After the DMZ Blast, Investigators Still Had Not Reached the Site",
      relationship: "DMZ BLAST FOLLOW-UP",
      reason: "After the pre-accident risks, examine the dated response and the incomplete site inquiry.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "news:dmz-blast-investigation-timeline-2026": {
    ko: {
      href: "/news/dmz-security-command-failure",
      title: "장병은 발목을 잃었는데, 국방부는 무엇을 하고 있었나",
      relationship: "사고 전 대비태세",
      reason: "사고 뒤 조사 경과에 앞서 군이 파악했던 위험과 현장 장병에게 제공한 보호조치를 살펴봅니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/news/dmz-security-command-failure",
      title: "A Soldier Lost His Foot. What Was the Defense Ministry Doing?",
      relationship: "READINESS BEFORE THE BLAST",
      reason: "Examine the risks identified before the incident and what protection was provided to personnel.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "column:yeosu-island-expo-procurement-ledger": {
    ko: {
      href: "/monitoring/yeosu-world-island-expo-tracker",
      title: "248억 승인에서 713억 행사까지, 여수섬박람회는 어떻게 커졌나",
      relationship: "예산의 시작부터 운영 결과까지",
      reason: "입찰·계약 구조를 확인했다면, 2018년 구상부터 예산 확대·개막 뒤 운영과 성과가 어떻게 달라졌는지 뉴스트래커에서 이어서 확인합니다.",
      listHref: "/monitoring",
      listLabel: "시민감시 전체 보기",
    },
    en: {
      href: "/monitoring/yeosu-world-island-expo-tracker",
      title: "How Yeosu's Island Fair grew from a KRW 24.8 billion approval to a KRW 71.3 billion event",
      relationship: "FROM THE ORIGINAL BUDGET TO OPERATING RESULTS",
      reason: "After examining the tender and contract structure, follow the fair from its 2018 proposal through budget expansion, opening and operating outcomes in the continuing tracker.",
      listHref: "/monitoring",
      listLabel: "All Civic Watch records",
    },
  },
  "column:inheritance-tax-capital-and-talent-mobility": {
    ko: {
      href: "/columns/government-electricity-prepayment-pressure",
      title: "기업을 정부의 현금인출기로 보지 마라",
      relationship: "기업과 국가의 경계",
      reason: "상속세가 기업의 투자와 소유구조에 미치는 영향을 살펴봤다면, 공기업의 재정 부담을 민간기업의 선납금으로 돌리는 정책이 기업의 자유를 어떻게 흔드는지도 이어서 살펴봅니다.",
      listHref: "/columns",
      listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/government-electricity-prepayment-pressure",
      title: "Stop Treating Companies as the Government's ATM",
      relationship: "BUSINESS AND THE STATE",
      reason: "After examining how inheritance tax affects investment and ownership, continue with how shifting a public utility's financing burden onto private firms can undermine economic freedom.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "briefing:activist-support-political-pressure": {
    ko: {
      href: "/columns/civic-groups-are-not-state-vanguard-2026",
      title: "시민단체는 정부의 돌격대가 아니다",
      relationship: "시민사회와 권력",
      reason: "정치권을 거친 기업 후원 요청의 문제를 살펴봤다면, 시민단체가 국가권력과 가까워질 때 독립성과 시민의 권리가 어떻게 흔들리는지도 이어서 살펴봅니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/columns/civic-groups-are-not-state-vanguard-2026",
      title: "Civic Groups Are Not the Government’s Vanguard",
      relationship: "CIVIL SOCIETY AND POWER",
      reason: "After examining a corporate-funding request routed through political offices, continue with how proximity to state power can compromise civic independence and citizens’ rights.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "briefing:social-solidarity-economy-law-conservative-silence": {
    ko: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "사회연대경제기본법, 청년몰 실패 사례에서 배우자",
      relationship: "실패 사례로 점검하기",
      reason: "정부가 공급자와 공간을 만들어도 시민의 선택과 지속 가능한 시장까지 만들 수는 없다는 점을 청년몰 사례에서 이어서 확인합니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "Korea's Social Economy Act: Lessons from the Youth Mall Failure",
      relationship: "TEST IT AGAINST A FAILURE",
      reason: "Continue with the Youth Mall case, which shows that government can create suppliers and spaces without creating durable citizen demand or a sustainable market.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "column:wealth-crosses-borders-inheritance-tax": {
    ko: {
      href: "/columns/government-electricity-prepayment-pressure",
      title: "기업을 정부의 현금인출기로 보지 마라",
      relationship: "세금과 기업의 자유",
      reason: "상속세가 기업승계와 투자에 미치는 영향을 살펴봤다면, 공기업의 재정 부담을 민간기업의 선납금으로 돌리는 정책이 기업의 자율성을 어떻게 흔드는지도 이어서 살펴봅니다.",
      listHref: "/columns",
      listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/columns/government-electricity-prepayment-pressure",
      title: "Stop Treating Companies as the Government's ATM",
      relationship: "TAX AND ECONOMIC FREEDOM",
      reason: "After examining how inheritance tax affects succession and investment, continue with how shifting a public utility's financing burden onto private companies can undermine enterprise autonomy.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "seed-language:state-citizens-trust": {
    ko: {
      href: "/seed-language/politics-is-a-citizens-tool",
      title: "정치는 권력이 아니라 도구다",
      relationship: "국가에서 정치로",
      reason: "시민이 국가에 권한을 맡기는 이유를 살펴봤다면 그 권한을 운용하는 정치를 어떻게 통제할지 이어서 읽습니다.",
      listHref: "/seed-language",
      listLabel: "시민언어 전체 보기",
    },
    en: {
      href: "/seed-language/politics-is-a-citizens-tool",
      title: "Politics Is a Tool, Not Power for Its Own Sake",
      relationship: "FROM THE STATE TO POLITICS",
      reason: "After examining why citizens entrust power to the state, explore how they can direct and scrutinize the politics that uses it.",
      listHref: "/seed-language",
      listLabel: "All Glossary entries",
    },
  },
  "seed-language:politics-is-a-citizens-tool": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재라는 말이다",
      relationship: "정치에서 시민으로",
      reason: "정치가 시민이 사용하는 도구라면, 그 도구를 맡기고 감시하며 책임지는 시민은 어떻게 성장하는지 이어서 살펴봅니다.",
      listHref: "/seed-language",
      listLabel: "시민언어 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "Citizenship Is Not a Given Label; It Is Something We Grow Into",
      relationship: "FROM POLITICS TO CITIZENSHIP",
      reason: "If politics is a tool citizens use, continue with how citizens grow able to authorize, scrutinize and take responsibility for that tool.",
      listHref: "/seed-language",
      listLabel: "All Glossary entries",
    },
  },
  "briefing:future-response-fund-public-money": {
    ko: {
      href: "/briefings/2027-national-budget-revenue-debt",
      title: "820.9조 원 슈퍼예산, 나라살림은?",
      relationship: "예산 전체 구조 보기",
      reason: "미래대응기금의 사업과 통제를 살펴봤다면, 2027년 예산의 세입 전망·국가채무·104조 원 여유자금 구조를 같은 기준으로 이어서 확인합니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/2027-national-budget-revenue-debt",
      title: "The KRW 820.9 Trillion Budget Test",
      relationship: "SEE THE FULL BUDGET STRUCTURE",
      reason: "Continue from the fund's programs and controls to the 2027 revenue assumptions, national debt and the KRW 104.4 trillion reserve.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "briefing:can-half-the-nation-be-dissolved": {
    ko: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "청문회 80%가 증인 0명—이쯤 가면 막 하자는 겁니까",
      relationship: "김승원 청문회 더 보기",
      reason: "국민의힘 해산 검토 답변이 나온 같은 인사청문회에서, 증인 없는 검증 절차가 시민의 통제권을 어떻게 약화시켰는지도 함께 살펴봅니다.",
      listHref: "/briefings",
      listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "Nearly 80% of Hearings Had Zero Witnesses—Is This How Far We Have Come?",
      relationship: "MORE FROM THE KIM HEARING",
      reason: "Examine how a hearing without witnesses weakened public scrutiny in the same confirmation process where the party-dissolution answer emerged.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "monitoring:prosecution-service-abolition-tracker": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "사건에서 판단으로",
      reason: "검찰청 폐지 뒤 수사·기소 권한이 어디로 이동하는지 확인했다면, 그 변화가 국가의 강제력을 실제로 줄이고 더 엄격히 통제하는 개혁인지 이어서 살펴봅니다.",
      listHref: "/monitoring",
      listLabel: "시민감시 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "FROM RECORD TO JUDGMENT",
      reason: "After tracing where investigative and prosecutorial powers move, examine whether the new system actually reduces state coercion and subjects it to stricter control.",
      listHref: "/monitoring",
      listLabel: "All Civic Watch records",
    },
  },
  "monitoring:yeosu-world-island-expo-tracker": {
    ko: {
      href: "/briefings/yeosu-world-island-expo",
      title: "행사는 외주로 맡겨도 책임까지 외주로 넘길 수는 없습니다",
      relationship: "예산과 책임 깊게 보기",
      reason: "타임라인에서 확인한 사업비 확대와 운영 과정을 바탕으로 계약·사업수익·사후 활용에 남은 책임을 더 자세히 살펴봅니다.",
      listHref: "/monitoring",
      listLabel: "시민감시 전체 보기",
    },
    en: {
      href: "/briefings/yeosu-world-island-expo",
      title: "An Event May Be Outsourced. Responsibility Cannot Be.",
      relationship: "BUDGET AND ACCOUNTABILITY",
      reason: "Use the timeline's record of expansion and operations to examine procurement, operating revenue and post-event responsibilities in greater depth.",
      listHref: "/monitoring",
      listLabel: "All Civic Watch records",
    },
  },
  "monitoring:kim-seung-won-confirmation-hearing": {
    ko: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "청문회 80%가 증인 0명—이쯤 가면 막 하자는 겁니까",
      relationship: "사건의 제도적 배경",
      reason: "김승원 후보자 한 사람의 청문회를 넘어, 증인 없는 청문회가 반복되며 시민의 검증권이 어떻게 약해졌는지 살펴봅니다.",
      listHref: "/monitoring",
      listLabel: "시민감시 전체 보기",
    },
    en: {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      title: "Zero Witnesses in Nearly 80% of Hearings—Has Scrutiny Collapsed?",
      relationship: "THE INSTITUTIONAL CONTEXT",
      reason: "Move beyond one nominee to examine how repeated witness-free hearings weaken citizens' right to scrutinize executive appointments.",
      listHref: "/monitoring",
      listLabel: "All Civic Watch records",
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
  "news:lh-debt-split-power-five-merge": {
    ko: {
      href: "/news/lh-split-public-agency-experiment",
      title: "정부, 17년 만에 LH 분리 추진..개발·자산관리 나눈다",
      relationship: "LH 개편의 출발점",
      reason: "LH 분리의 배경과 부채 배분, 공급 지연 위험을 먼저 살핀 뒤 이번 통합·분할 개편의 기준을 함께 보십시오.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/news/lh-split-public-agency-experiment",
      title: "Government Moves to Split LH into Development and Asset Management",
      relationship: "THE STARTING POINT FOR LH REFORM",
      reason: "First examine the LH split's background, debt allocation and supply-delay risk, then return to the wider standard for judging this merger-and-split reform.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  "briefing:confirmation-hearings-zero-witnesses": {
    ko: {
      href: "/monitoring/kim-seung-won-confirmation-hearing",
      title: "김승원 후보자 청문회, 지금까지 무엇이 달라졌나",
      relationship: "이 사건 계속 보기",
      reason: "9월 15일 청문회 개최와 새롭게 확인된 사실, 후보자의 해명, 경과보고서와 임명 여부를 하나의 타임라인에서 계속 확인합니다.",
      listHref: "/briefings",
    listLabel: "브리핑 전체 보기",
    },
    en: {
      href: "/monitoring/kim-seung-won-confirmation-hearing",
      title: "Kim Seung-won's Hearing: What Has Changed?",
      relationship: "FOLLOW THIS CASE",
      reason: "Follow the September 15 hearing, newly verified facts, the nominee's responses and the pending committee report and appointment decision in one timeline.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
  "column:words-turn-citizens-into-enemies": {
    ko: {
      href: "/seed-language/citizen-as-seed",
      title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
      relationship: "언어와 시민",
      reason: "진영이 붙인 이름에서 벗어난 시민이 어떻게 스스로 묻고 판단하는 공공의 주체로 성장하는지 이어서 살펴봅니다.",
      listHref: "/columns",
    listLabel: "칼럼 전체 보기",
    },
    en: {
      href: "/seed-language/citizen-as-seed",
      title: "Citizenship Is Not a Given Label; It Is Something We Grow Into",
      relationship: "LANGUAGE AND CITIZENSHIP",
      reason: "Continue with how citizens move beyond partisan labels and grow into public agents who question and judge for themselves.",
      listHref: "/columns",
    listLabel: "All columns",
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
