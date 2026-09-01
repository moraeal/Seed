import { getAllBriefingsNewestFirst } from "./allBriefings";
import { columns } from "./columns";
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

export function resolveDiscussionSource(slug: string): DiscussionSource {
  return allSources.find((item) => item.slug === slug) ?? {
    slug,
    type: "기타 콘텐츠",
    title: slug,
    path: "/forum",
  };
}
