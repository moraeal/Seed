import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

export default function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const briefings = getAllBriefingsNewestFirst().slice(0, 5).map((item) => localizeBriefing(item, language));
  const journalColumns = [...columns]
    .sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue)
    .slice(0, 5)
    .map((item) => localizeColumn(item, language));
  const news = getNewsNewestFirst().slice(0, 5).map((item) => localizeNewsArticle(item, language));
  const seedLanguageArticle = [
    ...seedLanguageEnvironmentArticlesKo.filter((item) => item.slug !== "environment-beyond-camps-deep-read"),
    ...seedLanguageArticlesKo,
  ]
    .filter((item) => item.homeHeroEligible !== false && item.readMinutes < 12)
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  const leadColumn = journalColumns[0];
  const latestNews = news[0];
  const latestBriefing = briefings[0];

  const newcomerLinks = [
    {
      to: "/about",
      kicker: ko ? "씨앗의 소리" : "ABOUT SEED VOICE",
      title: ko ? "왜 이 독립 시민저널을 만들었는가" : "Why this independent civic journal exists",
      summary: ko ? "씨앗의 소리가 무엇을 지키고 무엇을 감시하는지, 저널의 기준과 방향을 먼저 읽어보세요." : "Start with the principles, purpose, and editorial direction behind SEED VOICE.",
    },
    {
      to: "/founding-statement",
      kicker: ko ? "창간정신" : "FOUNDING STATEMENT",
      title: ko ? "자유의 영역을 넓히는 저널" : "A journal that expands the sphere of freedom",
      summary: ko ? "국가와 시민사회의 권력을 함께 감시하고 시민과 기업의 자유를 지키겠다는 창간의 기준입니다." : "The founding standard: scrutinize power in both the state and civil society while defending civic and economic freedom.",
    },
    {
      to: "/publisher-message",
      kicker: ko ? "발행인의 말" : "PUBLISHER'S MESSAGE",
      title: ko ? "어느 작은 시민의 말" : "The words of one ordinary citizen",
      summary: ko ? "전문가나 유명인의 권위가 아니라 한 시민의 질문과 판단에서 시작한 1인 시민미디어의 이야기입니다." : "The story of a one-person civic publication built from one citizen’s questions and judgment.",
    },
  ];

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/15 bg-ivory py-7 sm:py-9 lg:py-10">
        <div className="container-page">
          <div className="mb-5 border-b border-green-deep/15 pb-3">
            <p className="section-kicker">TODAY&apos;S SEED</p>
            <p className="mt-1 text-sm font-medium text-charcoal/55">{ko ? "오늘 씨앗이 주목하는 문제" : "What SEED is watching today"}</p>
          </div>

          <div className="grid gap-7 xl:grid-cols-[minmax(0,1.72fr)_minmax(330px,.78fr)] xl:gap-8">
            {leadColumn && (
              <article className="group min-w-0">
                <Link to={`/columns/${leadColumn.slug}`} className="block">
                  <div className="overflow-hidden bg-green-deep">
                    <SafeImage src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} loading="eager" fetchPriority="high" referrerPolicy="no-referrer" className="aspect-[16/8.7] w-full object-cover transition duration-500 group-hover:scale-[1.012]" />
                  </div>
                  <p className="mt-5 text-[11px] font-black tracking-[.14em] text-green-deep">THE VOICE OF SEED</p>
                  <h1 className="editorial-title mt-2 max-w-5xl break-keep text-balance text-[clamp(2rem,4vw,3.45rem)] font-black leading-[1.08] tracking-[-0.045em] text-navy transition group-hover:text-green-mid">{leadColumn.title}</h1>
                  <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal/64 sm:text-lg sm:leading-8">{leadColumn.summary}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-charcoal/45"><time>{leadColumn.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1"><Clock size={12}/>{leadColumn.readMinutes}{ko ? "분 읽기" : " min read"}</span></div>
                </Link>
              </article>
            )}

            <aside className="divide-y divide-green-deep/15 border-y border-green-deep/20 xl:border-t-0" aria-label={ko ? "오늘의 핵심 콘텐츠" : "Today’s essential stories"}>
              {latestNews && (
                <Link to={`/news/${latestNews.slug}`} className="group block py-5 xl:pt-0">
                  <p className="text-[10px] font-black tracking-[.14em] text-green-deep">TODAY&apos;S NEWS</p>
                  <h2 className="editorial-title mt-2 break-keep text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-2xl xl:text-[1.35rem]">{latestNews.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/58">{latestNews.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-green-deep">{ko ? "뉴스 읽기" : "Read news"}<ArrowRight size={13}/></span>
                </Link>
              )}
              {latestBriefing && (
                <Link to={`/briefings/${latestBriefing.slug}`} className="group block py-5">
                  <p className="text-[10px] font-black tracking-[.14em] text-green-deep">SEED CITIZEN BRIEFING</p>
                  <h2 className="editorial-title mt-2 break-keep text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-2xl xl:text-[1.35rem]">{latestBriefing.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/58">{latestBriefing.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-green-deep">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={13}/></span>
                </Link>
              )}
              {seedLanguageArticle && (
                <Link to={`/seed-language/${seedLanguageArticle.slug}`} className="group block py-5">
                  <p className="text-[10px] font-black tracking-[.14em] text-green-deep">SEED LANGUAGE</p>
                  <div className="mt-2 grid grid-cols-[auto_1fr] items-start gap-4">
                    <span className="editorial-title text-3xl font-black tracking-[-.05em] text-green-deep sm:text-4xl">{seedLanguageArticle.term}</span>
                    <div><h2 className="editorial-title break-keep text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-xl">{seedLanguageArticle.title}</h2><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/58">{seedLanguageArticle.summary}</p></div>
                  </div>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12" aria-labelledby="must-read-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3">
            <div><p className="section-kicker">STORIES THAT MATTER</p><h2 id="must-read-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "지금 읽어야 할 이야기" : "Stories to read now"}</h2></div>
            <Link to="/columns" className="text-link shrink-0">{ko ? "전체보기" : "View all"}<ArrowRight size={15}/></Link>
          </div>
          <div className="grid gap-8 pt-6 md:grid-cols-3">
            {journalColumns.slice(1, 4).map((column) => (
              <article key={column.slug} className="group"><Link to={`/columns/${column.slug}`} className="block"><div className="overflow-hidden bg-ivory"><SafeImage src={resolveImageSrc(column.heroImage.src)} alt={column.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.018]" /></div><h3 className="editorial-title mt-4 break-keep text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.35rem]">{column.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/58">{column.summary}</p></Link></article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-10 sm:py-12">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3"><div><p className="section-kicker">SEED CITIZEN BRIEFING</p><h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "시민브리핑" : "Citizen Briefing"}</h2></div><Link to="/briefings" className="text-link shrink-0">{ko ? "전체보기" : "View all"}<ArrowRight size={15}/></Link></div>
          <div className="grid gap-8 pt-6 lg:grid-cols-[1.15fr_.85fr]">
            {latestBriefing && <Link to={`/briefings/${latestBriefing.slug}`} className="group block">{latestBriefing.images?.[0] && <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(latestBriefing.images[0].src)} alt={latestBriefing.images[0].alt} referrerPolicy="no-referrer" className="aspect-[16/9.5] w-full object-cover transition duration-500 group-hover:scale-[1.015]" /></div>}<h3 className="editorial-title mt-4 break-keep text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">{latestBriefing.title}</h3><p className="mt-2 text-sm leading-7 text-charcoal/60 sm:text-base">{latestBriefing.summary}</p></Link>}
            <div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{briefings.slice(1, 5).map((briefing, index) => <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid grid-cols-[2rem_1fr] gap-3 py-4"><span className="text-sm font-black text-green-deep/55">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{briefing.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-charcoal/55">{briefing.summary}</p></div></Link>)}</div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3"><div><p className="section-kicker">THE VOICE OF SEED</p><h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "씨앗의 소리" : "Opinion & Ideas"}</h2></div><Link to="/columns" className="text-link shrink-0">{ko ? "전체보기" : "View all"}<ArrowRight size={15}/></Link></div>
          <div className="grid gap-8 pt-6 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
            <div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{journalColumns.slice(1, 5).map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid grid-cols-[2rem_1fr] gap-3 py-4"><span className="text-sm font-black text-green-deep/55">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{column.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-charcoal/55">{column.summary}</p></div></Link>)}</div>
            {leadColumn && <Link to={`/columns/${leadColumn.slug}`} className="group block"><div className="overflow-hidden bg-ivory"><SafeImage src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/9.5] w-full object-cover transition duration-500 group-hover:scale-[1.015]" /></div><h3 className="editorial-title mt-4 break-keep text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">{leadColumn.title}</h3><p className="mt-2 text-sm leading-7 text-charcoal/60 sm:text-base">{leadColumn.summary}</p></Link>}
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/12 bg-[#F6F5F0] py-10 sm:py-12" aria-labelledby="seed-language-home-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3"><div><p className="section-kicker">SEED LANGUAGE</p><h2 id="seed-language-home-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "씨앗언어" : "SEED Language"}</h2><p className="mt-2 text-sm text-charcoal/55">{ko ? "익숙한 말을 다시 묻습니다." : "We question familiar words again."}</p></div><Link to="/seed-language" className="text-link shrink-0">{ko ? "전체보기" : "View all"}<ArrowRight size={15}/></Link></div>
          {seedLanguageArticle && <Link to={`/seed-language/${seedLanguageArticle.slug}`} className="group mt-6 grid gap-6 border border-green-deep/12 bg-white p-6 sm:p-8 lg:grid-cols-[.35fr_.65fr] lg:items-center"><div><p className="editorial-title text-5xl font-black tracking-[-.06em] text-green-deep sm:text-6xl">{seedLanguageArticle.term}</p></div><div><h3 className="editorial-title break-keep text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">{seedLanguageArticle.title}</h3><p className="mt-3 text-sm leading-7 text-charcoal/60 sm:text-base">{seedLanguageArticle.summary}</p></div></Link>}
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3"><div><p className="section-kicker">LATEST</p><h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "최신 글" : "Latest"}</h2></div><Link to="/search" className="text-link shrink-0">{ko ? "검색하기" : "Search"}<ArrowRight size={15}/></Link></div>
          <div className="divide-y divide-green-deep/12 pt-2">{news.slice(0, 5).map((item) => <Link key={item.slug} to={`/news/${item.slug}`} className="group grid gap-2 py-4 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-5"><time className="text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time><h3 className="editorial-title break-keep text-lg font-bold text-navy transition group-hover:text-green-mid">{item.title}</h3><span className="text-xs font-extrabold text-green-deep">TODAY&apos;S NEWS</span></Link>)}</div>
        </div>
      </section>

      <section className="border-y border-green-deep/12 bg-ivory py-12 sm:py-16" aria-labelledby="newcomer-title">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="section-kicker">START HERE</p>
            <h2 id="newcomer-title" className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{ko ? "처음 오셨다면" : "New to SEED VOICE?"}</h2>
            <p className="mt-3 text-sm leading-7 text-charcoal/60 sm:text-base">{ko ? "씨앗의 소리가 무엇을 보고 어떤 기준으로 판단하는지, 아래 세 글에서 가장 빠르게 확인할 수 있습니다." : "These three pages are the fastest way to understand what SEED VOICE watches and the standards it uses."}</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {newcomerLinks.map((item, index) => (
              <Link key={item.to} to={item.to} className="group flex min-h-[220px] flex-col justify-between border border-green-deep/12 bg-white p-6 transition hover:-translate-y-0.5 hover:border-green-deep/30">
                <div>
                  <div className="flex items-center justify-between gap-3"><p className="text-[10px] font-black tracking-[.14em] text-green-deep">{item.kicker}</p><span className="text-xs font-black text-charcoal/25">0{index + 1}</span></div>
                  <h3 className="editorial-title mt-5 break-keep text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/58">{item.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-green-deep">{ko ? "읽어보기" : "Read"}<ArrowRight size={13}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="publisher-home-title">
        <div className="container-page">
          <Link to="/publisher-message" className="group grid gap-8 border-y-[3px] border-navy py-8 sm:py-10 lg:grid-cols-[.38fr_.62fr] lg:items-center">
            <div>
              <p className="section-kicker">PUBLISHER'S MESSAGE</p>
              <p className="editorial-title mt-4 text-5xl font-black tracking-[-.06em] text-green-deep sm:text-6xl">{ko ? "한시언" : "Han Si-eon"}</p>
              <p className="mt-2 text-sm font-semibold text-charcoal/50">{ko ? "씨앗의 소리 발행인" : "Publisher, SEED VOICE"}</p>
            </div>
            <div>
              <h2 id="publisher-home-title" className="editorial-title break-keep text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">{ko ? "어느 작은 시민의 말" : "The words of one ordinary citizen"}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/65 sm:text-lg">{ko ? "유명인이나 전문가의 권위가 아니라 한 시민의 질문과 판단으로 세상을 바라보겠습니다. 사실을 확인하고 자유와 책임의 기준으로 권력을 살피며, 완성된 답보다 질문하고 수정하며 성장하는 시민의 목소리를 기록합니다." : "SEED VOICE looks at the world through one citizen’s questions and judgment rather than borrowed authority. It verifies facts, scrutinizes power through freedom and responsibility, and records a civic voice willing to question, correct, and grow."}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-green-deep">{ko ? "발행인의 말 읽기" : "Read the publisher's message"}<ArrowRight size={15}/></span>
            </div>
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
