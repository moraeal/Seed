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
    listLabel: "용어해설 전체 보기",
  },
  en: {
    href: "/seed-language/citizen-as-seed",
    title: "A Citizen Is Not a Given Label but a Growing Being",
    relationship: "FREEDOM AND CITIZENSHIP",
    reason: "If freedom makes citizens agents, continue with how those citizens grow into public responsibility.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const progressContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "자유는 방임이 아니라, 스스로 설 수 있는 힘이다",
    relationship: "진보와 자유",
    reason: "진보를 시민의 자유를 넓히는 태도로 판단했다면, 자유가 방임이나 보호의 반대말을 넘어 시민을 어떻게 주체로 세우는지 이어서 살펴봅니다.",
    listHref: "/seed-language",
    listLabel: "용어해설 전체 보기",
  },
  en: {
    href: "/seed-language/freedom-as-citizen-agency",
    title: "Freedom Is Not Neglect. It Is What Makes Citizens Agents",
    relationship: "PROGRESS AND FREEDOM",
    reason: "If progress is judged by whether it expands citizens' freedom, continue with how freedom makes citizens agents rather than objects of protection.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const discourseContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "선진화를 위해서는 시민화가 우선이다",
    relationship: "담론과 시민화",
    reason: "선진화 담론이 시민의 실천과 어떻게 만날 수 있는지, 시민화를 하나의 판단 잣대로 제안한 글로 이어갑니다.",
    listHref: "/seed-language",
    listLabel: "용어해설 전체 보기",
  },
  en: {
    href: "/columns/citizenization-before-advancement-2026",
    title: "Citizenization Must Come Before Advancement",
    relationship: "DISCOURSE AND CITIZENIZATION",
    reason: "Continue with how the advancement discourse can meet civic practice, and why citizenization is offered as one standard of judgment.",
    listHref: "/seed-language",
    listLabel: "All Glossary entries",
  },
};

const farmlandOwnershipContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/news/farmland-census-disposal-orders-tracker",
    title: "농지 27%는 누가 사나",
    relationship: "사실과 절차 추적",
    reason: "칼럼이 제기한 질문에 이어 전수조사 수치, 처분 절차, 연간 25% 이행강제금과 후속 조치를 자료별로 확인합니다.",
    listHref: "/columns",
    listLabel: "칼럼 전체 보기",
  },
  en: {
    href: "/news/farmland-census-disposal-orders-tracker",
    title: "Who Will Buy the 27% of Farmland Flagged?",
    relationship: "TRACK THE FACTS AND PROCESS",
    reason: "Continue from the column's questions to a source-by-source tracker of the survey figures, disposal process, annual 25% enforcement charge and next steps.",
    listHref: "/columns",
    listLabel: "All columns",
  },
};

const farmlandTrackerContinuation: Record<Language, EditorialContinuation> = {
  ko: {
    href: "/columns/farmland-ownership-without-an-exit",
    title: "소유권은 남았지만 소유할 수 없다",
    relationship: "씨앗의 소리",
    reason: "농지 전수조사의 숫자와 절차를 확인했다면, 팔리지 않는 농지와 반복되는 이행강제금이 시민의 재산권에 남기는 문제를 이어서 읽습니다.",
    listHref: "/news",
    listLabel: "핫이슈 전체 보기",
  },
  en: {
    href: "/columns/farmland-ownership-without-an-exit",
    title: "Ownership on Paper, but No Practical Right to Keep It",
    relationship: "SEED VOICE",
    reason: "After reviewing the census figures and enforcement process, continue with what unsellable farmland and recurring charges mean for citizens' property rights.",
    listHref: "/news",
    listLabel: "All Hot Issues",
  },
};

const isFreedom = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "freedom-as-citizen-agency";
const isProgress = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "what-is-true-progress";
const isDiscourse = (kind: EditorialContentKind, slug: string) => kind === "seed-language" && slug === "discourse-many-words-no-direction";
const isFarmlandOwnership = (kind: EditorialContentKind, slug: string) => kind === "column" && slug === "farmland-ownership-without-an-exit";
const isFarmlandTracker = (kind: EditorialContentKind, slug: string) => kind === "monitoring" && slug === "farmland-census-disposal-orders-tracker";

export function hasEditorialContinuation(kind: EditorialContentKind, slug: string) {
  if (isFarmlandTracker(kind, slug)) return true;
  if (isFarmlandOwnership(kind, slug)) return true;
  if (isDiscourse(kind, slug)) return true;
  if (isProgress(kind, slug)) return true;
  if (isFreedom(kind, slug)) return true;
  return hasBaseEditorialContinuation(kind, slug);
}

export function getEditorialContinuation(kind: EditorialContentKind, slug: string, language: Language): EditorialContinuation | undefined {
  if (isFarmlandTracker(kind, slug)) return farmlandTrackerContinuation[language];
  if (isFarmlandOwnership(kind, slug)) return farmlandOwnershipContinuation[language];
  if (isDiscourse(kind, slug)) return discourseContinuation[language];
  if (isProgress(kind, slug)) return progressContinuation[language];
  if (isFreedom(kind, slug)) return freedomContinuation[language];
  return getBaseEditorialContinuation(kind, slug, language);
}
