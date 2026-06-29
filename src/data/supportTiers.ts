export type SupportTier = {
  name: string;
  price: string;
  description: string;
};

export const supportTiers: SupportTier[] = [
  {
    name: "씨앗 후원자",
    price: "월 1만 원 이상",
    description: "시민 기반을 함께 만듭니다.",
  },
  {
    name: "동행 후원자",
    price: "연 100만 원 이상",
    description: "콘텐츠와 공론장을 지원합니다.",
  },
  {
    name: "기둥 후원자",
    price: "연 1,000만 원 이상",
    description: "브리핑, 포럼, 시민아카데미를 후원합니다.",
  },
  {
    name: "설립 파트너",
    price: "연 5,000만 원 이상",
    description: "초기 조직 인프라와 핵심 사업을 함께 세웁니다.",
  },
];

export const fundUses = [
  "시민언어센터 운영",
  "오늘의 프레임 제작",
  "시민언어 사전 제작",
  "시민자유 감시 리포트 발행",
  "시민아카데미 운영",
  "청년 씨앗위원회 지원",
  "시민 제안 플랫폼 운영",
];

export const sponsorshipPrinciples = [
  "씨앗연대는 특정 기업의 민원을 대변하지 않는다.",
  "기업의 자유와 책임을 함께 말한다.",
  "후원 내역과 사업 목적을 투명하게 관리한다.",
  "후원은 자유와 책임의 시민사회 인프라 구축을 위한 공익적 참여다.",
];
