import type { SeedColumn } from "../columns";

export const contentPathSmokeTest: SeedColumn = {
  slug: "content-path-smoke-test",
  issue: 9999,
  title: "콘텐츠 경로 점검용 비공개 테스트",
  subtitle: "메인 배포 없이 편집 경로만 검증합니다",
  date: "2026-09-08",
  author: "씨앗의 소리",
  readMinutes: 1,
  summary: "콘텐츠 제작 경로가 단순하게 작동하는지 확인하기 위한 테스트 브랜치 전용 항목입니다.",
  heroImage: {
    src: "images/columns/lh-reform-2026.jpg",
    alt: "콘텐츠 경로 점검용 테스트 이미지",
    caption: "테스트 브랜치에서만 사용하는 점검용 이미지입니다.",
    credit: "씨앗의 소리",
    sourceUrl: "",
  },
  inlineImage: {
    src: "images/columns/lh-reform-2026.jpg",
    alt: "콘텐츠 경로 점검용 테스트 이미지",
    caption: "테스트 브랜치에서만 사용하는 점검용 이미지입니다.",
    credit: "씨앗의 소리",
    sourceUrl: "",
  },
  sections: [
    {
      title: "점검 목적",
      paragraphs: [
        "이 항목은 콘텐츠 한 편을 추가할 때 시스템 코드에 손대지 않고 콘텐츠 파일과 목록 연결만으로 처리되는지 확인하기 위한 점검용 데이터입니다."
      ],
    },
  ],
  sourceNote: "테스트 브랜치 전용 점검 항목",
};
