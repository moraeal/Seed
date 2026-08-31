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
    title: "규제를 풀겠다는 정부, 무엇을 기준으로 고쳐야 합니까?",
    subtitle: "한성숙 총리의 규제합리화 간담회, 발표보다 결과를 시민이 확인해야 합니다",
    summary: "정부가 경제단체와 만나 신속한 규제 개선을 약속했습니다. 그러나 규제의 성패는 몇 건을 없앴는지가 아니라, 시민의 안전과 자유를 지키면서 불필요한 비용을 실제로 줄였는지로 판단해야 합니다.",
    keySentence: "규제 개혁의 기준은 철폐 건수가 아니라 시민이 확인할 수 있는 효과와 책임입니다.",
    heroImage: {
      src: "images/news/regulatory-dialogue-kcci.jpg",
      alt: "대한상공회의소 회의장에서 발표를 듣는 참석자들",
      caption: "자료사진. 2013년 대한상공회의소에서 열린 창조경제 관련 공개 토론회로, 2026년 8월 28일 규제합리화 간담회 현장사진은 아닙니다.",
      credit: "사진: 전한·코리아넷/KOCIS · CC BY-SA 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:KOCIS_Korea_Panel_Discussion_for_Creative_Economy_with_Culture_04_(8683124624).jpg",
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
        title: "무슨 일이 있었습니까?",
        paragraphs: [
          "2026년 8월 28일 한성숙 국무총리는 서울 대한상공회의소에서 경제 협·단체들과 규제합리화 간담회를 열었습니다. 정부는 현장에서 신속히 해결할 수 있는 규제는 목록으로 만들어 곧바로 개선하고, 이해관계가 복잡한 사안은 숙의와 공론화를 거치겠다고 밝혔습니다.",
          "정부는 모든 규제를 없애겠다는 태도와는 거리를 뒀습니다. 국민의 생명과 안전에 필요한 규제는 유지하거나 강화하고, 시대와 기술의 변화에 맞지 않는 절차와 기준은 합리화하겠다는 설명입니다.",
        ],
      },
      {
        title: "현재 거론된 10가지 과제",
        paragraphs: ["정부 발표에서 개선이 진행 중이라고 밝힌 주요 과제는 다음과 같습니다."],
        bullets: [
          "에너지저장장치(ESS)의 용도·위험도에 맞춘 분류와 규제 정비",
          "수소 연구개발 현장의 안전기준과 절차 합리화",
          "공동주택 안 로봇주차 설비 관련 기준 개선",
          "전기차와 배터리의 소유권을 분리해 등록할 수 있도록 제도 검토",
          "산업단지 내 임시창고 설치 관련 규제 개선",
          "고압가스 관련 검사·안전규정 합리화",
          "산업시설 플레어스택 관련 규정 정비",
          "보험 마이데이터 이용 때 반복되는 서류 제출 부담 완화",
          "부동산 중개 분야의 담합·카르텔 행위 점검과 제재",
          "외국인 전문인력의 채용·체류 제도에 대한 예측 가능성 제고",
        ],
      },
      {
        title: "아직 확인되지 않은 것은 무엇입니까?",
        paragraphs: [
          "이번 발표는 규제 개선의 방향과 검토 과제를 밝힌 단계입니다. 각 과제의 법령 개정안, 시행 시점, 비용 절감 규모와 안전 영향이 모두 확정된 것은 아닙니다.",
          "따라서 ‘규제가 풀렸다’고 단정하기보다 어떤 제도가 실제로 바뀌었고, 누구의 비용이 얼마나 줄었으며, 새로운 위험은 어떻게 관리되는지 후속 결과를 확인해야 합니다.",
        ],
      },
      {
        title: "규제는 선악이 아니라 설계의 문제입니다",
        paragraphs: [
          "낡은 규제는 새로운 기술과 일자리를 막고 시민에게 불필요한 비용을 떠넘길 수 있습니다. 반대로 안전·환경·공정경쟁을 지키는 규제를 성급히 없애면 그 비용은 사고 피해자, 소비자와 지역사회가 부담하게 됩니다.",
          "핵심은 규제가 있느냐 없느냐가 아닙니다. 목적이 분명한지, 필요한 범위만 제한하는지, 더 가벼운 대안은 없는지, 결과를 사후에 검증할 수 있는지가 중요합니다.",
        ],
      },
      {
        title: "기업의 목소리만으로는 충분하지 않습니다",
        paragraphs: [
          "이번 간담회는 정부와 경제단체의 소통이라는 의미가 있습니다. 하지만 규제 변경의 영향을 받는 사람은 기업만이 아닙니다. 소비자, 노동자, 자영업자, 지역주민과 전문가의 경험도 함께 검토돼야 합니다.",
          "특히 안전과 환경, 개인정보, 부동산처럼 이해관계가 크게 충돌하는 분야에서는 제안자와 수혜자, 위험 부담자가 누구인지 공개하고 반대 의견도 기록해야 합니다.",
        ],
      },
    ],
    watchPoints: [
      "과제별 담당 부처와 완료 기한이 공개되는가",
      "규제 변경 전후의 비용·시간·안전 지표가 제시되는가",
      "기업 이외의 시민·소비자·노동자·지역주민도 논의에 참여하는가",
      "시행 뒤 부작용을 점검하고 되돌릴 수 있는 사후평가 장치가 있는가",
    ],
    seedPerspective: [
      "씨드는 규제를 무조건 선하거나 악한 것으로 보지 않습니다. 국가는 제한되어야 하지만 필요한 일을 해낼 수 있어야 합니다. 시민의 자유와 재산권을 불필요하게 침해하는 규제는 걷어내고, 생명·안전·공정한 경쟁을 지키는 규제는 목적과 근거를 더 분명히 해야 합니다.",
      "정부가 할 일은 ‘몇 건을 없앴다’는 숫자를 홍보하는 데 그치지 않는 것입니다. 과제별 근거와 이견, 일정, 성과지표, 사후평가를 한눈에 볼 수 있는 공개 규제장부를 만들고 시민이 결과를 검증할 수 있게 해야 합니다. 규제 개혁도 시민에게 설명하고 책임지는 민주적 행정이어야 합니다.",
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
