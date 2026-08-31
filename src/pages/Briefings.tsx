import { ArrowRight, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { briefings, getBriefingsNewestFirst, getLatestBriefing } from "../data/briefings";

export default function Briefings() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const newestBriefings = useMemo(() => getBriefingsNewestFirst(), []);
  const categories = ["전체", ...Array.from(new Set(briefings.map((item) => item.category)))];
  const filtered = useMemo(() => newestBriefings.filter((item) => (category === "전체" || item.category === category) && `${item.title} ${item.summary}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const featured = getLatestBriefing();
  const featuredImage = featured.images?.[0];

  return <section className="bg-paper pb-16 sm:pb-24">
    <div className="container-page">
      <div className="grid items-stretch border-x border-b border-green-deep/15 lg:grid-cols-[.9fr_1.1fr]">
      <div className="flex flex-col justify-center bg-ivory px-6 py-14 sm:px-10 lg:px-14 lg:py-20"><span className="text-[10px] font-extrabold tracking-[0.22em] text-green-mid">SEED CITIZEN BRIEFING</span><h1 className="editorial-title mt-5 text-5xl font-bold text-navy sm:text-6xl">시민브리핑</h1><p className="mt-8 max-w-lg text-base leading-8 text-charcoal/65">가짜뉴스와 왜곡된 정보가 넘치는 시대,<br/>확인된 사실과 맥락으로 시민의 정확한 이해를 돕습니다.</p><div className="mt-10 text-xs text-charcoal/45">현재 <strong className="text-green-deep">{briefings.length}</strong>개의 브리핑</div></div>
      <div
        className="briefing-hero-banner min-h-[360px] overflow-hidden bg-green-deep bg-[length:auto_100%] bg-right-bottom bg-no-repeat px-6 pb-0 pt-10 text-white sm:min-h-[390px] sm:px-10 sm:py-12 lg:min-h-[450px] lg:px-14 lg:py-14"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/briefings/citizen-briefing-hero-flat.webp)` }}
      >
        <img src={`${import.meta.env.BASE_URL}images/briefings/citizen-briefing-mobile.webp`} alt="시민들이 자료와 그래프를 함께 살펴보는 모습" className="mx-auto mt-3 w-full sm:hidden" />
      </div>
      </div>

      <Link to={`/briefings/${featured.slug}`} className="mt-12 grid overflow-hidden border-y-2 border-navy bg-paper transition hover:bg-ivory md:grid-cols-[0.55fr_1.45fr]">
        <div className="relative min-h-60 bg-green-deep bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${featuredImage?.src ?? "images/briefings/citizen-briefing-hero-flat.webp"})` }}><div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-transparent to-transparent"/><span className="absolute left-6 top-6 bg-green-deep/75 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-gold-light">LATEST REPORT</span>{featuredImage && <span className="absolute bottom-4 left-6 text-[9px] text-white/75">{featuredImage.credit}</span>}</div>
        <div className="p-7 sm:p-10"><span className="section-kicker">{featured.category}</span><h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">{featured.title}</h2><p className="mt-5 text-sm leading-7 text-charcoal/60">{featured.summary}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-green-deep">브리핑 읽기 <ArrowRight size={16} /></span></div>
      </Link>

      <div className="mt-10 flex flex-col gap-4 border-b border-green-deep/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${category === item ? "bg-green-deep text-white" : "border border-green-deep/15 text-charcoal/60 hover:bg-green-pale"}`}>{item}</button>)}</div>
        <label className="relative w-full md:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/35" size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-full border border-green-deep/15 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-green-mid" placeholder="브리핑 검색" /></label>
      </div>

      <div className="mt-7 grid gap-px overflow-hidden border border-green-deep/15 bg-green-deep/15 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <Link key={item.slug} to={`/briefings/${item.slug}`} className="group flex min-h-72 flex-col bg-paper p-7 transition hover:bg-ivory"><span className="section-kicker">{item.category}</span><h2 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy group-hover:text-green-mid">{item.title}</h2><p className="mt-4 flex-1 text-sm leading-7 text-charcoal/60">{item.summary}</p><div className="mt-6 flex items-center justify-between border-t border-green-deep/10 pt-4 text-xs text-charcoal/45"><time>{item.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13} />{item.readMinutes}분</span></div></Link>)}</div>
      {filtered.length === 0 && <p className="py-16 text-center text-charcoal/50">조건에 맞는 브리핑이 없습니다.</p>}
    </div>
  </section>;
}
