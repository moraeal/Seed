import { ArrowRight, Building2, CalendarDays, ExternalLink, FileSearch, Scale, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";
import MonitoringSubnav from "../components/MonitoringSubnav";

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
    <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-green-deep text-white"}`}>{ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.proposed_date)}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}<span className="text-charcoal/40">{bill.current_stage || (ko ? "발의" : "Introduced")}</span>{weekly && <span className="inline-flex items-center gap-1 text-gold"><Star size={12} fill="currentColor"/>{ko ? "금주의 법안" : "Bill of the week"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 자료와 조문을 검토하고 있습니다." : "Official records and provisions are under review.")}</p><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/45"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</p></div>
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
    .filter((bill) => Boolean(bill.proposed_date) && bill.proposed_date! >= week.start && bill.proposed_date! <= week.end && bill.importance_score >= 75)
    .sort((a, b) => b.importance_score - a.importance_score || (b.proposed_date || "").localeCompare(a.proposed_date || ""))
    .slice(0, 5), [bills, week.end, week.start]);
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
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "이번 주 새롭게 발의된 법안 가운데 중요도 75점 이상을 우선 살피고, 시민이 꼭 알아야 할 법안을 씨앗의 관점으로 골라 소개합니다. 시민이 법안을 읽고 묻고 의견을 내는 일은 국가 권력을 견제하고 시민과 기업의 자유를 넓히는 가장 현실적인 입법감시입니다." : "Each week, Seed Voice reviews newly introduced bills scoring 75 or above and highlights the measures citizens most need to understand. Reading, questioning and responding to legislation is a practical way to restrain public power and widen freedom for citizens and enterprise."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <div role="tablist" aria-label={ko ? "입법감시 보기" : "Legislative watch views"} className="grid border-b-2 border-navy sm:grid-cols-2">
        <button type="button" role="tab" aria-selected={activeTab === "weekly"} aria-controls="weekly-bills-panel" onClick={() => setActiveTab("weekly")} className={`px-5 py-4 text-left text-sm font-black transition sm:text-base ${activeTab === "weekly" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "씨앗이 선정한 금주의 법안" : "Seed Voice Bills of the Week"}<span className={`ml-2 text-xs ${activeTab === "weekly" ? "text-gold" : "text-charcoal/35"}`}>{weeklySelection.length}</span></button>
        <button type="button" role="tab" aria-selected={activeTab === "archive"} aria-controls="legislative-archive-panel" onClick={() => setActiveTab("archive")} className={`border-t border-green-deep/15 px-5 py-4 text-left text-sm font-black transition sm:border-l sm:border-t-0 sm:text-base ${activeTab === "archive" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "입법감시 목록" : "Legislative Watch List"}<span className={`ml-2 text-xs ${activeTab === "archive" ? "text-gold" : "text-charcoal/35"}`}>{archivedBills.length}</span></button>
      </div>

      {activeTab === "weekly" && <div id="weekly-bills-panel" role="tabpanel">
        <div className="flex flex-col gap-3 border-b border-green-deep/15 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(week.start)} – {dateText(week.end)}</strong><br/>{ko ? "이번 주 발의 법안 중 중요도 75점 이상을 씨앗의 관점으로 골랐습니다. 공개가 승인된 법안만 보이며, 다음 주에는 입법감시 목록으로 자동 이동합니다." : "These are this week's newly introduced bills scoring 75 or above, selected through Seed Voice's editorial lens. Only approved bills appear, and they move automatically to the watch list next week."}</p>
          <a href="https://likms.assembly.go.kr/bill/main.do" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "국회에서 최근 법안 검색" : "Search recent bills"}<ExternalLink size={13}/></a>
        </div>
        {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
        {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
        {!loading && !error && weeklySelection.length === 0 && <div className="py-16 text-center"><Scale className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "이번 주 공개된 선정 법안이 없습니다." : "No selected bill has been published this week."}</p></div>}
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
