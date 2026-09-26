import type { BriefingTranslation } from "./types";

export const inheritanceTaxFrozenThresholdTranslation: BriefingTranslation = {
  category: "CIVIC BRIEFING · TAX WATCH",
  title: "Home Prices Rose. Inheritance Tax Relief Stayed Put. Who Pays Now?",
  subtitle: "A lump-sum deduction frozen at KRW 500 million since 1997 reaches families inheriting a single home",
  summary: "A reported example puts inheritance tax at roughly KRW 270 million on a KRW 1.6 billion apartment. Home values and prices have risen, but the basic lump-sum deduction has stood at KRW 500 million since 1997. We explain how a fixed threshold expands the tax base without a rate increase.",
  author: "SEED CIVIC BRIEFING",
  images: [
    {
      alt: "Symbolic AI composite of a family holding up the roof of its home under a huge stack of tax papers and a looming stamp",
      caption: "A family is pressed under the weight of tax papers on its only home. AI composite image, not a documentary photograph.",
      credit: "SEED VOICE · AI composite image",
    },
    {
      alt: "House key, documents and calculator on a home dining table overlooking Seoul apartments",
      caption: "Inheriting a valuable home does not also provide the cash required to pay its tax. AI composite image.",
      credit: "SEED VOICE · AI composite image",
    },
    {
      src: "images/briefings/inheritance-frozen-threshold-chart-en.svg",
      alt: "Simplified calculation for a hypothetical KRW 1.2 billion home: a KRW 500 million deduction leaves a tax base of about KRW 700 million",
      caption: "Illustrative case with no surviving spouse, debt, other assets or additional relief. Funeral expenses and the timely-filing credit are excluded from this simplified chart. The actual bill depends on the heirs and applicable deductions.",
      credit: "SEED VOICE infographic · National Tax Service calculation method",
    },
  ],
  content: [
    "What happens when children inherit a single apartment worth KRW 1.6 billion in Seoul's Seongbuk district? Money Today asked a tax expert to model a case with no surviving spouse and no other assets or debts. The estimated inheritance tax was about KRW 270 million. An actual bill depends on family circumstances and reliefs, but the example shows how a home can leave heirs with a large cash obligation.",
    "Inherited assets are generally assessed at market value at the time of death. The lump-sum deduction, however, remains KRW 500 million, the level introduced in 1997. As a home's assessed value rises and the deduction stands still, a family that once fell below the threshold may become taxable.",
  ],
  sections: [
    {
      title: "Another family inherits a KRW 1.2 billion home",
      paragraphs: [
        "Consider an illustrative household. A mother dies, leaving a home worth KRW 1.2 billion to two adult children who live separately. Assume there is no surviving spouse, debt or other property. Subtract the KRW 500 million lump-sum deduction and the simplified tax base is approximately KRW 700 million. Applying current progressive rates gives roughly KRW 150 million in tax before funeral expenses and the filing credit are taken into account.",
        "Because the children did not live with their mother for at least ten years, they would generally fail the co-resident home deduction's living requirement. They inherit a home, not KRW 1.2 billion in cash. Payment by instalments may be available, but it does not erase the liability.",
        "Money Today compared tax data with provisional deaths data and reported that 6.2% of people who died nationwide in 2025 had taxable estates. The figure was 15.94% in Seoul. Those figures do not establish that every taxpayer is middle class. They do show that the tax is no longer confined to a tiny group of households in the capital.",
      ],
    },
    {
      title: "The tax base grows even when Parliament leaves rates alone",
      paragraphs: [
        "If home prices and nominal incomes rise while deductions and tax brackets stay fixed, more people cross the line without any announced rate increase. The number on an asset rises with prices, while the law treats each additional won as if its purchasing power had not changed.",
        "A commissioned study published by Korea's National Assembly Research Service identifies fixed income-tax brackets as a problem and examines higher thresholds and inflation indexation as remedies. Not every tax parameter has been completely unchanged. The missing piece is a dependable system for revisiting thresholds as the economy changes. The inheritance deduction provides a vivid example.",
        "Another National Assembly Research Service analysis describes inheritance deductions as a way to cushion the financial strain on surviving family members and discusses broader relief and indexation. A Dong-A Ilbo editorial also called for higher lump-sum and spouse deductions as the tax reached households outside the very wealthy.",
      ],
    },
    {
      title: "Who bears the cost of an unchanged threshold?",
      paragraphs: [
        "SEED's assessment is straightforward: keeping deductions frozen has allowed the state to collect inheritance tax from more families without announcing a higher rate. The public record does not establish that this was the government's original intention. The effect, however, can be measured in the growing share of taxable estates.",
        "A family whose long-held home has risen in value may face a substantial cash bill simply to continue using it as its home. That can feel confiscatory. The lump-sum and minimum spouse deductions should be raised to reflect present conditions, followed by a regular review of deductions and brackets against prices and asset values.",
        "A reform should be judged by more than the total revenue it gives up. Lawmakers should show how many single-home estates would cease to be taxable and what happens to families without a surviving spouse. Leaving the statute unchanged has already changed the tax people actually pay. Its figures should now be brought into line with today's money and housing market.",
      ],
    },
  ],
  watchTitle: "What to check next",
  watchPoints: [
    "Whether Parliament enacts higher lump-sum and spouse deductions",
    "Whether it establishes a regular price-based review of deductions and brackets",
    "Whether official data separate the burden on single-home estates and families with no surviving spouse",
    "Whether the government studies home sales and borrowing undertaken to pay inheritance tax",
  ],
  quote: "By leaving the threshold unchanged, the state has changed the tax citizens actually face.",
  sourceNote: "As of September 26, 2026. Money Today's KRW 1.6 billion apartment is a modelled case without a surviving spouse; the KRW 1.2 billion case is an illustration. Actual tax depends on funeral costs, debt, spouse and co-resident home deductions, filing credits and other facts. Intentional expansion of the tax base by the government has not been established.",
  sourceLabels: [
    "Money Today — KRW 1.6 billion apartment example and taxable-estate figures (Sept. 21, 2026)",
    "National Tax Service — Inheritance-tax calculation, rates and payment options",
    "National Assembly Research Service — Study on personal inheritance deductions",
    "National Assembly Research Service — Study on income-tax bracket reform",
    "Dong-A Ilbo editorial — Higher deductions and further inheritance-tax reform (Feb. 16, 2025)",
  ],
};
