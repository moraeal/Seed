import { gyeonggiBriefing } from "./gyeonggiBriefing";

export const gyeonggiBriefingDisplay = {
  ...gyeonggiBriefing,
  images: [
    {
      src: "https://i.ytimg.com/vi/2tSeRS7Ngmw/hqdefault.jpg",
      alt: "경기도 지방채와 재정 비상 논란을 다룬 MBN 뉴스 화면",
      caption: "경기도가 지방채 발행한도의 99.6%까지 사용한 사실과 재정 논쟁을 다룬 보도입니다. 화면을 누르면 MBN 보도를 볼 수 있습니다.",
      credit: "영상 화면 · MBN News",
      sourceUrl: "https://www.youtube.com/watch?v=2tSeRS7Ngmw",
    },
    ...(gyeonggiBriefing.images ?? []),
  ],
};
