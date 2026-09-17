import { ArrowRight, Building2, CalendarDays, FileSearch, Scale, Star } from "lucide-react";
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
  const featured = useMemo(() => bills
    .filter((bill) => bill.is_featured)
    .sort((a, b) => (a.featured_order ?? 99) - (b.featured_order ?? 99))
    .slice(0, 3), [bills]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "새 법안이 시민의 선택과 권리, 기업의 활동, 국가기관의 권한과 재정에 어떤 변화를 만드는지 추적합니다. 확인된 조문과 예상 효과를 구분하고, 심사 과정에서 달라지는 내용도 같은 기록에 이어 붙입니다." : "We track how proposed laws may change civic rights and choice, enterprise, public authority and fiscal exposure. Confirmed provisions are separated from expected effects, with later amendments and decisions kept in the same record."}</p>
      </div>
    </header>

    <div className="container-page py-8 sm:py-10">
      {featured.length > 0 && <section className="mb-10 border-2 border-green-deep bg-ivory shadow-[8px_8px_0_0_rgba(24,83,66,0.12)]">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-green-deep/20 bg-green-deep px-5 py-5 text-white sm:px-7">
          <div><p className="flex items-center gap-2 text-[11px] font-black tracking-[.18em] text-gold"><Star size={14} fill="currentColor"/>SEED VOICE EDITOR'S CHOICE</p><h2 className="editorial-title mt-2 text-2xl font-bold sm:text-3xl">{ko ? "씨앗이 주목하는 법안" : "Bills Seed Voice Is Watching"}</h2></div>
          <p className="max-w-xl text-xs leading-6 text-white/70">{ko ? "전체 승인 법안과 구분해, 시민의 권리와 자유·기업의 도전·재정 부담·권력 통제에 미칠 영향을 씨드보이스의 판단으로 선정합니다." : "An editorial selection based on civic rights and freedom, enterprise, fiscal exposure and checks on power."}</p>
        </div>
        <div className={`grid ${featured.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {featured.map((bill, index) => {
            const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
            const reason = ko ? bill.featured_reason_ko : bill.featured_reason_en || bill.featured_reason_ko;
            return <article key={bill.bill_id} className="flex flex-col border-b border-green-deep/15 p-6 last:border-b-0 lg:border-r lg:last:border-r-0 sm:p-7">
              <div className="flex items-center justify-between gap-3"><span className="text-[11px] font-black tracking-[.16em] text-gold">WATCH {String(index + 1).padStart(2, "0")}</span><span className="border border-green-deep/20 px-2 py-1 text-[11px] font-extrabold text-green-deep">{bill.current_stage || (ko ? "발의" : "Introduced")}</span></div>
              <h3 className="editorial-title mt-4 text-xl font-bold leading-snug text-navy sm:text-2xl">{title}</h3>
              <p className="mt-3 text-xs text-charcoal/50">{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")} · {dateText(bill.proposed_date)}</p>
              <div className="mt-5 border-l-4 border-gold bg-white px-4 py-3"><strong className="text-xs text-green-deep">{ko ? "왜 지금 봐야 하는가" : "Why it matters now"}</strong><p className="mt-1 text-sm leading-7 text-charcoal/70">{reason || (ko ? "씨드보이스가 공개 자료와 법안의 파급 범위를 검토하고 있습니다." : "Seed Voice is reviewing the official record and the bill's potential reach.")}</p></div>
              {bill.observation_keywords?.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{bill.observation_keywords.slice(0, 4).map((keyword) => <span key={keyword} className="bg-green-pale px-2.5 py-1 text-[11px] font-extrabold text-green-deep">#{keyword}</span>)}</div>}
              <Link to={`/monitoring/legislation/${bill.slug}`} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-extrabold text-green-deep">{ko ? "상세 브리핑 보기" : "Read the briefing"}<ArrowRight size={15}/></Link>
            </article>;
          })}
        </div>
      </section>}

      <div className="mb-4 flex items-end justify-between gap-4"><div><p className="section-kicker">APPROVED RECORDS</p><h2 className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "승인된 법안 전체" : "All approved bills"}</h2></div><span className="text-xs font-bold text-charcoal/45">{bills.length.toLocaleString()}{ko ? "건" : " records"}</span></div>
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
        const summary = ko ? bill.public_summary_ko || bill.analysis?.summary_ko : bill.public_summary_en || bill.analysis?.summary_en;
        const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
        return <Link key={bill.bill_id} to={`/monitoring/legislation/${bill.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
          <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${bill.importance_level === "critical" ? "bg-red-800 text-white" : bill.importance_level === "high" ? "bg-gold text-navy" : "bg-green-deep text-white"}`}>{ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{dateText(bill.proposed_date)}</p></div>
          <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}<span className="text-charcoal/40">{bill.current_stage || (ko ? "발의" : "Introduced")}</span>{bill.is_featured && <span className="inline-flex items-center gap-1 text-gold"><Star size={12} fill="currentColor"/>{ko ? "씨앗 주목" : "Seed pick"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 자료와 조문을 검토하고 있습니다." : "Official records and provisions are under review.")}</p><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/45"><Building2 size={14}/>{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")}</p></div>
          <span className="flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "분석 보기" : "View analysis"}<ArrowRight size={15}/></span>
        </Link>;
      })}</div>
    </div>
  </section>;
}
