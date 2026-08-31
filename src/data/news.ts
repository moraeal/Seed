export type NewsImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

export type NewsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type NewsSource = {
  label: string;
  url: string;
};

export type SelectedNews = {
  outlet: string;
  publishedAt: string;
  headline: string;
  url: string;
  summary: string[];
};

export type NewsArticle = {
  slug: string;
  issue: number;
  category: string;
  date: string;
  readMinutes: number;
  title: string;
  subtitle: string;
  summary: string;
  keySentence: string;
  selectedNews: SelectedNews;
  heroImage: NewsImage;
  inlineImage: NewsImage;
  sections: NewsSection[];
  watchPoints: string[];
  seedPerspective: string[];
  sources: NewsSource[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "regulation-reform-needs-public-accountability",
    issue: 1,
    category: "정책·시장",
    date: "2026-08-28",
    readMinutes: 8,
    title: "韓총리 \"신속 해결 가능 규제는 리스트업해 즉시 해소할 것\"",
    subtitle: "방향은 맞습니다. 그러나 무엇을 언제까지 어떻게 고칠지 시민이 확인할 수 있어야 합니다",
    summary: "한성숙 국무총리가 경제단체와 만나 빨리 해결할 수 있는 규제는 즉시 풀고, 이해관계가 복잡한 규제는 공론화를 거치겠다고 밝혔습니다. 씨드뉴스는 이 발표가 왜 필요한지와 함께, 진짜 규제개혁이 되려면 무엇이 더 공개돼야 하는지 알기 쉽게 짚습니다.",
    keySentence: "좋은 규제개혁은 규제를 많이 없애는 일이 아니라, 불필요한 장벽은 낮추고 시민의 안전과 공정한 경쟁은 더 분명하게 지키는 일입니다.",
    selectedNews: {
      outlet: "연합뉴스",
      publishedAt: "2026.08.28 10:29",
      headline: "韓총리 \"신속 해결 가능 규제는 리스트업해 즉시 해소할 것\"",
      url: "https://www.yna.co.kr/view/AKR20260828061200001",
      summary: [
        "한성숙 국무총리는 대한상공회의소에서 경제 협·단체와 만나, 부처 협의나 기존 규정 정비만으로 해결할 수 있는 규제를 목록으로 만들어 즉시 해소하겠다고 밝혔습니다.",
        "이해관계가 복잡한 규제는 충분한 숙의와 공론화를 거쳐 사회적 합의를 만들겠다고 설명했습니다.",
        "국민의 생명과 안전을 지키는 규제는 무조건 완화하지 않고, 현실에 맞게 강화하거나 합리화하겠다는 원칙도 제시했습니다.",
      ],
    },
    heroImage: {
      src: "images/news/han-seongsook-speaking.jpg",
      alt: "고위당정협의회에서 마이크를 들고 발언하는 한성숙 국무총리",
      caption: "자료화면. 2026년 7월 5일 제9차 고위당정협의회에서 발언하는 한성숙 국무총리입니다. 8월 28일 규제합리화 간담회 현장사진은 아닙니다.",
      credit: "영상 화면 추출: 델리민주[더불어민주당] · CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2026%EB%85%84_7%EC%9B%94_5%EC%9D%BC_-_%EC%A0%9C9%EC%B0%A8_%EA%B3%A0%EC%9C%84%EB%8B%B9%EC%A0%95%ED%98%91%EC%9D%98%ED%9A%8C_%EC%83%9D%EC%A4%91%EA%B3%84_-_%EB%8D%94%EB%B6%88%EC%96%B4%EB%AF%BC%EC%A3%BC%EB%8B%B9.webm",
    },
    inlineImage: {
      src: "images/news/korea-ev-charging.jpg",
      alt: "강원도 춘천의 눈 내린 전기차 충전소",
      caption: "자료사진. 강원도 춘천의 전기차 충전시설입니다. 전기차·배터리 관련 규제는 기업의 투자뿐 아니라 시민의 생활과 재산권에도 직접 연결됩니다.",
      credit: "사진: Sharon Hahn Darlin · CC BY 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chuncheon,_Gangwon_Province,_South_Korea_-_charging_stations_in_the_snow,_28_November_2024_-_1.jpg",
    },
    sections: [
      {
        title: "이 기사를 쉽게 풀어보면",
        paragraphs: [
          "정부의 말은 크게 세 가지입니다. 첫째, 담당 부처가 마음만 먹으면 바로 고칠 수 있는 낡은 절차는 빨리 고치겠다는 것입니다. 둘째, 기업과 노동자·소비자처럼 이해가 충돌하는 문제는 정부가 일방적으로 결정하지 않고 토론을 거치겠다는 것입니다. 셋째, 사람의 생명과 안전에 필요한 규제까지 무조건 풀지는 않겠다는 뜻입니다.",
          "방향 자체는 타당합니다. 새로운 기술이 등장했는데 과거의 기준만 고집하거나, 같은 서류를 여러 번 내게 하거나, 담당 부처가 달라 사업이 멈추는 문제는 고칠 필요가 있습니다. 다만 지금은 ‘어떻게 하겠다’는 원칙을 발표한 단계이지, 시민이 체감할 만큼 실제 규제가 바뀐 단계는 아닙니다.",
        ],
      },
      {
        title: "정부는 무엇을 바꾸겠다는 것입니까?",
        paragraphs: ["보도자료에 나온 과제를 생활 가까운 말로 묶으면 네 갈래입니다."],
        bullets: [
          "신기술의 길 열기: ESS·수소 연구·로봇주차·전기차 배터리처럼 기술은 달라졌는데 제도가 따라가지 못한 부분을 고칩니다.",
          "산업 현장의 중복 부담 줄이기: 임시창고, 고압가스 검사, 플레어스택처럼 여러 규정이 겹치거나 현실과 맞지 않는 절차를 정비합니다.",
          "시민의 불편과 불공정 줄이기: 보험 마이데이터의 반복 서류를 줄이고, 부동산 중개 담합과 카르텔은 오히려 더 엄격히 살핍니다.",
          "인재가 머물 수 있게 하기: 외국인 전문인력의 채용과 체류 기준을 예측할 수 있도록 제도를 개선합니다.",
        ],
      },
      {
        title: "진짜 필요한 규제개혁은 무엇이어야 합니까?",
        paragraphs: [
          "규제개혁은 단순히 규정의 숫자를 줄이는 일이 아닙니다. 병원에서 안전수칙을 없애는 것과, 같은 진단서를 세 곳에 반복해서 내는 절차를 없애는 것은 전혀 다른 일입니다. 전자는 시민을 위험하게 만들 수 있지만, 후자는 안전을 해치지 않으면서 시간과 비용을 줄입니다.",
          "좋은 규제개혁은 다음 네 가지 질문에 답할 수 있어야 합니다.",
        ],
        bullets: [
          "왜 필요한가: 이 규제가 막으려는 위험이나 해결하려는 문제가 지금도 분명한가",
          "덜 불편한 방법은 없는가: 허가 대신 신고, 일률 규제 대신 위험도별 규제처럼 더 가벼운 방법이 있는가",
          "누가 이익을 얻고 누가 위험을 떠안는가: 기업의 비용 절감이 소비자·노동자·지역주민의 부담으로 옮겨가지는 않는가",
          "효과를 확인할 수 있는가: 시행 전후의 비용·시간·사고율을 공개하고 문제가 생기면 다시 고칠 수 있는가",
        ],
      },
      {
        title: "이번 기사와 정부 발표에서 부족한 점",
        paragraphs: [
          "첫째, 무엇을 언제까지 고칠지 구체적인 시간표가 보이지 않습니다. ‘즉시 해소하겠다’는 약속은 있지만 과제별 담당 부처, 법령 개정일과 완료 기준은 제시되지 않았습니다.",
          "둘째, 성과를 판단할 숫자가 없습니다. 기업과 시민의 시간·비용이 얼마나 줄어드는지, 안전에 어떤 변화가 생기는지 측정 기준이 있어야 발표가 실제 성과로 이어졌는지 알 수 있습니다.",
          "셋째, 논의의 출발점이 정부와 경제단체에 치우쳐 있습니다. 기업의 현장 경험은 중요하지만 소비자, 노동자, 자영업자와 지역주민도 규제 변화의 영향을 받습니다. 이들의 의견을 언제, 어떤 방식으로 들을지는 아직 분명하지 않습니다.",
          "넷째, 사후점검 장치가 보이지 않습니다. 규제를 풀어 문제가 생겼을 때 누가 책임지고, 언제 재검토하며, 필요한 경우 어떻게 되돌릴지까지 공개돼야 합니다. 지금 발표는 좋은 방향을 제시했지만 시민이 검증할 수 있는 실행표는 아직 부족합니다.",
        ],
      },
    ],
    watchPoints: [
      "과제별 담당 부처·개정 내용·완료 날짜가 공개되는가",
      "규제 변경 전후의 비용·처리시간·안전 지표를 비교할 수 있는가",
      "기업뿐 아니라 소비자·노동자·자영업자·지역주민도 논의에 참여하는가",
      "부작용을 점검하고 필요하면 제도를 되돌릴 사후평가가 마련되는가",
    ],
    seedPerspective: [
      "씨드는 규제가 많으면 국가가 유능하고, 규제가 적으면 시민이 자유롭다는 식으로 보지 않습니다. 낡고 불필요한 규제는 시민의 도전과 시장의 활력을 막지만, 안전과 공정한 경쟁을 지키는 규제는 오히려 평범한 시민의 자유를 보호합니다. 중요한 것은 규제의 숫자가 아니라 목적과 효과입니다.",
      "이번 발표는 ‘빠르게 고칠 것은 고치고, 복잡한 문제는 공론화하며, 안전은 양보하지 않겠다’는 점에서 방향은 좋습니다. 그러나 약속을 신뢰로 바꾸려면 과제별 일정과 판단 근거, 찬반 의견, 성과지표와 사후평가를 공개해야 합니다. 씨드는 이를 시민이 한눈에 확인할 수 있는 ‘공개 규제장부’로 만들 것을 제안합니다. 규제개혁도 정부와 기업만의 협상이 아니라 시민에게 설명하고 결과에 책임지는 과정이어야 합니다.",
    ],
    sources: [
      { label: "국무조정실 보도자료 — 한성숙 국무총리 주재 경제 협·단체 규제합리화 간담회", url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156775915" },
      { label: "KDI 경제교육·정보센터 — 8월 ‘3연속’ 규제혁신 소통 나선 한 총리", url: "https://eiec.kdi.re.kr/policy/materialView.do?num=285962" },
      { label: "연합뉴스 — 韓총리 ‘신속 해결 가능 규제는 리스트업해 즉시 해소할 것’", url: "https://www.yna.co.kr/view/AKR20260828061200001" },
    ],
  },
];

export const getNewsNewestFirst = () => [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
export const getNewsArticle = (slug: string) => newsArticles.find((article) => article.slug === slug);
