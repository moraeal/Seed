import type { BriefingTranslation } from "./types";

export const healthInsuranceFundingTranslation: BriefingTranslation = {
  category: "CIVIC BRIEFING · TAX WATCH",
  title: "Health Insurance: A 20% State-Funding Benchmark, but 14.4% in the Budget",
  subtitle: "The 2027 contribution rate is frozen. Who will cover the gap over time?",
  summary: "The government's proposed 2027 support for national health insurance is KRW 13.8 trillion, or 14.4% of projected contribution revenue. That is 5.6 percentage points below the combined statutory benchmark of 20%. This does not mean next year's premiums will rise. We trace how a persistent gap could affect households.",
  author: "SEED CIVIC BRIEFING",
  images: [
    { alt: "A Korean household member reviews a medical receipt and budget notebook while an older relative sits in the background", caption: "Changes in health insurance finance eventually reach households through contributions and care costs. AI image.", credit: "AI image" },
    { alt: "A patient checks a receipt at a Korean clinic payment counter", caption: "A patient's payment at a clinic and a monthly insurance contribution are separate expenses. AI image.", credit: "AI image" },
    { src: "images/briefings/health-insurance-support-chart-en-2026.svg", alt: "Bar chart comparing the 20% statutory funding benchmark with the proposed 2027 rate of 14.4%, a 5.6 percentage point difference", caption: "Both percentages use projected contribution revenue as the denominator. KRW 13.8 trillion remains a budget proposal, subject to parliamentary approval.", credit: "SEED VOICE chart · statutes and 2027 government budget proposal" },
  ],
  content: [
    "South Korea has decided to hold its 2027 national health insurance contribution rate at 7.19%. Yet the state's proposed contribution is 14.4% of projected premium revenue. That is 5.6 percentage points below the combined benchmark written into two statutes: 14% from the general budget and 6% from the National Health Promotion Fund. Premiums are frozen while state support falls short of the benchmark. [1] [2] [3]",
    "This does not mean a larger deduction from workers' pay in 2027. The Health Insurance Policy Deliberation Committee approved the freeze on September 8, together with expanded coverage that reduces some payments by people with severe and rare diseases. Decisions already made must be distinguished from future financial pressure. [4]",
  ],
  sections: [
    { title: "What exactly do 20% and 14.4% measure?", paragraphs: [
      "Contributions from employees, employers and self-employed members flow into the National Health Insurance Service. The Health Insurance Act provides for general-budget support equivalent to 14% of projected annual contribution revenue. A separate provision provides for support equivalent to 6% from the National Health Promotion Fund. The combined 20% benchmark refers to projected contributions, not 20% of all medical spending. [2] [3]",
      "The 2027 proposal allocates KRW 11.8 trillion from the general budget and KRW 2 trillion from the fund: KRW 13.8 trillion altogether. That is roughly KRW 1.1 trillion more than this year, yet 14.4% of projected premium revenue. An increase in the amount and a shortfall against the benchmark can both be true. [1] [5]",
      "The 5.6 percentage point difference cannot simply be booked as an enforceable debt. The Act specifies support within the limits of the budget, while the fund faces resource limits. The reported KRW 19.4531 trillion cumulative difference for 2016–2025 is also a comparison with that benchmark. A repeated funding gap remains an accountability question. [2] [3] [1]",
    ] },
    { title: "How could this reach a household?", paragraphs: [
      "First, monthly contributions. The 2027 rate is frozen. If a later government covers a shortfall by raising it, employees see it on pay slips, employers in payroll costs and self-employed members in their bills. As a purely illustrative calculation, a 0.1 percentage point rise on monthly pay of KRW 4 million would add KRW 2,000 to the employee's share and KRW 2,000 to the employer's. This is not a forecast; it excludes long-term care contributions, actual earnings adjustments and caps. [4] [6]",
      "Second, the amount paid at a clinic. A later change to covered services or patient co-payment rates could alter the bill at the counter. But the government has decided to expand certain benefits for 2027, including lower co-payments for some serious and rare conditions. No cut in coverage or increase in patient bills follows automatically from the present funding gap. [4]",
      "Third, public finance. Increasing state support requires funding through taxes, lower spending elsewhere or borrowing. The same healthcare bill reaches different people and different years depending on whether it is financed through contributions, general revenue or direct patient payments.",
    ] },
    { title: "A deficit forecast is not imminent insolvency", paragraphs: [
      "In its 2026–2030 medium-term plan submitted to Parliament, NHIS projected an overall operating loss of KRW 6.9161 trillion in 2026 and KRW 3.9714 trillion in 2027. These are projections, not a statement that reserves are empty. The health ministry said reserves at the end of 2025 were KRW 30.2 trillion, about three and a half months' worth, and the last five years showed annual net surpluses. Operating profit, annual net balance and reserves are different measures. [1] [4]",
      "Reserves do not settle the longer-term funding choice. As the population ages and care spending rises, the pace of contribution revenue, state support and medical costs matters. The insurer's plan assumed future increases in both contribution rates and general-budget support. Its assumptions need revisiting in light of the 2027 freeze. [1] [4] [7]",
    ] },
    { title: "SEED's assessment: who eventually fills the gap?", paragraphs: [
      "The government increased proposed support and froze household contributions for next year. Both offer relief now. But the statutory benchmark has repeatedly been missed while the insurer projects operating losses. Deferring the choice can shift the bill to citizens later as contributions, taxes or out-of-pocket care.",
      "Parliament's final budget should show three numbers side by side: the support appropriation, its share of projected premium revenue and a financial forecast updated for the rate freeze. The support provisions themselves expire at the end of 2027. The connection between the statutory benchmark and the citizen's bill needs to be visible. [2] [3]",
    ] },
  ],
  watchTitle: "Figures to follow",
  watchPoints: [
    "Final 2027 support and its share of projected premium revenue",
    "An updated NHIS financial and reserve forecast reflecting the 2027 rate freeze",
    "Any changes to contribution rates, patient co-payments or covered services, with affected groups specified",
    "Extension or amendment of the state-support provisions before their end-2027 expiry",
  ],
  quote: "A contribution-rate freeze today does not make the financing gap disappear.",
  sourceNote: "As of October 18, 2026. KRW 13.8 trillion is a government proposal, not a final appropriation. The combined 20% benchmark is subject to budgetary and fund-resource conditions; the 2016–2025 difference is not an established legally payable debt. Operating-loss projections, annual net balance and reserves must not be conflated. The KRW 2,000 example is an illustration, not a forecast.",
  sourceLabels: [
    "Yonhap News Agency — NHIS parliamentary audit, state support and projections (Oct. 16, 2026)",
    "Korea Law Information Center — National Health Insurance Act, Article 108-2 and end-2027 sunset",
    "Korea Law Information Center — National Health Promotion Act, temporary fund provision",
    "Ministry of Health and Welfare — 2027 rate freeze and expanded coverage (Sept. 8, 2026)",
    "Ministry of Health and Welfare — 2027 budget proposal (Sept. 1, 2026)",
    "Korea Law Information Center — National Health Insurance Act, employee and employer contributions",
    "JoongAng Ilbo — assumptions in the insurer's medium-term plan (Oct. 13, 2026)",
  ],
};
