import { ArrowRight, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { briefings } from "../data/briefings";

export default function Briefings() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const categories = ["전체", ...Array.from(new Set(briefings.map((item) => item.category)))];
  const filtered = useMemo(() => briefings.filter((item) => (category === "전체" || item.category === category) && `${item.title} ${item.summary}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const featured = briefings.find((item) => item.featured) || briefings[0];

  return <section className="bg-paper pb-16 pt-11 sm:pb-20 sm:pt-14">
    <div className="container-page">
      <div
        className="briefing-hero-banner min-h-[360px] overflow-hidden rounded-xl bg-green-deep bg-[length:auto_100%] bg-right-bottom bg-no-repeat px-6 pb-0 pt-10 text-white sm:min-h-[390px] sm:px-10 sm:py-12 lg:min-h-[410px] lg:px-14 lg:py-14"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/briefings/citizen-briefing-hero-flat.webp)` }}
      >
        <div className="max-w-full sm:max-w-[58%]"><span className="text-xs font-extrabold tracking-[0.18em] text-gold-light">SEED CITIZEN BRIEFING</span><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">시민브리핑</h1><p className="mt-10 max-w-lg text-sm leading-7 text-white/85 sm:text-base">가짜뉴스와 왜곡된 정보가<br />넘치는 시대,<br /><br />확인된 사실과 맥락으로<br />시민의 정확한 이해를<br />돕습니다.</p></div>
        <div className="mt-10 text-sm text-white/65 sm:mt-14 lg:mt-16">현재 <strong className="text-white">{briefings.length}</strong>개의 브리핑</div>
        <img src={`${import.meta.env.BASE_URL}images/briefings/citizen-briefing-mobile.webp`} alt="시민들이 자료와 그래프를 함께 살펴보는 모습" className="mx-auto mt-3 w-full sm:hidden" />
      </div>

      <Link to={`/briefings/${featured.slug}`} className="mt-8 grid overflow-hidden rounded-xl border border-green-deep/10 bg-green-pale shadow-soft transition hover:-translate-y-1 md:grid-cols-[0.7fr_1.3fr]">
        <div className="grid min-h-52 place-items-center bg-gradient-to-br from-green-deep to-green-mid p-8 text-center text-white"><div><span className="text-xs font-bold tracking-[0.18em] text-gold-light">FEATURED</span><div className="mt-4 font-serif text-5xl">SEED</div><div className="mt-2 text-xs tracking-[0.12em] text-white/60">CITIZEN BRIEFING</div></div></div>
        <div className="p-7 sm:p-10"><span className="section-kicker">{featured.category}</span><h2 className="mt-3 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">{featured.title}</h2><p className="mt-4 text-sm leading-7 text-charcoal/65">{featured.summary}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-deep">브리핑 읽기 <ArrowRight size={16} /></span></div>
      </Link>

      <div className="mt-10 flex flex-col gap-4 border-b border-green-deep/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${category === item ? "bg-green-deep text-white" : "border border-green-deep/15 text-charcoal/60 hover:bg-green-pale"}`}>{item}</button>)}</div>
        <label className="relative w-full md:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/35" size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-full border border-green-deep/15 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-green-mid" placeholder="브리핑 검색" /></label>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <Link key={item.slug} to={`/briefings/${item.slug}`} className="content-card flex min-h-64 flex-col"><span className="section-kicker">{item.category}</span><h2 className="mt-3 text-xl font-extrabold leading-snug text-navy">{item.title}</h2><p className="mt-3 flex-1 text-sm leading-7 text-charcoal/60">{item.summary}</p><div className="mt-5 flex items-center justify-between border-t border-green-deep/10 pt-4 text-xs text-charcoal/45"><time>{item.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13} />{item.readMinutes}분</span></div></Link>)}</div>
      {filtered.length === 0 && <p className="py-16 text-center text-charcoal/50">조건에 맞는 브리핑이 없습니다.</p>}
    </div>
  </section>;
}
