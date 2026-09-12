import type { Language } from "../i18n";
import {
  getEditorialContinuation as getLegacyEditorialContinuation,
  hasEditorialContinuation as hasLegacyEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsLegacy";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsLegacy";

const extraContinuations: Record<string, { ko: EditorialContinuation; en: EditorialContinuation }> = {
  "news:media-appeal-justice-press-play": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "함께 읽기",
      reason: "검찰청 해체와 보완수사권 논란이 시민의 권리와 권력 통제 문제로 이어지는 지점을 더 넓게 살펴봅니다.",
      listHref: "/news",
      listLabel: "오늘의 뉴스 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "READ NEXT",
      reason: "Continue with the broader question of how prosecution reform, investigative powers and institutional checks affect citizen rights.",
      listHref: "/news",
      listLabel: "All Today's News",
    },
  },
  "column:civic-groups-are-not-state-vanguard-2026": {
    ko: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "시민의 이름으로 시민을 지배할 때",
      relationship: "시민권력 감시",
      reason: "국가권력과 결합한 시민단체의 도덕적 권위가 어떻게 시민을 압박하는 또 하나의 권력이 될 수 있는지 이어서 살펴봅니다.",
      listHref: "/columns",
      listLabel: "씨앗의 소리 전체 보기",
    },
    en: {
      href: "/columns/when-civic-power-rules-citizens",
      title: "When Citizens Are Ruled in the Name of Citizens",
      relationship: "WATCHING CIVIC POWER",
      reason: "Continue with how the moral authority of civic groups, when joined to state power, can become another form of pressure over citizens.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
  "column:control-power-before-ten-percent-penalty-2026": {
    ko: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "검찰개혁은 권력을 옮겨 심는 일이 아니다",
      relationship: "권력 통제의 관점",
      reason: "기업에 대한 행정 제재의 문제를 넘어 국가의 강제력이 어느 기관으로 이동하고 어떤 절차로 통제돼야 하는지 이어서 살펴봅니다.",
      listHref: "/columns",
      listLabel: "씨앗의 소리 전체 보기",
    },
    en: {
      href: "/columns/prosecution-reform-power-transfer-2026",
      title: "Prosecution Reform Is Not About Moving Power Elsewhere",
      relationship: "CONSTRAINING STATE POWER",
      reason: "Continue from administrative sanctions on companies to the broader question of where state coercion moves and how institutions should constrain it.",
      listHref: "/columns",
      listLabel: "All columns",
    },
  },
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
