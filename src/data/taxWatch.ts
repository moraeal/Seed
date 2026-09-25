import { virtualAssetTaxPolicy } from "./virtualAssetTaxPolicy";

export type LocalizedText = { ko: string; en: string };

export type TaxPolicy = {
  slug: string;
  importance: number;
  status: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  affected: LocalizedText;
  checkedAt: string;
  deadline?: string;
  heroImage: { ko: string; en: string; alt: LocalizedText; caption?: LocalizedText };
  processNote?: LocalizedText;
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
const fuelTaxNotice = "https://mofe.go.kr/lw/lap/detailTbPrvntcView.do?menuNo=7050300&searchBbsId1=MOSFBBS_000000000055&searchNttId1=MOSF_000000000079385";
const lpgTaxNotice = "https://mofe.go.kr/lw/lap/detailTbPrvntcView.do?menuNo=7050300&searchBbsId1=MOSFBBS_000000000055&searchNttId1=MOSF_000000000079384";
const fuelTaxReport = "https://www.mk.co.kr/news/economy/12156047";
const contentStrategyBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221473/detailRP?yType=I";
const contentStrategyAccountBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221472/detailRP?yType=I";
const taxExpenditureCapBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221495/detailRP";
const nationalFinanceAct = "https://www.law.go.kr/법령/국가재정법";
const taxExpenditurePlanReport = "https://marketin.edaily.co.kr/News/ReadE?newsId=04031126645388896";
const farmFisheryNationalTaxBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221545/detailRP";
const farmFisheryLocalTaxBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221543/detailRP";
const taxReformOfficialFile = "https://mofe.go.kr/com/cmm/fms/FileDown.do?atchFileId=ATCH_000000000032335&fileSn=4";
const taxReformAgricultureReport = "https://www.taxtimes.co.kr/news/article.html?no=276259";
const taxBreakBudgetConversionBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221575/detailRP";
const taxExpenditureBasicPlan = "https://eiec.kdi.re.kr/policy/materialView.do?num=278710";
const naboTaxExpenditureReview = "https://www.nabo.go.kr/ko/periodical/focusView.do?idx=9236&key=2507040015";

export const taxPolicies: TaxPolicy[] = [
  virtualAssetTaxPolicy,
  {
    slug: "tax-break-to-budget-conversion-bill",
    importance: 82,
    status: { ko: "법안 발의", en: "Bill introduced" },
    title: {
      ko: "끝난 세금감면, 예산사업으로 옮길 통로를 만드는 법안",
      en: "Bill would create a route from expiring tax breaks to budget spending",
    },
    summary: {
      ko: "조세감면을 매년 평가해 직접 예산지원이 더 효과적이라고 판단하면 재정지출로 전환할 수 있게 하는 국가재정법 개정안이 발의됐습니다. 감면보다 예산이 투명하고 정밀할 수 있지만, 일몰이 지원의 종료가 아니라 지출 방식의 변경으로 끝날 가능성도 생깁니다.",
      en: "A proposed National Finance Act amendment would allow tax preferences to be reviewed annually and converted into direct budget spending when that method is judged more effective. Budget support can be more transparent and better targeted, but a sunset could end by changing the form of support rather than ending it.",
    },
    affected: {
      ko: "모든 납세자 · 조세특례 수혜 개인·기업 · 예산 지원 대상 · 재정당국",
      en: "All taxpayers · Individual and corporate tax-preference beneficiaries · Budget-support recipients · Fiscal authorities",
    },
    checkedAt: "2026-09-24",
    heroImage: {
      ko: "images/monitoring/tax-break-budget-conversion-ko.png",
      en: "images/monitoring/tax-break-budget-conversion-en.png",
      alt: {
        ko: "세금감면을 평가해 직접 예산지출로 전환하는 법안의 흐름과 감시 지점을 설명한 도표",
        en: "Diagram showing a bill's proposed route from tax preferences through review to direct budget spending",
      },
      caption: {
        ko: "법안은 조세지출을 매년 평가해 필요하면 재정지출로 전환하고, 실적과 계획을 조세지출 결산서·예산서에 싣도록 합니다. 특정 특례나 전환 금액은 아직 정해지지 않았습니다.",
        en: "The bill would require annual review, allow conversion to direct spending, and report results and plans in tax-expenditure budget and settlement documents. It does not yet identify a specific preference or conversion amount.",
      },
    },
    processNote: {
      ko: "2026년 9월 23일 발의된 의원입법안으로 아직 확정된 법률이 아닙니다. 법안이 통과돼도 개별 사업의 실제 지출은 해마다 예산안 편성과 국회 의결을 거쳐야 합니다.",
      en: "This private member's bill was introduced on September 23, 2026 and has not been enacted. Even if passed, spending on an individual program would still require annual budget preparation and parliamentary approval.",
    },
    oneSentence: {
      ko: "보이지 않던 세금감면을 예산으로 드러내는 장치가 될 수 있지만, 종료할 특례를 새 예산사업으로 보존하는 통로가 되지 않는지 함께 봐야 합니다.",
      en: "The proposal could make less-visible tax preferences explicit in the budget, but it also requires scrutiny against preserving an expiring preference as a new spending program.",
    },
    keyChanges: [
      {
        title: { ko: "매년 평가해 예산사업으로 전환", en: "Annual review and conversion to spending" },
        body: {
          ko: "조세지출의 필요성과 정책 효과성을 매년 검토하고, 세금감면보다 직접 재정지출이 효과성·형평성에서 낫다고 판단되는 경우 예산지원으로 전환할 법적 근거를 둡니다.",
          en: "Tax preferences would be reviewed annually, with statutory authority to convert them into direct spending when budget support is judged more effective or equitable than relief through the tax code.",
        },
      },
      {
        title: { ko: "전환 실적과 계획을 국회에 공개", en: "Report results and plans to Parliament" },
        body: {
          ko: "전환한 실적은 조세지출결산서에, 앞으로의 전환 계획은 조세지출예산서에 포함합니다. 전환된 지출은 원칙적으로 기존 특례의 목적과 지원 대상 범위에서 사용합니다.",
          en: "Completed conversions would appear in the tax-expenditure settlement statement and future plans in the tax-expenditure budget statement. Spending would generally retain the original preference's purpose and beneficiary scope.",
        },
      },
    ],
    changeMap: [
      {
        title: { ko: "더 보이는 지원", en: "More visible support" },
        items: [
          { ko: "세금감면은 걷지 않은 세금이라 일반 예산보다 전체 비용과 수혜자가 덜 보일 수 있습니다.", en: "Tax preferences are revenue forgone, so their full cost and beneficiaries can be less visible than ordinary spending." },
          { ko: "예산사업으로 바꾸면 해마다 금액과 사업 내용을 국회가 심사하고 결산에서 집행을 확인할 수 있습니다.", en: "Once converted into a budget program, the amount and design face annual parliamentary scrutiny and execution can be examined at settlement." },
        ],
      },
      {
        title: { ko: "시민과 기업의 선택", en: "Choices for citizens and firms" },
        items: [
          { ko: "자동적으로 적용되는 공제·감면과 달리 예산지원은 신청·선정·지급 기준을 거칠 수 있어 수혜 방식이 달라집니다.", en: "Unlike broadly available deductions or credits, budget support may require applications, selection and payment criteria, changing how beneficiaries receive support." },
          { ko: "정밀한 선별은 가능해지지만 담당 부처의 선정 권한과 기업의 행정비용은 커질 수 있습니다.", en: "Targeting can become more precise, while ministries gain selection power and firms may face higher administrative costs." },
        ],
      },
      {
        title: { ko: "일몰 뒤에도 남는 비용", en: "Costs that can survive a sunset" },
        items: [
          { ko: "특례의 일몰은 세법상 감면을 끝내지만, 같은 목적과 대상을 가진 예산사업이 이어지면 시민이 부담할 지원 비용은 사라지지 않습니다.", en: "A sunset can end relief in the tax code while the public cost continues through a budget program serving the same purpose and recipients." },
          { ko: "법안은 전환할 특정 특례와 금액을 정하지 않아 실제 재정효과는 향후 예산안에서 확인해야 합니다.", en: "Because the bill names no specific preference or amount, its fiscal effect will depend on future budget proposals." },
        ],
      },
    ],
    officialRationale: {
      ko: "발의자는 직접 예산지원이 효과성과 형평성에서 더 나은 경우에도 전환 근거가 없어 지원 공백이나 단발성 사업이 생기고 국가재정운용계획과 연결되지 못한다고 설명합니다. 정부도 2026년 조세지출 기본계획에서 소득재분배 효과나 유사·중복 지출 정비가 필요한 특례의 재정지출 전환을 추진하겠다고 밝혔습니다.",
      en: "The sponsor argues that the absence of a conversion mechanism can create support gaps, one-off programs and weak links to the national fiscal plan even when direct spending would be more effective or equitable. The government's 2026 Tax Expenditure Basic Plan likewise proposed conversion where spending improves redistribution or helps consolidate overlapping support.",
    },
    risks: [
      { ko: "성과가 낮아 끝내야 할 감면과 지원 방식만 바꿔야 할 감면을 구분하는 공개 기준이 없으면, 일몰이 사실상 자동 승계 절차가 될 수 있습니다.", en: "Without public criteria separating relief that should end from relief whose delivery method should change, a sunset could become a de facto succession process." },
      { ko: "기존 목적과 지원 대상을 원칙적으로 유지하면 과거 수혜자가 새 예산의 고정 수혜자로 굳을 수 있습니다.", en: "Generally preserving the original purpose and beneficiary scope could entrench former recipients as standing claimants on the new budget." },
      { ko: "재난·경기침체·대량실업 등에는 다른 용도로 쓸 수 있다는 예외가 있어, 전환 재원이 당초 정책평가와 무관하게 이동할 여지가 있습니다.", en: "An exception permitting other uses during disasters, downturns or mass unemployment leaves room for converted resources to move away from the policy reviewed." },
    ],
    questions: [
      { ko: "어떤 성과·형평성 기준을 충족해야 감면을 종료하고 예산사업으로 전환합니까?", en: "What performance and equity tests must be met before a preference ends and becomes a budget program?" },
      { ko: "전환 전후의 세수 감소액과 예산액, 수혜자 수를 한 표에서 비교해 공개합니까?", en: "Will revenue forgone, the replacement budget and recipient counts be disclosed together before and after conversion?" },
      { ko: "새 예산사업에도 별도의 일몰과 정기 성과평가를 두어 지원이 자동으로 존속하지 않게 합니까?", en: "Will the replacement program have its own sunset and periodic review so support does not continue automatically?" },
      { ko: "긴급상황 예외로 다른 용도에 쓴 금액과 사유를 국회와 시민에게 언제 공개합니까?", en: "When will amounts and reasons for emergency repurposing be disclosed to Parliament and the public?" },
    ],
    seedView: {
      ko: "세금감면은 지원인데도 예산서 바깥에 있어 비용과 수혜자가 흐려집니다. 직접 예산으로 옮기면 국회가 해마다 금액을 심사하고, 행정부가 누구에게 얼마를 지급했는지 결산에서 따질 수 있습니다. 이 장점은 분명합니다. 그러나 감면의 일몰은 지원의 성과를 다시 묻겠다는 약속입니다. 종료할 특례가 이름만 바꿔 예산사업으로 남는다면 일몰은 출구가 아니라 환승구가 됩니다. 법안은 전환할 특례와 금액을 아직 정하지 않았습니다. 국회가 볼 것은 전환 건수만이 아닙니다. 전환 전후의 총비용, 실제 수혜자, 신청과 선정 기준, 새 사업의 일몰, 긴급상황에 다른 용도로 옮긴 내역이 한 표에 함께 공개되는지를 계속 확인해야 합니다.",
      en: "Tax preferences provide support outside the ordinary budget, where costs and beneficiaries can be harder to see. Direct spending would let Parliament approve amounts annually and examine who received what at settlement. That is a real advantage. But a sunset is a promise to reassess whether support still works. If a preference that should end survives under a budget-program label, the sunset becomes a transfer station rather than an exit. The bill does not yet name any preference or amount for conversion. Scrutiny should therefore extend beyond the number of conversions to one table showing total costs before and after, actual beneficiaries, eligibility and selection rules, a sunset for the new program, and any emergency repurposing.",
    },
    timeline: [
      { date: "2026-03-31", title: { ko: "정부, 조세지출의 재정지출 전환을 기본계획에 포함", en: "Government includes tax-preference conversion in its basic plan" } },
      { date: "2026-09-23", title: { ko: "국가재정법 개정안 제2221575호 발의", en: "National Finance Act amendment Bill 2221575 introduced" } },
      { date: "2026-09-24", title: { ko: "씨앗의 소리 확인·분석", en: "Verified and analyzed by Seed Voice" } },
    ],
    sources: [
      { label: { ko: "국회 의안 제2221575호 국가재정법 개정안", en: "National Assembly Bill 2221575: National Finance Act amendment" }, url: taxBreakBudgetConversionBill },
      { label: { ko: "재정경제부 2026년 조세지출 기본계획", en: "Ministry of Economy and Finance: 2026 Tax Expenditure Basic Plan" }, url: taxExpenditureBasicPlan },
      { label: { ko: "국회예산정책처 조세지출 기본계획 분석", en: "National Assembly Budget Office review of the tax-expenditure plan" }, url: naboTaxExpenditureReview },
    ],
  },
  {
    slug: "farm-fishery-tax-breaks-2030-bill",
    importance: 84,
    status: { ko: "법안 발의", en: "Bills introduced" },
    title: {
      ko: "농어업 세금특례, 서로 다른 일몰을 2030년으로 묶자는 법안",
      en: "Bills would align broad farm and fishery tax breaks to a 2030 sunset",
    },
    summary: {
      ko: "농어민·농어업법인·협동조합 등에 적용되는 국세와 지방세 특례의 서로 다른 일몰을 2030년 말로 맞추는 두 법안이 발의됐습니다. 예측 가능성을 높인다는 취지지만, 종료 예정 특례까지 함께 연장될 수 있고 국세·지방세를 합친 비용표는 제시되지 않았습니다.",
      en: "Two bills would move a wide range of national and local tax preferences for farmers, fishers, related corporations and cooperatives to a common sunset at the end of 2030. The sponsors cite predictability, but some preferences scheduled to end could be prolonged, and no combined national-local cost table has been provided.",
    },
    affected: {
      ko: "농어민 · 농어업법인 · 협동조합 · 지방자치단체 · 모든 납세자",
      en: "Farmers and fishers · Agricultural and fishery corporations · Cooperatives · Local governments · All taxpayers",
    },
    checkedAt: "2026-09-23",
    heroImage: {
      ko: "images/monitoring/farm-fishery-tax-breaks-2030-ko.png",
      en: "images/monitoring/farm-fishery-tax-breaks-2030-en.png",
      alt: {
        ko: "2026년과 2028년으로 흩어진 농어업 국세·지방세 특례 일몰을 2030년으로 맞추는 법안의 구조를 설명한 도표",
        en: "Diagram explaining bills that would align agricultural and fishery national and local tax-break sunsets from 2026 and 2028 to 2030",
      },
      caption: {
        ko: "두 법안은 여러 국세·지방세 특례의 일몰을 2030년 12월 31일로 맞춥니다. 공식 제안 설명에는 특례별 수혜자 수와 국세·지방세를 합친 연간 세수 감소액이 없습니다.",
        en: "The two bills would align numerous national and local tax preferences to December 31, 2030. The official summaries do not provide recipient counts by preference or a combined annual national-local revenue-loss estimate.",
      },
    },
    processNote: {
      ko: "2026년 9월 22일 발의된 의원입법안 두 건으로 아직 확정된 법률이 아닙니다. 국회 심사에서 대상 조항·일몰과 시행시점이 달라질 수 있습니다.",
      en: "These two private member's bills were introduced on September 22, 2026 and have not been enacted. Covered provisions, sunsets and the effective date may change during National Assembly review.",
    },
    oneSentence: {
      ko: "농어업 지원의 예측 가능성을 높이자는 제안이지만, 성과와 비용이 다른 여러 특례를 한 날짜로 묶으면 일몰 심사가 일괄 연장 절차로 바뀔 수 있습니다.",
      en: "The proposal promises greater predictability for agricultural support, but one common date could turn separate sunset reviews of preferences with different costs and results into a single renewal exercise.",
    },
    keyChanges: [
      {
        title: { ko: "국세 특례 일몰을 2030년으로", en: "National tax preferences moved to 2030" },
        body: {
          ko: "농어업법인 과세특례, 자경농지·축사용지·어업용 토지 양도소득세 감면, 농어민 저축·조합 예탁금, 농어업 기자재와 면세유 관련 부가가치세·간접세 특례 등 주요 기한을 2030년으로 맞춥니다.",
          en: "The national-tax bill would align major preferences—including rules for agricultural and fishery corporations, capital-gains relief for qualifying land, savings and cooperative deposits, equipment-related VAT relief and tax-exempt fuel—to 2030.",
        },
      },
      {
        title: { ko: "지방세 특례도 같은 날짜로", en: "Local tax preferences aligned to the same date" },
        body: {
          ko: "농어민·농어업법인·농수협과 관련 기관에 대한 취득세·재산세·등록면허세 감면 가운데 2026년부터 2028년 사이 끝나는 주요 특례를 2030년 말까지 연장합니다.",
          en: "The local-tax bill would extend major acquisition, property and registration-license tax preferences for farmers, fishers, sector corporations, cooperatives and related bodies that currently expire between 2026 and 2028 through the end of 2030.",
        },
      },
    ],
    changeMap: [
      {
        title: { ko: "현장의 예측 가능성", en: "Predictability for producers" },
        items: [
          { ko: "농어업의 긴 투자주기와 소득 변동을 고려하면 임박한 일몰을 반복 연장하는 방식보다 지원 기간을 미리 아는 편이 경영계획에 유리합니다.", en: "Given long investment cycles and volatile income in farming and fishing, knowing the support horizon in advance can aid planning more than repeated last-minute extensions." },
          { ko: "국세와 지방세의 기한을 맞추면 사업자와 지방자치단체의 행정 혼선도 줄 수 있습니다.", en: "Matching national and local deadlines could also reduce administrative confusion for businesses and local governments." },
        ],
      },
      {
        title: { ko: "시민과 지방재정의 부담", en: "Cost to taxpayers and local budgets" },
        items: [
          { ko: "세율을 새로 올리는 법안은 아니지만, 감면 연장은 국가와 지방자치단체가 걷지 않는 세금을 늘리는 재정 선택입니다.", en: "The bills do not raise a tax rate, but extending relief is a fiscal choice that increases revenue forgone by the national and local governments." },
          { ko: "공식 요약에는 두 법안을 합친 연간 세수 감소액과 특례별 수혜자 수가 없습니다.", en: "The official summaries give neither a combined annual revenue-loss estimate nor recipient counts for each preference." },
        ],
      },
      {
        title: { ko: "일몰 심사의 의미", en: "Meaning of the sunset review" },
        items: [
          { ko: "정부 세제개편안은 농어업 특례를 상시화·연장·종료로 나눠 정비하려 했지만, 의원안은 여러 기한을 하나의 2030년 심사 시점으로 묶습니다.", en: "The government's tax reform plan sorted agricultural preferences into permanent, extended and expiring categories; the bills instead group many deadlines at one 2030 review point." },
          { ko: "성과가 다른 특례를 한꺼번에 심사하면 개별 특례의 종료 판단이 큰 묶음의 정치적 협상에 가려질 수 있습니다.", en: "Reviewing dissimilar preferences together may let decisions on weak individual measures disappear into negotiation over the larger package." },
        ],
      },
    ],
    officialRationale: {
      ko: "발의자는 농어업 관련 조세특례의 일몰이 2026년과 2028년 등에 흩어져 있어 정책 예측 가능성이 떨어진다고 설명합니다. 주요 기한을 2030년으로 통일하면 지원의 안정성을 높이고, 한 시점에 종합적인 성과평가와 제도 정비를 할 수 있다는 논리입니다.",
      en: "The sponsors say agricultural and fishery tax preferences expire across 2026, 2028 and other dates, reducing policy predictability. A common 2030 deadline, they argue, would stabilize support and allow comprehensive performance review and reform at one point.",
    },
    risks: [
      { ko: "정부가 종료 또는 재정사업 전환을 검토한 특례까지 2030년으로 옮기면, 선별 정비가 일괄 연장으로 바뀔 수 있습니다.", en: "Moving preferences that the government considered ending or converting into budget programs to 2030 could replace selective reform with blanket extension." },
      { ko: "실제 농어민과 법인·협동조합·관련 기관의 수혜를 분리하지 않으면 지원이 현장 소득 안정에 얼마나 닿는지 알기 어렵습니다.", en: "Without separating benefits to working farmers and fishers from those to corporations, cooperatives and related bodies, it is difficult to tell how much support reaches household income stability." },
      { ko: "국세와 지방세의 세수 감소를 따로만 관리하면 지방재정까지 포함한 전체 비용이 보이지 않습니다.", en: "If national and local revenue losses are tracked separately, the package's full fiscal cost—including pressure on local budgets—remains obscured." },
    ],
    questions: [
      { ko: "두 법안이 연장하는 조항별 연간 국세·지방세 감소액과 수혜자 수는 얼마입니까?", en: "What are the annual national and local revenue losses and recipient counts for every provision extended by the two bills?" },
      { ko: "정부가 종료 또는 재정사업 전환 대상으로 분류한 특례 가운데 의원안으로 다시 연장되는 것은 무엇입니까?", en: "Which preferences that the government classified for expiry or conversion into spending programs would instead be extended by these bills?" },
      { ko: "실제 농어민, 농어업법인, 협동조합과 관련 기관의 수혜액을 구분해 공개합니까?", en: "Will benefits be disclosed separately for working farmers and fishers, sector corporations, cooperatives and related institutions?" },
      { ko: "2030년 종합평가 전에도 성과가 낮은 개별 특례를 종료할 수 있는 중간평가를 둡니까?", en: "Will interim reviews be able to end low-performing individual preferences before the comprehensive 2030 review?" },
    ],
    seedView: {
      ko: "농어업은 소득 변동이 크고 투자 회수기간이 깁니다. 세제 지원의 기한을 미리 알려 달라는 요구는 타당합니다. 그러나 일몰은 지원을 갑자기 끊기 위한 날짜가 아니라, 걷지 않은 세금의 성과와 수혜를 다시 묻겠다는 약속입니다. 정부안은 특례를 상시화·연장·종료로 나눴는데, 의원안은 여러 국세와 지방세 특례를 2030년 한 날짜로 묶습니다. 비용표와 수혜자 표가 없는 ‘종합 심사’는 종합 검증보다 일괄 연장이 되기 쉽습니다. 국회는 두 법안을 함께 심사하되 실제 농어민과 법인·조합·기관의 수혜를 나누고, 국세와 지방세의 감소액을 한 표에 놓아야 합니다. 예측 가능성은 심사를 없애는 이유가 아니라 심사 일정을 미리 공개할 이유입니다.",
      en: "Farming and fishing face volatile incomes and long investment horizons, so the demand for a predictable tax-support timetable is legitimate. But a sunset is not merely a date on which support suddenly stops. It is a promise to reassess the results and beneficiaries of revenue forgone. The government's plan separated preferences into permanent, extended and expiring categories; these bills would move a broad collection of national and local preferences to one date in 2030. A 'comprehensive review' without cost and beneficiary tables can become blanket renewal rather than comprehensive scrutiny. Parliament should review the bills together, distinguish working producers from corporations, cooperatives and institutions, and put national and local revenue losses in one table. Predictability is a reason to publish the review schedule in advance, not to remove meaningful review.",
    },
    timeline: [
      { date: "2026-07-30", title: { ko: "정부, 2026년 세제개편안에서 농어업 특례를 상시화·연장·종료로 구분", en: "Government's 2026 tax reform plan sorts agricultural preferences into permanent, extended and expiring categories" } },
      { date: "2026-09-22", title: { ko: "조세특례제한법·지방세특례제한법 개정안 발의", en: "National and local tax preference amendment bills introduced" } },
      { date: "2026-09-23", title: { ko: "씨앗의 소리 확인·분석", en: "Verified and analyzed by Seed Voice" } },
    ],
    sources: [
      { label: { ko: "국회 의안 제2221545호 조세특례제한법 개정안", en: "National Assembly Bill 2221545: Restriction of Special Taxation Act amendment" }, url: farmFisheryNationalTaxBill },
      { label: { ko: "국회 의안 제2221543호 지방세특례제한법 개정안", en: "National Assembly Bill 2221543: Restriction of Special Local Taxation Act amendment" }, url: farmFisheryLocalTaxBill },
      { label: { ko: "기획재정부 2026년 세제개편안 상세본", en: "Ministry of Economy and Finance: 2026 tax reform plan (detailed)" }, url: taxReformOfficialFile },
      { label: { ko: "세정신문 농림어업 조세특례 정비 내용", en: "Korea Tax News report on changes to agricultural tax preferences" }, url: taxReformAgricultureReport },
    ],
  },
  {
    slug: "tax-expenditure-cap-ratchet-bill",
    importance: 81,
    status: { ko: "법안 발의", en: "Bill introduced" },
    title: {
      ko: "감면 한도 초과가 다음 한도를 올리는 고리, 끊자는 법안",
      en: "Bill targets the ratchet that lets tax-break overruns lift future caps",
    },
    summary: {
      ko: "국세감면율이 법정 한도를 넘은 해에는 실제 감면율 대신 그해 한도를 다음 한도 계산에 넣도록 하는 국가재정법 개정안이 발의됐습니다. 초과 실적이 이후 3년 평균과 한도를 자동으로 끌어올리는 구조를 막자는 제안입니다.",
      en: "A proposed National Finance Act amendment would use the statutory cap, rather than the higher actual tax-expenditure rate, when an overrun feeds into future cap calculations. It is designed to stop an overrun from mechanically raising the rolling average and later caps.",
    },
    affected: {
      ko: "모든 납세자 · 조세특례 수혜 기업·개인 · 재정당국",
      en: "All taxpayers · Beneficiaries of tax preferences · Fiscal authorities",
    },
    checkedAt: "2026-09-22",
    heroImage: {
      ko: "images/monitoring/tax-expenditure-cap-ratchet-ko.png",
      en: "images/monitoring/tax-expenditure-cap-ratchet-en.png",
      alt: {
        ko: "국세감면율 한도 초과 실적이 다음 한도에 반영되는 현행 구조와 개정안의 차이를 설명한 도표",
        en: "Diagram comparing the current tax-expenditure cap ratchet with the proposed rule",
      },
      caption: {
        ko: "현행 한도는 직전 3년 실제 국세감면율 평균에 0.5%포인트를 더해 계산합니다. 개정안은 초과한 해의 실제값 대신 한도를 쓰도록 합니다. 2026년 전망 16.1%는 그해 한도 16.5% 이내입니다.",
        en: "The current cap is the prior three-year average actual tax-expenditure rate plus 0.5 percentage point. The bill would substitute the cap for an over-limit actual rate. The 2026 forecast of 16.1% is within that year's 16.5% cap.",
      },
    },
    processNote: {
      ko: "2026년 9월 21일 발의된 의원입법안으로 아직 확정된 법률이 아닙니다. 국회 심사 과정에서 계산 방식과 시행시점이 달라질 수 있습니다.",
      en: "This private member's bill was introduced on September 21, 2026 and has not been enacted. Its formula and effective date may change during National Assembly review.",
    },
    oneSentence: {
      ko: "조세감면 한도를 넘긴 실적이 다음 한도를 다시 높이는 자동 상승 고리를 끊어, 걷지 않은 세금에 대한 재정 규율을 강화하자는 법안입니다.",
      en: "The bill would break the automatic ratchet by which an over-limit tax-expenditure result raises later caps, tightening discipline over revenue forgone through tax preferences.",
    },
    keyChanges: [
      {
        title: { ko: "초과 실적 대신 한도를 대입", en: "Substitute the cap for an overrun" },
        body: {
          ko: "어느 해의 실제 국세감면율이 그해 한도를 넘으면, 이후 한도를 계산할 때 높은 실제값이 아니라 당시 한도를 사용합니다.",
          en: "If the actual tax-expenditure rate exceeds that year's cap, later cap calculations would use the cap itself instead of the higher actual rate.",
        },
      },
      {
        title: { ko: "3년 평균의 자동 상승을 제한", en: "Limit the rolling-average ratchet" },
        body: {
          ko: "현행 한도는 직전 3년 실제 감면율 평균에 0.5%포인트를 더합니다. 개정안은 초과가 반복될수록 계산 기준까지 높아지는 효과를 줄입니다.",
          en: "The current cap equals the prior three-year average actual rate plus 0.5 percentage point. The amendment would reduce the tendency of repeated overruns to lift the benchmark itself.",
        },
      },
    ],
    changeMap: [
      {
        title: { ko: "시민의 부담", en: "Citizen burden" },
        items: [
          { ko: "당장 세율이나 개인의 공제액을 바꾸는 법안은 아닙니다.", en: "The bill would not immediately change tax rates or an individual's deduction." },
          { ko: "다만 향후 비과세·감면 확대 여지를 줄여 세입 기반과 일반 납세자의 형평에 영향을 줄 수 있습니다.", en: "It could narrow room for future exemptions and credits, affecting the revenue base and fairness among taxpayers." },
        ],
      },
      {
        title: { ko: "기업과 수혜자의 선택", en: "Enterprise and beneficiary choice" },
        items: [
          { ko: "새 특례를 만들거나 기존 특례를 연장할 때 더 분명한 우선순위와 재원 보완이 요구될 수 있습니다.", en: "New or extended preferences may face clearer prioritization and offset requirements." },
          { ko: "어떤 감면을 먼저 정비하느냐에 따라 업종·기업·가구별 영향은 달라집니다.", en: "Effects will differ across sectors, firms and households depending on which preferences are reviewed first." },
        ],
      },
      {
        title: { ko: "숨은 재정비용", en: "Less-visible fiscal cost" },
        items: [
          { ko: "2026년 국세감면액은 약 80조5천억 원, 감면율은 16.1%로 전망됐습니다.", en: "Tax expenditures are projected at about KRW 80.5 trillion in 2026, with a 16.1% rate." },
          { ko: "2026년 전망은 한도 16.5% 이내이며, 이번 법안은 특정 연도의 즉시 삭감이 아니라 향후 한도 산식의 규율을 다룹니다.", en: "The 2026 forecast is within the 16.5% cap; the bill concerns future cap mechanics, not an immediate cut for a particular year." },
        ],
      },
    ],
    officialRationale: {
      ko: "발의자는 실제 국세감면율이 한도를 넘더라도 그 초과 실적이 다음 한도 산정에 반영돼 한도가 계속 높아질 수 있다고 지적합니다. 국회 결산심사에서도 이런 산식이 국세감면율 관리 취지에 맞지 않는다는 의견이 제기됐다는 설명입니다.",
      en: "The sponsor argues that an actual rate above the cap can still enter the next calculation and keep lifting the cap. The bill cites concerns raised during the National Assembly's settlement review that this formula undermines the purpose of managing the tax-expenditure rate.",
    },
    risks: [
      { ko: "국세감면 한도는 강제 삭감선이 아니라 정부가 지키도록 노력해야 하는 기준이어서, 산식만 바꿔도 초과를 막지 못할 수 있습니다.", en: "Because the cap is an endeavor obligation rather than an automatic cut, changing the formula alone may not prevent overruns." },
      { ko: "경기 위기나 전략산업 지원처럼 한시적으로 감면 수요가 커지는 때에는 정책 대응 여지가 줄 수 있습니다.", en: "The rule could reduce flexibility when temporary relief expands during a downturn or for strategic-industry support." },
      { ko: "총량만 관리하고 수혜자·성과를 공개하지 않으면 효과 낮은 특례보다 정치적으로 약한 특례가 먼저 줄어들 수 있습니다.", en: "Without beneficiary and performance disclosure, aggregate control could cut politically weaker preferences before low-performing ones." },
    ],
    questions: [
      { ko: "정부는 최근 3년의 한도·실적과 초과 원인을 매년 같은 표로 공개합니까?", en: "Will the government publish each of the prior three years' caps, actual rates and drivers of any overrun in one consistent table?" },
      { ko: "한도를 넘으면 어떤 비과세·감면을 어떤 성과 기준으로 먼저 재검토합니까?", en: "If the cap is exceeded, which exemptions or credits will be reviewed first and against what performance criteria?" },
      { ko: "노력 의무에 그치지 않도록 국회 보고·시정계획·세수보완책을 의무화합니까?", en: "Will reporting to Parliament, a corrective plan and revenue offsets be required so the cap is more than an endeavor obligation?" },
      { ko: "새 생산세액공제와 근로장려금 확대 등 추가 감면은 기존 저성과 특례의 종료와 함께 제시됩니까?", en: "Will new production credits and expanded earned-income credits be paired with the end of low-performing preferences?" },
    ],
    seedView: {
      ko: "조세감면은 지원이라는 이름을 쓰지만, 걷지 않은 세금으로 만든 재정 선택입니다. 위기 대응과 성장 투자를 위해 감면이 필요할 수 있다는 반론도 타당합니다. 그러나 한도를 넘긴 실적이 다음 한도를 올리는 구조라면 한도는 통제선보다 이동하는 기준점이 됩니다. 이번 개정안은 그 자동 상승 고리를 끊는 최소한의 장치입니다. 동시에 한도가 노력 의무에 머무는 약점도 남습니다. 국회는 산식 개정과 함께 초과 사유, 수혜자, 성과, 종료할 특례와 세수보완책을 공개하게 해야 합니다.",
      en: "Tax preferences are described as support, but they remain fiscal choices made through revenue forgone. The counterargument—that relief may be necessary in crises or for growth investment—is valid. Yet a cap becomes a moving reference point rather than a control when an overrun helps raise the next cap. This amendment is a minimum safeguard against that ratchet. Its weakness remains that the cap is still only an endeavor obligation. Parliament should pair the formula change with mandatory disclosure of overrun causes, beneficiaries, outcomes, preferences to be ended and revenue offsets.",
    },
    timeline: [
      { date: "2026-03-31", title: { ko: "정부, 2026년도 조세지출 기본계획 의결", en: "Government approves the 2026 Tax Expenditure Basic Plan" } },
      { date: "2026-09-21", title: { ko: "국가재정법 개정안 제2221495호 발의", en: "National Finance Act amendment Bill 2221495 introduced" } },
      { date: "2026-09-22", title: { ko: "씨앗의 소리 확인·분석", en: "Verified and analyzed by Seed Voice" } },
    ],
    sources: [
      { label: { ko: "국회 의안 제2221495호 국가재정법 개정안", en: "National Assembly Bill 2221495: National Finance Act amendment" }, url: taxExpenditureCapBill },
      { label: { ko: "국가법령정보센터 국가재정법", en: "Korean Law Information Center: National Finance Act" }, url: nationalFinanceAct },
      { label: { ko: "이데일리 2026년도 조세지출 기본계획 보도", en: "Edaily report on the 2026 Tax Expenditure Basic Plan" }, url: taxExpenditurePlanReport },
    ],
  },
  {
    slug: "content-strategy-special-account-rebate-bill",
    importance: 84,
    status: { ko: "법안 발의", en: "Bill introduced" },
    title: {
      ko: "콘텐츠 지원 특별회계 신설안—현금환급·세제·부담금 경감",
      en: "Content bill proposes a special account, cash rebates and tax relief",
    },
    summary: {
      ko: "콘텐츠산업을 국가전략산업으로 지정하고 별도 특별회계, 제작비 현금환급, 세제·정책금융 우대, 지역방송 부담금 경감을 묶어 지원하는 법안이 발의됐습니다. 공식 요약에는 총비용·환급률·감면 규모가 제시되지 않았습니다.",
      en: "A new bill would designate content as a national strategic industry and combine a dedicated special account, production-spending cash rebates, tax and policy-finance preferences, and levy relief for regional broadcasters. Its official summary gives no total cost, rebate rate or relief estimate.",
    },
    affected: {
      ko: "콘텐츠 제작사 · OTT · 지역방송 · 납세자",
      en: "Content producers · Streaming platforms · Regional broadcasters · Taxpayers",
    },
    checkedAt: "2026-09-19",
    heroImage: {
      ko: "images/monitoring/content-strategy-support-flow-ko.png",
      en: "images/monitoring/content-strategy-support-flow-en.png",
      alt: {
        ko: "콘텐츠산업 특별회계에서 현금환급, 세제·금융 우대, 펀드, 부담금 경감으로 지원이 흐르는 구조",
        en: "Flow diagram showing a content-industry special account funding cash rebates, tax and finance preferences, funds, and levy relief",
      },
      caption: {
        ko: "법안이 제시한 네 갈래 지원 구조입니다. 공식 요약에는 특별회계 규모, 환급률, 부담금 경감액이 없습니다.",
        en: "The bill's four support channels. The official summary does not state the special-account size, rebate rate or value of levy relief.",
      },
    },
    processNote: {
      ko: "2026년 9월 18일 발의된 의원입법안으로, 아직 확정된 법률이 아닙니다. 국회 심사 과정에서 지원 대상·재원·환급 기준과 시행시점이 달라질 수 있습니다.",
      en: "This private member's bill was introduced on September 18, 2026 and has not been enacted. Eligibility, funding, rebate rules and timing may change during National Assembly review.",
    },
    oneSentence: {
      ko: "콘텐츠산업 지원을 특별회계와 현금환급·세제·부담금 경감으로 상시화하는 틀을 만들지만, 시민이 부담할 총비용과 종료 기준은 아직 보이지 않습니다.",
      en: "The bill would create a standing framework of special-account funding, cash rebates, tax preferences and levy relief, without yet showing taxpayers the total cost or an exit rule.",
    },
    keyChanges: [
      {
        title: { ko: "제작비를 현금으로 환급", en: "Cash rebates for production spending" },
        body: {
          ko: "국내에서 제작·투자하는 외국 사업자와 일정 규모 이상의 국내 제작·투자사에 적격지출 기본환급금과 추가환급을 지급할 수 있게 합니다. 공식 요약에는 환급률·상한·적격지출 범위가 없습니다.",
          en: "Foreign producers investing in Korea and qualifying domestic producers or investors could receive base and additional rebates for eligible spending. The summary does not specify rates, caps or eligible-cost rules.",
        },
      },
      {
        title: { ko: "특별회계·세제·부담금 지원을 한 틀에", en: "One framework for accounts, tax and levy relief" },
        body: {
          ko: "콘텐츠전략산업발전특별회계와 두 종류의 펀드를 만들고, 세제·정책금융 우대와 지역 방송사업자 부담금 경감, OTT 상생투자협력금 인센티브의 근거를 둡니다.",
          en: "It would establish a dedicated special account and two funds, while authorizing tax and policy-finance preferences, levy relief for regional broadcasters, and incentives tied to voluntary OTT cooperation payments.",
        },
      },
    ],
    changeMap: [
      {
        title: { ko: "시민의 부담", en: "Citizen burden" },
        items: [
          { ko: "현금환급은 예산 지출이고 세제 우대와 부담금 경감은 정부 수입 감소입니다.", en: "Cash rebates are budget outlays; tax preferences and levy relief reduce public revenue." },
          { ko: "세 수단의 비용을 합친 총액이 공개돼야 다른 분야 지출과 비교할 수 있습니다.", en: "A combined cost is needed to compare this package with other public spending." },
        ],
      },
      {
        title: { ko: "기업의 선택", en: "Enterprise choice" },
        items: [
          { ko: "국내 제작과 지식재산권 국내 귀속에 유리한 계약은 더 큰 지원을 받을 수 있습니다.", en: "Domestic production and contracts keeping intellectual property in Korea could receive preferential support." },
          { ko: "전략콘텐츠 지정과 환급 기준에 따라 같은 업종에서도 지원 조건이 달라집니다.", en: "Strategic-content designation and rebate rules could create different conditions within the same industry." },
        ],
      },
      {
        title: { ko: "정부의 권한", en: "Government power" },
        items: [
          { ko: "콘텐츠산업전략위원회가 기본계획과 부처 간 재원 배분을 심의·의결합니다.", en: "A Content Industry Strategy Committee would decide plans and inter-ministerial resource allocation." },
          { ko: "특별회계·펀드·환급의 선정 기준과 사후 성과 공개가 핵심 통제장치가 됩니다.", en: "Eligibility rules and public performance reporting become the key safeguards for the account, funds and rebates." },
        ],
      },
    ],
    officialRationale: {
      ko: "발의자는 글로벌 OTT 확산으로 국내 제작사의 지식재산권과 투자 기반이 취약해졌고, 영국·캐나다 등과의 제작 유치 경쟁에 대응하려면 정책금융·세제·재정 지원을 한 체계로 묶어야 한다고 설명합니다. 2030년 K-컬처 300조 원, 문화수출 50조 원 등의 정부 목표도 근거로 들었습니다.",
      en: "The sponsors argue that global streaming growth has weakened domestic producers' intellectual-property and financing position, and that Korea needs an integrated package of fiscal, tax and policy-finance support to compete with production incentives in countries such as the United Kingdom and Canada. They also cite the government's 2030 targets for a KRW 300 trillion K-culture economy and KRW 50 trillion in cultural exports.",
    },
    risks: [
      { ko: "공식 요약에는 특별회계 재원, 연간 지출 한도, 현금환급률과 일몰기한이 제시되지 않았습니다.", en: "The summary provides no funding source, annual spending cap, rebate rate or sunset date." },
      { ko: "전략콘텐츠 지정과 우대 기준이 불투명하면 정부가 시장의 승자와 계약 형태를 고르는 권한이 커집니다.", en: "Opaque strategic-content and preference rules could expand government's power to select market winners and favored contract structures." },
      { ko: "OTT의 상생투자협력금이 실제로 자발적인지, 인센티브가 사실상 납부 압력으로 작동하지 않는지 확인해야 합니다.", en: "The voluntary nature of OTT cooperation payments needs scrutiny, including whether incentives create de facto pressure to contribute." },
    ],
    questions: [
      { ko: "특별회계·펀드·현금환급·세제 우대·부담금 경감을 모두 합친 연간 재정비용은 얼마입니까?", en: "What is the annual combined fiscal cost of the special account, funds, cash rebates, tax preferences and levy relief?" },
      { ko: "환급률·지출 상한·적격지출·전략콘텐츠는 누가 어떤 공개 기준으로 정합니까?", en: "Who will set the rebate rate, spending cap, eligible costs and strategic-content criteria, and under what published rules?" },
      { ko: "지원에 일몰과 정기 성과평가를 두고 기업별 수혜액과 고용·수출 성과를 공개합니까?", en: "Will support include a sunset and periodic review, with recipient-level benefits and employment and export outcomes disclosed?" },
    ],
    seedView: {
      ko: "콘텐츠산업의 협상력과 지식재산권을 키우자는 취지는 타당합니다. 그러나 특별회계는 미래 세금에 대한 고정된 청구권이고, 현금환급은 지출이며, 세제 우대와 부담금 경감은 보이지 않는 재정비용입니다. 서로 다른 이름으로 나눠 놓으면 전체 비용이 작아 보입니다. 국회는 지원 근거를 만들기 전에 모든 수단을 합친 비용표, 선정 기준, 일몰과 성과 공개 방식을 먼저 제시해야 합니다. 지원 패키지는 회계의 단위가 아닙니다.",
      en: "The case for stronger bargaining power and domestic intellectual-property ownership is credible. But a special account creates a standing claim on future taxes, cash rebates are spending, and tax preferences and levy relief are less visible fiscal costs. Splitting them across different labels can make the total look smaller than it is. Before authorizing the package, Parliament should publish one combined cost table, eligibility rules, a sunset and a performance-disclosure plan. A 'support package' is not an accounting unit.",
    },
    timeline: [
      { date: "2026-09-18", title: { ko: "콘텐츠산업 특별법안과 국가재정법 개정안 발의", en: "Content-industry bill and companion National Finance Act amendment introduced" } },
      { date: "2026-09-19", title: { ko: "씨앗의 소리 확인·분석", en: "Verified and analyzed by Seed Voice" } },
    ],
    sources: [
      { label: { ko: "국회 의안 제2221473호 콘텐츠산업 특별법안", en: "National Assembly Bill 2221473: Content Industry Special Act" }, url: contentStrategyBill },
      { label: { ko: "국회 의안 제2221472호 국가재정법 개정안", en: "National Assembly Bill 2221472: National Finance Act amendment" }, url: contentStrategyAccountBill },
    ],
  },
  {
    slug: "fuel-tax-cut-extended-november-2026",
    importance: 83,
    status: { ko: "입법예고", en: "Public notice" },
    title: { ko: "유류세 인하, 11월 말까지 두 달 더 연장", en: "Fuel-tax cuts extended for two more months" },
    summary: {
      ko: "정부가 휘발유·경유·LPG 부탄의 한시적 유류세 인하를 2026년 11월 30일까지 연장합니다. 리터당 세금은 인하 전보다 휘발유 122원, 경유 145원, 부탄 51원 낮은 수준이 유지됩니다.",
      en: "The government will extend temporary fuel-tax cuts on gasoline, diesel and LPG butane through November 30, 2026. Per-liter tax remains KRW 122 lower for gasoline, KRW 145 lower for diesel and KRW 51 lower for butane than before the cuts.",
    },
    affected: { ko: "운전자 · 화물·물류업 · 택시·LPG 차량 · 정유·주유업", en: "Drivers · Freight and logistics · Taxis and LPG vehicles · Refiners and fuel retailers" },
    checkedAt: "2026-09-18",
    deadline: "2026-09-23",
    heroImage: {
      ko: "images/monitoring/fuel-tax-extension-2026-ko.png",
      en: "images/monitoring/fuel-tax-extension-2026-en.png",
      alt: { ko: "휘발유·경유·LPG 부탄의 유류세 인하율과 리터당 세액을 비교한 도표", en: "Chart comparing fuel-tax reduction rates and per-liter tax for gasoline, diesel and LPG butane" },
      caption: {
        ko: "휘발유는 15%, 경유와 LPG 부탄은 25%의 인하율이 2026년 11월 30일까지 유지됩니다. 리터당 세액은 부가가치세를 포함한 금액입니다.",
        en: "The 15% gasoline cut and 25% diesel and LPG butane cuts remain through November 30, 2026. Per-liter figures include VAT.",
      },
    },
    processNote: {
      ko: "아직 확정된 시행령이 아닙니다. 2026년 9월 23일까지 의견을 받은 뒤 국무회의 의결을 거쳐 적용될 예정입니다.",
      en: "The decrees are not final. Public comments remain open through September 23, 2026, after which Cabinet approval is required before implementation.",
    },
    oneSentence: {
      ko: "9월 말 끝날 예정이던 유류세 인하를 두 달 연장해 당장의 기름값 부담은 낮추지만, 감세에 따른 재정비용과 종료 기준은 공개되지 않았습니다.",
      en: "A two-month extension keeps immediate fuel costs lower, but the government has not disclosed the fiscal cost or a clear exit rule for the temporary tax cut.",
    },
    keyChanges: [
      {
        title: { ko: "인하율을 11월 말까지 유지", en: "Current reductions continue through November" },
        body: { ko: "휘발유 15%, 경유 25%, LPG 부탄 25%의 인하율을 2026년 11월 30일까지 두 달 더 적용합니다.", en: "The 15% cut for gasoline and 25% cuts for diesel and LPG butane will remain in effect through November 30, 2026." },
      },
      {
        title: { ko: "리터당 세금은 현 수준 유지", en: "Per-liter tax stays at current levels" },
        body: { ko: "부가가치세를 포함한 리터당 세금은 휘발유 698원, 경유 436원, 부탄 152원으로 유지됩니다. 인하 전보다 각각 122원, 145원, 51원 낮습니다.", en: "Including VAT, tax remains KRW 698 per liter for gasoline, KRW 436 for diesel and KRW 152 for butane—respectively KRW 122, KRW 145 and KRW 51 below pre-cut levels." },
      },
    ],
    changeMap: [
      {
        title: { ko: "시민의 부담", en: "Citizen burden" },
        items: [
          { ko: "운전자와 LPG 차량 이용자의 세 부담이 두 달 더 낮게 유지됩니다.", en: "Drivers and LPG-vehicle users keep the lower tax burden for two more months." },
          { ko: "실제 주유 가격은 국제유가·환율·유통마진에 따라 세금 인하 폭과 다르게 움직일 수 있습니다.", en: "Pump prices may not move one-for-one with the tax cut because crude prices, exchange rates and retail margins also matter." },
        ],
      },
      {
        title: { ko: "일과 기업활동", en: "Work and enterprise" },
        items: [
          { ko: "화물·물류·택시 등 연료비 비중이 큰 업종의 단기 운영비 부담을 낮춥니다.", en: "The extension lowers near-term operating costs for freight, logistics, taxis and other fuel-intensive businesses." },
          { ko: "두 달 단위 연장은 운송계약과 비용 계획의 예측 가능성을 충분히 높이지 못합니다.", en: "Two-month extensions still provide limited predictability for transport contracts and cost planning." },
        ],
      },
      {
        title: { ko: "정부의 재정책임", en: "Fiscal accountability" },
        items: [
          { ko: "감세에 따른 두 달간의 세수 감소 규모가 입법예고 페이지에 제시되지 않았습니다.", en: "The notice page does not state the two-month revenue cost of the extension." },
          { ko: "국제유가·환율·물가 중 어떤 조건에서 인하를 끝낼지 기준이 필요합니다.", en: "The government should specify which oil-price, exchange-rate or inflation conditions would end the cut." },
        ],
      },
    ],
    officialRationale: {
      ko: "정부는 중동 정세 불안이 이어지는 상황에서 국민의 유류비 부담을 줄이되 향후 대응 여력을 남기기 위해 현행 인하율을 두 달 연장한다고 설명합니다.",
      en: "The government says the extension will ease fuel-cost pressure amid continuing instability in the Middle East while preserving room for later policy responses.",
    },
    risks: [
      { ko: "짧은 연장이 반복되면 한시 조치의 종료 시점과 기준이 불투명해집니다.", en: "Repeated short extensions make the end date and exit criteria of a temporary measure unclear." },
      { ko: "세수 감소 규모를 밝히지 않으면 시민이 부담 완화의 편익과 재정비용을 함께 판단하기 어렵습니다.", en: "Without a revenue estimate, citizens cannot weigh immediate relief against the fiscal cost." },
      { ko: "국제유가와 유통마진이 오르면 세금 인하가 소비자가격에 온전히 반영되지 않을 수 있습니다.", en: "Higher crude prices or retail margins can prevent the full tax reduction from reaching consumers." },
    ],
    questions: [
      { ko: "이번 두 달 연장으로 줄어드는 세수는 정확히 얼마입니까?", en: "Exactly how much revenue will be forgone during the two-month extension?" },
      { ko: "유류세 인하를 종료하거나 조정할 국제유가·환율·물가 기준은 무엇입니까?", en: "What oil-price, exchange-rate or inflation thresholds will trigger an adjustment or end the cut?" },
      { ko: "유종별 세금 인하분이 실제 주유소 가격에 얼마나 반영되는지 공개합니까?", en: "Will the government publish how much of each fuel's tax cut is passed through at the pump?" },
    ],
    seedView: {
      ko: "시민과 운송업의 당장 부담을 낮추는 감세는 필요할 수 있습니다. 그러나 ‘두 달 더’가 반복되면 한시 조치는 예측 가능한 세제가 아니라 상황에 따라 연장되는 행정 수단이 됩니다. 정부는 부담 완화만 설명할 것이 아니라 줄어드는 세수, 가격 반영률, 종료 조건을 함께 공개해야 합니다. 그래야 시민은 오늘의 기름값과 내일의 재정비용을 동시에 판단할 수 있습니다.",
      en: "Tax relief can be justified when households and transport businesses face immediate pressure. But repeated two-month extensions turn a temporary measure into a discretionary tool rather than a predictable tax rule. The government should publish the revenue cost, retail pass-through and exit conditions so citizens can assess today's fuel-price relief alongside tomorrow's fiscal cost.",
    },
    timeline: [
      { date: "2026-09-18", title: { ko: "두 시행령 개정안 입법예고·씨앗의 소리 확인", en: "Two decree amendments opened for public comment and verified by Seed Voice" } },
      { date: "2026-09-23", title: { ko: "시민 의견 제출 마감", en: "Public comment deadline" } },
      { date: "2026-10-01", title: { ko: "연장 적용 시작 예정", en: "Planned start of the extension" } },
      { date: "2026-11-30", title: { ko: "현 인하 조치 종료 예정", en: "Scheduled expiry of current reductions" } },
    ],
    sources: [
      { label: { ko: "재정경제부 교통·에너지·환경세법 시행령 입법예고", en: "MOFE notice on the Transportation, Energy and Environment Tax decree" }, url: fuelTaxNotice },
      { label: { ko: "재정경제부 개별소비세법 시행령 입법예고", en: "MOFE notice on the Individual Consumption Tax decree" }, url: lpgTaxNotice },
      { label: { ko: "매일경제 유류세 인하 연장 보도", en: "Maeil Business report on the fuel-tax extension" }, url: fuelTaxReport },
    ],
  },
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
