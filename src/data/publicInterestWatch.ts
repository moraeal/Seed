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
  supportNote?: LocalizedText;
  hideSourceBasis?: boolean;
  sources: WatchSource[];
};

export const publicInterestWatchCases: PublicInterestWatchCase[] = [
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
        en: "Can Beautiful Store explain the rise in long-term borrowing, its repayment plan, and the fundraising, total cost and operational benefits of the Seoul Mesh Center in one table?",
      },
      {
        ko: "개인·공익활동 지원비 39억 원이 누구에게 어떤 기준으로 배분됐고, 종료 뒤 어떤 변화와 실패가 있었는지 수혜자 개인정보를 보호하며 공개할 수 있습니까?",
        en: "Can the KRW 3.9 billion in grants be connected to recipients, criteria, outcomes and failures while protecting personal information?",
      },
      {
        ko: "매장 활동가·자원봉사자·물품기부자·지역주민이 지역 운영과 이사회 의사결정에 어느 정도의 실질적 권한을 갖고 있습니까?",
        en: "How much real decision-making power do store workers, volunteers, goods donors and local residents hold in regional operations and governance?",
      },
    ],
    proposals: [
      {
        ko: "재무제표 옆에 ‘물건 한 점과 1만 원의 흐름’을 보여주는 시민용 결산서를 함께 공개합니다.",
        en: "Publish a citizen account showing the journey of one donated item and each KRW 10,000 alongside the financial statements.",
      },
      {
        ko: "미처분이익잉여금·현금·부동산·차입금의 관계와 3년 사용계획을 담은 ‘시민자산 원장’을 공개합니다.",
        en: "Publish a civic-asset ledger linking retained earnings, cash, property and debt to a three-year use plan.",
      },
      {
        ko: "공익활동 지원사업의 선정표와 성과·중단·실패 사례를 함께 공개하는 결과 대시보드를 만듭니다.",
        en: "Create a grant dashboard that includes selection tables, outcomes, discontinued efforts and failures.",
      },
      {
        ko: "지역 운영자문위원회에 매장 활동가·자원봉사자·기부자·주민의 참여 비율과 제안 처리 결과를 공개합니다.",
        en: "Disclose representation of workers, volunteers, donors and residents on local advisory bodies, along with action on their proposals.",
      },
    ],
    caution: {
      ko: "미처분이익잉여금 364억 7천만 원은 회계상 누적 순자산 개념으로, 전액이 즉시 사용 가능한 현금이라는 뜻은 아닙니다. 따라서 씨드는 이 금액 자체를 문제로 단정하지 않고 현금·부동산·보증금·지정재원의 구성과 사용계획을 공개해 달라고 묻습니다.",
      en: "The KRW 36.47 billion retained-earnings balance is an accumulated accounting measure, not all immediately spendable cash. SEED therefore asks for its composition and use plan rather than treating the balance itself as wrongdoing.",
    },
    sources: [
      {
        label: { ko: "아름다운가게 투명경영·재정보고", en: "Beautiful Store transparency and financial reports" },
        url: "https://www.beautifulstore.org/report-activity",
        note: { ko: "씨드 보관 2025 감사보고서와 동일한 공식 공시 경로", en: "Official disclosure page for the archived 2025 audit report" },
      },
      {
        label: { ko: "2025 참여와 나눔 보고서", en: "2025 Participation and Sharing Report" },
        url: "https://www.beautifulstore.org/archives/publication/2025-%EC%B0%B8%EC%97%AC%EC%99%80-%EB%82%98%EB%88%94-%EB%B3%B4%EA%B3%A0%EC%84%9C",
      },
      {
        label: { ko: "아름다운가게 임원·위원회", en: "Beautiful Store officers and committees" },
        url: "https://www.beautifulstore.org/committee",
      },
      {
        label: { ko: "서울그물코센터 건립 모금캠페인", en: "Seoul Mesh Center construction campaign" },
        url: "https://box.donus.org/box/beautifulstore/seoulcenter",
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
  {
    slug: "korea-football-association",
    organization: { ko: "대한축구협회", en: "Korea Football Association" },
    eyebrow: { ko: "스포츠행정·팬 시민 권리", en: "Sports governance · Fan-citizen rights" },
    title: {
      ko: "국민적 영향력만큼, 선임과 재정의 절차도 투명해야 합니다",
      en: "Selection and finance must match football's public influence",
    },
    summary: {
      ko: "대표팀은 국민적 자산이지만 협회 운영은 팬의 열정만으로 정당화되지 않습니다. 감독 선임, 대규모 시설사업, 지도자 자격과 임원 보수에서 규정이 실제로 작동하는지 묻습니다.",
      en: "The national team is a public asset, but fan passion cannot excuse weak governance. We ask whether rules truly govern coaching appointments, major facilities, licensing and executive compensation.",
    },
    status: { ko: "감사 후속 추적", en: "Tracking audit follow-up" },
    updatedAt: "2026-09-01",
    sourceBasis: {
      ko: "대한축구협회 공개자료와 2024년 문화체육관광부 특정감사 결과, 협회의 공식 반론, 이후 행정소송 경과를 구분해 검토했습니다. 감사 지적은 정부의 공식 판단이며 협회가 다투는 부분은 확정된 사법판단과 분리해 표시합니다.",
      en: "This record separates KFA disclosures, the Ministry of Culture's 2024 special audit, KFA's official reply and later litigation. Audit findings are the government's formal conclusions; disputed points are not presented as final judicial findings.",
    },
    confirmedFacts: [
      {
        ko: "대한축구협회 홈페이지는 정관과 각종 규정, 이사회·총회 회의록, 사업계획, 예산집행 내역, 외부평가·감사결과를 공개하는 자료실을 운영합니다.",
        en: "KFA maintains a public archive for statutes, regulations, board and assembly minutes, plans, budget execution and external audits.",
      },
      {
        ko: "협회가 확정한 2026년 예산은 1,387억 원이며, 일반예산 1,048억 원과 코리아풋볼파크 관련 예산 339억 원으로 구성됩니다. 일반예산 중 각급 대표팀에는 320억 원이 편성됐습니다.",
        en: "KFA's approved 2026 budget is KRW 138.7 billion: KRW 104.8 billion in general spending and KRW 33.9 billion for Korea Football Park. National teams account for KRW 32 billion of the general budget.",
      },
      {
        ko: "문화체육관광부는 2024년 특정감사에서 27건의 위법·부당 업무처리를 확인했다고 발표하고 19명에 대한 문책·주의와 제도개선을 요구했습니다.",
        en: "In its 2024 special audit, the Ministry of Culture reported 27 unlawful or improper practices and sought discipline or warnings for 19 people plus institutional reforms.",
      },
      {
        ko: "감사 지적은 국가대표 감독·지도자 선임 절차, 코리아풋볼파크 차입·보조금 집행, 축구인 사면, 비상근 임원 자문료, 지도자 강습회 운영 등을 포함합니다.",
        en: "The audit covered national-team appointments, Football Park borrowing and subsidies, pardons, advisory fees for non-executive officers and coach-licensing courses.",
      },
      {
        ko: "협회는 감독 선임과 사면 등 일부 지적에 대해 규정 해석과 사실관계가 다르다고 공식 반박했으며, 징계 요구를 둘러싼 행정소송도 이어지고 있습니다.",
        en: "KFA formally disputed parts of the audit, including interpretations of appointment and pardon rules, and litigation over the disciplinary demand has continued.",
      },
    ],
    questions: [
      {
        ko: "감사 27건 각각에 대해 조치 완료·진행·불수용 여부, 책임자, 완료기한과 증빙문서를 한 장의 공개표로 제시할 수 있습니까?",
        en: "Can KFA publish one table for all 27 findings showing completion, progress or rejection, accountable officials, deadlines and evidence?",
      },
      {
        ko: "국가대표 감독 후보의 평가항목·배점·면접 주체·이해충돌 회피·회의록을 어느 단계까지 사전에 정하고 사후 공개합니까?",
        en: "Which criteria, scores, interview roles, conflict recusals and minutes for national-team appointments are fixed in advance and disclosed afterward?",
      },
      {
        ko: "1,387억 원 예산을 사업별 목표와 실제 성과까지 연결하고, 국고·체육기금·등록비·후원금의 사용처를 서로 구분해 공개할 수 있습니까?",
        en: "Can the KRW 138.7 billion budget be linked to program outcomes, with public funds, registration fees and sponsorship clearly separated?",
      },
      {
        ko: "코리아풋볼파크의 총사업비·차입금·보조금·공정률·설계변경·유지관리비를 시민이 계속 추적할 수 있는 원장을 공개할 수 있습니까?",
        en: "Can KFA publish a continuing public ledger for Football Park costs, loans, subsidies, progress, design changes and maintenance?",
      },
      {
        ko: "대의원과 이사 구성에서 선수·지도자·여자축구·생활축구·팬을 대표하는 목소리가 실제 의결권을 갖고 있습니까?",
        en: "Do players, coaches, women's football, grassroots football and fans hold meaningful voting power among delegates and directors?",
      },
    ],
    proposals: [
      {
        ko: "감사결과별 이행 현황과 협회 반론, 외부 검증 결과를 나란히 보여주는 상시 공개 대시보드를 만듭니다.",
        en: "Create a permanent dashboard placing audit follow-up, KFA replies and independent verification side by side.",
      },
      {
        ko: "국가대표 감독 선임에 독립적 절차감독관을 두고 평가기준·이해충돌·최종 추천 근거를 공개합니다.",
        en: "Use an independent process monitor for national-team appointments and disclose criteria, conflicts and the basis for the final recommendation.",
      },
      {
        ko: "예산과 결산을 기계가 읽을 수 있는 데이터로 공개하고, 사업별 예산·계약·성과를 연결합니다.",
        en: "Publish machine-readable budgets and accounts linking spending, contracts and program outcomes.",
      },
      {
        ko: "선수·지도자·생활축구·여자축구·팬 시민이 참여하는 독립적인 ‘축구 시민감시위원회’를 설치합니다.",
        en: "Establish an independent football civic-watch panel representing players, coaches, grassroots and women's football, and fans.",
      },
    ],
    caution: {
      ko: "문체부 감사결과는 공식 행정 판단이지만 일부 쟁점은 협회가 소송으로 다투고 있습니다. 이 페이지는 감사 지적, 협회의 반론, 법원의 확정 판단을 같은 것으로 취급하지 않습니다.",
      en: "The ministry audit is an official administrative finding, but KFA contests some issues in court. This page does not treat audit findings, KFA replies and final court judgments as the same thing.",
    },
    sources: [
      {
        label: { ko: "대한축구협회 자료실·규정", en: "KFA archive and regulations" },
        url: "https://www.kfa.or.kr/kfa/data_room.php?act=rule",
      },
      {
        label: { ko: "대한축구협회 2026년도 예산안 공식 발표", en: "KFA official 2026 budget announcement" },
        url: "https://media.kfa.or.kr/bbs/bbs.php?act=bbs_view&con=a1ba24b96e5cc29c0a6893a1bd375ad0&idx=5018",
      },
      {
        label: { ko: "문체부 대한축구협회 특정감사 최종 결과", en: "Ministry special-audit final report" },
        url: "https://www.korea.kr/news/policyNewsView.do?newsId=148935884",
      },
      {
        label: { ko: "문체부 감사 중간발표에 대한 대한축구협회 입장", en: "KFA reply to the ministry's interim audit" },
        url: "https://media.kfa.or.kr/bbs/bbs.php?act=bbs_view&con=970aa7d07fb5f6314bb18962594dc90b&idx=4792",
      },
      {
        label: { ko: "정몽규 회장 징계요구 취소소송 항소 관련 보도", en: "Report on appeal over disciplinary demand" },
        url: "https://www.yna.co.kr/view/AKR20260506120000007",
        note: { ko: "2026년 5월 기준 소송 경과", en: "Litigation status as of May 2026" },
      },
    ],
  },
  {
    slug: "korea-foundation-for-suicide-prevention",
    organization: { ko: "한국생명존중희망재단", en: "Korea Foundation for Suicide Prevention" },
    eyebrow: { ko: "공공기관·자살예방 예산", en: "Public institution · Suicide-prevention budget" },
    title: {
      ko: "708억 원의 자살예방 예산, 시민사회와 삶의 조건에는 얼마나 닿는가",
      en: "How much of Korea's KRW 70.8 billion prevention budget reaches civil society and the conditions of life?",
    },
    summary: {
      ko: "2026년 정부의 자살예방 분야 전체 예산은 708억 원이고, 한국생명존중희망재단 자체 예산은 370억 4,200만 원입니다. 씨드는 두 예산을 구분하면서 운영비, 관료 출신 수뇌부, 보건의료 중심 전달체계, 시민사회 협력의 작은 몫과 자살사망 추이를 함께 묻습니다.",
      en: "The government's 2026 suicide-prevention budget is KRW 70.8 billion; the foundation's own budget is KRW 37.042 billion. SEED separates the two while examining operating costs, bureaucratic leadership, the health-sector delivery model, limited civic partnership and suicide trends.",
    },
    status: { ko: "예산·거버넌스 집중점검", en: "Budget and governance review" },
    updatedAt: "2026-09-01",
    sourceBasis: {
      ko: "알리오의 2026년 수입·지출, 주요사업, 최신 임원 공시와 보건복지부·국가데이터처 자료를 교차 검토했습니다.",
      en: "This record cross-checks ALIO's 2026 income, expenditure, major-program and executive disclosures with ministry and national statistics.",
    },
    confirmedFacts: [
      {
        ko: "재단은 2021년 중앙자살예방센터와 중앙심리부검센터를 통합해 출범했고, 2022년 자살예방법에 설립·운영 근거가 마련된 보건복지부 산하 기타공공기관입니다.",
        en: "The foundation launched in 2021 by integrating two national centers; a 2022 legal amendment established its statutory basis as a public institution under the Ministry of Health and Welfare.",
      },
      {
        ko: "‘약 700억 원’은 재단 단독예산이 아닙니다. 보건복지부가 밝힌 2026년 자살예방 사업 분야 전체 예산은 708억 원으로, 2025년 본예산 562억 원보다 146억 원 늘었습니다.",
        en: "The roughly KRW 70 billion figure is not the foundation's budget alone. The ministry's total 2026 suicide-prevention budget is KRW 70.8 billion, up KRW 14.6 billion from KRW 56.2 billion in 2025.",
      },
      {
        ko: "알리오 기준 재단의 2026년 자체 수입·지출 예산은 370억 4,200만 원입니다. 정부보조금 357억 4,200만 원과 기타사업수입 13억 원으로 구성됩니다.",
        en: "ALIO reports the foundation's own 2026 income and expenditure budget at KRW 37.042 billion: KRW 35.742 billion in government subsidies and KRW 1.3 billion in other program income.",
      },
      {
        ko: "지출 분류상 인건비는 109억 3,000만 원, 경상운영비는 19억 4,400만 원, 사업비는 241억 6,800만 원입니다. 인건비와 경상운영비를 합치면 128억 7,400만 원으로 전체의 34.8%입니다. 별도의 주요사업표에서 ‘재단 운영’은 77억 2,200만 원(20.8%)으로 공시돼 있어 두 운영비 개념은 구분해야 합니다.",
        en: "Expenditure is classified as KRW 10.93 billion in personnel, KRW 1.944 billion in current operations and KRW 24.168 billion in programs. Personnel plus current operations equal 34.8% of the total. A separate major-program table lists 'foundation operations' at KRW 7.722 billion, or 20.8%, so the two definitions must not be conflated.",
      },
      {
        ko: "2026년 주요사업 예산은 고위험군 발굴지원 178억 5,400만 원, 재단 운영 77억 2,200만 원, 교육·홍보 44억 5,600만 원, 109 상담전화 운영지원 40억 3,600만 원, 온라인 돌봄 9억 7,100만 원, 민관협력 7억 300만 원 순입니다.",
        en: "Major 2026 allocations are KRW 17.854 billion for high-risk identification, KRW 7.722 billion for foundation operations, KRW 4.456 billion for education and promotion, KRW 4.036 billion for the 109 hotline, KRW 971 million for online care and KRW 703 million for public-private partnership.",
      },
      {
        ko: "민관협력 자살예방사업 7억 300만 원은 재단 자체 예산의 1.9%, 정부 전체 자살예방 예산 708억 원의 약 1.0%입니다. 다만 이 사업비 전액이 시민단체에 직접 지급되는 보조금은 아닙니다. 보건복지부는 2025년 종교계·시민단체 등에 직접 지원해 온 규모를 연간 약 5억 원이라고 밝혔습니다.",
        en: "The KRW 703 million partnership line is 1.9% of the foundation budget and about 1.0% of the government's KRW 70.8 billion total. It is not all direct grants; the ministry said direct annual support to religious and civic groups had been around KRW 500 million in 2025.",
      },
      {
        ko: "2026년 7월 기준 이사장 정윤순은 전 보건복지부 보건의료정책실장·사회복지정책실장이고, 상임이사 홍찬자는 전 복지부 사무관·서기관이자 국립정신건강센터 기획조정과장입니다. 당연직 비상임이사도 현 복지부 정신건강정책관입니다. 그러나 나머지 비상임이사들은 사회복지·경영·심리·간호·정신건강·시민단체 등 여러 배경이어서 ‘임원 전원이 복지부 관료 출신’인 것은 아닙니다.",
        en: "As of July 2026, chair Jeong Yun-sun is a former senior ministry official and executive director Hong Chan-ja also served in the ministry and National Center for Mental Health. An ex officio director is the current ministry mental-health director-general. Other non-executive directors come from social work, management, psychology, nursing, mental health and civic organizations, so the whole board is not composed of former officials.",
      },
      {
        ko: "사업 전달체계는 정신건강복지센터, 자살예방센터, 응급실 기반 생명사랑위기대응센터와 전문서비스 연계를 큰 축으로 삼고 의사·간호사 등 보건의료인력 교육도 운영합니다. 동시에 일반시민 생명지킴이 교육, 미디어 대응, 민관협력 사업도 있어 ‘오직 의료적 접근만 한다’고 단정할 수는 없습니다. 다만 예산과 전달체계의 무게가 치료·상담·고위험군 관리에 얼마나 쏠려 있는지는 공개 평가가 필요합니다.",
        en: "The delivery model relies heavily on mental-health and suicide-prevention centers, emergency-department follow-up and referral to professional services, including training for doctors and nurses. It also includes public gatekeeper education, media work and civic partnership, so it is not exclusively medical. The relative weight given to treatment, counseling and high-risk management still merits public evaluation.",
      },
      {
        ko: "출범 이후 자살률이 해마다 계속 오른 것은 아닙니다. 인구 10만 명당 자살률은 2021년 26.0명에서 2022년 25.2명으로 낮아졌다가 2023년 27.3명, 2024년 29.1명으로 2년 연속 상승했습니다. 2024년 자살사망자는 1만 4,872명입니다.",
        en: "The suicide rate did not rise every year after launch. It fell from 26.0 per 100,000 in 2021 to 25.2 in 2022, then rose to 27.3 in 2023 and 29.1 in 2024. There were 14,872 suicide deaths in 2024.",
      },
      {
        ko: "2026년 9월 1일 정부 발표에 따르면 2026년 1~6월 자살사망 잠정치는 6,339명으로 전년 같은 기간 7,188명보다 849명(11.8%) 감소했습니다. 반가운 변화이지만 잠정 사망자 수이며, 2026년 연간 자살률 확정치가 아닙니다.",
        en: "A government release on September 1, 2026 reported a provisional 6,339 suicide deaths from January through June, 849 or 11.8% fewer than 7,188 a year earlier. This is encouraging but provisional and is not the final 2026 annual suicide rate.",
      },
    ],
    questions: [
      {
        ko: "정부 전체 708억 원과 재단 예산 370억 4,200만 원이 부처·지자체·재단·의료기관·민간단체 사이에서 어떻게 흐르는지 중복 없이 연결한 ‘한 장 예산지도’를 공개할 수 있습니까?",
        en: "Can the government publish a one-page map connecting the KRW 70.8 billion total and the foundation's KRW 37.042 billion across ministries, local governments, the foundation, medical providers and civic groups without double counting?",
      },
      {
        ko: "‘재단 운영’ 77억 2,200만 원과 인건비·경상운영비 합계 128억 7,400만 원의 차이는 무엇입니까? 본부관리, 상담전화, 연구, 현장지원 인력을 기능별로 나눈 운영비와 인원표를 공개할 수 있습니까?",
        en: "What explains the difference between the KRW 7.722 billion 'foundation operations' line and KRW 12.874 billion in personnel plus current operations? Can costs and headcount be disclosed by headquarters, hotline, research and field support?",
      },
      {
        ko: "이사장과 상임이사가 모두 복지부 관료 경력을 가진 구조에서 주무부처 정책을 독립적으로 평가하고 이견을 낼 장치는 무엇입니까? 당사자·유족·풀뿌리 시민단체가 의결권을 갖는 자리는 몇 석입니까?",
        en: "With both top executives coming from the ministry, what safeguards allow independent evaluation and dissent? How many voting seats are held by people with lived experience, bereaved families and grassroots civic groups?",
      },
      {
        ko: "치료·상담·고위험군 관리뿐 아니라 실업, 부채, 주거불안, 고립, 노동환경, 차별 같은 사회경제적 원인에 직접 투입되는 예산은 각각 얼마입니까? 보건의료 사업과 사회구조 예방사업의 비중을 구분해 공개할 수 있습니까?",
        en: "Beyond treatment, counseling and high-risk management, how much directly addresses unemployment, debt, housing insecurity, isolation, working conditions and discrimination? Can medical and social-structural prevention spending be separated?",
      },
      {
        ko: "민관협력 사업이 정부 전체 예산의 약 1%에 머무르는 근거는 무엇입니까? 공모 밖에서 활동하는 작은 모임, 당사자·유족 모임, 노동·주거·청년 단체가 지속적으로 참여할 별도 재원은 있습니까?",
        en: "Why does the partnership line remain near 1% of the government-wide budget? Is there sustained funding for small groups, lived-experience and bereaved groups, and labor, housing or youth organizations outside the annual competition?",
      },
      {
        ko: "2022년의 감소 뒤 2023·2024년 자살률이 다시 오른 원인을 재단은 어떻게 분석했고, 그 분석이 다음 연도 예산과 사업 폐지·확대에 어떻게 반영됐습니까?",
        en: "How did the foundation analyze the renewed rise in 2023 and 2024 after the 2022 decline, and how did that analysis change subsequent budgets, closures and expansions?",
      },
      {
        ko: "2026년 상반기 잠정 감소가 어느 연령·지역·직업·소득집단에서 나타났고 어떤 집단은 감소하지 않았습니까? 정책 효과와 경기·인구·사건 효과를 구분하는 독립평가 계획이 있습니까?",
        en: "Which age, region, occupation and income groups drove the provisional 2026 decline, and which did not improve? Is there an independent evaluation separating policy effects from economic, demographic and event effects?",
      },
      {
        ko: "교육·홍보 건수뿐 아니라 109 응답률, 대기시간, 서비스 연결률, 중도이탈, 재접촉, 지역 격차와 사후지원 결과를 월별로 공개할 수 있습니까?",
        en: "Can monthly reporting go beyond education and campaign counts to include 109 answer rates, waiting time, service connection, disengagement, follow-up, regional gaps and aftercare outcomes?",
      },
    ],
    proposals: [
      {
        ko: "정부 전체예산과 재단예산, 인건비·운영비·사업비, 최종 수혜기관을 연결한 시민용 예산·결산 원장을 매년 공개합니다.",
        en: "Publish an annual citizen budget ledger linking government-wide and foundation budgets, personnel, operations, programs and final recipients.",
      },
      {
        ko: "운영비를 ‘재단 운영 사업비’와 ‘인건비+경상운영비’ 두 기준으로 함께 공시하고, 기능별 인력·비용·성과를 연결합니다.",
        en: "Disclose operating costs under both definitions and connect headcount and costs to outcomes by function.",
      },
      {
        ko: "민관협력·시민주도 예방재원을 정부 전체 예산의 최소 3%로 먼저 확대하고, 성과를 평가해 5%까지 단계적으로 늘립니다. 50만~3천만 원의 소액·신속 지원 트랙을 별도로 둡니다.",
        en: "Raise civic and public-private prevention funding first to at least 3% of the government-wide budget, evaluate it and phase toward 5%, with a separate fast micro-grant track of KRW 0.5–30 million.",
      },
      {
        ko: "이사회와 핵심 평가위원회의 3분의 1 이상을 당사자·유족·현장 시민단체와 노동·주거·복지 분야 전문가로 구성하고, 추천 경로와 이해충돌 내역을 공개합니다.",
        en: "Reserve at least one-third of board and evaluation seats for lived-experience members, bereaved families, frontline civic groups and labor, housing and welfare experts, with nomination and conflict disclosures.",
      },
      {
        ko: "보건의료 개입과 별도로 실업·부채·주거·고립·노동·차별을 다루는 ‘삶의 조건 자살예방 계정’을 만들고 관계부처와 시민사회가 공동 운영합니다.",
        en: "Create a jointly governed 'conditions of life' prevention account for unemployment, debt, housing, isolation, work and discrimination alongside health-sector interventions.",
      },
      {
        ko: "2026년 상반기 감소는 독립 연구진이 연령·지역·계층별로 분석하고, 효과가 확인된 사업과 실패한 사업을 함께 공개한 뒤 예산에 반영합니다.",
        en: "Commission independent analysis of the 2026 decline by age, region and social group, disclose both effective and failed programs, and link the findings to the next budget.",
      },
    ],
    caution: {
      ko: "708억 원은 정부 전체 자살예방 분야 예산이고 재단 자체 예산은 370억 4,200만 원입니다. 민관협력 7억 300만 원은 프로그램 전체 항목이라 전액을 시민단체 직접보조금으로 보면 안 됩니다. 또한 국가 자살률은 경제·고용·건강·인구구조와 사회적 사건의 영향을 함께 받으므로 상승과 하락을 재단 한 곳의 실패나 성과로 단정할 수 없습니다. 2026년 상반기 수치는 잠정 사망자 수이며 연간 자살률 확정치가 아닙니다.",
      en: "KRW 70.8 billion is the government-wide prevention budget; the foundation's own budget is KRW 37.042 billion. The KRW 703 million partnership line is broader than direct civic grants. National suicide trends reflect economic, health, demographic and social factors and cannot be attributed to one institution. The 2026 first-half count is provisional, not a final annual rate.",
    },
    supportNote: {
      ko: "지금 자살을 생각하거나 위기에 놓여 있다면 자살예방상담전화 109 또는 긴급전화 112·119에 바로 연락해 주세요. 이 페이지의 공익감시 내용은 전문적인 위기상담을 대신하지 않습니다.",
      en: "If you are in immediate danger or thinking about suicide in Korea, call the Suicide Crisis Hotline 109 or emergency services at 112/119. This public-watch record is not a substitute for crisis care.",
    },
    hideSourceBasis: true,
    sources: [
      {
        label: { ko: "한국생명존중희망재단 설립목적·법적 근거", en: "Foundation purpose and statutory basis" },
        url: "https://www.kfsp.or.kr/home/kor/contents.do?menuPos=94",
      },
      {
        label: { ko: "알리오: 2026년 수입·지출 현황", en: "ALIO: 2026 income and expenditure" },
        url: "https://www.alio.go.kr/item/itemReportTerm.do?apbaId=C1367&disclosureNo=&reportFormRootNo=31401",
        note: { ko: "재단 자체예산과 인건비·경상운영비·사업비 확인", en: "Foundation budget, personnel, current operations and program costs" },
      },
      {
        label: { ko: "알리오: 2026년 주요사업 예산", en: "ALIO: 2026 major-program budget" },
        url: "https://www.alio.go.kr/item/itemReportTerm.do?apbaId=C1367&disclosureNo=&reportFormRootNo=31501",
        note: { ko: "재단 운영·고위험군·교육홍보·민관협력·109·온라인돌봄 항목", en: "Operations, high-risk support, education, partnership, 109 and online care" },
      },
      {
        label: { ko: "알리오: 2026년 7월 최신 임원현황", en: "ALIO: executive roster, July 2026" },
        url: "https://www.alio.go.kr/item/itemReport.do?seq=2026072903221278&disclosureNo=2026072903221278",
      },
      {
        label: { ko: "보건복지부: 2026년 자살예방 분야 예산 708억 원", en: "Ministry: KRW 70.8 billion 2026 prevention budget" },
        url: "https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1487392&mid=a10503010100&nPage=1&tag=",
      },
      {
        label: { ko: "재단: 정윤순 이사장·홍찬자 상임이사 임명", en: "Foundation: appointment of chair and executive director" },
        url: "https://www.kfsp.or.kr/home/kor/board.do?act=detail&idx=6158&menuPos=72",
      },
      {
        label: { ko: "보건복지부: 2025년 민관협력 직접지원 규모", en: "Ministry: 2025 direct public-private support" },
        url: "https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1485221&mid=a10503010100&nPage=7&tag=",
      },
      {
        label: { ko: "한국생명존중희망재단 사업·전달체계", en: "Foundation programs and delivery model" },
        url: "https://www.kfsp.or.kr/home/kor/contents.do?menuPos=40",
      },
      {
        label: { ko: "국가데이터처 2024년 사망원인통계", en: "Ministry of Data and Statistics: 2024 causes of death" },
        url: "https://mods.go.kr/board.es?act=view&bid=218&list_no=438787&mid=a10301060200&ref_bid=&tag=",
      },
      {
        label: { ko: "정부 2026년 상반기 자살사망 잠정치 발표", en: "Government release on provisional first-half 2026 deaths" },
        url: "https://www.korea.kr/briefing/pressReleaseView.do?endDate=2026-09-01&newsId=156776749&pageIndex=1&period=&repCode=&repCodeType=&srchWord=&startDate=2025-09-01",
      },
      {
        label: { ko: "한국생명존중희망재단 데이터줌", en: "Foundation Data Zoom" },
        url: "https://kfsp-datazoom.or.kr/korea01.do",
      },
    ],
  },
];

export const getPublicInterestWatchCase = (slug: string) =>
  publicInterestWatchCases.find((item) => item.slug === (slug === "beautiful-foundation" ? "beautiful-store" : slug));
