# Seed Voice content publishing

새 콘텐츠는 가능한 한 `src/content` 아래에 추가한다. 페이지 컴포넌트와 홈페이지 레이아웃은 매번 수정하지 않는다.

## Columns

1. `src/content/columns/<slug>.ts`에 `SeedColumn` 객체를 추가한다.
2. `src/content/columns/index.ts`의 `contentColumns` 배열 최상단에 새 글을 등록한다.
3. 이미지는 `public/images/columns/`에 넣고 `heroImage.src`, `inlineImage.src`, `additionalImages[].src`에서 상대경로로 참조한다.
4. `/columns`, `/columns/:slug`, 메인 대표 칼럼은 `src/data/columns.ts`의 통합 배열을 읽는다.
5. 일반적인 기사 발행 때는 `Home.tsx`, `Columns.tsx`, `ColumnDetail.tsx`, `App.tsx`를 수정하지 않는다.
