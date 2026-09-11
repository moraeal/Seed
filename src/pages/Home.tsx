import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import PopularLatest from "../components/PopularLatest";
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
    .slice(0, 9)
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
  const mustReadColumns = journalColumns.slice(1, 4);
  const voiceLeadColumn = journalColumns[4];
  const voiceListColumns = journalColumns.slice(5, 9);
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
      <section className="border-b border-green-deep/15 bg-ivory py-4 sm:py-6 lg:py-7">
        <div className="container-page">
          <div className="mb-3 border-b border-green-deep/15 pb-2.5 sm:mb-4">
            <p className="section-kicker">TODAY&apos;S SEED</p>
            <p className="mt-1 text-[13px] font-medium text-charcoal/55 sm:text-sm">{ko ? "오늘 씨앗이 주목하는 문제" : "What SEED is watching today"}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 xl:grid-cols-[minmax(0,1.62fr)_minmax(340px,.82fr)] xl:gap-7">
            {leadColumn && (
              <article className="group min-w-0"><Link to={`/columns/${leadColumn.slug}`} className="block"><div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} loading="eager" fetchPriority="high" referrerPolicy="no-referrer" className="aspect-[16/8.8] w-full object-cover transition duration-500 group-hover:scale-[1.01] sm:aspect-[16/7.8]" /></div><p className="mt-3 text-[10px] font-black tracking-[.14em] text-green-deep sm:mt-4 sm:text-[11px]">THE VOICE OF SEED</p><h1 className="editorial-title mt-1.5 max-w-5xl break-keep text-balance text-[1.75rem] font-black leading-[1.12] tracking-[-0.038em] text-navy transition group-hover:text-green-mid sm:mt-2 sm:text-[clamp(1.9rem,3.5vw,3rem)] sm:leading-[1.09] sm:tracking-[-0.042em]">{leadColumn.title}</h1><p className="mt-2 line-clamp-2 max-w-4xl text-[14px] leading-6 text-charcoal/64 sm:mt-3 sm:text-[1.05rem] sm:leading-7">{leadColumn.summary}</p><div className="mt-3 flex items-center gap-3 text-[11px] text-charcoal/45 sm:mt-4 sm:text-xs"><time>{leadColumn.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1"><Clock size={12}/>{leadColumn.readMinutes}{ko ? "분 읽기" : " min read"}</span></div></Link></article>
            )}
            <aside className="divide-y divide-green-deep/15 border-y border-green-deep/20 xl:border-t-0" aria-label={ko ? "오늘의 핵심 콘텐츠" : "Today’s essential stories"}>
              {latestNews && <Link to={`/news/${latestNews.slug}`} className="group block py-3.5 sm:py-4 xl:pt-0"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">TODAY&apos;S NEWS</p><h2 className="editorial-title mt-1 break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-1.5 sm:text-xl xl:text-[1.25rem]">{latestNews.title}</h2><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/58 sm:mt-1.5 sm:text-[13px] sm:leading-5.5">{latestNews.summary}</p><span className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-green-deep sm:mt-2.5 sm:text-xs">{ko ? "뉴스 읽기" : "Read news"}<ArrowRight size={13}/></span></Link>}
              {latestBriefing && <Link to={`/briefings/${latestBriefing.slug}`} className="group block py-3.5 sm:py-4"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">SEED CITIZEN BRIEFING</p><h2 className="editorial-title mt-1 break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-1.5 sm:text-xl xl:text-[1.25rem]">{latestBriefing.title}</h2><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/58 sm:mt-1.5 sm:text-[13px] sm:leading-5.5">{latestBriefing.summary}</p><span className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-green-deep sm:mt-2.5 sm:text-xs">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={13}/></span></Link>}
              {seedLanguageArticle && <Link to={`/seed-language/${seedLanguageArticle.slug}`} className="group block py-4 sm:py-5"><div className="flex items-center justify-between gap-3"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">SEED LANGUAGE</p><span className="text-[10px] font-extrabold text-green-deep/60">{ko ? "씨앗언어" : "Featured concept"}</span></div><div className="mt-2.5"><div>{ko ? <><p className="text-2xl font-black tracking-[-.04em] text-green-deep sm:text-[2rem]">{seedLanguageArticle.term}</p><p className="mt-0.5 text-[9px] font-black tracking-[.16em] text-charcoal/42 sm:text-[10px]">DEMOCRACY</p></> : <p className="editorial-title text-2xl font-black tracking-[-.05em] text-green-deep sm:text-3xl">{seedLanguageArticle.term}</p>}</div><h2 className="editorial-title mt-2 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{seedLanguageArticle.title}</h2><p className="mt-1.5 text-[12px] leading-5 text-charcoal/58 sm:text-[13px] sm:leading-5.5">{ko ? "익숙한 말을 다시 묻습니다. 우리가 당연하게 사용하는 말 속의 전제와 권력을 살펴봅니다." : "We question familiar words again, examining the assumptions and power embedded in language we often take for granted."}</p><span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-green-deep sm:text-xs">{ko ? "씨앗언어 읽기" : "Read SEED Language"}<ArrowRight size={13}/></span></div></Link>}
            </aside>
          </div>
        </div>
      </section>

      <section className="py-9 sm:py-16" aria-labelledby="must-read-title"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">STORIES THAT MATTER</p><h2 id="must-read-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "지금 읽어야 할 이야기" : "Stories to read now"}</h2></div><Link to="/columns" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="divide-y divide-green-deep/12 pt-1 md:grid md:grid-cols-3 md:gap-8 md:divide-y-0 md:pt-6">{mustReadColumns.map((column) => <article key={column.slug} className="group py-4 first:pt-3 md:py-0"><Link to={`/columns/${column.slug}`} className="block"><div className="hidden overflow-hidden bg-ivory md:block"><SafeImage src={resolveImageSrc(column.heroImage.src)} alt={column.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.018]" /></div><h3 className="editorial-title break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid md:mt-4 md:text-[1.35rem]">{column.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-charcoal/58 md:mt-2 md:text-sm md:leading-6">{column.summary}</p></Link></article>)}</div></div></section>

      <section className="border-t border-green-deep/12 py-8 sm:py-12"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">SEED CITIZEN BRIEFING</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "시민브리핑" : "Citizen Briefing"}</h2></div><Link to="/briefings" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[.95fr_1.05fr]">{latestBriefing && <Link to={`/briefings/${latestBriefing.slug}`} className="group block">{latestBriefing.images?.[0] && <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(latestBriefing.images[0].src)} alt={latestBriefing.images[0].alt} referrerPolicy="no-referrer" className="aspect-[16/8.8] w-full object-cover transition duration-500 group-hover:scale-[1.015] sm:aspect-[16/7.8]" /></div>}<h3 className="editorial-title mt-3 break-keep text-[1.3rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{latestBriefing.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{latestBriefing.summary}</p></Link>}<div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{briefings.slice(1, 5).map((briefing, index) => <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{briefing.title}</h3><p className="mt-1 line-clamp-1 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-1 sm:text-sm sm:leading-6">{briefing.summary}</p></div></Link>)}</div></div></div></section>

      <section className="border-t border-green-deep/12 py-8 sm:py-12"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">THE VOICE OF SEED</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "씨앗의 소리" : "Opinion & Ideas"}</h2></div><Link to="/columns" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[.86fr_1.14fr] lg:items-start"><div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{voiceListColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{column.title}</h3><p className="mt-1 line-clamp-1 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-1 sm:text-sm sm:leading-6">{column.summary}</p></div></Link>)}</div>{voiceLeadColumn && <Link to={`/columns/${voiceLeadColumn.slug}`} className="group block border-t border-green-deep/12 pt-4 lg:border-t-0 lg:pt-0"><div className="hidden overflow-hidden bg-ivory sm:block"><SafeImage src={resolveImageSrc(voiceLeadColumn.heroImage.src)} alt={voiceLeadColumn.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/7.8] w-full object-cover transition duration-500 group-hover:scale-[1.015]" /></div><h3 className="editorial-title break-keep text-[1.2rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{voiceLeadColumn.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{voiceLeadColumn.summary}</p></Link>}</div></div></section>

      <PopularLatest />

      <section className="border-t border-green-deep/12 py-8 sm:py-12" aria-labelledby="newcomer-title"><div className="container-page"><div className="max-w-2xl"><p className="section-kicker">START HERE</p><h2 id="newcomer-title" className="editorial-title mt-1.5 text-[1.55rem] font-bold text-navy sm:mt-2 sm:text-4xl">{ko ? "처음 오셨다면" : "New to SEED VOICE?"}</h2><p className="mt-2 text-[13px] leading-6 text-charcoal/60 sm:mt-2.5 sm:text-base sm:leading-7">{ko ? "씨앗의 소리가 무엇을 보고 어떤 기준으로 판단하는지, 아래 세 글에서 가장 빠르게 확인할 수 있습니다." : "These three pages are the fastest way to understand what SEED VOICE watches and the standards it uses."}</p></div><div className="mt-5 grid gap-3 sm:mt-5 sm:gap-5 md:grid-cols-3">{newcomerLinks.map((item, index) => <Link key={item.to} to={item.to} className="group flex flex-col justify-between border border-green-deep/12 bg-white p-5 transition hover:-translate-y-0.5 hover:border-green-deep/30 sm:min-h-[190px] sm:p-5"><div><div className="flex items-center justify-between gap-3"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">{item.kicker}</p><span className="text-[11px] font-black text-charcoal/25 sm:text-xs">0{index + 1}</span></div><h3 className="editorial-title mt-3 break-keep text-[1.18rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-4 sm:text-2xl">{item.title}</h3><p className="mt-2 line-clamp-2 text-[13px] leading-5.5 text-charcoal/58 sm:mt-2.5 sm:text-sm sm:leading-6">{item.summary}</p></div><span className="mt-3 inline-flex items-center gap-1 text-[11px] font-extrabold text-green-deep sm:mt-4 sm:text-xs">{ko ? "읽어보기" : "Read"}<ArrowRight size={13}/></span></Link>)}</div></div></section>

      <NewsletterSignup />
    </div>
  );
}
