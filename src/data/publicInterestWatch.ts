export type LocalizedText = { ko: string; en: string };

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
  sources: WatchSource[];
};

export const publicInterestWatchCases: PublicInterestWatchCase[] = [
  {
    slug: "beautiful-foundation",
    organization: { ko: "아름다운재단", en: "The Beautiful Foundation" },
    eyebrow: { ko: "민간재단·기부 생태계", en: "Private foundation · Giving ecosystem" },
    title: {
      ko: "투명성 공개를 넘어, 시민이 이해할 수 있는 설명으로",
      en: "Beyond disclosure: transparency citizens can understand",
    },
    summary: {
      ko: "아름다운재단은 재정보고·연차보고서·이사회 회의결과를 공개하고 있습니다. 씨드는 공개의 양을 비판하기보다, 자료가 시민의 질문에 실제로 답하는지 한 단계 더 점검합니다.",
      en: "The Beautiful Foundation publishes financial reports, annual reports and board meeting results. SEED asks whether those disclosures answer citizens' practical questions, rather than criticizing disclosure for its own sake.",
    },
    status: { ko: "공개자료 검토", en: "Reviewing disclosures" },
    updatedAt: "2026-09-01",
    sourceBasis: {
      ko: "과거 작성 문건의 원본은 현재 보관 자료에서 확인되지 않아, 아름다운재단 공식 홈페이지의 투명성 공시와 외부감사보고서를 기준으로 새로 구성했습니다.",
      en: "The earlier internal paper could not be located. This record was therefore rebuilt from the foundation's official transparency disclosures and independent audit reports.",
    },
    confirmedFacts: [
      {
        ko: "재단 홈페이지는 법률 준수, 재정보고, 연차보고서, 이사회 회의결과를 한곳에서 공개하고 있습니다.",
        en: "The foundation provides legal-compliance information, financial reports, annual reports and board meeting results in one transparency section.",
      },
      {
        ko: "공개된 외부감사보고서는 재무제표와 회계정책, 기부금·사업비 관련 주석을 포함해 시민이 원문을 확인할 수 있게 합니다.",
        en: "Published independent audit reports include financial statements, accounting policies and notes on donations and program spending.",
      },
      {
        ko: "재단이 직접 비영리 거버넌스 연구를 축적해 왔다는 점은 공익조직의 책무성 논의를 확장할 기반입니다.",
        en: "Its own body of nonprofit-governance research provides a basis for expanding debate about public-interest accountability.",
      },
    ],
    questions: [
      {
        ko: "최근 5년의 모금·사업비·운영비·이월금 변화를 시민이 비교할 수 있는 표준표와 기계가 읽을 수 있는 데이터로도 제공할 수 있습니까?",
        en: "Can five-year trends in fundraising, program costs, operating costs and carryovers also be published in a standard, machine-readable table?",
      },
      {
        ko: "사업별 지원금 규모뿐 아니라 목표, 선정 기준, 중도 변경, 종료 뒤 성과와 실패까지 연결해 설명할 수 있습니까?",
        en: "Can each program connect grant amounts with goals, selection criteria, mid-course changes and outcomes—including failures?",
      },
      {
        ko: "이사회 구성의 독립성, 임기, 이해충돌 관리와 주요 의사결정의 반대·보류 의견을 시민 눈높이에서 더 구체적으로 공개할 수 있습니까?",
        en: "Can board independence, tenure, conflict management and dissent or deferrals in major decisions be explained more clearly?",
      },
      {
        ko: "지정기부금과 장기 보유 재원의 사용 시점·제약·잔액을 기부자가 쉽게 추적할 수 있습니까?",
        en: "Can donors easily trace the timing, restrictions and remaining balances of restricted and long-held funds?",
      },
    ],
    proposals: [
      {
        ko: "감사보고서 옆에 ‘시민용 한 장 결산’을 함께 공개합니다.",
        en: "Publish a one-page citizen account alongside every audit report.",
      },
      {
        ko: "사업별 투입·선정·과정·성과를 같은 기준으로 연결한 공개 대시보드를 만듭니다.",
        en: "Create a public dashboard linking inputs, selection, process and outcomes for every program.",
      },
      {
        ko: "이해충돌 신고·회피와 이사회 구성 원칙을 별도 규정으로 공개하고 정기 검증합니다.",
        en: "Publish and periodically test clear rules for conflicts, recusals and board composition.",
      },
      {
        ko: "비판과 질의에 대한 접수일·담당부서·답변기한·후속조치를 공개하는 시민응답 규칙을 둡니다.",
        en: "Adopt a public-response protocol showing receipt date, owner, response deadline and follow-up.",
      },
    ],
    sources: [
      {
        label: { ko: "아름다운재단 소개·투명성 공개", en: "Beautiful Foundation: About and transparency" },
        url: "https://beautifulfund.org/aboutus/",
      },
      {
        label: { ko: "2022년 외부감사보고서", en: "2022 independent audit report" },
        url: "https://beautifulfund.org/annualreport2022/download/auditreport.pdf",
      },
      {
        label: { ko: "아름다운재단 기부문화연구소 비영리 거버넌스 연구", en: "Giving Korea research on nonprofit governance" },
        url: "https://research.beautifulfund.org/wp-content/uploads/20180814_062023.pdf",
      },
    ],
  },
  {
    slug: "community-chest-of-korea",
    organization: { ko: "사랑의열매 사회복지공동모금회", en: "Community Chest of Korea" },
    eyebrow: { ko: "법정모금기관·배분 구조", en: "Statutory fundraiser · Allocation system" },
    title: {
      ko: "큰 모금의 힘은 더 큰 설명 책임으로 이어져야 합니다",
      en: "The power of large-scale fundraising requires greater accountability",
    },
    summary: {
      ko: "기존 씨드 문건은 공동모금회의 중앙집중적 구조, 이월자산, 지정기탁 중심 배분과 작은 시민조직의 접근 장벽을 문제로 제기합니다. 과거 비위 사례와 현재 공시자료를 구분해 다시 묻습니다.",
      en: "SEED's earlier paper raises questions about centralization, carried-over assets, restricted allocations and barriers for small civic groups. This record separates historical controversies from current disclosures.",
    },
    status: { ko: "집중 질의", en: "Priority inquiry" },
    updatedAt: "2026-09-01",
    sourceBasis: {
      ko: "씨드가 보관한 「사회복지공동모금회의 구조적 한계와 공익의 시민화」와 결산자료 재구성 메모를 바탕으로 작성했습니다. 원문 속 과거 사건·수치는 현재 사실과 구분해 검증 질문으로 전환했습니다.",
      en: "This record draws on SEED's paper on the Community Chest's structural limits and a working reconstruction of financial disclosures. Historical incidents and figures are separated from current facts and reframed as verification questions.",
    },
    confirmedFacts: [
      {
        ko: "사랑의열매는 사회복지공동모금회법에 따라 설립된 법정 모금·배분기관이며 중앙회와 지역 지회 체계로 운영됩니다.",
        en: "Community Chest of Korea is a statutory fundraising and allocation body operating through a national office and regional branches.",
      },
      {
        ko: "공식 경영공시에서 연도별 감사보고서와 주요 경영자료를 공개하고 있습니다.",
        en: "Its official management-disclosure portal publishes annual audit reports and major management records.",
      },
      {
        ko: "회장 인사말은 2025년 모금 실적을 9,864억 원으로 밝히고 있습니다. 규모가 커진 만큼 배분 과정과 잔액에 대한 설명 책임도 함께 커집니다.",
        en: "The chair's official message reports KRW 986.4 billion raised in 2025. Greater scale brings a corresponding duty to explain allocation and balances.",
      },
    ],
    questions: [
      {
        ko: "기존 결산 재구성에서 2021~2025년 차기이월 순자산이 8,181억 원에서 1조 962억 원으로 늘어난 것으로 나타납니다. 회계연도·지정 여부·대기기간별 원인과 사용계획을 원자료로 확인해 주십시오.",
        en: "SEED's reconstruction indicates that net assets carried forward rose from KRW 818.1 billion to KRW 1.0962 trillion between 2021 and 2025. Please verify the causes and plans by year, restriction status and age.",
      },
      {
        ko: "지정기탁 배분 비중이 약 75%라는 기존 분석이 맞는지, 기부자의 지정과 모금회의 독립적 배분 판단이 각각 어떤 영향을 갖는지 공개할 수 있습니까?",
        en: "Can the Chest verify SEED's estimate that restricted allocations account for roughly 75%, and explain the relative influence of donor designations and independent allocation judgment?",
      },
      {
        ko: "운영비 비율을 총모금액 기준뿐 아니라 용도 제약이 없는 일반모금액 기준으로도 제시할 수 있습니까?",
        en: "Can operating-cost ratios be shown against unrestricted general donations as well as total fundraising?",
      },
      {
        ko: "이사회와 배분위원회에서 시민·현장활동가·소규모 단체가 차지하는 비율, 임기, 이해충돌 회피 내역은 어떠합니까?",
        en: "What are the shares, terms and conflict-recusal records of citizens, frontline activists and small organizations on boards and allocation committees?",
      },
      {
        ko: "법인격과 행정 역량이 작은 모임도 50만~300만 원의 실험비를 신속히 받을 수 있는 별도 통로가 있습니까?",
        en: "Is there a fast route for small or unincorporated groups to access experimental grants of KRW 0.5–3 million?",
      },
    ],
    proposals: [
      {
        ko: "이월금의 발생연도·지정 조건·대기기간·집행계획을 담은 ‘이월자산 시민원장’을 매년 공개합니다.",
        en: "Publish an annual citizen ledger of carryovers by origin year, restriction, age and spending plan.",
      },
      {
        ko: "2~3년 이상 집행되지 않은 재원은 사유를 재심의하고, 가능한 범위에서 시민 실험 시드펀드로 전환합니다.",
        en: "Reassess funds unspent for two to three years and, where lawful, redirect them to a civic seed fund.",
      },
      {
        ko: "50만~300만 원 소액·신속 지원과 과정 중심 평가를 도입해 작은 조직의 진입 장벽을 낮춥니다.",
        en: "Lower entry barriers with fast micro-grants of KRW 0.5–3 million and process-based evaluation.",
      },
      {
        ko: "이사회·배분위원회에 시민과 풀뿌리 활동가 참여 비율 30%를 제도적 목표로 둡니다.",
        en: "Set a 30% institutional target for citizen and grassroots participation on boards and allocation committees.",
      },
    ],
    caution: {
      ko: "위 이월액과 지정기탁 비중은 씨드의 기존 결산자료 재구성 값입니다. 공동모금회의 확인과 산출표 공개 전까지는 확정 사실이 아니라 공개 질의의 근거로 사용합니다.",
      en: "The carryover and restricted-allocation figures above come from SEED's reconstruction. Until the Chest verifies them and the calculation table is published, they remain the basis for questions—not settled findings.",
    },
    sources: [
      {
        label: { ko: "사랑의열매 공식 홈페이지", en: "Community Chest of Korea official website" },
        url: "https://www.chest.or.kr/",
      },
      {
        label: { ko: "사랑의열매 기관 소개·회장 인사말", en: "Organization profile and chair's message" },
        url: "https://chest.or.kr/lf/intrcn/initIntrcn.do?cckIs=B",
      },
      {
        label: { ko: "사랑의열매 경영공시·감사보고서", en: "Management disclosures and audit reports" },
        url: "https://seoul.chest.or.kr/lf/ct/initMngmtpblntf.do",
      },
      {
        label: { ko: "씨드 보관 문건: 사회복지공동모금회 조직 평가 분석", en: "SEED archive: Organizational assessment of Community Chest of Korea" },
        url: "https://docs.google.com/document/d/14EL02yCWdKaQvT8MpDjM-NcUvgfL3LfO9pDWacskEvk/edit?usp=drivesdk",
        note: { ko: "씨드 내부 분석 원문", en: "SEED's original analysis" },
      },
    ],
  },
];

export const getPublicInterestWatchCase = (slug: string) =>
  publicInterestWatchCases.find((item) => item.slug === slug);
