export type ProgramItem = {
  status: string;
  title: string;
  summary: string;
};

export const experimentItems: ProgramItem[] = [
  {
    status: "준비중",
    title: "시민 재정표 실험",
    summary: "복잡한 지방재정 정보를 시민이 한 화면에서 비교할 수 있는 공개 형식으로 바꾸는 실험을 준비합니다.",
  },
  {
    status: "설계중",
    title: "정책 성과 추적 실험",
    summary: "지원사업의 참여자 수가 아니라 6개월·12개월 뒤 실제 결과를 시민이 확인할 수 있는 추적 방식을 설계합니다.",
  },
  {
    status: "기획중",
    title: "생활 규제 시민점검",
    summary: "일상에서 체감하는 규제와 행정 부담을 시민이 직접 기록하고 작은 개선안을 검증하는 방식을 실험합니다.",
  },
];

export const academyItems: ProgramItem[] = [
  {
    status: "기초과정",
    title: "팩트를 읽는 시민",
    summary: "기사 제목과 주장에 끌려가지 않고 원자료·통계·법령을 확인하는 기본적인 시민 팩트체크 방법을 익힙니다.",
  },
  {
    status: "핵심과정",
    title: "권력을 읽는 시민",
    summary: "국가·시장·시민사회와 권력분립의 구조를 실제 사례를 통해 이해하고 시민의 질문을 만드는 과정입니다.",
  },
  {
    status: "실천과정",
    title: "제안하는 시민",
    summary: "문제 제기를 넘어 근거, 대안, 측정 지표를 갖춘 시민제안으로 발전시키는 방법을 함께 연습합니다.",
  },
];
