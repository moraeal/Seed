import type { TaxCommentary } from "./taxCommentaries";

export const taxBreakBudgetConversionCommentary: TaxCommentary = {
  slug: "when-tax-breaks-return-as-budget-spending",
  relatedPolicySlug: "tax-break-to-budget-conversion-bill",
  date: "2026-09-24",
  readMinutes: 8,
  heroSrc: "images/tax/tax-break-budget-conversion-commentary/hero.webp",
  bodyImage: {
    src: "images/tax/tax-break-budget-conversion-commentary/body.webp",
    afterSection: 3,
    alt: {
      ko: "한국의 자동차 정비업체 대표가 작업장 사무실에서 지원 신청서와 영수증을 검토하는 모습",
      en: "A Korean auto-repair shop owner reviews support applications and receipts in the workshop office",
    },
    caption: {
      ko: "세금감면은 요건을 충족하면 세금 계산에서 적용되지만, 예산지원은 신청·선정·지급 절차를 거칠 수 있습니다. 지원 방식이 바뀌면 기업과 시민이 치르는 행정비용도 달라집니다.",
      en: "A tax preference applies through the tax calculation once its conditions are met. Budget support may require applications, selection and payment procedures, changing the administrative burden on citizens and firms.",
    },
  },
  sources: [
    {
      label: { ko: "국회 의안 제2221575호 — 국가재정법 일부개정법률안", en: "National Assembly Bill 2221575 — National Finance Act amendment" },
      url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221575/detailRP",
    },
    {
      label: { ko: "재정경제부·KDI — 2026년 조세지출 기본계획", en: "Ministry of Economy and Finance and KDI — 2026 Tax Expenditure Basic Plan" },
      url: "https://eiec.kdi.re.kr/policy/materialView.do?num=278710",
    },
    {
      label: { ko: "재정경제부·KDI — 조세지출 정비 관련 설명", en: "Ministry of Economy and Finance and KDI — Explanation of tax-expenditure restructuring" },
      url: "https://eiec.kdi.re.kr/policy/materialView.do?depth1=M0000&depth2=M0300&device=&num=285115&pg=&pp=&search_txt=&topic=&type=J",
    },
    {
      label: { ko: "국회예산정책처 — 조세지출의 효율적 관리를 위한 개선 방안 연구", en: "National Assembly Budget Office — Study on improving tax-expenditure management" },
      url: "https://www.nabo.go.kr/ko/notice/noticeAllView.do?idx=9425&key=2507040043",
    },
  ],
  relatedReading: {
    ko: {
      href: "/monitoring/tax/commentary/who-fills-the-tax-break-gap",
      title: "정부가 세금을 덜 걷으면, 그 빈자리는 누가 메우나",
      relationship: "같은 조세지출을 더 쉽게 이해하려면",
      reason: "세금감면도 시민이 함께 부담하는 재정 선택이라는 출발점부터 살펴봅니다.",
      listHref: "/monitoring/tax",
      listLabel: "세금감시 기사 목록",
    },
    en: {
      href: "/monitoring/tax/commentary/who-fills-the-tax-break-gap",
      title: "When government collects less tax, who fills the gap?",
      relationship: "To understand the same fiscal issue",
      reason: "Start with why a tax preference is still a public fiscal choice whose cost is shared by citizens.",
      listHref: "/monitoring/tax",
      listLabel: "Tax Watch articles",
    },
  },
  editions: {
    ko: {
      title: "세금감면이 끝났는데, 예산지원으로 다시 돌아온다면",
      subtitle: "보이지 않던 지원을 예산심사 안으로 옮기는 것은 필요합니다—그러나 일몰의 약속까지 지워서는 안 됩니다",
      summary: "정부는 출산·입양 세액공제와 친환경차 개별소비세 감면을 재정지원으로 전환하겠다고 밝혔습니다. 이어 국회에는 조세감면을 평가해 예산사업으로 옮길 수 있게 하는 법안이 발의됐습니다. 예산지원은 비용과 수혜자를 더 잘 드러낼 수 있지만, 끝내야 할 감면이 이름만 바꿔 살아남을 수도 있습니다. 지원은 옮길 수 있어도 특혜까지 이사시켜서는 안 됩니다.",
      keyPoints: [
        "정부는 이미 출산·입양 세액공제와 친환경차 개별소비세 감면을 재정지원으로 바꾸는 방안을 2027년도 예산안에서 구체화하겠다고 밝혔습니다.",
        "직접 예산지원은 세금을 적게 내는 사람에게도 닿고 국회의 예산·결산 심사를 받는다는 장점이 있습니다.",
        "감면 종료 전후의 총비용·수혜자·성과와 새 사업의 일몰을 한 표에 공개하지 않으면 일몰이 지원의 환승구가 될 수 있습니다.",
      ],
      heroAlt: "낡은 세금 장부에서 새 예산 서류로 같은 파일이 옮겨지는 모습을 시민이 지켜보는 공공재정 사무실",
      heroCaption: "감면을 예산으로 옮기면 지원 비용이 더 잘 보일 수 있습니다. 그러나 같은 목적과 수혜자가 그대로 이어진다면 시민이 부담할 비용이 실제로 끝난 것인지는 다시 확인해야 합니다.",
      sections: [
        {
          title: "이미 두 가지 감면이 예산지원으로 옮겨갈 준비를 하고 있습니다",
          paragraphs: [
            "재정경제부는 2026년 8월 출산·입양 세액공제를 재정지출 방식으로 전환하겠다고 밝혔습니다. 친환경차 개별소비세 감면도 종료한 뒤 전기차·수소차 등에 맞춤형 재정지원을 하는 방안을 제시했습니다. 구체적인 내용은 2027년도 예산안에서 확정할 계획입니다.",
            "한 달여 뒤인 9월 23일에는 조세지출을 매년 평가해 세금감면보다 직접 재정지출이 더 효과적이고 형평에 맞는다고 판단되면 예산사업으로 전환할 수 있도록 하는 국가재정법 개정안이 발의됐습니다. 전환 실적은 조세지출결산서에, 앞으로의 계획은 조세지출예산서에 담도록 하는 내용도 포함됐습니다.",
            "법안이 특정 감면을 당장 예산사업으로 바꾸거나 일정 금액의 지출을 확정한 것은 아닙니다. 개별 사업은 해마다 정부의 예산안 편성과 국회의 의결을 거쳐야 합니다. 다만 정부의 세제개편 방향과 법안이 같은 곳을 가리키고 있어, 조세감면의 재정지원 전환은 이미 현실의 예산 문제가 됐습니다.",
          ],
          quote: "세금 장부에서 지운 지원이 예산 장부에 다시 나타날 때, 시민은 두 장부를 이어서 봐야 합니다.",
        },
        {
          title: "예산지원으로 바꾸면 더 공정하고 더 잘 보일 수 있습니다",
          paragraphs: [
            "세액공제는 낼 세금이 있어야 충분히 혜택을 받을 수 있습니다. 소득이 낮아 세금 자체가 적은 가구는 같은 출산·입양을 했어도 공제의 효과가 작을 수 있습니다. 현금이나 서비스로 직접 지원하면 세금 규모와 관계없이 정책이 필요한 사람에게 지원을 설계할 수 있습니다.",
            "예산사업은 정부가 얼마를 편성했고 국회가 얼마를 승인했으며 실제로 누구에게 얼마를 집행했는지 예산과 결산에서 확인할 수 있습니다. 세법 속에 흩어진 감면보다 사업의 규모와 담당 부처, 집행 결과가 눈에 더 잘 들어옵니다. 성과가 낮으면 다음 예산을 줄이거나 사업 설계를 바꿀 수도 있습니다.",
            "국회예산정책처도 조세지출과 재정지출을 함께 관리하고, 유사·중복 여부와 통합평가 결과를 실제 정책조정과 예·결산 심사에 연결할 필요가 있다고 지적했습니다. 지원을 더 투명하고 정밀하게 만들 수 있다는 정부와 발의자의 논리는 충분히 설득력이 있습니다.",
          ],
        },
        {
          title: "하지만 일몰은 지원 방식만 바꾸라는 약속이 아닙니다",
          paragraphs: [
            "한시적인 세금감면에 일몰을 두는 이유는 시간이 지나면 정책의 필요성과 성과를 다시 묻기 위해서입니다. 목적이 사라졌거나 효과가 낮으면 혜택을 끝내고, 여전히 필요하다면 비용과 성과를 공개한 뒤 다시 선택해야 합니다.",
            "그런데 감면이 끝나는 동시에 같은 목적과 같은 수혜자를 가진 예산사업이 시작되면 일몰은 종료가 아니라 이동 절차가 됩니다. 세법에서는 혜택이 사라졌지만 국가 전체의 지원 비용은 남습니다. ‘감면을 정비했다’는 발표와 ‘재정지원을 새로 만들었다’는 발표를 따로 보면 총비용이 줄어든 것처럼 보일 수도 있습니다.",
            "이번 법안은 전환된 지출을 원칙적으로 기존 조세특례의 목적과 지원 대상 범위에서 사용하도록 제안합니다. 지원 공백을 막는 장치일 수 있지만, 과거 수혜자가 새 예산사업의 고정 수혜자로 이어질 가능성도 있습니다. 성과가 낮아 끝내야 할 감면과 전달 방식만 바꿔야 할 감면을 먼저 가르는 공개 기준이 필요합니다.",
          ],
          quote: "일몰이 출구가 아니라 환승구가 되면, 제도의 이름은 끝나도 시민의 계산서는 끝나지 않습니다.",
        },
        {
          title: "자동 공제에서 신청 지원으로 바뀌면 정부의 선택권도 커집니다",
          paragraphs: [
            "세금감면은 법에 정한 요건을 충족하면 세금 계산 과정에서 적용되는 경우가 많습니다. 예산지원은 신청서를 내고, 심사를 받고, 선정된 뒤 지급받는 방식이 될 수 있습니다. 같은 지원이라도 시민과 기업이 만나는 절차는 전혀 달라집니다.",
            "대상을 더 정밀하게 고를 수 있다는 것은 장점입니다. 반대로 담당 부처가 지원 대상과 금액을 선택할 재량도 커집니다. 기업에는 신청서 작성, 증빙, 심사 대기, 사후 정산이라는 행정비용이 생길 수 있고, 예산이 소진되면 조건을 충족해도 지원을 받지 못할 수 있습니다. 세법상 예측 가능한 혜택이 해마다 달라지는 공모사업으로 바뀌면 투자 결정도 어려워집니다.",
            "그래서 전환 여부만 볼 수는 없습니다. 신청하지 못해 탈락한 사람, 심사에서 떨어진 기업, 행정비용 때문에 포기한 소상공인까지 포함해 실제 접근성을 비교해야 합니다. 더 정밀한 지원이 더 큰 행정권한과 더 높은 문턱으로 바뀌지 않는지도 함께 봐야 합니다.",
          ],
        },
        {
          title: "새 예산사업에도 종료일과 성적표가 있어야 합니다",
          paragraphs: [
            "감면을 예산으로 바꿀 때는 전환 전후를 한 표로 공개해야 합니다. 과거 세수 감소액과 새 예산액, 수혜자 수와 소득·기업 규모, 신청률과 탈락률, 고용·투자·생활 안정 효과, 행정비용을 같은 기준으로 비교해야 합니다. 재정지출로 바꿔 지원액을 늘렸다면 그 차이도 숨기지 말아야 합니다.",
            "새 사업에도 별도의 일몰과 정기 성과평가를 두어야 합니다. 세금감면의 일몰만 통과하면 예산사업이 기한 없이 남는 구조는 정비가 아닙니다. 재난·경기침체·대량실업 때 다른 용도로 전환 재원을 쓸 수 있도록 한 예외도 금액과 사유, 수혜자를 국회와 시민에게 공개해야 합니다.",
            "조세지출을 예산심사 안으로 옮기는 일은 필요합니다. 그러나 장부가 바뀌었다는 이유로 과거의 수혜구조까지 자동 승계해서는 안 됩니다. 지원은 옮길 수 있습니다. 특혜까지 이사시켜서는 안 됩니다. 씨앗은 2027년도 예산안에서 전환 전후의 총비용과 수혜자, 새 사업의 종료 기준이 한 장에 공개되는지를 확인하겠습니다.",
          ],
        },
      ],
      chart: {
        title: "세금감면에서 예산지원으로 바뀌면 무엇이 달라지나",
        description: "같은 정책 목적이라도 비용이 보이는 방식, 수혜 절차와 정부의 권한이 달라집니다.",
        headers: ["구분", "세금감면", "예산지원", "시민이 확인할 점"],
        rows: [
          ["비용이 보이는 곳", "걷지 않은 세금으로 세입에 반영", "편성·의결·집행액이 예산과 결산에 표시", "전환 전후 금액을 합친 총비용"],
          ["혜택을 받는 방식", "법정 요건 충족 시 세금 계산에서 적용", "신청·심사·선정·지급 절차 가능", "신청률·탈락률·행정비용"],
          ["형평성", "낼 세금이 적으면 공제 효과가 작을 수 있음", "소득·필요에 따라 표적 지원 가능", "실제 수혜자의 소득·기업 규모"],
          ["정부의 권한", "세법이 수혜 요건을 미리 규정", "부처가 대상·금액·집행기준을 설계", "선정 기준·탈락 사유·이해충돌"],
          ["종료", "일몰 때 연장 또는 종료 심사", "새 사업의 별도 일몰이 없으면 계속될 수 있음", "새 일몰·성과평가·환수 기준"],
        ],
        note: "자료: 국회 의안 제2221575호, 재정경제부 2026년 조세지출 기본계획 및 2026년 8월 5일 설명자료, 국회예산정책처 조세지출 관리 연구. 법안은 2026년 9월 24일 현재 발의 단계이며 특정 특례의 전환과 금액을 확정하지 않았습니다.",
        afterSection: 1,
      },
      sourceNote: "이 글은 2026년 9월 23일 발의된 국회 의안 제2221575호의 제안이유와 주요내용, 재정경제부의 2026년 조세지출 기본계획과 2026년 8월 5일 조세지출 정비 설명자료, 국회예산정책처의 2026년 8월 31일 조세지출 관리 연구 발표를 기준으로 작성했습니다. 정부는 출산·입양세액공제의 재정지출 전환과 친환경차 개별소비세 감면 종료 뒤 맞춤형 재정지원을 제시했고, 구체 방안은 2027년도 예산안에서 확정할 계획이라고 밝혔습니다. 개정안은 아직 발의 단계이며 특정 특례, 전환액 또는 개별 사업의 지출을 확정하지 않았습니다. 씨앗의 소리는 2027년도 예산안과 국회 심사에서 전환 전후 총비용·수혜자·접근성·성과·일몰이 함께 공개되는지 확인합니다.",
    },
    en: {
      title: "What if an expired tax break returns as budget support?",
      subtitle: "Moving hidden support into the budget process can improve scrutiny—but it must not erase the promise of a sunset",
      summary: "The government says it will convert childbirth and adoption tax credits and eco-friendly vehicle tax relief into direct spending. Parliament is now considering a bill that would create a general route from tax preferences to budget programs. Direct spending can make costs and recipients more visible, but an expiring preference could also survive under a new label. Support may move; privilege should not move with it.",
      keyPoints: [
        "The government has already said the 2027 budget will specify how childbirth and adoption credits and eco-friendly vehicle tax relief move toward direct support.",
        "Direct spending can reach people with little tax liability and is subject to annual budget and settlement review.",
        "Unless before-and-after costs, recipients, outcomes and a new sunset are disclosed together, a sunset can become a transfer station rather than an exit.",
      ],
      heroAlt: "A citizen watches the same file move from an old tax ledger to new budget documents in a public-finance office",
      heroCaption: "Moving a preference into the budget can make support more visible. If its purpose and beneficiaries continue unchanged, however, citizens still need to know whether the public cost truly ended.",
      sections: [
        {
          title: "Two tax preferences are already preparing to move into the budget",
          paragraphs: [
            "In August 2026, the Ministry of Economy and Finance said childbirth and adoption tax credits would be converted into direct spending. It also proposed ending the individual consumption-tax reduction for eco-friendly vehicles and replacing it with targeted support for electric and hydrogen vehicles. Details are to be finalized in the 2027 budget proposal.",
            "On September 23, a National Finance Act amendment was introduced to permit annual reviews of tax expenditures and their conversion into direct spending when budget support is judged more effective and equitable. Conversion results would appear in tax-expenditure settlement documents and future plans in tax-expenditure budget documents.",
            "The bill does not itself convert a named preference or authorize a fixed amount of spending. Each program would still require annual budget preparation and parliamentary approval. Yet the government's tax-reform direction and the new bill point the same way, making conversion a practical budget question rather than an abstract proposal.",
          ],
          quote: "When support disappears from the tax ledger and reappears in the budget ledger, citizens must connect the two books.",
        },
        {
          title: "Direct spending can be fairer and easier to see",
          paragraphs: [
            "A tax credit is useful only to the extent that a household has tax liability to offset. Lower-income households may receive little value from the same childbirth or adoption credit. Cash or services can be designed to reach intended recipients regardless of how much tax they owe.",
            "A budget program shows how much government requested, how much Parliament approved and how much was actually spent. Its scale, responsible ministry and execution results can be more visible than preferences dispersed across the tax code. Weak results can lead to a smaller appropriation or a redesigned program the following year.",
            "The National Assembly Budget Office has likewise called for joint management of tax and direct expenditures, with duplication reviews and integrated evaluations feeding into policy adjustments and parliamentary budget scrutiny. The case for more transparent and precisely targeted support is credible.",
          ],
        },
        {
          title: "A sunset is not merely a promise to change delivery channels",
          paragraphs: [
            "Temporary tax relief has a sunset so that necessity and performance can be reconsidered. A preference whose purpose has expired or whose results are weak should end. One that remains necessary should be chosen again after its costs and outcomes are disclosed.",
            "If a budget program with the same purpose and beneficiaries begins as soon as the preference expires, the sunset becomes a transfer rather than an exit. The provision disappears from tax law while the public cost survives. Separate announcements about ‘restructuring relief’ and ‘creating support’ can also make the total appear smaller than it is.",
            "The bill would normally keep converted spending within the existing preference's purpose and beneficiary scope. That can prevent a sudden support gap, but it can also preserve incumbent recipients. Public criteria must first distinguish preferences that should end from those that merely need a better delivery mechanism.",
          ],
          quote: "When sunset becomes a transfer station, the program's name ends but the taxpayer's bill does not.",
        },
        {
          title: "Moving from an automatic rule to an application also expands administrative choice",
          paragraphs: [
            "Many tax preferences apply through the tax calculation once statutory conditions are met. A budget program may require an application, review, selection and payment. The citizen or company experiences a very different process even when the policy purpose is unchanged.",
            "More precise selection is an advantage. It also gives the responsible ministry more discretion over recipients and amounts. Firms may face application, documentation, waiting and settlement costs; eligible applicants may receive nothing after funds run out. Replacing a predictable tax rule with an annually changing grant competition can complicate investment decisions.",
            "A meaningful comparison must therefore include people who never applied, rejected firms and small businesses that withdrew because of compliance costs. Better targeting must not quietly become a higher barrier and broader administrative power.",
          ],
        },
        {
          title: "The new budget program needs its own expiry date and scorecard",
          paragraphs: [
            "Every conversion should publish one before-and-after table: forgone revenue, the new appropriation, recipient numbers and income or firm size, application and rejection rates, effects on jobs, investment or household security, and administrative costs. If conversion expands support, that increase should also be explicit.",
            "The successor program needs a separate sunset and regular performance review. Allowing budget spending to continue indefinitely once it has passed through a tax sunset is not reform. Any emergency authority to redirect converted funds during disasters, downturns or mass unemployment should disclose the amount, reason and recipients.",
            "Bringing tax expenditure into annual budget scrutiny is worthwhile. It does not justify automatic inheritance of the old beneficiary structure. Support may move; privilege should not move with it. Seed Voice will check whether the 2027 budget presents total before-and-after costs, recipients and exit rules on one page.",
          ],
        },
      ],
      chart: {
        title: "What changes when a tax preference becomes budget support",
        description: "Even with the same policy purpose, visibility, access and administrative power change.",
        headers: ["Area", "Tax preference", "Budget support", "What citizens should check"],
        rows: [
          ["Where cost appears", "Forgone revenue reduces receipts", "Appropriations and execution appear in budgets and settlements", "One total before-and-after cost"],
          ["How support is received", "Applied in the tax calculation when legal conditions are met", "May require application, review, selection and payment", "Application, rejection and compliance costs"],
          ["Equity", "People with little tax liability may receive less value", "Support can be targeted by income or need", "Actual recipient income and firm size"],
          ["Administrative power", "Tax law sets eligibility in advance", "Ministries design recipients, amounts and execution rules", "Selection criteria, rejection reasons and conflicts"],
          ["Exit", "Extension or termination reviewed at sunset", "May continue without a separate sunset", "New sunset, evaluation and clawback rules"],
        ],
        note: "Sources: National Assembly Bill 2221575; Ministry of Economy and Finance's 2026 Tax Expenditure Basic Plan and August 5 explanation; National Assembly Budget Office study on tax-expenditure management. As of September 24, 2026, the bill remains at the introduction stage and specifies neither a particular preference nor a conversion amount.",
        afterSection: 1,
      },
      sourceNote: "This commentary is based on the rationale and summary of National Assembly Bill 2221575, introduced on September 23, 2026; the Ministry of Economy and Finance's 2026 Tax Expenditure Basic Plan and August 5 explanation; and the National Assembly Budget Office's August 31 study on tax-expenditure management. The government proposed converting childbirth and adoption credits to direct spending and replacing eco-friendly vehicle tax relief with targeted support, with details expected in the 2027 budget proposal. The bill remains at the introduction stage and does not identify a specific preference, conversion amount or individual appropriation. Seed Voice will examine whether the 2027 budget and parliamentary review disclose total before-and-after costs, recipients, access, outcomes and expiry rules together.",
    },
  },
};
