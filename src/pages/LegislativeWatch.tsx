import { ArrowRight, Building2, CalendarDays, FileSearch, Scale } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";

const dateText = (date: string | null) => date ? date.replace(/-/g, ".") : "—";

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

  const filtered = useMemo(() => bills.filter((bill) => {
    if (level !== "all" && bill.importance_level !== level) return false;
    const term = query.trim().toLowerCase();
    return !term || [bill.title, bill.analysis?.title_en, bill.proposer, bill.committee, bill.bill_no].some((value) => value?.toLowerCase().includes(term));
  }), [bills, level, query]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "새 법안이 시민의 선택과 권리, 기업의 활동, 국가기관의 권한과 재정에 어떤 변화를 만드는지 추적합니다. 확인된 조문과 예상 효과를 구분하고, 심사 과정에서 달라지는 내용도 같은 기록에 이어 붙입니다." : "We track how proposed laws may change civic rights and choice, enterprise, public authority and fiscal exposure. Confirmed provisions are separated from expected effects, with later amendments and decisions kept in the same record."}</p>
      </div>
    </header>

    <div className="container-page py-8 sm:py-10">
      <div className="grid gap-3 border-y-2 border-navy bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <label className="flex items-center gap-3 border border-green-deep/15 px-4 py-3"><FileSearch size={18} className="text-green-deep"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "법안명·발의자·위원회 검색" : "Search title, sponsor or committee"} className="w-full bg-transparent text-sm outline-none"/></label>
        <select value={level} onChange={(event) => setLevel(event.target.value)} className="border border-green-deep/15 bg-white px-4 py-3 text-sm font-bold text-navy">
          <option value="all">{ko ? "중요도 전체" : "All levels"}</option><option value="critical">{ko ? "매우 중요" : "Critical"}</option><option value="high">{ko ? "중요" : "High"}</option><option value="medium">{ko ? "관찰" : "Medium"}</option><option value="low">{ko ? "일반" : "Low"}</option>
        </select>
      </div>

      {loading && <p className="py-16 text-center text-sm text-charcoal/50">{ko ? "입법 기록을 불러오는 중입니다." : "Loading legislative records…"}</p>}
      {error && <p className="py-16 text-center text-sm font-bold text-red-700">{error}</p>}
      {!loading && !error && filtered.length === 0 && <div className="border-b border-green-deep/15 py-16 text-center"><Scale className="mx-auto text-gold"/><p className="mt-4 text-base font-bold text-navy">{ko ? "아직 공개 승인된 입법감시 기록이 없습니다." : "No legislative records have been approved for publication yet."}</p><p className="mt-2 text-sm text-charcoal/50">{ko ? "수집과 검토가 끝난 법안부터 차례로 공개합니다." : "Records will appear after collection and editorial review."}</p></div>}

      <div>{filtered.map((bill) => {
        const summary = ko ? bill.analysis?.summary_ko : bill.analysis?.summary_en;
        const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
        return <Link key={bill.bill_id} to={`/monitoring/legislation/${bill.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
          <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-green-deep text-white"}`}>{ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.proposed_date)}</p></div>
          <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 자료와 조문을 검토하고 있습니다." : "Official records and provisions are under review.")}</p><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/45"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</p></div>
          <span className="flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "분석 보기" : "View analysis"}<ArrowRight size={15}/></span>
        </Link>;
      })}</div>
    </div>
  </section>;
}
