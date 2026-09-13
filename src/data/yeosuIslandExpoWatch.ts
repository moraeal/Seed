export type WatchArticleLink = { label: string; url: string };
export type WatchArticleParagraph = { text: string; links?: WatchArticleLink[] };
export type WatchArticleSection = { heading: string; paragraphs: WatchArticleParagraph[] };
export type WatchArticleEdition = {
  subtitle: string;
  highlights: string[];
  intro: WatchArticleParagraph[];
  heroAlt: string;
  heroCaption: string;
  bodyAlt: string;
  bodyCaption: string;
  infographicAlt: string;
  infographicCaption: string;
  sections: WatchArticleSection[];
  watchHeading: string;
  watchIntro: string;
  watchItems: string[];
  closing: string[];
};

export const yeosuIslandExpoSources = {
  approval: "https://www.yna.co.kr/view/AKR20210809129800054",
  overview: "https://yeosu2026.or.kr/content/1_3",
  budget: "https://v.daum.net/v/7NHtaloMlR?f=p",
  provincialBudget: "https://www.jeonnam.go.kr/M7116/boardView.do?menuId=jeonnam0202000000&seq=1959894",
  operationsTender: "https://www.sankun.com/bid-info/EjEsL7fKp1vZpLWwP653vIJ2Vo5lEJPsVfPecRbOVag",
  operationsReport: "https://www.ikbc.co.kr/article/view/kbc202502050036",
  jamboreeAudit: "https://www.yna.co.kr/view/AKR20250410105300001",
  jamboreeContracts: "https://www.yna.co.kr/view/AKR20230814111000530",
  jamboreeBus: "https://www.yna.co.kr/view/AKR20231012169500002",
  blackout: "https://www.mk.co.kr/news/society/12148212",
  blackoutRebuttal: "https://news.nate.com/view/20260912n08690",
  languages: "https://imnews.imbc.com/replay/2026/nwtoday/article/6809454_37012.html",
  firstWeekend: "https://v.daum.net/v/XvOiGkPKGN",
  firstThreeDays: "https://v.daum.net/v/20260908153645441",
  preopeningRevenue: "https://news.nate.com/view/20260902n16220",
} as const;

export const yeosuIslandExpoArticle: Record<"ko" | "en", WatchArticleEdition> = {
  ko: {
    subtitle: "행사는 외주로 맡겨도 책임까지 외주로 넘길 수는 없습니다",
    highlights: [
      "248억 원으로 승인된 박람회의 직접사업비가 713억 원까지 커졌습니다.",
      "종합운영대행은 배정예산 269억 원, 낙찰금액 196억7천여만 원이며 입찰 참여자는 1개 컨소시엄이었습니다.",
      "61일간 관람객 300만 명이 목표지만 개막 사흘 누적은 4만1,446명이었습니다.",
      "예산·계약·사업수익·사후 활용과 행정 책임을 행사 종료 뒤가 아니라 지금 공개해야 합니다.",
    ],
    intro: [
      { text: "248억 원으로 승인받은 행사가 713억 원으로 커졌습니다. 61일 동안 300만 명을 모으겠다고 했지만 개막 첫 주말 관람객은 이틀을 합해 3만5,668명이었습니다. 행사 기간 전체를 단순히 나누면 하루 평균 약 4만9천 명이 찾아야 하는 목표입니다." },
      { text: "여수의 섬을 알리고 섬의 미래를 준비하겠다는 취지는 좋습니다. 하지만 공익을 내세웠다고 모든 과정이 공익이 되는 것은 아닙니다. 예산을 따오고 국제행사를 유치했다는 사실만으로 여수의 발전이라고 말할 수도 없습니다. 시민의 돈을 얼마나 썼는지, 누구에게 돌아갔는지, 행사 뒤 여수와 섬 주민에게 무엇이 남는지까지 확인해야 합니다." },
      { text: "지금 시민들 사이에서는 이번 행사가 망해버린 새만금 잼버리의 재탕이 되는 것 아니냐는 말까지 나옵니다. 두 행사의 조건은 다릅니다. 그래도 큰 명분과 과도한 목표를 앞세우고, 막대한 예산을 투입한 뒤, 정작 현장의 기본과 책임 소재가 흔들린다면 시민들이 잼버리를 떠올리는 것은 당연합니다." },
    ],
    heroAlt: "섬과 바다를 배경으로 예산 장부, 저울과 점검 조명이 놓인 공익감시 상징 일러스트",
    heroCaption: "248억 원으로 승인된 국제행사가 713억 원 규모로 커졌습니다. 행사의 명분만큼 예산과 계약, 성과와 사후 책임도 시민 앞에 놓여야 합니다.",
    bodyAlt: "운영대행 계약 서류를 든 업체들과 이를 감독하는 행정 책임자를 상징한 편집 일러스트",
    bodyCaption: "행사를 전문업체에 맡길 수는 있어도 사업을 설계하고 계약을 감독하며 결과를 검수할 행정의 책임까지 넘길 수는 없습니다.",
    infographicAlt: "248억 원에서 713억 원으로 확대된 사업비, 관람객 300만 명, 사업수익 120억 원, 운영대행 배정예산 269억 원과 낙찰 196.7억 원을 표시한 인포그래픽",
    infographicCaption: "운영대행 269억 원은 배정예산이고 실제 낙찰금액은 196억7천여만 원입니다. 사업비와 목표 수치는 성과·정산 자료와 함께 확인해야 합니다.",
    sections: [
      {
        heading: "248억 원으로 받은 타당성조사, 713억 원까지 설명합니까",
        paragraphs: [
          { text: "여수세계섬박람회는 2021년 기획재정부의 국제행사 타당성조사를 거쳐 국제행사로 승인됐습니다. 당시 기본사업비는 248억 원이었습니다. 이후 확대사업이 붙으면서 직접사업비는 676억 원, 703억 원을 거쳐 713억 원까지 늘었습니다.", links: [{ label: "국제행사 승인 자료", url: yeosuIslandExpoSources.approval }, { label: "사업비 확대 과정", url: yeosuIslandExpoSources.budget }] },
          { text: "타당성조사를 아예 하지 않은 것은 아니겠지만, 당시 검토의 기준이 된 기본사업비는 248억 원이었습니다. 이후 사업비가 713억 원으로 커지는 동안 늘어난 465억 원의 필요성과 효과를 누가 어떤 기준으로 다시 검증했는지는 확인해봐야 합니다." },
          { text: "전시 콘텐츠와 행사 프로그램, 랜드마크, 홍보와 관람객 유치, 안전시설이 추가됐다고 합니다. 사업을 키운 이유만 설명해서는 부족합니다. 처음 승인받은 사업과 지금의 사업이 사실상 다른 규모가 됐다면 확대된 사업 전체에 대한 재정 부담과 수익 가능성, 행사 뒤 유지비까지 다시 따져야 했습니다." },
          { text: "현재 직접사업비는 국비 64억 원, 도비 153억 원, 시비 376억 원, 입장권 판매 등을 통한 사업수익 120억 원으로 구성돼 있습니다. 공공재정만 593억 원입니다. 전시 콘텐츠 개발·운영 90억 원, 행사 프로그램 65억 원, 랜드마크 60억 원, 관람객과 학술회의 유치 52억 원, 홍보·마케팅 50억 원, 안전시설 47억 원이 편성됐습니다. 홍보와 관람객 유치에 잡힌 돈만 102억 원입니다.", links: [{ label: "전라남도 공식 예산자료", url: yeosuIslandExpoSources.provincialBudget }, { label: "사업비 분석", url: yeosuIslandExpoSources.budget }] },
          { text: "예산을 확보했다는 말은 정치인의 실적이 될 수 있습니다. 그 예산이 지역의 빚과 유지비로 돌아오면 시민에게는 실적이 아니라 부담입니다. 사업을 가져오는 것보다 그 사업이 여수에 필요한지를 먼저 따졌어야 합니다." },
        ],
      },
      {
        heading: "행사는 외주화해도 책임은 외주화할 수 없습니다",
        paragraphs: [
          { text: "조직위원회는 박람회장 운영과 전시 구체화부터 사업 정산까지 총괄하는 종합운영대행 용역을 배정예산 269억 원 규모로 발주했습니다. 입찰에는 1개 컨소시엄만 참여했고, ㈜MBC플러스가 대표사인 컨소시엄이 196억7천여만 원에 계약을 따냈습니다.", links: [{ label: "입찰·낙찰 자료", url: yeosuIslandExpoSources.operationsTender }, { label: "운영대행 용역 보도", url: yeosuIslandExpoSources.operationsReport }] },
          { text: "대규모 행사를 전문업체에 맡길 수는 있습니다. 그렇다고 여수시와 조직위원회의 책임이 줄어드는 것은 아닙니다. 사업 목표를 정하고 예산을 편성한 곳도, 입찰 조건을 만들고 업체를 선정한 곳도, 결과를 감독하고 검수할 곳도 행정과 조직위원회입니다." },
          { text: "정전 등 운영 장애가 발생했을 때 ‘대행업체가 운영했다’고 말할 수 없습니다. 관람객 유치가 기대에 못 미치고 수익계획에 구멍이 생겼을 때도 업체의 실적 부진으로만 돌릴 수 없습니다. 업체는 계약을 이행할 책임이 있고, 발주기관은 그 계약을 설계하고 감독할 책임이 있습니다." },
          { text: "시민에게 공개돼야 할 자료도 분명합니다. 운영대행사 선정 당시 제안서 평가표와 위원별 점수, 컨소시엄 참여업체 전체 명단, 하도급과 재하도급 현황, 계약 변경과 추가 지급액, 과업별 검수 결과, 정산 내역입니다. 배정예산 269억 원의 사업이 어떤 업체들을 거쳐 어디에 쓰였는지 보이지 않는다면 공익사업이라는 말을 믿어달라고 할 수 없습니다." },
        ],
      },
      {
        heading: "예산을 따왔다고 여수의 발전이 되는 것은 아닙니다",
        paragraphs: [
          { text: "국비를 확보하고 큰 사업을 유치하면 지역 발전이라는 말부터 나옵니다. 그러나 국비도 시민이 낸 세금입니다. 국비가 붙으면 도비와 시비도 따라 들어갑니다. 행사 규모가 커질수록 지역이 부담해야 할 인력과 행정력, 교통 혼잡, 환경 정비, 사후 유지비도 늘어납니다." },
          { text: "사업비가 지역에서 쓰였다는 이유만으로 지역경제 효과라고 계산해서도 안 됩니다. 지역업체 참여는 필요합니다. 특정 업체에 계약이 반복해서 몰리거나, 경쟁과 감독이 무너지고, 실제 성과보다 계약금만 남는다면 그것은 지역경제가 아니라 이권이 됩니다." },
          { text: "박람회 때문에 장사를 접거나 손해를 본 상인, 교통 불편을 감수한 시민, 행사 뒤 시설 유지비를 부담할 시민까지 함께 계산해야 합니다. 외지 관람객이 쓰고 간 돈만 경제효과로 잡고 시민이 치른 비용을 빼놓으면 지역 발전이라는 결론은 처음부터 정해진 셈입니다." },
        ],
      },
      {
        heading: "잼버리에서 무엇을 배웠습니까",
        paragraphs: [
          { text: "새만금 세계스카우트잼버리는 준비 부족과 운영 실패로 국제적인 망신을 샀습니다. 감사원은 2025년 감사 결과에서 시설과 생활서비스 준비 부실, 형식적인 점검과 허위 보고, 계약 비위 등을 포함해 40건의 위법·부당 사항을 확인했습니다. 공무원 5명에 대해 징계를 요구했고 입찰방해 혐의 등에 대해서는 수사도 요청했습니다.", links: [{ label: "감사원 감사 결과 보도", url: yeosuIslandExpoSources.jamboreeAudit }] },
          { text: "잼버리 당시 한 지역업체가 8건, 23억5,967만여 원 규모의 계약을 따냈다는 지적이 나왔고, 국회에서는 짬짜미 가능성이 제기됐습니다. 조직위원회는 특혜가 아니라고 반박했습니다. 이와 별도로 지역 전세버스 업체들의 입찰 짬짜미 의혹에 대해서는 공정거래위원회 조사가 진행됐다는 보도도 있었습니다. 실제 위법행위였는지는 더 조사해봐야겠지만, 지역업체라는 이름만으로 계약의 공정성과 적정성까지 보장되는 것은 아닙니다.", links: [{ label: "지역업체 계약 집중 지적과 반박", url: yeosuIslandExpoSources.jamboreeContracts }, { label: "전세버스 입찰 의혹 조사", url: yeosuIslandExpoSources.jamboreeBus }] },
          { text: "여수섬박람회가 잼버리와 같은 길을 가고 있는지는 계약자료를 들여다봐야 알 수 있습니다. 그래서 지금 공개하고 감시해야 합니다. 행사가 끝난 뒤 감사 결과가 나올 때까지 기다려서는 시민의 돈도, 여수의 이름도 지킬 수 없습니다." },
          { text: "현장의 기본이 흔들리는 모습은 이미 나왔습니다. 박람회는 2019년부터 추진됐고 2021년 국제행사로 승인됐습니다. 준비할 시간이 없었던 행사가 아닙니다. 개막 전 시범운영까지 했지만 개막 당일 주행사장 식당가에서는 전력 사용량 증가로 두 차례 이상 정전이 발생했습니다. 조직위원회는 일시적인 전력 과부하였으며 복구를 마쳤다고 밝혔습니다. 다만 개도에서 상인이 식재료를 폐기하고 철수했다는 보도에 대해서는, 해당 식당이 박람회 입점업체가 아니라 부녀회가 운영하던 식당이었다고 여수시와 조직위원회가 반박했습니다.", links: [{ label: "개막 당일 정전 보도", url: yeosuIslandExpoSources.blackout }, { label: "여수시·조직위원회 반박", url: yeosuIslandExpoSources.blackoutRebuttal }] },
          { text: "‘세계박람회’라는 이름과 달리 외국어 안내가 부실하다는 지적도 개막 전부터 나왔습니다. 지난 3월 조직위원회가 제시한 외국인 관람객 목표는 10만 명이었고, 개막 직전 발표된 목표는 9만 명이었습니다. 그러나 홈페이지의 전시관과 교통 정보는 외국인이 이용하기 어려운 수준이었습니다. 조직위원회는 이를 인정하고 홈페이지 개편과 일본어 서비스 추가를 약속했습니다.", links: [{ label: "MBC 외국어 서비스 점검", url: yeosuIslandExpoSources.languages }, { label: "개막 직전 목표 발표", url: yeosuIslandExpoSources.preopeningRevenue }] },
        ],
      },
      {
        heading: "300만 명과 사업수익 120억 원은 누가 책임집니까",
        paragraphs: [
          { text: "박람회 목표 관람객은 300만 명입니다. 9월 5일부터 11월 4일까지 61일 동안 매일 약 4만9천 명이 와야 합니다.", links: [{ label: "박람회 공식 개요", url: yeosuIslandExpoSources.overview }] },
          { text: "개막 첫날 관람객은 2만5,417명, 이튿날은 1만251명이었습니다. 첫 주말 합계는 3만5,668명이고, 셋째 날 5,778명을 더한 사흘간 누적 관람객은 4만1,446명이었습니다. 개막 사흘의 하루 평균은 약 1만3,800명입니다. 추석 연휴와 단체관람이 남아 있으므로 최종 결과는 폐막 뒤 확인해야 합니다. 다만 300만 명은 홍보용 구호가 아니라 예산과 수익계획의 토대였습니다.", links: [{ label: "개막 첫 주말 집계", url: yeosuIslandExpoSources.firstWeekend }, { label: "개막 사흘 누적 집계", url: yeosuIslandExpoSources.firstThreeDays }] },
          { text: "유료 관람객과 무료 관람객, 개인과 단체, 초청 인원과 행사 관계자, 주행사장과 부행사장의 중복 인원을 나눠 공개해야 합니다. 학교와 공공기관을 동원해 숫자를 채우고도 300만 명을 달성했다고 발표한다면 시민이 기대했던 흥행과는 다른 결과입니다." },
          { text: "713억 원 가운데 120억 원은 입장권과 후원, 임대료 등을 통한 사업수익입니다. 조직위원회가 9월 1일 프레스데이에서 밝힌 개막 직전 확보액은 약 44억 원이었습니다. 목표에 크게 못 미친 채 출발한 셈입니다. 부족한 돈을 추가 시비로 채울 것인지, 다른 사업비를 줄일 것인지 시민에게 먼저 밝혀야 합니다.", links: [{ label: "개막 직전 사업수익 발표", url: yeosuIslandExpoSources.preopeningRevenue }] },
          { text: "목표는 크게 세우고 결손은 시민 세금으로 메우는 구조라면 사업계획을 잘 세웠다고 할 수 없습니다. 책임지는 사람 없이 ‘지역을 위해 한 일’이라는 말만 남아서도 안 됩니다." },
        ],
      },
      {
        heading: "공익은 치적을 포장하는 간판이 아닙니다",
        paragraphs: [
          { text: "공익은 국가와 지방정부가 무슨 사업이든 밀어붙일 수 있게 해주는 말이 아닙니다. 정치인이 예산을 가져왔다고 자랑하는 데 쓰는 간판도 아닙니다. 시민의 삶을 낫게 하고 공동체에 남는 이익이 투입한 비용보다 클 때 공익이라는 이름을 붙일 수 있습니다." },
          { text: "사업 타당성과 계약 과정이 투명하게 공개되지 않는다면 시민은 결국 공익을 앞세운 업자와 개발업자의 배만 불린 행사가 아니었는지 의심하게 됩니다. 그 의심을 없애는 방법은 비판을 막는 것이 아니라 자료를 여는 것입니다." },
          { text: "섬 주민이 겪는 현실은 뱃길과 교통, 의료와 돌봄, 교육과 일자리입니다. 713억 원을 쓴 박람회가 이 문제를 얼마나 바꿨는지 답해야 합니다. 전시관과 공연, 조경과 홍보물만 남고 섬 주민의 삶이 달라지지 않는다면 섬을 위한 박람회가 아니라 박람회를 위해 섬을 빌린 것입니다." },
          { text: "전시관과 조형물 가운데 무엇을 철거하고 무엇을 남기는지, 남은 시설을 누가 운영하며 해마다 유지비가 얼마나 드는지도 공개해야 합니다. 행사는 61일 뒤 끝나지만 시설과 재정 부담은 그 뒤에도 남습니다." },
        ],
      },
    ],
    watchHeading: "이래서 공익감시가 필요합니다",
    watchIntro: "씨앗의 소리는 다음 자료를 계속 확인하겠습니다.",
    watchItems: [
      "248억 원에서 713억 원으로 늘어난 단계별 예산과 승인 과정",
      "확대된 사업비 465억 원에 대한 재검증과 타당성 자료",
      "배정예산 269억 원 운영대행 용역의 평가표, 컨소시엄 구성과 과업별 집행액",
      "원도급·하도급·재하도급 업체와 지역업체 계약 집중 여부",
      "계약 변경, 추가 지급, 과업 검수와 위약금 부과 내역",
      "홍보·관람객 유치비 102억 원의 계약별 성과",
      "유료·무료·초청·단체 관람객을 구분한 일일 집계",
      "사업수익 120억 원의 항목별 목표와 실제 수입",
      "수입 부족분을 보전하는 주체와 재원",
      "연계사업 77개의 필요성, 박람회와의 관계와 집행 결과",
      "행사 종료 뒤 시설별 철거·존치 계획과 연간 유지관리비",
      "박람회 이후 섬 주민의 교통·의료·생활 여건에 남은 변화",
    ],
    closing: [
      "행사가 성공하기를 바라는 마음과 행사를 감시하는 일은 충돌하지 않습니다. 지금 제대로 따져야 더 큰 실패와 낭비를 막을 수 있습니다.",
      "여수시와 조직위원회는 대행업체 뒤에 숨을 수 없습니다. 예산을 따왔다는 말로 결과를 대신할 수도 없습니다. 공익을 말한 만큼 시민 앞에 계약과 집행내역, 성과와 책임을 내놓아야 합니다.",
      "세금은 정치인의 치적을 위해 맡긴 돈이 아닙니다. 시민의 삶을 위해 맡긴 돈입니다.",
    ],
  },
  en: {
    subtitle: "An event may be outsourced. Responsibility cannot be.",
    highlights: [
      "An expo approved with a KRW 24.8 billion base budget has grown to KRW 71.3 billion in direct spending.",
      "The operations contract carried a KRW 26.9 billion allocation; a single consortium won it for about KRW 19.67 billion.",
      "The target is 3 million visitors over 61 days, but the first three days drew 41,446 visits.",
      "Budgets, contracts, revenue, post-expo use and administrative accountability should be disclosed now—not after the event.",
    ],
    intro: [
      { text: "An event approved at KRW 24.8 billion has grown to KRW 71.3 billion. It aims to attract 3 million visitors in 61 days, but the opening weekend drew 35,668 visits over two days. Spread across the full run, the target requires roughly 49,000 visits every day." },
      { text: "The aim of presenting Yeosu's islands and preparing their future is worthwhile. But invoking the public interest does not make every part of a project public-serving. Securing a budget and an international designation does not by itself amount to regional development. Citizens need to see how much was spent, who received it and what will remain for Yeosu and island residents." },
      { text: "Some citizens are already asking whether the expo could repeat the failure of the Saemangeum Jamboree. The two events are not identical. Yet when a grand cause and oversized targets lead to immense spending while basic operations and lines of responsibility falter, the comparison is understandable." },
    ],
    heroAlt: "Editorial illustration of a public budget ledger, balance scale and inspection lamp overlooking an island coastline",
    heroCaption: "The international event approved at KRW 24.8 billion has expanded to KRW 71.3 billion. Its budget, contracts, outcomes and long-term liabilities should be as public as its stated purpose.",
    bodyAlt: "Editorial illustration symbolizing event contractors and the public officials responsible for supervising their contracts",
    bodyCaption: "Specialists may run the event, but public authorities remain responsible for designing, supervising and verifying the contract.",
    infographicAlt: "Infographic showing project spending rising from KRW 24.8 billion to KRW 71.3 billion, a 3 million visitor target, a KRW 12 billion revenue target and a KRW 26.9 billion operations allocation awarded at KRW 19.67 billion",
    infographicCaption: "KRW 26.9 billion was the allocated budget for the operations contract, not the award price. The winning bid was about KRW 19.67 billion.",
    sections: [
      { heading: "Does a feasibility review based on KRW 24.8 billion explain a KRW 71.3 billion event?", paragraphs: [
        { text: "The Yeosu World Island Expo was approved as an international event in 2021 after a Ministry of Economy and Finance feasibility review. The base project budget was KRW 24.8 billion. With later additions, direct project spending rose through KRW 67.6 billion and KRW 70.3 billion to KRW 71.3 billion.", links: [{ label: "2021 approval", url: yeosuIslandExpoSources.approval }, { label: "Budget expansion", url: yeosuIslandExpoSources.budget }] },
        { text: "It would be wrong to say there was no feasibility review at all. But the figure tested at the time was KRW 24.8 billion. As the budget grew to KRW 71.3 billion, citizens still need to know who reassessed the necessity and likely return of the additional KRW 46.5 billion, and under what standard." },
        { text: "Officials cite added exhibition content, programs, a landmark, marketing, visitor recruitment and safety facilities. Explaining why the project grew is not enough. Once the scale became materially different from the approved plan, its fiscal burden, revenue prospects and post-event maintenance costs should have been tested again as a whole." },
        { text: "The current direct budget consists of KRW 6.4 billion from the central government, KRW 15.3 billion from South Jeolla Province, KRW 37.6 billion from Yeosu and KRW 12 billion in projected operating revenue. Public funds alone account for KRW 59.3 billion. The allocations include KRW 9 billion for exhibition content, KRW 6.5 billion for programs, KRW 6 billion for a landmark, KRW 5.2 billion for visitor and academic-event recruitment, KRW 5 billion for promotion and marketing, and KRW 4.7 billion for safety facilities.", links: [{ label: "Provincial budget record", url: yeosuIslandExpoSources.provincialBudget }, { label: "Budget breakdown", url: yeosuIslandExpoSources.budget }] },
        { text: "Winning a budget can become a politician's talking point. If it returns as local debt and maintenance obligations, it is a burden for citizens. The first question should have been whether Yeosu needed the project—not merely whether it could secure it." },
      ]},
      { heading: "Operations can be outsourced. Accountability cannot.", paragraphs: [
        { text: "The organizing committee allocated KRW 26.9 billion for a comprehensive operations contract covering venue management, detailed exhibition work and settlement. Only one consortium bid. The consortium led by MBC Plus won at about KRW 19.67 billion.", links: [{ label: "Tender and award record", url: yeosuIslandExpoSources.operationsTender }, { label: "Operations-contract report", url: yeosuIslandExpoSources.operationsReport }] },
        { text: "A large event may require specialist contractors. That does not reduce the responsibility of Yeosu City or the organizing committee. Public authorities set the targets and budget, wrote the tender, selected the supplier and must supervise and verify the result." },
        { text: "When an outage or another operational failure occurs, the authorities cannot simply say that a contractor ran the event. If attendance disappoints and the revenue plan develops a hole, that cannot be treated only as poor supplier performance. The contractor must deliver the contract; the awarding authority must design and oversee it." },
        { text: "The public record should include proposal-evaluation sheets and individual scores, the full consortium roster, subcontracting and sub-subcontracting, amendments and additional payments, deliverable inspections and final settlement. An event with a KRW 26.9 billion allocation cannot ask for trust while leaving the flow of contracts and spending opaque." },
      ]},
      { heading: "Securing public funds does not by itself develop Yeosu", paragraphs: [
        { text: "Large national grants and prestigious events are quickly labeled regional development. But national money is taxpayers' money too, and it draws provincial and city funds behind it. A bigger event also demands more local staff, administrative capacity, traffic management, environmental work and long-term maintenance." },
        { text: "Spending in the region is not automatically a regional economic benefit. Local-business participation matters. But if contracts repeatedly concentrate in a few hands, competition and supervision weaken, and fees outlast measurable results, regional development turns into vested interest." },
        { text: "Any balance sheet must include merchants who closed or lost money, residents who absorbed traffic disruption and citizens who will pay to maintain facilities after the crowds leave. Counting visitor spending while excluding those local costs predetermines the conclusion." },
      ]},
      { heading: "What did Korea learn from the Jamboree?", paragraphs: [
        { text: "The Saemangeum World Scout Jamboree became an international embarrassment through inadequate preparation and operational failure. In 2025, the Board of Audit and Inspection identified 40 illegal or improper matters, including weak preparation of facilities and basic services, perfunctory inspections, false reporting and procurement misconduct. It sought disciplinary action against five officials and requested investigations including suspected obstruction of bidding.", links: [{ label: "Audit findings", url: yeosuIslandExpoSources.jamboreeAudit }] },
        { text: "At the Jamboree, lawmakers questioned why one regional supplier obtained eight contracts worth roughly KRW 2.36 billion and raised the possibility of collusion; organizers denied favoritism. Separately, reports said the Fair Trade Commission investigated suspected bid-rigging among regional charter-bus companies. Whether unlawful conduct occurred still requires further investigation. The label ‘local business’ does not by itself prove that a contract was competitive, fairly priced or properly supervised.", links: [{ label: "Contract concentration claim and reply", url: yeosuIslandExpoSources.jamboreeContracts }, { label: "Charter-bus inquiry", url: yeosuIslandExpoSources.jamboreeBus }] },
        { text: "Only the Yeosu contract record can show whether this expo is repeating the Jamboree's path. That is why disclosure and scrutiny are needed now. Waiting for a post-event audit may come too late to protect public money and Yeosu's reputation." },
        { text: "Early operational warning signs have appeared. The expo was pursued from 2019 and approved internationally in 2021; it did not lack preparation time. Despite a trial run, the main-site restaurant area suffered at least two opening-day power interruptions as demand rose. Organizers said a temporary overload was repaired. A separate report that a merchant on Gaedo discarded ingredients and withdrew was disputed by Yeosu and the committee, which said the restaurant was run by a local women's association and was not an expo tenant.", links: [{ label: "Opening-day outage", url: yeosuIslandExpoSources.blackout }, { label: "Official rebuttal", url: yeosuIslandExpoSources.blackoutRebuttal }] },
        { text: "Before opening, reporters also found that foreign-language information did not match the ‘world expo’ label. The committee cited a foreign-visitor goal of 100,000 in March and 90,000 immediately before opening, yet exhibition and transport information remained difficult for overseas visitors to use. It acknowledged the weakness and promised a website overhaul and Japanese-language service.", links: [{ label: "Foreign-language service review", url: yeosuIslandExpoSources.languages }, { label: "Pre-opening target", url: yeosuIslandExpoSources.preopeningRevenue }] },
      ]},
      { heading: "Who owns the targets of 3 million visitors and KRW 12 billion in revenue?", paragraphs: [
        { text: "The expo targets 3 million visitors between September 5 and November 4—61 days requiring roughly 49,000 visits every day.", links: [{ label: "Official expo overview", url: yeosuIslandExpoSources.overview }] },
        { text: "Attendance was 25,417 on opening day and 10,251 the next day, for a first-weekend total of 35,668. The third day added 5,778, bringing the three-day cumulative count to 41,446—about 13,800 per day. Holiday and group visits remain, so the final result must wait until closing. But 3 million was not merely a slogan; it underpinned the budget and revenue plan.", links: [{ label: "First-weekend count", url: yeosuIslandExpoSources.firstWeekend }, { label: "Three-day count", url: yeosuIslandExpoSources.firstThreeDays }] },
        { text: "Daily reporting should separate paid and free admission, individuals and groups, invitees and workers, and duplicate visits across main and satellite venues. A total filled through organized attendance by schools and public bodies would not be the public success citizens were promised." },
        { text: "Of the KRW 71.3 billion budget, KRW 12 billion is expected from tickets, sponsorship and rent. At a September 1 press day, organizers said about KRW 4.4 billion had been secured shortly before opening. The public deserves to know whether any gap will be filled by additional city funds or by cutting other spending.", links: [{ label: "Pre-opening revenue statement", url: yeosuIslandExpoSources.preopeningRevenue }] },
        { text: "A plan cannot claim success if it sets the target high and leaves taxpayers to absorb the shortfall. Nor should accountability disappear behind the phrase ‘for the region.’" },
      ]},
      { heading: "Public interest is not a signboard for political credit", paragraphs: [
        { text: "Public interest is not a license for national or local government to push through any project. It is not a signboard for politicians to display the budgets they secured. The term earns its meaning only when citizens' lives improve and the lasting community benefit exceeds the cost." },
        { text: "If feasibility and procurement remain opaque, citizens will suspect that public-interest language merely enriched contractors and developers. The answer is not to suppress criticism but to open the records." },
        { text: "Island residents live with ferry access, transport, health care, care services, education and jobs. A KRW 71.3 billion expo must show how it changed those conditions. If only halls, performances, landscaping and promotional material remain, the expo did not serve the islands; it borrowed them." },
        { text: "Authorities should disclose which halls and structures will be removed or retained, who will operate what remains and the annual maintenance bill. The event ends after 61 days. Its fiscal and physical liabilities may not." },
      ]},
    ],
    watchHeading: "Why public-interest monitoring is necessary",
    watchIntro: "SEED VOICE will continue to seek the following records:",
    watchItems: [
      "The approval and step-by-step budget path from KRW 24.8 billion to KRW 71.3 billion",
      "Any reassessment or feasibility analysis covering the additional KRW 46.5 billion",
      "The evaluation sheets, full consortium roster and task-level spending for the KRW 26.9 billion operations allocation",
      "Prime contractors, subcontractors, sub-subcontractors and any concentration among regional suppliers",
      "Contract amendments, additional payments, inspections and penalties",
      "Contract-level results for KRW 10.2 billion in promotion and visitor recruitment",
      "Daily counts separating paid, free, invited and group visitors",
      "Target and actual revenue by category within the KRW 12 billion plan",
      "The source and responsible institution for covering any revenue gap",
      "The necessity, expo connection and spending results of 77 linked projects",
      "Post-event removal and retention plans and annual maintenance costs by facility",
      "Lasting changes in transport, health care and daily living conditions for island residents",
    ],
    closing: [
      "Wanting the event to succeed does not conflict with scrutinizing it. Careful scrutiny now is how larger failure and waste can be prevented.",
      "Yeosu City and the organizing committee cannot hide behind contractors. Winning funds cannot substitute for results. Having invoked the public interest, they owe citizens the contracts, expenditures, outcomes and lines of responsibility.",
      "Taxes are not entrusted for a politician's achievements. They are entrusted for citizens' lives.",
    ],
  },
};
