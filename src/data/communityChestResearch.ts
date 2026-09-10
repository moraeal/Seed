export type ResearchLanguage = "ko" | "en";

export type ResearchSection = {
  id: string;
  title: string;
  deck: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResearchSource = {
  label: string;
  url: string;
  kind: string;
};

export type CommunityChestResearch = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string[];
  date: string;
  readMinutes: number;
  verifiedAt: string;
  heroAlt: string;
  heroCaption: string;
  sections: ResearchSection[];
  conclusion: string[];
  sources: ResearchSource[];
};

const officialDisclosure = "https://www.chest.or.kr/lf/ct/initMngmtpblntf.do";
const officialGovernance = "https://www.chest.or.kr/lf/intrcn/initWpeople.do?cckIs=C";
const officialLaw = "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%82%AC%ED%9A%8C%EB%B3%B5%EC%A7%80%EA%B3%B5%EB%8F%99%EB%AA%A8%EA%B8%88%ED%9A%8C%EB%B2%95";

export const communityChestResearch: Record<ResearchLanguage, CommunityChestResearch> = {
  ko: {
    eyebrow: "씨앗 심층연구 · 공익감시",
    title: "사랑의열매는 시민의 공익을 어떻게 배분하는가",
    subtitle: "모금 9,864억 원, 배분 9,860억 원, 차기이월 순자산 1조 962억 원을 시민의 언어로 다시 읽습니다",
    summary: [
      "사랑의열매는 사회복지공동모금회법에 근거한 전국 단위 법정 공동모금·배분기관입니다. 2025년 모금과 배분은 각각 9,864억 원과 9,860억 원에 이르렀습니다.",
      "큰 규모 자체가 문제는 아닙니다. 씨앗이 묻는 것은 지정기탁, 이월재원, 운영비와 의사결정 구조가 시민에게 충분히 설명되고 있는가입니다.",
      "이 글은 기존 PDF의 문제의식을 이어가되, 과장되거나 근거가 불충분했던 표현을 걷어내고 2026년 9월 10일 확인한 공식 공시와 보도를 기준으로 다시 작성한 개정판입니다.",
    ],
    date: "2026-09-10",
    readMinutes: 12,
    verifiedAt: "2026년 9월 10일",
    heroAlt: "기부금 장부에서 시민 공동체로 자원이 이동하고 그 과정을 돋보기로 살피는 공익감시 일러스트",
    heroCaption: "공익자금의 핵심은 규모가 아니라 시민이 흐름과 결과를 확인할 수 있는 설명 책임입니다. 씨앗 제작 이미지.",
    sections: [
      {
        id: "revision",
        title: "왜 기존 보고서를 다시 썼는가",
        deck: "문제의식은 유지하되 사실, 해석과 제안을 분리했습니다.",
        paragraphs: [
          "씨앗이 보관한 기존 PDF는 공동모금회의 중앙집중적 구조, 지정기탁 중심 배분, 이월재원과 작은 시민조직의 접근 장벽을 비판적으로 살폈습니다. 공익기관도 시민의 질문과 감시를 받아야 한다는 출발점은 타당합니다.",
          "그러나 일부 문장은 분석을 확정된 사실처럼 표현했습니다. ‘법정 독점’, ‘시민의 원천적 배제’, ‘이월금의 방치’ 같은 표현은 공식 자료가 보여주는 범위보다 강했습니다. 일반모금액을 분모로 계산한 운영비 비율을 법정 기준처럼 서술한 대목도 바로잡아야 했습니다.",
          "이번 개정판은 공식 공시로 확인되는 숫자, 과거 보도로 확인되는 사건, 씨앗의 해석과 제안을 서로 구분합니다. 확인되지 않은 세부 수치는 과감히 제외하고, 기관의 반론이나 제도 개선도 함께 기록했습니다.",
        ],
      },
      {
        id: "status",
        title: "유일한 법정 공동모금회, 그러나 모든 공익모금의 독점기관은 아니다",
        deck: "정확한 법적 지위에서 감시의 기준도 출발해야 합니다.",
        paragraphs: [
          "사랑의열매는 1998년 제정된 법률을 바탕으로 출범했고, 1999년 법 개정 뒤 중앙회와 시·도 지회 체계로 전환됐습니다. 법은 국민의 자발적 성금을 효율적이고 공정하게 관리·운용해 사회복지 증진에 기여하는 것을 목적으로 규정합니다.",
          "따라서 ‘유일한 법정 공동모금회’라는 설명은 가능하지만 ‘모든 기부와 공익모금을 법적으로 독점한다’고 이해해서는 안 됩니다. 다른 비영리법인과 공익단체도 각 법률과 절차에 따라 모금합니다.",
          "법적 지위가 특별할수록 설명 책임은 더 무거워집니다. 전국 단위 모금 브랜드와 지역 지회망, 대규모 기업기부를 연결하는 힘은 사회적 자산이지만, 그 힘이 어떤 기준으로 배분되고 누가 결정하는지는 시민이 검증할 수 있어야 합니다.",
        ],
      },
      {
        id: "five-years",
        title: "5년의 숫자가 보여주는 성장과 이월",
        deck: "모금·배분·차기이월 순자산을 같은 화면에서 봐야 합니다.",
        paragraphs: [
          "공식 경영공시에 따르면 모금액은 2021년 7,619억 원에서 2025년 9,864억 원으로 늘었습니다. 같은 기간 배분액은 7,104억 원에서 9,860억 원으로 증가했습니다. 2025년만 놓고 보면 모금과 배분의 연간 총액은 거의 같습니다.",
          "그러나 차기이월 순자산은 2021년 8,181억 원에서 2025년 1조 962억 원으로 약 34% 증가했습니다. 이 수치는 씨앗의 추정치가 아니라 현재 공개된 수입지출현황에서 확인되는 공식 값입니다.",
          "다만 차기이월 순자산을 곧바로 ‘쓰지 않고 쌓아둔 현금’이라고 부르는 것도 정확하지 않습니다. 지정 조건이 붙은 재원, 다음 연도 집행 예정액과 여러 회계 항목이 포함될 수 있기 때문입니다. 필요한 것은 규모에 대한 비난보다 발생연도·지정조건·대기기간·집행계획을 연결한 시민용 원장입니다.",
        ],
      },
      {
        id: "restricted",
        title: "배분의 75%가 지정기탁이라는 사실이 뜻하는 것",
        deck: "기부자의 선택과 공동모금회의 독립적 판단 사이의 균형을 물어야 합니다.",
        paragraphs: [
          "2025년 전체 배분액 9,860억 원 가운데 지정기탁은 7,430억 원으로 약 75.4%입니다. 이 비중은 2021년에도 약 75.2%였기 때문에 일시적인 현상이라기보다 배분구조의 지속적인 특징으로 볼 수 있습니다.",
          "지정기탁은 기부자가 관심 분야와 수혜처를 선택할 수 있게 하고 기업의 참여를 끌어내는 장점이 있습니다. 반대로 유명한 기관이나 측정하기 쉬운 사업에 자원이 집중되고, 알려지지 않은 문제와 작은 시민조직은 배분에서 밀릴 가능성도 있습니다.",
          "지정기탁이 많다는 이유만으로 잘못이라고 단정할 수는 없습니다. 다만 공동모금회가 단순 전달자에 머무르지 않으려면 지정기탁이 해결하지 못하는 사각지대를 어떻게 발견하고, 일반·기획·신청사업을 통해 어떻게 보완했는지 공개해야 합니다.",
        ],
      },
      {
        id: "costs",
        title: "운영비는 하나의 비율로 판단할 수 없다",
        deck: "법정 기준과 시민이 묻는 효율성 지표는 다른 계산입니다.",
        paragraphs: [
          "사회복지공동모금회법은 모금과 관리·운영에 필요한 비용을 전년도 총모금액의 10% 범위에서 사용할 수 있도록 규정합니다. 따라서 현물과 지정기탁을 제외한 일반모금액을 분모로 삼아 20%를 넘는다는 이유만으로 ‘법정기준 위반’이라고 말할 수는 없습니다.",
          "2023년 국회 자료를 인용한 보도에서는 2021년과 2022년 관리운영비를 일반모금액과 비교하면 각각 21.46%, 21.12%라는 분석이 제시됐습니다. 이것은 법적 적합성을 판단하는 공식 비율이 아니라, 자유롭게 배분할 수 있는 재원에 견줘 조직 유지비가 얼마나 큰지 묻는 대안적 지표입니다.",
          "두 계산은 경쟁하는 진실이 아니라 서로 다른 질문에 답합니다. 법정 비율은 규정 준수 여부를, 일반모금 대비 비율은 재원구조와 배분 자율성에 대한 정책적 질문을 보여줍니다. 공동모금회가 두 기준의 분자와 분모, 포함 항목을 나란히 공개하면 불필요한 오해도 줄어들 수 있습니다.",
        ],
      },
      {
        id: "governance",
        title: "시민이 없는가, 시민의 권한이 보이지 않는가",
        deck: "참여기구의 존재보다 선임과 영향력의 투명성이 중요합니다.",
        paragraphs: [
          "현재 공개된 이사회에는 시민단체, 학계, 기업, 의료·법률 분야 인사가 함께 포함돼 있고 윤리경영 체계에는 시민참여위원회도 있습니다. 따라서 시민 참여가 ‘완전히 부재하다’거나 시민이 ‘원천적으로 배제된다’고 단정하는 것은 사실과 맞지 않습니다.",
          "그렇다고 시민 참여가 충분하다는 결론도 자동으로 나오지는 않습니다. 위원의 선임 경로, 추천권자, 임기와 연임, 실제 표결권, 이해충돌 회피 내역과 제안 처리 결과가 얼마나 공개되는지까지 보아야 실질적인 영향력을 판단할 수 있습니다.",
          "공익의 시민화는 시민이라는 이름의 위원 몇 명을 더 넣는 일이 아닙니다. 기부자, 수혜자, 현장활동가와 작은 지역모임이 의제를 제안하고 결정의 근거를 확인하며 결과를 평가할 수 있는 구조를 만드는 일입니다.",
        ],
      },
      {
        id: "history",
        title: "과거 논란은 현재의 유죄판결문이 아니다",
        deck: "사건, 해명과 제도 변화까지 함께 기록해야 합니다.",
        paragraphs: [
          "기존 PDF는 과거 여러 지역 지회의 비위와 지정기탁 논란을 제시했습니다. 그 가운데 충북지회와 관련해서는 한 고액기부자의 기부금 9,500만 원이 세 차례에 걸쳐 본인이 설립한 재단으로 배분됐다는 2018년 보도가 확인됩니다.",
          "해당 보도에는 지회가 규정상 문제가 없었다고 설명하면서도 오해의 소지가 있는 만큼 재발을 막겠다고 답한 내용도 담겨 있습니다. 이 사건은 지정기탁 통제와 이해충돌 관리의 필요성을 보여주는 역사적 사례이지만, 오늘의 조직 전체가 같은 방식으로 운영된다는 증거로 사용할 수는 없습니다.",
          "2018년 지정기탁 잔액 보도에서도 기업 측은 잔액 안내가 충분하지 않았다고 지적했고, 공동모금회는 약정서 고지와 결과보고를 했으며 남은 돈을 운영비가 아니라 일반 사회복지사업에 썼다고 반박했습니다. 심층연구는 비판만 모으는 문서가 아니라 사실의 범위와 당사자의 설명을 함께 남기는 기록이어야 합니다.",
        ],
      },
      {
        id: "citizenization",
        title: "공익기관을 없애는 것이 아니라 공익의 통로를 넓히는 일",
        deck: "거대한 배분과 작은 시민 실험은 서로 대체하는 선택지가 아닙니다.",
        paragraphs: [
          "전국적인 재난과 복지위기에 대응하고 복잡한 배분을 관리하려면 전문기관이 필요합니다. 대형 기관의 운영비가 존재한다는 사실만으로 관료화나 낭비를 단정하는 것은 타당하지 않습니다.",
          "그러나 행정 능력과 사업실적을 갖춘 조직이 반복적으로 자원을 받는 구조만으로는 새로운 시민 참여가 자라기 어렵습니다. 법인격이 없거나 회계 인력이 부족한 작은 모임에도 50만~300만 원 규모의 실험비를 빠르게 지원하고, 결과보고의 부담을 금액과 위험에 비례해 설계할 필요가 있습니다.",
          "대규모 복지배분은 공동모금회가 책임 있게 수행하고, 일반재원의 일부에는 시민이 발견한 문제를 시험하는 별도 통로를 두는 방식이 가능합니다. 중요한 것은 기존 기관의 생존이나 해체가 아니라 공익자금이 더 많은 시민을 공공문제의 주체로 성장시키는가입니다.",
        ],
        bullets: [
          "이월재원을 발생연도·지정조건·대기기간·집행계획별로 공개합니다.",
          "총모금액 기준 법정비율과 일반모금액 기준 분석비율을 산식과 함께 나란히 공개합니다.",
          "이사회·배분위원회의 선임 과정, 이해충돌 회피와 시민 제안 처리 결과를 공개합니다.",
          "작은 시민모임을 위한 50만~300만 원 소액·신속 지원 통로를 별도로 실험합니다.",
          "사업의 성공만이 아니라 중단·실패·미집행 사유도 시민이 검색할 수 있게 공개합니다.",
        ],
      },
    ],
    conclusion: [
      "사랑의열매가 거대한 조직이라는 이유만으로 공익성을 부정할 수는 없습니다. 동시에 법정 지위와 모금 규모가 그 자체로 충분한 정당성을 보장하지도 않습니다.",
      "공익기관의 신뢰는 선의가 아니라 검증 가능성에서 나옵니다. 시민이 돈의 출발점과 도착점, 결정한 사람과 미집행 이유를 함께 볼 수 있을 때 공익은 기관의 명분이 아니라 시민의 자산이 됩니다.",
      "씨앗의 결론은 기관을 공격하는 것이 아니라 공익의 주인을 다시 분명히 하자는 것입니다. 공익은 국가나 조직이 소유하는 이름이 아니라 시민이 공동체의 문제를 발견하고 해결하는 과정에서 만들어지는 가치입니다.",
    ],
    sources: [
      { label: "사랑의열매 경영공시·2021~2025 모금·배분·재무자료", url: officialDisclosure, kind: "공식자료" },
      { label: "사회복지공동모금회법", url: officialLaw, kind: "법령" },
      { label: "사랑의열매 이사회·분과실행위원 공개자료", url: officialGovernance, kind: "공식자료" },
      { label: "충북지회 지정기탁 논란과 지회 답변", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002407158", kind: "보도" },
      { label: "지정기탁 잔액을 둘러싼 기업 지적과 공동모금회 반론", url: "https://futurechosun.com/archives/34437", kind: "보도" },
      { label: "일반모금액 대비 관리운영비 분석을 다룬 국회자료 보도", url: "https://www.songpatimes.com/news/articleView.html?idxno=323954", kind: "보도" },
      { label: "2010년 감사 논란과 제도개선 요구", url: "https://ccej.or.kr/posts/Yyt9Jz", kind: "시민단체 자료" },
    ],
  },
  en: {
    eyebrow: "SEED DEEP RESEARCH · PUBLIC-INTEREST WATCH",
    title: "How Does Community Chest of Korea Allocate the Public Interest?",
    subtitle: "A citizen-readable review of KRW 986.4 billion raised, KRW 986.0 billion distributed, and KRW 1.0962 trillion carried forward",
    summary: [
      "Community Chest of Korea is the nationwide statutory community fundraising and allocation body established under a dedicated law. In 2025 it raised KRW 986.4 billion and distributed KRW 986.0 billion.",
      "Scale is not the problem by itself. SEED asks whether donor-restricted allocations, carried-over resources, operating costs and decision-making are explained clearly enough for citizens to examine.",
      "This revised edition retains the questions raised in SEED's earlier PDF while removing overstatement and rebuilding the analysis around disclosures and reporting verified on September 10, 2026.",
    ],
    date: "2026-09-10",
    readMinutes: 12,
    verifiedAt: "September 10, 2026",
    heroAlt: "Editorial illustration of public-interest funds moving from a transparent ledger to citizen groups under a magnifying glass",
    heroCaption: "The central issue in public-interest funding is not scale alone, but whether citizens can follow the money and its results. Illustration by SEED VOICE.",
    sections: [
      {
        id: "revision",
        title: "Why the Earlier Report Needed a Rewrite",
        deck: "The central concern remains, but fact, interpretation and proposal are now separated.",
        paragraphs: [
          "SEED's archived PDF examined centralization, donor-restricted giving, carried-over resources and barriers facing small civic groups. Its starting premise remains sound: public-interest institutions must also be open to public questioning and scrutiny.",
          "Several passages, however, stated analysis too conclusively. Phrases such as ‘statutory monopoly,’ ‘complete exclusion of citizens’ and ‘idle carryovers’ went beyond what the public record established. The report also treated an operating-cost ratio using unrestricted donations as if it were the statutory test.",
          "This edition separates figures confirmed in official disclosures, historical incidents confirmed in reporting, SEED's analysis and SEED's proposals. Unsupported details have been removed, while institutional explanations and later reforms are included.",
        ],
      },
      {
        id: "status",
        title: "The Sole Statutory Community Chest, Not a Monopoly on All Giving",
        deck: "Accountability starts with an accurate description of legal status.",
        paragraphs: [
          "The organization began under legislation enacted in 1998 and moved to a national-office and provincial-branch structure after the law was amended in 1999. Its statutory purpose is to manage voluntary donations efficiently and fairly in support of social welfare.",
          "It is therefore accurate to call it Korea's sole statutory community chest. It is not accurate to imply that it legally monopolizes all charitable fundraising; other nonprofits and public-interest organizations also raise funds under applicable rules.",
          "A distinctive legal position nevertheless carries a heavier duty to explain. The national brand, regional network and ability to aggregate corporate giving are social assets. Citizens should also be able to examine how those resources are allocated and who makes the decisions.",
        ],
      },
      {
        id: "five-years",
        title: "What Five Years of Figures Show",
        deck: "Fundraising, distributions and year-end carryovers belong on the same page.",
        paragraphs: [
          "Official disclosures show fundraising rising from KRW 761.9 billion in 2021 to KRW 986.4 billion in 2025. Distributions increased from KRW 710.4 billion to KRW 986.0 billion. In 2025 alone, the two annual totals were almost equal.",
          "Net assets carried forward rose about 34%, from KRW 818.1 billion in 2021 to KRW 1.0962 trillion in 2025. These are now confirmed disclosure figures, not a SEED reconstruction.",
          "A carryover is not automatically idle cash. It may include donor-restricted resources, commitments scheduled for later years and other accounting items. The useful response is not accusation by headline, but a citizen ledger showing origin year, restriction, age and planned use.",
        ],
      },
      {
        id: "restricted",
        title: "What a 75% Donor-Restricted Share Means",
        deck: "The question is how donor choice and independent allocation judgment are balanced.",
        paragraphs: [
          "Of KRW 986.0 billion distributed in 2025, KRW 743.0 billion was donor-restricted—about 75.4%. The share was also about 75.2% in 2021, making it a durable feature rather than a one-year anomaly.",
          "Restricted giving lets donors choose causes and recipients and can unlock corporate participation. It can also favor familiar institutions and easily measured projects, leaving less visible needs and small civic groups behind.",
          "A high restricted share is not wrongdoing by itself. But if the Chest is more than a transfer agent, it should show how independent, planned and application-based allocations identify and correct the blind spots that donor direction leaves behind.",
        ],
      },
      {
        id: "costs",
        title: "No Single Ratio Settles the Operating-Cost Question",
        deck: "The statutory test and a civic efficiency measure answer different questions.",
        paragraphs: [
          "The governing law permits fundraising and management expenses within 10% of the previous year's total donations. A ratio exceeding 20% after removing in-kind and restricted donations from the denominator does not, by itself, establish a statutory violation.",
          "A 2023 news report citing National Assembly analysis calculated management costs at 21.46% of unrestricted giving in 2021 and 21.12% in 2022. That was an alternative policy measure, not the legal compliance ratio.",
          "The two measures should not be confused. One tests compliance; the other asks how much organizational cost weighs against flexible resources. Publishing both formulas, components and results side by side would reduce misunderstanding and improve debate.",
        ],
      },
      {
        id: "governance",
        title: "Are Citizens Absent, or Is Their Influence Hard to See?",
        deck: "The existence of a committee is not the same as transparent influence.",
        paragraphs: [
          "The current board includes figures from civic organizations, academia, business, medicine and law, and the ethics system includes a Citizen Participation Committee. Claims of complete citizen absence or categorical exclusion are therefore too sweeping.",
          "Nor does that automatically prove participation is sufficient. Meaningful assessment requires information on nomination, selection, terms, voting power, recusals, meeting records and how citizen proposals changed decisions.",
          "Citizenizing the public interest is not a matter of adding a few members carrying the label ‘citizen.’ Donors, recipients, frontline workers and small local groups need routes to propose issues, inspect the reasons for decisions and evaluate results.",
        ],
      },
      {
        id: "history",
        title: "Historical Controversies Are Not a Verdict on Today's Institution",
        deck: "Incidents, responses and subsequent safeguards must be recorded together.",
        paragraphs: [
          "The earlier PDF listed misconduct and donor-designation controversies in regional branches. One verified 2018 report concerned KRW 95 million donated in three installments and allocated to a foundation established by the donor.",
          "The same report recorded the branch's position that the allocation complied with its rules, while acknowledging the appearance problem and promising to prevent a recurrence. The episode illustrates conflict-of-interest risk; it does not prove that the whole organization operates the same way today.",
          "Reporting on residual designated funds likewise carried both criticism and response: companies said communication was insufficient, while the Chest said its forms disclosed the rules, final reports were sent, and residual funds went to social-welfare programs rather than operating expenses. Deep research must preserve both the boundaries of fact and the institution's answer.",
        ],
      },
      {
        id: "citizenization",
        title: "Widening the Public-Interest Channel, Not Abolishing the Institution",
        deck: "Large-scale welfare allocation and small civic experiments are not substitutes.",
        paragraphs: [
          "Professional institutions are necessary for nationwide disasters, welfare crises and complex grantmaking. The mere existence of staff and operating costs does not prove bureaucratic waste.",
          "Yet a system that repeatedly favors organizations with staff, accounts and grant records can struggle to cultivate new citizen action. Small or unincorporated groups need fast grants of KRW 0.5–3 million, with reporting obligations proportionate to the amount and risk.",
          "The Chest can continue to handle large-scale welfare allocations while reserving a route within flexible funds for problems identified and tested by citizens. The measure of reform is not whether an institution survives, but whether public-interest resources help more citizens become agents of public problem-solving.",
        ],
        bullets: [
          "Publish carryovers by origin year, restriction, age and planned use.",
          "Publish the statutory ratio and the unrestricted-funds analytical ratio side by side, with formulas.",
          "Disclose board and allocation-committee selection, recusals and responses to citizen proposals.",
          "Pilot a fast KRW 0.5–3 million grant route for small citizen groups.",
          "Make discontinued, failed and delayed projects searchable alongside successes.",
        ],
      },
    ],
    conclusion: [
      "Community Chest of Korea should not lose its public-interest standing simply because it is large. But statutory status and fundraising scale do not supply permanent legitimacy either.",
      "Trust in public-interest institutions comes from verifiability, not good intentions alone. When citizens can see where money begins and ends, who decided, and why funds remain unspent, public interest becomes a civic asset rather than an institutional claim.",
      "SEED's conclusion is not to attack an institution but to identify the owner of public interest. Public interest is not a label owned by the state or an organization; it is value created when citizens discover and solve shared problems.",
    ],
    sources: [
      { label: "Community Chest disclosures: 2021–2025 fundraising, distributions and financial data", url: officialDisclosure, kind: "Official record" },
      { label: "Community Chest of Korea Act", url: officialLaw, kind: "Statute" },
      { label: "Community Chest board and committee disclosures", url: officialGovernance, kind: "Official record" },
      { label: "Reporting and branch response on the Chungbuk donor-designation controversy", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002407158", kind: "News report" },
      { label: "Corporate concerns and the Chest's response on residual designated funds", url: "https://futurechosun.com/archives/34437", kind: "News report" },
      { label: "National Assembly analysis of management costs against unrestricted giving", url: "https://www.songpatimes.com/news/articleView.html?idxno=323954", kind: "News report" },
      { label: "2010 audit controversy and reform demands", url: "https://ccej.or.kr/posts/Yyt9Jz", kind: "Civic organization statement" },
    ],
  },
};

export const communityChestTrend = [
  { year: "2021", raised: 7619, distributed: 7104, carried: 8181 },
  { year: "2022", raised: 7925, distributed: 7334, carried: 8841 },
  { year: "2023", raised: 8305, distributed: 7446, carried: 9956 },
  { year: "2024", raised: 8477, distributed: 7896, carried: 10708 },
  { year: "2025", raised: 9864, distributed: 9860, carried: 10962 },
];

export const communityChestAllocation = [
  { ko: "지정기탁", en: "Donor-restricted", amount: 7430, percent: 75.4 },
  { ko: "기획사업", en: "Planned programs", amount: 1517, percent: 15.4 },
  { ko: "복권기금", en: "Lottery fund", amount: 453, percent: 4.6 },
  { ko: "신청사업", en: "Open applications", amount: 301, percent: 3.1 },
  { ko: "긴급지원", en: "Emergency aid", amount: 159, percent: 1.6 },
];
