import type { Language } from "../i18n";
import { getAllBriefingsNewestFirst } from "./allBriefings";
import { columns } from "./columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "./localizedContent";
import { newsArticles } from "./news";

export type DiscussionSource = {
  slug: string;
  type: string;
  title: string;
  path: string;
};

const staticSources: DiscussionSource[] = [
  { slug: "monitoring", type: "시민감시", title: "시민감시", path: "/monitoring" },
  { slug: "proposals", type: "시민제안", title: "시민제안", path: "/proposals" },
  { slug: "experiments", type: "시민실험", title: "시민실험", path: "/experiments" },
  { slug: "academy", type: "아카데미", title: "씨드 아카데미", path: "/academy" },
];

const allSources: DiscussionSource[] = [
  ...getAllBriefingsNewestFirst().map((item) => ({ slug: item.slug, type: "시민브리핑", title: item.title, path: `/briefings/${item.slug}` })),
  ...columns.map((item) => ({ slug: item.slug, type: "씨드칼럼", title: item.title, path: `/columns/${item.slug}` })),
  ...newsArticles.map((item) => ({ slug: item.slug, type: "씨드뉴스", title: item.title, path: `/news/${item.slug}` })),
  ...staticSources,
];

export const discussionSourceTypes = ["전체", "시민브리핑", "씨드칼럼", "씨드뉴스", "시민감시", "시민제안", "시민실험", "아카데미"];

const englishTypes: Record<string, string> = {
  "전체": "All",
  "시민브리핑": "Civic Briefings",
  "씨드칼럼": "SEED Columns",
  "씨드뉴스": "SEED News",
  "시민감시": "Civic Watch",
  "시민제안": "Citizen Proposals",
  "시민실험": "Civic Experiments",
  "아카데미": "Academy",
  "기타 콘텐츠": "Other",
};

export const discussionSourceTypeLabel = (type: string, language: Language) => language === "en" ? (englishTypes[type] ?? type) : type;

export function resolveDiscussionSource(slug: string, language: Language = "ko"): DiscussionSource {
  const source = allSources.find((item) => item.slug === slug) ?? {
    slug,
    type: "기타 콘텐츠",
    title: slug,
    path: "/forum",
  };

  if (language !== "en") return source;

  const briefing = getAllBriefingsNewestFirst().find((item) => item.slug === slug);
  if (briefing) {
    const localized = localizeBriefing(briefing, language);
    return { ...source, type: englishTypes["시민브리핑"], title: localized.title };
  }

  const column = columns.find((item) => item.slug === slug);
  if (column) {
    const localized = localizeColumn(column, language);
    return { ...source, type: englishTypes["씨드칼럼"], title: localized.title };
  }

  const news = newsArticles.find((item) => item.slug === slug);
  if (news) {
    const localized = localizeNewsArticle(news, language);
    return { ...source, type: englishTypes["씨드뉴스"], title: localized.title };
  }

  const staticEnglish: Record<string, string> = {
    monitoring: "Civic Watch",
    proposals: "Citizen Proposals",
    experiments: "Civic Experiments",
    academy: "SEED Academy",
  };

  return {
    ...source,
    type: discussionSourceTypeLabel(source.type, language),
    title: staticEnglish[slug] ?? source.title,
  };
}
