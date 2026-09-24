import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import type { PublicInterestWatchCase } from "../data/publicInterestWatch";

type Lang = "ko" | "en";
type L = { ko: string; en: string };
type Point = { year: number; amount?: number; secondary?: number; note: L };
type Story = {
  headline: L; deck: L; image: string; imageAlt: L;
  cards: { label: L; value: L; note: L }[];
  lead: L[]; seriesTitle: L; seriesIntro: L; points: Point[]; seriesNote: L;
  chapters: { title: L; paragraphs: L[] }[];
  checks: { question: L; measure: L }[];
  additionalSources?: { label: L; url: string }[];
  caution: L;
};

const stories: Record<string, Story> = {
  "beautiful-store": {
    headline: { ko: "기부한 물건은 어디로 갔나…아름다운가게 395억 원의 다음 장부", en: "Where do donated goods go? The next ledger behind Beautiful Store's revenue" },
    deck: { ko: "2025년 감사보고서의 돈과 물건을 시민의 질문으로 다시 읽는다. 10년 장부는 확인한 연도부터 채운다.", en: "Reading the 2025 audit through citizens' questions about money and goods, and building a ten-year ledger only from verified years." },
    image: "/images/monitoring/beautiful-store-ledger.webp",
    imageAlt: { ko: "재사용 물품과 회계 자료를 함께 놓은 상징 이미지", en: "Conceptual image of reused goods beside accounting papers" },
    cards: [
      { label: { ko: "2025 사업수익", en: "2025 program revenue" }, value: { ko: "394.8억 원", en: "KRW 39.48bn" }, note: { ko: "기부금 81.2억 + 자원순환 277.7억 등", en: "Includes donations and circulation income" } },
      { label: { ko: "개인·공익활동 지원비", en: "Individual / civic support" }, value: { ko: "39.0억 원", en: "KRW 3.90bn" }, note: { ko: "사업비의 한 항목, 전체 공익효과는 아님", en: "One cost category, not total public impact" } },
      { label: { ko: "연말 현금 / 장기차입금", en: "Cash / long-term debt" }, value: { ko: "155.4억 / 110.6억", en: "KRW 15.54bn / 11.06bn" }, note: { ko: "서로 상계하거나 잉여금으로 대체할 수 없음", en: "Distinct balance-sheet items" } },
    ],
    lead: [
      { ko: "옷 한 벌을 기부하면 어떤 길을 갈까. 매장에서 팔리는지, 다시 쓰일 수 있는 다른 곳으로 가는지, 폐기되는지. 시민에게는 물건의 행방이 곧 나눔의 성과다. 아름다운가게의 2025년 사업수익은 394억 7,764만 원이지만 감사보고서의 재무제표만 읽어서는 기부한 물건 한 점의 마지막 장면이 보이지 않는다.", en: "A donated coat may be sold, reused elsewhere or discarded. Its destination is part of what giving means to citizens. Beautiful Store reported KRW 39.478 billion in 2025 program revenue, but its financial statements alone cannot show the final path of an individual donation." },
      { ko: "외부감사인은 재무제표가 중요성의 관점에서 공정하게 표시됐다고 판단했다. 그 의견은 회계 표시의 신뢰에 관한 것이다. 물품이 얼마나 재사용됐고, 지원을 받은 이웃의 삶이 어떻게 달라졌는지는 별도의 사업자료로 확인해야 한다.", en: "The independent auditor found the financial statements fairly presented in all material respects. That judgment concerns accounting presentation. Reuse rates and changes in recipients' lives require separate program evidence." },
    ],
    seriesTitle: { ko: "10년 장부: 아직 한 해만 채웠다", en: "Ten-year ledger: one year verified so far" },
    seriesIntro: { ko: "2016~2025년을 같은 사업수익 정의로 나열한다. 공개 연차보고서가 있다는 사실과 비교 가능한 값을 검증했다는 것은 다르다. 확인하지 않은 칸은 숫자를 만들지 않고 비워 둔다.", en: "A 2016–25 series needs one consistent revenue definition. The existence of annual reports does not itself verify a comparable figure. Unchecked years remain blank." },
    points: Array.from({ length: 10 }, (_, i) => ({ year: 2016 + i, amount: i === 9 ? 394.7764 : undefined, note: i === 9 ? { ko: "2025 감사보고서 사업수익", en: "2025 audited program revenue" } : { ko: "동일 기준 검증 대기", en: "Comparable figure pending" } })),
    seriesNote: { ko: "단위 억 원. 2025년 수치는 씨앗이 보관한 아름다운가게 2025 감사보고서 재무제표. 2016~2024년 증감률은 산출하지 않았다. 보고서별 회계 분류와 수익 인식 기준을 대조한 뒤 이 표를 갱신한다.", en: "KRW 100m units. The 2025 number comes from SEED's archived audit. No 2016–24 growth rate is calculated. We will update after checking revenue recognition and classifications across reports." },
    chapters: [
      { title: { ko: "394억 원 가운데 물품 판매는 277억 원", en: "Circulation accounted for KRW 27.77bn" }, paragraphs: [
        { ko: "사업수익 중 자원재순환사업수익은 277억 6,784만 원, 기부금수익은 81억 1,745만 원이다. 같은 해 자원재순환사업 비용은 251억 1,353만 원이다. 수익과 비용의 단순 차이를 '나눔에 쓸 수 있는 이익'으로 보면 안 된다. 공통 인력과 시설, 다른 사업, 회계 분류를 함께 보아야 한다.", en: "Circulation revenue was KRW 27.768 billion and donation revenue KRW 8.117 billion; circulation costs were KRW 25.114 billion. Their simple difference is not a freely available grant surplus. Shared staff, premises, other programs and accounting classifications matter." },
        { ko: "필요한 다음 자료는 접수한 물품의 수량, 판매·재사용·재활용·폐기 비율, 품목별 처리비용이다. 판매액이 늘어도 버려지는 물건이 더 많아졌다면 순환 효과를 다르게 읽어야 한다. 이런 연결표가 아직 기사 자료에 없다.", en: "The next record is a count of goods received, sold, reused, recycled and discarded, with costs by category. Rising sales would tell a different story if disposal also rose. The linked record is not yet in this article's source set." },
      ] },
      { title: { ko: "39억 원의 지원은 어떤 변화를 남겼나", en: "What changed after KRW 3.90bn in support?" }, paragraphs: [
        { ko: "개인 및 공익활동지원사업 비용은 39억 386만 원이다. 얼마를 썼는지와 누구에게 무엇이 달라졌는지는 다른 질문이다. 지원 대상의 선정 기준과 지역별 분포, 종료 뒤 생활 안정이나 단체 활동의 지속 여부, 중단된 사업까지 공개되어야 시민이 효과를 판단할 수 있다.", en: "Individual and civic support cost KRW 3.904 billion. Amount spent and change achieved are separate questions. Selection criteria, regional distribution, follow-up stability and discontinued programs would let citizens evaluate results." },
        { ko: "연말 미처분이익잉여금은 364억 7,168만 원, 현금및현금성자산은 155억 3,717만 원, 장기차입금은 110억 6,378만 원이다. 잉여금을 모두 손에 쥔 현금처럼 취급할 수 없다. 자산의 형태, 용도가 이미 정해진 돈, 차입 상환계획을 나란히 보여 달라는 이유다.", en: "Year-end retained earnings were KRW 36.472 billion, cash KRW 15.537 billion and long-term borrowing KRW 11.064 billion. Retained earnings are not cash in hand. The composition, restricted funds and debt repayment plan need to be shown together." },
      ] },
    ],
    checks: [
      { question: { ko: "기부물품 100점의 행방", en: "Where 100 donated items went" }, measure: { ko: "접수·판매·재사용·재활용·폐기 수량을 품목·지역·연도별로 요청", en: "Request yearly item counts by category, region and final destination" } },
      { question: { ko: "지원 이후의 삶", en: "Life after support" }, measure: { ko: "선정률·첫 지원 비율·6개월 뒤 결과·실패 사례를 개인정보 보호하에 추적", en: "Track selection, first-time awards, six-month outcomes and setbacks privately" } },
      { question: { ko: "축적된 자산의 사용계획", en: "Plan for accumulated assets" }, measure: { ko: "현금·부동산·지정재원·차입금·3년 투자계획을 한 표로 대조", en: "Reconcile cash, property, restricted funds, debt and a three-year plan" } },
    ],
    caution: { ko: "2025 감사의견은 적정이다. 이 기사는 회계 부정이 확인됐다는 주장을 하지 않는다. 10년 증감은 비교 가능한 과거 수치를 확인한 뒤에만 계산한다.", en: "The 2025 audit opinion was unqualified. This article makes no allegation of accounting fraud and does not calculate ten-year growth without comparable earlier data." },
  },
  "korea-football-association": {
    headline: { ko: "축구협회 예산 1,387억 원…구장 건립비를 걷어내면 무엇이 보이나", en: "KFA's KRW 138.7bn budget: what remains after separating the stadium project?" },
    deck: { ko: "2026년 예산과 2024년 감사 27건을 함께 읽는다. 승인 예산, 실제 지출, 사업 성과를 구분하는 추적 기사.", en: "Reading the 2026 budget alongside 27 audit findings, while distinguishing approved allocations, actual spending and outcomes." },
    image: "/images/monitoring/kfa-budget-watch.webp",
    imageAlt: { ko: "축구공과 닫힌 예산 서류가 놓인 경기장 상징 이미지", en: "Conceptual photograph of a football and budget folder by a pitch" },
    cards: [
      { label: { ko: "2026 승인 총예산", en: "2026 approved total" }, value: { ko: "1,387억 원", en: "KRW 138.7bn" }, note: { ko: "일반 1,048억 + 풋볼파크 339억", en: "General 104.8bn + Football Park 33.9bn" } },
      { label: { ko: "대표팀 편성", en: "National teams" }, value: { ko: "320억 원", en: "KRW 32.0bn" }, note: { ko: "일반예산의 약 30.5%, 승인액", en: "30.5% of approved general budget" } },
      { label: { ko: "2024 문체부 감사", en: "2024 ministry audit" }, value: { ko: "27건", en: "27 findings" }, note: { ko: "행정 감사 지적, 법원 확정판결과 구분", en: "Administrative findings; litigation is separate" } },
    ],
    lead: [
      { ko: "대표팀의 한 경기는 누구나 본다. 그 경기를 가능하게 하는 돈과 의사결정은 잘 보이지 않는다. 대한축구협회가 승인한 2026년 예산은 1,387억 원이다. 그중 339억 원이 코리아풋볼파크에 편성됐다. 전체 금액 하나만 보면 시설공사가 끝나갈 때 예산이 줄어드는 이유와 일상적인 축구사업의 규모가 뒤섞인다.", en: "The national team's matches are visible. The money and decisions behind them are less so. KFA approved a KRW 138.7 billion budget for 2026, including KRW 33.9 billion for Korea Football Park. One total obscures the difference between changing construction costs and recurring football programs." },
      { ko: "문화체육관광부는 2024년 특정감사에서 27건의 위법·부당 업무처리를 확인했다고 발표했다. 협회는 일부 판단을 다투고 있다. 시민이 볼 것은 지적의 제목만이 아니라 건마다 어떤 조치가 끝났고 어떤 쟁점이 소송 중이며, 재발 방지 규정이 실제 작동하는가다.", en: "The ministry reported 27 unlawful or improper practices in its 2024 special audit. KFA contests some conclusions. Citizens need a finding-by-finding record of remedies, disputes and whether revised procedures work." },
    ],
    seriesTitle: { ko: "10년 추적판: 총액과 시설비를 따로", en: "Ten-year tracker: total and facility budget separately" },
    seriesIntro: { ko: "승인 예산의 일부 연도만 연결됐다. 공란은 0원이 아니다. 2023~2025년 수치는 당시 이사회 발표를 인용한 보도, 2026년은 협회 발표 기준으로, 결산 지출과 다르다.", en: "Only selected approved budgets are linked. Blanks are not zero. 2023–25 figures come from contemporary reports of board decisions; 2026 comes from KFA. None is actual expenditure." },
    points: Array.from({ length: 11 }, (_, i) => { const year = 2016 + i; const values: Record<number, [number, number | undefined]> = { 2023: [1581, undefined], 2024: [1876, 855], 2025: [2049, 941], 2026: [1387, 339] }; const v = values[year]; return { year, amount: v?.[0], secondary: v?.[1], note: v ? { ko: year === 2026 ? "협회 발표 승인예산" : "당시 이사회 발표 보도", en: year === 2026 ? "KFA approved budget" : "Contemporary board-decision report" } : { ko: "동일 기준 검증 대기", en: "Comparable figure pending" } }; }),
    seriesNote: { ko: "단위 억 원. 2024·2025년 시설비 각각 855억·941억 원, 2026년 339억 원. 2023년 시설비 분리값과 2016~2022년 승인액은 이 기사에서 미검증. 2025년 2,049억→2026년 1,387억 감소는 시설 예산 변화의 영향을 크게 받는다. 일반예산은 2025년 1,108억→2026년 1,048억 원이다.", en: "KRW 100m units. Facility allocations: 2024 855, 2025 941 and 2026 339. We have not verified a separate 2023 facility figure or 2016–22 budgets. The 2025–26 total drop largely reflects construction allocations; general budgets move from 1,108 to 1,048." },
    chapters: [
      { title: { ko: "대표팀 320억, 풀뿌리 축구는 얼마인가", en: "KRW 32bn for national teams; what reaches grassroots?" }, paragraphs: [
        { ko: "2026년 일반예산 1,048억 원 중 대표팀 운영에 320억 원이 편성됐다. 기술 발전·지도자 육성 138억 원, 국내 대회 103억 원, 풀뿌리 축구 83억 원도 협회가 제시했다. 각 항목은 승인된 예산이지 지출 성적표가 아니다. 여자축구와 생활축구의 참여 인원, 접근 가능한 시설, 선수 보호 결과까지 연결해야 사업 효과를 알 수 있다.", en: "Of the KRW 104.8 billion general budget, KRW 32 billion goes to national teams. KFA also lists KRW 13.8 billion for technical development and coaches, KRW 10.3 billion for domestic competitions and KRW 8.3 billion for grassroots football. These are allocations, not results; participation, access and safeguarding outcomes must follow." },
        { ko: "코리아풋볼파크는 총사업비와 차입·보조금, 공정률, 완공 뒤 유지비를 별도 원장으로 보여야 한다. 그래야 건설비 증가가 일상 사업을 밀어내는지, 시설이 지역 선수와 시민에게 실제 열리는지 확인할 수 있다.", en: "Football Park needs its own ledger of total cost, loans, subsidies, progress and future maintenance. That is how to see whether construction crowds out recurring programs and whether the facility is actually accessible." },
      ] },
      { title: { ko: "감사 27건, 조치 27줄이 필요하다", en: "Twenty-seven findings need twenty-seven follow-up rows" }, paragraphs: [
        { ko: "감사에는 국가대표 지도자 선임, 풋볼파크 차입과 보조금, 축구인 사면, 비상근 임원 자문료, 지도자 강습회가 포함됐다. 문체부는 19명에 대한 문책·주의 등도 요구했다. 협회는 일부 지적에 사실관계와 규정 해석이 다르다고 반론했고 관련 소송도 이어졌다. 감사의 행정 판단을 확정된 형사·사법 판단처럼 말해서는 안 된다.", en: "The audit covered coach appointments, Park financing and subsidies, pardons, non-executive advisory fees and licensing courses. The ministry sought measures involving 19 people. KFA disputes some facts and interpretations, with litigation. Administrative findings must not be described as final court rulings." },
        { ko: "한 줄짜리 '개선 완료' 공지만으로는 부족하다. 지적별 책임 부서와 기한, 협회의 반론, 판결 경과, 바뀐 규정의 실제 적용 사례를 같은 표에 놓아야 다음 감독 선임 때 절차가 지켜지는지 판단할 수 있다.", en: "A generic 'completed' notice is insufficient. Each finding needs its owner, deadline, KFA response, litigation status and an example of the revised rule in practice." },
      ] },
    ],
    checks: [
      { question: { ko: "시설사업의 실제 비용", en: "Real cost of the facility" }, measure: { ko: "승인액·결산액·계약 변경·차입과 운영비를 연도별 분리", en: "Separate approved budget, outturn, contract changes, loans and operations by year" } },
      { question: { ko: "27건 감사 후속", en: "Follow-up on 27 findings" }, measure: { ko: "건별 완료 증빙, 이견, 소송 상태를 공개표로 대조", en: "Match evidence of remedies, disagreements and case status finding by finding" } },
      { question: { ko: "축구의 공익 성과", en: "Football's public outcomes" }, measure: { ko: "여자·유소년·생활축구 참여와 지역 격차, 선수 보호 지표를 예산에 연결", en: "Connect spending to participation, regional access and player protection" } },
    ],
    additionalSources: [
      { label: { ko: "2024년 승인예산 이사회 발표 보도", en: "Report of KFA's 2024 board-approved budget" }, url: "https://v.daum.net/v/K40ZyL5JpL" },
      { label: { ko: "2025년 승인예산 이사회 발표 보도", en: "Report of KFA's 2025 board-approved budget" }, url: "https://v.daum.net/v/64dvOUDxvx" },
    ],
    caution: { ko: "총예산은 시설 건립비에 따라 흔들리므로 일반예산과 분리해 읽어야 한다. 승인예산은 결산액이 아니다. 감사 지적과 협회의 반론, 법원 판단을 구분한다.", en: "Construction distorts the total, so read general and facility budgets separately. Approved budgets are not outturns. Audit findings, KFA responses and judgments are distinct." },
  },
  "korea-foundation-for-suicide-prevention": {
    headline: { ko: "자살예방 708억 원, 재단 몫 370억 원…삶의 조건에는 얼마가 닿나", en: "KRW 70.8bn for prevention, KRW 37.0bn at the foundation: what reaches daily life?" },
    deck: { ko: "정부 전체와 재단 예산을 분리하고, 상담·고위험군 사업의 실적이 실제 도움으로 이어졌는지 추적한다.", en: "Separating government-wide and foundation budgets, then following whether program activity becomes effective help." },
    image: "/images/monitoring/kfsp-community-care.webp",
    imageAlt: { ko: "의자 두 개와 전화기가 놓인 돌봄 공간의 상징 이미지", en: "Conceptual image of two chairs and a telephone in a supportive room" },
    cards: [
      { label: { ko: "2026 정부 전체 분야", en: "2026 ministry-wide field" }, value: { ko: "708억 원", en: "KRW 70.8bn" }, note: { ko: "2025 본예산 562억 원 대비 146억 증가", en: "Up KRW 14.6bn from 2025 original budget" } },
      { label: { ko: "2026 재단 자체", en: "Foundation budget" }, value: { ko: "370.4억 원", en: "KRW 37.04bn" }, note: { ko: "정부 전체 예산과 더하면 중복 가능", en: "Cannot be added to government total" } },
      { label: { ko: "재단 민관협력 사업", en: "Civic partnership line" }, value: { ko: "7.0억 원", en: "KRW 0.70bn" }, note: { ko: "재단 예산의 1.9%, 전액 직접보조금 아님", en: "1.9% of foundation budget; not all grants" } },
    ],
    lead: [
      { ko: "위기에 놓인 사람이 전화를 걸었을 때 얼마나 빨리 연결될까. 상담 뒤 다시 도움을 받을 수 있을까. 자살예방 사업의 성과는 홍보물을 몇 장 만들었는지가 아니라 그 사람의 곁에 지원이 이어지는가로 물어야 한다. 2026년 보건복지부 자살예방 분야 전체 예산은 708억 원이다. 한국생명존중희망재단의 수입·지출 예산은 그 안에서 별도로 공시된 370억 4,200만 원이다.", en: "When someone calls for help, how fast is the answer and does support continue afterward? Program impact cannot be judged by publicity counts alone. The ministry's 2026 prevention field budget is KRW 70.8 billion; the foundation separately discloses its own KRW 37.042 billion budget." },
      { ko: "재단은 2021년 두 중앙기관을 통합해 출범했다. 따라서 재단 명의로 2016년부터 10년 치 예산 증가율을 말할 수 없다. 이 기사에서는 출범 전을 '해당 없음'으로, 출범 뒤 확인하지 못한 해는 '검증 대기'로 표시한다.", en: "The foundation began in 2021 through the merger of two national centers. A ten-year growth rate under its name would be false. Pre-foundation years are marked not applicable, later unverified figures pending." },
    ],
    seriesTitle: { ko: "10년 관찰창: 출범 전과 정부·재단을 구별", en: "Ten-year window: before launch, ministry and foundation" },
    seriesIntro: { ko: "예산 시계열은 같은 기관·같은 정의로만 비교한다. 아래 정부 전체 2025·2026은 본예산 기준이다. 재단 자체 예산은 2026 값만 검증했다.", en: "Budget trends require the same institution and definition. The two ministry figures are original budgets. Only the 2026 foundation amount is verified here." },
    points: Array.from({ length: 11 }, (_, i) => { const year = 2016 + i; return { year, amount: year === 2026 ? 708 : year === 2025 ? 562 : undefined, secondary: year === 2026 ? 370.42 : undefined, note: year < 2021 ? { ko: "재단 출범 전", en: "Before foundation" } : year === 2025 ? { ko: "정부 전체 본예산", en: "Ministry original budget" } : year === 2026 ? { ko: "정부 전체 / 재단 자체", en: "Ministry / foundation" } : { ko: "동일 기준 검증 대기", en: "Comparable figure pending" } }; }),
    seriesNote: { ko: "단위 억 원. 정부 전체 2025년 562억→2026년 708억 원(약 26.0% 증가)은 보건복지부 발표. 재단 2026년 370억 4,200만 원은 알리오. 서로 포함 관계가 있는 예산을 합산하지 않는다. 2016~2020년은 현 재단 출범 전이며 2021~2025년 재단 예산은 이 기사에서 검증 대기.", en: "KRW 100m units. The ministry's original budget grew from 562 in 2025 to 708 in 2026 (about 26%). ALIO lists the foundation's 2026 budget at 370.42. Do not add overlapping scopes. The foundation did not exist in 2016–20; its 2021–25 budgets await verification here." },
    chapters: [
      { title: { ko: "돈의 지도에서 헷갈리기 쉬운 두 칸", en: "Two easily confused budget categories" }, paragraphs: [
        { ko: "재단 예산의 수입은 정부보조금 357억 4,200만 원과 기타사업수입 13억 원이다. 지출 분류는 인건비 109억 3,000만 원, 경상운영비 19억 4,400만 원, 사업비 241억 6,800만 원이다. 인건비와 경상운영비의 합계 128억 7,400만 원(34.8%)을 별도의 주요사업표에 적힌 '재단 운영' 77억 2,200만 원(20.8%)과 더하거나 같은 개념으로 읽으면 중복된다.", en: "Income comprises KRW 35.742 billion in government subsidies and KRW 1.3 billion in other program revenue. Expenditure comprises KRW 10.93 billion in personnel, KRW 1.944 billion in current operations and KRW 24.168 billion in programs. Personnel plus current operations (34.8%) is a different classification from the separate 'foundation operations' program (20.8%); they must not be added or conflated." },
        { ko: "주요사업표의 고위험군 발굴지원은 178억 5,400만 원, 109 상담전화 운영지원은 40억 3,600만 원, 온라인 돌봄은 9억 7,100만 원, 민관협력은 7억 300만 원이다. 7억 300만 원은 재단 전체의 1.9%다. 그렇다고 전액이 시민단체에 지급된다고 해석할 수는 없다. 최종 집행 주체와 수혜 사업을 확인해야 한다.", en: "The program table lists KRW 17.854 billion for high-risk identification, KRW 4.036 billion for hotline 109, KRW 971 million for online care and KRW 703 million for partnerships. The last line is 1.9% of the foundation budget, but is not necessarily all direct grants to civic groups. Final recipients must be traced." },
      ] },
      { title: { ko: "상담 건수 다음에 필요한 숫자", en: "The numbers needed after call counts" }, paragraphs: [
        { ko: "교육을 몇 번 했고 몇 명에게 연락했는지는 시작점이다. 109 응답률과 기다린 시간, 지역 서비스 연결률, 연결 뒤 중단과 재접촉, 당사자가 체감한 안전과 생활 여건을 개인정보를 보호하며 집계해야 한다. 실업·부채·주거불안·고립처럼 위기를 키우는 조건을 다루는 사업비도 의료·상담 사업과 구분해 보아야 한다.", en: "Training sessions and contacts are a starting point. Answer rates, waiting times, referral completion, disengagement, follow-up and people's perceived safety and living conditions need privacy-protecting measures. Spending that addresses debt, housing, work and isolation also needs to be distinguishable from clinical and counseling programs." },
        { ko: "인구 10만 명당 자살률은 2021년 26.0명, 2022년 25.2명, 2023년 27.3명, 2024년 29.1명이었다. 2026년 상반기 잠정 사망자 수는 전년 동기보다 11.8% 줄었다. 국가 통계의 상승도 감소도 재단 한 곳의 성적표로 곧장 돌릴 수 없다. 연령·지역·생활조건별 변화를 독립적으로 분석하고 사업의 기여를 따로 평가해야 한다.", en: "Suicide rates per 100,000 were 26.0 in 2021, 25.2 in 2022, 27.3 in 2023 and 29.1 in 2024. Provisional deaths in the first half of 2026 were 11.8% lower year on year. Neither national rise nor fall is a direct report card for one institution. An independent assessment must separate demographic and social changes from program contribution." },
      ] },
    ],
    checks: [
      { question: { ko: "상담의 연결과 지속", en: "Connection and continuity" }, measure: { ko: "109 응답·대기·연계·재접촉을 월별·지역별 개인정보 보호 통계로 요청", en: "Request privacy-safe monthly and regional response, wait, referral and follow-up data" } },
      { question: { ko: "민관협력의 실제 도착지", en: "Where civic partnership money goes" }, measure: { ko: "7억 300만 원의 공모·집행·최종 수혜기관과 직접지원액 확인", en: "Trace the KRW 703m line through awards, outturn and final recipients" } },
      { question: { ko: "예산과 사망률 사이", en: "Budgets and mortality" }, measure: { ko: "지역·연령·생활조건별 결과와 사업 기여도를 독립 평가", en: "Independently evaluate outcomes by region, age and living conditions" } },
    ],
    caution: { ko: "국가 자살률은 여러 사회적 요인의 영향을 받는다. 2026년 상반기 수치는 잠정 사망자 수이지 확정 연간 자살률이 아니다. 위기에 놓였다면 자살예방상담전화 109, 긴급전화 112·119에 연락할 수 있다.", en: "National suicide rates reflect many social factors. First-half 2026 deaths are provisional, not a final annual rate. In Korea, immediate help is available at hotline 109 or emergency numbers 112/119." },
  },
};

export default function InstitutionWatchArticle({ item, language }: { item: PublicInterestWatchCase; language: Lang }) {
  const story = stories[item.slug];
  const ko = language === "ko";
  const t = (x: L) => x[language];
  const max = Math.max(...story.points.map((p) => p.amount ?? 0), 1);
  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page max-w-5xl py-8 sm:py-12">
      <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "공익감시 목록" : "Public-Interest Watch"}</Link>
      <p className="section-kicker mt-6">PUBLIC-INTEREST WATCH · {t(item.organization)}</p>
      <h1 className="article-detail-title mt-3">{t(story.headline)}</h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-charcoal/70">{t(story.deck)}</p>
      <p className="mt-4 text-xs text-charcoal/50">{ko ? "자료 확인·수정 2026.09.24 · 추적 중" : "Verified and updated 24 September 2026 · Ongoing watch"}</p>
    </div></header>
    <div className="container-page max-w-4xl pt-8 sm:pt-11">
      {item.supportNote && <aside className="mb-6 rounded-lg bg-navy p-5 text-sm font-semibold leading-7 text-white">{t(item.supportNote)}</aside>}
      <figure><img src={story.image} alt={t(story.imageAlt)} className="aspect-[16/9] w-full object-cover"/><figcaption className="mt-2 text-xs leading-5 text-charcoal/55">{ko ? "씨앗의 소리가 제작한 AI 상징 이미지. 실제 기관·회계문서·취재 현장의 사진은 아닙니다." : "AI editorial illustration by Seed Voice, not a photograph of an actual institution, document or reporting scene."}</figcaption></figure>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">{story.cards.map((card) => <div key={card.label.ko} className="border-t-4 border-green-deep bg-white p-5"><p className="text-xs font-bold text-charcoal/60">{t(card.label)}</p><p className="mt-2 text-xl font-extrabold text-navy sm:text-2xl">{t(card.value)}</p><p className="mt-2 text-xs leading-5 text-charcoal/55">{t(card.note)}</p></div>)}</div>
      <div className="mx-auto mt-11 max-w-[720px] space-y-5 text-[16px] leading-8 text-charcoal/85 sm:text-[17px]">{story.lead.map((p) => <p key={p.ko}>{t(p)}</p>)}</div>
      <section className="mt-12"><h2 className="text-2xl font-extrabold text-navy">{t(story.seriesTitle)}</h2><p className="mt-3 text-sm leading-7 text-charcoal/65">{t(story.seriesIntro)}</p>
        <div className="mt-5 overflow-x-auto bg-white p-5"><div className="min-w-[520px]"><div className="flex h-36 items-end gap-1 border-b border-charcoal/20">{story.points.map((p) => <div key={p.year} className="flex h-full flex-1 items-end justify-center gap-0.5">{p.amount === undefined ? <span className="mb-1 block h-1 w-3 bg-charcoal/20"/> : <><span className="w-2/5 bg-green-deep" style={{ height: `${p.amount / max * 100}%` }}/>{p.secondary !== undefined && <span className="w-2/5 bg-gold" style={{ height: `${p.secondary / max * 100}%` }}/>}</>}</div>)}</div><div className="mt-2 flex gap-1 text-center text-[10px] text-charcoal/60">{story.points.map((p) => <span key={p.year} className="flex-1">{String(p.year).slice(2)}</span>)}</div></div><p className="mt-3 text-xs text-charcoal/55">{ko ? "초록: 주 지표 / 금색: 별도 범위 또는 시설비 / 회색: 미확인·해당 없음" : "Green: primary series / gold: separate scope or facility / grey: unverified or N/A"}</p></div>
        <div className="mt-4 overflow-x-auto border border-green-deep/15 bg-white"><table className="w-full min-w-[500px] text-sm"><thead className="bg-green-deep text-white"><tr><th className="p-3 text-left">{ko ? "연도" : "Year"}</th><th className="p-3 text-right">{ko ? "주 지표 (억 원)" : "Primary (KRW 100m)"}</th><th className="p-3 text-right">{ko ? "별도 범위 (억 원)" : "Separate scope"}</th><th className="p-3 text-left">{ko ? "자료 상태" : "Status"}</th></tr></thead><tbody>{story.points.map((p) => <tr key={p.year} className="border-t border-green-deep/10"><td className="p-3 font-bold">{p.year}</td><td className="p-3 text-right tabular-nums">{p.amount?.toLocaleString("ko-KR") ?? "—"}</td><td className="p-3 text-right tabular-nums">{p.secondary?.toLocaleString("ko-KR") ?? "—"}</td><td className="p-3 text-xs text-charcoal/65">{t(p.note)}</td></tr>)}</tbody></table></div><p className="mt-3 text-xs leading-6 text-charcoal/55">{t(story.seriesNote)}</p>
      </section>
      {story.chapters.map((chapter) => <section key={chapter.title.ko} className="mx-auto mt-12 max-w-[720px] space-y-5 text-[16px] leading-8 text-charcoal/85 sm:text-[17px]"><h2 className="text-2xl font-extrabold text-navy">{t(chapter.title)}</h2>{chapter.paragraphs.map((p) => <p key={p.ko}>{t(p)}</p>)}</section>)}
      <section className="mt-12 border-t border-green-deep/15 pt-7"><h2 className="text-2xl font-extrabold text-navy">{ko ? "다음 공개자료에서 확인할 세 가지" : "Three questions for the next disclosure"}</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{story.checks.map((c, i) => <div key={c.question.ko} className="bg-white p-5"><span className="text-xs font-extrabold text-gold">{String(i + 1).padStart(2,"0")}</span><h3 className="mt-2 font-extrabold text-navy">{t(c.question)}</h3><p className="mt-2 text-sm leading-6 text-charcoal/70">{t(c.measure)}</p></div>)}</div><p className="mt-5 text-sm leading-7 text-charcoal/65">{ko ? "기관의 자료와 반론이 도착하면 원문, 확인일, 수정 이력을 연결해 이 기사를 갱신합니다." : "We will update this article with institutional records and replies, source dates and a visible revision history."}</p></section>
      <aside className="mt-9 border-l-4 border-gold bg-white p-5 text-sm leading-7 text-charcoal/75"><strong className="block text-navy">{ko ? "수치 해석 주의" : "Reading the figures"}</strong>{t(story.caution)}</aside>
      <section className="mt-10"><h2 className="text-2xl font-extrabold text-navy">{ko ? "원문과 확인 자료" : "Primary records and sources"}</h2><div className="mt-4 divide-y divide-green-deep/10 border-y border-green-deep/10">{[...item.sources.map((x) => ({ label: x.label, url: x.url })), ...(story.additionalSources ?? [])].map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-start gap-3 py-3 text-sm font-bold text-navy hover:text-green-deep"><span className="flex-1">{t(source.label)}</span><ExternalLink size={16}/></a>)}</div></section>
      <aside className="mt-9 rounded-xl bg-green-deep p-6 text-white"><h2 className="text-xl font-extrabold">{ko ? "반론권과 정정" : "Right of reply and correction"}</h2><p className="mt-3 text-sm leading-7 text-white/80">{ko ? "확인 가능한 설명과 반론을 환영합니다. 사실 오류는 수정 이력과 함께 바로잡겠습니다." : "We welcome verifiable replies and will correct errors with a visible revision record."}</p><a href="mailto:seedvoicekr@gmail.com" className="mt-4 inline-block text-sm font-bold underline">seedvoicekr@gmail.com</a></aside>
      <ContentAccountability postSlug={`monitoring-${item.slug}`} publishedDate="2026-09-24"/><CommentSection postSlug={`monitoring-${item.slug}`}/>
    </div>
  </article>;
}
