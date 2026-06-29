# 씨앗연대 홈페이지 MVP

자유와 책임의 시민언어로 시민사회 공론장을 다시 세우는 씨앗연대 홈페이지의 첫 번째 작동형 시안입니다.

## 구성

- Vite + React + TypeScript
- Tailwind CSS
- React Router 기반 7개 페이지
- 샘플 데이터 기반 카드형 콘텐츠
- Netlify, Vercel에 배포 가능한 정적 빌드 구조

## 페이지

- Home
- TodayFrame
- CivicDictionary
- ProposalLab
- Roadmap
- Support
- About

## 실행 방법

```bash
npm install
npm run dev
npm run build
```

개발 서버 실행 후 터미널에 표시되는 로컬 주소로 접속하면 됩니다.

## 데이터 파일

- `src/data/frames.ts`
- `src/data/dictionary.ts`
- `src/data/roadmap.ts`
- `src/data/supportTiers.ts`
- `src/data/metrics.ts`

초기 버전은 백엔드 없이 위 데이터 파일을 화면에 렌더링합니다.
