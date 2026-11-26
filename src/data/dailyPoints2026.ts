import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

export const pointsNovember: Briefing = {
  "slug": "card-points-cash-local-currency-2026",
  "date": "2026-11-24",
  "readMinutes": 3,
  "category": "시민브리핑",
  "title": "카드포인트, 지역화폐로 바꾸기 전에 현금화도 살펴보세요",
  "subtitle": "지역화폐 전환은 2027년 5월 개통 계획…이미 가능한 계좌입금과 조건 비교해야",
  "summary": "카드에 쌓인 포인트를 내년부터 지역화폐로 바꿀 수 있게 될 전망입니다. 정부는 카드포인트 지역화폐 전환 서비스를 2027년 5월 개통할 계획이라고 11월 13일 발표했습니다.",
  "sections": [
    {
      "title": "언제부터 어디에서 쓸 수 있나요",
      "paragraphs": [
        "계획대로라면 이용자는 금융결제원의 어카운트인포나 지역화폐 앱에서 포인트를 확인하고 원하는 금액의 전환을 신청할 수 있습니다. 정부는 신청 다음 날부터 지역화폐를 쓸 수 있도록 준비하고 있습니다. 아직 개통 전인 계획입니다. [1]",
        "정부는 누적 카드포인트 잔액을 2조 1천억 원으로 제시했습니다. 지역 상점에서 포인트를 활용할 길을 넓히겠다는 취지입니다. 다만 이 숫자 전체가 시민이 당장 지역화폐로 전환할 수 있는 금액이라는 뜻은 아닙니다. [1][3]"
      ]
    },
    {
      "title": "지금 계좌로 받으려면",
      "paragraphs": [
        "금융위원회에 따르면 어카운트인포 앱과 카드포인트 통합조회·계좌입금 서비스에서 현금화할 포인트를 조회하고 계좌로 옮길 수 있습니다. [2]",
        "포인트 종류에 따라 조회액과 실제 신청 가능액이 다를 수 있습니다. 신청 화면에서 금액을 확인한 뒤 지금 받을지, 지역화폐 전환 조건이 나온 뒤 결정할지 선택하세요. [2][4]",
        "지역화폐 전환 시 적용될 세부 조건과 추가 혜택은 이번 발표만으로 확인되지 않았습니다. KTX 마일리지와 탄소중립포인트 등 다른 포인트의 지역화폐 전환도 관계기관과 협의할 계획으로, 시작일이 확정된 것은 아닙니다. [1]"
      ]
    }
  ],
  "watchPoints": [],
  "sources": [
    {
      "label": "국무조정실 · 미사용 포인트 지역화폐 전환 추진방안 · 2026.11.13",
      "url": "https://www.opm.go.kr/opm/news/press-release.do?articleNo=164147&mode=view"
    },
    {
      "label": "금융위원회 · 카드포인트 통합조회·계좌이체 · 2021.1월",
      "url": "https://www.fsc.go.kr/po010105/75079"
    },
    {
      "label": "연합뉴스 · 카드포인트 지역화폐 전환 계획 · 2026.11.13",
      "url": "https://www.yna.co.kr/view/AKR20261113067651001"
    },
    {
      "label": "여신금융협회 · 카드포인트 통합조회·계좌입금",
      "url": "https://www.cardpoint.or.kr/"
    }
  ],
  "author": "씨앗의 소리",
  "content": [
    "오늘 쓸 돈이 필요하다면 먼저 카드포인트 중 얼마를 계좌로 받을 수 있는지 확인해 보세요. 현금화할 수 있는 포인트는 지역화폐 서비스 개통을 기다릴 필요가 없습니다. [2][4]"
  ],
  "images": [
    {
      "src": "/images/november-24/points-0.webp",
      "alt": "휴대전화와 통장, 동네 상점",
      "caption": "휴대전화와 통장, 동네 상점",
      "credit": "AI 이미지",
      "sourceUrl": ""
    },
    {
      "src": "/images/november-24/points-1.webp",
      "alt": "동네 상점에서 카드를 든 손",
      "caption": "동네 상점에서 카드를 든 손",
      "credit": "AI 이미지",
      "sourceUrl": "",
      "afterSection": 1
    },
    {
      "src": "/images/november-24/points-ko.svg",
      "alt": "현재 가능한 계좌입금과 2027년 5월 예정인 지역화폐 전환",
      "caption": "현재 가능한 계좌입금과 2027년 5월 예정인 지역화폐 전환",
      "credit": "씨앗의 소리 도표",
      "sourceUrl": "",
      "contain": true,
      "afterSection": 0
    }
  ],
  "placeBodyImagesBySection": true,
  "closing": [
    "지역상권을 돕는 정책이라도 시민에게 필요한 것은 선택지에 대한 설명입니다. 현금화와 지역화폐 전환을 얼마나 알기 쉽게 비교할 수 있는지, 전환 조건과 사용 제한이 어떻게 안내되는지 살펴보겠습니다."
  ],
  "sourceNote": "카드포인트 지역화폐 전환은 정부의 향후 계획이고, 기존 포인트 계좌입금은 별도의 현행 서비스다. 지역경제 효과는 정부의 기대이며 아직 측정된 성과가 아니다."
};

export const pointsNovemberTranslation: BriefingTranslation = {
  "category": "Civic briefing",
  "title": "Cash or local currency? Two ways to use Korean card points",
  "subtitle": "Bank deposits are available today. A separate local-currency option is planned for May 2027.",
  "summary": "On November 13, the government announced plans to let cardholders convert reward points into local currency from May 2027. These local payment schemes can be used at participating merchants.",
  "sections": [
    {
      "title": "How the planned service would work",
      "paragraphs": [
        "Under the plan, cardholders would check their balance in Account Info or a local-currency app, select the amount to convert and spend it from the following day. [1]",
        "The government puts accumulated card points at 2.1 trillion won. It hopes to encourage spending in local shops. How much actually reaches those merchants will depend on cardholders’ choices. [1][3]"
      ]
    },
    {
      "title": "Checking what you can withdraw today",
      "paragraphs": [
        "The Financial Services Commission says eligible points can already be deposited into a bank account through Account Info or the card industry’s integrated points service. Check the amount eligible for deposit on the application screen before choosing how much to transfer. [2][4]",
        "You can withdraw eligible points now or compare the terms when the new option opens. The announcement gives no bonus rate. Conversion of KTX rail miles and carbon-neutrality points is still subject to talks, with no launch date announced. [1]"
      ]
    }
  ],
  "watchPoints": [],
  "sourceLabels": [
    "Office for Government Policy Coordination · Conversion proposal · Nov. 13, 2026",
    "Financial Services Commission · Points transfers · Jan. 2021",
    "Yonhap · Local-currency plan · Nov. 13, 2026",
    "Credit Finance Association · Card points and account deposits"
  ],
  "author": "SEED Voice",
  "content": [
    "If you need the money now, check how many of your card points qualify for a bank deposit. You can withdraw eligible points before the local-currency service opens. [2][4]"
  ],
  "images": [
    {
      "src": "/images/november-24/points-0.webp",
      "alt": "A phone, a bankbook and a neighborhood shop",
      "caption": "A phone, a bankbook and a neighborhood shop",
      "credit": "AI image"
    },
    {
      "src": "/images/november-24/points-1.webp",
      "alt": "A shopper holding a payment card",
      "caption": "A shopper holding a payment card",
      "credit": "AI image"
    },
    {
      "src": "/images/november-24/points-en.svg",
      "alt": "Available bank deposits and planned local-currency conversion",
      "caption": "Available bank deposits and planned local-currency conversion",
      "credit": "SEED Voice graphic"
    }
  ],
  "closing": [
    "Cardholders need enough information to choose where to spend their points. At launch, look for a clear comparison of cash and local-currency options, including conversion terms and where the balance can be spent."
  ],
  "sourceNote": "Local-currency conversion is planned. Bank deposits are available today. The government’s expected impact on local shops has yet to be measured."
};
