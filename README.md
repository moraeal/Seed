# 씨앗연대 홈페이지 MVP

자유와 책임의 시민언어로 시민사회 공론장을 다시 세우는 씨앗연대 홈페이지의 첫 번째 작동형 시안입니다.

## 구성

- Vite + React + TypeScript
- Tailwind CSS
- React Router 기반 페이지
- 시민브리핑 목록, 검색, 분류, 상세 글
- Supabase 기반 비회원 댓글
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
- Briefings
- Briefing Detail

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

## 시민브리핑 글 추가

`src/data/briefings.ts` 배열에 새 글을 추가하면 시민브리핑 목록과 상세 페이지에 자동으로 표시됩니다.

## 댓글 연결

1. Supabase SQL Editor에서 `supabase/comments.sql`을 실행합니다.
2. GitHub 저장소의 Settings → Secrets and variables → Actions에 아래 Repository secrets를 등록합니다.
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Actions의 Deploy to GitHub Pages 워크플로를 다시 실행합니다.

댓글 저장소가 연결되지 않은 경우 댓글창은 준비중 상태로 안전하게 표시됩니다. 운영자는 Supabase의 Table Editor에서 댓글을 숨김 또는 삭제할 수 있습니다.
