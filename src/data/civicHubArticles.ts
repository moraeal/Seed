import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

export const taxWatchCaseSlug = "korean-taxpayers-association-spending-disclosure-case-01";
export const civicNoticeSlug = "mois-public-interest-selection-committee-13-recommendation-2026";
export const civicNoticeDeadline = "2026-10-21";
const noticeUrl = "https://www.mois.go.kr/frt/bbs/type013/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000006&nttId=129595";

export const taxWatchCase: Briefing = {
  slug: taxWatchCaseSlug,
  category: "세금감시운동 사례연구 · 한국 ①",
  title: "정부가 바뀌어도 영수증을 요구한다 — 한국납세자연맹의 세금감시",
  subtitle: "정보공개 청구와 소송에서 배울 점, 공개 이후까지 이어갈 과제",
  summary: "문재인 정부와 윤석열 정부의 지출 내역을 모두 요구한 한국납세자연맹. 정권을 넘어 같은 기준을 적용한 활동과 정보공개 소송의 한계를 살펴보고, 한국형 세금감시운동이 받아들일 방법을 정리합니다.",
  date: "2026-10-03", author: "씨앗의 소리", readMinutes: 5,
  homeBriefingLeadEligible: false,
  keyHighlights: ["시민이 영수증과 지출 내역을 요구하는 일이 세금감시의 출발점입니다.", "문재인·윤석열 정부를 상대로 한 활동에서 같은 기준을 적용하는 감시 방법을 배울 수 있습니다.", "운동의 성과는 공개된 자료, 고쳐진 지출, 회수된 돈과 후속 조치로 나눠 확인해야 합니다."],
  images: [
    { src: "images/civic/tax-watch-case-01.webp", alt: "시민의 손이 돋보기로 지출 영수증과 장부를 확인하는 모습", caption: "시민이 낸 돈의 쓰임을 확인하려면 지출 기록에 접근할 수 있어야 합니다.", credit: "AI 이미지", sourceUrl: "" },
    { src: "images/civic/tax-watch-method-ko.svg", alt: "정보공개 청구, 거부 사유 확인, 불복과 소송, 지출 검증, 시정 결과 확인으로 이어지는 세금감시 방법", caption: "정보공개는 감시의 첫 단계입니다. 씨앗은 지출 검증과 시정 결과까지 이어가는 방법을 제안합니다.", credit: "씨앗의 소리 · 활동 보도와 자체 분석", sourceUrl: "", afterSection: 2, contain: true },
  ],
  placeBodyImagesBySection: true,
  content: ["정부는 시민의 세금을 걷습니다. 시민은 그 돈을 어디에 썼는지 물을 수 있어야 합니다. 납세고지서에는 기한과 의무가 적혀 있는데, 정부의 영수증은 왜 시민이 몇 년씩 소송해야 볼 수 있을까요.", "세금감시운동 사례연구의 첫 단체로 한국납세자연맹을 살펴봅니다. 여기서 주목하는 활동은 대통령실 지출에 대한 정보공개 청구와 소송입니다. 시민이 감시를 시작할 때 어떤 자료를 요구하고, 거부를 당한 뒤 어떻게 대응할 수 있는지 보여주는 사례입니다."],
  sections: [
    { title: "1. 시민의 질문을 구체적인 자료 요구로 바꾸다", paragraphs: ["한국납세자연맹은 특수활동비와 업무추진비의 집행 내역을 요구해 왔습니다. 특수활동비는 기밀 유지가 필요한 활동에 쓰도록 마련한 예산입니다. 감시의 쟁점은 기밀을 보호해야 할 범위와 시민에게 설명할 수 있는 지출을 어떻게 구분할 것인가입니다.", "막연하게 ‘돈을 낭비했다’고 외치는 데서 한 걸음 더 들어갑니다. 언제 얼마를 썼는지, 어떤 예산 항목에서 지출했는지, 결제 내역과 영수증이 있는지를 묻습니다. 질문이 구체적일수록 공개된 자료와 정부의 설명을 대조할 수 있습니다."] },
    { title: "2. 정권이 바뀌어도 지출을 물었다", paragraphs: ["연맹은 문재인 정부의 청와대 특수활동비와 의전 비용에 관한 정보공개 거부를 다퉜고, 2022년 2월 1심에서 일부 승소했습니다. 당시 조선일보 보도는 이 소송을 납세자가 정부 지출을 확인하는 문제로 소개했습니다.", "윤석열 정부 출범 뒤에도 질문을 이어갔습니다. 이데일리의 2022년 7월 5일 보도에 따르면 연맹은 그해 6월 30일 대통령실 특수활동비, 업무추진비, 저녁식사와 영화 관람 비용에 관한 자료를 청구했습니다. 결제금액과 영수증, 지출한 예산 항목을 요구한 것입니다.", "씨앗이 받아들일 첫 기준은 여기에 있습니다. 시민의 돈을 쓴 사람에게 정당과 관계없이 같은 자료를 요구해야 합니다. 감시 대상의 정치적 유불리에 따라 질문을 바꾸면 납세자의 권리도 함께 흔들립니다."] },
    { title: "3. 공개 판결과 실제 공개 사이에 남은 시간", paragraphs: ["소송에서 유리한 판단을 받는 일과 실제 자료를 확보하는 일 사이에는 간격이 있습니다. 국민일보의 2026년 8월 7일 보도에 따르면 대법원은 윤석열 정부 대통령실 지출 정보 사건의 원고 승소 부분을 깨고 서울고법으로 돌려보냈습니다. 대통령기록관 이관 이후 대통령실을 상대로 공개거부 취소를 구할 법률상 이익이 남아 있는지 다시 판단하라는 취지였습니다.", "이 보도를 기준으로 확인되는 단계는 파기환송입니다. 감시운동의 성과표에는 청구, 하급심 판단, 기록 이관, 후속 재판, 실제 공개 여부를 따로 적어야 합니다. 시민은 승소라는 소식뿐 아니라 결국 어떤 자료를 확인했는지도 알아야 합니다.", "씨앗의 판단은 분명합니다. 공개 여부를 다투는 동안 자료를 관리하는 기관이 바뀌어 시민의 확인이 더 늦어진다면, 감시운동은 기록의 이동과 공개 절차까지 추적해야 합니다. 오래 걸린 소송의 끝에서 영수증이 다시 멀어지는 문제를 남겨둘 수 없습니다."] },
    { title: "4. 받아들일 점 — 시민 누구나 따라 할 수 있는 방법", paragraphs: ["배울 점은 자료 요구를 기록으로 남기는 방식입니다. 사업명, 회계연도, 집행기관, 청구 자료를 정하고 접수일과 답변일을 보관합니다. 공개가 거부되면 거부 근거와 가려야 한다는 정보의 범위를 확인합니다. 전문가가 대응하더라도 시민이 경과를 이해할 수 있어야 합니다.", "지역 행사에도 적용할 수 있습니다. 예산서와 결산서, 계약서, 정산 자료, 감사 결과를 나란히 놓으면 준비 때의 약속과 행사 뒤의 결과를 비교할 수 있습니다. 씨앗은 이 자료 묶음과 진행 기록을 공개해, 다른 지역 시민도 자신의 문제에 적용할 수 있도록 해야 합니다."] },
    { title: "5. 비판적으로 볼 점 — 영수증 다음에는 결과가 있어야 한다", paragraphs: ["정보공개 중심의 운동을 평가할 때는 실제 낭비 시정까지 이어졌는지를 따져야 합니다. 이 글에서 검토한 대통령실 지출 보도만으로 연맹의 전체 예산 절감액이나 환수액을 계산할 수는 없습니다. 사례의 성과를 판단하려면 실제 공개된 문서와 그 뒤의 제도 변화, 회수·시정 결과가 추가로 필요합니다.", "눈에 띄는 권력자의 비용을 추적하는 활동과 함께 대규모 사업의 계약, 보조금 집행, 시설 운영비도 살펴야 합니다. 지출의 적법성, 필요성, 가격, 성과를 각각 판단해야 무엇을 고칠지 드러납니다. 확인한 사실과 아직 확인할 문제를 구분한 감시 보고서가 필요합니다."] },
    { title: "씨앗의 적용 — 공개에서 책임까지", paragraphs: ["한국형 세금감시운동은 한 사업을 끝까지 따라가는 방식으로 시작할 수 있습니다. 자료를 청구하고, 계획과 집행을 비교하고, 문제가 확인되면 시정을 요구하고, 그 답변과 결과를 다시 기록합니다.", "한국납세자연맹의 사례에서 받아들일 것은 정부가 바뀌어도 영수증을 요구하는 태도입니다. 씨앗이 더해갈 것은 그 영수증을 시민이 읽을 수 있게 설명하고, 낭비가 고쳐졌는지까지 확인하는 과정입니다. 공개된 문서 수, 확인된 문제, 시정된 지출과 회수된 돈을 구분해 기록하겠습니다."] },
  ],
  watchTitle: "이 사례에서 계속 확인할 것",
  watchPoints: ["2026년 8월 보도로 확인한 파기환송 사건의 후속 판단과 실제 공개 여부", "공개된 지출 자료가 예산·집행 기준의 변화로 이어졌는지", "사례별 자료 목록, 청구·답변 날짜, 시정·회수 결과의 공개"],
  sources: [
    { label: "조선일보 · 한국납세자연맹의 청와대 정보공개 소송 소개 (2022.2.15)", url: "https://www.chosun.com/economy/economy_general/2022/02/15/AIV3MRTCDZDPVJPV7FQOYJ4DVY/" },
    { label: "이데일리 · 윤석열 정부 지출 정보공개 청구 (2022.7.5)", url: "https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=01804006632391568" },
    { label: "국민일보 · 기록 이관 이후 대통령실 정보공개 소송 파기환송 보도 (2026.8.7)", url: "https://v.daum.net/v/20260807065907350" },
    { label: "한국납세자연맹 · 공식 홈페이지", url: "https://www.koreatax.org/" },
  ],
  sourceNote: "자료 확인일: 2026년 10월 3일. 단체의 대통령실 지출 정보공개 활동을 사례로 분석했습니다. 2026년 재판 경과는 국민일보 보도에 근거하며, 받아들일 점과 보완할 점은 씨앗의 분석입니다.",
};

export const civicNotice: Briefing = {
  slug: civicNoticeSlug,
  category: "시민운동 공지사항 · 위원 추천",
  title: "행안부 공익사업선정위원 추천, 10월 21일까지",
  subtitle: "중앙행정기관 등록 비영리민간단체가 추천 · 문서24로 공문 제출",
  summary: "행정안전부가 제13기 공익사업선정위원회 위원 추천을 받습니다. 추천권자는 중앙행정기관에 등록된 비영리민간단체입니다. 후보 자격, 제출서류, 접수 방법과 확인할 사항을 정리했습니다.",
  date: "2026-10-03", author: "씨앗의 소리", readMinutes: 4,
  homeBriefingLeadEligible: false,
  keyHighlights: ["추천 마감은 2026년 10월 21일 수요일입니다.", "추천권자는 중앙행정기관에 등록된 비영리민간단체입니다.", "추천서·개인정보 동의서·경력 증빙을 갖춰 문서24로 공문을 제출해야 합니다."],
  images: [
    { src: "images/civic/committee-recommendation.webp", alt: "시민의 손이 추천 서류를 투명한 문서함에 넣는 모습", caption: "공익사업을 심사할 사람을 추천하는 절차도 시민의 참여 통로입니다.", credit: "AI 이미지", sourceUrl: "" },
    { src: "images/civic/committee-checklist-ko.svg", alt: "추천권자 확인, 후보 자격 확인, 서류 세 종류 준비, 문서24 제출과 10월 21일 마감을 정리한 안내표", caption: "행정안전부 공고 본문을 기준으로 정리했습니다. 신청 전에는 원문과 붙임 서식을 확인하세요.", credit: "씨앗의 소리 · 행정안전부 공고", sourceUrl: noticeUrl, afterSection: 2, contain: true },
  ],
  placeBodyImagesBySection: true,
  content: ["행정안전부는 2026년 9월 18일 ‘제13기 공익사업선정위원회 위원 추천 안내’를 게시했습니다. 중앙행정기관에 등록된 비영리민간단체가 자격을 갖춘 후보자를 10월 21일까지 추천하는 절차입니다.", "공고의 정확한 명칭은 공익사업선정위원회 위원 추천입니다. 관심 있는 개인은 자신을 추천할 수 있는 단체와 후보 자격을 함께 확인해야 합니다. 시민운동 공지사항에서는 참여에 필요한 정보를 원문과 연결해 안내합니다."],
  sections: [
    { title: "누가 추천할 수 있나", paragraphs: ["추천권자는 중앙행정기관에 등록된 비영리민간단체입니다. 지방자치단체 등록 여부만으로 판단하지 말고, 단체의 등록기관을 확인해야 합니다.", "후보자는 공고에서 정한 자격 유형 가운데 자신이 해당하는 항목을 확인하고, 그 경력을 증명할 자료를 준비해야 합니다. 추천 의사가 있는 단체는 후보자의 자격과 증빙을 먼저 검토하는 편이 좋습니다."] },
    { title: "후보자에게 필요한 자격", bullets: ["비영리민간단체 임직원으로 5년 이상 활동하고 있는 사람", "대학 또는 공공연구기관의 비영리민간단체 관련 분야에서 부교수 이상이거나 이에 상당한 직의 경력이 있는 사람", "3급 이상 공무원으로 민간협력업무의 실무경험이 있는 사람", "비영리민간단체 활동경력이 있는 판사·검사·변호사·공인회계사"] },
    { title: "무엇을, 어디로 제출하나", paragraphs: ["제출서류는 추천서, 개인정보 수집·이용 동의서, 주요경력 증빙서류입니다. 추천서와 동의서는 행안부 게시물에 첨부된 안내문과 서식을 확인해 준비하세요.", "접수는 문서24를 통한 공문 제출 방식입니다. 수신처는 ‘행정안전부 민간협력공동체과’입니다. 공고는 방문·우편·이메일·팩스 접수를 받지 않는다고 명시했습니다.", "경력 증빙은 후보 유형에 맞아야 합니다. 단체 임직원은 5년 이상 활동한 경력, 교수·연구자는 관련 분야 경력, 공무원은 민간협력 실무경험, 법률·회계 전문가는 비영리민간단체 활동경력을 확인할 수 있는 자료를 제출해야 합니다."] },
    { title: "10월 21일 마감, 원문과 서식을 먼저 확인하세요", paragraphs: ["추천 기한은 2026년 10월 21일 수요일입니다. 이 안내에서 확인한 공고 본문에는 마감 시각이 적혀 있지 않습니다. 제출 시각과 세부 작성 요건은 붙임 안내문 또는 담당 부서에 확인하고 여유 있게 접수하세요.", "문의는 행정안전부 민간협력공동체과 044-205-3179입니다. 모집 인원과 임기 등 공고 본문에서 확인되지 않은 사항도 담당 부서와 붙임 자료를 통해 확인할 수 있습니다."] },
    { title: "씨앗의 관점 — 공익사업의 돈과 결과를 볼 사람", paragraphs: ["공익사업을 심사하는 자리는 시민의 돈이 어떤 활동에 쓰일지 판단하는 자리입니다. 사업의 좋은 취지와 함께 예산의 필요성, 집행의 투명성, 시민에게 돌아갈 성과를 살필 사람이 필요합니다.", "씨앗은 이 공고를 시민의 참여 통로로 소개합니다. 추천을 준비하는 단체는 후보자가 사업을 제안한 단체와 어떤 관계가 있는지, 이해관계가 있는 안건에서 어떻게 물러날지까지 확인해야 합니다. 이는 씨앗이 제안하는 심사 참여의 기준입니다. 실제 위촉과 심사에서는 적용되는 규정과 절차를 확인해야 합니다."] },
  ],
  watchTitle: "추천 전 확인할 사항",
  watchPoints: ["단체가 중앙행정기관에 등록돼 있는지", "후보자의 자격에 맞는 경력 증빙을 갖췄는지", "원문 첨부 서식과 문서24 제출·접수 내역을 확인했는지", "추가·변경 공고 또는 마감 안내가 게시됐는지"],
  sources: [{ label: "행정안전부 · 제13기 공익사업선정위원회 위원 추천 안내 (2026.9.18, 붙임 서식 포함)", url: noticeUrl }, { label: "문서24 · 온라인 공문 제출", url: "https://docu.gdoc.go.kr/" }],
  sourceNote: "자료 확인일: 2026년 10월 3일. 추천권자·자격·기한·서류·제출 방법은 행정안전부 공고 본문을 기준으로 정리했습니다. 마감 시각·모집 인원·임기와 붙임의 세부 작성 조건은 원문 첨부파일 또는 담당 부서에서 확인하세요. 공고가 변경되면 원문 안내를 우선합니다.",
};

export const civicHubTranslations: Record<string, BriefingTranslation> = {
  [taxWatchCaseSlug]: {
    category: "Tax Watch Case Studies · Korea 01",
    title: "Ask for Receipts, Whoever Governs: The Korean Taxpayers Association",
    subtitle: "Lessons from disclosure requests and litigation—and the work that follows disclosure",
    summary: "The Korean Taxpayers Association sought spending records from both the Moon Jae-in and Yoon Suk Yeol administrations. This first case study examines a consistent approach to scrutiny, the limits of disclosure litigation, and methods a Korean civic tax watchdog can adopt.",
    author: "SEED VOICE",
    keyHighlights: ["Citizens' requests for receipts and spending records are a starting point for tax scrutiny.", "Requests directed at both administrations show how a common standard can be applied across governments.", "Assess records released, spending corrected, money recovered, and follow-up action separately."],
    images: [
      { alt: "A citizen's hands examine spending receipts and a ledger through a magnifying glass", caption: "Scrutiny of taxpayers' money depends on access to spending records.", credit: "AI image" },
      { src: "images/civic/tax-watch-method-en.svg", alt: "A method moving from a disclosure request to checking refusal grounds, appeals, spending review and verified corrective action", caption: "Disclosure starts the process. SEED proposes following the records through spending review and verified corrective action.", credit: "SEED VOICE · reporting and editorial analysis" },
    ],
    content: ["Governments collect citizens' taxes. Citizens should be able to ask how that money was spent. Tax notices specify deadlines and obligations. Why should a citizen need years of litigation to inspect government receipts?", "Our first tax-watch case study examines the Korean Taxpayers Association's requests and litigation concerning presidential spending. It illustrates how citizens can specify the records they need and respond when access is refused."],
    sections: [
      { title: "1. Turn a question into a request for records", paragraphs: ["The association has sought expenditure records for special activity funds and official business expenses. Special activity funds are intended for activities requiring confidentiality. The scrutiny concerns how to distinguish genuinely confidential information from spending that can be explained to citizens.", "Its method makes the questions concrete: when was the money spent, how much, from which budget line, and what payment records or receipts exist? Specific requests allow the released documents to be compared with the government's explanation."] },
      { title: "2. Apply the same test when governments change", paragraphs: ["The association challenged refusals to disclose special activity spending and protocol costs under the Moon Jae-in administration. It won in part at first instance in February 2022. Chosun Ilbo's coverage framed the case as a taxpayer's ability to inspect government spending.", "The questions continued under Yoon Suk Yeol. Edaily reported on July 5, 2022 that the association had filed a June 30 request covering special activity funds, official business expenses, a dinner and a cinema visit. It sought payment amounts, receipts and the relevant budget categories.", "SEED's first lesson is consistency: ask people who spend public money for the same records regardless of party. Taxpayers' rights become fragile when the questions change with political convenience."] },
      { title: "3. A favorable ruling does not complete the process", paragraphs: ["A favorable court decision and actual access to records can be far apart. Kookmin Ilbo reported on August 7, 2026 that the Supreme Court had reversed the portion of a lower-court decision favoring the association in the Yoon administration spending case and remanded it to the Seoul High Court. The question was whether a legal interest in challenging the presidential office's refusal remained after records had been transferred to the Presidential Archives.", "The stage established by that report is remand. A campaign's results should distinguish the request, lower-court findings, transfer of records, subsequent proceedings and actual disclosure. Citizens need to know which documents ultimately became available.", "SEED's assessment is that watchdogs must track custody and access procedures as well as litigation. A change in the institution holding the records can further delay citizens' ability to examine spending."] },
      { title: "4. What citizens can adopt", paragraphs: ["The practical lesson is to keep a documented request trail. Identify the project, fiscal year, spending institution and records sought; retain the filing and response dates. When access is refused, examine the grounds and the specific information said to require protection. Citizens should be able to follow the process even when specialists handle the response.", "This method can also be applied to local events. Compare budgets, accounts, contracts, settlement records and audit findings with the promises made before the event. SEED should publish the document set and the case history so citizens elsewhere can apply the method to their own concerns."] },
      { title: "5. What deserves critical examination", paragraphs: ["A disclosure-focused campaign should be assessed by whether it leads to correction of waste. The presidential spending reports reviewed here do not establish the association's total budget savings or recovered funds. Such an assessment requires the documents actually released and evidence of subsequent changes, recovery or corrective action.", "High-profile spending should be examined alongside large contracts, grant expenditure and facility operating costs. Legality, necessity, price and results need separate judgments. A useful watchdog report distinguishes established findings from questions that still require evidence."] },
      { title: "SEED's application: follow disclosure through to responsibility", paragraphs: ["A Korean civic tax-watch effort can begin by following one project to its conclusion: request records, compare plans with expenditure, seek correction where problems are established, and record the response and outcome.", "The association's example offers the habit of asking for receipts whoever governs. SEED can add explanations citizens can use and follow-up on whether waste was corrected. Documents released, problems established, expenditure corrected and money recovered should be recorded separately."] },
    ],
    watchTitle: "What to follow in this case",
    watchPoints: ["Subsequent proceedings and actual disclosure after the remand reported in August 2026", "Whether released records led to changes in spending rules or implementation", "Publication of record lists, request and response dates, and verified corrective or recovery outcomes"],
    sourceLabels: ["Chosun Ilbo · presidential spending disclosure litigation (February 15, 2022)", "Edaily · disclosure request concerning Yoon administration spending (July 5, 2022)", "Kookmin Ilbo · remand following transfer of presidential records (August 7, 2026)", "Korean Taxpayers Association · official website"],
    sourceNote: "Sources checked October 3, 2026. This case examines the association's presidential-spending disclosure activity; the 2026 court update is based on Kookmin Ilbo's reporting. It does not assess the organization's complete record or calculate savings. Lessons and proposed improvements are SEED's analysis.",
  },
  [civicNoticeSlug]: {
    category: "Civic Notices · Committee Recommendations",
    title: "Recommend Public-Interest Project Selection Committee Members by October 21",
    subtitle: "Nominations by NGOs registered with central government · submit through Document24",
    summary: "South Korea's Ministry of the Interior and Safety is seeking recommendations for its 13th Public-Interest Project Selection Committee. Eligible recommending bodies are nonprofit civic organizations registered with central government agencies. Here are the qualifications, documents and submission requirements.",
    author: "SEED VOICE",
    keyHighlights: ["The recommendation deadline is Wednesday, October 21, 2026.", "Recommending bodies must be nonprofit civic organizations registered with a central government agency.", "Submit a recommendation, personal-information consent and career evidence as an official document through Document24."],
    images: [
      { alt: "A citizen's hand places recommendation papers in a transparent document tray", caption: "Recommending people to review public-interest projects is one avenue of civic participation.", credit: "AI image" },
      { src: "images/civic/committee-checklist-en.svg", alt: "Checklist covering the recommending organization, candidate qualifications, three document types, Document24 and the October 21 deadline", caption: "Based on the ministry's notice. Check the original and attached forms before submitting.", credit: "SEED VOICE · Ministry of the Interior and Safety notice" },
    ],
    content: ["On September 18, 2026, South Korea's Ministry of the Interior and Safety published a notice seeking recommendations for its 13th Public-Interest Project Selection Committee. Nonprofit civic organizations registered with central government agencies may recommend qualified candidates by October 21.", "The official process is a recommendation of committee members. Interested individuals should check both their qualifications and whether an eligible organization can recommend them. Civic Notices connects readers with the original participation information."],
    sections: [
      { title: "Who may recommend a candidate?", paragraphs: ["The recommending body must be a nonprofit civic organization registered with a central government agency. Registration only with a local authority should not be assumed to meet this requirement; verify the organization's registering institution.", "Candidates should identify the qualification category they meet and prepare evidence. Organizations intending to recommend someone should review the qualifications and supporting documents first."] },
      { title: "Candidate qualifications", bullets: ["A nonprofit civic organization officer or employee currently active with at least five years of service", "An associate professor or higher, or someone with equivalent career experience, in a nonprofit civic organization-related field at a university or public research institution", "A Grade 3 or higher civil servant with practical experience in public–civil society cooperation", "A judge, prosecutor, lawyer or certified public accountant with experience in nonprofit civic organizations"] },
      { title: "Documents and submission channel", paragraphs: ["Required documents are a recommendation, consent to collection and use of personal information, and evidence of principal career experience. Check the notice's attached guidance and forms when preparing the recommendation and consent.", "Submit an official document through Document24, addressed to the Ministry of the Interior and Safety's division responsible for civic cooperation and communities. The notice excludes visits, postal mail, email and fax.", "Career evidence must match the candidate's category: at least five years of NGO service for officers or employees; related-field experience for academics and researchers; practical civic-cooperation work for civil servants; or NGO activity for legal and accounting professionals."] },
      { title: "October 21 deadline: check the original first", paragraphs: ["The deadline is Wednesday, October 21, 2026. The notice text reviewed here does not specify a closing time. Confirm the time and detailed preparation requirements through the attachment or responsible division, and submit early.", "The ministry's contact number is 044-205-3179. The number of positions, term of office and other details absent from the notice text should also be checked against the attached guidance or with the responsible division."] },
      { title: "SEED's view: people who examine money and results", paragraphs: ["Reviewing public-interest projects involves judging how citizens' money will be used. Reviewers should examine a project's stated purpose alongside the necessity of its budget, transparency of spending and results for citizens.", "SEED presents this notice as an avenue for participation. Recommending organizations should also examine candidates' relationships with applicant organizations and how they would withdraw from matters involving their interests. These are SEED's proposed standards; actual appointments and reviews require checking the applicable rules and procedures."] },
    ],
    watchTitle: "Check before recommending",
    watchPoints: ["The organization is registered with a central government agency", "Career evidence matches the candidate's qualification category", "Original forms and the Document24 submission record have been checked", "Any supplementary notice, revision or deadline update"],
    sourceLabels: ["Ministry of the Interior and Safety · 13th committee recommendation notice, September 18, 2026 (with attached forms)", "Document24 · online official-document submission"],
    sourceNote: "Checked October 3, 2026. Eligibility, qualifications, deadline, documents and submission channel are based on the ministry's notice text. Check the attachment or responsible division for the closing time, number of positions, term and detailed form requirements. Any revised official notice takes precedence.",
  },
};
