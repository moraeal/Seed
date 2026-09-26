import { ArrowRight, Building2, CalendarDays, Clock, ExternalLink, FileSearch, Scale, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { getLegislativeCommentaryEdition, legislativeCommentaries, linkedLegislativeColumnCommentaries } from "../data/legislativeCommentaries";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";
import MonitoringSubnav from "../components/MonitoringSubnav";
import SafeImage from "../components/SafeImage";
import { incomeTaxFamilyDeductionBriefing } from "../data/incomeTaxFamilyDeductionBriefing";
import { incomeTaxFamilyDeductionTranslation } from "../data/contentTranslations/briefingIncomeTaxFamilyDeduction";

const dateText = (date: string | null) => date ? date.replace(/-/g, ".") : "—";

const getKoreaDate = (value: string) => new Date(
  new Date(value).getTime() + 9 * 60 * 60 * 1000,
).toISOString().slice(0, 10);

function BillRow({ bill, ko, today = false }: { bill: LegislativeBill; ko: boolean; today?: boolean }) {
  const summary = ko ? bill.public_summary_ko || bill.analysis?.summary_ko : bill.public_summary_en || bill.analysis?.summary_en;
  const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
  return <Link to={`/monitoring/legislation/${bill.slug}`} className="group grid gap-5 border-b border-charcoal/10 px-4 py-7 transition last:border-b-0 hover:bg-[#FBFAF6] sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
    <div><span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-navy/10 text-navy"}`}>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.plenary_passed_at || bill.proposed_date)}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-charcoal/55"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/35">{bill.bill_no}</span>}<span className="text-charcoal/35">{bill.processing_result || bill.current_stage || (ko ? "발의" : "Proposed")}</span>{today && <span className="inline-flex items-center gap-1 text-gold"><Star size={12} fill="currentColor"/>{ko ? "최근 공개" : "Latest release"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-deep sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "법안의 내용과 영향을 확인하고 있습니다." : "Reviewing the bill and its potential effects.")}</p><p className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="flex items-center gap-2"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</span>{bill.media_impact_score > 0 && <span>{ko ? `언론관심도 ${bill.media_impact_score}` : `Media attention ${bill.media_impact_score}`}</span>}</p></div>
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

  const latestPublishedDate = useMemo(() => bills.reduce((latest, bill) => {
    if (!bill.published_at) return latest;
    const publishedDate = getKoreaDate(bill.published_at);
    return publishedDate > latest ? publishedDate : latest;
  }, ""), [bills]);
  const todayBills = useMemo(() => bills.filter((bill) => (
    bill.published_at ? getKoreaDate(bill.published_at) === latestPublishedDate : false
  )), [bills, latestPublishedDate]);
  const pastBills = useMemo(() => bills.filter((bill) => (
    !bill.published_at || getKoreaDate(bill.published_at) !== latestPublishedDate
  )), [bills, latestPublishedDate]);
  const filteredPastBills = useMemo(() => pastBills.filter((bill) => {
    if (level !== "all" && bill.importance_level !== level) return false;
    const term = query.trim().toLowerCase();
    return !term || [bill.title, bill.analysis?.title_en, bill.proposer, bill.committee, bill.bill_no].some((value) => value?.toLowerCase().includes(term));
  }), [pastBills, level, query]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "새로 발의된 법안을 매일 수집·분석하고, 시민과 기업의 자유·국가 권한·재정 부담에 미칠 영향을 검토한 뒤 선정된 안만 공개합니다. 본회의를 통과한 법안도 화·금에 별도로 확인합니다. 발의와 의결, 공포와 시행은 각각 다른 단계입니다." : "We collect newly proposed bills daily and review their effects on civic and business freedom, state power and public spending before selecting any for publication. Bills passed by the plenary receive separate Tuesday and Friday checks. Proposal, passage, promulgation and enforcement are distinct stages."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <nav aria-label={ko ? "입법감시 목록 바로가기" : "Legislative watch list shortcuts"} className="mb-7 grid overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_8px_24px_rgba(31,51,73,0.045)] sm:grid-cols-3">
        <a href="#legislative-commentary-list" className="flex items-center justify-between border-b-2 border-green-deep bg-green-deep px-5 py-4 text-sm font-black text-white transition hover:bg-green-mid sm:text-base">{ko ? "입법감시 기사" : "Watch Articles"}<span className="rounded-full bg-white/12 px-2 py-0.5 text-xs text-gold">{legislativeCommentaries.length + linkedLegislativeColumnCommentaries.length + 1}</span></a>
        <a href="#today-bills" className="flex items-center justify-between border-b-2 border-gold/40 bg-[#F3F5EC] px-5 py-4 text-sm font-black text-navy transition hover:bg-green-pale sm:text-base">{ko ? "오늘의 법안" : "Today's Bills"}<span className="rounded-full bg-white/80 px-2 py-0.5 text-xs text-charcoal/55">{todayBills.length}</span></a>
        <a href="#past-bills" className="flex items-center justify-between border-b-2 border-transparent px-5 py-4 text-sm font-black text-navy transition hover:border-charcoal/20 hover:bg-[#FAF9F5] sm:text-base">{ko ? "지난 법안" : "Past Bills"}<span className="rounded-full bg-charcoal/5 px-2 py-0.5 text-xs text-charcoal/55">{pastBills.length}</span></a>
      </nav>

      <section id="legislative-commentary-list" className="scroll-mt-24 overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_12px_32px_rgba(31,51,73,0.055)]" aria-labelledby="legislative-commentary-list-title">
        <div className="flex flex-col gap-3 border-b border-charcoal/10 bg-white px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="text-[10px] font-extrabold tracking-[.2em] text-gold">LEGISLATIVE COMMENTARY</span><h2 id="legislative-commentary-list-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "입법감시 기사 목록" : "Legislative Watch Articles"}</h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "발의되거나 통과한 법안 가운데 시민의 자유와 권력의 이동을 더 깊이 살펴야 할 사안을 골라 논평합니다. 법안 기록의 사실과 씨앗의 판단을 구분해 읽을 수 있습니다." : "We select proposed and passed bills that require deeper scrutiny of civic freedom and shifts in state power, keeping the legislative record distinct from Seed Voice's editorial judgment."}</p>
        </div>
        <div className="grid lg:grid-cols-2">
          <Link to={`/briefings/${incomeTaxFamilyDeductionBriefing.slug}`} className="group grid gap-4 border-b border-charcoal/10 p-5 transition hover:bg-[#FBFAF6] sm:grid-cols-[180px_1fr] sm:items-center sm:p-6 lg:odd:border-r">
            <div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${incomeTaxFamilyDeductionBriefing.images?.[0]?.src}`} alt={ko ? incomeTaxFamilyDeductionBriefing.images?.[0]?.alt ?? "" : incomeTaxFamilyDeductionTranslation.images?.[0]?.alt ?? ""} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
            <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-charcoal/55"><span>{ko ? "법안 설명" : "BILL EXPLAINER"}</span><span className="text-charcoal/35">{ko ? "의안 2221581" : "Bill 2221581"}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-deep">{ko ? incomeTaxFamilyDeductionBriefing.title : incomeTaxFamilyDeductionTranslation.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{ko ? incomeTaxFamilyDeductionBriefing.summary : incomeTaxFamilyDeductionTranslation.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-charcoal/10 pt-3 text-xs text-charcoal/45"><time>{incomeTaxFamilyDeductionBriefing.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{incomeTaxFamilyDeductionBriefing.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "설명 읽기" : "Read"}<ArrowRight size={13}/></span></div></div>
          </Link>
          {linkedLegislativeColumnCommentaries.map((article) => {
            const edition = article.editions[ko ? "ko" : "en"];
            return <Link key={article.slug} to={article.href} className="group grid gap-4 border-b border-charcoal/10 p-5 transition hover:bg-[#FBFAF6] sm:grid-cols-[180px_1fr] sm:items-center sm:p-6 lg:odd:border-r">
              <div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${article.heroSrc}`} alt={edition.heroAlt} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
              <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-charcoal/55"><span>{ko ? "입법 논평" : "COMMENTARY"}</span><span className="text-charcoal/35">{article.billLabel[ko ? "ko" : "en"]}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-deep">{edition.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{edition.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-charcoal/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{article.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "논평 읽기" : "Read"}<ArrowRight size={13}/></span></div></div>
            </Link>;
          })}
          {legislativeCommentaries.map((article) => {
            const edition = getLegislativeCommentaryEdition(article, ko ? "ko" : "en");
            return <Link key={article.slug} to={`/monitoring/legislation/commentary/${article.slug}`} className="group grid gap-4 border-b border-charcoal/10 p-5 transition hover:bg-[#FBFAF6] sm:grid-cols-[180px_1fr] sm:items-center sm:p-6 lg:odd:border-r">
              <div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${article.heroSrc}`} alt={edition.heroAlt} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
              <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-charcoal/55"><span>{ko ? "입법 논평" : "COMMENTARY"}</span><span className="text-charcoal/35">{ko ? `의안 ${article.billNo}` : `Bill ${article.billNo}`}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-deep">{edition.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{edition.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-charcoal/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{article.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "논평 읽기" : "Read"}<ArrowRight size={13}/></span></div></div>
            </Link>;
          })}
        </div>
      </section>

      <section id="today-bills" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_12px_32px_rgba(31,51,73,0.055)]" aria-labelledby="today-bills-title">
        <div className="flex flex-col gap-3 border-b border-charcoal/10 bg-white px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="text-[10px] font-extrabold tracking-[.2em] text-gold">TODAY'S BILLS</span><h2 id="today-bills-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "오늘의 법안" : "Today's Bills"}<span className="ml-2 rounded-full bg-charcoal/5 px-2 py-0.5 text-xs text-charcoal/50">{todayBills.length}</span></h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "가장 최근에 공개한 법안을 다음 업데이트 전까지 유지합니다. 법안명이나 분석 보기를 누르면 핵심 변화와 시민 영향을 확인할 수 있습니다." : "The most recently published bills remain here until the next update. Open a bill to review its key changes and civic impact."}</p>
        </div>
        <div className="flex flex-col gap-3 border-b border-charcoal/10 bg-[#FAF8F2] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(latestPublishedDate)}</strong><br/>{ko ? "화요일과 금요일에 본회의 통과법안 전체를 확인하고, 사회적 관심과 씨앗의 시민영향 기준을 함께 적용해 공개합니다." : "Every Tuesday and Friday, we review plenary-passed bills and publish selections using both public-attention signals and Seed Voice's civic-impact criteria."}</p>
          <a href="https://likms.assembly.go.kr/bill/main.do" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "국회에서 최근 법안 검색" : "Search recent bills"}<ExternalLink size={13}/></a>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && todayBills.length === 0 && <div className="py-16 text-center"><Scale className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "공개된 법안이 아직 없습니다." : "No bills have been published yet."}</p></div>}
        <div>{todayBills.map((bill) => <BillRow key={bill.bill_id} bill={bill} ko={ko} today/>)}</div>
      </section>

      <section id="past-bills" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_12px_32px_rgba(31,51,73,0.055)]" aria-labelledby="past-bills-title">
        <div className="flex flex-col gap-3 border-b border-charcoal/10 bg-white px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="text-[10px] font-extrabold tracking-[.2em] text-gold">PAST BILLS</span><h2 id="past-bills-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "지난 법안" : "Past Bills"}<span className="ml-2 rounded-full bg-charcoal/5 px-2 py-0.5 text-xs text-charcoal/50">{pastBills.length}</span></h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "이전에 공개된 입법감시 기록입니다. 법안명·발의자·위원회와 시민영향도로 필요한 법안을 찾아볼 수 있습니다." : "Previously published legislative-watch records. Search by bill title, sponsor, committee, or civic-impact level."}</p>
        </div>
        <div className="grid gap-3 border-b border-charcoal/10 bg-[#FAF8F2] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <label className="flex items-center gap-3 rounded-lg border border-charcoal/15 bg-white px-4 py-3"><FileSearch size={18} className="text-charcoal/45"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "법안명·발의자·위원회 검색" : "Search title, sponsor or committee"} className="w-full bg-transparent text-sm outline-none"/></label>
          <select value={level} onChange={(event) => setLevel(event.target.value)} className="rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm font-bold text-navy outline-none focus:border-green-deep">
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
