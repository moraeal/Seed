import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

export const procurementTaxWatchNoticeSlug = "procurement-tax-watch-citizen-hackathon-2026";
const eventUrl = "https://savetax.now/";

export const procurementTaxWatchNotice: Briefing = {
  slug: procurementTaxWatchNoticeSlug,
  category: "시민운동 공지사항 · 세금감시 참여",
  title: "증세 전에 새는 세금부터…시민도 공공계약을 들여다볼 수 있다",
  subtitle: "이준석 의원실, AI 분석으로 5628억 원 규모 낭비 의심 정황 발표…10월 12~25일 국민 참여 행사",
  summary: "의원 한 명과 보좌진 한 명이 공개된 공공계약 자료로 세금 낭비 의심 정황을 찾아냈습니다. 거둔 세금을 제대로 쓰게 하는 시민감시의 가능성과 나라장터 해커톤 참여 방법을 소개합니다. 씨앗은 특정 정당과 독립된 시민의 입장에서 그 취지에 공감합니다.",
  date: "2026-10-08", author: "씨앗의 소리", readMinutes: 6,
  homeBriefingLeadEligible: false,
  keyHighlights: ["거둔 세금을 제대로 쓰도록 감시하는 일도 시민의 세금 부담을 지키는 운동입니다.", "나라장터 해커톤은 10월 12~25일 열릴 예정이며 일반 국민도 참여할 수 있습니다.", "씨앗은 특정 정당과 독립된 입장에서 시민의 세금감시 취지에 공감합니다."],
  images: [
    { src: "images/civic/procurement-tax-watch-hero.webp", alt: "세금이 새는 금속관의 틈을 돋보기와 태블릿으로 살펴보는 시민의 손", caption: "시민이 낸 세금의 쓰임을 직접 확인하는 감시의 가능성을 표현했습니다.", credit: "AI 이미지", sourceUrl: "" },
    { src: "images/civic/procurement-tax-watch-citizens.webp", alt: "제품과 구매 영수증, 노트북 자료를 함께 비교하는 두 시민", caption: "생활 속 가격 지식과 공개된 계약 자료가 만나면 시민도 지출을 살펴볼 수 있습니다.", credit: "AI 이미지", sourceUrl: "", afterSection: 2 },
    { src: "images/civic/procurement-hackathon-guide-ko.svg", alt: "나라장터 해커톤의 주최, 기간, 대상, 홈페이지와 제출 방식을 정리한 참여 안내표", caption: "참여 기간과 방식은 10월 8일 공개 안내 기준입니다. 접수 전에는 행사 홈페이지의 최신 공지와 지정 양식을 확인하세요.", credit: "씨앗의 소리 · 공식 홈페이지와 연합뉴스 보도", sourceUrl: eventUrl, afterSection: 3, contain: true },
  ],
  placeBodyImagesBySection: true,
  content: [
    "시민은 장을 볼 때 몇백 원이라도 아끼려고 가격을 비교합니다. 가게를 운영하는 사람은 물건 하나를 들이면서도 원가와 배송비를 따집니다. 정부가 시민의 세금으로 물건을 살 때도 그만큼 꼼꼼하게 따져야 합니다.",
    "국회의원 한 명과 보좌진 한 명이 약 한 달 동안 공공계약을 분석해 수천억 원 규모의 세금 낭비 의심 정황을 찾아냈다는 소식은 그래서 반갑습니다. 우리가 낸 세금이 어디에서 어떻게 쓰이는지, 시민도 자료를 들여다보고 잘못된 집행을 찾아낼 수 있다는 가능성을 보여주기 때문입니다.",
  ],
  sections: [
    { title: "공개된 계약 자료에서 찾은 낭비 의심 정황", paragraphs: [
      "서울경제 보도에 따르면 이준석 개혁신당 의원과 보좌진은 AI 도구와 자체 개발한 데이터 수집·분석 프로그램을 활용해 나라장터 공공계약을 조사했습니다. 분석 대상은 물품 약 105만 개와 납품요구 약 280만 건, 전체 계약 규모는 약 130조 원에 달합니다.",
      "발표된 5628억 원은 검증과 확인이 필요한 추정치입니다. 행사 공식 홈페이지는 이를 ‘통계 기준가와의 차액’으로 설명합니다. 비슷한 제품의 사양과 가격을 바탕으로 기준가를 계산하고, 실제 납품요구가 있는 계약에서 그보다 비싸게 구매한 것으로 추정되는 금액을 집계했다는 것입니다. 홈페이지에 제시된 ‘50조’는 앞으로 찾겠다는 목표 규모입니다.",
      "가격 차이가 확인된 계약은 납품 당시의 시중가와 제품 구성, 설치·보증 조건 등을 함께 살펴야 합니다. 이런 검증을 통해 부당한 지출이 확인되면 계약을 바로잡고, 다음 구매에서 같은 낭비를 막을 수 있습니다.",
    ] },
    { title: "사례로 읽기 — 2만1200원짜리 광모듈을 7만 원에", paragraphs: [
      "공식 홈페이지의 8번 사례는 솔텍의 ‘SFP-SX’ 광송수신모듈입니다. 네트워크 장비에서 광케이블 신호를 주고받는 작은 부품입니다. 주최 측은 나라장터 품목과 시중 판매품의 제조사·모델명, 멀티모드·LC 타입이 같다는 점을 비교 근거로 제시했습니다.",
      "공개된 분석에 따르면 전북특별자치도 도로관리사업소와 경기도 수원시·이천시·화성시, 화성시 만세구 등 5곳의 납품요구 기록에 26대가 대당 7만 원으로 잡혀 있습니다. 2026년 5월 18일부터 9월 23일까지의 기록이며 요청금액 합계는 182만 원입니다. 주최 측이 10월 7일 조사한 파이버랜드의 같은 모델 판매가는 2만1200원입니다. 씨앗이 10월 8일 판매 페이지를 확인한 가격도 부가세 포함 2만1200원입니다.",
      "두 단가를 그대로 비교하면 나라장터 가격은 약 3.3배입니다. 대당 차액은 4만8800원이고, 26대를 곱하면 126만8800원이 됩니다. 이는 공개된 두 가격을 적용해 계산한 차액입니다. 실제 지급액과 부당 지출로 확정된 금액은 별도로 확인해야 합니다.",
      "이 사례에서 함께 읽어야 할 것은 납품 조건입니다. 나라장터 계약에는 지정 장소 납품·설치가 포함되어 있고, 공개된 계약 특수조건에는 하자보수 기간이 2년으로 적혀 있습니다. 시중 판매가와 비교하려면 설치·출장비, 보증 범위, 배송비와 부가세 조건, 실제 납품 당시의 가격까지 맞춰봐야 합니다. 주최 측 페이지에는 현재 시중가와의 차액이 제시되어 있으며 이런 조건별 비용을 모두 정산한 내역은 확인되지 않습니다.",
      "시민의 감시는 여기서 구체적으로 시작할 수 있습니다. 같은 모델의 가격이 왜 이만큼 벌어졌는지 계약서와 비용 내역을 대조하는 것입니다. 설치와 보증 비용을 반영한 뒤에도 과도한 차이가 남는다면 해당 기관과 공급 업체의 설명을 듣고, 다음 구매의 단가와 계약 조건이 고쳐졌는지 확인할 수 있습니다. 제품명과 계약 조건, 가격 근거를 함께 공개한 자료는 시민이 이런 검증을 따라갈 수 있게 해줍니다.",
    ] },
    { title: "거둔 세금을 제대로 쓰게 하는 것도 증세 반대 운동입니다", paragraphs: [
      "씨앗의 소리가 말하는 ‘더 이상의 증세는 안 된다’는 시민의 살림을 지키자는 뜻입니다. 세율을 올리고, 공제를 줄이고, 과세 대상을 넓히는 결정이 시민의 통장에서 얼마를 더 가져가는지 살피는 일과 연결됩니다.",
      "그만큼 이미 거둔 세금을 제대로 쓰도록 감시하는 일도 필요합니다. 정부가 예산 부족을 이야기하며 시민에게 더 부담하라고 요구한다면, 불필요한 지출과 과도한 구매 가격부터 점검해야 합니다. 시민에게는 자신이 낸 돈의 사용 내역을 확인하고 잘못을 지적할 권리가 있습니다.",
      "이번 시도에서 씨앗이 주목하는 것은 공개된 자료를 활용해 세금 집행을 직접 살펴볼 수 있다는 점입니다. AI와 데이터 분석 도구가 시민의 감시 범위를 넓혀줄 수 있습니다. 생활 속 제품 가격을 잘 아는 사람, 공공조달 경험이 있는 사람, 데이터를 다루는 사람이 각자의 지식으로 참여할 여지도 생깁니다.",
    ] },
    { title: "시민은 어떻게 참여할 수 있습니까", paragraphs: [
      "개혁신당과 이준석 의원은 10월 12일부터 25일까지 ‘세금 50조 찾기 프로젝트: 나라장터 해커톤’을 진행할 예정입니다. 개발자와 대학생뿐 아니라 일반 국민도 참여할 수 있다고 안내했습니다. 해커톤은 데이터를 분석하고 도구를 만들어 문제를 찾아내는 참여 행사입니다.",
      "참여자는 행사 홈페이지에서 제공하는 공공계약 원본 데이터와 분석 도구 등을 활용해 시중가보다 과도하게 비싼 계약을 찾고, 근거를 정리해 지정 양식으로 제출하게 됩니다. 주최 측은 AI와 실무진 검수를 거쳐 유효하다고 판단한 사례의 금액 비율에 따라 총 1000만 원의 상금을 배분할 계획입니다. 우수 사례는 이 의원의 국정감사 질의에도 활용될 예정입니다.",
      "관심 있는 시민은 홈페이지에서 공개된 사례와 분석 방법을 먼저 살펴볼 수 있습니다. 제출 전에는 행사 공지에서 접수 양식과 심사 기준을 확인하면 됩니다. 가격을 비교할 때 제품 모델명, 구매 시점, 수량, 설치비와 보증 조건을 함께 기록하면 의심 사례를 검증하는 데 도움이 됩니다.",
    ], bullets: ["행사: 세금 50조 찾기 프로젝트: 나라장터 해커톤", "주최: 개혁신당·이준석 의원", "기간: 2026년 10월 12~25일", "대상: 개발자·대학생·일반 국민", "홈페이지: savetax.now", "참여 방식: 공개 자료로 의심 계약을 찾고, 비교 근거를 지정 양식에 정리해 제출"] },
    { title: "씨앗은 시민의 자리에서 공감합니다", paragraphs: [
      "씨앗의 소리는 특정 정당과 연결되지 않은 독립 시민저널입니다. 이번 행사 소개는 개혁신당의 정당 활동에 대한 지지나 참여 선언을 뜻하지 않습니다. 거둔 세금을 제대로 쓰게 하고, 시민이 잘못된 집행을 찾아낼 수 있도록 하자는 취지에 공감해 참여 정보를 전합니다.",
      "이런 활동이 정당의 행사에서 더 나아가, 시민사회의 자율적이고 지속적인 감시로 자리 잡기를 바랍니다. 어느 정당이 집권하든 같은 기준으로 계약과 예산을 살피고, 발견한 문제를 공개하며, 실제로 고쳐졌는지 끝까지 확인하는 활동입니다.",
      "시민은 세금을 내는 사람입니다. 그 돈이 어디에 쓰였는지 확인하는 사람도 될 수 있습니다. 씨앗은 시민의 부담을 늘리는 세금 조항과 함께, 이미 거둔 돈이 낭비되는 지출도 살피겠습니다.",
    ] },
  ],
  paragraphLinks: [{ sectionIndex: 1, paragraphIndex: 4, links: [{ label: "솔텍 SFP-SX · 원자료와 가격 비교 사례 보기", url: "https://savetax.now/8" }] }, { sectionIndex: 3, paragraphIndex: 2, links: [{ label: "나라장터 해커톤 홈페이지 · 참여 안내 확인", url: eventUrl }] }],
  watchTitle: "참여 전 확인할 것",
  watchPoints: ["행사 홈페이지에서 최신 접수 일정·지정 양식·심사 기준 확인", "제품 모델과 납품 시점, 설치·보증 조건을 맞춘 가격 비교", "의심 금액과 검증된 낭비, 실제 환수·절감 결과를 구분해 확인"],
  sources: [{ label: "파이버랜드 · 솔텍 SFP-SX 판매가·배송 조건 (2026.10.8 확인)", url: "https://fiberland.co.kr/product/soltech-%EC%86%94%ED%85%8D-%EB%A9%80%ED%8B%B0%EB%AA%A8%EB%93%9C-sfp-%EB%AA%A8%EB%93%88-lc%ED%83%80%EC%9E%85-sfp-sx/3679/" }, { label: "나라장터 해커톤 · 솔텍 SFP-SX 광송수신모듈 사례와 계약 조건", url: "https://savetax.now/8" }, { label: "나라장터 해커톤 · 공식 홈페이지와 분석 방법", url: eventUrl }, { label: "연합뉴스 · 이준석 ‘나라장터 5628억 원 세금 누수 정황’ 발표 및 참여 안내 (2026.10.8)", url: "https://www.yna.co.kr/view/AKR20261007178300001" }, { label: "서울신문 · 이준석 의원실 공공계약 분석과 해커톤 개최 보도 (2026.10.8)", url: "https://www.seoul.co.kr/news/politics/2026/10/08/20261008500058" }],
  sourceNote: "자료 확인일: 2026년 10월 8일. 서울경제 노해철 기자의 10월 8일 보도와 공식 홈페이지, 연합뉴스·서울신문 보도를 바탕으로 정리했습니다. 5628억 원은 주최 측의 기준가 차액 추정치이며 확정된 부정 계약·환수액이 아닙니다. 참여 정보는 주최 측의 최신 공지를 우선합니다. 씨앗의 소리는 특정 정당과 독립된 입장에서 시민의 세금감시 취지를 소개합니다.",
};

export const procurementTaxWatchNoticeTranslation: BriefingTranslation = {
  category: "Civic Notices · Citizen Tax Watch",
  title: "Before Raising Taxes, Find the Leaks: Citizens Can Scrutinize Public Contracts",
  subtitle: "Lee Jun-seok's office reports suspected procurement waste estimated at KRW 562.8 billion; public participation event planned for October 12–25",
  summary: "One lawmaker and one aide used public procurement records to identify suspected waste. We explain the possibilities for citizen scrutiny and how to join the Nara Marketplace hackathon. SEED supports the civic purpose while remaining independent of political parties.",
  author: "SEED VOICE",
  keyHighlights: ["Scrutinizing how collected taxes are spent is part of protecting citizens from additional tax burdens.", "The Nara Marketplace hackathon is planned for October 12–25 and is open to the general public.", "SEED supports citizen oversight from a position independent of political parties."],
  images: [
    { alt: "Citizens' hands use a magnifying glass and tablet to inspect a leaking treasury pipe", caption: "A symbolic illustration of citizens examining how their taxes are spent.", credit: "AI image" },
    { alt: "Two citizens compare a product, a purchase receipt and records on a laptop", caption: "Everyday knowledge of prices can help citizens examine public purchasing records.", credit: "AI image" },
    { src: "images/civic/procurement-hackathon-guide-en.svg", alt: "Participation guide listing the organizers, dates, eligible participants, website and submission method", caption: "Dates and procedures reflect information available on October 8. Check the event website's latest notice and submission form before entering.", credit: "SEED VOICE · official website and Yonhap reporting" },
  ],
  content: ["Shoppers compare prices to save even a few hundred won. Shop owners consider unit costs and delivery charges before ordering stock. Public institutions spending citizens' taxes should examine prices with the same care.", "The report that one lawmaker and one aide examined procurement records for about a month and identified suspected waste worth hundreds of billions of won is welcome. It suggests that citizens, too, can inspect the records and identify questionable spending."],
  sections: [
    { title: "Suspected waste identified in public contract records", paragraphs: ["According to the Seoul Economic Daily report, Reform Party lawmaker Lee Jun-seok and an aide used AI tools and their own data collection and analysis software to examine contracts on Nara Marketplace, South Korea's public procurement platform. The reported dataset covered roughly 1.05 million products and 2.8 million delivery requests, involving contracts worth about KRW 130 trillion.", "The reported KRW 562.8 billion remains an estimate requiring verification. The official website describes it as an estimated difference from a statistical benchmark price. It says benchmark prices were calculated from comparable products and specifications, then applied to contracts with actual delivery requests. The KRW 50 trillion in the project's name is a target, rather than an amount already identified.", "A price discrepancy must be assessed against market prices at the time of delivery, the product package, installation and warranty terms. Where excessive spending is verified, contracts can be corrected and similar waste prevented in subsequent purchases."] },
    { title: "A concrete case: an optical module listed at KRW 70,000 versus KRW 21,200", paragraphs: [
      "Case 8 on the official website concerns Soltech's SFP-SX optical transceiver, a small component used to transmit and receive signals over fiber-optic connections in network equipment. The organizers identify matching manufacturer, model, multimode specification and LC connector type as the basis for comparing the procurement item with a retail listing.",
      "According to the published analysis, five purchasing bodies—Jeonbuk's road management office and Suwon, Icheon, Hwaseong and Hwaseong's Manse District in Gyeonggi—recorded delivery requests for 26 units at KRW 70,000 each between May 18 and September 23, 2026. The requests total KRW 1.82 million. The organizers report a Fiberland retail price of KRW 21,200 for the same model, checked on October 7. SEED checked the retail page on October 8 and also found KRW 21,200, including VAT.",
      "On those two unit prices alone, the procurement price is about 3.3 times the retail price. The difference is KRW 48,800 per unit, or KRW 1,268,800 across 26 units. This is an arithmetic comparison, rather than a confirmed amount improperly spent. Actual payments must also be checked separately.",
      "The delivery conditions deserve equal attention. The procurement terms include delivery and installation at the specified location, and the published special contract conditions specify a two-year defect-repair period. A fair comparison must account for installation and travel charges, warranty coverage, shipping and VAT treatment, and the market price when delivery occurred. The project page provides a difference from a current retail price; it does not establish a fully reconciled cost comparison for all those conditions.",
      "Citizens can begin with a concrete task: compare the contract and cost breakdown to understand why prices for the same model differ so much. If an excessive difference remains after installation and warranty costs are included, seek explanations from the purchasing bodies and supplier, then check whether later prices and terms were corrected. Publishing the model, contract conditions and price evidence lets others follow that verification."] },
    { title: "Protecting taxpayers also means scrutinizing spending", paragraphs: ["SEED's call for no further tax increases is about protecting household finances. It means examining how higher rates, reduced allowances and a wider tax base take more money from citizens' accounts.", "Scrutiny of money already collected belongs alongside that work. When the government cites a budget shortage and asks citizens to pay more, unnecessary spending and excessive purchase prices should be examined first. Citizens have a right to inspect how their money was used and identify problems.", "This initiative shows how public records can support direct scrutiny of expenditure. AI and data analysis may broaden citizens' reach. People familiar with consumer prices, public procurement or data analysis can contribute their own knowledge."] },
    { title: "How citizens can take part", paragraphs: ["The Reform Party and Lee's office plan to run the ‘Find KRW 50 Trillion in Taxes: Nara Marketplace Hackathon’ from October 12 to 25. Developers, students and members of the general public are invited. Here, a hackathon is a collaborative event using data and tools to identify problems.", "Participants can use procurement data and analysis tools supplied through the event website to identify contracts priced excessively above market levels, document their evidence and submit the designated form. The organizers plan to review entries using AI and staff checks, then distribute a total prize pool of KRW 10 million in proportion to the amounts associated with cases judged valid. Strong cases may inform Lee's parliamentary audit questions.", "Interested citizens can start by reading published examples and methods on the website. Before submitting, check the current form and judging criteria. Record the exact product model, purchase date, quantity, installation charges and warranty terms to make the comparison verifiable."], bullets: ["Event: Find KRW 50 Trillion in Taxes: Nara Marketplace Hackathon", "Organizers: Reform Party and Lee Jun-seok", "Dates: October 12–25, 2026", "Participants: developers, students and the general public", "Website: savetax.now", "Method: identify suspicious contracts using public records and submit comparison evidence in the designated form"] },
    { title: "SEED supports the civic purpose independently", paragraphs: ["SEED VOICE is an independent civic journal with no affiliation to a political party. Introducing this event does not constitute support for, or a declaration of participation in, the Reform Party's political activities. We share the civic purpose of ensuring taxes are spent properly and enabling citizens to identify questionable expenditure.", "We hope such work grows into autonomous, sustained scrutiny by civil society. The same standards should apply whichever party governs: examine contracts and budgets, publish findings and follow through to see whether problems were corrected.", "Citizens pay taxes. They can also examine where that money goes. SEED will scrutinize both provisions that increase citizens' tax burdens and waste in money already collected."] },
  ],
  paragraphLinks: [{ sectionIndex: 1, paragraphIndex: 4, links: [{ label: "Soltech SFP-SX · contract records and price comparison", url: "https://savetax.now/8" }] }, { sectionIndex: 3, paragraphIndex: 2, links: [{ label: "Nara Marketplace hackathon · check participation details", url: eventUrl }] }],
  watchTitle: "Check before participating",
  watchPoints: ["Confirm the latest dates, submission form and judging criteria on the event website.", "Compare prices for matching models, delivery dates, installation and warranty terms.", "Distinguish suspected amounts, verified waste and actual recoveries or savings."],
  sourceLabels: ["Fiberland · Soltech SFP-SX price and shipping terms (checked October 8, 2026)", "Nara Marketplace hackathon · Soltech SFP-SX case and contract conditions", "Nara Marketplace hackathon · official website and analysis methods", "Yonhap · procurement findings and public participation announcement (October 8, 2026)", "Seoul Shinmun · Lee's procurement analysis and hackathon announcement (October 8, 2026)"],
  sourceNote: "Checked October 8, 2026, against the Seoul Economic Daily report by Noh Hae-cheol supplied for this article, the official website, and Yonhap and Seoul Shinmun reporting. KRW 562.8 billion is the organizers' estimated benchmark-price difference, not a confirmed total of fraud or recovered funds. Follow the organizers' latest notice for participation details. SEED presents the civic oversight purpose independently of political parties.",
};
