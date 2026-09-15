export type SeedWatchContentKind = "news" | "briefing" | "column";

export type SeedWatchReference = {
  kind: SeedWatchContentKind;
  slug: string;
  topic: { ko: string; en: string };
  status: { ko: string; en: string };
};

/**
 * 시민감시는 기존 기사를 옮기거나 고쳐 쓰지 않는다.
 * 이 목록은 원래 메뉴와 주소를 유지한 기사 가운데 공익감시 성격의 기록을 다시 연결한다.
 * 앞으로 시민감시에서 직접 시작하는 감시기록은 publicInterestWatchCases에 추가한다.
 */
export const seedWatchReferences: SeedWatchReference[] = [
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
