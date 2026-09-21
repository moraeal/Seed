import { ArrowRight, Clock, Search as SearchIcon, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { getColumnsNewestFirst, getHotIssueColumnsNewestFirst } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { newsTrackerCases } from "../data/newsTrackerRegistry";
import { getLegislativeCommentaryEdition, legislativeCommentaries } from "../data/legislativeCommentaries";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { getTaxCommentaryEdition, taxCommentaries } from "../data/taxCommentaries";
import { classifyArticleTopics, getTopic, isTopicId, topicTaxonomy, type TopicId } from "../data/topicTaxonomy";
import { useLanguage } from "../i18n";

type SearchItem = {
  key: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  date: string;
  readMinutes?: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
  topics: TopicId[];
};

const normalize = (value: string) => value.normalize("NFKC").toLocaleLowerCase().replace(/\s+/g, " ").trim();
const resolveImageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function SearchPage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const topicParam = searchParams.get("topic");
  const activeTopicId = isTopicId(topicParam) ? topicParam : null;
  const activeTopic = activeTopicId ? getTopic(activeTopicId) : null;
  const [draft, setDraft] = useState(query);

  useEffect(() => setDraft(query), [query]);

  const items = useMemo<SearchItem[]>(() => {
    const withTopics = (item: Omit<SearchItem, "topics">, fallbacks?: TopicId[], explicitTopics?: TopicId[]): SearchItem => ({
      ...item,
      topics: explicitTopics ?? classifyArticleTopics(item, fallbacks),
    });

    const news = getNewsNewestFirst().map((item) => localizeNewsArticle(item, language)).map((item) => ({
      key: `news-${item.slug}`,
      category: ko ? "핫이슈" : "Hot Issues",
      title: item.title,
      summary: item.summary,
      body: [item.subtitle, item.keySentence, item.category, ...item.sections.flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])]), ...item.watchPoints].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/news/${item.slug}`,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
    })).map((item) => withTopics(item));

    const briefings = getAllBriefingsNewestFirst().map((item) => localizeBriefing(item, language)).map((item) => ({
      key: `briefing-${item.slug}`,
      category: ko ? "브리핑" : "Briefings",
      title: item.title,
      summary: item.summary,
      body: [item.category, ...item.content, ...(item.sections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])]), ...item.watchPoints].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/briefings/${item.slug}`,
      imageSrc: item.images?.[0]?.src ?? "",
      imageAlt: item.images?.[0]?.alt ?? "",
    })).map((item) => withTopics(item));

    const columns = getColumnsNewestFirst().map((item) => localizeColumn(item, language)).map((item) => ({
      key: `column-${item.slug}`,
      category: ko ? "칼럼" : "Columns",
      title: item.title,
      summary: item.summary,
      body: [item.subtitle, ...item.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/columns/${item.slug}`,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
      topicIds: item.topicIds,
    })).map(({ topicIds, ...item }) => withTopics(item, undefined, topicIds));

    const hotIssueColumns = getHotIssueColumnsNewestFirst().map((item) => localizeColumn(item, language)).map((item) => ({
      key: `hot-issue-column-${item.slug}`,
      category: ko ? "핫이슈" : "Hot Issues",
      title: item.title,
      summary: item.summary,
      body: [item.subtitle, ...item.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/columns/${item.slug}`,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
    })).map((item) => withTopics(item));

    const seedLanguage = [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo]
      .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map((item) => ({
        key: `language-${item.slug}`,
        category: ko ? "시민언어" : "Glossary",
        title: item.title,
        summary: item.summary,
        body: [item.term, item.subtitle, ...item.keyPoints, ...item.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
        date: item.date,
        readMinutes: item.readMinutes,
        href: `/seed-language/${item.slug}`,
        imageSrc: item.heroImage.src,
        imageAlt: item.heroImage.alt,
      })).map((item) => withTopics(item, ["politics-language"]));

    const trackers = newsTrackerCases.map((item) => withTopics({
      key: `tracker-${item.slug}`,
      category: ko ? "시민감시" : "Civic Watch",
      title: item.title[language],
      summary: item.summary[language],
      body: [item.sourceBasis[language], ...(item.keyChanges ?? []).map((change) => change.text[language]), ...(item.timeline ?? []).flatMap((entry) => [entry.title[language], entry.description[language]])].join(" "),
      date: item.updatedAt,
      href: `/monitoring/${item.slug}`,
      imageSrc: item.heroImage?.src ?? "",
      imageAlt: item.heroImage?.alt[language] ?? item.title[language],
    }, ["public-interest-watch"]));

    const legislative = legislativeCommentaries.map((item) => {
      const edition = getLegislativeCommentaryEdition(item, language);
      return withTopics({
        key: `legislative-commentary-${item.slug}`,
        category: ko ? "입법감시" : "Legislative Watch",
        title: edition.title,
        summary: edition.summary,
        body: [edition.subtitle, ...edition.keyPoints, ...edition.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
        date: item.date,
        readMinutes: item.readMinutes,
        href: `/monitoring/legislation/commentary/${item.slug}`,
        imageSrc: item.heroSrc,
        imageAlt: edition.heroAlt,
      }, ["legislation-rights"]);
    });

    const tax = taxCommentaries.map((item) => {
      const edition = getTaxCommentaryEdition(item, language);
      return withTopics({
        key: `tax-commentary-${item.slug}`,
        category: ko ? "세금감시" : "Tax Watch",
        title: edition.title,
        summary: edition.summary,
        body: [edition.subtitle, ...edition.keyPoints, ...edition.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
        date: item.date,
        readMinutes: item.readMinutes,
        href: `/monitoring/tax/commentary/${item.slug}`,
        imageSrc: item.heroSrc,
        imageAlt: edition.heroAlt,
      }, ["tax-finance"]);
    });

    return [...news, ...hotIssueColumns, ...trackers, ...briefings, ...columns, ...seedLanguage, ...legislative, ...tax];
  }, [ko, language]);

  const results = useMemo(() => {
    const tokens = normalize(query).split(" ").filter(Boolean);
    if (!tokens.length) return [];

    return items
      .map((item) => {
        const title = normalize(item.title);
        const summary = normalize(item.summary);
        const category = normalize(item.category);
        const body = normalize(item.body);
        const searchable = `${title} ${summary} ${category} ${body}`;
        if (!tokens.every((token) => searchable.includes(token))) return null;
        const score = tokens.reduce((total, token) => total
          + (title.includes(token) ? 12 : 0)
          + (category.includes(token) ? 5 : 0)
          + (summary.includes(token) ? 4 : 0)
          + (body.includes(token) ? 1 : 0), 0);
        return { item, score };
      })
      .filter((result): result is { item: SearchItem; score: number } => Boolean(result))
      .sort((a, b) => b.score - a.score || b.item.date.localeCompare(a.item.date))
      .map(({ item }) => item);
  }, [items, query]);

  const topicResults = useMemo(() => activeTopicId
    ? items.filter((item) => item.topics.includes(activeTopicId)).sort((a, b) => b.date.localeCompare(a.date))
    : [], [activeTopicId, items]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = draft.trim();
    setSearchParams(nextQuery ? { q: nextQuery } : {});
  };

  return (
    <div className="bg-paper pb-16">
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page py-6 sm:py-8">
          <span className="section-kicker">{activeTopic ? "EXPLORE SEED VOICE" : "SEARCH SEED VOICE"}</span>
          <h1 className="editorial-title mt-2 text-[1.8rem] font-bold text-navy sm:text-[2.25rem]">{activeTopic ? (ko ? "주제별 찾아보기" : "Browse by Topic") : (ko ? "통합검색" : "Search")}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/60 sm:text-base sm:leading-7">{activeTopic
            ? (ko ? "관심 주제를 선택하면 관련 기사와 감시 기록을 최신순으로 모아볼 수 있습니다." : "Choose a topic to browse related reporting, commentary and watch records in one place.")
            : (ko ? "핫이슈, 브리핑, 칼럼, 시민감시와 시민언어의 제목과 본문을 함께 검색합니다." : "Search titles and full text across Hot Issues, Briefings, Columns, Civic Watch and the Glossary.")}</p>

          {activeTopic ? (
            <nav className="mt-5 flex flex-wrap gap-2" aria-label={ko ? "기사 주제" : "Article topics"}>
              {topicTaxonomy.map((topic) => {
                const selected = topic.id === activeTopicId;
                return <Link key={topic.id} to={`/search?topic=${topic.id}`} aria-current={selected ? "page" : undefined} className={`rounded-full px-3.5 py-2 text-xs font-extrabold transition sm:text-sm ${selected ? "bg-green-deep text-white" : "bg-white text-charcoal/65 hover:bg-green-pale hover:text-green-deep"}`}>{topic.label[language]}</Link>;
              })}
            </nav>
          ) : (
            <form onSubmit={submit} role="search" className="mt-5 flex max-w-3xl items-stretch border-2 border-green-deep bg-white focus-within:ring-2 focus-within:ring-gold/60">
              <SearchIcon className="ml-4 self-center text-green-deep" size={20} aria-hidden="true"/>
              <label htmlFor="site-search" className="sr-only">{ko ? "검색어" : "Search query"}</label>
              <input id="site-search" type="search" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={ko ? "찾고 싶은 주제나 단어를 입력하세요" : "Enter a topic or keyword"} autoComplete="off" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-navy outline-none placeholder:text-charcoal/40"/>
              {draft && <button type="button" onClick={() => setDraft("")} className="grid w-11 place-items-center text-charcoal/45 hover:text-green-deep" aria-label={ko ? "검색어 지우기" : "Clear search"}><X size={18}/></button>}
              <button type="submit" className="min-w-20 bg-green-deep px-5 text-sm font-extrabold text-white transition hover:bg-green-mid sm:min-w-24">{ko ? "검색" : "Search"}</button>
            </form>
          )}
        </div>
      </section>

      <section className="container-page pt-7 sm:pt-8" aria-labelledby="search-results-heading">
        {activeTopic ? (
          <>
            <div className="flex items-end justify-between gap-4 border-b-2 border-navy pb-3" aria-live="polite">
              <div><h2 id="search-results-heading" className="text-xl font-extrabold text-navy sm:text-2xl">{activeTopic.label[language]}</h2><p className="mt-1 text-sm text-charcoal/55">{activeTopic.description[language]}</p></div>
              <span className="shrink-0 text-sm font-extrabold text-green-deep">{topicResults.length}{ko ? "건" : " results"}</span>
            </div>
            {topicResults.length ? (
              <div className="divide-y divide-green-deep/15">{topicResults.map((item) => (
                <article key={item.key}><Link to={item.href} className="group grid gap-5 py-6 transition hover:bg-green-pale/50 sm:grid-cols-[190px_minmax(0,1fr)] sm:px-3">
                  {item.imageSrc ? <div className="overflow-hidden bg-ivory"><SafeImage src={resolveImageSrc(item.imageSrc)} alt={item.imageAlt} loading="lazy" referrerPolicy="no-referrer" className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"/></div> : <div className="hidden bg-green-pale sm:block" aria-hidden="true"/>}
                  <div className="min-w-0 self-center"><div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="font-extrabold text-green-mid">{item.category}</span><time>{item.date.replace(/-/g, ".")}</time>{item.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={13}/>{item.readMinutes}{ko ? "분" : " min"}</span>}</div><h3 className="editorial-title mt-2 text-balance text-[1.35rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-2xl">{item.title}</h3><p className="mt-2 line-clamp-2 text-base leading-7 text-charcoal/62">{item.summary}</p><div className="mt-3 flex flex-wrap gap-1.5">{item.topics.map((topicId) => <span key={topicId} className="rounded-full bg-green-pale px-2.5 py-1 text-[11px] font-bold text-green-deep">{getTopic(topicId).label[language]}</span>)}</div></div>
                </Link></article>
              ))}</div>
            ) : <div className="py-12 text-center"><h3 className="text-xl font-extrabold text-navy">{ko ? "이 주제의 기사를 준비하고 있습니다" : "Articles for this topic are being prepared"}</h3></div>}
          </>
        ) : !query ? (
          <div className="border-t-2 border-navy py-14 text-center">
            <SearchIcon className="mx-auto text-green-deep/40" size={34}/>
            <h2 id="search-results-heading" className="mt-4 text-xl font-extrabold text-navy">{ko ? "검색어를 입력해주세요" : "Enter a search term"}</h2>
            <p className="mt-2 text-sm leading-6 text-charcoal/55">{ko ? "띄어쓰기로 여러 단어를 입력하면 모든 단어가 포함된 글을 찾습니다." : "Use multiple words to find articles containing every term."}</p>
          </div>
        ) : (
          <>
            <div className="flex items-end justify-between gap-4 border-b-2 border-navy pb-4" aria-live="polite">
              <h2 id="search-results-heading" className="text-xl font-extrabold text-navy sm:text-2xl">‘{query}’ {ko ? "검색 결과" : "results"}</h2>
              <span className="shrink-0 text-sm font-extrabold text-green-deep">{results.length}{ko ? "건" : " results"}</span>
            </div>

            {results.length ? (
              <div className="divide-y divide-green-deep/15">
                {results.map((item) => (
                  <article key={item.key}>
                    <Link to={item.href} className="group grid gap-5 py-6 transition hover:bg-green-pale/50 sm:grid-cols-[190px_minmax(0,1fr)] sm:px-3">
                      {item.imageSrc ? <div className="overflow-hidden bg-ivory"><SafeImage src={resolveImageSrc(item.imageSrc)} alt={item.imageAlt} loading="lazy" referrerPolicy="no-referrer" className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"/></div> : <div className="hidden bg-green-pale sm:block" aria-hidden="true"/>}
                      <div className="min-w-0 self-center">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="font-extrabold text-green-mid">{item.category}</span><time>{item.date.replace(/-/g, ".")}</time>{item.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={13}/>{item.readMinutes}{ko ? "분" : " min"}</span>}</div>
                        <h3 className="editorial-title mt-2 text-balance text-[1.35rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-2xl">{item.title}</h3>
                        <p className="mt-2 line-clamp-2 text-base leading-7 text-charcoal/62">{item.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">{item.topics.map((topicId) => <span key={topicId} className="rounded-full bg-green-pale px-2.5 py-1 text-[11px] font-bold text-green-deep">{getTopic(topicId).label[language]}</span>)}</div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-14 text-center">
                <h3 className="text-xl font-extrabold text-navy">{ko ? "검색 결과가 없습니다" : "No results found"}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/55">{ko ? "검색어를 줄이거나 다른 표현으로 다시 찾아보세요." : "Try fewer words or a different phrase."}</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
