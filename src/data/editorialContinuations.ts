import type { Language } from "../i18n";
import {
  getEditorialContinuation as getLegacyEditorialContinuation,
  hasEditorialContinuation as hasLegacyEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsLegacy";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsLegacy";

const extraContinuations: Record<string, { ko: EditorialContinuation; en: EditorialContinuation }> = {
  "briefing:social-economy-fair-competition": {
    ko: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "사회연대경제기본법, 청년몰 실패 사례에서 배우자",
      relationship: "관련 사례",
      reason: "국가가 공급자를 만들어도 시민의 선택과 지속 가능한 시장까지 만들 수 있는 것은 아니라는 점을 청년몰 사례에서 확인합니다.",
      listHref: "/briefings",
      listLabel: "씨앗브리핑 전체 보기",
    },
    en: {
      href: "/briefings/social-solidarity-economy-youth-mall-lessons",
      title: "Korea's Social and Solidarity Economy Act: Lessons from the Youth Mall Failure",
      relationship: "RELATED CASE",
      reason: "See how Korea's Youth Mall experience shows that government can create suppliers without creating durable citizen demand or a sustainable market.",
      listHref: "/briefings",
      listLabel: "All briefings",
    },
  },
};

const keyOf = (kind: EditorialContentKind, slug: string) => `${kind}:${slug}`;

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  return Boolean(extraContinuations[keyOf(kind, slug)]) || hasLegacyEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  const extra = extraContinuations[keyOf(kind, slug)];
  if (extra) return extra[language];
  return getLegacyEditorialContinuation(kind, slug, language);
}
