import type { TaxCommentary } from "./taxCommentaries";

export const taxExpenditureCapCommentary: TaxCommentary = {
  slug: "who-fills-the-tax-break-gap",
  relatedPolicySlug: "tax-expenditure-cap-ratchet-bill",
  date: "2026-09-22",
  readMinutes: 7,
  heroSrc: "images/tax/tax-expenditure-cap-commentary/household-tax-gap.webp",
  bodyImage: {
    src: "images/tax/tax-expenditure-cap-commentary/small-business-receipts.webp",
    afterSection: 2,
    alt: {
      ko: "서울의 작은 수리점에서 자영업자가 영수증과 계산기를 확인하는 생활 현장",
      en: "A small-business owner reviews receipts and a calculator inside a neighborhood repair shop in Seoul",
    },
    caption: {
      ko: "세금감면은 정부 장부에서 끝나지 않습니다. 덜 걷은 세금은 다른 납세자의 부담, 국가채무 또는 줄어든 공공서비스로 이어질 수 있습니다.",
      en: "Tax relief does not end in a government ledger. Revenue forgone can reappear as a burden on other taxpayers, higher public debt or fewer public services.",
    },
  },
  sources: [
    {
      label: { ko: "국회 의안 제2221495호 — 국가재정법 일부개정법률안", en: "National Assembly Bill 2221495 — National Finance Act amendment" },
      url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221495/detailRP",
    },
    {
      label: { ko: "국가법령정보센터 — 국가재정법 제88조", en: "Korean Law Information Center — National Finance Act, Article 88" },
      url: "https://www.law.go.kr/LSW//lsSideInfoP.do?docCls=jo&joBrNo=00&joNo=0088&lsiSeq=288569&urlMode=lsScJoRltInfoR",
    },
    {
      label: { ko: "국가법령정보센터 — 조세특례제한법 제142조의2", en: "Korean Law Information Center — Restriction of Special Taxation Act, Article 142-2" },
      url: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsId=001584&lsJoLnkSeq=1000262558&print=print",
    },
    {
      label: { ko: "재정경제부·KDI 경제정보센터 — 2026년 조세지출 기본계획", en: "Ministry of Economy and Finance and KDI — 2026 Tax Expenditure Basic Plan" },
      url: "https://eiec.kdi.re.kr/policy/materialView.do?num=278710",
    },
    {
      label: { ko: "국회예산정책처 — 2026년도 조세지출예산서 분석", en: "National Assembly Budget Office — Analysis of the 2026 Tax Expenditure Budget" },
      url: "https://nabo.go.kr/ko/report/analysisView.do?key=2509250001&idx=8936",
    },
  ],
  editions: {
    ko: {
      title: "정부가 세금을 덜 걷으면, 그 빈자리는 누가 메우나",
      subtitle: "초과한 감면 실적이 다음 한도까지 높이는 구조—법안은 고리를 끊지만 특혜를 가려내지는 못합니다",
      summary: "세금감면은 공짜 지원이 아닙니다. 정부가 특정 개인이나 기업에게 받지 않은 세금은 다른 납세자의 부담, 국가채무 또는 줄어든 공공서비스로 남을 수 있습니다. 국세감면 한도를 넘긴 실적이 다음 한도까지 끌어올리는 구조를 막자는 법안은 타당합니다. 다만 총량만 묶어서는 어떤 감면이 필요하고 어떤 특혜가 끝나야 하는지 가려낼 수 없습니다.",
      keyPoints: [
        "이 법안은 당장 개인의 세율을 올리거나 소득공제 하나를 없애는 법안이 아닙니다.",
        "초과한 국세감면 실적을 다음 한도 계산에 그대로 넣어 한도가 따라 올라가는 구조를 막는 법안입니다.",
        "일반 납세자를 보호하려면 총량뿐 아니라 감면을 받은 대상·금액·성과·종료 기준을 함께 공개해야 합니다.",
      ],
      heroAlt: "가계 영수증과 계산기, 비어 있는 장부를 앞에 두고 하루를 준비하는 평범한 한국 가정",
      heroCaption: "정부가 받지 않은 세금은 사라지지 않습니다. 다른 시민이 더 부담하거나, 국가가 빚을 내거나, 필요한 서비스가 줄어드는 방식으로 빈자리가 남습니다.",
      sections: [
        {
          title: "80조 원이 넘는 돈인데도 ‘지출’처럼 보이지 않습니다",
          paragraphs: [
            "2026년 정부의 조세지출 기본계획은 국세감면액을 약 80조5천억 원으로 전망했습니다. 국가 예산에서 현금을 지급한 돈은 아닙니다. 비과세와 소득공제, 세액공제, 우대세율처럼 원래 받을 세금을 받지 않기로 한 금액입니다.",
            "그래서 이름도 조세‘지출’입니다. 현금 보조금을 주면 예산서에 지출로 나타나지만 세금을 깎아주면 세입이 줄어드는 방식으로 나타납니다. 기업의 투자와 연구개발을 돕거나 근로자와 취약계층의 부담을 덜기 위해 필요한 감면도 있습니다. 하지만 좋은 목적을 붙였다고 비용까지 사라지는 것은 아닙니다.",
            "정부가 한 사람에게 덜 받은 세금은 장부에서 증발하지 않습니다. 다른 납세자가 더 부담하거나, 국가가 빚을 내거나, 다른 곳에 쓸 재원이 줄어듭니다. 세금감면도 시민이 함께 부담하는 재정 선택입니다.",
          ],
          quote: "세금을 덜 걷는 것도 돈을 쓰는 일입니다. 다만 계산서가 덜 보일 뿐입니다.",
        },
        {
          title: "생활비 한도를 넘긴 뒤, 다음 한도까지 올리는 셈입니다",
          paragraphs: [
            "현행 국세감면 한도는 직전 3년의 실제 국세감면율 평균에 0.5%포인트를 더해 계산합니다. 문제는 어느 해에 실제 감면율이 한도를 넘더라도 그 높은 실적이 다음 3년 평균에 들어간다는 점입니다. 한도를 넘긴 결과가 다시 미래의 한도를 올립니다.",
            "가계가 한 달 생활비 한도를 300만 원으로 정해놓고 350만 원을 쓴 뒤, 다음 달부터는 350만 원을 기준으로 새 한도를 계산하는 것과 비슷합니다. 한도를 지키지 못했는데 한도가 지출을 따라 움직이면 통제선은 점점 의미를 잃습니다.",
            "9월 21일 발의된 국가재정법 개정안은 실제 감면율이 한도를 넘은 해에는 높은 실제값 대신 그해 한도를 다음 계산에 넣도록 제안합니다. 350만 원을 썼더라도 다음 계산에는 원래 한도인 300만 원만 반영하자는 것입니다.",
          ],
        },
        {
          title: "평범한 시민에게 당장 달라지는 세금은 없습니다",
          paragraphs: [
            "이 법안이 통과된다고 당장 월급에서 세금이 더 빠져나가거나 지금 받는 소득공제가 자동으로 사라지는 것은 아닙니다. 특정 감면을 폐지하는 법안도 아닙니다. 정부가 앞으로 전체 세금감면의 한도를 계산하는 방식을 더 엄격하게 바꾸는 법안입니다.",
            "시민이 얻는 이익은 간접적이지만 분명합니다. 새로운 감면을 만들거나 기존 혜택을 연장할 때 정부와 국회가 우선순위를 더 엄격히 따지게 됩니다. 성과가 낮은 특혜가 관성적으로 이어지는 것을 막으면 일반 납세자의 세입 기반과 미래세대의 부담을 지킬 수 있습니다.",
            "기업에도 같은 기준이 필요합니다. 도전과 투자를 돕는 예측 가능한 세제는 필요하지만, 정부와 가까운 업종이나 목소리가 큰 이해집단이 혜택을 먼저 가져가는 구조는 시장의 자유가 아니라 특권입니다. 기업 지원은 성과와 종료 조건이 보일 때 신뢰를 얻습니다.",
          ],
        },
        {
          title: "총량만 묶으면 힘없는 감면부터 잘릴 수도 있습니다",
          paragraphs: [
            "감면 한도를 낮게 유지한다고 모든 문제가 해결되는 것은 아닙니다. 근로장려, 취약계층 지원, 경기침체기의 한시 감면, 연구개발과 초기 투자처럼 사회적 편익이 큰 제도도 조세지출에 포함됩니다. 필요한 감면까지 기계적으로 줄이면 시민의 생활과 기업의 도전을 오히려 위축시킬 수 있습니다.",
            "더 큰 위험은 무엇을 줄일지 공개하지 않은 채 총량만 맞추는 경우입니다. 정치적으로 힘센 업종의 감면은 남고, 목소리가 작은 가구나 중소기업의 혜택이 먼저 정비될 수 있습니다. 숫자는 한도 안으로 들어와도 불공정은 그대로 남습니다.",
            "따라서 감면액만 공개해서는 부족합니다. 누가 얼마를 받았는지, 그 감면으로 고용과 투자 또는 생활 안정이 실제로 얼마나 늘었는지, 성과가 없을 때 언제 끝나는지를 함께 보여줘야 합니다.",
          ],
          quote: "총량은 특혜의 크기를 보여줄 수 있지만, 누구의 특혜인지까지 말해주지는 않습니다.",
        },
        {
          title: "산식은 고치되, 감면의 이름표와 성적표도 공개해야 합니다",
          paragraphs: [
            "씨앗은 이번 개정안의 방향에 동의합니다. 한도를 넘긴 실적이 다음 한도를 다시 높이는 자동 상승 고리는 끊어야 합니다. 지키지 못한 기준을 다음 기준으로 삼는다면 한도는 통제선이 아니라 뒤따라 움직이는 숫자가 됩니다.",
            "그러나 현행 국세감면 한도는 정부가 넘지 않도록 노력해야 하는 기준입니다. 산식을 고쳐도 초과 자체가 자동으로 차단되는 것은 아닙니다. 2026년 개정된 국가재정법은 한도를 넘으면 그 내역과 사유를 국회에 제출하도록 했지만, 어떤 감면을 어떻게 바로잡을지까지 자동으로 결정하지는 않습니다.",
            "다음 국회 심사에서 볼 항목은 분명합니다. 최근 3년의 한도와 실제 감면율, 초과 원인, 감면별 수혜자와 금액, 성과평가, 종료할 특례와 새 감면의 재원 보완책입니다. 이 표가 공개되지 않으면 산식 개정은 장부의 규칙만 바꾸고 특혜의 내용은 그대로 두는 일이 될 수 있습니다.",
            "세금감면은 공짜가 아닙니다. 누군가의 세금을 깎아주면 그 빈자리는 다른 시민과 미래세대가 메웁니다. 감면이 필요하다면 이유와 성과를 밝히고, 필요가 끝났다면 혜택도 끝내야 합니다. 시민이 확인해야 할 것은 감면의 이름이 아니라 누가 혜택을 받고 어떤 결과를 남겼는가입니다.",
          ],
        },
      ],
      chart: {
        title: "이 법안이 시민에게 바꾸는 것과 바꾸지 않는 것",
        description: "당장의 세금 변화와 앞으로의 재정 규율을 구분해 읽어야 합니다.",
        headers: ["구분", "당장 달라지는가", "법안의 실제 효과", "시민이 확인할 점"],
        rows: [
          ["개인 세율·공제", "자동으로 바뀌지 않음", "특정 공제를 폐지하는 법안이 아님", "향후 어떤 감면을 정비하는가"],
          ["국세감면 한도", "계산 방식이 바뀜", "초과 실적이 미래 한도를 올리는 효과를 제한", "최근 3년 한도·실적·초과 원인"],
          ["일반 납세자", "즉각적인 환급은 없음", "세입 기반과 부담의 형평을 지킬 가능성", "누가 감면을 받고 누가 빈자리를 메우는가"],
          ["감면 수혜자", "기존 혜택이 즉시 종료되지는 않음", "신설·연장 심사가 엄격해질 가능성", "수혜액·성과·일몰·환수 기준"],
        ],
        note: "자료: 국회 의안 제2221495호, 국가재정법 제88조, 2026년 조세지출 기본계획. 개정안은 2026년 9월 22일 현재 국회 심사 전 단계이며 내용과 시행시점은 달라질 수 있습니다.",
        afterSection: 1,
      },
      sourceNote: "이 글은 2026년 9월 21일 발의된 국회 의안 제2221495호의 제안이유와 주요내용, 국가재정법 제88조, 조세특례제한법상 조세지출 정의, 2026년 조세지출 기본계획과 국회예산정책처 분석을 기준으로 작성했습니다. 2026년 국세감면액 약 80조5천억 원은 2026년 3월 기본계획의 전망치이며 다른 시점의 예산서 전망과 차이가 있을 수 있습니다. 개정안은 아직 확정된 법률이 아니며 국회 심사에서 산식과 시행시점이 바뀔 수 있습니다. 씨앗의 소리는 위원회 심사자료가 공개되면 수혜자별 감면액·성과평가·정비 순서가 함께 제시되는지 확인합니다.",
    },
    en: {
      title: "When government collects less tax, who fills the gap?",
      subtitle: "The bill would stop an overrun from lifting future tax-break caps—but it would not identify which preferences deserve to survive",
      summary: "A tax preference is not free support. Revenue the government chooses not to collect from selected households or firms can reappear as a burden on other taxpayers, higher debt or fewer public services. A bill to stop above-cap tax expenditure from raising future caps is a sensible restraint. But an aggregate ceiling alone cannot distinguish useful relief from entrenched privilege.",
      keyPoints: [
        "The bill would not immediately raise personal tax rates or abolish a particular deduction.",
        "It would stop an above-cap tax-expenditure result from automatically lifting the benchmark used for later caps.",
        "Protecting ordinary taxpayers also requires disclosure of recipients, amounts, outcomes and expiry rules for each preference.",
      ],
      heroAlt: "An ordinary Korean household starts the day beside bills, a calculator and a ledger with an empty column",
      heroCaption: "Revenue the government does not collect does not simply disappear. The gap can return through higher burdens on other taxpayers, more public debt or fewer public services.",
      sections: [
        {
          title: "More than KRW 80 trillion that does not look like spending",
          paragraphs: [
            "Korea's 2026 Tax Expenditure Basic Plan projected roughly KRW 80.5 trillion in national tax relief. This is not cash paid out of the budget. It is revenue forgone through exemptions, deductions, credits, preferential rates and similar provisions.",
            "That is why the official term is tax ‘expenditure.’ A grant appears as an outlay; a tax preference appears as lower revenue. Some preferences serve legitimate purposes, from supporting lower-income workers to encouraging research, investment and crisis response. A worthy objective, however, does not erase the fiscal cost.",
            "Revenue not collected from one beneficiary does not vanish from the public ledger. Other taxpayers may carry more of the burden, government may borrow, or less money may remain for other services. Tax relief is still a fiscal choice shared by citizens.",
          ],
          quote: "Collecting less tax is still a way of spending public resources. The bill is simply harder to see.",
        },
        {
          title: "It resembles raising next month's household limit after overspending",
          paragraphs: [
            "Korea's tax-expenditure cap is calculated from the average actual rate over the previous three years plus 0.5 percentage point. When an actual rate exceeds its cap, however, that higher result still enters the rolling average. An overrun can therefore lift the future benchmark.",
            "Imagine a household setting a monthly spending limit of KRW 3 million, spending KRW 3.5 million and then using KRW 3.5 million as the basis for the next limit. If the limit keeps following the overrun, it gradually loses its meaning as a control.",
            "Bill 2221495, introduced on September 21, would use the cap rather than the higher actual rate for any year in which the cap was breached. Even if spending reached KRW 3.5 million in the analogy, the next calculation would still use the original KRW 3 million ceiling.",
          ],
        },
        {
          title: "Nothing changes immediately on an ordinary taxpayer's return",
          paragraphs: [
            "The bill would not automatically increase withholding, remove a household deduction or terminate a named preference. It changes the formula used to manage the overall room for future tax relief.",
            "The public benefit is indirect but real. New preferences and extensions of existing ones would face a tighter benchmark. Restraining ineffective benefits that persist by inertia can protect the revenue base, improve fairness among taxpayers and reduce pressure on future generations.",
            "The same standard should apply to business. Predictable tax rules can support risk-taking and investment, but advantages captured by politically connected sectors or powerful lobbies are not market freedom. Business support earns legitimacy when results and exit conditions are visible.",
          ],
        },
        {
          title: "An aggregate cap can cut the politically weak first",
          paragraphs: [
            "Not every tax preference is a privilege. Relief for working households, temporary crisis measures, research incentives and early-stage investment can create substantial public value. Mechanical cuts could harm household security or discourage productive risk-taking.",
            "The deeper risk appears when government meets an aggregate target without saying which items will be reviewed. Preferences defended by powerful sectors may survive while benefits used by smaller firms or less organized households are cut first. The total can fall while unfairness remains.",
            "Aggregate figures are therefore not enough. The public needs recipient groups, amounts, measurable employment, investment or household outcomes, and a clear expiry date when results fail to materialize.",
          ],
          quote: "A total can show the size of tax preferences. It cannot reveal whose privilege lies inside it.",
        },
        {
          title: "Fix the formula—and publish the labels and scorecards",
          paragraphs: [
            "Seed Voice supports the bill's direction. An overrun should not help raise the next ceiling. A benchmark that follows every breach becomes a moving reference point rather than a meaningful constraint.",
            "Yet Korea's statutory cap remains an endeavor obligation. Changing the formula does not automatically prevent a breach. A 2026 amendment to the National Finance Act requires the government to report the details and reasons to Parliament when the cap is exceeded, but it does not automatically decide which preferences must end.",
            "The committee record should therefore place the prior three years' caps and actual rates beside the causes of any overrun, recipient-level amounts, performance reviews, preferences proposed for termination and offsets for new relief. Without that table, the bill may improve the rule of the ledger while leaving the substance of privilege untouched.",
            "Tax relief is not free. When one beneficiary pays less, citizens and future taxpayers fill the gap. A preference that remains necessary should show its purpose and results; one whose purpose has expired should end. The decisive question is not the program's label, but who benefits and what the public receives in return.",
          ],
        },
      ],
      chart: {
        title: "What the bill would—and would not—change for citizens",
        description: "Immediate tax liabilities should be separated from the bill's longer-term fiscal constraint.",
        headers: ["Area", "Immediate change", "Likely effect", "What to scrutinize"],
        rows: [
          ["Personal rates and deductions", "No automatic change", "The bill does not abolish a named preference", "Which preferences are later reviewed"],
          ["Tax-expenditure cap", "Formula changes", "Limits the ability of an overrun to lift future caps", "Three-year caps, actual rates and causes"],
          ["Ordinary taxpayers", "No immediate refund", "May protect the revenue base and burden-sharing", "Who receives relief and who fills the gap"],
          ["Beneficiaries", "Existing relief does not end immediately", "New or extended preferences may face tighter review", "Amounts, outcomes, sunsets and clawbacks"],
        ],
        note: "Sources: National Assembly Bill 2221495, Article 88 of the National Finance Act and the 2026 Tax Expenditure Basic Plan. As of September 22, 2026, the proposal has not been enacted and its formula or effective date may change during legislative review.",
        afterSection: 1,
      },
      sourceNote: "This commentary is based on the rationale and summary of National Assembly Bill 2221495, introduced on September 21, 2026; Article 88 of the National Finance Act; the statutory definition of tax expenditure; the 2026 Tax Expenditure Basic Plan; and National Assembly Budget Office analysis. The roughly KRW 80.5 trillion figure is the projection in the March 2026 basic plan and may differ from estimates prepared at other points in the budget cycle. The bill has not been enacted, and its formula or effective date may change. When committee materials become public, Seed Voice will check whether recipient-level amounts, performance results and the order of review are disclosed alongside the aggregate cap.",
    },
  },
};
