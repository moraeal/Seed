export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    value: "100",
    label: "오늘의 프레임",
    description: "1년 차 발행 목표",
  },
  {
    value: "30",
    label: "시민언어",
    description: "자유와 책임의 핵심 단어",
  },
  {
    value: "200",
    label: "시민 제안",
    description: "공론장으로 연결할 현장 의제",
  },
  {
    value: "3",
    label: "지역 씨앗모임",
    description: "지역 공공성을 키우는 첫 거점",
  },
];
