import { ArrowRight, ArrowUpRight, BookOpen, Clock, FileText, FlaskConical, Landmark, LineChart, MessageCircle, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { getBriefingsNewestFirst } from "../data/briefings";
import { getLatestColumn } from "../data/columns";
import { getNewsNewestFirst } from "../data/news";
import { AUDITION_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

const valueIcons = [Sprout, Landmark, LineChart, BookOpen];
const programIcons = [MessageCircle, BookOpen, FlaskConical, FileText];

export default function Home() {
  const { language } = useLanguage();
  const t = getContent(language).home;
  const latestColumn = getLatestColumn();
  const latestNews = getNewsNewestFirst()[0];
  const newestBriefings = getBriefingsNewestFirst();

  return <>
    <section className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-7 py-10 lg:grid-cols-2 lg:py-14">
        <Link to={`/columns/${latestColumn.slug}`} className="group flex h-full flex-col overflow-hidden border border-green-deep/15 bg-paper shadow-[0_24px_70px_rgba(23,76,58,.12)]">
          <div className="relative min-h-[290px] overflow-hidden bg-green-deep">
            <img src={`${import.meta.env.BASE_URL}${latestColumn.heroImage.src}`} alt={latestColumn.heroImage.alt} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-green-deep/80 to-transparent" />
            <span className="absolute left-7 top-7 border border-white/30 bg-green-deep/75 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white">LATEST SEED COLUMN</span>
            <span className="absolute bottom-4 right-5 text-[9px] text-white/70">{latestColumn.heroImage.credit}</span>
          </div>
          <div className="flex flex-1 flex-col p-7 sm:p-9">
            <span className="section-kicker">씨드칼럼 {String(latestColumn.issue).padStart(2, "0")}</span>
            <h1 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid">{latestColumn.title}</h1>
            <p className="mt-3 text-base font-semibold leading-7 text-charcoal/70">{latestColumn.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/60">{latestColumn.summary}</p>
            <div className="mt-auto flex items-center justify-between border-t border-green-deep/10 pt-5 text-xs text-charcoal/45">
              <span className="flex items-center gap-3"><time>{latestColumn.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1.5"><Clock size={14} />{latestColumn.readMinutes}분</span></span>
              <span className="flex items-center gap-1.5 font-bold text-green-deep">칼럼 읽기<ArrowRight size={15} /></span>
            </div>
          </div>
        </Link>
        <Link to={`/news/${latestNews.slug}`} className="group flex h-full flex-col overflow-hidden border border-green-deep/15 bg-paper shadow-[0_24px_70px_rgba(23,76,58,.12)]">
          <div className="relative min-h-[290px] overflow-hidden bg-green-deep">
            <img src={`${import.meta.env.BASE_URL}${latestNews.heroImage.src}`} alt={latestNews.heroImage.alt} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/10 to-transparent" />
            <span className="absolute left-7 top-7 border border-white/30 bg-green-deep/75 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white">TODAY'S SEED NEWS</span>
            <span className="absolute bottom-4 right-5 text-[9px] text-white/70">{latestNews.heroImage.credit}</span>
          </div>
          <div className="flex flex-1 flex-col p-7 sm:p-9">
            <span className="section-kicker">씨드뉴스 {String(latestNews.issue).padStart(2, "0")} · {latestNews.category}</span>
            <h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid">{latestNews.title}</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-charcoal/70">{latestNews.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">{latestNews.summary}</p>
            <div className="mt-auto flex items-center justify-between border-t border-green-deep/10 pt-5 text-xs text-charcoal/45">
              <span className="flex items-center gap-3"><time>{latestNews.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1.5"><Clock size={14} />{latestNews.readMinutes}분</span></span>
              <span className="flex items-center gap-1.5 font-bold text-green-deep">뉴스 읽기<ArrowRight size={15} /></span>
            </div>
          </div>
        </Link>
      </div>
    </section>
    <section className="border-b border-green-deep/15 bg-green-deep py-14 text-white sm:py-20"><div className="container-page grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><span className="text-[10px] font-extrabold tracking-[.2em] text-gold-light">WHY SEED CIVIC PARTNERS</span><h2 className="editorial-title mt-4 text-3xl font-bold sm:text-4xl">시민이 다시 사회의 주체로 서도록</h2></div><div><p className="max-w-3xl text-base leading-8 text-white/72">씨드시민파트너스는 시민을 정책의 수혜자나 정치의 동원 대상으로 보지 않습니다. 확인된 사실을 시민의 언어로 설명하고, 시민의 질문을 제안과 작은 실험으로 연결하며, 그 과정을 공개 기록으로 남깁니다.</p><Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-light">우리의 취지 더 알아보기<ArrowRight size={16}/></Link></div></div></section>
    <section className="bg-paper py-16 sm:py-24"><div className="container-page"><div className="grid gap-8 border-b-2 border-navy pb-7 lg:grid-cols-[1fr_auto] lg:items-end"><div><span className="section-kicker">SEED JOURNAL</span><h2 className="editorial-title mt-3 text-4xl font-bold text-navy">시민의 언어로 읽는 공공의 문제</h2></div><Link to="/briefings" className="text-link">시민브리핑 전체보기<ArrowRight size={16} /></Link></div><div className="grid divide-y divide-green-deep/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">{newestBriefings.slice(0, 3).map((item, index) => <Link key={item.slug} to={`/briefings/${item.slug}`} className={`group py-8 lg:px-8 ${index === 0 ? "lg:pl-0" : ""}`}><span className="text-[10px] font-extrabold tracking-[.16em] text-green-mid">0{index + 1} · {item.category}</span><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy group-hover:text-green-mid">{item.title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/55">{item.summary}</p><time className="mt-7 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time></Link>)}</div></div></section>
    <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-16 sm:py-24"><div className="container-page"><span className="section-kicker">OUR PRINCIPLES</span><div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><h2 className="editorial-title text-4xl font-bold leading-tight text-navy">{t.pillarsTitle}</h2><p className="max-w-2xl text-sm leading-7 text-charcoal/60">시민을 국가와 시장의 객체가 아니라 질문하고 판단하며 책임지는 주체로 세웁니다.</p></div><div className="mt-12 grid border-y border-green-deep/15 md:grid-cols-2 xl:grid-cols-4">{t.pillars.map(([title, description], index) => { const Icon = valueIcons[index]; return <article key={title} className="border-green-deep/15 px-1 py-8 md:px-7 md:[&:not(:nth-child(2n))]:border-r xl:[&:not(:last-child)]:border-r"><Icon size={24} className="text-gold" /><h3 className="editorial-title mt-8 text-2xl font-bold text-navy">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/60">{description}</p></article>; })}</div></div></section>
    <section className="bg-navy py-16 text-white sm:py-24"><div className="container-page"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><span className="text-[11px] font-extrabold tracking-[.18em] text-gold">WHAT WE DO</span><h2 className="editorial-title mt-4 text-4xl font-bold">{t.programsTitle}</h2></div><div className="grid gap-px bg-white/15 sm:grid-cols-2">{t.programs.map(([title, description], index) => { const Icon = programIcons[index]; return <article key={title} className="bg-navy p-7 sm:p-9"><Icon size={23} className="text-gold"/><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{description}</p></article>; })}</div></div></div></section>
    <section className="bg-ivory py-16 sm:py-24"><div className="container-page grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="section-kicker">JOIN THE CIVIC FIELD</span><h2 className="editorial-title mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy">{t.ctaTitle}</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-charcoal/60">{t.ctaDescription}</p></div><div className="flex flex-wrap gap-3"><Link to="/support" className="button-primary">후원하기<ArrowRight size={16}/></Link><a href={AUDITION_URL} target="_blank" rel="noreferrer" className="button-secondary">시민제안 참여<ArrowUpRight size={16}/></a></div></div></section>
  </>;
}
