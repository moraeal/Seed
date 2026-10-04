import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

const imageRoot = "images/briefings/policy-fund-risk-2026";
const reportUrl = "https://www.yna.co.kr/amp/view/AKR20261001179600002";

export const policyFundRiskBriefing: Briefing = {
  slug: "government-policy-funds-risk-and-taxpayer-cost-2026",
  category: "씨앗 시민브리핑 · 투자와 세금",
  title: "정부가 밀어주는 펀드, 위험은 누가 떠안나요?",
  subtitle: "뉴딜펀드 손실로 살펴보는 정책투자의 구조와 시민이 알아야 할 위험",
  summary: "정부의 손실 완충은 기업의 사업 위험을 없애주지 않습니다. 뉴딜펀드의 재정 부담을 계기로 투자자의 돈, 국민의 세금, 기업의 경쟁 조건이 어떻게 달라지는지 설명합니다.",
  date: "2026-10-04",
  author: "씨앗 시민브리핑",
  readMinutes: 9,
  featured: true,
  placeBodyImagesBySection: true,
  keyHighlights: [
    "정부 지원, 기업의 성장 가능성, 내 투자금의 안전성은 각각 따져야 합니다.",
    "손실을 먼저 부담하는 공공자금에도 한도가 있습니다. 한도를 넘는 손실은 투자자에게 돌아올 수 있습니다.",
    "정책펀드의 성과는 완판보다 기술·생산성, 공공의 편익, 실제 재정 비용으로 확인해야 합니다."
  ],
  images: [
    { src: `${imageRoot}/public-risk-support.webp`, alt: "유리로 만든 작은 공장 아래를 받치는 거대한 손과 그 무게를 지탱하는 시민의 동전", caption: "정부의 손실 완충에는 공공자금이 들어갑니다. 투자자 보호와 함께 국민이 맡는 위험도 설명돼야 합니다.", credit: "AI 이미지", sourceUrl: "", contain: true },
    { src: `${imageRoot}/fund-subscription-crowd-ai.webp`, alt: "펀드 가입 창구에 신청서와 번호표를 들고 줄을 선 시민들", caption: "펀드 가입에 시민들이 몰려드는 모습을 표현했습니다. 완판 소식과 정부 지원에 대한 기대가 높아질수록 투자 위험과 손실 보호 한도도 함께 확인해야 합니다.", credit: "AI 이미지", sourceUrl: "", contain: true, afterSection: 4 },
    { src: `${imageRoot}/loss-cost-ko.png`, alt: "손실 자펀드 합산 손실액 205억8800만원과 그중 재정 부담 139억3000만원을 비교한 그래프", caption: "손실이 난 자펀드들의 합산 손실액 중 약 67.7%가 재정 부담으로 집계됐습니다. 두 막대는 전체와 그 일부이며 더하는 값이 아닙니다. 사업 전체의 최종 재정 순손실이나 일반 투자자의 실제 손실률을 나타내지 않습니다.", credit: "씨앗의 소리 통계 그래프 · 산업은행 제출자료에 관한 연합뉴스 보도", sourceUrl: reportUrl, contain: true, afterSection: 0 },
    { src: `${imageRoot}/first-loss-example-ko.png`, alt: "정부 20억원이 먼저 손실을 부담하는 가상 펀드에서 전체 손실 10억원·20억원·30억원에 따른 정부와 민간의 손실 비교", caption: "가상 사례: 민간 80억원·정부 20억원 출자, 정부 출자금이 먼저 손실을 부담하고 추가 보전이 없는 조건입니다. 실제 뉴딜펀드의 수익률이나 손실 배분 통계가 아닙니다.", credit: "씨앗의 소리 설명 그래프 · 가상 조건에 따른 계산", sourceUrl: "", contain: true, afterSection: 1 }
  ],
  sourceArticle: {
    title: "뉴딜펀드 만기청산 절반이 마이너스…재정 손실부담 139억",
    publisher: "연합뉴스",
    publishedAt: "2026-10-02",
    url: reportUrl,
    imageSrc: `${imageRoot}/fund-count-ko.png`,
    imageAlt: "만기 청산된 뉴딜 자펀드 17개 가운데 손실 8개와 나머지 9개를 비교한 그래프",
    imageCredit: "씨앗의 소리 통계 그래프 · 산업은행 제출자료에 관한 연합뉴스 보도",
    imageFit: "natural",
    note: "뉴스 요약｜청산된 자펀드 17개 중 8개에서 손실이 났습니다. 손실 자펀드 합산 손실액은 약 205억8800만원, 재정 부담은 139억3000만원입니다. 산업은행은 모집 차수별 손익을 합산하므로 일반 투자자의 실제 손실은 없다고 설명했습니다. 손실 자펀드 집계와 사업 전체 성과를 구분해 읽어야 합니다."
  },
  content: [
    "“정부가 밀어주는 펀드라면 믿고 투자해도 되겠지.” 정부가 미래 산업을 육성하고 국민도 그 성과를 나눠 갖게 하겠다고 설명하면 이런 기대가 생길 수 있습니다. 손실을 일부 막아주고 세제 혜택까지 준다면 더욱 매력적으로 보입니다.",
    "그러나 정부의 지원, 기업의 성장 가능성, 내 투자금의 안전성은 각각 따져야 할 문제입니다. 정책펀드는 이 세 가지를 하나의 기대 속에 묶어놓기 쉽습니다. 이번 뉴딜펀드 보도는 그 구조를 들여다볼 계기입니다."
  ],
  sections: [
    {
      title: "정책펀드는 어떻게 만들어지나요?",
      paragraphs: [
        "펀드는 여러 사람의 돈을 모아 전문가가 기업이나 사업에 투자하고, 그 결과를 투자자에게 돌려주는 상품입니다. 기업이 성장하면 이익을 얻고, 사업이 실패하거나 투자한 자산의 가치가 떨어지면 손실을 봅니다.",
        "정책펀드에는 정부의 산업 육성 목표와 공공자금이 더해집니다. 정부가 지원 분야를 정하고, 전문 운용사가 그 범위 안에서 기업을 골라 투자합니다. 일부 펀드는 민간의 참여를 끌어내기 위해 정부 자금이 손실을 먼저 부담하도록 설계합니다. 이를 ‘후순위 출자’라고 합니다.",
        "2021년 출시된 국민참여형 뉴딜펀드도 재정 등이 손실을 먼저 부담해 일반 투자자의 손실을 완충하는 구조였습니다. 연합뉴스 보도에 따르면 그 완충 범위는 21.5%였습니다.",
        "국민의 세금이 들어가는 이유는 정부가 처음부터 투자 위험의 일부를 공공자금으로 맡기로 했기 때문입니다. 여기에는 “민간이 주저하는 투자를 끌어내 산업을 키우겠다”는 정책 판단이 들어 있습니다."
      ]
    },
    {
      title: "정부가 먼저 손실을 부담하면 무엇이 달라지나요?",
      paragraphs: [
        "쉽게 이해하기 위해 민간 투자자가 80억원, 정부가 20억원을 넣은 가상의 펀드를 생각해보겠습니다. 정부 출자금 20억원이 먼저 손실을 부담하고, 추가 보전은 없다고 가정합니다.",
        "전체 손실이 10억원이면 정부가 10억원을 잃고 민간 투자자의 손실은 없습니다. 손실이 20억원이면 정부 출자금 전액이 소진됩니다. 손실이 30억원으로 커지면 정부가 20억원, 민간이 나머지 10억원을 잃습니다.",
        "마지막 경우 민간 투자자는 자신이 넣은 80억원 중 10억원, 즉 12.5%를 잃습니다. 실제 상품에서는 손실 부담 순서와 한도, 수익 배분 방식이 다르므로 투자설명서를 확인해야 합니다.",
        "정부가 위험을 먼저 부담해도 투자한 기업의 사업 위험은 그대로 남아 있습니다. 손실을 누가 먼저 감당하는지가 달라지는 것입니다."
      ]
    },
    {
      title: "‘하이리스크·하이리턴’의 관계가 흐려질 수 있습니다",
      paragraphs: [
        "위험이 큰 투자에서 높은 수익을 기대한다는 말은, 큰 손실의 가능성도 받아들인다는 뜻입니다. 높은 위험 자체가 높은 수익을 보장해주지는 않습니다.",
        "그런데 정부가 손실의 일부를 먼저 맡으면 투자자에게 보이는 위험은 줄어듭니다. 원래라면 망설였을 투자도 매력적으로 보일 수 있습니다. 이것이 정책펀드가 민간 자금을 끌어오는 원리입니다.",
        "이때 위험과 책임의 관계가 흐려질 수 있습니다. 투자자는 정부의 보호를 과신하고, 운용사는 손실을 공공자금이 먼저 흡수한다는 이유로 심사를 느슨하게 할 유인이 생길 수 있습니다. 이를 경제학에서는 ‘도덕적 해이’라고 부릅니다.",
        "한국경제는 2026년 5월 23일 사설에서 국민참여성장펀드의 손실 완충과 세제 혜택이 일부 투자자의 혜택을 전 국민의 부담으로 만들 수 있다고 지적했습니다. 느슨한 심사와 안이한 투자, 민간 투자 위축의 위험도 함께 경고했습니다.",
        "이번 뉴딜펀드 보도에서 일반 투자자의 실제 손실은 없었다는 설명과, 정책펀드에서 원금 손실이 발생할 수 있다는 사실은 함께 이해해야 합니다. 손실 완충에는 한도가 있고, 그 한도를 넘는 손실은 투자자에게 돌아올 수 있습니다."
      ]
    },
    {
      title: "정부 지원이 기업의 경쟁 조건까지 바꿀 수 있습니다",
      paragraphs: [
        "정책펀드의 영향은 투자자에게서 끝나지 않습니다. 비슷한 기술을 가진 두 기업이 있다고 해보겠습니다. 한 기업은 민간 투자자를 설득해 자금을 구하고, 다른 기업은 정책펀드의 지원을 받습니다. 지원받은 기업은 더 오래 적자를 견디거나, 더 낮은 가격으로 판매할 여력을 얻을 수 있습니다.",
        "좋은 기술이 자금 부족 때문에 사라지는 것을 막는다면 공익이 있습니다. 그러나 기업 선정이 정치적 관계나 정권의 홍보 목표에 따라 이뤄진다면 경쟁 조건이 불공정해집니다. 기업들이 기술과 고객보다 정부의 선택에 더 매달리는 구조도 생길 수 있습니다.",
        "세계일보는 뉴딜펀드 구상이 발표된 2020년 9월 사설에서 정부 주도 금융이 자금 배분을 왜곡하고 민간 부문을 위축시킬 수 있다고 우려했습니다. 투자 자율성과 책임을 강화해야 한다는 지적이었습니다.",
        "국제 연구에서도 비슷한 문제가 확인됩니다. OECD의 2025년 연구는 여러 나라 대형 제조기업을 분석해, 보조금이 세계시장 점유율을 높이는 효과에 비해 생산성 개선 효과는 없거나 부정적일 수 있다고 밝혔습니다. 지원받은 기업이 가격을 낮추거나 경쟁사의 투자를 위축시키는 경로도 제시했습니다. 점유율이 높아졌다는 사실만으로 좋은 기업을 키웠다고 평가하기 어려운 이유입니다."
      ]
    },
    {
      title: "시민은 ‘정부 지원’을 ‘안전 보장’으로 받아들일 수 있습니다",
      paragraphs: [
        "펀드 구조에 익숙하지 않은 시민에게 ‘국민참여’, ‘국가 전략산업’, ‘손실 완충’이라는 설명은 강한 신뢰 신호가 됩니다. 주변에서 가입이 몰리고 완판 소식까지 들리면 상품의 위험보다 기회를 놓칠까 하는 마음이 앞설 수 있습니다.",
        "한국경제의 올해 5월 사설은 국민참여성장펀드의 혜택과 함께 ‘1등급’ 고위험 상품이라는 점을 짚었습니다. 완판은 투자자가 몰렸다는 뜻입니다. 앞으로 투자할 기업이 성공한다는 증거는 아닙니다.",
        "정부와 판매사는 손실 보호를 설명할 때 한도와 적용 단위도 같은 비중으로 알려야 합니다. 펀드 전체의 일정 비율인지, 개별 자펀드 기준인지, 내 투자금과 어떤 관계가 있는지에 따라 결과가 달라집니다.",
        "“원금 손실 가능”이라는 문구만 적어놓고 홍보에서는 안전성과 혜택을 강조한다면 시민은 실제 위험을 이해하기 어렵습니다. 투자자가 자신의 선택에 책임지려면 선택에 필요한 정보부터 충분히 받아야 합니다."
      ]
    },
    {
      title: "그래도 정책펀드가 필요한 이유는 있습니다",
      paragraphs: [
        "신기술 개발에는 오랜 시간과 많은 비용이 들어갑니다. 기술이 성공해도 그 편익이 여러 기업과 사회 전체로 퍼져, 최초 투자자가 충분한 수익을 거두기 어려운 분야도 있습니다. 민간 자금만으로 필요한 투자가 충분히 이뤄지지 않는 경우입니다.",
        "정책펀드는 이런 틈을 메울 수 있습니다. 조지타운대학교 CSET의 2021년 중국 정부유도펀드 연구도 장기 자금 공급의 가능성을 인정합니다. 동시에 관료주의, 운용 전문성 부족, 시장의 규율 부족을 문제로 지적하며 전문 운용자의 독립적인 판단이 중요하다고 설명합니다.",
        "따라서 국민이 부담하는 위험에는 분명한 이유가 있어야 합니다. 어떤 기술과 공익을 위해 얼마를 부담하는지, 민간 투자만으로 해결하기 어려운 이유가 무엇인지 설명할 수 있어야 합니다. 정책적으로 유망한 산업이라도 이미 비싼 가격에 투자하면 손실이 날 수 있습니다."
      ]
    },
    {
      title: "완판 이후에 확인해야 할 것들",
      paragraphs: [
        "시민이 투자 전에 살펴볼 것은 정부의 이름보다 상품의 조건입니다."
      ],
      bullets: [
        "무엇에 투자하나요? 투자 분야와 기업, 비상장기업 비중, 위험등급을 확인해야 합니다.",
        "내 손실은 어디까지 보호되나요? 완충 한도와 계산 기준, 한도를 넘었을 때의 부담을 확인해야 합니다.",
        "언제 돈을 찾을 수 있나요? 만기와 중도 환매 제한은 생활자금 운용에 직접 영향을 줍니다."
      ]
    }
  ],
  watchTitle: "국민의 세금이 들어가는 만큼 계속 확인할 기준",
  watchIntro: "성과와 위험 부담을 함께 공개해야 시민이 정책펀드를 평가할 수 있습니다.",
  watchPoints: [
    "기업 선정과 운용 인사의 전문성, 정치적 이해충돌, 정부 간섭을 통제하는 절차",
    "완판·매출·점유율과 구분한 실제 기술·생산성 성과 및 공공의 편익",
    "출자·손실 흡수·보증·세제 혜택의 비용과 지원 중단·투자금 회수 기준",
    "수익이 났을 때 공공자금에 돌아오는 몫과 투자자에게 설명한 보호 한도의 정확성"
  ],
  closing: [
    "이번 뉴딜펀드 사례는 정부의 손실 완충이 실제 비용을 수반한다는 것을 보여줍니다. 정부가 밀어주는 산업이라는 이유만으로 투자 위험을 가볍게 여길 수는 없습니다.",
    "투자하는 시민에게는 자신의 돈을 판단할 정보가 필요하고, 투자하지 않은 시민에게는 세금으로 그 위험을 부담해야 할 이유가 필요합니다. 정책펀드는 두 시민 모두에게 설명할 수 있어야 합니다."
  ],
  sources: [
    { label: "연합뉴스 · 뉴딜펀드 만기청산 절반이 마이너스…재정 손실부담 139억 (2026.10.2)", url: reportUrl },
    { label: "생활법령정보 · 펀드의 개념과 실적배당 원칙", url: "https://m.easylaw.go.kr/MOB/OnhunqnaInfoRetrieve.laf?onhunqnaAstSeq=92&onhunqueSeq=1844" },
    { label: "한국경제 사설 · 관심 뜨거운 국민성장펀드…혜택 과도한 것은 아닌지 (2026.5.23)", url: "https://v.daum.net/v/20260523000819627" },
    { label: "세계일보 사설 · ‘관제’ 뉴딜펀드 투자 손실나면 국민이 떠안는다니 (2020.9.3)", url: "https://www.segye.com/newsView/20200903523016" },
    { label: "OECD · The Market Implications of Industrial Subsidies (2025)", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/the-market-implications-of-industrial-subsidies_10647f9e/e40b793f-en.pdf" },
    { label: "조지타운대학교 CSET · Understanding Chinese Government Guidance Funds (2021)", url: "https://cset.georgetown.edu/publication/understanding-chinese-government-guidance-funds/" }
  ],
  sourceNote: "2026년 10월 4일 작성. 뉴딜펀드 수치는 산업은행 제출자료를 인용한 보도 기준입니다. 손실 자펀드 집계는 사업 전체의 최종 재정 순손실과 구분합니다. 2020년 사설은 당시 구상에 대한 비판이며, 2026년 5월 사설은 국민참여성장펀드를 다룹니다. 민간 80억원·정부 20억원은 설명용 가상 사례입니다. OECD 연구는 여러 나라 제조기업 대상이며, 중국 펀드 연구는 한국 펀드의 개별 투자 실패 원인을 입증하는 자료가 아닙니다. 위험·경쟁 왜곡에 관한 적용과 평가 기준은 씨앗의 판단입니다."
};

export const policyFundRiskTranslation: BriefingTranslation = {
  category: "SEED CIVIC BRIEFING · INVESTMENT AND TAXPAYERS",
  title: "When the Government Backs a Fund, Who Bears the Risk?",
  subtitle: "South Korea’s New Deal Fund losses explain policy investment, taxpayer costs and the risks citizens need to understand.",
  summary: "Public first-loss capital cushions investors without removing a company’s business risk. The New Deal Fund case shows how government backing changes investment incentives, public costs and competition.",
  author: "SEED Civic Briefing",
  keyHighlights: [
    "Government support, a company’s prospects and the safety of your investment require separate assessments.",
    "Public first-loss protection has a limit. Losses beyond that cushion can reach private investors.",
    "Judge policy funds by technology, productivity, public benefits and fiscal costs—not subscription sellouts alone."
  ],
  images: [
    { alt: "A large hand supporting a miniature glass factory, with citizens’ coins carrying the weight beneath it", caption: "Government loss protection uses public money. Investors should understand the protection, and taxpayers the risks they assume.", credit: "AI image" },
    { alt: "Citizens holding application forms and queue tickets at a crowded fund subscription counter", caption: "A crowded fund subscription scene illustrates public enthusiasm. Strong demand and expectations of government support make understanding investment risks and protection limits essential.", credit: "AI image" },
    { src: `${imageRoot}/loss-cost-en.png`, alt: "Chart comparing KRW 20.588 billion in aggregate losses of loss-making subfunds with the KRW 13.93 billion fiscal portion", caption: "The fiscal portion was approximately 67.7% of the aggregate losses in loss-making subfunds. The bars show a total and a part of that total; they must not be added. They do not show the programme’s final net fiscal loss or retail investors’ realised loss rate.", credit: "SEED VOICE statistical chart · Yonhap reporting on KDB data" },
    { src: `${imageRoot}/first-loss-example-en.png`, alt: "Illustrative allocation of KRW 1 billion, 2 billion and 3 billion in fund losses when government capital absorbs the first KRW 2 billion", caption: "Illustration: KRW 8 billion private capital and KRW 2 billion public capital, with public capital taking first losses and no additional bailout. These are hypothetical calculations, not New Deal Fund results.", credit: "SEED VOICE explanatory chart · hypothetical calculation" }
  ],
  sourceArticle: {
    title: "Nearly half of liquidated New Deal subfunds lost money; fiscal loss burden reaches KRW 13.93 billion",
    publisher: "Yonhap News Agency",
    imageAlt: "Eight of 17 liquidated New Deal subfunds recorded losses; nine did not record losses",
    imageCredit: "SEED VOICE statistical chart · Yonhap reporting on Korea Development Bank data",
    note: "News summary | Eight of 17 liquidated subfunds lost money. Their aggregate losses were approximately KRW 20.588 billion, of which KRW 13.93 billion was borne by fiscal capital. Korea Development Bank said retail investors suffered no actual loss after gains and losses were pooled by subscription round. The loss-making subfund figures are distinct from whole-programme results."
  },
  content: [
    "“If the government is backing this fund, surely I can trust it.” That expectation can arise when officials promise to develop future industries and let citizens share the gains. A loss cushion and tax benefits make the offer more attractive.",
    "Government support, a company’s prospects and the safety of your own money nevertheless require separate assessments. Policy funds can bundle them into a single reassuring message. Recent reporting on South Korea’s New Deal Fund offers a chance to examine the structure."
  ],
  sections: [
    { title: "How is a policy fund structured?", paragraphs: [
      "An investment fund pools money and appoints professionals to invest in companies or projects. Investors receive the results: gains when investments succeed, losses when businesses fail or asset values fall.",
      "A policy fund adds public capital and an industrial-development objective. Government identifies eligible sectors, and professional managers select investments within that remit. Some funds attract private participation by making public capital absorb losses first. This is a subordinated, or first-loss, investment.",
      "The retail-participation New Deal Fund launched in 2021 used fiscal and other capital to cushion private investors. Yonhap reported a 21.5% first-loss cushion.",
      "Taxpayers bear costs because the government agreed at the outset to assume part of the investment risk. The policy rationale is to draw private finance into industries that investors might otherwise hesitate to support."
    ] },
    { title: "What changes when government capital takes losses first?", paragraphs: [
      "Consider a hypothetical fund with KRW 8 billion from private investors and KRW 2 billion from government. Assume the public stake absorbs the first KRW 2 billion of losses, with no additional support.",
      "If the fund loses KRW 1 billion, public capital bears the entire loss. A KRW 2 billion loss exhausts the public stake. A KRW 3 billion loss leaves government bearing KRW 2 billion and private investors the remaining KRW 1 billion.",
      "In the final scenario, private investors lose KRW 1 billion out of their KRW 8 billion investment: 12.5%. Actual products differ in loss priority, protection limits and distribution of returns, so their offering documents matter.",
      "Public protection leaves the underlying company’s business risk in place. It changes who absorbs losses first."
    ] },
    { title: "Government protection can blur the risk–return relationship", paragraphs: [
      "Seeking higher returns from a risky investment means accepting the possibility of substantial losses. Taking more risk does not itself guarantee a higher return.",
      "When public capital takes initial losses, the risk faced by private investors falls. An investment they would otherwise reject can become attractive. This is how policy funds mobilise private money.",
      "The arrangement can also weaken the connection between risk and responsibility. Investors may overestimate government protection, while managers may have less incentive to scrutinise investments if public capital bears initial losses. Economists call such incentive problems moral hazard.",
      "A May 23, 2026 Korea Economic Daily editorial argued that the National Growth Fund’s retail scheme could spread the cost of benefits for participating investors across all taxpayers. It also warned of weaker screening, complacent investment and crowding out of private capital.",
      "KDB’s statement that retail investors suffered no realised loss in the reported New Deal case must be read alongside the possibility of principal losses in policy funds. The cushion is finite; losses beyond it can reach investors."
    ] },
    { title: "Public support can change the terms of business competition", paragraphs: [
      "The effects extend beyond investors. Imagine two companies with comparable technology. One must persuade private investors to provide finance; the other receives policy-fund support. The supported company may be able to sustain losses longer or sell at lower prices.",
      "There is a public benefit in preventing promising technology from disappearing for lack of finance. Selection based on political connections or a government’s publicity objectives, however, can create unfair competitive conditions. Companies may devote more attention to securing government favour than to technology and customers.",
      "A September 2020 Segye Ilbo editorial, published when the New Deal scheme was being designed, warned that government-directed finance could distort capital allocation and weaken the private sector. It called for greater investment autonomy and responsibility.",
      "An OECD study published in 2025 examined large manufacturing firms across countries. Subsidies increased global market shares while showing no or negative effects on productivity. The study identified possible channels including lower prices and discouraged investment by competitors. Market-share gains alone are therefore insufficient evidence that policy has developed better companies."
    ] },
    { title: "Citizens may hear ‘government-backed’ as ‘safe’", paragraphs: [
      "For people unfamiliar with fund structures, phrases such as ‘public participation’, ‘strategic industries’ and ‘loss protection’ send a strong signal of trust. Crowds of subscribers and sellout headlines can make fear of missing out more immediate than the product’s risks.",
      "The Korea Economic Daily’s May editorial highlighted the National Growth Fund retail product’s benefits alongside its highest-tier, Grade 1 risk rating. A sellout measures demand for subscriptions. It does not demonstrate that the companies receiving investment will succeed.",
      "Government and distributors should explain protection limits and their calculation units as prominently as the benefits. Whether protection applies to a whole fund, an individual subfund or another defined investment base changes the outcome for your money.",
      "A small warning that principal can be lost is inadequate if the dominant sales message stresses safety and benefits. Investors need usable information to take responsibility for their choices."
    ] },
    { title: "Why policy funds can still be necessary", paragraphs: [
      "Developing new technology takes time and money. Benefits can spread to other firms and society, leaving the original investor unable to capture enough of the return. Private finance can therefore fall short of what is socially worthwhile.",
      "Policy funds can help close that gap. Georgetown University’s CSET report on Chinese government guidance funds, published in 2021, recognised their potential to provide patient capital. It also identified bureaucracy, weak managerial expertise and insufficient market discipline, stressing the value of independent professional investment decisions.",
      "The public risk requires an explicit justification: which technology and public benefit the fund seeks, how much risk taxpayers assume, and why private investment alone is inadequate. Even a promising industry can generate investment losses if the entry price is too high."
    ] },
    { title: "What to check after the sellout headlines", paragraphs: [
      "Before investing, examine the product’s terms as closely as its government backing."
    ], bullets: [
      "What does it invest in? Check sectors, companies, unlisted exposure and the risk rating.",
      "How much protection applies to my money? Check the cushion’s limit, calculation base and who bears losses beyond it.",
      "When can I withdraw? Maturity and restrictions on early redemption directly affect household finances."
    ] }
  ],
  watchTitle: "Keep checking how public money is used",
  watchIntro: "Citizens need both performance information and a clear account of the risks they finance.",
  watchPoints: [
    "Investment-selection and management expertise, political conflicts of interest and safeguards against government interference",
    "Technology, productivity and public benefits measured separately from subscription demand, revenue and market share",
    "Costs of public equity, loss absorption, guarantees and tax benefits; criteria for ending support and recovering investments",
    "The public share of successful returns and the accuracy of the protection limits explained to investors"
  ],
  closing: [
    "The New Deal Fund case shows that government loss protection has a real cost. State support for an industry does not remove the need to assess investment risk.",
    "Citizens who invest need information to judge what happens to their money. Citizens who do not invest need a reason for assuming that risk through taxation. Policy funds must be explainable to both."
  ],
  sourceLabels: [
    "Yonhap · Liquidated New Deal subfund losses and fiscal burden (October 2, 2026)",
    "Easy Law · Investment funds and performance-based distributions",
    "Korea Economic Daily editorial · Is the National Growth Fund offering excessive benefits? (May 23, 2026)",
    "Segye Ilbo editorial · Taxpayer liability for government-directed New Deal investment losses (September 3, 2020)",
    "OECD · The Market Implications of Industrial Subsidies (2025)",
    "Georgetown CSET · Understanding Chinese Government Guidance Funds (2021)"
  ],
  sourceNote: "Written October 4, 2026. New Deal figures are from reporting on KDB data supplied to a lawmaker. Loss-making subfund totals are distinct from the programme’s final net fiscal result. The 2020 editorial addressed the original design; the May 2026 editorial addressed the newer National Growth Fund retail scheme. The KRW 8 billion private/KRW 2 billion public scenario is hypothetical. The OECD study covers manufacturing firms across countries, and Chinese fund research does not establish the cause of individual Korean investment failures. Applying these risks and evaluation criteria to the briefing is SEED’s analysis."
};
