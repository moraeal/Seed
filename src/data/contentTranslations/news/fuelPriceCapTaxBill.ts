import type { NewsTranslation } from "../types";

export const fuelPriceCapTaxBillTranslation: NewsTranslation = {
  category: "Prices, Energy & Fiscal Accountability",
  title: "Fuel Prices Were Capped—Who Pays the KRW 4.2 Trillion Bill?",
  subtitle: "Korea held down refinery supply prices, but taxpayers will finance compensation for refiners' verified losses.",
  summary: "South Korea has capped the prices at which refiners supply gasoline, diesel and kerosene to distributors in response to a surge in global oil prices. The policy does not directly regulate the retail price displayed at filling stations. The government set aside KRW 4.2 trillion in a contingency reserve to compensate refiners, but that is a budget allocation—not money already paid. Actual compensation will be determined after cost and loss claims are reviewed. A policy that lowers visible prices must also disclose who receives the benefit and who ultimately bears the cost.",
  keySentence: "The price was capped. The cost did not disappear.",
  selectedNews: {
    outlet: "JTBC News",
    headline: "Fact Check: Have Fuel Price Caps Already Failed Abroad?",
    linkLabel: "Watch the JTBC News report (Korean)",
    thumbnailUrl: "https://i.ytimg.com/vi/sR6Fu9_NAfY/maxresdefault.jpg",
    thumbnailAlt: "JTBC News report comparing foreign fuel price caps with South Korea's compensation-backed system",
    thumbnailCaption: "JTBC examines why earlier foreign price caps caused shortages and how Korea's compensation mechanism differs. Select the image to watch the Korean-language report.",
    thumbnailYoutubeId: "sR6Fu9_NAfY",
    thumbnailPlacement: "after-summary",
    thumbnailFallbackUrl: "/images/brand/editorial-image-fallback.svg",
    summary: [
      "Korea caps the wholesale prices refiners charge filling stations and compensates verified losses caused by that ceiling.",
      "Earlier US and Hungarian schemes lacked comparable supplier compensation and were followed by shortages; Korea says compensation is intended to protect supply.",
      "Because the compensation comes from public funds, experts argue that the measure should be temporary and its settlement rules and final payments transparent."
    ]
  },
  heroImage: {
    alt: "A fuel pump and refinery with a long public-budget ledger stretching behind them",
    caption: "A smaller bill at the filling station may reflect a cost transferred to the public budget rather than a cost that vanished.",
    credit: "AI reference image by SEED VOICE"
  },
  inlineImage: {
    src: "/images/news/fuel-price-cap-flow-en.svg",
    alt: "Flow chart showing a refinery supply-price cap leading to consumer relief, refinery losses and fiscal compensation",
    caption: "KRW 4.2 trillion is the contingency reserve allocation. Final payments will depend on the review of each refiner's costs and verified losses.",
    credit: "SEED VOICE · Source: Ministry of Trade, Industry and Resources"
  },
  additionalImages: [
    {
      alt: "A freight worker reviewing fuel receipts and a calculator at a Korean highway rest area",
      caption: "Higher fuel costs spread beyond motorists through freight rates, public transport and the wider cost of living.",
      credit: "AI reference image by SEED VOICE"
    }
  ],
  sections: [
    {
      title: "The cap applies to refinery supply prices, not the pump price",
      paragraphs: [
        "The government introduced the petroleum price ceiling on March 13, 2026. It applies to the prices at which refiners supply gasoline, diesel and kerosene to filling stations and other distributors. It does not directly freeze the retail price motorists see at the pump.",
        "Lower wholesale prices can create room for retail prices to fall. The policy is intended to slow the transmission of an oil-price shock into freight, public transport, farming, fisheries and the broader cost of living—not merely to placate motorists."
      ]
    },
    {
      title: "A lower pump bill becomes a public-budget cost",
      paragraphs: [
        "When a price ceiling is set below the market price, a gap opens. Korea's design does not leave refiners to absorb that gap alone: the state compensates losses attributable to the ceiling. The aim is to prevent suppliers from cutting deliveries because each additional sale deepens their losses.",
        "But a state payment does not make the cost disappear. Public spending is financed by taxpayers and government borrowing. Part of the amount consumers do not pay immediately at the filling station is transferred to the public budget."
      ]
    },
    {
      title: "KRW 4.2 trillion is an allocation, not a payment",
      paragraphs: [
        "The KRW 4.2 trillion figure is a contingency reserve allocated for refinery compensation. It does not mean that refiners have already received the full amount. The ministry says a settlement committee will review cost submissions and pay recognized losses within the year.",
        "Three figures therefore matter: the amount each refiner claims, the amount reviewers recognize and the amount actually paid. Citizens cannot judge the policy's cost if only the headline allocation is disclosed while final disbursements remain obscure."
      ]
    },
    {
      title: "Opaque settlement rules can punish efficiency",
      paragraphs: [
        "Refiners face different crude-purchase prices, exchange rates, inventories, shipping expenses and processing costs. The settlement method must distinguish firms that secured cheaper crude or reduced costs from those that did not.",
        "If compensation broadly covers revenue shortfalls without carefully identifying genuine losses, a high-cost operator could receive more than a more efficient rival. This is a design risk, not an established outcome. Publishing the formula, eligible costs, outside committee membership and company-level payments would help prevent it."
      ]
    },
    {
      title: "A government that controls prices must explain the bill",
      paragraphs: [
        "The government did not announce an automatic six-month expiry. It says termination will be considered when conditions in the Middle East, global oil prices and tanker passage stabilize. A measure that may continue with circumstances needs explicit exit criteria and a fiscal limit.",
        "Temporary intervention may be justified to protect households during a severe price shock. But a policy that lowers the price sign while hiding the invoice cannot remain credible. Government should disclose who benefited, how much each company received and whether the effect on prices exceeded the fiscal cost.",
        "The price was capped. The cost did not disappear. Promoting only the lower number gives citizens only half the account."
      ]
    }
  ],
  watchPoints: [
    "Whether claims, recognized losses and actual payments are disclosed for each refiner",
    "Whether the settlement committee's membership, formula and cost-verification method are published",
    "Whether the government states clear exit conditions and a ceiling on fiscal exposure",
    "Whether retail-price and inflation effects are evaluated alongside the public cost"
  ],
  seedPerspective: [
    "Protecting citizens from an energy-price shock is a legitimate responsibility of government. That responsibility also includes refusing to hide the cost of protection.",
    "Compensating refiners may be necessary to prevent supply from contracting. Precisely because public funds are involved, commercial confidentiality should not conceal the portion of losses and payments that citizens finance.",
    "The number on the pump is only one side of the policy. Citizens can judge whether this is necessary protection or an expensive illusion only when the transferred fiscal cost, distribution of benefits and exit conditions are disclosed together."
  ],
  sourceLabels: [
    "JTBC News — Fact check on foreign fuel price caps and Korea's compensation-backed system",
    "Ministry of Trade, Industry and Resources — Official materials on compensation and the KRW 4.2 trillion contingency reserve",
    "Ministry of Trade, Industry and Resources — Official materials on implementation of the petroleum price ceiling",
    "National Assembly Library — Policy brief on Korea's petroleum price ceiling"
  ]
};
