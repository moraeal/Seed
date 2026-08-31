export type Briefing = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  readMinutes: number;
  featured?: boolean;
  content: string[];
  watchPoints: string[];
};

export const briefings: Briefing[] = [
  {
    slug: "why-citizen-briefing",
    category: "시민브리핑",
    title: "시민브리핑을 시작합니다",
    summary: "복잡한 현안을 진영의 언어가 아니라 시민의 질문으로 다시 읽겠습니다.",
    date: "2026-08-31",
    author: "씨드 시민파트너스",
    readMinutes: 4,
    featured: true,
    content: [
      "뉴스는 빠르게 쏟아지지만 시민이 판단하는 데 필요한 사실과 맥락은 충분히 제공되지 않습니다. 씨드 시민브리핑은 사건을 단순히 요약하는 데 머물지 않고, 확인된 사실과 아직 확인되지 않은 주장부터 구분합니다.",
      "우리는 국가와 시장을 무조건 불신하거나 옹호하지 않습니다. 제도와 권력이 시민의 자유와 공공성을 제대로 지키고 있는지, 책임의 주체가 누구인지, 시민이 무엇을 더 지켜봐야 하는지를 묻겠습니다.",
      "브리핑은 현재까지의 객관적 사실, 쟁점에 대한 설명, 지속해서 관찰할 지점, 씨드의 관점 순으로 작성합니다. 오류가 확인되면 수정 이력과 함께 바로잡고, 독자의 반론과 제보도 다음 브리핑에 반영하겠습니다.",
    ],
    watchPoints: ["사실과 의견이 명확히 구분되어 있는가", "시민의 자유와 책임이 함께 다뤄지는가", "새로운 자료가 나오면 투명하게 수정되는가"],
  },
  {
    slug: "public-interest-citizenization",
    category: "공익감시",
    title: "공익은 누구의 것인가: 공익의 시민화를 묻다",
    summary: "공익기관의 선의만이 아니라 성과와 책임, 시민에게 열린 정보의 구조를 살펴봅니다.",
    date: "2026-08-30",
    author: "씨드 편집팀",
    readMinutes: 6,
    content: [
      "공익이라는 이름은 그 자체로 면책 사유가 될 수 없습니다. 공공기관과 비영리단체, 기업의 사회공헌 사업은 무엇을 했는지만큼 누구에게 어떤 변화가 생겼는지를 시민에게 설명해야 합니다.",
      "씨드가 말하는 공익의 시민화는 공익을 특정 조직이나 전문가가 독점하지 않도록 정보와 판단의 자리를 시민에게 돌려주는 과정입니다. 재정과 의사결정, 사업 성과를 시민이 이해할 수 있는 언어로 공개하는 것이 그 출발입니다.",
    ],
    watchPoints: ["사업비와 실제 수혜 효과가 함께 공개되는가", "의사결정에 당사자와 시민이 참여하는가", "실패와 한계도 기록하는가"],
  },
  {
    slug: "sports-governance-fairness",
    category: "스포츠·공공",
    title: "성적보다 먼저 물어야 할 질문, 스포츠 행정의 공정성",
    summary: "경기 결과에 대한 분노를 넘어 선임 과정과 협회의 설명 책임, 팬 시민의 권리를 묻습니다.",
    date: "2026-08-28",
    author: "씨드 편집팀",
    readMinutes: 5,
    content: [
      "대표팀의 성적은 감독 한 사람만의 문제가 아닙니다. 선임 기준이 사전에 공개되었는지, 정해진 절차가 일관되게 적용되었는지, 결과에 대해 누가 설명하고 책임지는지가 스포츠 행정의 신뢰를 결정합니다.",
      "팬은 단순한 소비자가 아닙니다. 공적 지원과 국민적 관심 위에서 운영되는 스포츠 조직에 절차와 근거를 요구할 권리가 있는 시민입니다. 비판 역시 개인에 대한 공격보다 제도를 개선하는 질문으로 이어져야 합니다.",
    ],
    watchPoints: ["선임 기준과 회의 기록의 공개 여부", "협회의 독립적인 평가와 책임 조치", "팬과 선수의 의견을 듣는 공식 절차"],
  },
];

export const getBriefing = (slug: string) => briefings.find((briefing) => briefing.slug === slug);
