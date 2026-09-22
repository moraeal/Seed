export const topicTaxonomy = [
  {
    id: "justice",
    label: { ko: "검찰개혁과 사법", en: "Justice and Prosecution Reform" },
    description: { ko: "수사권·기소권과 사법독립을 함께 봅니다", en: "Investigative power, prosecution and judicial independence" },
    keywords: ["검찰", "검사", "사법", "수사권", "수사기관", "수사 절차", "기소", "경찰", "법원", "재판", "형사", "prosecution", "prosecutor", "justice", "investigation", "police", "court", "criminal"],
  },
  {
    id: "civil-society",
    label: { ko: "시민사회와 공익", en: "Civil Society and Public Interest" },
    description: { ko: "시민사회의 자율성과 공익의 기준을 묻습니다", en: "Autonomy in civil society and the meaning of public interest" },
    keywords: ["시민사회", "공익", "공공", "공공성", "비영리", "기부", "모금", "재단", "협동조합", "사회적경제", "civil society", "public interest", "publicness", "nonprofit", "donation", "foundation", "social economy"],
  },
  {
    id: "markets",
    label: { ko: "기업과 시장", en: "Enterprise and Markets" },
    description: { ko: "도전과 혁신을 막는 제도와 규제를 살핍니다", en: "Institutions and rules shaping enterprise and innovation" },
    keywords: ["기업", "시장", "산업", "투자", "혁신", "창업", "경쟁", "경제", "business", "enterprise", "market", "industry", "investment", "innovation", "competition", "economy"],
  },
  {
    id: "tax-finance",
    label: { ko: "세금과 재정", en: "Tax and Public Finance" },
    description: { ko: "누가 부담하고 어디에 쓰이는지 추적합니다", en: "Who pays, who benefits and where public money goes" },
    keywords: ["세금", "세수", "조세", "재정", "예산", "기금", "부담금", "환급", "상속세", "국고", "tax", "fiscal", "budget", "fund", "levy", "rebate", "revenue", "treasury"],
  },
  {
    id: "health-welfare",
    label: { ko: "보건·복지와 지역의료", en: "Health, Welfare and Regional Care" },
    description: { ko: "시민이 실제로 이용할 수 있는 의료·돌봄 체계를 살핍니다", en: "Health and care systems that citizens can actually access" },
    keywords: ["보건", "복지", "의료", "공공의료", "지역의료", "병원", "응급", "분만", "돌봄", "건강", "health", "healthcare", "public health", "regional care", "hospital", "emergency care", "maternity care", "welfare", "care"],
  },
  {
    id: "legislation-rights",
    label: { ko: "입법과 시민 권리", en: "Legislation and Civic Rights" },
    description: { ko: "법안이 자유와 선택에 미칠 영향을 따집니다", en: "How proposed laws affect freedom and civic choice" },
    keywords: ["법안", "입법", "국회", "개정안", "법률", "시민 권리", "기본권", "규제", "bill", "legislation", "assembly", "amendment", "law", "civil rights", "regulation"],
  },
  {
    id: "environment-energy",
    label: { ko: "환경과 에너지", en: "Environment and Energy" },
    description: { ko: "과학·비용·책임의 관점에서 정책을 읽습니다", en: "Policy through evidence, cost and responsibility" },
    keywords: ["환경", "기후", "에너지", "원전", "원자력", "후쿠시마", "방사선", "탄소", "생태", "environment", "climate", "energy", "nuclear", "fukushima", "radiation", "carbon", "ecology"],
  },
  {
    id: "defense-security",
    label: { ko: "국방과 안보", en: "Defense and Security" },
    description: { ko: "정치적 명분보다 국가 역량을 먼저 봅니다", en: "National capability before political symbolism" },
    keywords: ["국방", "안보", "사관학교", "육군", "해군", "공군", "군사", "미군", "방위", "전력", "defense", "security", "military", "academy", "army", "navy", "air force", "armed forces"],
  },
  {
    id: "citizenship-democracy",
    label: { ko: "시민화와 민주주의", en: "Citizenization and Democracy" },
    description: { ko: "큰 국가가 아니라 스스로 서는 시민을 생각합니다", en: "Citizens who can stand on their own before a larger state" },
    keywords: ["시민화", "민주주의", "대의제", "시민의회", "공론장", "선진화", "시민 참여", "citizenization", "democracy", "representation", "citizens assembly", "public sphere", "civic participation"],
  },
  {
    id: "politics-language",
    label: { ko: "정치와 시민언어", en: "Politics and Civic Language" },
    description: { ko: "익숙한 정치 언어의 뜻과 쓰임을 다시 묻습니다", en: "Reconsidering the language that shapes public life" },
    keywords: ["정치", "보수", "진보", "담론", "시민언어", "공공선", "공동선", "자유", "politics", "conservative", "progressive", "discourse", "civic language", "common good", "freedom"],
  },
  {
    id: "public-interest-watch",
    label: { ko: "공익기관 감시", en: "Public-interest Institutions" },
    description: { ko: "권한·예산·성과를 공개자료로 확인합니다", en: "Reviewing authority, budgets and outcomes through public records" },
    keywords: ["공익기관", "기관 감시", "시민감시", "감사", "성과 공개", "보조금", "공공기관", "위원회", "public-interest institution", "civic watch", "oversight", "audit", "accountability", "subsidy", "public agency", "committee"],
  },
] as const;

export type TopicId = typeof topicTaxonomy[number]["id"];

export const isTopicId = (value: string | null): value is TopicId => (
  topicTaxonomy.some((topic) => topic.id === value)
);

type ClassifiableArticle = {
  title: string;
  summary: string;
  body: string;
  category: string;
};

const normalize = (value: string) => value.normalize("NFKC").toLocaleLowerCase();

export function classifyArticleTopics(article: ClassifiableArticle, fallbacks: TopicId[] = ["citizenship-democracy"]) {
  const title = normalize(article.title);
  const summary = normalize(article.summary);
  const category = normalize(article.category);

  const ranked = topicTaxonomy
    .map((topic) => ({
      id: topic.id,
      score: topic.keywords.reduce((score, keyword) => {
        const term = normalize(keyword);
        return score
          + (title.includes(term) ? 8 : 0)
          + (summary.includes(term) ? 4 : 0)
          + (category.includes(term) ? 5 : 0);
      }, 0),
    }))
    .filter((topic) => topic.score >= 4)
    .sort((a, b) => b.score - a.score)
    .map((topic) => topic.id);

  const forced = fallbacks[0] === "citizenship-democracy" ? [] : fallbacks;
  const resolved = ranked.length ? [...forced, ...ranked] : fallbacks;
  return [...new Set(resolved)].slice(0, 3) as TopicId[];
}

export const getTopic = (id: TopicId) => topicTaxonomy.find((topic) => topic.id === id)!;
