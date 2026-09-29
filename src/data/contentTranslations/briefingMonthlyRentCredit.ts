import type { BriefingTranslation } from "./types";

export const monthlyRentCreditExplainerTranslation: BriefingTranslation = {
  category: "TAX WATCH · EXPLAINER AND OPINION",
  title: "Would a Larger Rent Tax Credit Help Tenants With Little Tax to Pay?",
  subtitle: "Separate the government's KRW 12 million cap, lawmakers' KRW 15 million cap and proposed ten-year carryforward",
  summary: "Proposals would raise the eligible-rent cap and carry unused credits forward for ten years. This article explains both changes and examines why tenants with little income tax may still struggle to use the promised relief.",
  keyHighlights: [
    "The current annual rent cap used to calculate the credit is KRW 10 million. The 2026 government reform proposes KRW 12 million; a September 22 lawmaker bill proposes KRW 15 million.",
    "A separate Income Tax Act bill would carry forward a credit that cannot be used against the year's income tax for up to ten years.",
    "The two lawmaker bills, 2221532 and 2221529, have been referred to committees. Neither proposal is in force.",
  ],
  sourceDocument: { label: "Official proposal summary · Bill 2221532", url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221532/detailRP?yType=I", note: "This proposal expands eligibility and the annual rent cap; Bill 2221529 separately addresses unused credits." },
  author: "SEED CIVIC BRIEFING",
  images: [
    { alt: "A tenant reviewing household bills at home", caption: "Paying rent and being able to use the entire tax credit are separate questions.", credit: "AI image" },
    { alt: "A resident looking at apartment listings outside an agency", caption: "A tax credit can ease a housing bill without directly changing supply or the rent itself.", credit: "AI image" },
    { src: "images/briefings/monthly-rent-credit-comparison-en.svg", alt: "Annual rent eligible for tax-credit calculation: KRW 10 million now, KRW 12 million in the government proposal and KRW 15 million in the lawmaker bill", caption: "These are caps on rent included in the calculation, not refund amounts. Both increases remain proposals.", credit: "SEED VOICE chart · 2026 tax reform and Bill 2221532" },
  ],
  content: [
    "A tenant paying KRW 1 million a month spends KRW 12 million a year. Current law includes at most KRW 10 million of that rent in the tax-credit calculation. The government proposes KRW 12 million, while lawmakers propose KRW 15 million. Neither figure means the tenant receives that entire amount back.",
    "Rep. Jung Tae-ho and ten others introduced two bills on September 22. Tax Incentives Act Bill 2221532 would expand the income and rent limits; Income Tax Act Bill 2221529 would allow an otherwise unusable credit to be carried forward for ten years. Neither has been enacted.",
  ],
  introTitle: "Current rules and two different amendments",
  sections: [
    { title: "A larger calculation cap is not the same as a larger refund", paragraphs: [
      "The annual eligible-rent cap is KRW 10 million. The government proposes KRW 12 million; Bill 2221532 proposes KRW 15 million. The latter would raise the gross-pay threshold from KRW 80 million to KRW 90 million and the comprehensive-income threshold from KRW 70 million to KRW 80 million, and specify a 17% rate for young tenants. These are separate proposals awaiting legislative decision.",
      "A tenant paying KRW 12 million annually could count KRW 12 million under either proposal, versus KRW 10 million now. Only at KRW 15 million of annual rent does the KRW 3 million gap between the two proposed caps emerge. That gap is eligible rent, not a KRW 3 million cash refund.",
    ] },
    { title: "A carryforward for tenants whose tax is too small", paragraphs: [
      "The credit subtracts a percentage of eligible rent from calculated income tax. If the relevant tax liability is smaller than the calculated credit, some credit may go unused. Bill 2221529 proposes carrying the unused amount beyond the year's calculated tax on wage income forward for up to ten years.",
      "Suppose a credit of KRW 1.5 million is calculated, but the relevant calculated tax is KRW 600,000. Ignoring the ordering of other credits solely for illustration, only KRW 600,000 could be used that year. A carryforward could permit later use subject to statutory rules; it would not pay the remaining KRW 900,000 immediately in cash.",
    ] },
    { title: "Who benefits from paying the same rent?", paragraphs: [
      "A higher cap immediately helps eligible tenants who have enough tax liability to use the larger credit. A wage earner with very little tax may not benefit fully. The carryforward addresses that gap, but offers limited value if the tenant has no usable tax over the next ten years.",
      "The number of newly eligible households, tax savings by income group, unused credits and revenue effects are not established by the published proposal summaries. The statutory cap and the tenant's actual ledger must be assessed separately.",
    ] },
    { title: "Questions for committee review", paragraphs: [
      "The final effective year, the definition of a young tenant, the order of applying carried credits and their interaction with other relief need to be checked in the adopted text. A rising rent can also offset the relief a credit provides.",
    ] },
    { title: "SEED VOICE opinion: Same rent, different relief", paragraphs: [
      "Raising the cap to KRW 15 million first helps tenants with enough tax liability to use the credit. Expanding income eligibility also needs to be measured by tax actually reduced. For someone paying very little tax, a larger cap can promise more on paper than appears in their account.",
      "Carryforward may give a young worker with irregular earnings or a person returning to work a later opportunity. But the credit can expire if they lack usable tax over ten years. It should not be described as an immediate cash payment.",
      "Parliament should put newly eligible tenants, credits actually used by income group, carried amounts used or expired, and revenue costs into one table. If rent rises, tenants may still be worse off despite a larger credit. The outcome belongs in actual leases and tax assessments. This is our assessment of the proposals, not an enacted benefit.",
    ] },
  ],
  watchTitle: "What to watch", watchPoints: ["Final caps and effective year", "New beneficiaries and actual tax savings by income", "Credits used versus expired after ten years", "Rents and housing supply beyond the credit"],
  quote: "Count both rent paid and how much of the credit a tenant can actually use.",
  sourceLabels: ["Official summary for Bill 2221532", "Official summary for Bill 2221529", "Ministry of Economy and Finance: 2026 tax reform proposal"],
  sourceNote: "Based on public summaries and the government proposal checked September 29, 2026. The complete bill texts and revenue estimates were not separately reviewed. The numeric example is illustrative; actual credits depend on other relief and eligibility.",
};
