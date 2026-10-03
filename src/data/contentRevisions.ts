export type ContentRevision = {
  version: string;
  date: string;
  titleKo: string;
  titleEn: string;
  detailKo: string;
  detailEn: string;
  kind: "content" | "system";
};

const revisionStartDate = "2026-09-04";

const recordedRevisions: Record<string, ContentRevision[]> = {
  "farmland-ownership-without-an-exit": [
  {
    "version": "v1.1",
    "date": "2026-10-03",
    "titleKo": "정부 설명 반영 · 수정판",
    "titleEn": "Revised following government explanation",
    "detailKo": "강제금 조건과 처분 유예·의무 소멸을 추가하고, 적법한 구두계약과 2021년 도입 시점을 명시했습니다. 의심 면적과 공급 면적의 배수·가정 비교를 삭제했습니다. 최초 게시일을 유지하고 본문 첫머리에 변경 전후와 후속 브리핑을 공개했습니다.",
    "detailEn": "Added charge conditions, deferral and extinguishment, lawful oral leasing and the 2021 origin. Removed the area ratio and hypothetical comparison. Preserved the original publication date and added a visible revision notice linking the follow-up briefing.",
    "kind": "content"
  }
],
  "farmland-census-elderly-farmers-retirement": [
  {
    "version": "v1.1",
    "date": "2026-10-03",
    "titleKo": "정부 설명 반영 · 수정판",
    "titleEn": "Revised following government explanation",
    "detailKo": "기존의 유예 보완책 관련 설명을 수정해 기존 법의 유예·의무 소멸과 추가 입법이 필요한 양성화 계획을 구분했습니다. 인용한 농지 칼럼의 강제금 조건도 보완했습니다. 최초 게시일과 소득 분석은 유지했습니다.",
    "detailEn": "Separated existing statutory deferral and extinguishment from regularization measures needing additional legislation. Clarified the charge conditions in the referenced column; preserved the publication date and income analysis.",
    "kind": "content"
  }
],
  "monitoring-community-chest-of-korea": [
    {
      version: "v1.1",
      date: "2026-09-10",
      titleKo: "공식 공시 재검증 및 심층연구 연결",
      titleEn: "Official figures rechecked and deep research linked",
      detailKo: "차기이월 순자산과 지정기탁 비중을 공식 확인값으로 갱신하고, 법정 운영비 기준과 별도 분석지표를 구분했습니다. 팩트체크 개정판 심층연구를 연결했습니다.",
      detailEn: "Carryover and donor-restricted shares were updated as confirmed figures, and the statutory operating-cost test was separated from alternative analysis. A fact-checked deep research edition was linked.",
      kind: "content",
    },
  ],
};

export function getContentRevisions(postSlug: string, publishedDate: string): ContentRevision[] {
  const revisions: ContentRevision[] = [
    {
      version: "v1.0",
      date: publishedDate,
      titleKo: "최초 게시",
      titleEn: "Initial publication",
      detailKo: "콘텐츠가 처음 공개되었습니다.",
      detailEn: "The content was first published.",
      kind: "content",
    },
  ];

  if (publishedDate <= revisionStartDate) {
    revisions.push({
      version: "기록 체계",
      date: revisionStartDate,
      titleKo: "공개 수정 기록 체계 적용",
      titleEn: "Public revision log introduced",
      detailKo: "이 날짜 이후 본문이 바뀌면 변경한 부분과 이유를 이곳에 기록합니다. 본문 내용이 수정되었다는 뜻은 아닙니다.",
      detailEn: "From this date, any change to the article and its reason will be recorded here. This entry does not mean the article itself was changed.",
      kind: "system",
    });
  }

  return [...revisions, ...(recordedRevisions[postSlug] || [])].sort((a, b) => b.date.localeCompare(a.date));
}
