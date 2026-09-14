import type { Language } from "../i18n";
import {
  getEditorialContinuation as getBaseEditorialContinuation,
  hasEditorialContinuation as hasBaseEditorialContinuation,
  type EditorialContentKind,
  type EditorialContinuation,
} from "./editorialContinuationsBase";

export type { EditorialContentKind, EditorialContinuation } from "./editorialContinuationsBase";

const freedomContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/citizen-as-seed",
    title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
    relationship: "자유와 시민",
    reason: "자유가 시민을 주체로 세우는 조건이라면, 그 시민이 어떻게 공공의 주체로 성장하는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "씨앗언어 전체 보기",
  },
  en: {
    href: "/seed-language/citizen-as-seed",
    title: "A Citizen Is Not a Given Label but a Growing Being",
    relationship: "FREEDOM AND CITIZENSHIP",
    reason: "If freedom makes citizens agents, continue with how those citizens grow into public responsibility.",
    listHref: "/seed-language",
    listLabel: "All SEED Language",
  },
};

const progressContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "자유는 방임이 아니라, 스스로 설 수 있는 힘이다",
    relationship: "진보와 자유",
    reason: "진보를 시민의 자유를 넓히는 태도로 판단했다면, 자유가 방임이나 보호의 반대말을 넘어 시민을 어떻게 주체로 세우는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "씨앗언어 전체 보기",
  },
  en: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "Freedom Is Not Neglect. It Is What Makes Citizens Agents",
    relationship: "PROGRESS AND FREEDOM",
    reason: "If progress is judged by whether it expands citizens' freedom, continue with how freedom makes citizens agents rather than objects of protection.",
    listHref: "/seed-language",
    listLabel: "All SEED Language",
  },
};

const isFreedom = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "freedom-as-citizen-agency";
const isProgress = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-progress";

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  if (isProgress(kind, slug)) return true;
  if (isFreedom(kind, slug)) return true;
  return hasBaseEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  if (isProgress(kind, slug)) return progressContinuation[language];
  if (isFreedom(kind, slug)) return freedomContinuation[language];
  return getBaseEditorialContinuation(kind, slug, language);
}
