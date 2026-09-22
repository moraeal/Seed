export type SeedWatchContentKind = "news" | "briefing" | "column";

export type SeedWatchReference = {
  kind: SeedWatchContentKind;
  slug: string;
  topic: { ko: string; en: string };
  status: { ko: string; en: string };
};

/**
 * 뉴스트래커와 직접 작성한 감시기록은 publicInterestWatchCases에서 시민감시 콘텐츠로 관리한다.
 * 이 목록은 원래 주소를 유지하는 관련 기사 가운데 공익감시 성격의 글을 시민감시 목록에 다시 연결한다.
 */
export const seedWatchReferences: SeedWatchReference[] = [
  {
    kind: "column",
    slug: "yeosu-island-expo-procurement-ledger",
    topic: { ko: "지역사업·조달", en: "Local projects & procurement" },
    status: { ko: "입찰·계약 분석", en: "Tender and contract analysis" },
  },
  {
    kind: "briefing",
    slug: "yeosu-world-island-expo",
    topic: { ko: "지역사업·예산", en: "Local projects & budgets" },
    status: { ko: "집중 추적", en: "Focused watch" },
  },
  {
    kind: "briefing",
    slug: "confirmation-hearings-zero-witnesses",
    topic: { ko: "권력·절차", en: "Power & procedure" },
    status: { ko: "후속 확인", en: "Follow-up" },
  },
  {
    kind: "news",
    slug: "national-debt-ratio-gdp-comparison",
    topic: { ko: "재정정보·통계", en: "Fiscal data & statistics" },
    status: { ko: "자료 점검", en: "Data check" },
  },
  {
    kind: "column",
    slug: "state-cannot-monopolize-life-2026",
    topic: { ko: "공공기관·정책성과", en: "Public bodies & outcomes" },
    status: { ko: "기관 책임", en: "Institutional accountability" },
  },
  {
    kind: "column",
    slug: "civic-groups-are-not-state-vanguard-2026",
    topic: { ko: "시민사회 권력", en: "Civil-society power" },
    status: { ko: "권력 감시", en: "Power watch" },
  },
  {
    kind: "news",
    slug: "local-sports-subsidy-accountability",
    topic: { ko: "보조금·회계", en: "Subsidies & accounts" },
    status: { ko: "환수·수사 추적", en: "Recovery & investigation" },
  },
  {
    kind: "briefing",
    slug: "social-economy-fair-competition",
    topic: { ko: "공공예산·시장", en: "Public budgets & markets" },
    status: { ko: "제도 추적", en: "Policy watch" },
  },
  {
    kind: "briefing",
    slug: "gyeonggi-fiscal-emergency",
    topic: { ko: "지방재정·세금", en: "Local finance & taxes" },
    status: { ko: "집중 추적", en: "Focused watch" },
  },
  {
    kind: "column",
    slug: "majority-power-must-not-command-the-judiciary",
    topic: { ko: "헌법·사법", en: "Constitution & judiciary" },
    status: { ko: "권력 감시", en: "Power watch" },
  },
  {
    kind: "briefing",
    slug: "prosecution-service-abolition",
    topic: { ko: "수사권력·법치", en: "Investigative power & rule of law" },
    status: { ko: "제도 점검", en: "Institutional check" },
  },
];
