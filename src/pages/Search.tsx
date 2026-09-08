import { ArrowRight, Clock, Search as SearchIcon, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { getColumnsNewestFirst } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";

type SearchItem = {
  key: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  date: string;
  readMinutes: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const normalize = (value: string) => value.normalize("NFKC").toLocaleLowerCase().replace(/\s+/g, " ").trim();
const resolveImageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function SearchPage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const [draft, setDraft] = useState(query);

  useEffect(() => setDraft(query), [query]);

  const items = useMemo<SearchItem[]>(() => {
    const news = getNewsNewestFirst().map((item) => localizeNewsArticle(item, language)).map((item) => ({
      key: `news-${item.slug}`,
      category: ko ? "오늘의뉴스" : "Today's News",
      title: item.title,
      summary: item.summary,
      body: [item.subtitle, item.keySentence, item.category, ...item.sections.flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])]), ...item.watchPoints].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/news/${item.slug}`,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
    }));

    const briefings = getAllBriefingsNewestFirst().map((item) => localizeBriefing(item, language)).map((item) => ({
      key: `briefing-${item.slug}`,
      category: ko ? "씨앗브리핑" : "SEED Briefing",
      title: item.title,
      summary: item.summary,
      body: [item.category, ...item.content, ...(item.sections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])]), ...item.watchPoints].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/briefings/${item.slug}`,
      imageSrc: item.images?.[0]?.src ?? "",
      imageAlt: item.images?.[0]?.alt ?? "",
    }));

    const columns = getColumnsNewestFirst().map((item) => localizeColumn(item, language)).map((item) => ({
      key: `column-${item.slug}`,
      category: ko ? "씨앗의소리" : "Voice of the Seed",
      title: item.title,
      summary: item.summary,
      body: [item.subtitle, ...item.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
      date: item.date,
      readMinutes: item.readMinutes,
      href: `/columns/${item.slug}`,
      imageSrc: item.heroImage.src,
      imageAlt: item.heroImage.alt,
    }));

    const seedLanguage = [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo]
      .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map((item) => ({
        key: `language-${item.slug}`,
        category: ko ? "씨앗언어" : "SEED Language",
        title: item.title,
        summary: item.summary,
        body: [item.term, item.subtitle, ...item.keyPoints, ...item.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(" "),
        date: item.date,
        readMinutes: item.readMinutes,
        href: `/seed-language/${item.slug}`,
        imageSrc: item.heroImage.src,
        imageAlt: item.heroImage.alt,
      }));

    return [...news, ...briefings, ...columns, ...seedLanguage];
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

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = draft.trim();
    setSearchParams(nextQuery ? { q: nextQuery } : {});
  };

  return (
    <div className="bg-paper pb-20">
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page py-10 sm:py-14">
          <span className="section-kicker">SEARCH SEED VOICE</span>
          <h1 className="editorial-title mt-3 text-4xl font-bold text-navy sm:text-5xl">{ko ? "통합검색" : "Search"}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "오늘의뉴스, 씨앗브리핑, 씨앗의소리와 씨앗언어의 제목과 본문을 함께 검색합니다." : "Search titles and full text across Today's News, SEED Briefings, Voice of the Seed and SEED Language."}</p>

          <form onSubmit={submit} role="search" className="mt-7 flex max-w-3xl items-stretch border-2 border-green-deep bg-white focus-within:ring-2 focus-within:ring-gold/60">
            <SearchIcon className="ml-4 self-center text-green-deep" size={22} aria-hidden="true"/>
            <label htmlFor="site-search" className="sr-only">{ko ? "검색어" : "Search query"}</label>
            <input id="site-search" type="search" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={ko ? "찾고 싶은 주제나 단어를 입력하세요" : "Enter a topic or keyword"} autoComplete="off" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-base text-navy outline-none placeholder:text-charcoal/40"/>
            {draft && <button type="button" onClick={() => setDraft("")} className="grid w-11 place-items-center text-charcoal/45 hover:text-green-deep" aria-label={ko ? "검색어 지우기" : "Clear search"}><X size={18}/></button>}
            <button type="submit" className="min-w-20 bg-green-deep px-5 text-sm font-extrabold text-white transition hover:bg-green-mid sm:min-w-24">{ko ? "검색" : "Search"}</button>
          </form>
        </div>
      </section>

      <section className="container-page pt-9" aria-labelledby="search-results-heading">
        {!query ? (
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
                        <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="font-extrabold text-green-mid">{item.category}</span><time>{item.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1"><Clock size={13}/>{item.readMinutes}{ko ? "분" : " min"}</span></div>
                        <h3 className="editorial-title mt-2 text-balance text-[1.35rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-2xl">{item.title}</h3>
                        <p className="mt-2 line-clamp-2 text-base leading-7 text-charcoal/62">{item.summary}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-extrabold text-green-deep">{ko ? "글 읽기" : "Read article"}<ArrowRight size={15}/></span>
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
