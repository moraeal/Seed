import type { BriefingTranslation } from "./types";

export const platformAdvertisingTranslation: BriefingTranslation = {
  category: "BUSINESS BRIEFING",
  title: "More Sales, Less Profit? The Cost of Advertising on Delivery Platforms",
  subtitle: "A restaurant settlement statement shows why sales, deposits and profit must be counted separately",
  summary: "A Seoul chicken restaurant recorded KRW 3,000,400 in daily sales but received KRW 2,165,838 in its bank account. The gap was neither entirely ad spending nor platform profit. We examine that settlement, a separate analysis of advertised orders and Korea's investigation into platform trading practices.",
  introTitle: undefined,
  author: "SEED BUSINESS BRIEFING",
  images: [
    {
      alt: "AI image depicting a chicken-shop owner reviewing settlement papers after work",
      caption: "Sales, deposits and the shop's profit are different amounts. AI image.",
      credit: "SEED VOICE · AI image",
    },
    {
      src: "images/briefings/platform-advertising-settlement-en.svg",
      alt: "Chart separating a restaurant's daily sales, bank deposit and settlement gap, with examples of items within the gap",
      caption: "The difference between sales and a deposit cannot be treated as advertising expense or platform net income. Food, wages and rent are calculated at another stage.",
      credit: "SEED VOICE infographic · Asia Economy settlement report",
    },
    {
      src: "images/briefings/platform-advertising-rates-en.svg",
      alt: "Chart comparing the self-reported settlement ratios of 70.7 percent without order-attributed ads and 58.1 percent with them",
      caption: "The 12.6 percentage point difference comes from Majin's own published analysis. SEED has not independently checked the underlying order records. A settlement ratio is not a net profit margin.",
      credit: "SEED VOICE infographic · Majin analysis",
    },
  ],
  content: [
    "More orders raise the sales figure on a restaurant's books, but the entire amount does not reach its bank account. Intermediation, delivery, payment and shared discounts appear in settlement. The restaurant must then pay for ingredients, labour and rent. Advertising adds another expense, so a busier shop can still earn less.",
    "The useful question is where each number belongs. A real statement from a restaurant that did not advertise, a private comparison of orders with and without advertising, and a cross-industry survey measure different things. Reading them separately shows where small merchants carry the cost.",
  ],
  sections: [
    {
      title: "What reached the restaurant after KRW 3 million in daily sales?",
      paragraphs: [
        "Asia Economy examined a delivery-platform settlement statement from a franchise chicken shop in Gwanak, Seoul. Daily sales were KRW 3,000,400 and the bank deposit was KRW 2,165,838, a difference of KRW 834,562. Reported items included KRW 165,503 in intermediation fees, KRW 373,400 for delivery and KRW 146,500 in customer discounts shared by the franchisor and the shop owner.",
        "The KRW 834,562 difference was not ad spending: the shop ran no platform advertising that day. The discount item also combines contributions from the franchise company and the owner. Nor can the whole difference be described as platform profit. What the statement establishes is that several costs stand between sales and the shop's deposit.",
        "The deposit was not the shop's profit either. For one KRW 25,000 chicken order, the report estimated KRW 4,537 after the franchisor's supply price and platform-related charges, then about KRW 3,037 after allocating rent and minimum staffing costs. Utilities, tax and compensation for the owner's labour would change the final result. Those figures depend on the report's particular menu and sales assumptions.",
      ],
    },
    {
      title: "Advertising changes both order volume and the amount left per order",
      paragraphs: [
        "Majin, a Korean restaurant margin-calculation service, says it analyzed five months of Baemin settlements and 533 Coupang Eats orders. It reports a 70.7% settlement ratio for orders without an attributed ad and 58.1% for those with one. On KRW 10,000 of sales, that means deposits of KRW 7,070 and KRW 5,810 respectively, a KRW 1,260 difference.",
        "These are figures published by the service itself. SEED could not independently inspect the order-level data or establish that the orders were comparable on every other measure. The ratio also precedes the restaurant's ingredient and labour costs. It does, however, make a practical question concrete: counting orders alone may overstate an ad campaign's contribution to the shop.",
        "When advertising reduces the return on each order, additional orders must make up for that reduction on existing business. A merchant needs to know whether the ad brought a new customer or merely charged for someone already inclined to buy. Click-based campaigns require the cost of clicks that never become orders to be counted as well.",
      ],
    },
    {
      title: "A survey found the heaviest transaction costs on delivery apps",
      paragraphs: [
        "In a 2026 survey of 1,250 merchants using online shopping, delivery and lodging platforms, the Korea Federation of SMEs estimated total transaction costs at 21.7% of monthly sales on average, and 26.2% among delivery-app merchants. The totals combine intermediation, delivery, advertising and payment-processing costs. They are neither a single commission rate nor an advertising rate.",
        "For delivery merchants, the survey attributed 42.0% of transaction costs to intermediation, 29.9% to delivery, 15.6% to advertising and 12.4% to payment processing. These are shares of the cost bundle, not rates to apply directly to sales. Contracts and mixes of orders differ among shops.",
        "The Korea Online Shopping Association challenged the pooling of unlike costs and business models and requested more detail on the sample, underlying data and calculation. That objection matters when interpreting an average. It also reinforces the need for separate, usable figures by sector, merchant size and charge type.",
      ],
    },
    {
      title: "How does a term become difficult for a shop to refuse?",
      paragraphs: [
        "When customers gather in a delivery app, search placement and membership benefits affect a restaurant's sales. Korea's Fair Trade Commission has examined allegations that Baemin and Coupang Eats required merchants to match food prices, minimum order values and other offers across rival apps. According to the investigation reported in June, shops that did not comply could be excluded from membership stores offering free delivery. Alleged preference for Baemin's own delivery service is another issue in the case.",
        "In June 2026, the Commission rejected applications to start a consent-order process, and the main proceedings continued. Rejection of those applications is not a final finding on each alleged violation. The case nonetheless shows the concrete pressure created when a platform ties prices, visibility and free-delivery eligibility to conditions set for small shops.",
        "An app need not legally require ad purchases for merchants to feel that promotion is unavoidable. They need to see which placements are paid, how organic search works, what changes when an ad is paused, and who bears refunds and coupon costs.",
      ],
    },
    {
      title: "A sustainable deal begins with a merchant's ability to calculate and choose",
      paragraphs: [
        "Platforms find customers and arrange orders, payments and delivery. Shops can pay for those services, but they need a readable account of the price and room to sell through several channels. Statements should separate intermediation, delivery, payment, advertising and discounts, including how a franchisor and franchisee divide promotions.",
        "Advertising dashboards should show actual deposits, refunds and repeat customers alongside impressions and clicks. Merchants need the option to pause an ad or cap spending without fearing opaque placement penalties. Franchisors should agree in advance with shop owners on the cost of centrally planned coupons and campaigns.",
        "Government can publish more granular, anonymized survey methods and figures by sector, shop size, order type and charge. The Commission can reach a timely, public decision on parity demands and alleged ranking preference, while continuing to examine ad placement and cost-shifting terms. A merchant's ability to download settlement data, compare offers and bargain collectively also merits consideration.",
        "The chicken shop's KRW 834,562 settlement gap was not an ad bill. That distinction sharpens the real question: after a shop has already paid the costs of an order, how much additional income does advertising produce? A durable partnership becomes visible when the platform and large franchisor make that calculation clear to the merchant and the public.",
      ],
    },
  ],
  watchTitle: "What to check next",
  watchIntro: "Merchants need to be able to test the price and effect of advertising for themselves.",
  watchPoints: [
    "Whether statements list intermediation, delivery, payment, ad and discount charges separately",
    "Whether ad dashboards show incremental orders, sales and actual deposits by campaign",
    "Whether search placement criteria explain what changes when a shop pauses advertising",
    "Whether the franchisor's and franchisee's shares of coupon costs are agreed in advance",
    "Whether the Commission reaches final decisions and remedies in the platform parity and ranking cases",
  ],
  quote: "A merchant can make an informed choice only when the platform shows what remains after an advertised order is settled.",
  sourceNote: "Based on reporting, a merchant survey, the FTC's announcement and a private settlement analysis available through September 25, 2026. Asia Economy's statement concerns one day without advertising. Majin's ad-related figures are self-published and the underlying orders were not independently verified by SEED. The FTC allegations are distinguished from final findings of illegality.",
  sourceLabels: [
    "Asia Economy — A Seoul chicken restaurant's settlement statement (Oct. 21, 2025)",
    "Majin — Self-published analysis of delivery-app advertising settlements",
    "Yonhap — 2026 Korea Federation of SMEs survey and industry response",
    "Korea Fair Trade Commission — Decision on delivery-app consent-order applications",
    "Yonhap — Allegations and next steps after the consent-order applications were rejected",
  ],
};
