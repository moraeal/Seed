import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, Scale, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../auth";
import ContentAccountability from "../components/ContentAccountability";
import { useLanguage } from "../i18n";
import { getLegislativeBillBySlug, getLegislativeBillEvents, type LegislativeBill, type LegislativeBillEvent } from "../lib/legislativeMonitoring";

function Bullets({ items, ko, empty = true }: { items?: string[]; ko: boolean; empty?: boolean }) {
  if (!items?.length) return empty ? <p className="text-sm leading-7 text-charcoal/50">{ko ? "확인할 수 있는 공식 자료가 충분하지 않습니다." : "The available official record is not sufficient to assess this point."}</p> : null;
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-base leading-8 text-charcoal/75"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{item}</span></li>)}</ul>;
}

const stages = [
  { ko: "발의", en: "Introduced" },
  { ko: "소관위", en: "Committee" },
  { ko: "심사", en: "Review" },
  { ko: "본회의", en: "Plenary" },
  { ko: "공포", en: "Promulgated" },
];

function take(items?: string[], count = 2) {
  return (items || []).filter(Boolean).slice(0, count);
}

function shortOfficialExplanation(value?: string | null, ko = true) {
  if (!value) return ko ? "공식 제안 이유가 충분히 공개되지 않았습니다." : "The official explanation is not sufficiently available.";
  const sentences = value.match(/[^.!?。]+[.!?。]?/g) || [value];
  const brief = sentences.slice(0, 2).join(" ").trim();
  return brief.length > 260 ? `${brief.slice(0, 257).trim()}…` : brief;
}

export default function LegislativeBillDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const { session } = useAuth();
  const ko = language === "ko";
  const [bill, setBill] = useState<LegislativeBill | null>(null);
  const [events, setEvents] = useState<LegislativeBillEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLegislativeBillBySlug(slug, session).then(async (item) => {
      setBill(item);
      if (item) setEvents(await getLegislativeBillEvents(item.bill_id, session));
    }).finally(() => setLoading(false));
  }, [slug, session?.access_token]);

  if (loading) return <div className="container-page min-h-[55vh] py-24 text-center text-sm text-charcoal/50">{ko ? "법안 자료를 불러오는 중입니다." : "Loading bill record…"}</div>;
  if (!bill) return <div className="container-page min-h-[55vh] py-24 text-center"><h1 className="editorial-title text-3xl font-bold text-navy">{ko ? "공개된 법안 기록을 찾을 수 없습니다." : "This published bill record could not be found."}</h1><Link to="/monitoring/legislation" className="button-primary mt-7">{ko ? "입법감시 목록" : "Legislative Watch"}</Link></div>;

  const analysis = bill.analysis || {};
  const summary = ko ? bill.public_summary_ko || analysis.summary_ko : bill.public_summary_en || analysis.summary_en;
  const title = ko ? bill.title : analysis.title_en || bill.title;
  const officialRationale = ko ? (bill.proposal_reason || bill.official_summary) : analysis.official_rationale_en;
  const changes = ko ? analysis.changes_ko : analysis.changes_en;
  const citizenImpact = ko ? analysis.citizen_impact_ko : analysis.citizen_impact_en;
  const businessImpact = ko ? analysis.business_impact_ko : analysis.business_impact_en;
  const authorityImpact = ko ? analysis.authority_shift_ko : analysis.authority_shift_en;
  const risks = ko ? analysis.risks_ko : analysis.risks_en;
  const questions = ko ? analysis.watch_points_ko : analysis.watch_points_en;
  const gaps = ko ? analysis.evidence_gaps_ko : analysis.evidence_gaps_en;
  const seedView = ko ? bill.seed_view_ko : bill.seed_view_en || bill.seed_view_ko;
  const keyChanges = take(changes?.length ? changes : [...(citizenImpact || []), ...(businessImpact || []), ...(authorityImpact || [])]);
  const stageIndex = Math.max(0, stages.findIndex((stage) => stage.ko === bill.current_stage));

  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-9 sm:py-12"><div className="container-page max-w-5xl"><Link to="/monitoring/legislation" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "입법감시 목록" : "Legislative Watch"}</Link><div className="mt-4 border-t-2 border-navy pt-4"><div className="flex flex-wrap gap-2 text-xs font-extrabold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/45">{bill.bill_no}</span>}<span className="border border-green-deep/20 px-2 py-0.5">{bill.current_stage || (ko ? "발의" : "Introduced")}</span>{bill.is_featured && <span className="inline-flex items-center gap-1 text-gold"><Star size={13} fill="currentColor"/>{ko ? "씨앗이 주목하는 법안" : "Seed Voice selection"}</span>}</div><h1 className="article-detail-title mt-3">{title}</h1><p className="article-summary">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 제안 자료를 바탕으로 법안의 영향을 검토합니다." : "This record examines the bill using its official proposal materials.")}</p><div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/50"><span className="flex items-center gap-1.5"><CalendarDays size={14}/>{bill.proposed_date?.replace(/-/g, ".") || "—"}</span><span>{bill.proposer || bill.representative_proposer}</span><span className="ml-auto flex items-center gap-1.5 font-bold text-green-deep"><Scale size={14}/>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span></div></div></div></header>

    <div className="article-content-frame py-9 sm:py-12">
      <section className="reading-column border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">01 · {ko ? "이 법안, 한 문장으로" : "IN ONE SENTENCE"}</span><p className="mt-3 text-base font-semibold leading-8 text-navy">{summary || (ko ? "이 페이지는 국회 공개자료를 바탕으로, 시민의 삶에 바뀔 수 있는 부분과 남은 쟁점을 정리합니다." : "This page explains the likely changes for citizens and the questions that remain, based on public legislative records.")}</p></section>

      <NumberedSection number="02" title={ko ? "시민의 삶에서 크게 바뀌는 두 가지" : "The two biggest practical changes"}>
        <div className="grid gap-4 sm:grid-cols-2">{keyChanges.length ? keyChanges.map((change, index) => <div key={change} className="border border-green-deep/15 bg-white p-5 shadow-[5px_5px_0_0_rgba(24,83,66,0.08)]"><span className="text-3xl font-black text-gold">0{index + 1}</span><p className="mt-4 text-base font-bold leading-7 text-navy">{change}</p></div>) : <p className="text-sm leading-7 text-charcoal/50">{ko ? "공개된 자료만으로 시민 생활의 핵심 변화를 특정하기 어렵습니다." : "The public record is not sufficient to identify the main everyday changes."}</p>}</div>
        <p className="mt-5 text-xs leading-6 text-charcoal/50">{ko ? "아직 법률로 확정된 내용이 아닙니다. 국회 심사 과정에서 대상과 범위가 달라질 수 있습니다." : "This is not yet enacted law. Its scope may change during parliamentary review."}</p>
      </NumberedSection>

      <NumberedSection number="03" title={ko ? "한눈에 보는 변화" : "The change at a glance"}>
        <p className="mb-5 text-sm leading-7 text-charcoal/60">{ko ? "법률 용어 대신, 이 법안이 누구의 선택과 책임을 어떻게 바꿀 수 있는지 세 장의 정보그림으로 정리했습니다." : "Three visual cards show how the bill could change choices and responsibility."}</p>
        <div className="grid gap-4 md:grid-cols-3"><ChangePanel number="01" title={ko ? "시민의 선택" : "Citizen choice"} items={take(citizenImpact)} empty={ko ? "내 생활에서 어떤 절차·비용·선택이 달라지는지 확인합니다." : "Check which procedures, costs, or choices in daily life may change."}/><ChangePanel number="02" title={ko ? "일과 기업의 자유" : "Work and enterprise"} items={take(businessImpact)} empty={ko ? "사업·고용·가격·투자에 새 부담이나 기회가 생기는지 봅니다." : "Check for new burdens or opportunities in business, work, pricing, and investment."}/><ChangePanel number="03" title={ko ? "정부의 권한" : "Government power"} items={take(authorityImpact)} empty={ko ? "누가 기준을 정하고, 허가·감독·제재를 하는지 봅니다." : "Check who sets standards and exercises permission, oversight, or sanctions."}/></div>
      </NumberedSection>

      <section className="article-section reading-column border-y border-green-deep/15 bg-ivory px-6 py-6 sm:px-8"><span className="section-kicker">04 · {ko ? "발의 측 설명" : "SPONSORS' EXPLANATION"}</span><h2 className="mt-2 text-lg font-extrabold text-navy">{ko ? "왜 이 법안을 내놓았나" : "Why was this bill proposed?"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/70">{shortOfficialExplanation(officialRationale, ko)}</p><p className="mt-3 text-xs leading-6 text-charcoal/45">{ko ? "국회에 제출된 제안 이유를 독자가 읽기 쉽게 압축한 것입니다. 씨앗의 판단은 아래와 구분합니다." : "This is a reader-friendly condensation of the official rationale and is separate from Seed Voice's view below."}</p></section>

      <NumberedSection number="05" title={ko ? "그래서, 무엇을 주목해야 하나" : "What deserves attention"}>
        <div className="grid gap-5 md:grid-cols-2"><Impact title={ko ? "논란이 될 수 있는 지점" : "Potential points of dispute"}><Bullets items={take(risks, 3)} ko={ko}/></Impact><Impact title={ko ? "국회에 물어야 할 질문" : "Questions Parliament should answer"}><Bullets items={take(questions, 3)} ko={ko}/></Impact></div>{gaps?.length ? <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-7 text-charcoal/60"><strong className="text-navy">{ko ? "아직 확인되지 않은 점: " : "Still unverified: "}</strong>{take(gaps, 2).join(" ")}</p> : null}
      </NumberedSection>

      <SeedView seedView={seedView} ko={ko} risks={risks} citizenImpact={citizenImpact} businessImpact={businessImpact} authorityImpact={authorityImpact}/>

      <NumberedSection number="07" title={ko ? "법안 진행 타임라인" : "Legislative timeline"}>
        <ol className="grid gap-2 sm:grid-cols-5">{stages.map((stage, index) => <li key={stage.ko} className={`border-t-4 px-3 py-4 ${index <= stageIndex ? "border-green-deep bg-green-pale text-green-deep" : "border-charcoal/15 bg-white text-charcoal/35"}`}><span className="text-[10px] font-black">{String(index + 1).padStart(2, "0")}</span><strong className="mt-1 block text-sm">{ko ? stage.ko : stage.en}</strong>{index === stageIndex && <span className="mt-1 block text-[10px] font-bold">{ko ? "현재 단계" : "Current"}</span>}</li>)}</ol>
        {events.length > 0 && <ol className="mt-8 space-y-5 border-l-2 border-green-deep/20 pl-6">{events.map((event) => <li key={event.id}><time className="text-xs font-black text-green-deep">{event.event_date?.replace(/-/g, ".") || "—"}</time><h3 className="mt-1 font-bold text-navy">{event.title}</h3>{event.description && <p className="mt-1 text-sm leading-7 text-charcoal/60">{event.description}</p>}</li>)}</ol>}
      </NumberedSection>

      <section className="article-section article-section-long reading-column"><p className="section-kicker">08 · {ko ? "원문 및 공식 출처" : "OFFICIAL SOURCES"}</p><h2 className="article-section-title mt-2">{ko ? "출처와 확인 상태" : "Sources and verification status"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/60">{ko ? `국회 공개자료 · 마지막 확인 ${bill.source_checked_at.slice(0, 10).replace(/-/g, ".")} · 분석 신뢰도 ${analysis.confidence || "자료 부족"}` : `National Assembly public data · Last checked ${bill.source_checked_at.slice(0, 10)} · Analysis confidence ${analysis.confidence || "insufficient evidence"}`}</p><div className="mt-4 flex flex-wrap gap-3">{bill.detail_url && <a href={bill.detail_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "국회 의안정보" : "Official bill record"}<ExternalLink size={14}/></a>}{bill.full_text_url && <a href={bill.full_text_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "법안 원문 보기" : "Read bill text"}<ExternalLink size={14}/></a>}</div></section>

      <section className="article-section article-section-long reading-column"><p className="section-kicker">09 · {ko ? "이어읽기" : "RELATED READING"}</p><h2 className="article-section-title mt-2">{ko ? "관련 씨앗브리핑·뉴스트래커·칼럼" : "Related Seed Voice coverage"}</h2>{bill.related_content?.length ? <div className="mt-4 divide-y divide-green-deep/15 border-y border-green-deep/15">{bill.related_content.map((item) => <a key={`${item.url}-${item.title}`} href={item.url} className="flex items-center justify-between gap-4 py-4 font-bold text-navy hover:text-green-mid"><span><small className="mr-2 text-[10px] font-black text-green-deep">{item.category || (ko ? "이어읽기" : "Related")}</small>{item.title}</span><ArrowRight size={15}/></a>)}</div> : <p className="mt-3 text-sm leading-7 text-charcoal/50">{ko ? "연결된 씨드보이스 콘텐츠는 아직 없습니다. 관련 브리핑이 발행되면 이 기록에 이어 붙입니다." : "No related Seed Voice coverage has been linked yet."}</p>}</section>

      <ContentAccountability postSlug={`legislation-${bill.slug}`} publishedDate={(bill.published_at || bill.proposed_date || bill.created_at).slice(0, 10)}/>
    </div>
  </article>;
}

function NumberedSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="article-section article-section-long reading-column"><p className="section-kicker">{number}</p><h2 className="article-section-title mt-2">{title}</h2><div className="mt-5">{children}</div></section>;
}

function Impact({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="border-t-2 border-navy pt-3"><h3 className="mb-4 text-sm font-extrabold text-navy">{title}</h3>{children}</div>;
}

function ChangePanel({ number, title, items, empty }: { number: string; title: string; items: string[]; empty: string }) {
  return <div className="relative overflow-hidden border border-green-deep/20 bg-white p-5"><span className="absolute right-4 top-3 text-5xl font-black leading-none text-green-pale">{number}</span><span className="section-kicker">CHANGE MAP</span><h3 className="mt-2 text-lg font-extrabold text-navy">{title}</h3><div className="mt-5 border-l-2 border-gold pl-3">{items.length ? <ul className="space-y-3">{items.map((item) => <li key={item} className="text-sm font-semibold leading-6 text-charcoal/75">{item}</li>)}</ul> : <p className="text-sm leading-6 text-charcoal/60">{empty}</p>}</div></div>;
}

function SeedView({ seedView, ko, risks, citizenImpact, businessImpact, authorityImpact }: { seedView?: string | null; ko: boolean; risks?: string[]; citizenImpact?: string[]; businessImpact?: string[]; authorityImpact?: string[] }) {
  const concern = take(risks, 1)[0] || take(authorityImpact, 1)[0] || take(citizenImpact, 1)[0] || take(businessImpact, 1)[0];
  return <section className="article-section reading-column border-2 border-green-deep bg-ivory p-6 shadow-[7px_7px_0_0_rgba(24,83,66,0.12)] sm:p-8"><div className="flex items-center gap-2 text-green-deep"><Star size={17} fill="currentColor"/><span className="text-[11px] font-black tracking-[.18em]">06 · SEED VOICE VIEW</span></div><h2 className="editorial-title mt-3 text-2xl font-bold text-navy">{ko ? "씨앗은 이렇게 봅니다" : "How Seed Voice sees it"}</h2>{seedView ? <p className="mt-4 whitespace-pre-line text-base leading-8 text-charcoal/75">{seedView}</p> : <div className="mt-5 grid gap-4"><SeedCriterion title={ko ? "시민과 기업의 자유" : "Freedom for citizens and enterprise"} text={ko ? "좋은 목적이라도 시민의 선택과 기업의 자율을 불필요하게 좁히지 않는지 따져야 합니다." : "A good aim must not needlessly narrow civic choice or business autonomy."}/><SeedCriterion title={ko ? "권력의 제한" : "Limits on power"} text={ko ? `기준을 정하고 감독·제재할 권한이 어디에 집중되는지, 그 권한을 시민이 검증하고 이의를 제기할 수 있는지 봐야 합니다.${concern ? ` 특히 ‘${concern}’은 심사 과정에서 구체적인 안전장치가 필요한 대목입니다.` : ""}` : `We ask where rule-making, oversight, and sanctioning power concentrates—and whether citizens can scrutinize and challenge it.${concern ? ` “${concern}” needs specific safeguards during review.` : ""}`}/><SeedCriterion title={ko ? "시민의 성장" : "Active citizens"} text={ko ? "시민을 보호의 대상이나 행정의 협력자로만 두지 말고, 정보를 보고 판단하며 국가에 답을 요구할 수 있게 해야 합니다." : "Citizens should be able to see information, judge it, and demand answers—not remain only recipients of protection or administrative partners."}/></div>}<p className="mt-5 border-t border-green-deep/15 pt-4 text-xs leading-6 text-charcoal/50">{ko ? "이 상자는 전체 목록의 사실 정보와 구분되는 씨드보이스의 초안 관찰입니다. 법안별 편집 판단은 추가 검토 뒤 보완할 수 있습니다." : "This box is Seed Voice's preliminary editorial observation, separate from the factual record and subject to further review."}</p></section>;
}

function SeedCriterion({ title, text }: { title: string; text: string }) {
  return <div className="border-l-2 border-gold bg-white/70 px-4 py-3"><h3 className="text-sm font-extrabold text-navy">{title}</h3><p className="mt-1.5 text-sm leading-7 text-charcoal/70">{text}</p></div>;
}
