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

const discourseContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "선진화를 위해서는 시민화가 우선이다",
    relationship: "담론과 시민화",
    reason: "선진화 담론이 시민의 실천과 어떻게 만날 수 있는지, 시민화를 하나의 판단 잣대로 제안한 글로 이어갑니다.",
    listHref: "/seed-language",
    listLabel: "씨앗언어 전체 보기",
  },
  en: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "Citizenization Must Come Before Advancement",
    relationship: "DISCOURSE AND CITIZENIZATION",
    reason: "Continue with how the advancement discourse can meet civic practice, and why citizenization is offered as one standard of judgment.",
    listHref: "/seed-language",
    listLabel: "All SEED Language",
  },
};

const isFreedom = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "freedom-as-citizen-agency";
const isProgress = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-progress";
const isDiscourse = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "discourse-many-words-no-direction";

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  if (isDiscourse(kind, slug)) return true;
  if (isProgress(kind, slug)) return true;
  if (isFreedom(kind, slug)) return true;
  return hasBaseEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  if (isDiscourse(kind, slug)) return discourseContinuation[language];
  if (isProgress(kind, slug)) return progressContinuation[language];
  if (isFreedom(kind, slug)) return freedomContinuation[language];
  return getBaseEditorialContinuation(kind, slug, language);
}
