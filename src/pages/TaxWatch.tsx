import { ArrowRight, CalendarDays, Clock, ExternalLink, FileSearch, ReceiptText } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MonitoringSubnav from "../components/MonitoringSubnav";
import SafeImage from "../components/SafeImage";
import { getTaxCommentaryEdition, taxCommentaries } from "../data/taxCommentaries";
import { taxPolicies } from "../data/taxWatch";
import { useLanguage } from "../i18n";

const dateText = (date: string) => date.replace(/-/g, ".");
const getKoreaDate = () => new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);

function PolicyRow({ policy, ko, index, today = false }: { policy: (typeof taxPolicies)[number]; ko: boolean; index: number; today?: boolean }) {
  return <Link to={`/monitoring/tax/${policy.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
    <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${policy.importance >= 85 ? "bg-red-800 text-white" : "bg-gold text-navy"}`}>{ko ? `중요도 ${policy.importance}` : `Impact ${policy.importance}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{ko ? `확인 ${dateText(policy.checkedAt)}` : `Checked ${policy.checkedAt}`}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{String(index + 1).padStart(2, "0")}</span><span className="text-charcoal/40">{ko ? policy.status.ko : policy.status.en}</span><span className="text-charcoal/40">{ko ? `의견 제출 ${dateText(policy.deadline)}까지` : `Comments due ${policy.deadline}`}</span>{today && <span className="text-gold">{ko ? "오늘 공개" : "Published today"}</span>}</div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{ko ? policy.title.ko : policy.title.en}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{ko ? policy.summary.ko : policy.summary.en}</p><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/45"><ReceiptText size={14}/>{ko ? policy.affected.ko : policy.affected.en}</p></div>
    <span className="flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "분석 보기" : "View analysis"}<ArrowRight size={15}/></span>
  </Link>;
}

export default function TaxWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [query, setQuery] = useState("");
  const today = useMemo(() => getKoreaDate(), []);
  const todayPolicies = useMemo(() => taxPolicies.filter((policy) => policy.checkedAt === today), [today]);
  const pastPolicies = useMemo(() => taxPolicies.filter((policy) => policy.checkedAt !== today), [today]);
  const filteredPastPolicies = useMemo(() => pastPolicies.filter((policy) => {
    const term = query.trim().toLowerCase();
    return !term || [policy.title.ko, policy.title.en, policy.summary.ko, policy.summary.en, policy.affected.ko, policy.affected.en, policy.status.ko, policy.status.en].some((value) => value.toLowerCase().includes(term));
  }), [pastPolicies, query]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="section-kicker">TAX & LEVY WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "세금감시" : "Tax Watch"}</h1></div><p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "정부와 국회가 추진하는 세금정책 가운데 시민의 부담, 기업 활동, 재산권에 큰 영향을 미치는 사안을 골라 보여드립니다. 정책 기록과 씨앗의 논평을 구분해 제공하고, 정부 발표부터 국회 심사와 실제 집행까지 계속 추적합니다." : "We track tax measures that materially affect citizens, enterprise and property rights. Policy records remain distinct from Seed Voice commentary, from government announcement through legislative review and implementation."}</p></div></header>
    <MonitoringSubnav />
    <div className="container-page py-8 sm:py-10">
      <nav aria-label={ko ? "세금감시 목록 바로가기" : "Tax watch list shortcuts"} className="mb-7 grid overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(17,43,37,0.08)] sm:grid-cols-3">
        <a href="#tax-commentary-list" className="flex items-center justify-between bg-green-deep px-5 py-4 text-sm font-black text-white transition hover:bg-green-mid sm:text-base">{ko ? "세금감시 기사" : "Watch Articles"}<span className="text-xs text-gold">{taxCommentaries.length}</span></a>
        <a href="#today-tax-policies" className="flex items-center justify-between bg-[#F7F8F4] px-5 py-4 text-sm font-black text-navy transition hover:bg-green-pale sm:text-base">{ko ? "오늘의 세금정책" : "Today's Tax Policies"}<span className="text-xs text-charcoal/40">{todayPolicies.length}</span></a>
        <a href="#past-tax-policies" className="flex items-center justify-between bg-white px-5 py-4 text-sm font-black text-navy transition hover:bg-green-pale sm:text-base">{ko ? "지난 세금정책" : "Past Tax Policies"}<span className="text-xs text-charcoal/40">{pastPolicies.length}</span></a>
      </nav>

      <section id="tax-commentary-list" className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="tax-commentary-list-title">
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6"><div><span className="section-kicker">TAX COMMENTARY</span><h2 id="tax-commentary-list-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "세금감시 기사 목록" : "Tax Watch Articles"}</h2></div><p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "시민의 부담과 정부의 재정 책임을 더 깊이 살펴야 할 정책을 골라 논평합니다. 정책 기록의 사실과 씨앗의 판단을 구분해 읽을 수 있습니다." : "We select tax measures requiring deeper scrutiny of citizens' burdens and fiscal accountability, keeping the policy record distinct from Seed Voice's judgment."}</p></div>
        <div className="grid divide-y divide-green-deep/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {taxCommentaries.map((article) => { const edition = getTaxCommentaryEdition(article, ko ? "ko" : "en"); return <Link key={article.slug} to={`/monitoring/tax/commentary/${article.slug}`} className="group grid gap-4 p-5 transition hover:bg-green-pale/45 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6"><div className="overflow-hidden bg-ivory"><SafeImage src={`${import.meta.env.BASE_URL}${article.heroSrc}`} alt={edition.heroAlt} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-green-deep"><span>{ko ? "세금 논평" : "COMMENTARY"}</span></div><h3 className="editorial-title mt-2 line-clamp-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{edition.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/60">{edition.summary}</p><div className="mt-3 flex items-center gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{article.readMinutes}{ko ? "분" : " min"}</span><span className="ml-auto flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "논평 읽기" : "Read"}<ArrowRight size={13}/></span></div></div></Link>; })}
        </div>
      </section>

      <section id="today-tax-policies" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="today-tax-policies-title">
        <div className="flex flex-col gap-3 bg-green-deep px-5 py-5 text-white sm:flex-row sm:items-end sm:justify-between sm:px-6"><div><span className="text-[11px] font-black tracking-[.18em] text-gold">TODAY'S TAX POLICIES</span><h2 id="today-tax-policies-title" className="editorial-title mt-1 text-2xl font-bold">{ko ? "오늘의 세금정책" : "Today's Tax Policies"}<span className="ml-2 text-sm text-gold">{todayPolicies.length}</span></h2></div><p className="max-w-2xl text-sm leading-6 text-white/70">{ko ? "오늘 새로 확인해 공개한 세금정책입니다. 정책명이나 분석 보기를 누르면 시민 부담과 기업 활동, 정부 권한의 변화를 확인할 수 있습니다." : "Tax measures newly verified and published today. Open a record to review changes to civic burdens, enterprise and government power."}</p></div>
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"><p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(today)}</strong><br/>{ko ? "정부 발표·입법예고·국회 심사 자료에서 중요도 75점 이상인 정책을 확인해 공개합니다." : "We review government announcements, legislative notices and National Assembly materials, publishing measures scoring 75 or above."}</p><a href="https://opinion.lawmaking.go.kr/gcom/ogLmPp" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "입법예고 검색·의견 제출" : "Search notices and comment"}<ExternalLink size={13}/></a></div>
        {todayPolicies.length ? <div>{todayPolicies.map((policy, index) => <PolicyRow key={policy.slug} policy={policy} ko={ko} index={index} today/>)}</div> : <div className="py-16 text-center"><ReceiptText className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "오늘 새로 공개된 세금정책이 아직 없습니다." : "No tax policy has been newly published today."}</p></div>}
      </section>

      <section id="past-tax-policies" className="mt-10 scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(17,43,37,0.08)]" aria-labelledby="past-tax-policies-title">
        <div className="flex flex-col gap-3 bg-ivory px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6"><div><span className="section-kicker">PAST TAX POLICIES</span><h2 id="past-tax-policies-title" className="editorial-title mt-1 text-2xl font-bold text-navy">{ko ? "지난 세금정책" : "Past Tax Policies"}<span className="ml-2 text-sm text-charcoal/40">{pastPolicies.length}</span></h2></div><p className="max-w-2xl text-sm leading-6 text-charcoal/60">{ko ? "이전에 공개된 세금감시 기록입니다. 정책명·영향 대상·진행 상태로 필요한 기록을 찾아볼 수 있습니다." : "Previously published tax-watch records. Search by policy, affected group or status."}</p></div>
        <div className="bg-[#F8F9F6] p-4"><label className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[inset_0_0_0_1px_rgba(35,74,63,0.10)]"><FileSearch size={18} className="text-green-deep"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "정책명·영향 대상·진행 상태 검색" : "Search policy, affected group or status"} className="w-full bg-transparent text-sm outline-none"/></label></div>
        {filteredPastPolicies.length ? <div>{filteredPastPolicies.map((policy, index) => <PolicyRow key={policy.slug} policy={policy} ko={ko} index={index}/>)}</div> : <div className="py-14 text-center"><FileSearch className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "조건에 맞는 지난 세금정책이 없습니다." : "No past tax policies match this search."}</p></div>}
      </section>
    </div>
  </section>;
}
