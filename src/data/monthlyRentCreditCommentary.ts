import type { TaxCommentary } from "./taxCommentaries";

export const monthlyRentCreditCommentary: TaxCommentary = {
  slug: "monthly-rent-credit-benefit-gap", relatedPolicySlug: "monthly-rent-credit-2026-bills", date: "2026-09-29", readMinutes: 6,
  heroSrc: "images/columns/welfare-exit-risk/renter-evening.webp",
  bodyImage: { src: "images/columns/housing-ladder/agency-window.webp", afterSection: 1, alt: { ko: "월세 주택 안내를 살펴보는 시민의 연출 이미지", en: "A resident studying rental listings" }, caption: { ko: "세금 감면이 월세 계약서의 금액을 자동으로 낮추지는 않는다.", en: "A tax credit does not automatically lower the rent on a lease." } },
  sources: [
    { label: { ko: "국민참여입법센터 · 조세특례제한법 개정안 2221532", en: "Official Tax Incentives Act proposal 2221532" }, url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221532/detailRP?yType=I" },
    { label: { ko: "국민참여입법센터 · 소득세법 개정안 2221529", en: "Official Income Tax Act proposal 2221529" }, url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221529/detailRP" },
    { label: { ko: "재정경제부 · 2026년 세제개편안", en: "Ministry of Economy and Finance · 2026 tax reform" }, url: "https://www.mofe.go.kr/nw/nes/detailNesDtaView.do?menuNo=4010100&searchBbsId1=MOSFBBS_000000000028&searchNttId1=MOSF_000000000078809" },
  ],
  relatedReading: {
    ko: { href: "/briefings/monthly-rent-tax-credit-2026-bills-explained", title: "월세 세액공제 확대안, 세금이 적은 세입자도 받을 수 있나", relationship: "연결된 세금정책 해설", reason: "현행 한도와 정부·의원 제안, 이월안을 수치와 사례로 비교합니다.", listHref: "/briefings", listLabel: "시민브리핑 더 보기" },
    en: { href: "/briefings/monthly-rent-tax-credit-2026-bills-explained", title: "Would a Larger Rent Tax Credit Help Tenants With Little Tax to Pay?", relationship: "Related tax explainer", reason: "Compare the current cap, government and lawmaker proposals, and carryforward with examples.", listHref: "/briefings", listLabel: "More briefings" },
  },
  editions: {
    ko: {
      title: "월세는 똑같이 내는데 공제는 세금 많은 사람에게 먼저 간다",
      subtitle: "월세 세액공제 확대·이월 법안 논평 · 의안 2221532·2221529",
      summary: "한도를 1,500만 원으로 올리면 공제를 쓸 세액이 있는 세입자는 혜택을 얻는다. 세금이 적은 사람을 위한 10년 이월안도 있지만 현금을 돌려주는 것은 아니다. 국회는 새 수혜자 수와 실제 공제 사용액을 소득별로 공개해야 한다.",
      keyPoints: ["정부는 연 1,200만 원, 의원안은 1,500만 원의 공제 대상 월세 한도를 제안했다. 현행 1,000만 원과 구별해야 한다.", "별도 의원안은 미사용 공제액의 10년 이월을 제안한다. 당장 환급하는 제도는 아니다.", "월세를 내는 사람의 부담과 실제 세금 감소를 소득구간별로 공개해야 효과를 판단할 수 있다."],
      heroAlt: "생활비와 월세 자료를 살펴보는 세입자의 연출 이미지", heroCaption: "매달 빠져나가는 월세는 같은데 공제 혜택은 산출세액과 자격 요건에 따라 달라진다.",
      sections: [
        { title: "한도가 늘어도 먼저 웃는 사람은 정해져 있다", paragraphs: ["월세 125만 원을 내는 세입자는 연 1,500만 원을 지출한다. 현행 한도는 1,000만 원, 정부 2026년 세제개편안은 1,200만 원, 정태호 의원 등 11인이 낸 2221532호는 1,500만 원을 제안한다. 1,500만 원을 전부 돌려받는다는 말이 아니다. 세액공제율을 적용할 월세액의 상한이다.", "의원안은 총급여와 종합소득 요건을 각각 9,000만 원·8,000만 원으로 넓히고 청년의 공제율을 17%로 명시한다. 소득요건에 새로 들어오는 사람 중에서도 공제할 세액이 충분한 사람에게 한도 인상의 효과가 크게 나타난다. 그 수와 세금 감소액을 국회가 공개해야 한다."] },
        { title: "세금이 적은 세입자의 공제는 내년으로 미뤄진다", paragraphs: ["2221529호는 당해 근로소득의 산출세액을 초과해 쓰지 못한 공제액을 10년간 이월하자고 한다. 계산된 공제액이 150만 원이고 적용할 산출세액이 60만 원인 단순 사례라면, 남은 부분을 나중의 세금에서 쓸 길을 여는 제안이다. 지금 90만 원을 현금으로 지급하는 안이 아니다.", "소득이 불안정한 청년이나 경력 단절 뒤 다시 일하는 세입자에게 나중의 공제 기회는 의미가 있다. 그러나 10년 동안 공제를 쓸 만큼의 세금이 생기지 않으면 장부에 남은 혜택은 끝내 사용되지 못할 수 있다. 이월을 복지급여처럼 설명해서는 안 된다."], quote: "공제의 약속은 환급액이 아니라 실제 세금에서 사용한 금액으로 평가해야 한다." },
        { title: "국회가 세입자의 장부를 보여줄 차례다", paragraphs: ["정부안과 두 의원안은 아직 확정 법률이 아니다. 최종 한도와 적용연도, 청년 요건, 이월의 사용 순서는 국회 심사에서 달라질 수 있다. 각 소득구간의 새 대상자와 실제 사용 공제액, 이월 뒤 소멸액, 세수 감소액을 같은 표에 올려야 한다.", "공제가 늘어도 월세가 오르면 세입자의 순부담은 줄지 않는다. 주택 공급과 임대시장 경쟁을 살피는 일은 별도로 남는다. 세금으로 주거비를 덜어주는 정책의 성패는 법안의 숫자보다 계약서와 연말정산 결과에서 드러난다."] },
      ],
      chart: { title: "연 월세 1,500만 원이면 어디까지 계산하나", description: "공제 대상 월세액의 상한. 실제 환급액과 다릅니다.", headers: ["구분", "공제 계산에 넣는 월세액", "남는 질문"], rows: [["현행", "최대 1,000만 원", "적용 자격과 산출세액"], ["정부안", "최대 1,200만 원", "국회 심사와 시행연도"], ["의원안 2221532", "최대 1,500만 원", "새 수혜자와 세수 비용"], ["이월안 2221529", "그해 못 쓴 공제액 10년 이월 제안", "실제 사용·소멸액"]], note: "각 행은 별개 제안이다. 한도는 환급금이 아니라 공제율을 적용할 월세액이다.", afterSection: 0 },
      sourceNote: "2026년 9월 29일 공식 공개 제안 요지와 정부 세제개편안 기준. 의원안 전문 조항과 세수추계는 별도로 검토하지 않았다. 월세·세액 사례는 다른 공제의 순서를 생략한 설명용 가상 계산이다.",
    },
    en: {
      title: "Same Rent, but the Credit First Helps Those With Tax to Pay", subtitle: "Opinion on rent credit Bills 2221532 and 2221529",
      summary: "A KRW 15 million cap helps tenants with enough tax liability to use the credit. A separate ten-year carryforward could help others later but is not an immediate cash payment. Parliament should publish actual use and new beneficiaries by income group.",
      keyPoints: ["Current eligible rent is capped at KRW 10 million; the government proposes KRW 12 million and lawmakers KRW 15 million.", "A separate bill would carry unusable credits forward for ten years, not refund them immediately.", "Measure the relief tenants actually use by income group, alongside rent burden."],
      heroAlt: "Tenant reviewing rent and household bills", heroCaption: "The rent paid each month may be the same while the usable tax credit differs with liability and eligibility.",
      sections: [
        { title: "A higher cap has its first beneficiaries", paragraphs: ["A tenant paying KRW 1.25 million monthly spends KRW 15 million annually. Current law counts at most KRW 10 million of rent, the 2026 government proposal KRW 12 million, and Bill 2221532 from Rep. Jung Tae-ho and ten colleagues KRW 15 million. These are amounts to which a credit rate may be applied, not cash refunds of those amounts.", "The lawmaker bill also proposes gross-pay and comprehensive-income thresholds of KRW 90 million and KRW 80 million, and a 17% rate for young tenants. Among newly eligible people, those with enough tax liability can use more of the credit immediately. Parliament should disclose how many and how much." ] },
        { title: "For tenants with little tax, the benefit moves into the future", paragraphs: ["Bill 2221529 proposes a ten-year carryforward for credits exceeding calculated tax on wage income. In a simplified example with a KRW 1.5 million calculated credit and KRW 600,000 of relevant tax, it offers a route to use the remainder against later tax. It does not pay KRW 900,000 in cash now.", "The future opportunity can matter to a young worker with irregular earnings or someone returning to work. But if usable tax liability does not arise within ten years, a credit on paper may expire unused. Carryforward should not be described as a cash benefit."], quote: "Judge the promise of a credit by the tax actually reduced, not the number printed in a proposal." },
        { title: "Show tenants' actual ledger", paragraphs: ["Neither government nor lawmaker proposal is enacted. Parliament may change caps, effective dates, youth eligibility and carryforward ordering. Put new beneficiaries, credits actually used, unused amounts expiring and revenue cost in one table by income group.", "A higher credit also does not lower the rent on a lease when rents rise. Housing supply and competition need separate scrutiny. The result will appear in leases and actual tax assessments, not simply in the cap printed in a bill." ] },
      ],
      chart: { title: "What counts if annual rent is KRW 15 million?", description: "Eligible rent for calculation, not the actual refund", headers: ["Rule or proposal", "Rent counted", "Question"], rows: [["Current", "Up to KRW 10m", "Eligibility and tax liability"], ["Government", "Up to KRW 12m", "Legislation and effective year"], ["Bill 2221532", "Up to KRW 15m", "New beneficiaries and fiscal cost"], ["Bill 2221529", "Carry unused credit for ten years", "Amount used or expired"]], note: "The rows describe separate proposals; the caps are eligible rent, not a cash refund.", afterSection: 0 },
      sourceNote: "Official proposal summaries and 2026 tax reform as checked September 29. The complete bill texts and revenue estimates were not separately reviewed. The calculation example is hypothetical and omits the ordering of other relief.",
    },
  },
};
