import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

export const retirementReserve2026: Briefing = {
  slug: "retirement-pay-external-reserve-worker-small-business-2026",
  category: "입법·세금감시 · 시민브리핑",
  title: "내 퇴직금은 안전해질까—사장님이 미리 준비할 돈은 얼마인가",
  subtitle: "퇴직급여 사외적립 의무화 추진, 노동자의 권리와 작은 회사의 현금흐름을 함께 읽습니다",
  summary: "퇴직금을 회사 밖에 미리 적립하도록 하는 정부안이 나왔습니다. 법 개정을 전제로 한 2028~2030년 일정, 월급 300만 원·직원 5명 가정의 적립 부담, 기금형의 운용손실과 책임을 쉽게 설명합니다.",
  date: "2026-10-30", author: "씨앗 시민브리핑", readMinutes: 8,
  featured: false, placeBodyImagesBySection: true,
  keyHighlights: [
    "10월 29일 발표된 정부 추진방안입니다. 전 사업장 의무화가 이미 법으로 확정된 것은 아닙니다. [1]",
    "회사 밖에 돈을 쌓는 것은 퇴직금 체불 위험을 줄이는 장치입니다. 모든 투자손실을 없애는 보증은 아닙니다.",
    "직원 5명의 연간 임금총액이 각각 3,600만 원인 DC형 단순 사례라면, 회사의 연간 부담금 합계는 최소 1,500만 원입니다. 월평균 준비액 125만 원은 설명용 계산이며 월납 의무를 뜻하지 않습니다. [3][4]"
  ],
  sourceDocument: { label: "고용노동부 · 퇴직연금 기능강화 방안 · 2026.10.29", url: "https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20160", note: "정부 정책 발표 원문을 해설합니다. 근로자퇴직급여 보장법 개정안 마련·국회 통과는 후속 절차이며, 이 기사에 확정된 새 의안번호는 제시하지 않습니다." },
  images: [
    { src: "images/briefings/retirement-reserve-20261030/hero.webp", alt: "작은 공장 사무실에서 급여와 퇴직저축 서류를 함께 살피는 노동자와 사업주의 사진풍 장면", caption: "노동자의 미래 소득과 작은 회사의 현재 현금흐름은 같은 장부에서 만납니다.", credit: "AI 이미지", sourceUrl: "" },
    { src: "images/briefings/retirement-reserve-20261030/bakery.webp", alt: "영업을 마친 작은 제과점에서 급여 준비를 의논하는 사업주와 제빵사의 사진풍 장면", caption: "이미 발생하는 퇴직급여 비용이라도, 밖에 미리 적립하면 사업주가 준비할 현금의 시점은 달라집니다.", credit: "AI 이미지", sourceUrl: "", afterSection: 2 },
    { src: "images/briefings/retirement-reserve-20261030/plan-ko.svg", alt: "법 개정을 전제로 한 2028년 100인 이상, 2029년 10~99인, 2030년 10인 미만의 사외적립 추진 일정", caption: "정부 추진 일정입니다. 각 단계 시행 이후의 근속기간부터 적용한다는 발표이며, 법 개정 결과에 따라 달라질 수 있습니다.", credit: "씨앗의 소리 도표 · 고용노동부 2026.10.29", sourceUrl: "https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20160", afterSection: 0, contain: true }
  ],
  content: [
    "퇴직할 때 받아야 할 돈인데 회사에 돈이 없으면 어떻게 될까요. 퇴직금은 일한 대가의 일부이지만, 회사 장부의 약속이 곧바로 내 통장의 돈은 아닙니다. 회사를 살리려 버티던 작은 사업주에게도 직원 여러 명의 퇴직이 겹치는 순간은 큰 부담입니다.",
    "정부가 10월 29일 발표한 퇴직연금 기능강화 방안은 이 위험을 줄이기 위해 퇴직급여를 회사 밖에 미리 적립하도록 하자는 계획입니다. 노동자의 돈을 지키는 효과와 사업주가 현금을 준비해야 하는 시점을 나누어 살펴봅니다. [1]"
  ],
  sections: [
    { title: "지금 바뀐 법인가요? 아직은 추진방안입니다", paragraphs: [
      "정부는 법 개정을 전제로 2028년 100인 이상, 2029년 10~99인, 2030년 10인 미만 사업장 순으로 사외적립을 의무화하겠다고 발표했습니다. 발표문은 11월 개정안 마련과 연내 국회 통과를 추진한다고 적었습니다. 시행 목표와 법률의 확정은 다릅니다. [1][2]",
      "발표상 의무는 각 단계 시행 시점 이후 발생하는 근속기간부터 적용하는 계획입니다. 오래 근무한 직원의 과거 퇴직급여를 시행 첫날 전부 외부로 옮기라는 의미로 읽을 수는 없습니다. 구체적인 적용·전환 절차는 후속 법안과 하위 규정 확인이 남아 있습니다. [1]"
    ] },
    { title: "새 퇴직금을 더 주라는 것인가요", paragraphs: [
      "현행 퇴직금은 계속근로기간 1년에 대해 30일분 이상의 평균임금을 기준으로 합니다. 실제 계산에는 퇴직 전 임금, 상여금, 통상임금과의 비교 등이 영향을 줍니다. 이번 발표의 중심은 이 권리가 있느냐보다, 지급할 돈을 어디에 어떻게 확보해 두느냐입니다. [5]",
      "DB형은 받을 급여가 미리 정해지고 사용자가 적립금을 자기 책임으로 운용합니다. DC형은 사용자가 내는 부담금이 연간 임금총액의 12분의 1 이상으로 정해지고, 급여는 적립금과 운용성과에 따라 달라집니다. 회사가 이미 퇴직연금에 가입해 정상 납입 중이라면, 미가입 회사와 같은 출발점이 아닙니다. [3][4]",
      "따라서 사외적립을 새 임금이나 세금이 똑같이 추가되는 제도로 설명하면 틀어집니다. 기존에 준비해야 했던 비용을 미리 분리해 놓게 된다는 점과, 그 결과 쓸 수 있는 운영자금이 줄 수 있다는 점을 함께 볼 일입니다."
    ] },
    { title: "월급 300만 원, 직원 5명이면 얼마를 준비하나요", paragraphs: [
      "DC형을 선택하고 직원 5명이 각각 연간 임금총액 3,600만 원을 받는다고 가정해 보겠습니다. 상여금·수당, 휴직, 입퇴사 등 다른 조건은 없는 단순 사례입니다. 1인 부담금은 3,600만 원÷12=연 300만 원, 5명 합계는 연 1,500만 원입니다. 이를 12개월로 나누어 준비하면 월평균 125만 원입니다. [3][4]",
      "125만 원은 가계부처럼 나누어 본 준비액입니다. 법이 모든 회사에 매달 이 금액을 내라고 정했다는 뜻은 아닙니다. DC 부담금 납입주기는 규약에서 정하며 연 1회 이상 정기 납입합니다. DB형의 필요 적립금을 이 계산으로 대신할 수도 없습니다. [4]",
      "사외적립의 효과도 이 사례에서 보입니다. 직원의 몫이 회사 운영비와 분리되면 회사 사정이 나빠졌을 때 보호에 도움이 됩니다. 반대로 지금까지 그 돈까지 재료비·임대료로 돌려 쓰던 가게는 매출이 같아도 현금이 더 빠듯해질 수 있습니다. 퇴직급여 비용의 존재와 실제 납입할 현금의 확보는 다른 문제입니다."
    ] },
    { title: "회사 밖에 두면 원금과 수익이 모두 보장되나요", paragraphs: [
      "돈을 회사 밖에 보관하는 것과 투자손실을 막는 것은 별개입니다. 정부가 활성화하려는 기금형은 제3의 수탁법인이 운용하지만 수익과 손실은 가입자에게 돌아가는 구조입니다. 전문가가 운용한다는 말만으로 수익률이 보장되지는 않습니다. [1][2]",
      "내 노후자금에서 빠지는 수수료, 어떤 자산에 투자하는지, 손실이 시장변동 때문인지 의무위반 때문인지가 중요해집니다. 정상적인 투자손실과 운용자의 잘못으로 인한 손해를 같은 것으로 취급하면 책임도 흐려집니다. 정부가 제시한 수탁자책임 장치가 최종 법안에서 어떻게 구현되는지 확인할 대목입니다.",
      "사외적립으로 체불 위험을 낮추는 취지는 타당합니다. 그 다음 장부에는 운용기관의 비용과 책임이 적혀 있어야 합니다. 회사의 약속을 믿던 시민에게 이제는 금융기관을 그냥 믿으라는 설명으로 끝낼 수는 없습니다."
    ] },
    { title: "해설과 논평: 보호의 비용을 영세사업주와 납세자에게 넘기지 않았나", paragraphs: [
      "퇴직금은 사업주가 형편이 좋을 때 주는 선물이 아닙니다. 노동자가 이미 일해서 얻는 권리입니다. 동시에 적립 의무를 지킬 현금이 없는 사업장의 곤란도 실제입니다. 재료비와 임대료를 치르고 나면 남는 돈이 적은 가게에 준비기간은 달력의 숫자 이상의 의미가 있습니다.",
      "정부는 2027년 예산안에 우선 도입 사업장 적립금 매칭 60억 원과 경영자금 융자비용 보전 62억 원을 편성했다고 설명했습니다. 합계 122억 원은 정부안이며 국회의 확정 예산과 같지 않습니다. [1]",
      "지원금은 노동자의 퇴직급여를 세금으로 모두 대신 내준다는 뜻이 아닙니다. 실제 지원대상·한도·기간이 나와야 작은 회사의 전환비용 중 얼마가 줄어드는지 계산할 수 있습니다. 납세자에게는 그 지원으로 체불이 얼마나 줄었는지를 확인할 근거도 필요합니다.",
      "이 제도를 평가할 숫자는 가입률 하나가 아닙니다. 미납 적립금, 체불액, 작은 사업장의 부담, 수수료를 뺀 실질 수익, 의무위반 손해의 회복이 함께 남아야 합니다. 노동자가 받아야 할 돈은 더 안전해지고, 성실한 사업주가 적응할 길은 열리며, 운용기관의 책임은 가벼워지지 않는지 계속 보겠습니다."
    ] }
  ],
  watchTitle: "계속 지켜볼 것", watchPoints: ["개정 법안·부칙의 시행일과 과거 근속분 처리", "영세사업장 지원의 확정 예산·대상·한도", "DB 적립 부족과 DC 미납의 실제 감소", "기금형의 수수료·성과 공개와 손해배상 절차"],
  sources: [
    { label: "고용노동부 · 퇴직연금 기능강화 방안 · 2026.10.29", url: "https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20160" },
    { label: "연합뉴스 · 퇴직급여 사외적립, 2030년까지 모든 사업장에 의무화 · 2026.10.29", url: "https://www.yna.co.kr/view/AKR20261028184500530" },
    { label: "고용노동부 · 퇴직연금 DB·DC 제도 안내 · 2026.10.30 확인", url: "https://www.moel.go.kr/retirementpay.do" },
    { label: "고용노동부 고객센터 · DC 부담금과 납입주기 안내 · 2026.10.30 확인", url: "https://1350.moel.go.kr/rtmview.do?id=1000320803" },
    { label: "고용노동부 · 퇴직금 및 평균임금 산정공식 · 2026.10.30 확인", url: "https://moel.go.kr/faq/faqView.do?seqRepeat=89" }
  ],
  sourceNote: "2026년 10월 30일 확인. 정부 정책 발표 원문과 현행 제도 안내를 대조한 해설입니다. 새로운 의무화·기금형 확대와 지원 예산은 추진안으로 구분했습니다. 금액 사례는 가정 계산이며 개별 사업장의 법률·세무 상담을 대신하지 않습니다. 논평과 향후 점검 기준은 씨앗의 소리의 판단입니다."
};

export const retirementReserveTranslation: BriefingTranslation = {
  category: "LEGISLATIVE & TAX WATCH · CIVIC BRIEFING",
  title: "Will My Retirement Pay Be Safer—and What Must a Small Employer Set Aside?",
  subtitle: "South Korea's proposed external-reserve requirement, explained through workers' rights and small-business cash flow",
  summary: "The government plans to require retirement benefits to be funded outside the employer. We separate proposed deadlines from law, illustrate contributions for five employees, and examine investment risk, transition costs and accountability.",
  author: "Seed Civic Briefing",
  keyHighlights: ["Announced on October 29, 2026: a government plan, not an enacted universal obligation. [1]", "Keeping retirement assets outside the employer can reduce non-payment risk; it does not guarantee investment returns.", "Illustration: five DC participants each earning KRW 36 million annually require at least KRW 15 million in combined annual employer contributions. KRW 1.25 million a month is a budgeting equivalent, not a mandatory monthly payment schedule. [3][4]"],
  sourceDocument: { label: "Ministry of Employment and Labor · Retirement Pension Reform Plan · October 29, 2026", url: "https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=20160", note: "Explanation of a government policy announcement. Drafting and parliamentary passage of amendments remain subsequent steps; no finalized new bill number is asserted here." },
  images: [
    { alt: "Photographic-style scene of an employee and a small factory owner reviewing payroll and retirement savings", caption: "A worker's future income and a small employer's present cash flow meet in the same accounts.", credit: "AI image" },
    { alt: "Photographic-style scene of a bakery owner and a baker discussing payroll after closing", caption: "Retirement benefits already represent a cost, but external funding changes when cash must be available.", credit: "AI image" },
    { src: "images/briefings/retirement-reserve-20261030/plan-en.svg", alt: "Proposed external-funding timeline: 100-plus employees in 2028, 10–99 in 2029 and fewer than 10 in 2030, conditional on legislation", caption: "Government proposal, not an enacted schedule. The announced requirement covers service accrued after each phase begins; legislation may change the details.", credit: "Seed Voice chart · Ministry announcement, October 29, 2026" }
  ],
  content: ["What happens when retirement pay falls due but the employer has no cash? These benefits are part of compensation for work, yet a promise in company accounts is not money in the employee's account. Several departures at once can also put severe pressure on a small employer.", "The government's October 29 plan would reduce this risk by requiring retirement benefits to be funded outside the business. Protecting the worker's entitlement and changing the timing of the employer's cash outflow are related but distinct effects. [1]"],
  sections: [
    { title: "Is the requirement already law? Not yet", paragraphs: ["Conditional on legislation, the government proposes starting with workplaces employing at least 100 people in 2028, then 10–99 in 2029 and fewer than 10 in 2030. It plans to prepare amendments in November and seek passage within the year. These are policy targets, not completed enactment. [1][2]", "The announcement applies each phase to service accrued after its commencement. It does not announce an obligation to transfer every employee's entire historical entitlement on day one. Transition provisions still require scrutiny in the eventual legislation. [1]"] },
    { title: "A new benefit, or a different way to secure an existing one?", paragraphs: ["Korea's existing retirement-allowance formula uses at least 30 days of average wages per year of continuous service. Actual calculations depend on wages, bonuses and the statutory comparison with ordinary wages. The proposal principally concerns where money backing the entitlement is secured. [5]", "Under a defined-benefit arrangement, the benefit is predetermined and the employer manages the assets at its responsibility. Under a defined-contribution arrangement, the employer contributes at least one twelfth of annual wages; the eventual benefit depends on contributions and investment performance. An employer already funding a pension is not in the same position as an unfunded workplace. [3][4]", "This is not an identical new tax or wage increase for every business. It separates money for an existing liability earlier, potentially reducing working capital available for daily operations."] },
    { title: "Five employees: a transparent cash-flow illustration", paragraphs: ["Assume a DC arrangement with five employees, each earning total annual wages of KRW 36 million. Ignore bonuses, allowances, leave and staff changes. One twelfth is KRW 3 million per employee annually, or KRW 15 million for all five. Dividing that by 12 produces a monthly budgeting equivalent of KRW 1.25 million. [3][4]", "That equivalent is not a new statutory monthly remittance. The contribution schedule is set in pension rules, with regular payment at least annually. Nor does this DC calculation determine the funding requirement for a DB arrangement. [4]", "Separating the money from operating funds helps protect employees if business deteriorates. A bakery that previously used available cash for rent and ingredients may nonetheless face tighter liquidity even with unchanged sales. Recognizing a liability and having cash ready to fund it are different tasks."] },
    { title: "External custody does not eliminate investment risk", paragraphs: ["The proposed fund-based arrangement uses a third-party trustee to invest assets, but investment gains and losses belong to participants. Professional management does not promise a return. [1][2]", "Fees, asset allocation and the distinction between market losses and losses caused by a breach of duty therefore matter. An adverse investment outcome is not automatically misconduct; misconduct must not disappear behind the language of market risk either. The trustee-accountability provisions in the final legislation will deserve close attention.", "Reducing employers' non-payment risk is a legitimate objective. The next set of accounts must also reveal investment institutions' costs and responsibilities. Workers should not simply be asked to replace blind trust in a company with blind trust in a financial institution."] },
    { title: "Commentary: Who pays for the transition, and who remains accountable?", paragraphs: ["Retirement pay is not a gift from a prosperous employer. It is an entitlement earned through work. The liquidity problem of a small business is also real: after rent and ingredients, a preparation period means more than dates on a calendar.", "The government says its 2027 budget proposal includes KRW 6 billion in matching support for early adopters and KRW 6.2 billion in working-capital financing-cost support. The combined KRW 12.2 billion is proposed funding, not a final parliamentary appropriation. [1]", "This is not a promise that taxpayers will pay every worker's retirement entitlement. Eligibility, caps and duration are needed to establish how much transition cost will actually be covered. Taxpayers also need evidence of the non-payment prevented.", "Enrollment alone is an inadequate scorecard. Unpaid contributions, unpaid benefits, small-business transition costs, returns after fees and redress for breaches of duty belong beside it. We will track whether workers' money becomes safer, conscientious employers can adapt and investment managers remain answerable."] }
  ],
  watchTitle: "What we will track", watchPoints: ["Final amendment and transition provisions, including historical service", "Approved support budgets, eligibility and caps", "Changes in DB underfunding and unpaid DC contributions", "Fund fees, performance disclosure and redress procedures"],
  sourceLabels: ["Ministry of Employment and Labor · Retirement Pension Reform Plan · October 29, 2026", "Yonhap · Proposed universal external funding by 2030 · October 29, 2026", "Ministry of Employment and Labor · DB and DC pension guide · checked October 30, 2026", "Ministry helpline · DC contribution amounts and payment schedules · checked October 30, 2026", "Ministry of Employment and Labor · Retirement-pay and average-wage formula · checked October 30, 2026"],
  sourceNote: "Checked October 30, 2026 against the government announcement and existing system guides. Universal external funding, expanded fund arrangements and support appropriations are distinguished from enacted rules. The cash-flow illustration is hypothetical, not individual legal or tax advice. Commentary and monitoring standards express Seed Voice's editorial judgment."
};
