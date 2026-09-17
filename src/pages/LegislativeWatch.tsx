import { ArrowRight, Building2, CalendarDays, ExternalLink, FileSearch, Scale, ShieldCheck, Star } from "lucide-react";
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
  const week = useMemo(() => getKoreaWeek(), []);
  const weeklySelection = useMemo(() => bills
    .filter((bill) => Boolean(bill.proposed_date) && bill.proposed_date! >= week.start && bill.proposed_date! <= week.end && bill.importance_score >= 75)
    .sort((a, b) => b.importance_score - a.importance_score || (b.proposed_date || "").localeCompare(a.proposed_date || ""))
    .slice(0, 5), [bills, week.end, week.start]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "이번 주 새롭게 발의된 법안 가운데 중요도 75점 이상을 우선 살피고, 시민이 꼭 알아야 할 법안을 씨앗의 관점으로 골라 소개합니다. 시민이 법안을 읽고 묻고 의견을 내는 일은 국가 권력을 견제하고 시민과 기업의 자유를 넓히는 가장 현실적인 입법감시입니다." : "Each week, Seed Voice reviews newly introduced bills scoring 75 or above and highlights the measures citizens most need to understand. Reading, questioning and responding to legislation is a practical way to restrain public power and widen freedom for citizens and enterprise."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <section className="mb-10 border-2 border-green-deep bg-ivory shadow-[8px_8px_0_0_rgba(24,83,66,0.12)]">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-green-deep/20 bg-green-deep px-5 py-5 text-white sm:px-7">
          <div><p className="flex items-center gap-2 text-[11px] font-black tracking-[.18em] text-gold"><Star size={14} fill="currentColor"/>WEEKLY SEED SELECTION</p><h2 className="editorial-title mt-2 text-2xl font-bold sm:text-3xl">{ko ? "씨앗이 선정한 금주의 법안" : "Seed Voice Bills of the Week"}</h2><p className="mt-2 text-xs text-white/60">{dateText(week.start)} – {dateText(week.end)}</p></div>
          <p className="max-w-xl text-xs leading-6 text-white/75">{ko ? "이번 주 발의 법안 중 중요도 75점 이상을 추려 공개 검토가 끝난 법안 3~5건을 소개합니다. 새 법안이 승인되면 이 목록도 자동으로 바뀝니다." : "From bills introduced this week, we present three to five measures scoring 75 or above once editorial review is complete. This list updates automatically as bills are approved."}</p>
        </div>
        {weeklySelection.length > 0 ? <div className={`grid ${weeklySelection.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {weeklySelection.map((bill, index) => {
            const title = ko ? bill.title : bill.analysis?.title_en || bill.title;
            const reason = ko
              ? bill.seed_view_ko || bill.featured_reason_ko || bill.public_summary_ko || bill.analysis?.summary_ko
              : bill.seed_view_en || bill.featured_reason_en || bill.public_summary_en || bill.analysis?.summary_en;
            return <article key={bill.bill_id} className="flex flex-col border-b border-green-deep/15 p-6 last:border-b-0 lg:border-r lg:last:border-r-0 sm:p-7">
              <div className="flex items-center justify-between gap-3"><span className="text-[11px] font-black tracking-[.16em] text-gold">PICK {String(index + 1).padStart(2, "0")}</span><span className="border border-green-deep/20 px-2 py-1 text-[11px] font-extrabold text-green-deep">{ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`}</span></div>
              <h3 className="editorial-title mt-4 text-xl font-bold leading-snug text-navy sm:text-2xl">{title}</h3>
              <p className="mt-3 text-xs text-charcoal/50">{bill.proposer || bill.representative_proposer || (ko ? "제안자 확인 중" : "Sponsor pending")} · {dateText(bill.proposed_date)}</p>
              <div className="mt-5 border-l-4 border-gold bg-white px-4 py-3"><strong className="text-xs text-green-deep">{ko ? "씨앗의 관점" : "Seed Voice view"}</strong><p className="mt-1 text-sm leading-7 text-charcoal/70">{reason || (ko ? "시민의 권리와 선택, 기업 활동, 재정 부담, 국가 권한의 변화를 중심으로 살펴봅니다." : "We examine changes to civic rights and choice, enterprise, fiscal burdens and public authority.")}</p></div>
              {bill.observation_keywords?.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{bill.observation_keywords.slice(0, 4).map((keyword) => <span key={keyword} className="bg-green-pale px-2.5 py-1 text-[11px] font-extrabold text-green-deep">#{keyword}</span>)}</div>}
              <Link to={`/monitoring/legislation/${bill.slug}`} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-extrabold text-green-deep">{ko ? "상세 브리핑 보기" : "Read the briefing"}<ArrowRight size={15}/></Link>
            </article>;
          })}
        </div> : <div className="px-6 py-10 text-center sm:px-8"><Scale className="mx-auto text-gold"/><p className="mt-3 text-sm font-bold text-navy">{ko ? "이번 주 공개 검토를 마친 75점 이상 법안을 준비하고 있습니다." : "No bill scoring 75 or above has completed publication review this week yet."}</p><p className="mt-2 text-xs leading-6 text-charcoal/50">{ko ? "법안은 자동 수집·분석되지만, 공개는 편집 승인 뒤에만 이루어집니다." : "Bills are collected and analyzed automatically, but appear only after editorial approval."}</p></div>}
      </section>

      <section className="mb-10 grid gap-5 border-y-2 border-navy bg-white px-5 py-6 lg:grid-cols-[1.25fr_.75fr] lg:px-7">
        <div><p className="flex items-center gap-2 text-xs font-black text-green-deep"><ShieldCheck size={16}/>{ko ? "중요도는 이렇게 판단합니다" : "How the impact score works"}</p><p className="mt-2 text-sm leading-7 text-charcoal/65">{ko ? "법안명과 제안 이유, 주요 내용을 바탕으로 ① 시민의 권리와 선택 ② 기업 활동과 시장의 자율 ③ 과세·예산 등 재정 부담 ④ 정부기관의 권한과 집행력 ⑤ 파급 범위를 살핍니다. 점수는 주목할 법안을 가려내는 1차 기준이며, 법안에 대한 찬반 판정은 아닙니다." : "The score reviews the bill title, stated rationale and main provisions across five areas: civic rights and choice; enterprise and market autonomy; tax and fiscal burdens; public authority and enforcement; and the breadth of likely effects. It is a screening tool, not a verdict for or against a bill."}</p></div>
        <div className="border-l-4 border-gold bg-ivory px-5 py-4"><strong className="text-sm text-navy">{ko ? "최근 발의 법안을 직접 찾고 싶다면" : "Search newly introduced bills directly"}</strong><p className="mt-2 text-xs leading-6 text-charcoal/55">{ko ? "국회 의안정보시스템에서 발의일자·법안명·발의자별로 검색할 수 있습니다." : "The National Assembly's Bill Information System supports searches by introduction date, title and sponsor."}</p><a href="https://likms.assembly.go.kr/bill/main.do" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "국회 의안정보시스템에서 검색" : "Search the National Assembly system"}<ExternalLink size={14}/></a></div>
      </section>

      <div className="mb-4 flex items-end justify-between gap-4"><div><p className="section-kicker">PUBLISHED WATCH RECORDS</p><h2 className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "공개된 입법감시 기록" : "Published Legislative Watch Records"}</h2></div><span className="text-xs font-bold text-charcoal/45">{bills.length.toLocaleString()}{ko ? "건" : " records"}</span></div>
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
