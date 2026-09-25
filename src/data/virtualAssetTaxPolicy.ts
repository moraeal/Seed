import type { TaxPolicy } from "./taxWatch";

const taxGuide = "https://nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=238935&mi=40370";
const tokenPlan = "https://www.fsc.go.kr/po010106/87650";
const discussion = "https://marketin.edaily.co.kr/News/ReadE?newsId=01938486645583728";

export const virtualAssetTaxPolicy: TaxPolicy = {
  slug: "virtual-asset-tax-2027-readiness",
  importance: 83,
  status: { ko: "2027년 시행 예정 · 과세 기준 점검", en: "Scheduled for 2027 · Rules under review" },
  title: { ko: "가상자산 과세, 2027년부터 무엇에 세금을 매기나", en: "What will Korea tax on virtual assets from 2027?" },
  summary: {
    ko: "2027년 1월부터 가상자산 양도·대여 소득에 과세할 예정입니다. 연간 손익에서 취득가액과 비용을 빼고 250만 원을 공제한 뒤 소득세 20%를 적용합니다. 2월에는 토큰증권 제도도 시행될 예정입니다. 과세 일정과 상품의 법적 분류, 손익 계산 기준을 구분해 정리했습니다.",
    en: "Tax on gains from transferring or lending virtual assets is scheduled to start in January 2027. Acquisition costs and expenses are deducted, followed by a KRW 2.5 million annual allowance; the remaining amount faces 20% national income tax. Token securities are scheduled to enter the regulatory framework in February. The timetable, legal classifications and calculation rules need to be read separately.",
  },
  affected: { ko: "가상자산 거래자 · 토큰증권 투자자 · 거래소 · 과세당국", en: "Virtual-asset users · Token-security investors · Exchanges · Tax authorities" },
  checkedAt: "2026-09-25",
  heroImage: {
    ko: "images/monitoring/virtual-asset-tax-policy.png",
    en: "images/monitoring/virtual-asset-tax-policy.png",
    alt: { ko: "거래 내역, 취득원가, 세금계산서가 한 장부로 연결되는 가상자산 과세 도해", en: "Illustration linking a transaction ledger, acquisition cost and tax calculation" },
    caption: { ko: "가상자산 과세는 거래 금액 전체가 아니라 비용과 연간 공제를 반영한 소득을 기준으로 합니다. 그림: 씨앗의 소리", en: "The proposed calculation taxes income after costs and the annual allowance, rather than the full transaction amount. Illustration: Seed Voice." },
  },
  processNote: {
    ko: "2026년 9월 25일 기준 국세청 안내에 따른 예정 규칙입니다. 토큰증권 제도 시행은 가상자산 과세의 시행일과 별개입니다. 실제 신고는 2027년 발생 소득을 대상으로 2028년 5월 예정이며, 시행 전 법령 변경 여부를 계속 확인해야 합니다.",
    en: "These are scheduled rules in the National Tax Service's guidance as of September 25, 2026. The token-securities start date is separate. Income arising in 2027 would generally be reported in May 2028, subject to any subsequent legal changes.",
  },
  oneSentence: { ko: "내년부터 가상자산으로 번 소득을 계산해 과세합니다. 같은 블록체인을 쓴 토큰증권도 별도 제도로 들어오지만, 상품의 권리에 따라 세금 규칙은 달라집니다.", en: "Gains on virtual assets are due to become taxable in 2027; token securities will be regulated separately, with tax treatment tied to the rights each asset represents." },
  keyChanges: [
    { title: { ko: "가상자산 소득 신고", en: "Reporting virtual-asset income" }, body: { ko: "2027년 1월 1일 이후 양도·대여 소득부터 기타소득으로 분리과세할 예정입니다. 연간 손익을 합산해 다음 해 5월에 신고합니다. 가상자산끼리 교환한 거래도 소득 계산 대상입니다.", en: "Income from transfers or lending after January 1, 2027 is scheduled for separate taxation as other income. Annual gains and losses are reported the following May. Crypto-to-crypto exchanges are included in the calculation." } },
    { title: { ko: "토큰증권 제도 시행", en: "Token-security framework begins" }, body: { ko: "2027년 2월 4일부터 분산원장으로 증권을 발행·관리하는 법률이 시행될 예정입니다. 토큰 형태라도 주식·채권·수익증권 등 법적 성격에 따라 규율과 과세가 달라집니다.", en: "Legislation allowing securities to be issued and managed on distributed ledgers is scheduled for February 4, 2027. A token can represent shares, debt or beneficiary rights, each with its own legal and tax treatment." } },
  ],
  changeMap: [
    { title: { ko: "거래자", en: "Investor" }, items: [{ ko: "매입가·수수료·이체와 교환 내역 보관", en: "Keep purchase prices, fees, transfers and exchange records" }, { ko: "한 해의 거래 손익과 250만 원 공제 확인", en: "Calculate annual net gains and the KRW 2.5m allowance" }] },
    { title: { ko: "시장", en: "Market" }, items: [{ ko: "증권의 권리와 가상자산을 구분", en: "Distinguish security rights from virtual assets" }, { ko: "국내·해외 거래 기록의 연결 방법 확인", en: "Check how domestic and overseas records connect" }] },
    { title: { ko: "정부", en: "Government" }, items: [{ ko: "취득원가와 비용 입증 기준 명확화", en: "Clarify evidence for costs and acquisition price" }, { ko: "신종 거래별 처리와 오류 정정 절차 공개", en: "Publish rules for new transaction types and corrections" }] },
  ],
  officialRationale: { ko: "현행 국세청 안내는 가상자산 양도·대여 소득을 세금 계산 대상으로 정하고, 실제 취득가액과 부대비용을 차감하도록 설명합니다. 금융위원회는 토큰증권을 새로운 종류의 코인이 아니라 기존 증권을 분산원장에 기록하는 방식으로 제도화하고 있습니다.", en: "The National Tax Service describes transfer and lending gains as taxable income after acquisition costs and expenses. The Financial Services Commission treats tokenization as a way to record existing types of securities on a distributed ledger, rather than as a new category of coin." },
  risks: [
    { ko: "거래소와 개인 지갑을 오간 자산의 취득가액을 연결하기 어려울 수 있습니다.", en: "Acquisition costs can be hard to trace across exchanges and private wallets." },
    { ko: "손실의 다음 해 이월 여부와 스테이킹·에어드롭 등 거래별 기준에 대한 분명한 안내가 필요합니다.", en: "Clear guidance is needed on carrying losses forward and transactions such as staking and airdrops." },
  ],
  questions: [
    { ko: "납세자가 제출한 거래 기록에 오류가 생기면 어디서 어떻게 고칠 수 있습니까?", en: "How can taxpayers correct mismatched transaction records?" },
    { ko: "해외 거래 자료와 국내 거래 자료에 같은 검증 기준을 적용할 수 있습니까?", en: "Can overseas and domestic trades be verified to comparable standards?" },
  ],
  seedView: { ko: "이익에 과세하는 원칙은 분명합니다. 다만 세금 계산에 필요한 기록을 국가가 제대로 읽지 못하면 납세자의 소명 부담만 커집니다. 세율보다 먼저 볼 것은 같은 소득을 같은 자료로 계산할 수 있는지입니다. 별도 논평에서 그 형평성 문제를 따졌습니다.", en: "Taxing gains is a defensible principle. If the system cannot reconcile the records needed to calculate them, the burden of proof shifts to citizens. Before debating the rate, we need to know whether equivalent gains can be calculated from comparable evidence. Our accompanying commentary examines that question." },
  timeline: [
    { date: "2026-09-04", title: { ko: "금융위원회, 토큰증권 정책 방향 발표", en: "FSC published its token-securities policy direction" } },
    { date: "2026-09-25", title: { ko: "가상자산 과세와 토큰증권 분류 문제 재점검", en: "Review of crypto taxation and token-security classification" } },
    { date: "2027-01-01", title: { ko: "가상자산 양도·대여 소득 과세 시행 예정", en: "Scheduled start of virtual-asset gains taxation" } },
    { date: "2027-02-04", title: { ko: "토큰증권 제도화 법률 시행 예정", en: "Scheduled start of token-securities legislation" } },
  ],
  sources: [
    { label: { ko: "국세청 가상자산소득 과세 개요", en: "NTS guide to virtual-asset taxation" }, url: taxGuide },
    { label: { ko: "금융위원회 토큰증권 정책방향", en: "FSC token-securities policy" }, url: tokenPlan },
    { label: { ko: "이데일리 9월 25일 좌담회 보도", en: "Edaily, September 25 roundtable" }, url: discussion },
  ],
};
