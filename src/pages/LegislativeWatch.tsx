import { ArrowRight, Building2, CalendarDays, Clock, ExternalLink, FileSearch, Scale, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { getLegislativeCommentaryEdition, legislativeCommentaries } from "../data/legislativeCommentaries";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";
import MonitoringSubnav from "../components/MonitoringSubnav";
import SafeImage from "../components/SafeImage";

const dateText = (date: string | null) => date ? date.replace(/-/g, ".") : "—";

const getKoreaDate = (value: number | string = Date.now()) => new Date(
  typeof value === "number" ? value + 9 * 60 * 60 * 1000 : new Date(value).getTime() + 9 * 60 * 60 * 1000,
).toISOString().slice(0, 10);

function BillRow({ bill, ko, today = false }: { bill: LegislativeBill; ko: boolean; today?: boolean }) {
  const summary = ko ? bill.public_summary_ko || bill.analysis?.summary_ko : bill.public_summary_en || bill.analysis?.summary_en;
  const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
  return <Link to={`/monitoring/legislation/${bill.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
    <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-green-deep text-white"}`}>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.plenary_passed_at || bill.proposed_date)}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}<span className="text-charcoal/40">{bill.processing_result || bill.current_stage || (ko ? "본회의 의결" : "Plenary vote")}</span>{today && <span className="inline-flex items-center gap-1 text-gold"><Star size={12} fill="currentColor"/>{ko ? "오늘 공개" : "Published today"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "본회의를 통과한 법안의 내용과 영향을 확인하고 있습니다." : "Reviewing the substance and effects of this plenary-passed bill.")}</p><p className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="flex items-center gap-2"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</span>{bill.media_impact_score > 0 && <span>{ko ? `언론관심도 ${bill.media_impact_score}` : `Media attention ${bill.media_impact_score}`}</span>}</p></div>
    <span className="flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "분석 보기" : "View analysis"}<ArrowRight size={15}/></span>
  </Link>;
}

export default function LegislativeWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [bills, setBills] = useState<LegislativeBill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [level, setLevel] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPublishedLegislativeBills()
      .then(setBills)
      .catch(() => setError(ko ? "입법감시 자료를 불러오지 못했습니다." : "Could not load legislative records."))
      .finally(() => setLoading(false));
  }, [ko]);

  const koreaToday = useMemo(() => getKoreaDate(), []);
  const todayBills = useMemo(() => bills.filter((bill) => (
    bill.published_at ? getKoreaDate(bill.published_at) === koreaToday : false
  )), [bills, koreaToday]);
  const pastBills = useMemo(() => bills.filter((bill) => (
    !bill.published_at || getKoreaDate(bill.published_at) !== koreaToday
  )), [bills, koreaToday]);
  const filteredPastBills = useMemo(() => pastBills.filter((bill) => {
    if (level !== "all" && bill.importance_level !== level) return false;
    const term = query.trim().toLowerCase();
    return !term || [bill.title, bill.analysis?.title_en, bill.proposer, bill.committee, bill.bill_no].some((value) => value?.toLowerCase().includes(term));
  }), [pastBills, level, query]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "국회 본회의를 통과한 법안을 주 2회 확인합니다. 전체 통과법안을 살핀 뒤 언론의 관심과 사회적 파장, 시민과 기업의 자유, 국가 권한과 재정 부담을 함께 따져 중요한 법안을 자동으로 소개하고 계속 보완합니다." : "Twice a week, Seed Voice reviews bills passed by the National Assembly plenary. We examine the full set, then automatically publish and continuously refine bills that matter for public debate, civic and business freedom, state power, and fiscal burdens."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <nav aria-label={ko ? "입법감시 목록 바로가기" : "Legislative watch list shortcuts"} className="mb-7 grid overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(17,43,37,0.08)] sm:grid-cols-3">
        <a href="#legislative-commentary-list" className="flex items-center justify-between bg-green-deep px-5 py-4 text-sm font-black text-white transition hover:bg-green-mid sm:text-base">{ko ? "입법감시 기사" : "Watch Articles"}<span className="text-xs text-gold">{legislativeCommentaries.length}</span></a>
        <a href="#today-bills" className="flex items-center justify-between bg-[#F7F8F4] px-5 py-4 text-sm font-black text-navy transition hover:bg-green-pale sm:text-base">{ko ? "오늘의 법안" : "Today's Bills"}<span className="text-xs text-charcoal/40">{todayBills.length}</span></a>
        <a href="#past-bills" className="flex items-center justify-between bg-white px-5 py-4 text-sm font-black text-navy transition hover:bg-green-pale sm:text-base">{ko ? "지난 법안" : "Past Bills"}<span className="text-xs text-charcoal/40">{pastBills.length}</span></a>
      </nav>

      <section id="legislative-commentary-list" className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="legislative-commentary-list-title">
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="section-kicker">LEGISLATIVE COMMENTARY</span><h2 id="legislative-commentary-list-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "입법감시 기사 목록" : "Legislative Watch Articles"}</h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "통과 법안 가운데 시민의 자유와 권력의 이동을 더 깊이 살펴야 할 사안을 골라 논평합니다. 법안 기록의 사실과 씨앗의 판단을 구분해 읽을 수 있습니다." : "We select passed bills that require deeper scrutiny of civic freedom and shifts in state power, keeping the legislative record distinct from Seed Voice's editorial judgment."}</p>
        </div>
        <div className="grid divide-y divide-green-deep/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {legislativeCommentaries.map((article) => {
            const edition = getLegislativeCommentaryEdition(article, ko ? "ko" : "en");
            return <Link key={article.slug} to={`/monitoring/legislation/commentary/${article.slug}`} className="group grid gap-4 p-5 transition hover:bg-green-pale/45 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
              <div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${article.heroSrc}`} alt={edition.heroAlt} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
              <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-green-deep"><span>{ko ? "입법 논평" : "COMMENTARY"}</span><span className="text-charcoal/35">{ko ? `의안 ${article.billNo}` : `Bill ${article.billNo}`}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{edition.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{edition.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{article.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "논평 읽기" : "Read"}<ArrowRight size={13}/></span></div></div>
            </Link>;
          })}
        </div>
      </section>

      <section id="today-bills" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="today-bills-title">
        <div className="flex flex-col gap-3 bg-green-deep px-5 py-5 text-white sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="text-[11px] font-black tracking-[.18em] text-gold">TODAY'S BILLS</span><h2 id="today-bills-title" className="editorial-title mt-1 text-2xl font-bold">{ko ? "오늘의 법안" : "Today's Bills"}<span className="ml-2 text-sm text-gold">{todayBills.length}</span></h2></div>
          <p className="max-w-2xl text-sm leading-6 text-white/70">{ko ? "오늘 씨앗의 입법감시 목록에 새로 공개된 법안입니다. 법안명이나 분석 보기를 누르면 핵심 변화와 시민 영향을 확인할 수 있습니다." : "Bills newly published to Seed Voice's legislative watch today. Open a bill to review its key changes and civic impact."}</p>
        </div>
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(koreaToday)}</strong><br/>{ko ? "화요일과 금요일에 본회의 통과법안 전체를 확인하고, 사회적 관심과 씨앗의 시민영향 기준을 함께 적용해 공개합니다." : "Every Tuesday and Friday, we review plenary-passed bills and publish selections using both public-attention signals and Seed Voice's civic-impact criteria."}</p>
          <a href="https://likms.assembly.go.kr/bill/main.do" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "국회에서 최근 법안 검색" : "Search recent bills"}<ExternalLink size={13}/></a>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && todayBills.length === 0 && <div className="py-16 text-center"><Scale className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "오늘 새로 공개된 법안이 아직 없습니다." : "No bill has been newly published today."}</p></div>}
        <div>{todayBills.map((bill) => <BillRow key={bill.bill_id} bill={bill} ko={ko} today/>)}</div>
      </section>

      <section id="past-bills" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="past-bills-title">
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="section-kicker">PAST BILLS</span><h2 id="past-bills-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "지난 법안" : "Past Bills"}<span className="ml-2 text-sm text-charcoal/40">{pastBills.length}</span></h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "이전에 공개된 입법감시 기록입니다. 법안명·발의자·위원회와 시민영향도로 필요한 법안을 찾아볼 수 있습니다." : "Previously published legislative-watch records. Search by bill title, sponsor, committee, or civic-impact level."}</p>
        </div>
        <div className="grid gap-3 bg-[#F8F9F6] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <label className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[inset_0_0_0_1px_rgba(35,74,63,0.10)]"><FileSearch size={18} className="text-green-deep"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "법안명·발의자·위원회 검색" : "Search title, sponsor or committee"} className="w-full bg-transparent text-sm outline-none"/></label>
          <select value={level} onChange={(event) => setLevel(event.target.value)} className="rounded-lg bg-white px-4 py-3 text-sm font-bold text-navy shadow-[inset_0_0_0_1px_rgba(35,74,63,0.10)]">
            <option value="all">{ko ? "중요도 전체" : "All levels"}</option><option value="critical">{ko ? "매우 중요" : "Critical"}</option><option value="high">{ko ? "중요" : "High"}</option><option value="medium">{ko ? "관찰" : "Medium"}</option><option value="low">{ko ? "일반" : "Low"}</option>
          </select>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && filteredPastBills.length === 0 && <div className="py-14 text-center"><FileSearch className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "조건에 맞는 지난 법안이 없습니다." : "No past bills match these filters."}</p></div>}
        {!loading && !error && <div>{filteredPastBills.map((bill) => <BillRow key={bill.bill_id} bill={bill} ko={ko}/>)}</div>}
      </section>
    </div>
  </section>;
}
