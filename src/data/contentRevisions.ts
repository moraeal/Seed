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

const recordedRevisions: Record<string, ContentRevision[]> = {};

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

