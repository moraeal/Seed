# 씨앗의 소리 홈페이지 MVP

자유와 책임의 시민언어로 시민사회 공론장을 다시 세우는 씨앗의 소리 홈페이지의 첫 번째 작동형 시안입니다.

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

## 편집 이미지 다양성 원칙

- 새 뉴스·브리핑·칼럼 이미지는 직전 콘텐츠의 매체, 구도, 색조, 인물 배치와 겹치지 않도록 기획합니다.
- 인물 중심 다큐멘터리 사진을 연속해서 사용하지 않습니다. 종이 콜라주, 목판화, 정물, 공간, 지도, 데이터 시각화, 상징 오브제 등 서로 다른 시각언어를 순환합니다.
- 같은 콘텐츠 안에서도 헤드 이미지와 본문 이미지는 서로 다른 매체와 구도를 사용하되, 주제의 핵심 논지는 일관되게 전달합니다.
- 제작 전에 최근 게시물 이미지를 확인하고 반복되는 정면 군중, 회의 장면, 비슷한 얼굴과 색조를 피합니다.

## 댓글 연결

1. Supabase SQL Editor에서 `supabase/comments.sql`을 실행합니다.
2. GitHub 저장소의 Settings → Secrets and variables → Actions에 아래 Repository secrets를 등록합니다.
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Actions의 Deploy to GitHub Pages 워크플로를 다시 실행합니다.

댓글 저장소가 연결되지 않은 경우 댓글창은 준비중 상태로 안전하게 표시됩니다. 운영자는 Supabase의 Table Editor에서 댓글을 숨김 또는 삭제할 수 있습니다.
