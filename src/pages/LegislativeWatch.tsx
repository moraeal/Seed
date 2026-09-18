import { ArrowRight, Building2, CalendarDays, Clock, ExternalLink, FileSearch, Scale, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { getLegislativeCommentaryEdition, legislativeCommentaries } from "../data/legislativeCommentaries";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";
import MonitoringSubnav from "../components/MonitoringSubnav";
import SafeImage from "../components/SafeImage";

const dateText = (date: string | null) => date ? date.replace(/-/g, ".") : "—";

const getKoreaWeek = () => {
  const koreaNow = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const mondayOffset = (koreaNow.getUTCDay() + 6) % 7;
  const start = new Date(Date.UTC(koreaNow.getUTCFullYear(), koreaNow.getUTCMonth(), koreaNow.getUTCDate() - mondayOffset));
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 6);
  return { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
};

function BillRow({ bill, ko, weekly = false }: { bill: LegislativeBill; ko: boolean; weekly?: boolean }) {
  const summary = ko ? bill.public_summary_ko || bill.analysis?.summary_ko : bill.public_summary_en || bill.analysis?.summary_en;
  const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
  return <Link to={`/monitoring/legislation/${bill.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
    <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-green-deep text-white"}`}>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.plenary_passed_at || bill.proposed_date)}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}<span className="text-charcoal/40">{bill.processing_result || bill.current_stage || (ko ? "본회의 의결" : "Plenary vote")}</span>{weekly && <span className="inline-flex items-center gap-1 text-gold"><Star size={12} fill="currentColor"/>{ko ? "이번 주 통과" : "Passed this week"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "본회의를 통과한 법안의 내용과 영향을 확인하고 있습니다." : "Reviewing the substance and effects of this plenary-passed bill.")}</p><p className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="flex items-center gap-2"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</span>{bill.media_impact_score > 0 && <span>{ko ? `언론관심도 ${bill.media_impact_score}` : `Media attention ${bill.media_impact_score}`}</span>}</p></div>
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
  const [activeTab, setActiveTab] = useState<"weekly" | "archive">("weekly");

  useEffect(() => {
    getPublishedLegislativeBills()
      .then(setBills)
      .catch(() => setError(ko ? "입법감시 자료를 불러오지 못했습니다." : "Could not load legislative records."))
      .finally(() => setLoading(false));
  }, [ko]);

  const week = useMemo(() => getKoreaWeek(), []);
  const weeklySelection = useMemo(() => bills
    .filter((bill) => Boolean(bill.plenary_passed_at) && bill.plenary_passed_at! >= week.start && bill.plenary_passed_at! <= week.end)
    .sort((a, b) => (b.importance_score + b.media_impact_score) - (a.importance_score + a.media_impact_score)
      || (b.plenary_passed_at || "").localeCompare(a.plenary_passed_at || "")), [bills, week.end, week.start]);
  const archivedBills = useMemo(() => {
    const weeklyIds = new Set(weeklySelection.map((bill) => bill.bill_id));
    return bills.filter((bill) => !weeklyIds.has(bill.bill_id));
  }, [bills, weeklySelection]);
  const filteredArchive = useMemo(() => archivedBills.filter((bill) => {
    if (level !== "all" && bill.importance_level !== level) return false;
    const term = query.trim().toLowerCase();
    return !term || [bill.title, bill.analysis?.title_en, bill.proposer, bill.committee, bill.bill_no].some((value) => value?.toLowerCase().includes(term));
  }), [archivedBills, level, query]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "국회 본회의를 통과한 법안을 주 2회 확인합니다. 전체 통과법안을 살핀 뒤 언론의 관심과 사회적 파장, 시민과 기업의 자유, 국가 권한과 재정 부담을 함께 따져 중요한 법안을 자동으로 소개하고 계속 보완합니다." : "Twice a week, Seed Voice reviews bills passed by the National Assembly plenary. We examine the full set, then automatically publish and continuously refine bills that matter for public debate, civic and business freedom, state power, and fiscal burdens."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <section className="mb-9 border-2 border-navy bg-white" aria-labelledby="legislative-commentary-list-title">
        <div className="flex flex-col gap-3 border-b-2 border-navy bg-ivory px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div><span className="section-kicker">LEGISLATIVE COMMENTARY</span><h2 id="legislative-commentary-list-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "입법 논평" : "Legislative Commentary"}</h2></div>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "통과 법안 가운데 시민의 자유와 권력의 이동을 더 깊이 살펴야 할 사안을 골라 논평합니다. 법안 기록의 사실과 씨앗의 판단을 구분해 읽을 수 있습니다." : "We select passed bills that require deeper scrutiny of civic freedom and shifts in state power, keeping the legislative record distinct from Seed Voice's editorial judgment."}</p>
        </div>
        <div className="grid divide-y divide-green-deep/15 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {legislativeCommentaries.map((article) => {
            const edition = getLegislativeCommentaryEdition(article, ko ? "ko" : "en");
            return <Link key={article.slug} to={`/monitoring/legislation/commentary/${article.slug}`} className="group grid gap-4 p-5 transition hover:bg-green-pale/45 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
              <div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${article.heroSrc}`} alt={edition.heroAlt} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
              <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-green-deep"><span>{ko ? "입법 논평" : "COMMENTARY"}</span><span className="text-charcoal/35">{ko ? `의안 ${article.billNo}` : `Bill ${article.billNo}`}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{edition.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{edition.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{article.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "논평 읽기" : "Read"}<ArrowRight size={13}/></span></div></div>
            </Link>;
          })}
        </div>
      </section>

      <div role="tablist" aria-label={ko ? "입법감시 보기" : "Legislative watch views"} className="grid border-b-2 border-navy sm:grid-cols-2">
        <button type="button" role="tab" aria-selected={activeTab === "weekly"} aria-controls="weekly-bills-panel" onClick={() => setActiveTab("weekly")} className={`px-5 py-4 text-left text-sm font-black transition sm:text-base ${activeTab === "weekly" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "이번 주 통과법안" : "Bills Passed This Week"}<span className={`ml-2 text-xs ${activeTab === "weekly" ? "text-gold" : "text-charcoal/35"}`}>{weeklySelection.length}</span></button>
        <button type="button" role="tab" aria-selected={activeTab === "archive"} aria-controls="legislative-archive-panel" onClick={() => setActiveTab("archive")} className={`border-t border-green-deep/15 px-5 py-4 text-left text-sm font-black transition sm:border-l sm:border-t-0 sm:text-base ${activeTab === "archive" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "입법감시 목록" : "Legislative Watch List"}<span className={`ml-2 text-xs ${activeTab === "archive" ? "text-gold" : "text-charcoal/35"}`}>{archivedBills.length}</span></button>
      </div>

      {activeTab === "weekly" && <div id="weekly-bills-panel" role="tabpanel">
        <div className="flex flex-col gap-3 border-b border-green-deep/15 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(week.start)} – {dateText(week.end)}</strong><br/>{ko ? "화요일과 금요일에 본회의 통과법안 전체를 확인합니다. 사회적 관심과 씨앗의 시민영향 기준을 함께 적용해 자동 공개하며, 이후 필요에 따라 보완하거나 목록에서 제외합니다." : "Every Tuesday and Friday, we review all plenary-passed bills. Items are published automatically using both public-attention signals and Seed Voice's civic-impact criteria, then refined or removed when necessary."}</p>
          <a href="https://likms.assembly.go.kr/bill/main.do" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "국회에서 최근 법안 검색" : "Search recent bills"}<ExternalLink size={13}/></a>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && weeklySelection.length === 0 && <div className="py-16 text-center"><Scale className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "이번 주 자동 분석된 통과법안이 아직 없습니다." : "No plenary-passed bill has been analyzed this week yet."}</p></div>}
        <div>{weeklySelection.map((bill) => <BillRow key={bill.bill_id} bill={bill} ko={ko} weekly/>)}</div>
      </div>}

      {activeTab === "archive" && <div id="legislative-archive-panel" role="tabpanel">
        <div className="grid gap-3 border-b border-green-deep/15 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <label className="flex items-center gap-3 border border-green-deep/15 px-4 py-3"><FileSearch size={18} className="text-green-deep"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "법안명·발의자·위원회 검색" : "Search title, sponsor or committee"} className="w-full bg-transparent text-sm outline-none"/></label>
          <select value={level} onChange={(event) => setLevel(event.target.value)} className="border border-green-deep/15 bg-white px-4 py-3 text-sm font-bold text-navy">
            <option value="all">{ko ? "중요도 전체" : "All levels"}</option><option value="critical">{ko ? "매우 중요" : "Critical"}</option><option value="high">{ko ? "중요" : "High"}</option><option value="medium">{ko ? "관찰" : "Medium"}</option><option value="low">{ko ? "일반" : "Low"}</option>
          </select>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && <div>{filteredArchive.map((bill) => <BillRow key={bill.bill_id} bill={bill} ko={ko}/>)}</div>}
      </div>}
    </div>
  </section>;
}
