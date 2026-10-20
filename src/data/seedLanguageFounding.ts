import type { SeedLanguageArticle } from "./seedLanguageBase";
const root="images/seed-language/founding-state-1948-2026/";
const sources=[
{label:"Wikimedia Commons / 미 육군 통신대 — 1948년 8월 15일 서울 도심 정부 수립 축하 기록사진",url:"https://commons.wikimedia.org/wiki/File:1948_downtown_Seoul,_Republic_of_Korea_(now_Sejong-daero)_on_15_August_with_crowds_celebrating_inauguration_of_new_Korean_government.jpg"},
{label:"Wikimedia Commons — 1948년 대한민국 정부 수립 국민축하식 컬러 보정 기록사진",url:"https://commons.wikimedia.org/wiki/File:Ceremony_inaugurating_the_government_of_the_Republic_of_Korea_(colored).jpg"},
{label:"국가법령정보센터 — 대한민국 제헌헌법 (1948.7.17.)",url:"https://www.law.go.kr/lsInfoP.do?lsiSeq=53081"},
{label:"국사편찬위원회 — 유엔총회 결의 제195(III)호 (1948.12.12.)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"},
{label:"국사편찬위원회 — 유엔 소총회 남한 선거 결의 (1948.2.26.)",url:"https://contents.history.go.kr/front/hm/print.do?levelId=hm_145_0030"},
{label:"미국 국무부 사료 — 1948년 한국 총선거 관련 문서",url:"https://history.state.gov/historicaldocuments/frus1948v06/d767"},
{label:"국사편찬위원회 — 대한민국 역사 자료 (정부 수립과 국가 승인)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"}
];
export const foundingArticleKo:SeedLanguageArticle={
slug:"founding-nation-sovereignty-republic-1948-2026",term:"건국",date:"2026-10-20",readMinutes:11,newsletterEligible:false,
title:"건국(建國) — 나라가 있다는 것과 나라를 세웠다는 것은 다르다",
subtitle:"조선왕조에서 대한민국으로, 우리는 언제 국민이 주인인 나라를 갖게 되었는가?",
summary:"민족의 존재와 국가의 성립은 다릅니다. 대한민국은 독립운동의 정통성을 계승하면서 1948년 실효적 국가제도를 마련했습니다. 조선왕조와 구별되는 국민주권의 의미를 묻습니다.",
keyPoints:["민족의 역사, 독립 선언, 실제 국가의 성립과 국제적 승인은 구별됩니다.","1919년 임시정부의 공화주의적 이상과 1948년 실효적 국가 수립은 함께 설명할 수 있습니다.","건국의 의미는 특정 지도자에 대한 찬반보다 국가의 주인이 누구인가에서 드러납니다."],
heroImage:{src:"https://commons.wikimedia.org/wiki/Special:FilePath/1948%20downtown%20Seoul%2C%20Republic%20of%20Korea%20(now%20Sejong-daero)%20on%2015%20August%20with%20crowds%20celebrating%20inauguration%20of%20new%20Korean%20government.jpg?width=1400",alt:"1948년 8월 15일 서울 세종대로에서 대한민국 정부 수립을 축하하는 인파의 실제 기록사진",caption:"1948년 8월 15일, 대한민국 정부 수립 기념행사에 모인 서울 시민들.",credit:"미 육군 통신대 촬영 · 국사편찬위원회 소장 · Wikimedia Commons · 미국 연방정부 저작물"},
inlineImage:{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Ceremony%20inaugurating%20the%20government%20of%20the%20Republic%20of%20Korea%20(colored).jpg?width=1200",alt:"1948년 8월 15일 대한민국 정부 수립 국민축하식의 기록사진",caption:"1948년 대한민국 정부 수립 국민축하식. 독립운동의 역사적 이상과 국가기관의 현실적 출범은 서로 구별되는 사건입니다.",credit:"대한민국 정부 수립 국민축하식 기록사진 · Wikimedia Commons"},inlineImageAfterSection:3,
additionalImages:[{src:root+"timeline-ko.png",alt:"1910년 국권 상실, 1919년 임시정부, 1948년 헌법과 정부 및 유엔 결의를 순서대로 표현한 연표",caption:"국권 상실, 공화국의 선언, 헌정정부의 수립과 국제적 지위의 형성은 각각 구분해 읽을 사건입니다.",credit:"씨앗의 소리 편집 그래픽",afterSection:2}],
leadParagraphs:[],
sections:[
  {
    "title": "수천만 명의 민족이 있는데 나라는 없다",
    "paragraphs": [
      "세상에는 3천만 명이 넘는 사람들이 하나의 민족적 정체성을 가지고 살아가면서도 자기 이름으로 된 독립국가를 갖지 못한 경우가 있다.",
      "중동의 쿠르드족 이야기다.",
      "쿠르드족은 튀르키예, 이라크, 이란, 시리아 등 여러 나라에 흩어져 살고 있다. 고유한 언어가 있고 문화와 전통이 있으며 오랜 역사를 가지고 있다. 독립국가를 세우려는 노력도 계속해 왔다.",
      "그러나 오늘날 국제사회에는 쿠르드족 전체를 대표하는 독립 주권국가가 없다. 이라크에는 쿠르드 자치지역이 있지만 독립국가는 아니다.",
      "이상하지 않은가?",
      "수천만 명의 국민이 될 사람들이 있고, 오래된 역사와 민족적 정체성이 있고, 자신들의 나라를 갖겠다는 의지도 있는데 왜 나라가 없는 것일까?",
      "여기에서 중요한 질문이 하나 나온다.",
      "**민족이 존재한다는 것과 국가가 존재한다는 것은 같은 일인가?**",
      "그렇지 않다.",
      "그리고 이 질문은 우리가 대한민국의 건국을 이해하는 데 중요한 출발점이 된다."
    ]
  },
  {
    "title": "건국이란 무엇인가?",
    "paragraphs": [
      "건국(建國)은 글자 그대로 나라를 세운다는 뜻이다.",
      "그런데 나라를 세운다는 것은 국기를 만들고 국호를 정하고 독립을 선언하는 것만으로 완성되지 않는다.",
      "국가가 성립하려면 일반적으로 일정한 영토와 주민, 실제로 통치할 수 있는 정부, 다른 국가와 독립적으로 관계를 맺을 능력 등이 중요하다.",
      "국제사회의 승인도 국가가 외교관계를 형성하고 국제사회에서 활동하는 데 중요한 역할을 한다. 다만 다른 나라의 승인이 국가의 존재를 결정하는 유일한 법적 조건은 아니다.",
      "조금 쉽게 생각해 보자.",
      "어떤 사람들이 자신들의 나라를 세우겠다고 선언했다. 헌법도 만들고 대통령도 뽑았다.",
      "하지만 실제로 통치할 영토를 확보하지 못했다. 세금을 걷거나 법을 집행할 수도 없다. 독립적인 행정과 사법제도를 운영하지도 못한다.",
      "이 경우 국가를 세우려는 정치적 의지와 조직은 존재하지만, 실효적인 주권국가가 성립했다고 볼 수 있는지는 별도로 따져야 한다.",
      "쿠르드족의 현실은 이것을 보여준다.",
      "민족의 역사가 길다고 해서 국가가 저절로 생기는 것은 아니다. 민족의 독립 의지가 강하다고 해서 그 자체로 국가가 완성되는 것도 아니다.",
      "그렇다면 우리 대한민국은 언제 나라가 되었을까?"
    ]
  },
  {
    "title": "조선은 대한민국이었을까?",
    "paragraphs": [
      "우리는 오랜 역사를 가지고 있다.",
      "고조선에서 삼국시대, 고려, 조선으로 이어지는 역사가 있다. 그 역사는 오늘날 우리가 누구인지를 설명하는 중요한 뿌리다.",
      "하지만 역사와 국가체제는 구별할 필요가 있다.",
      "조선왕조는 왕이 다스리는 나라였다. 왕권과 관료제, 양반 중심의 신분질서, 유교적 통치이념이 사회의 기본구조를 이루었다.",
      "나라의 주인은 국민이라고 선언하지 않았다.",
      "백성은 왕의 통치를 받는 존재였으며, 모든 사람이 동등한 정치적 권리를 가진 것도 아니었다.",
      "상업이 발달하고 시장이 성장하는 변화는 있었지만, 조선은 산업자본주의와 국민주권에 기초한 근대국가를 완성하지 못했다.",
      "물론 조선 말기에는 신분제를 개혁하고 근대적인 국가제도를 도입하려는 노력도 있었다. 그러나 그것이 오늘날 대한민국과 같은 헌정질서로 완성되지는 못했다.",
      "우리가 조선의 역사와 문화를 계승한다는 사실은 분명하다.",
      "하지만 **조선왕조의 정치체제를 이어받았기 때문에 오늘날 대한민국이 존재하는 것은 아니다.**",
      "대한민국은 왕이 다스리는 나라가 아니다. 신분에 따라 권리가 달라지는 나라도 아니다.",
      "대한민국의 주권은 국민에게 있다.",
      "바로 이 차이가 중요하다."
    ]
  },
  {
    "title": "1919년, 나라를 되찾겠다는 선언",
    "paragraphs": [
      "1910년 대한제국은 일본에 국권을 빼앗겼다.",
      "한국인들은 자신들의 독립된 국가를 운영할 수 없게 되었다.",
      "그러나 독립의 의지까지 사라진 것은 아니었다.",
      "1919년 3·1운동이 일어났다. 수많은 사람들이 거리로 나와 독립을 외쳤다. 그해 대한민국 임시정부가 수립되었다.",
      "임시정부는 군주제를 되살리겠다고 선언하지 않았다.",
      "새로운 나라의 이름을 대한민국이라고 정했고, 민주공화국을 지향했다.",
      "이것은 한국 역사에서 대단히 중요한 변화였다.",
      "왕의 나라를 되찾겠다는 것이 아니라 국민이 주인이 되는 공화국을 세우겠다는 선언이었기 때문이다.",
      "하지만 현실은 냉혹했다.",
      "임시정부에는 한반도를 실제로 통치할 영토와 행정권이 없었다. 일본의 식민지배 아래에서 경찰권과 사법권을 행사할 수도 없었다. 독립국가의 정부로서 주요 국가들의 공식 외교 승인도 얻지 못했다.",
      "임시정부의 존재와 독립운동은 결코 가벼운 역사가 아니다.",
      "독립을 위해 싸운 사람들의 희생과 공화국 건설의 이상은 대한민국의 중요한 역사적 토대였다.",
      "그러나 **독립된 국가를 만들겠다는 선언과 실제로 독립국가를 운영하는 것은 서로 다른 문제다.**",
      "1919년과 1948년의 차이를 살펴볼 이유가 바로 여기에 있다."
    ]
  },
  {
    "title": "1948년, 선언했던 나라가 현실이 되다",
    "paragraphs": [
      "1945년 일본의 패전으로 한국은 해방되었다.",
      "하지만 해방됐다고 곧바로 독립정부가 들어선 것은 아니었다.",
      "한반도는 미군과 소련군의 점령 아래 남과 북으로 나뉘었다. 새로운 국가를 어떻게 만들 것인가를 놓고 치열한 갈등이 벌어졌다.",
      "그 혼란 속에서 1948년 5월 10일, 남한에서 총선거가 실시되었다.",
      "선거를 통해 제헌국회가 구성되었고, 7월 17일 대한민국 헌법이 공포되었다.",
      "헌법 제1조는 대한민국이 민주공화국이라고 선언했다.",
      "제2조는 대한민국의 주권이 국민에게 있으며 모든 권력이 국민으로부터 나온다고 규정했다.",
      "그리고 8월 15일 대한민국 정부가 출범했다.",
      "이승만은 초대 대통령으로 선출되어 정부 수립을 이끌었다.",
      "이때부터 대한민국은 헌법에 근거한 국가기관과 실제 통치권을 가진 정부를 운영하기 시작했다.",
      "그해 12월 유엔총회는 대한민국 정부가 유엔한국임시위원단이 감시할 수 있었던 지역에서 실시된 선거를 통해 성립한 합법적인 정부이며, 해당 지역에 실효적인 통치권과 관할권을 행사한다고 확인했다.",
      "물론 당시 대한민국 정부의 실제 통치 범위는 한반도 남부에 한정되어 있었다. 분단은 국가 수립의 커다란 한계였다.",
      "그럼에도 1948년에는 1919년과 구별되는 중요한 사건이 일어났다.",
      "독립국가를 세우려는 정치적 선언을 넘어, 실제 통치하는 헌법적 정부가 수립된 것이다.",
      "**1948년의 의미는 단순히 대통령 한 사람을 뽑았다는 데 있지 않다. 국민주권을 국가의 원리로 삼고, 그 원리에 기초한 국가제도를 현실 속에서 작동시키기 시작했다는 데 있다.**"
    ]
  },
  {
    "title": "이승만은 무엇을 건국했는가?",
    "paragraphs": [
      "이승만을 둘러싼 평가는 지금도 엇갈린다.",
      "어떤 사람들은 그를 건국대통령이라고 부른다. 반면 어떤 사람들은 대한민국은 이미 1919년에 건국됐으므로 이승만을 건국대통령이라고 부를 수 없다고 주장한다.",
      "또 이승만 정부의 권위주의 통치와 3·15 부정선거, 4·19혁명 등을 들어 그의 역사적 공로를 비판하기도 한다.",
      "이승만 집권기의 민주주의 훼손은 실제 역사다. 이를 숨기거나 축소할 이유는 없다.",
      "그러나 대통령으로서의 통치행위와 국가 수립 과정에서 수행한 역할은 구별해서 평가할 수 있다.",
      "이승만은 독립운동에 참여했고, 해방 이후 대한민국 정부의 수립을 주도했으며, 초대 대통령으로 국가체제를 구성하는 데 중요한 역할을 했다.",
      "그렇다고 대한민국을 이승만 혼자 만들었다는 의미는 아니다.",
      "독립운동가들의 희생, 제헌국회의 활동, 국민의 참여, 국제사회의 역할이 함께 있었다.",
      "그리고 이승만 자신도 1919년 임시정부를 계승한다는 인식을 가지고 있었다. 그는 1948년 제헌국회 개회사에서 새로 구성되는 정부가 임시정부를 계승한다고 밝혔다.",
      "그렇다면 중요한 것은 1919년과 1948년 중 하나만을 선택하는 일이 아니다.",
      "1919년에 무엇이 시작됐으며, 1948년에 무엇이 실제로 성립했는지를 구별하는 일이다.",
      "이승만의 건국을 역사적으로 평가하려면 바로 이 차이에서 출발할 필요가 있다."
    ]
  },
  {
    "title": "왜 건국을 둘러싸고 다투는가?",
    "paragraphs": [
      "건국이라는 두 글자를 놓고 우리 사회는 오랫동안 논쟁해 왔다.",
      "1919년 건국을 강조하는 사람들은 대한민국의 정통성이 3·1운동과 임시정부에서 출발한다고 설명한다.",
      "1948년 건국을 강조하는 사람들은 헌법과 선거, 정부, 실효적 통치권을 갖춘 국가가 실제로 수립된 사건에 주목한다.",
      "여기에는 독립운동을 어떻게 평가할 것인가, 분단의 책임을 어떻게 이해할 것인가, 이승만의 역사적 위치를 어떻게 볼 것인가라는 문제가 함께 얽혀 있다.",
      "그러나 건국의 역사적 의미는 정치적 진영의 이름만으로 결정되지 않는다.",
      "특정 단체가 이승만을 긍정적으로 평가한다는 이유로 그 단체의 모든 활동이 옳아지는 것은 아니다. 반대로 특정 단체에 문제가 있다는 이유로 1948년 대한민국 정부 수립의 의미까지 사라지는 것도 아니다.",
      "최근 리박스쿨을 둘러싼 논쟁에서도 생각해 볼 문제다.",
      "단체의 활동이나 교육내용에 문제가 있다면 구체적인 사실에 따라 검증하면 된다.",
      "그러나 그 단체의 이름을 이승만 건국론 전체를 대신하는 말처럼 사용한다면, 역사에 대한 논쟁은 사람과 집단에 대한 낙인으로 바뀔 수 있다.",
      "역사는 어느 진영의 소유물이 아니다.",
      "1919년 임시정부의 의미도, 1948년 대한민국 정부 수립의 의미도 정치적 편의에 따라 지우거나 부풀릴 수 없는 역사다.",
      "건국에 대한 논쟁 역시 감정적인 편 가르기가 아니라 역사적 사실에서 출발할 때 생산적일 수 있다."
    ]
  },
  {
    "title": "오래된 역사를 이어받는 것과 새로운 나라를 세우는 것은 다르다",
    "paragraphs": [
      "대한민국은 조선왕조의 이름만 바꾼 나라가 아니다.",
      "그렇다고 수천 년의 한국사와 단절된 채 아무런 뿌리 없이 탄생한 나라도 아니다.",
      "우리는 오랜 역사와 문화를 이어받았다. 국권을 회복하려는 독립운동의 정신도 이어받았다.",
      "그러나 1948년에 현실화된 국가의 기본원리는 조선왕조와 근본적으로 달랐다.",
      "왕의 통치권을 국민주권으로 바꾸었고, 신분에 따른 정치적 질서 대신 헌법상 자유와 평등을 국가의 원리로 삼았다.",
      "물론 헌법에 선언된 자유와 평등이 하루아침에 모두 실현된 것은 아니었다. 이후 수많은 시민의 노력과 민주화운동을 통해 그 원리들은 발전해 왔다.",
      "그렇기 때문에 건국은 모든 것이 완성된 날을 뜻하지 않는다.",
      "**새로운 국가질서를 세우고 그 질서가 현실 속에서 작동하기 시작한 역사적 출발점이라는 의미가 있다.**",
      "그리고 이 관점에서 1948년 대한민국 정부 수립은 특별한 의미를 갖는다."
    ]
  },
  {
    "title": "씨앗의 관점 — 나라의 역사가 아니라 나라의 주인을 보자",
    "paragraphs": [
      "우리는 대한민국의 역사를 이야기하면서 자주 누구의 정통성이 더 오래됐는지를 다툰다.",
      "조선을 계승했는가. 임시정부를 계승했는가. 1919년인가, 1948년인가.",
      "그러나 씨앗의 소리가 더욱 중요하게 생각하는 질문은 따로 있다.",
      "**그 나라는 누구의 나라인가?**",
      "왕의 나라인가, 국민의 나라인가.",
      "권력이 시민 위에 군림하는 나라인가, 아니면 시민이 권력을 만들고 제한하는 나라인가.",
      "국민은 국가를 위해 존재하는가, 국가는 국민의 자유와 권리를 지키기 위해 존재하는가.",
      "우리가 건국의 의미에서 발견하고자 하는 것은 바로 이 변화다.",
      "1948년 대한민국은 역사와 독립운동의 정신을 계승하면서 실제로 국민주권에 기초한 헌정국가를 수립했다.",
      "그 역사적 의미는 분명하다.",
      "그러나 새로운 나라를 세웠다는 사실만으로 그 나라가 영원히 자유로운 것은 아니다.",
      "국가가 헌법의 한계를 넘어 시민의 권리를 침해한다면, 국민주권이라는 건국의 원리는 훼손될 수 있다.",
      "권력을 제한하고 시민의 자유를 보장한다는 약속이 무너진다면 민주공화국이라는 이름도 충분하지 않다.",
      "우리가 건국을 공부하는 이유는 오래전의 대통령을 숭배하거나 비난하기 위해서가 아니다.",
      "**대한민국이 어떤 원리 위에 세워진 나라이고, 그 원리가 오늘날에도 제대로 지켜지고 있는지를 묻기 위해서다.**",
      "나라를 세운 역사를 기억하는 것만큼, 그 나라가 누구를 위해 존재하는지를 잊지 않는 일이 중요하다.",
      "대한민국의 주인은 왕도, 대통령도, 어느 정당도 아니다.",
      "국민이다.",
      "그것이 건국이라는 말에서 오늘의 시민이 되새길 가장 중요한 의미다."
    ]
  },
  {
    "title": "시민언어 한 줄 정리",
    "paragraphs": [
      "**건국(建國)이란 일정한 영토와 주민, 독립적인 통치체제를 갖춘 국가를 성립시키는 일이다. 대한민국은 1919년 임시정부에서 민주공화국의 이상과 역사적 정통성을 형성했고, 1948년 헌법과 국가기관을 갖춘 실효적인 정부를 수립했다.**"
    ]
  }
],
sources
};
export const foundingArticleEn:SeedLanguageArticle={
...foundingArticleKo,term:"Founding a State",title:"Founding a State Means Establishing Popular Sovereignty, Not Restoring a Dynasty",subtitle:"From the Kurdish experience to Korea’s 1919 provisional government and the 1948 republic",summary:"A nation’s identity is not the same as an operational sovereign state. The Republic of Korea inherited the ideals of independence while establishing functioning constitutional institutions in 1948.",keyPoints:["National identity, independence declarations, statehood and diplomatic recognition are distinct concepts.","The 1919 provisional government’s republican ideals and the 1948 government’s effective jurisdiction can both matter.","The central civic question is not personal allegiance to a founder, but who holds sovereignty."],
heroImage:{...foundingArticleKo.heroImage,alt:"Archival photograph of crowds celebrating the inauguration of the Korean government in Seoul on August 15, 1948",caption:"Citizens gathered in Seoul on August 15, 1948 to celebrate the inauguration of the Republic of Korea government."},
inlineImage:{...foundingArticleKo.inlineImage!,alt:"Archival photograph of the August 15, 1948 ceremony inaugurating the government of the Republic of Korea",caption:"The 1948 inauguration ceremony. The aspirations of independence and the establishment of functioning institutions mark distinct stages."},
additionalImages:[{...foundingArticleKo.additionalImages![0],src:root+"timeline-en.png",alt:"Timeline of the loss of Korean sovereignty in 1910, the 1919 provisional government, and the 1948 constitution, government and UN resolution",caption:"Independence, constitutional ideals, functioning institutions and diplomatic status developed through distinct milestones."}],
leadParagraphs:[
"Millions of people can share a language and cultural identity and yet lack an independent state. The Kurds are a vivid example. Does a nation’s long history, by itself, amount to statehood?",
"In South Korea, public arguments often focus on whether the republic began in 1919 or 1948 and whether Syngman Rhee deserves to be called a founder. Before choosing a date, citizens need to ask what it means to found a state.",
"SEED distinguishes historical continuity from the establishment of functioning constitutional institutions. Acknowledging Korea’s cultural heritage and independence movement does not mean the modern republic inherited royal power."
],
sections:[
{title:"A people and a state are not identical",paragraphs:["Kurds live across Turkey, Iraq, Iran and Syria. Their shared identity and, in Iraqi Kurdistan, autonomous institutions have not produced one internationally recognized sovereign state representing all Kurds.","A nation describes a historical and cultural community. A state entails territory, a population and a government able to exercise political authority independently. International recognition matters enormously, but it is not the sole legal test of statehood."]},
{title:"From a royal state to constitutional citizenship",paragraphs:["Joseon was a hereditary monarchy governed through a stratified social order and Confucian institutions. Markets evolved and reformers pursued change, but the kingdom did not establish modern popular sovereignty.","The 1948 Constitution described the Republic of Korea as a democratic republic and placed sovereignty in the people.[1] Historical and cultural continuity therefore coexisted with a fundamental transformation of political legitimacy."]},
{title:"What was achieved in 1919?",paragraphs:["After Japan annexed Korea in 1910, independence activists sought to regain self-government. The March First Movement and the Korean Provisional Government of 1919 envisioned a democratic republic rather than a restored monarchy.","The provisional government organized independence work and diplomacy, but it did not exercise effective executive, judicial or police authority in Korea or secure formal recognition from major governments.","The preamble to the 1948 Constitution explicitly claimed continuity with the independence spirit proclaimed through the March First Movement.[1] This makes the provisional government’s historic legitimacy compatible with a separate discussion of practical state formation."]},
{title:"What changed in 1948?",paragraphs:["The end of Japanese rule did not immediately produce a unified independent government. US and Soviet occupation and a divided peninsula framed the elections. The UN process moved toward elections in areas accessible to its commission.[3][4]","Elections were held in the South on May 10, 1948. A constituent assembly adopted a constitution, and the Republic of Korea government was inaugurated on August 15. Syngman Rhee became its first president.","UN General Assembly Resolution 195 (III), adopted on December 12, described the government as lawfully established through elections in the area monitored by the UN commission and as exercising effective control there.[2] This was neither UN membership nor blanket diplomatic recognition by every country.","Division constrained the government’s effective territorial jurisdiction. But the emergence of operating institutions marked a real change from a government-in-exile pursuing independence."]},
{title:"The debate over Rhee and the founding date",paragraphs:["A 1919 account emphasizes republican ideals and the independence movement’s legal and moral lineage. A 1948 account emphasizes elections, constitutional institutions and effective jurisdiction. Those questions should not be confused.","Rhee’s role in establishing the 1948 government can be acknowledged alongside his later abuses of constitutional government. Recognizing the first does not excuse authoritarian actions, and recognizing the second does not erase the first.","Allegations involving an educational organization likewise cannot establish whether a historical theory is right. Its activities require factual scrutiny; claims about state formation require historical evidence."]},
{title:"SEED’s view: Whose country is it?",paragraphs:["The Republic of Korea is neither a renamed Joseon monarchy nor a state without a past. Its modern institutions emerged from a history of independence movements and a decisive shift toward popular sovereignty.","Founding was a beginning, not the completion of every democratic promise. Subsequent generations struggled to make constitutional freedoms effective.","The reason to study founding is not to venerate or condemn a single president. It is to ask whether the state serves its citizens or demands that citizens serve the state. Sovereignty belongs to the people. That is the founding principle citizens must continue to defend."]}]
};