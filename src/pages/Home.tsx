import { ArrowRight, Clock, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
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
  const journalColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 3).map((item) => localizeColumn(item, language));
  const news = getNewsNewestFirst().slice(0, 5).map((item) => localizeNewsArticle(item, language));
  const leadColumn = journalColumns[0];
  const leadBriefing = briefings[0];
  const leadBriefingImage = leadBriefing?.images?.[0];

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/20 bg-ivory py-7 sm:py-10">
        <div className="container-page grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(350px,.72fr)] xl:gap-10">
          <div>
            {leadColumn && (
              <article className="border-t-[3px] border-navy">
                <Link to={`/columns/${leadColumn.slug}`} className="group -mx-4 block px-4 pb-5 pt-4 transition-colors hover:bg-green-pale/60">
                  <div className="flex items-center justify-between gap-4 text-[11px] font-extrabold tracking-[.15em] text-green-mid">
                    <span>SEED'S VOICE · {ko ? "씨앗의 소리" : "VOICE OF THE SEED"}</span>
                    <time className="tracking-normal text-charcoal/40">{leadColumn.date.replace(/-/g, ".")}</time>
                  </div>
                  <div className="mt-4 overflow-hidden bg-navy">
                    <img src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} className="aspect-[16/7.7] w-full object-cover transition duration-700 group-hover:scale-[1.018]" />
                  </div>
                  <h1 className="editorial-title mt-5 max-w-5xl text-[2.15rem] font-bold leading-[1.1] text-navy transition group-hover:text-green-mid sm:text-[3.15rem] lg:text-[3.5rem]">{leadColumn.title}</h1>
                  <p className="mt-4 max-w-4xl text-base font-medium leading-7 text-charcoal/65 sm:text-[17px] sm:leading-8">{leadColumn.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "씨앗의 소리 읽기" : "Read SEED's voice"}<ArrowRight size={16}/></span>
                </Link>
              </article>
            )}

            <div className="mt-8 grid border-y border-green-deep/20 sm:grid-cols-2 sm:divide-x sm:divide-green-deep/20">
              {news.slice(0, 2).map((item) => (
                <Link key={item.slug} to={`/news/${item.slug}`} className="group grid gap-4 border-b border-green-deep/15 px-4 py-5 transition-colors hover:bg-green-pale/70 last:border-b-0 sm:grid-cols-[112px_1fr] sm:border-b-0 sm:px-5">
                  <img src={resolveImageSrc(item.heroImage.src)} alt={item.heroImage.alt} className="aspect-[4/3] w-full object-cover sm:h-[84px]" />
                  <div><span className="text-[10px] font-extrabold tracking-[.12em] text-green-mid">{item.category}</span><h2 className="editorial-title mt-1.5 text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h2></div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="self-start bg-green-deep text-white xl:sticky xl:top-6" aria-labelledby="civic-briefing-heading">
            <div className="border-b border-white/20 px-6 py-5 sm:px-7">
              <p className="text-[10px] font-extrabold tracking-[.2em] text-gold-light">FACTS · CONTEXT · JUDGMENT</p>
              <div className="mt-2 flex items-end justify-between gap-4"><h2 id="civic-briefing-heading" className="editorial-title text-3xl font-bold">CIVIC BRIEFING</h2><Link to="/briefings" className="inline-flex items-center gap-1 text-xs font-bold text-white/65 hover:text-white">{ko ? "전체보기" : "View all"}<ArrowRight size={13}/></Link></div>
            </div>

            {briefings.slice(0, 3).map((briefing, index) => (
              <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className={`group block px-6 py-6 transition hover:bg-white/[.055] sm:px-7 ${index < 2 ? "border-b border-white/15" : ""}`}>
                {index === 0 && leadBriefingImage && <img src={resolveImageSrc(leadBriefingImage.src)} alt={leadBriefingImage.alt} className="mb-5 aspect-[16/9] w-full object-cover" />}
                <div className="flex items-center gap-3 text-[10px] font-extrabold tracking-[.13em] text-gold-light"><span>{ko ? `시민브리핑 ${String(briefing.issueNumber ?? index + 1).padStart(2, "0")}` : `CIVIC BRIEFING ${String(briefing.issueNumber ?? index + 1).padStart(2, "0")}`}</span><time className="tracking-normal text-white/38">{briefing.date.replace(/-/g, ".")}</time></div>
                <h3 className={`editorial-title mt-2 font-bold leading-snug text-white transition group-hover:text-gold-light ${index === 0 ? "text-2xl sm:text-[1.7rem]" : "text-xl"}`}>{briefing.title}</h3>
                {index === 0 && <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/62">{briefing.summary}</p>}
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5 border-b-[3px] border-navy pb-4">
            <div><p className="section-kicker">LATEST NEWS</p><h2 className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2></div>
            <Link to="/news" className="text-link shrink-0">{ko ? "뉴스 전체보기" : "View all"}<ArrowRight size={15}/></Link>
          </div>
          <div className="grid md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {news.slice(2, 5).map((item) => (
              <article key={item.slug} className="border-b border-green-deep/15 px-5 py-7 transition-colors hover:bg-green-pale/70 md:px-7">
                <Link to={`/news/${item.slug}`} className="group block">
                  <img src={resolveImageSrc(item.heroImage.src)} alt={item.heroImage.alt} className="aspect-[16/10] w-full object-cover" />
                  <p className="mt-5 flex items-center gap-2 text-[10px] font-extrabold tracking-[.12em] text-green-mid"><Newspaper size={13}/>{item.category}</p>
                  <h3 className="editorial-title mt-2 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-charcoal/58">{item.summary}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-charcoal/38"><time>{item.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{item.readMinutes}{ko ? "분" : " min"}</span></div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-12 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[.5fr_1.5fr] lg:gap-14">
          <div><p className="section-kicker">CIVIC BRIEFINGS</p><h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "사실에서 판단까지" : "From facts to judgment"}</h2><p className="mt-4 text-sm leading-7 text-charcoal/58">{ko ? "확인된 사실을 먼저 짚고, 논쟁의 맥락과 앞으로 지켜볼 지점을 시민의 언어로 설명합니다." : "We begin with verified facts, explain the context, and identify what citizens should continue to watch."}</p><Link to="/briefings" className="text-link mt-6">{ko ? "시민브리핑 전체보기" : "View all briefings"}<ArrowRight size={15}/></Link></div>
          <div className="border-t-2 border-navy">
            {briefings.slice(1, 5).map((briefing, index) => (
              <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid gap-2 border-b border-green-deep/15 px-4 py-5 transition-colors hover:bg-white/85 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-5">
                <span className="font-serif text-sm font-bold text-gold">{String(index + 2).padStart(2, "0")}</span>
                <div><p className="text-[10px] font-extrabold tracking-[.12em] text-green-mid">{briefing.category}</p><h3 className="editorial-title mt-1 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-2xl">{briefing.title}</h3></div>
                <time className="text-xs text-charcoal/38">{briefing.date.replace(/-/g, ".")}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="container-page grid gap-8 border-y-2 border-green-deep py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="section-kicker">OUR EDITORIAL STANDARD</p><h2 className="editorial-title mt-3 text-2xl font-bold text-navy sm:text-3xl">{ko ? "사실은 정확하게, 관점은 분명하게, 시민에게는 책임 있게" : "Accurate in fact, clear in viewpoint, accountable to citizens"}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-charcoal/62">{ko ? "씨드 시민저널은 기계적 중립과 진영의 확신 사이에서, 근거를 확인하고 자유·법치·책임의 관점으로 공공의 문제를 해석합니다." : "SEED Civic Journal verifies evidence and interprets public affairs through freedom, the rule of law, and civic responsibility."}</p></div>
          <Link to="/about" className="button-primary shrink-0">{ko ? "저널 소개 읽기" : "About the journal"}<ArrowRight size={16}/></Link>
        </div>
      </section>
    </div>
  );
}
