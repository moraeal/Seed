import type { Language } from "../i18n";

export type EditorialContentKind = "news" | "briefing" | "column" | "seed-language" | "monitoring";

type LocalizedText = { ko: string; en: string };
type ContentRef = { kind: EditorialContentKind; slug: string };
type EditorialRelation = {
  target: ContentRef;
  relationship: LocalizedText;
  reason: LocalizedText;
};

export type EditorialContinuation = {
  href: string;
  title: string;
  relationship: string;
  reason: string;
  listHref: string;
  listLabel: string;
};

const keyOf = (kind: EditorialContentKind, slug: string) => `${kind}:${slug}`;
const relation = (target: ContentRef, relationship: LocalizedText, reason: LocalizedText): EditorialRelation => ({ target, relationship, reason });

// This lightweight index keeps related-reading cards from loading every full article bundle.
// Publishing checks below ensure that every live article has an explicit editorial path.
const contentTitles: Record<string, LocalizedText> = {
  "briefing:2027-national-budget-revenue-debt": { ko: "820.9조 원 슈퍼예산, 나라살림은?", en: "The KRW 820.9 Trillion Budget Test" },
  "briefing:prosecution-service-abolition": { ko: "검찰청 폐지 뒤 남는 수사권력", en: "Investigative Power After the Prosecution Service" },
  "briefing:social-solidarity-economy-youth-mall-lessons": { ko: "사회연대경제기본법, 청년몰 실패 사례에서 배우자", en: "Korea's Social and Solidarity Economy Act: Lessons from the Youth Mall Failure" },
  "column:beyond-polanyi-market-society-state": { ko: "사회 안의 시장, 국가 밖의 사회", en: "Markets Within Society, Society Beyond the State" },
  "column:conservatives-and-the-language-of-citizens": { ko: "보수가 잃어버린 시민의 언어", en: "The Civic Language Conservatives Lost" },
  "column:do-they-represent-korean-civil-society": { ko: "그들이 대한민국 시민사회를 대표하는가", en: "Do They Represent Korean Civil Society?" },
  "column:government-electricity-prepayment-pressure": { ko: "기업을 정부의 현금인출기로 보지 마라", en: "Stop Treating Companies as the Government's ATM" },
  "column:lh-reform-politics-2026": { ko: "내용 없는 깡통이 더 요란하다", en: "Empty Cans Make the Loudest Noise" },
  "column:majority-power-must-not-command-the-judiciary": { ko: "대법관을 다시 고르라는 권력", en: "When Political Power Tells the Chief Justice to Pick Again" },
  "column:nepal-climate-crisis-conservative-seed-response": { ko: "네팔 참사, 기후위기는 진보의 전유물이 아니다", en: "The Nepal Disaster Shows the Climate Crisis Is Not the Left's Exclusive Cause" },
  "column:prosecution-reform-power-transfer-2026": { ko: "검찰개혁은 권력을 옮겨 심는 일이 아니다", en: "Prosecution Reform Is Not About Moving Power Elsewhere" },
  "column:random-selection-alone-does-not-make-a-public-forum": { ko: "무작위 선발은 공론장이 아니다", en: "Random Selection Is Not a Public Forum" },
  "column:when-civic-power-rules-citizens": { ko: "시민의 이름으로 시민을 지배할 때", en: "When Civic Power Rules in the Name of Citizens" },
  "monitoring:community-chest-of-korea": { ko: "큰 모금의 힘은 더 큰 설명 책임으로 이어져야 합니다", en: "The Power of Large-Scale Fundraising Requires Greater Accountability" },
  "news:2030-trillion-won-fiscal-plan-revenue-assumptions": { ko: "1,000조 원 나라살림, 낙관적 세수의 덫", en: "The Trillion-Won Budget and Optimistic Revenue" },
  "news:class-action-law-consumer-rights-market-responsibility": { ko: "집단소송법, 시민의 방패인가 과잉규제인가", en: "Class Actions: Citizen Shield or Overregulation?" },
  "news:gs-retail-data-leak-corporate-accountability": { ko: "GS리테일 166만 명 정보 유출…과징금 128억 원", en: "GS Retail Data Leak Draws KRW 12.8 Billion Fine" },
  "news:lh-split-public-agency-experiment": { ko: "정부, 17년 만에 LH 분리 추진..개발·자산관리 나눈다", en: "Government Moves to Split LH into Development and Asset Management" },
  "news:local-sports-subsidy-accountability": { ko: "200억 원 체육보조금—수익과 증빙은 왜 정산에서 빠졌나", en: "KRW 20 Billion in Sports Grants: Why Were Revenue and Receipts Missing?" },
  "news:president-civic-society-dialogue-representation": { ko: "대통령과 시민사회의 210분, 누가 ‘시민’을 대표했나", en: "After 210 Minutes with the President, Who Spoke for Civil Society?" },
  "news:regulation-reform-needs-public-accountability": { ko: "한 총리, 신속 규제 즉시 해소", en: "Prime Minister Pledges Swift Regulatory Reform" },
  "news:supreme-court-nomination-returned-in-unprecedented-clash": { ko: "대법관 재제청 요구…제청권·임명권 충돌", en: "Supreme Court Renomination Demand Tests Separation of Powers" },
  "seed-language:citizen-as-seed": { ko: "시민은 주어지는 이름이 아니라 자라나는 존재다", en: "Citizenship Is Not a Given Label; It Is Something We Grow Into" },
  "seed-language:democracy-citizens-deep-read": { ko: "민주는 권력자의 깃발이 아니라 시민의 권리다", en: "Democracy Is a Citizen's Right, Not a Ruler's Banner" },
  "seed-language:democracy-not-a-king": { ko: "민주는 왕을 뽑는 일이 아니라 권력을 제한하는 일이다", en: "Democracy Is Not Choosing a King. It Is Limiting Power." },
  "seed-language:environment-shared-condition": { ko: "환경은 보호의 대상이 아니라 함께 만들어가는 삶의 조건이다", en: "The Environment Is a Condition of Life We Build Together" },
  "seed-language:public-interest-belongs-to-citizens": { ko: "공익은 국가의 것이 아니라 시민의 것이다", en: "Public Interest Belongs to Citizens, Not the State" },
};

const editorialRelations: Record<string, EditorialRelation> = {
  [keyOf("news", "local-sports-subsidy-accountability")]: relation(
    { kind: "monitoring", slug: "community-chest-of-korea" },
    { ko: "공익자금의 구조", en: "THE STRUCTURE OF PUBLIC-INTEREST FUNDING" },
    { ko: "체육보조금 사건을 넘어 대형 공익기관의 재정과 배분 구조가 시민에게 얼마나 설명되는지 살펴봅니다.", en: "Move beyond the sports-grant case to examine whether a major public-interest institution explains its finances and allocations to citizens." },
  ),
  [keyOf("news", "lh-split-public-agency-experiment")]: relation(
    { kind: "column", slug: "lh-reform-politics-2026" },
    { ko: "씨앗의 관점", en: "SEED'S VIEW" },
    { ko: "LH 분리 방안을 조직개편의 속도와 국가의 설명책임이라는 관점에서 이어서 읽습니다.", en: "Continue with an analysis of the LH split through the pace of reform and public accountability." },
  ),
  [keyOf("news", "president-civic-society-dialogue-representation")]: relation(
    { kind: "column", slug: "do-they-represent-korean-civil-society" },
    { ko: "대표성의 쟁점", en: "THE QUESTION OF REPRESENTATION" },
    { ko: "대통령과 시민단체의 만남에서 제기된 대표성 문제를 시민사회 권력의 구조로 확장합니다.", en: "Extend the representation question from the presidential meeting to the structure of civic power." },
  ),
  [keyOf("news", "prosecution-abolition-police-case-backlog")]: relation(
    { kind: "briefing", slug: "prosecution-service-abolition" },
    { ko: "제도 배경", en: "INSTITUTIONAL BACKGROUND" },
    { ko: "검찰청 폐지 뒤 수사권력이 어디로 이동하고 어떤 통제가 필요한지 차분히 확인합니다.", en: "Examine where investigative power moves after the prosecution service is abolished and how it should be checked." },
  ),
  [keyOf("news", "2030-trillion-won-fiscal-plan-revenue-assumptions")]: relation(
    { kind: "briefing", slug: "2027-national-budget-revenue-debt" },
    { ko: "숫자 깊게 보기", en: "READ THE NUMBERS" },
    { ko: "1,000조 원 재정계획의 세입·지출·채무 전제를 수치별로 다시 확인합니다.", en: "Review the revenue, spending and debt assumptions behind the KRW 1,000 trillion fiscal plan." },
  ),
  [keyOf("news", "class-action-law-consumer-rights-market-responsibility")]: relation(
    { kind: "news", slug: "gs-retail-data-leak-corporate-accountability" },
    { ko: "관련 사례", en: "RELATED CASE" },
    { ko: "집단소송 논의를 대규모 개인정보 유출 사건에서 기업 책임이 실제로 어떻게 작동하는지와 연결합니다.", en: "Connect the class-action debate to how corporate responsibility works after a large data breach." },
  ),
  [keyOf("news", "gs-retail-data-leak-corporate-accountability")]: relation(
    { kind: "news", slug: "class-action-law-consumer-rights-market-responsibility" },
    { ko: "제도적 쟁점", en: "THE LEGAL QUESTION" },
    { ko: "개인정보 피해의 구제수단으로 집단소송이 필요한지, 과잉규제 위험은 없는지 이어서 살펴봅니다.", en: "Consider whether class actions are an effective remedy for data harms and how to avoid excessive regulation." },
  ),
  [keyOf("news", "supreme-court-nomination-returned-in-unprecedented-clash")]: relation(
    { kind: "column", slug: "majority-power-must-not-command-the-judiciary" },
    { ko: "권력분립의 관점", en: "SEPARATION OF POWERS" },
    { ko: "대법관 제청 갈등을 다수 권력과 사법부 독립의 경계에서 해석합니다.", en: "Read the nomination conflict through the boundary between majority power and judicial independence." },
  ),
  [keyOf("news", "basic-pension-reform-fairness-and-trust")]: relation(
    { kind: "briefing", slug: "2027-national-budget-revenue-debt" },
    { ko: "재정의 배경", en: "FISCAL CONTEXT" },
    { ko: "기초연금의 공정성 논의를 복지지출과 중기재정의 지속 가능성 속에서 살펴봅니다.", en: "Place the fairness of the basic pension within welfare spending and medium-term fiscal sustainability." },
  ),
  [keyOf("news", "youth-jobs-need-opportunity-not-another-platform")]: relation(
    { kind: "briefing", slug: "social-solidarity-economy-youth-mall-lessons" },
    { ko: "정책 사례", en: "POLICY CASE" },
    { ko: "청년 일자리 지원이 공급자 중심 사업으로 흐를 때 나타나는 한계를 청년몰 사례로 확인합니다.", en: "Use the youth-mall experience to examine the limits of provider-led youth employment policy." },
  ),
  [keyOf("news", "regulation-reform-needs-public-accountability")]: relation(
    { kind: "column", slug: "government-electricity-prepayment-pressure" },
    { ko: "기업 자유의 관점", en: "BUSINESS FREEDOM" },
    { ko: "규제를 푼다는 정부가 기업에 새로운 부담을 떠넘길 때 생기는 모순을 살펴봅니다.", en: "Examine the contradiction when a government promising deregulation shifts new burdens onto companies." },
  ),

  [keyOf("briefing", "president-criminal-trials-article-84")]: relation(
    { kind: "seed-language", slug: "democracy-not-a-king" },
    { ko: "민주의 원칙", en: "THE PRINCIPLE OF DEMOCRACY" },
    { ko: "대통령의 재판 문제를 선거로 얻은 권력도 법과 제도에 의해 제한돼야 한다는 원칙으로 확장합니다.", en: "Extend the trial question to the principle that electoral power remains bounded by law and institutions." },
  ),
  [keyOf("briefing", "prosecution-service-abolition")]: relation(
    { kind: "column", slug: "prosecution-reform-power-transfer-2026" },
    { ko: "씨앗의 관점", en: "SEED'S VIEW" },
    { ko: "수사·기소 분리가 권력의 축소인지 단순한 이동인지 비판적으로 읽습니다.", en: "Ask whether separating investigation and prosecution reduces power or merely relocates it." },
  ),
  [keyOf("briefing", "housing-supply-numbers")]: relation(
    { kind: "news", slug: "lh-split-public-agency-experiment" },
    { ko: "최신 정책", en: "LATEST POLICY" },
    { ko: "주택공급 숫자 논쟁이 LH 조직 분리 구상과 어떤 실행 문제로 연결되는지 확인합니다.", en: "See how housing-supply targets connect to the implementation risks of the proposed LH split." },
  ),
  [keyOf("briefing", "public-interest-citizenization")]: relation(
    { kind: "monitoring", slug: "community-chest-of-korea" },
    { ko: "공익감시 사례", en: "PUBLIC-INTEREST WATCH" },
    { ko: "공익의 시민화라는 원칙을 대형 법정모금기관의 재정과 배분 구조에 적용해 봅니다.", en: "Apply citizen-centered public interest to the finances and allocation structure of a large statutory fundraiser." },
  ),
  [keyOf("briefing", "sports-governance-fairness")]: relation(
    { kind: "news", slug: "local-sports-subsidy-accountability" },
    { ko: "최신 관련 사건", en: "LATEST RELATED CASE" },
    { ko: "스포츠 행정의 공정성 문제가 지방 체육보조금 정산에서 어떻게 드러났는지 확인합니다.", en: "See how fairness in sports administration appears in the latest local sports-grant investigation." },
  ),
  [keyOf("briefing", "gyeonggi-fiscal-emergency")]: relation(
    { kind: "briefing", slug: "2027-national-budget-revenue-debt" },
    { ko: "재정의 큰 그림", en: "THE BIGGER FISCAL PICTURE" },
    { ko: "지방정부의 빚 문제를 국가 전체의 세입·지출·채무 구조와 함께 살펴봅니다.", en: "Place local-government debt within the wider structure of national revenue, spending and debt." },
  ),
  [keyOf("briefing", "2027-national-budget-revenue-debt")]: relation(
    { kind: "news", slug: "2030-trillion-won-fiscal-plan-revenue-assumptions" },
    { ko: "쟁점 요약", en: "ISSUE SUMMARY" },
    { ko: "재정 수치에서 확인한 내용을 낙관적 세수 전망의 책임이라는 핵심 쟁점으로 다시 읽습니다.", en: "Return from the fiscal figures to the central question of accountability for optimistic revenue forecasts." },
  ),
  [keyOf("briefing", "broadcasting-three-laws-public-governance")]: relation(
    { kind: "column", slug: "when-civic-power-rules-citizens" },
    { ko: "권력 감시의 관점", en: "WATCHING CIVIC POWER" },
    { ko: "공영방송의 시민 참여가 새로운 시민 권력으로 굳어지지 않으려면 무엇을 점검해야 하는지 살펴봅니다.", en: "Examine how civic participation in public broadcasting can avoid hardening into a new form of civic power." },
  ),
  [keyOf("briefing", "park-jinyoung-public-trip-civic-oversight")]: relation(
    { kind: "monitoring", slug: "community-chest-of-korea" },
    { ko: "공익의 기준", en: "THE STANDARD OF PUBLIC INTEREST" },
    { ko: "한 공익기관의 출장 논란에서 출발해 공익기관 전체의 설명책임과 시민 통제로 논의를 넓힙니다.", en: "Move from one travel controversy to the wider accountability and citizen oversight of public-interest institutions." },
  ),
  [keyOf("briefing", "social-solidarity-economy-youth-mall-lessons")]: relation(
    { kind: "column", slug: "beyond-polanyi-market-society-state" },
    { ko: "이론적 배경", en: "CONCEPTUAL BACKGROUND" },
    { ko: "사회적경제 지원의 실패 가능성을 국가·시장·사회의 관계라는 더 큰 틀에서 읽습니다.", en: "Place the risks of social-economy support within the wider relationship among state, market and society." },
  ),

  [keyOf("column", "when-civic-power-rules-citizens")]: relation(
    { kind: "news", slug: "president-civic-society-dialogue-representation" },
    { ko: "관련 사건", en: "RELATED EVENT" },
    { ko: "시민 권력의 개념이 실제 대통령–시민사회 간담회에서 어떤 대표성 문제로 나타났는지 확인합니다.", en: "See how the idea of civic power appears as a representation problem in a presidential civic-society meeting." },
  ),
  [keyOf("column", "do-they-represent-korean-civil-society")]: relation(
    { kind: "news", slug: "president-civic-society-dialogue-representation" },
    { ko: "사실 확인", en: "FACTUAL ACCOUNT" },
    { ko: "시민사회 대표성에 대한 논평의 출발점이 된 간담회의 확인된 사실을 살펴봅니다.", en: "Review the confirmed facts of the meeting that prompted this argument about civic representation." },
  ),
  [keyOf("column", "government-electricity-prepayment-pressure")]: relation(
    { kind: "news", slug: "regulation-reform-needs-public-accountability" },
    { ko: "정책의 다른 얼굴", en: "ANOTHER SIDE OF POLICY" },
    { ko: "기업 부담 논쟁을 정부의 규제개혁 약속과 함께 놓고 일관성을 점검합니다.", en: "Test the consistency between government pressure on firms and its promise of regulatory reform." },
  ),
  [keyOf("column", "lh-reform-politics-2026")]: relation(
    { kind: "news", slug: "lh-split-public-agency-experiment" },
    { ko: "확인된 정책", en: "THE POLICY FACTS" },
    { ko: "LH 개편 비판의 근거가 된 정부의 분리 구상과 아직 확인되지 않은 부분을 다시 봅니다.", en: "Return to the government's proposed LH split and the questions that remain unverified." },
  ),
  [keyOf("column", "beyond-polanyi-market-society-state")]: relation(
    { kind: "briefing", slug: "social-solidarity-economy-youth-mall-lessons" },
    { ko: "정책 적용", en: "POLICY APPLICATION" },
    { ko: "국가·시장·사회의 관계를 사회적경제 지원과 청년몰의 실제 정책 사례에 적용합니다.", en: "Apply the state–market–society framework to social-economy support and the youth-mall case." },
  ),
  [keyOf("column", "prosecution-reform-power-transfer-2026")]: relation(
    { kind: "briefing", slug: "prosecution-service-abolition" },
    { ko: "제도 설명", en: "INSTITUTIONAL EXPLAINER" },
    { ko: "검찰개혁에 대한 논평을 실제 조직·권한 변화와 통제장치에 관한 브리핑으로 이어갑니다.", en: "Connect the argument about prosecution reform to a briefing on actual institutional changes and safeguards." },
  ),
  [keyOf("column", "citizenship-managed-by-the-state")]: relation(
    { kind: "seed-language", slug: "democracy-not-a-king" },
    { ko: "핵심 개념", en: "CORE IDEA" },
    { ko: "국가가 시민을 관리하는 문제를 민주주의가 권력을 제한하는 원리와 연결합니다.", en: "Connect state-managed citizenship to democracy's role in limiting power." },
  ),
  [keyOf("column", "nepal-climate-crisis-conservative-seed-response")]: relation(
    { kind: "seed-language", slug: "environment-shared-condition" },
    { ko: "씨앗언어", en: "SEED LANGUAGE" },
    { ko: "기후재난의 사례에서 출발해 환경을 진영이 아닌 삶의 조건으로 다시 정의합니다.", en: "Move from a climate-disaster case to a definition of environment as a shared condition of life rather than a partisan identity." },
  ),
  [keyOf("column", "equality-rhetoric-and-two-seats-yong-hye-in")]: relation(
    { kind: "seed-language", slug: "democracy-citizens-deep-read" },
    { ko: "정치 문법 깊게 보기", en: "DEEPER POLITICAL FRAME" },
    { ko: "정치적 평등과 특혜의 문제를 권력자를 대하는 신민과 시민의 서로 다른 문법으로 확장합니다.", en: "Extend the equality-and-privilege question into the different political grammars of subjects and citizens." },
  ),
  [keyOf("column", "majority-power-must-not-command-the-judiciary")]: relation(
    { kind: "news", slug: "supreme-court-nomination-returned-in-unprecedented-clash" },
    { ko: "사건의 사실", en: "FACTS OF THE CASE" },
    { ko: "사법부 독립에 관한 논평의 출발점이 된 대법관 제청 갈등을 사실 중심으로 확인합니다.", en: "Review the facts of the judicial nomination clash behind the argument for judicial independence." },
  ),
  [keyOf("column", "random-selection-alone-does-not-make-a-public-forum")]: relation(
    { kind: "seed-language", slug: "democracy-citizens-deep-read" },
    { ko: "시민의 정치 문법", en: "THE CITIZEN'S POLITICAL GRAMMAR" },
    { ko: "무작위 선발 공론장의 한계를 시민이 권력과 맺는 관계라는 더 깊은 질문으로 이어갑니다.", en: "Extend the limits of randomly selected forums to the deeper question of how citizens relate to power." },
  ),
  [keyOf("column", "conservatives-and-the-language-of-citizens")]: relation(
    { kind: "seed-language", slug: "citizen-as-seed" },
    { ko: "시민의 정의", en: "DEFINING THE CITIZEN" },
    { ko: "보수가 되찾아야 할 시민의 언어를 씨앗시민의 자유·책임·성장이라는 개념으로 구체화합니다.", en: "Give the conservative language of citizenship a clearer form through freedom, responsibility and growth." },
  ),
  [keyOf("column", "venezuela-state-failure-and-strong-society")]: relation(
    { kind: "seed-language", slug: "democracy-not-a-king" },
    { ko: "민주의 원칙", en: "THE PRINCIPLE OF DEMOCRACY" },
    { ko: "국가 실패의 사례를 선거 이후에도 권력을 제한해야 한다는 민주주의의 원칙과 연결합니다.", en: "Connect a case of state failure to democracy's duty to limit power even after elections." },
  ),
  [keyOf("column", "ham-seok-heon-and-citizenization")]: relation(
    { kind: "seed-language", slug: "citizen-as-seed" },
    { ko: "오늘의 시민", en: "THE CITIZEN TODAY" },
    { ko: "함석헌의 씨알 사상을 오늘의 씨앗시민이 어떻게 이어받고 확장하는지 살펴봅니다.", en: "Examine how today's Seed Citizen carries forward and develops Ham Seok-heon's idea of ssial." },
  ),

  [keyOf("seed-language", "citizen-as-seed")]: relation(
    { kind: "column", slug: "conservatives-and-the-language-of-citizens" },
    { ko: "정치 언어의 적용", en: "APPLYING THE LANGUAGE" },
    { ko: "씨앗시민의 정의를 보수 정치가 잃어버린 시민의 언어라는 현실 문제에 적용합니다.", en: "Apply the definition of the Seed Citizen to the civic language conservative politics has lost." },
  ),
  [keyOf("seed-language", "public-interest-belongs-to-citizens")]: relation(
    { kind: "news", slug: "local-sports-subsidy-accountability" },
    { ko: "현실의 사례", en: "A REAL-WORLD CASE" },
    { ko: "공익의 시민화라는 원칙을 지방 체육보조금 정산 문제에 적용해 봅니다.", en: "Apply the principle of citizen-centered public interest to the local sports-grant settlement case." },
  ),
  [keyOf("seed-language", "environment-shared-condition")]: relation(
    { kind: "column", slug: "nepal-climate-crisis-conservative-seed-response" },
    { ko: "현실의 사례", en: "A REAL-WORLD CASE" },
    { ko: "환경을 삶의 조건으로 보는 관점을 네팔 기후재난과 보수의 대응이라는 구체적 사례에서 확인합니다.", en: "See environment as a condition of life through the concrete case of Nepal's climate disaster and a conservative response." },
  ),
  [keyOf("seed-language", "environment-beyond-camps-deep-read")]: relation(
    { kind: "column", slug: "nepal-climate-crisis-conservative-seed-response" },
    { ko: "관련 사례", en: "RELATED CASE" },
    { ko: "환경 언어에 대한 깊은 논의를 실제 기후재난과 정치적 대응의 문제로 이어갑니다.", en: "Carry the deeper discussion of environmental language into a real climate-disaster and political-response case." },
  ),
  [keyOf("seed-language", "democracy-not-a-king")]: relation(
    { kind: "column", slug: "majority-power-must-not-command-the-judiciary" },
    { ko: "권력 제한의 사례", en: "A CASE OF LIMITED POWER" },
    { ko: "민주가 권력을 제한하는 원리라는 정의를 사법부 독립을 둘러싼 현실 갈등에 적용합니다.", en: "Apply democracy as limited power to a real conflict over judicial independence." },
  ),
  [keyOf("seed-language", "democracy-citizens-deep-read")]: relation(
    { kind: "column", slug: "random-selection-alone-does-not-make-a-public-forum" },
    { ko: "공론장의 적용", en: "APPLYING THE IDEA" },
    { ko: "신민과 시민의 정치 문법을 국가가 설계하는 공론장의 문제에 적용합니다.", en: "Apply the political grammars of subjects and citizens to state-designed public deliberation." },
  ),

  [keyOf("monitoring", "beautiful-store")]: relation(
    { kind: "monitoring", slug: "community-chest-of-korea" },
    { ko: "공익의 원칙", en: "THE PRINCIPLE OF PUBLIC INTEREST" },
    { ko: "한 공익조직의 재정과 참여 문제를 공익의 주인이 누구인가라는 원칙으로 확장합니다.", en: "Extend one organization's finance and participation questions to the principle of who owns public interest." },
  ),
  [keyOf("monitoring", "community-chest-of-korea")]: relation(
    { kind: "news", slug: "local-sports-subsidy-accountability" },
    { ko: "최신 관련 사건", en: "LATEST RELATED CASE" },
    { ko: "법정모금기관의 구조적 질문을 지방 체육보조금 정산에서 드러난 최신 공익자금 문제와 연결합니다.", en: "Connect structural questions about a statutory fundraiser to the latest public-funding issue in local sports grants." },
  ),
  [keyOf("monitoring", "korea-football-association")]: relation(
    { kind: "news", slug: "local-sports-subsidy-accountability" },
    { ko: "최신 관련 사건", en: "LATEST RELATED CASE" },
    { ko: "축구협회 감시에서 제기한 절차와 책임의 문제를 지방 체육보조금 정산 사례로 이어갑니다.", en: "Carry questions of procedure and accountability from football governance into the local sports-grant case." },
  ),
  [keyOf("monitoring", "korea-foundation-for-suicide-prevention")]: relation(
    { kind: "monitoring", slug: "community-chest-of-korea" },
    { ko: "공익기관의 비교", en: "COMPARING PUBLIC-INTEREST INSTITUTIONS" },
    { ko: "생명존중 사업의 성과와 재정 문제를 대형 모금·배분기관의 설명책임과 비교해 봅니다.", en: "Compare accountability for suicide-prevention outcomes and funding with that of a major fundraising and allocation institution." },
  ),
  [keyOf("briefing", "yeosu-world-island-expo")]: relation(
    { kind: "briefing", slug: "2027-national-budget-revenue-debt" },
    { ko: "재정의 다음 질문", en: "THE NEXT FISCAL QUESTION" },
    { ko: "지역 국제행사의 예산과 책임 문제를 국가 예산의 수입·지출·부채 구조로 이어서 살펴봅니다.", en: "Extend the expo's questions of public spending and accountability to the national budget's revenue, expenditure and debt structure." },
  ),
};

const sectionInfo: Record<EditorialContentKind, { href: string; ko: string; en: string }> = {
  news: { href: "/news", ko: "오늘의뉴스 전체 보기", en: "All news" },
  briefing: { href: "/briefings", ko: "씨앗브리핑 전체 보기", en: "All briefings" },
  column: { href: "/columns", ko: "씨앗의 소리 전체 보기", en: "All columns" },
  "seed-language": { href: "/seed-language", ko: "씨앗언어 전체 보기", en: "All SEED Language" },
  monitoring: { href: "/monitoring", ko: "공익감시 전체 보기", en: "All public-interest watch records" },
};

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  return Boolean(editorialRelations[keyOf(kind, slug)]);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  const configured = editorialRelations[keyOf(kind, slug)];
  if (!configured) return undefined;
  const title = contentTitles[keyOf(configured.target.kind, configured.target.slug)];
  if (!title) return undefined;
  const section = sectionInfo[configured.target.kind];
  return {
    href: `${section.href}/${configured.target.slug}`,
    title: title[language],
    relationship: configured.relationship[language],
    reason: configured.reason[language],
    listHref: section.href,
    listLabel: section[language],
  };
}
