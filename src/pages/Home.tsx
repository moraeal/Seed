import { ArrowRight, Clock, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { getNewsNewestFirst } from "../data/news";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const heroTextShadow = { textShadow: "0 2px 10px rgba(0,0,0,.82)" };

export default function Home() {
  const { language } = useLanguage();
  const latestBriefing = getAllBriefingsNewestFirst()[0];
  const latestColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 2);
  const latestNews = getNewsNewestFirst().slice(0, 3);
  const briefingImage = latestBriefing.images?.[0];
  const ko = language === "ko";

  return (
    <>
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-8 sm:py-10 lg:grid-cols-[1.55fr_.75fr] lg:gap-8 lg:py-12">
          <Link to={`/briefings/${latestBriefing.slug}`} className="group relative min-h-[520px] overflow-hidden bg-navy shadow-[0_24px_70px_rgba(23,76,58,.16)] sm:min-h-[590px]">
            {briefingImage && <img src={resolveImageSrc(briefingImage.src)} alt={briefingImage.alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.018]" />}
            <div className="absolute inset-0 bg-black/38" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/48 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <span className="inline-flex border border-white/45 bg-green-deep/80 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white backdrop-blur-sm">{ko ? "LATEST CITIZEN BRIEFING" : "LATEST CIVIC BRIEFING"}</span>
              <p className="mt-5 text-xs font-extrabold tracking-[.13em] text-gold-light" style={heroTextShadow}>{latestBriefing.category} · {latestBriefing.date.replace(/-/g, ".")}</p>
              <h1 className="editorial-title mt-3 max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]" style={heroTextShadow}>{latestBriefing.title}</h1>
              <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/95 sm:text-base" style={heroTextShadow}>{latestBriefing.summary}</p>
              <div className="mt-7 flex items-center gap-5 text-xs font-bold text-white" style={heroTextShadow}><span className="flex items-center gap-1.5"><Clock size={14}/>{latestBriefing.readMinutes}분</span><span className="flex items-center gap-1.5">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={15}/></span></div>
            </div>
          </Link>

          <aside className="flex flex-col border-y-2 border-navy bg-paper">
            <div className="flex items-center justify-between border-b border-green-deep/15 px-1 py-5"><div><span className="section-kicker">SEED COLUMN</span><h2 className="editorial-title mt-2 text-2xl font-bold text-navy">{ko ? "최신 칼럼" : "Latest Columns"}</h2></div><Link to="/columns" className="text-link text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div>
            {latestColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className={`group flex flex-1 flex-col justify-center px-1 py-8 ${index === 0 ? "border-b border-green-deep/15" : ""}`}><div className="flex items-center gap-3 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><span>씨드칼럼 {String(column.issue).padStart(2, "0")}</span><time className="text-charcoal/35">{column.date.replace(/-/g, ".")}</time></div><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">{column.title}</h3><p className="mt-4 text-sm font-semibold leading-7 text-charcoal/65">{column.subtitle}</p><span className="mt-6 flex items-center gap-2 text-xs font-bold text-green-deep">{ko ? "칼럼 읽기" : "Read column"}<ArrowRight size={14}/></span></Link>)}
          </aside>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b-2 border-navy pb-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">SEED NEWS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2></div><Link to="/news" className="text-link">{ko ? "뉴스 전체보기" : "View all news"}<ArrowRight size={16}/></Link></div>
          <div className="grid border-b border-green-deep/15 md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {latestNews.map((item, index) => <Link key={item.slug} to={`/news/${item.slug}`} className={`group py-8 ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`}><div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><Newspaper size={14}/>씨드뉴스 {String(item.issue).padStart(2, "0")} · {item.category}</div><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/55">{item.summary}</p><time className="mt-6 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time></Link>)}
          </div>
        </div>
      </section>

    </>
  );
}
