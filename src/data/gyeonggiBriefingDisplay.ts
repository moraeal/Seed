import { gyeonggiBriefing } from "./gyeonggiBriefing";

export const gyeonggiBriefingDisplay = {
  ...gyeonggiBriefing,
  images: [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=88",
      alt: "계산기와 예산 서류를 살펴보는 재정·예산 상징 사진",
      caption: "재정 비상은 숫자만의 문제가 아닙니다. 세입과 지출, 빚과 기금의 흐름을 시민이 한눈에 확인할 수 있어야 합니다. 사진은 재정·예산을 표현한 상징 이미지입니다.",
      credit: "Unsplash · 재정·예산 상징 이미지",
      sourceUrl: "https://unsplash.com/s/photos/budget",
    },
    ...(gyeonggiBriefing.images ?? []),
  ],
};
