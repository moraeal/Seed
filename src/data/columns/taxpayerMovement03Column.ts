import type { SeedColumn } from "../columns";

export const taxpayerMovement03Column: SeedColumn = {
  "slug": "taxpayer-movement-03-britain-spending-watch",
  "issue": 65,
  "title": "세금은 그대로인데, 신고할 일이 늘었다",
  "subtitle": "한국형 세금감시운동 ③｜미국 ATR에서 배우는 생활 속 세금감시",
  "date": "2026-10-09",
  "author": "작은씨앗",
  "topicIds": [
    "tax-finance"
  ],
  "readMinutes": 9,
  "summary": "ATR은 세금을 낮고 쉽게 만들자는 미국의 시민단체다. 온라인 거래의 세금 서류 부담을 알리고, 여러 단체와 함께 법 개정을 요구했다. 보고 기준이 이전 수준으로 돌아간 사례를 통해 한국에서도 시민의 신고 시간과 비용을 줄이는 세금감시 운동을 제안한다.",
  "heroImage": {
    "src": "images/columns/tax-series-03/hero.webp",
    "alt": "시민의 돋보기 빛이 닫힌 정부 회계장부와 세금의 흐름을 드러내는 상징적 장면",
    "caption": "세금 고지서 밖에서도 시민의 시간과 비용은 나간다. 신고 의무가 바뀌는 과정까지 살펴야 한다.",
    "credit": "AI 이미지",
    "sourceUrl": ""
  },
  "inlineImage": {
    "src": "images/columns/real-estate-supervisor/family-home-papers.webp",
    "alt": "식탁에서 서류를 펼쳐놓고 가계의 현금 부담을 계산하는 부부",
    "caption": "시민이 자기 살림을 계산하듯, 세금을 쓴 정부의 장부도 확인할 수 있어야 한다.",
    "credit": "AI 이미지",
    "sourceUrl": ""
  },
  "displayInlineImage": false,
  "additionalImages": [
    {
      "afterSection": 3,
      "src": "images/columns/tax-series-03/reporting-scope-ko.svg",
      "alt": "제3자 결제업체의 1099-K 의무 보고 기준: 대금 2만 달러 초과와 거래 200건 초과를 모두 충족. 소득세 면제 기준은 아님",
      "caption": "IRS의 연방 보고 기준. 직접 카드 결제에는 이 기준을 적용하지 않는다. 기준 이하에서도 서식이 발급될 수 있다.",
      "credit": "씨앗의 소리 · IRS 자료",
      "sourceUrl": "https://www.irs.gov/businesses/understanding-your-form-1099-k"
    },
    {
      "src": "images/columns/real-estate-supervisor/family-home-papers.webp",
      "alt": "식탁에서 서류를 펼쳐놓고 가계의 현금 부담을 계산하는 부부",
      "caption": "서류를 읽고 정보를 모으는 시간도 시민의 살림에서 나가는 비용이다.",
      "credit": "AI 이미지",
      "sourceUrl": "",
      "afterSection": 6
    }
  ],
  "sections": [
    {
      "title": "한국형 세금감시운동 ③｜미국 ATR에서 배우는 생활 속 세금감시",
      "paragraphs": [
        "쓰던 물건을 팔았는데 세금 서류가 날아온다면 어떨까. 돈을 벌려고 장사를 한 것도 아니다. 집을 정리하면서 오래된 가구나 악기를 팔았을 뿐이다. 서류를 받은 사람은 걱정부터 하게 된다. “이 돈에도 세금을 내야 하나? 예전에 산 영수증을 찾아야 하나?”",
        "미국에서는 온라인 거래에 관한 세금 보고 기준을 크게 낮추면서 이런 부담을 둘러싼 논쟁이 벌어졌다. 세율을 올린 사건은 아니었다. 거래내역을 국세청에 보고하는 범위가 넓어진 사건이었다.",
        "미국의 세금운동 단체 ATR은 이 문제를 비판하고, 이전 기준으로 되돌리는 법 개정을 요구했다. 세금감시의 범위를 ‘얼마를 내는가’에서 ‘세금 때문에 얼마나 번거로운 일을 해야 하는가’로 넓힌 사례다."
      ]
    },
    {
      "title": "ATR은 세금을 더 낮고 쉽게 만들자는 시민단체다",
      "paragraphs": [
        "ATR은 Americans for Tax Reform의 약자다. 우리말로 풀면 ‘세금개혁을 위한 미국인들’이다. 미국 정부기관이 아니라, 세금을 낮추고 세금제도를 단순하게 만들자는 민간단체다.",
        "1985년 설립됐으며, 정치인에게 개인과 기업의 소득세를 늘리는 데 반대하겠다는 서면 약속을 받는 활동으로 알려져 있다. 세금을 더 거두려는 법안과 정책을 살피고, 다른 단체들과 함께 의회에 의견을 전달하는 일도 한다. 보수 성향의 납세자 권익단체로 이해하면 된다. [1](https://atr.org/about/)",
        "이번에 살펴볼 활동은 온라인 거래의 세금 서류를 줄이려는 운동이다. 한국의 세금감시 운동에도 참고할 만하다. 시민이 실제로 겪는 불편을 찾아내고, 바꿔야 할 규칙을 정확하게 지목했기 때문이다."
      ]
    },
    {
      "title": "세금 고지서가 아닌데도 시민은 불안했다",
      "paragraphs": [
        "미국에는 온라인 거래나 결제서비스를 통해 받은 돈을 정리해 국세청에 알리는 서류가 있다. 이름은 ‘1099-K’다. 번호를 외울 필요는 없다. ‘온라인 거래대금 내역서’라고 생각하면 된다.",
        "이 서류는 거래서비스 업체가 작성해 미국 국세청과 돈을 받은 사람에게 보낸다. “이 사람이 우리 서비스를 통해 물건이나 서비스를 팔고 이만큼 받았습니다”라는 자료다. 시민이 직접 이 서류를 만들어 제출하는 구조는 아니다. [2](https://www.irs.gov/businesses/understanding-your-form-1099-k)",
        "서류에 적힌 금액이 전부 이익인 것도 아니다. 가령 미국에서 개인적으로 쓰던 물건을 1,000달러에 샀다가 700달러에 팔았다면, 받은 돈은 700달러지만 이익을 낸 거래는 아니다. 미국 국세청도 개인용 물건을 산 가격보다 싸게 판 경우에는 그 판매로 과세되는 이익이 발생하지 않는다고 설명한다. [3](https://www.irs.gov/newsroom/form-1099-k-faqs-what-to-do-if-you-receive-a-form-1099-k)",
        "그런 거래까지 세금 관련 서류에 잡히면 시민에게 확인할 일이 생긴다. 무엇을 팔았는지, 얼마에 샀는지, 실제 이익이 있었는지 살펴야 한다. 잘못 기록됐다면 업체에 수정을 요청해야 한다.",
        "세금을 더 내지 않더라도, 세금을 설명하는 데 시간과 돈이 들 수 있다.",
        "실제 생활 사례도 있었다. 중고 악기 거래업체 리버브는 이용자들의 사연을 모았다. 한 이용자는 새 악기를 써보기 위해 기존 기타를 팔곤 하는데, 이익을 내려는 거래가 아니어도 예전 영수증을 찾고 손해 보고 팔았다는 사실을 설명해야 하는 일이 큰 부담이라고 호소했다. 이 사례 수집은 ATR과 별도로 거래업체들이 전개한 활동이었다. [4](https://reverb.com/page/1099advocacy)"
      ]
    },
    {
      "title": "무엇이 바뀌었기에 문제가 커졌나",
      "paragraphs": [
        "쟁점은 업체가 거래내역을 국세청에 의무적으로 보고해야 하는 기준이었다.",
        "기존에는 해당 온라인 거래서비스를 통해 한 해 받은 거래대금이 2만 달러를 넘고, 거래도 200건을 넘을 때 보고 대상이 됐다. 2021년 법 개정은 이를 연간 거래대금 600달러 초과로 낮추고, 거래 건수 조건을 없앴다. 큰 규모의 거래를 하던 사람 중심의 보고가 소액 거래자에게까지 넓어질 수 있게 된 것이다. [5](https://www.irs.gov/pub/taxpros/fs-2025-08.pdf)",
        "이는 ‘600달러를 받으면 새 세금이 붙는다’는 뜻이 아니다. 세금을 매기는 기준과 거래내역을 보고하는 기준은 서로 다르다.",
        "보고를 늘리려는 취지는 거래자료를 확보해 소득 누락을 줄이자는 것이었다. 시민단체와 거래업체들이 제기한 문제는 그 과정에서 소액 거래자에게 생기는 서류 부담과 혼란이었다. 미국 국세청도 납세자와 세무전문가, 결제업체의 의견을 받아 시행을 미루고 단계적으로 적용하는 방안을 마련했다. [6](https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000) [7](https://www.irs.gov/newsroom/irs-revises-and-updates-frequently-asked-questions-about-form-1099-k)"
      ]
    },
    {
      "title": "ATR은 불편을 알리는 데서 법 개정 요구로 나아갔다",
      "paragraphs": [
        "ATR의 활동에서 눈여겨볼 점은 불만을 구체적인 입법 요구로 연결했다는 것이다.",
        "먼저, 온라인 거래를 하는 평범한 사람에게 세금 서류 부담이 커질 수 있다는 점을 알렸다. 어려운 법률 조항을 결제앱 이용자와 소액 판매자가 겪는 문제로 설명했다.",
        "다음으로, 다른 단체들과 요구를 모았다. 2023년 9월 ATR은 보수·자유시장 성향 단체 30곳 이상이 참여하는 공동서한을 이끌었다. 미국 하원에 세금 부담을 줄이는 법안을 처리해 달라고 요구했고, 그 법안에 포함된 내용 중 하나가 낮아진 온라인 거래 보고 기준을 되돌리는 것이었다. 여러 단체가 같은 규칙을 지목하고, 같은 법 개정을 요구한 것이다. [8](https://atr.org/letter/conservative-groups-urge-house-vote-on-american-families-and-jobs-act/)",
        "또한 법안이 실제로 움직이는지 계속 알렸다. 2024년 9월에는 기존 보고 기준을 복원하려는 법안이 하원의 세금 담당 위원회를 통과했다는 소식을 전하면서, 의회가 법안을 처리해야 한다고 요구했다. [9](https://atr.org/ways-and-means-passes-repeal-of-600-reporting-threshold-for-venmo-and-paypal-users/)",
        "이 활동의 흐름은 이해하기 어렵지 않다. 생활 속 불편을 설명하고, 함께 요구할 단체를 모으고, 바꿔야 할 법을 지목하고, 의회가 처리하는지 계속 확인했다."
      ]
    },
    {
      "title": "성과는 보고 기준이 이전 수준으로 돌아간 것이다",
      "paragraphs": [
        "2025년 7월 4일 미국에서 새로운 법이 서명되면서, 낮아졌던 보고 기준은 이전 수준으로 복원됐다. 미국 국세청은 온라인 거래서비스의 의무 보고 기준이 다시 연간 거래대금 2만 달러 초과이면서 거래 200건 초과라고 확인했다. [10](https://atr.org/big-beautiful-bill-repeals-irs-1099-k-venmo-tax/) [6](https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000)",
        "이 성과를 ATR 혼자 이뤘다고 설명할 수는 없다. 법안을 추진한 의원들, 다른 납세자 단체, 거래업체들도 활동했다. ATR은 그 과정에서 공동 요구를 조직하고 법 개정을 촉구한 참여자였다.",
        "확인되는 결과는 분명하다. 소액 거래까지 보고하도록 넓히려던 규칙이 법 개정으로 되돌려졌다. 보고 기준을 낮추는 조치는 시행이 여러 차례 미뤄졌고, 단계적으로 적용되다가 철회됐다. 600달러 기준이 처음부터 전면 시행된 것처럼 이해해서는 흐름을 잘못 짚게 된다. [11](https://content.govdelivery.com/accounts/USIRS/bulletins/3c40c9c) [6](https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000)",
        "보고 기준이 돌아갔다고 원래 내야 할 소득세가 없어지는 것은 아니다. 기준 아래에서도 서류를 받을 수 있다. 이번 변화는 온라인 거래서비스의 의무 보고 범위를 줄인 것이다. [2](https://www.irs.gov/businesses/understanding-your-form-1099-k)"
      ]
    },
    {
      "title": "한국에서는 ‘세금 때문에 드는 수고’부터 모아보자",
      "paragraphs": [
        "한국에서 미국의 금액 기준을 그대로 따라 할 필요는 없다. 두 나라의 세금제도와 거래자료 수집 방식은 다르다. 우리가 배울 것은 시민의 불편을 규칙의 개선으로 연결하는 방법이다.",
        "한국의 세금감시 운동도 시민이 이해하고 참여할 수 있는 일부터 시작할 수 있다. 가령 이런 경험을 모으는 것이다.",
        "“이미 제출한 자료를 다시 내라고 했다.”",
        "“어떤 항목에 적어야 할지 몰라 여러 번 문의했다.”",
        "“안내가 서로 달라 신고를 다시 했다.”",
        "“세금은 얼마 안 되는데 처리하는 데 반나절이 걸렸다.”",
        "이것들은 조사할 사례의 예시다. 사례를 받으면 어떤 세금의 어떤 절차인지 확인하고, 실제 안내문과 제출자료를 대조해야 한다. 필요한 확인 절차인지, 같은 정보를 반복해서 받는지, 안내를 고치면 해결되는지 살펴야 한다.",
        "씨앗이 시작할 수 있는 첫 활동은 ‘세금 신고로 잃어버린 시간’ 사례 수집이다. 시민이 겪은 일, 추가로 낸 서류, 걸린 시간, 들어간 비용을 모으면 된다. 소상공인 단체와 세무전문가가 함께 검토하면 반복되는 문제와 바꿔야 할 규칙을 더 정확하게 찾을 수 있다.",
        "그다음 요구는 좁고 분명해야 한다. “세금제도를 개선하라”는 말보다 “같은 자료를 두 번 제출하게 하는 절차를 없애자”는 요구가 이해하기 쉽고, 바뀌었는지도 확인하기 쉽다.",
        "국세청 안내를 고쳐 해결할 일이라면 안내 개선을 요구하고, 법을 바꿔야 할 일이라면 국회에 개정을 요구하면 된다. 담당 기관과 의원의 답변을 공개하고, 몇 달 뒤 실제로 절차가 줄었는지 확인하는 것까지 이어가야 한다."
      ]
    },
    {
      "title": "세금감시의 성과는 시민의 부담이 줄었는가로 판단하자",
      "paragraphs": [
        "ATR의 사례는 세금운동이 생활 속 작은 규칙까지 다룰 수 있다는 것을 보여준다. “세금이 너무 많다”는 주장에 더해, 시민이 어떤 서류 때문에 얼마나 시간을 쓰는지 설명했다. 그 부담을 줄이기 위해 바꿔야 할 규칙을 지목하고 법 개정을 요구했다.",
        "한국형 세금감시 운동도 시민의 지갑과 시간을 함께 지켜야 한다. 증세를 막고 새는 세금을 살피는 활동에, 불필요한 신고와 자료 제출을 줄이는 활동을 더하자는 것이다.",
        "성과를 판단할 기준도 생활 속에 있다. 제출할 서류가 줄었는가. 신고에 걸리는 시간이 짧아졌는가. 시민이 이해할 수 있게 안내가 바뀌었는가.",
        "세율이 그대로라는 이유만으로 시민의 부담까지 그대로인 것은 아니다. 세금감시는 시민이 치르는 수고까지 살펴야 한다."
      ]
    }
  ],
  "sourceNote": "미국 ATR의 활동과 IRS의 제도 설명을 대조했습니다. 리버브 이용자의 사연은 거래업체가 별도로 수집한 사례입니다. 개인 물품 매각 계산과 한국의 신고 불편 문장은 설명 및 조사 제안을 위한 예시입니다.",
  "sources": [
    {
      "label": "[1] ATR — 단체 소개",
      "url": "https://atr.org/about/"
    },
    {
      "label": "[2] IRS — 1099-K 대상·결제 방식별 기준",
      "url": "https://www.irs.gov/businesses/understanding-your-form-1099-k"
    },
    {
      "label": "[3] IRS — 개인 물품 매각과 1099-K 처리 안내",
      "url": "https://www.irs.gov/newsroom/form-1099-k-faqs-what-to-do-if-you-receive-a-form-1099-k"
    },
    {
      "label": "[4] Reverb — 중고 악기 판매자의 사례 수집과 입법 요구",
      "url": "https://reverb.com/page/1099advocacy"
    },
    {
      "label": "[5] IRS — 1099-K FAQ 개정, 2025.10.23",
      "url": "https://www.irs.gov/pub/taxpros/fs-2025-08.pdf"
    },
    {
      "label": "[6] IRS — 1099-K 보고 기준 복원 안내, 2025.10.23",
      "url": "https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000"
    },
    {
      "label": "[7] IRS — 납세자 의견에 따른 시행 유예 설명, 2024.2.6",
      "url": "https://www.irs.gov/newsroom/irs-revises-and-updates-frequently-asked-questions-about-form-1099-k"
    },
    {
      "label": "[8] ATR — 30곳 이상 단체의 공동 입법 요구, 2023.9.11",
      "url": "https://atr.org/letter/conservative-groups-urge-house-vote-on-american-families-and-jobs-act/"
    },
    {
      "label": "[9] ATR — 보고 기준 복원 법안의 위원회 통과와 처리 촉구, 2024.9.12",
      "url": "https://atr.org/ways-and-means-passes-repeal-of-600-reporting-threshold-for-venmo-and-paypal-users/"
    },
    {
      "label": "[10] ATR — 2025년 법 개정 평가, 2025.7.8",
      "url": "https://atr.org/big-beautiful-bill-repeals-irs-1099-k-venmo-tax/"
    },
    {
      "label": "[11] IRS — 당시 단계적 시행계획, 2024.11.26",
      "url": "https://content.govdelivery.com/accounts/USIRS/bulletins/3c40c9c"
    }
  ]
};
