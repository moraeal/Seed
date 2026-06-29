export type RoadmapPhase = {
  title: string;
  period: string;
  items: string[];
};

export const hundredDayRoadmap: RoadmapPhase[] = [
  {
    period: "1~30일",
    title: "언어 전선 구축",
    items: [
      "창립선언문 작성",
      "자유와 책임 시민언어 30개 선정",
      "오늘의 프레임 샘플 제작",
      "홈페이지 시안 공개",
    ],
  },
  {
    period: "31~60일",
    title: "콘텐츠 전개",
    items: [
      "오늘의 프레임 주 3회 발행",
      "시민언어 사전 주 2회 발행",
      "씨앗시민 브리핑 주 1회 발행",
      "후원자 간담회 개최",
    ],
  },
  {
    period: "61~100일",
    title: "공론장 조직화",
    items: [
      "창립 포럼 개최",
      "시민 제안 접수 시작",
      "청년 씨앗위원회 구성",
      "첫 번째 프레임 전쟁 리포트 발행",
    ],
  },
];

export const yearGoals = [
  "오늘의 프레임 100건",
  "씨앗시민 브리핑 40건",
  "시민언어 사전 30개",
  "시민 제안 200건 접수",
  "시민아카데미 1기 운영",
  "청년 씨앗위원회 구성",
  "지역 씨앗모임 3곳",
  "연말 자유와 책임 시민사회 보고서 발행",
];

export const threeYearPlan = [
  "시민언어 연구소 정례화",
  "지역별 시민 제안 네트워크 구축",
  "기업 후원 투명성 리포트 발행",
  "청년 리더십 과정과 시민실험 펀드 운영",
];
