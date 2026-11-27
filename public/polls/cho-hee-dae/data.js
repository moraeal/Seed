const polls = [
  {
    "org": "메타보이스·서던포스트",
    "start": "2025-05-04",
    "end": "2025-05-05",
    "n": 1010,
    "method": "무선 전화면접",
    "values": [
      46,
      46
    ],
    "labels": [
      "적절",
      "부적절"
    ],
    "url": "https://news.jtbc.co.kr/article/NB12245416",
    "rate": 18,
    "client": "JTBC",
    "kind": "탄핵 시도 적절성",
    "q": "민주당의 조희대 대법원장 탄핵 시도가 적절한가",
    "err": 3.1,
    "extra": null,
    "note": "보도에서 확인한 두 응답만 표시했습니다. 나머지 응답의 항목과 비율은 미확인입니다.",
    "quoted": false
  },
  {
    "org": "한국사회여론연구소(KSOI)",
    "start": "2025-09-22",
    "end": "2025-09-23",
    "n": 1000,
    "method": "무선 가상번호 자동응답",
    "values": [
      16.4,
      29.0,
      39.9,
      14.6
    ],
    "labels": [
      "국회 탄핵",
      "자진 사퇴",
      "직 유지",
      "잘 모름"
    ],
    "url": "https://ksoi.org/83/?bmode=view&idx=167925142",
    "rate": 5.4,
    "client": "자체 조사",
    "kind": "대응 방안 선택",
    "q": "조희대 대법원장의 거취를 둘러싸고 공방이 이어지고 있습니다. 귀하께서는 다음 중 어떤 입장에 더 동의하십니까?",
    "err": 3.1,
    "extra": "https://v.daum.net/v/20250926090911793",
    "note": "",
    "quoted": true
  },
  {
    "org": "코리아리서치인터내셔널",
    "start": "2025-10-01",
    "end": "2025-10-02",
    "n": 1000,
    "method": "무선 가상번호 전화면접",
    "values": [
      47,
      39,
      15
    ],
    "labels": [
      "사퇴 필요",
      "사퇴 불필요",
      "모름·무응답"
    ],
    "url": "https://image.imnews.imbc.com/pdf/politics/2025/10/20251004_1.pdf#page=13",
    "rate": 13.9,
    "client": "MBC",
    "kind": "자진 사퇴 의견",
    "q": "조희대 대법원장이 정치 개입 논란으로 사퇴해야 한다는 의견과 사퇴할 필요 없다는 의견이 있습니다. 선생님께서는 어느 쪽 의견에 더 공감하십니까?",
    "err": 3.1,
    "extra": null,
    "note": "자진 사퇴에 관한 조사입니다.",
    "quoted": true
  },
  {
    "org": "여론조사꽃",
    "start": "2026-08-21",
    "end": "2026-08-22",
    "n": 1007,
    "method": "무선 가상번호 전화면접",
    "values": [
      48,
      46.6,
      5.3
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.flowerresearch.com/report/2026/FR0350_WR202608_04%2820260824%29_CROSSTABLE.pdf",
    "rate": 9.8,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조희대 대법원장 탄핵이 필요하다는 주장에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": true
  },
  {
    "org": "여론조사꽃",
    "start": "2026-08-21",
    "end": "2026-08-22",
    "n": 1006,
    "method": "무선 RDD 자동응답",
    "values": [
      52.4,
      42.8,
      4.8
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.flowerresearch.com/report/2026/FR0350_WR202608_04%2820260824%29_CROSSTABLE.pdf",
    "rate": 1.6,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조희대 대법원장 탄핵이 필요하다는 주장에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": true
  },
  {
    "org": "미디어토마토",
    "start": "2026-08-22",
    "end": "2026-08-23",
    "n": 1033,
    "method": "무선 RDD 자동응답",
    "values": [
      44.9,
      42.4,
      12.6
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.newstomato.com/ReadNews.aspx?no=1311201",
    "rate": 2.2,
    "client": "뉴스토마토",
    "kind": "직접 찬반",
    "q": "조희대 대법원장의 탄핵에 대해 어떻게 생각하는지 질문",
    "err": 3.0,
    "extra": null,
    "note": "",
    "quoted": false,
    "series": "미디어토마토 탄핵 찬반",
    "published": "2026-08-25"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-09",
    "end": "2026-10-10",
    "n": 1004,
    "method": "무선 가상번호 전화면접",
    "values": [
      55.4,
      40.9,
      3.7
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.flowerresearch.com/report/2026/FR0356_WR202610_02%2820261012%29_CROSSTABLE.pdf",
    "rate": 11,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "조희대 대법원장을 탄핵해야 한다는 의견에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": true,
    "published": "2026-10-12"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-09",
    "end": "2026-10-10",
    "n": 1007,
    "method": "무선 RDD 자동응답",
    "values": [
      50.8,
      44.9,
      4.3
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.flowerresearch.com/report/2026/FR0356_WR202610_02%2820261012%29_CROSSTABLE.pdf",
    "rate": 2.4,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "조희대 대법원장을 탄핵해야 한다는 의견에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": true,
    "published": "2026-10-12"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-16",
    "end": "2026-10-17",
    "n": 1003,
    "method": "무선 가상번호 전화면접",
    "values": [
      51.7,
      44.3,
      4
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.topstarnews.net/news/articleView.html?idxno=16251250",
    "rate": null,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조 대법원장 관련 의혹을 설명한 뒤 탄핵해야 한다는 주장에 공감하는지 질문",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-16",
    "end": "2026-10-17",
    "n": 1001,
    "method": "무선 RDD 자동응답",
    "values": [
      51.3,
      44,
      4.7
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.topstarnews.net/news/articleView.html?idxno=16251250",
    "rate": null,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조 대법원장 관련 의혹을 설명한 뒤 탄핵해야 한다는 주장에 공감하는지 질문",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "비전코리아",
    "start": "2026-10-16",
    "end": "2026-10-17",
    "n": 1055,
    "method": "무선 자동응답",
    "values": [
      39.2,
      52.3,
      8.5
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.gynews.kr/news/articleView.html?idxno=71986",
    "rate": 3.8,
    "client": "올리서치",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.0,
    "extra": "https://nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19574",
    "note": "",
    "quoted": false,
    "published": "2026-10-19"
  },
  {
    "org": "미디어토마토",
    "start": "2026-10-19",
    "end": "2026-10-20",
    "n": 1033,
    "method": "무선 RDD 자동응답",
    "values": [
      42.4,
      48.5,
      9.1
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.newstomato.com/ReadNews.aspx?no=1317561",
    "rate": 2.2,
    "client": "뉴스토마토",
    "kind": "직접 찬반",
    "q": "조희대 대법원장의 탄핵에 대해 어떻게 생각하는지 질문",
    "err": 3.0,
    "extra": null,
    "note": "",
    "quoted": false,
    "series": "미디어토마토 탄핵 찬반",
    "published": "2026-10-22"
  },
  {
    "org": "한국갤럽",
    "start": "2026-10-20",
    "end": "2026-10-22",
    "n": 1001,
    "method": "무선 가상번호 전화면접",
    "values": [
      34,
      39,
      28
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=1663",
    "rate": 10.6,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "최근 정치권 일각에서 대법관 공석 사태 등을 이유로 조희대 대법원장 탄핵안이 거론되고 있는데요. 귀하는 조희대 대법원장 탄핵에 찬성하십니까, 반대하십니까?",
    "err": 3.1,
    "extra": "https://www.gallup.co.kr/dir/GallupKoreaDaily/GallupKoreaDailyOpinion_679(20261023).pdf#page=14",
    "note": "",
    "quoted": true,
    "published": "2026-10-23"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-23",
    "end": "2026-10-24",
    "n": 1003,
    "method": "무선 가상번호 전화면접",
    "values": [
      50.5,
      46,
      3.5
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.topstarnews.net/news/articleView.html?idxno=16258069",
    "rate": 9.5,
    "client": "자체 조사",
    "kind": "조건부 공감",
    "q": "김건희 씨가 석방될 경우를 가정해 조 대법원장을 탄핵해야 한다는 주장에 공감하는지 질문",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-23",
    "end": "2026-10-24",
    "n": 1011,
    "method": "무선 RDD 자동응답",
    "values": [
      45.9,
      50.7,
      3.4
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://www.topstarnews.net/news/articleView.html?idxno=16258069",
    "rate": 1.9,
    "client": "자체 조사",
    "kind": "조건부 공감",
    "q": "김건희 씨가 석방될 경우를 가정해 조 대법원장을 탄핵해야 한다는 주장에 공감하는지 질문",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "한길리서치",
    "start": "2026-10-25",
    "end": "2026-10-26",
    "n": 1002,
    "method": "유무선 RDD 자동응답",
    "values": [
      36.7,
      54,
      9.3
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.polinews.co.kr/news/articleView.html?idxno=747025",
    "rate": 2.4,
    "client": "폴리뉴스·KNA25",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false,
    "published": "2026-10-28"
  },
  {
    "org": "한국사회여론연구소(KSOI)",
    "start": "2026-10-26",
    "end": "2026-10-27",
    "n": 1000,
    "method": "무선 가상번호 자동응답",
    "values": [
      32,
      50.3,
      17.8
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.ksoi.org/83/?bmode=view&idx=175302003",
    "rate": 5.5,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "선생님께서는 조희대 대법원장에 대한 탄핵 추진에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": "https://cdn.imweb.me/upload/S202011108c86bad3f4936/7275afb7f331d.jpg",
    "note": "10월 조사 도입부에서는 민주당의 탄핵 추진 방침을 언급했습니다.",
    "quoted": true,
    "questionLabel": "질문 원문 중 핵심 문장",
    "published": "2026-10-28"
  },
  {
    "org": "코리아정보리서치",
    "start": "2026-10-26",
    "end": "2026-10-27",
    "n": 1001,
    "method": "무선 RDD 자동응답",
    "values": [
      40.1,
      51.8,
      8.0
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.newscj.com/news/articleView.html?idxno=3444024",
    "rate": 3.7,
    "client": "천지일보",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false,
    "published": "2026-10-29"
  },
  {
    "org": "전국지표조사(NBS)",
    "start": "2026-10-26",
    "end": "2026-10-28",
    "n": 1000,
    "method": "무선 가상번호 전화면접",
    "values": [
      34,
      45,
      21
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://imnews.imbc.com/news/2026/politics/article/6861609_36911.html",
    "rate": 14.7,
    "client": "엠브레인퍼블릭·케이스탯리서치·코리아리서치·한국리서치 공동",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false,
    "published": "2026-10-29"
  },
  {
    "org": "리서치웰",
    "start": "2026-10-28",
    "end": "2026-10-29",
    "n": 1000,
    "method": "무선 자동응답",
    "values": [
      34,
      56.3,
      9.7
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.newdaily.co.kr/site/data/html/2026/10/30/2026103000105.html",
    "rate": 2.3,
    "client": "뉴데일리",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false,
    "published": "2026-10-30"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-30",
    "end": "2026-10-31",
    "n": 1004,
    "method": "무선 가상번호 전화면접",
    "values": [
      47.9,
      47.8,
      4.3
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://m.wikitree.co.kr/articles/1171087",
    "rate": 9.1,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조희대 대법원장 탄핵이 필요하다는 주장에 대한 공감 여부",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "여론조사꽃",
    "start": "2026-10-30",
    "end": "2026-10-31",
    "n": 1005,
    "method": "무선 RDD 자동응답",
    "values": [
      44.8,
      52.2,
      3
    ],
    "labels": [
      "공감",
      "비공감",
      "잘 모름"
    ],
    "url": "https://m.wikitree.co.kr/articles/1171087",
    "rate": 1.8,
    "client": "자체 조사",
    "kind": "탄핵 주장 공감",
    "q": "조희대 대법원장 탄핵이 필요하다는 주장에 대한 공감 여부",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "여론조사공정",
    "start": "2026-11-01",
    "end": "2026-11-02",
    "n": 1001,
    "method": "무선 RDD 자동응답",
    "values": [
      37.4,
      55.2,
      7.4
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.wikitree.co.kr/articles/1171333",
    "rate": 3.1,
    "client": "펜앤마이크",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": null,
    "note": "",
    "quoted": false,
    "published": "2026-11-03"
  },
  {
    "org": "한국사회여론연구소(KSOI)",
    "start": "2026-11-09",
    "end": "2026-11-10",
    "n": 1003,
    "method": "무선 가상번호 자동응답",
    "values": [
      20.7,
      28.9,
      38.1,
      12.3
    ],
    "labels": [
      "즉각 탄핵",
      "국정조사 우선",
      "둘 다 불필요",
      "잘 모름"
    ],
    "url": "https://www.ksoi.org/83/?bmode=view&idx=175563475",
    "rate": 5.5,
    "client": "자체 조사",
    "kind": "대응 방안 선택",
    "q": "조희대 대법원장에 대해 즉각 탄핵과 국정조사 중 어떤 대응이 적절한가",
    "err": 3.1,
    "extra": "https://www.wikitree.co.kr/articles/1173777",
    "note": "",
    "quoted": false
  },
  {
    "org": "미디어토마토",
    "start": "2026-11-16",
    "end": "2026-11-17",
    "n": 1033,
    "method": "무선 RDD 자동응답",
    "values": [
      27.9,
      18.2,
      44.6,
      9.3
    ],
    "labels": [
      "탄핵 추진",
      "국정조사 추진",
      "둘 다 불필요",
      "잘 모름"
    ],
    "url": "https://www.newstomato.com/ReadNews.aspx?no=1320875",
    "rate": 2,
    "client": "뉴스토마토",
    "kind": "대응 방안 선택",
    "q": "조희대 대법원장 탄핵과 국정조사 추진에 대한 의견",
    "err": 3,
    "extra": null,
    "note": "",
    "quoted": false
  },
  {
    "org": "코리아정보리서치",
    "start": "2026-11-16",
    "end": "2026-11-17",
    "n": 1002,
    "method": "무선 RDD 자동응답",
    "values": [
      37.4,
      54,
      8.6
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.newscj.com/news/articleView.html?idxno=3449951",
    "rate": 3.3,
    "client": "천지일보",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": "https://nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19628",
    "note": "",
    "quoted": false,
    "published": "2026-11-19"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-11-20",
    "end": "2026-11-21",
    "n": 1005,
    "method": "무선 가상번호 전화면접",
    "values": [
      44.6,
      50.1,
      5.3
    ],
    "labels": [
      "찬성",
      "반대",
      "잔여(계산)"
    ],
    "url": "https://www.hankyung.com/article/202611233120i",
    "rate": 10,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "귀하는 조희대 대법원장 탄핵에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": "https://www.nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19632",
    "note": "잔여는 100에서 발표된 찬성과 반대 비율을 뺀 값입니다.",
    "quoted": true,
    "published": "2026-11-23"
  },
  {
    "org": "여론조사꽃",
    "start": "2026-11-20",
    "end": "2026-11-21",
    "n": 1007,
    "method": "무선 RDD 자동응답",
    "values": [
      45.8,
      50.7,
      3.5
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.hankyung.com/article/202611233120i",
    "rate": 1.7,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "귀하는 조희대 대법원장 탄핵에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": "https://www.nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19633",
    "note": "",
    "quoted": true,
    "published": "2026-11-23"
  },
  {
    "org": "한길리서치",
    "start": "2026-11-22",
    "end": "2026-11-23",
    "n": 1010,
    "method": "유무선 RDD 자동응답",
    "values": [
      41.4,
      51.0,
      7.6
    ],
    "labels": [
      "찬성",
      "반대",
      "잔여(계산)"
    ],
    "url": "https://www.polinews.co.kr/news/articleView.html?idxno=749124",
    "rate": 2.2,
    "client": "폴리뉴스·KNA25",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": "https://nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19635",
    "note": "잔여는 100에서 찬성·반대 비율을 뺀 값입니다.",
    "quoted": false,
    "published": "2026-11-24"
  },
  {
    "org": "한국사회여론연구소(KSOI)",
    "start": "2026-11-23",
    "end": "2026-11-24",
    "n": 1001,
    "method": "무선 가상번호 자동응답",
    "values": [
      33.5,
      48.2,
      18.2
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.ksoi.org/83/?bmode=view&idx=175938682",
    "rate": 5.7,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "선생님께서는 조희대 대법원장에 대한 탄핵 추진에 대해 어떻게 생각하십니까?",
    "err": 3.1,
    "extra": "https://cdn.imweb.me/upload/S202011108c86bad3f4936/1c0c1b773ad13.jpg",
    "note": "11월 조사 도입부에서는 민주당의 당론 채택을 언급했습니다.",
    "quoted": true,
    "questionLabel": "질문 원문 중 핵심 문장",
    "published": "2026-11-25"
  },
  {
    "org": "전국지표조사(NBS)",
    "start": "2026-11-23",
    "end": "2026-11-25",
    "n": 1000,
    "method": "무선 가상번호 전화면접",
    "values": [
      34,
      44,
      22
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.yna.co.kr/view/AKR20261126091700001",
    "rate": 20.3,
    "client": "엠브레인퍼블릭·케이스탯리서치·코리아리서치·한국리서치 공동",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": "https://www.nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19642",
    "note": "",
    "quoted": false,
    "published": "2026-11-26"
  },
  {
    "org": "한국갤럽",
    "start": "2026-11-24",
    "end": "2026-11-26",
    "n": 1000,
    "method": "무선 가상번호 전화면접",
    "values": [
      35,
      42,
      23
    ],
    "labels": [
      "찬성",
      "반대",
      "유보·모름"
    ],
    "url": "https://www.nesdc.go.kr/portal/bbs/B0000005/view.do?nttId=19644",
    "rate": 10.9,
    "client": "자체 조사",
    "kind": "직접 찬반",
    "q": "조희대 대법원장 탄핵 추진에 대한 찬반",
    "err": 3.1,
    "extra": "https://www.newspim.com/news/view/20261127000557",
    "note": "",
    "quoted": false,
    "published": "2026-11-27"
  }
];
const events = [
  [
    "2025.05.01–03",
    "이재명 후보 사건 파기환송 뒤 민주당 초선 모임이 조희대 대법원장 탄핵을 공개 요구했다.",
    "https://www.yna.co.kr/view/AKR20250503030751001"
  ],
  [
    "2025.05.04–05",
    "처음 확인된 조사에서 민주당의 탄핵 시도를 적절·부적절로 평가한 응답이 각각 46%였다.",
    "https://news.jtbc.co.kr/article/NB12245416"
  ],
  [
    "2025.09.22–23",
    "KSOI가 국회 탄핵, 자진 사퇴, 직 유지 중 선호하는 방안을 물었다.",
    "https://ksoi.org/83/?bmode=view&idx=167925142"
  ],
  [
    "2026.08.19",
    "대법관 후보 서면 제청을 둘러싼 국회 법사위 공방에서 탄핵 요구가 다시 나왔다.",
    "https://www.yna.co.kr/view/AKR20260819125800001"
  ],
  [
    "2026.11.20",
    "더불어민주당이 의원총회에서 탄핵소추 추진을 당론으로 채택했다.",
    "https://www.yna.co.kr/view/AKR20261120106951001"
  ]
];
