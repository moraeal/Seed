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
