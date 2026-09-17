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
  const stageIndex = Math.max(0, stages.findIndex((stage) => stage.ko === bill.current_stage));

  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-9 sm:py-12"><div className="container-page max-w-5xl"><Link to="/monitoring/legislation" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "입법감시 목록" : "Legislative Watch"}</Link><div className="mt-4 border-t-2 border-navy pt-4"><div className="flex flex-wrap gap-2 text-xs font-extrabold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/45">{bill.bill_no}</span>}<span className="border border-green-deep/20 px-2 py-0.5">{bill.current_stage || (ko ? "발의" : "Introduced")}</span>{bill.is_featured && <span className="inline-flex items-center gap-1 text-gold"><Star size={13} fill="currentColor"/>{ko ? "씨앗이 주목하는 법안" : "Seed Voice selection"}</span>}</div><h1 className="article-detail-title mt-3">{title}</h1><p className="article-summary">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 제안 자료를 바탕으로 법안의 영향을 검토합니다." : "This record examines the bill using its official proposal materials.")}</p><div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/50"><span className="flex items-center gap-1.5"><CalendarDays size={14}/>{bill.proposed_date?.replace(/-/g, ".") || "—"}</span><span>{bill.proposer || bill.representative_proposer}</span><span className="ml-auto flex items-center gap-1.5 font-bold text-green-deep"><Scale size={14}/>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span></div></div></div></header>

    <div className="article-content-frame py-9 sm:py-12">
      <section className="reading-column border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">01 · {ko ? "법안 핵심 요약" : "CORE SUMMARY"}</span><p className="mt-3 text-base font-semibold leading-8 text-navy">{summary || (ko ? "이 페이지는 국회 공개자료를 자동 수집한 뒤 대표 승인과 편집 검토를 거쳐 공개했습니다. 예상 효과와 위험은 확정된 사실이 아니라 법안 내용에서 도출한 분석입니다." : "This page was collected from official records and published after editorial approval. Expected effects and risks are analysis, not established facts.")}</p></section>

      <NumberedSection number="02" title={ko ? "무엇이 실제로 바뀌는가" : "What would actually change"}><Bullets items={changes} ko={ko}/>{ko && bill.main_content && <p className="article-copy article-copy-long mt-6 border-t border-green-deep/10 pt-5">{bill.main_content}</p>}</NumberedSection>

      <NumberedSection number="03" title={ko ? "시민·기업·행정권력에 미칠 수 있는 영향" : "Possible impact on citizens, enterprise and public authority"}>
        <div className="grid gap-6 lg:grid-cols-3"><Impact title={ko ? "시민" : "Citizens"}><Bullets items={citizenImpact} ko={ko}/></Impact><Impact title={ko ? "기업과 시장" : "Enterprise"}><Bullets items={businessImpact} ko={ko}/></Impact><Impact title={ko ? "행정권력" : "Public authority"}><Bullets items={authorityImpact} ko={ko}/></Impact></div>
      </NumberedSection>

      <NumberedSection number="04" title={ko ? "발의 취지와 정부·발의자 측 논리" : "Rationale offered by sponsors or government"}><p className="article-copy article-copy-long">{officialRationale || (ko ? "공식 제안 이유가 공개자료에서 충분히 확인되지 않았습니다." : "The official rationale is not sufficiently available in the public record.")}</p></NumberedSection>

      <NumberedSection number="05" title={ko ? "남는 질문과 반론 가능성" : "Open questions and possible counterarguments"}>
        <div className="space-y-7"><Impact title={ko ? "예상되는 위험과 반론" : "Risks and counterarguments"}><Bullets items={risks} ko={ko}/></Impact><Impact title={ko ? "계속 확인할 질문" : "Questions to keep asking"}><Bullets items={questions} ko={ko}/></Impact>{gaps?.length ? <Impact title={ko ? "아직 부족한 근거" : "Evidence still missing"}><Bullets items={gaps} ko={ko} empty={false}/></Impact> : null}</div>
      </NumberedSection>

      <section className="article-section reading-column border-2 border-green-deep bg-ivory p-6 shadow-[7px_7px_0_0_rgba(24,83,66,0.12)] sm:p-8"><div className="flex items-center gap-2 text-green-deep"><Star size={17} fill="currentColor"/><span className="text-[11px] font-black tracking-[.18em]">06 · SEED VOICE VIEW</span></div><h2 className="editorial-title mt-3 text-2xl font-bold text-navy">{ko ? "씨앗은 이렇게 봅니다" : "How Seed Voice sees it"}</h2><p className="mt-4 whitespace-pre-line text-base leading-8 text-charcoal/75">{seedView || (ko ? "씨드보이스의 별도 판단 문안은 아직 작성되지 않았습니다. 위 내용은 공식자료와 자동 분석을 편집 검토한 사실·영향 정리입니다." : "Seed Voice has not yet published a separate editorial view. The material above separates official facts from assessed effects.")}</p><p className="mt-5 border-t border-green-deep/15 pt-4 text-xs leading-6 text-charcoal/50">{ko ? "이 상자는 전체 목록의 사실 정보와 구분되는 씨드보이스의 관찰·질문·우려입니다." : "This box is editorial observation, kept separate from factual listing data."}</p></section>

      <NumberedSection number="07" title={ko ? "법안 진행 타임라인" : "Legislative timeline"}>
        <ol className="grid gap-2 sm:grid-cols-5">{stages.map((stage, index) => <li key={stage.ko} className={`border-t-4 px-3 py-4 ${index <= stageIndex ? "border-green-deep bg-green-pale text-green-deep" : "border-charcoal/15 bg-white text-charcoal/35"}`}><span className="text-[10px] font-black">{String(index + 1).padStart(2, "0")}</span><strong className="mt-1 block text-sm">{ko ? stage.ko : stage.en}</strong>{index === stageIndex && <span className="mt-1 block text-[10px] font-bold">{ko ? "현재 단계" : "Current"}</span>}</li>)}</ol>
        {events.length > 0 && <ol className="mt-8 space-y-5 border-l-2 border-green-deep/20 pl-6">{events.map((event) => <li key={event.id}><time className="text-xs font-black text-green-deep">{event.event_date?.replace(/-/g, ".") || "—"}</time><h3 className="mt-1 font-bold text-navy">{event.title}</h3>{event.description && <p className="mt-1 text-sm leading-7 text-charcoal/60">{event.description}</p>}</li>)}</ol>}
      </NumberedSection>

      <section className="article-section article-section-long reading-column"><p className="section-kicker">08 · {ko ? "원문 및 공식 출처" : "OFFICIAL SOURCES"}</p><h2 className="article-section-title mt-2">{ko ? "출처와 확인 상태" : "Sources and verification status"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/60">{ko ? `국회 공개자료 · 마지막 확인 ${bill.source_checked_at.slice(0, 10).replace(/-/g, ".")} · 분석 신뢰도 ${analysis.confidence || "자료 부족"}` : `National Assembly public data · Last checked ${bill.source_checked_at.slice(0, 10)} · Analysis confidence ${analysis.confidence || "insufficient evidence"}`}</p><div className="mt-4 flex flex-wrap gap-3">{bill.detail_url && <a href={bill.detail_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "국회 의안정보" : "Official bill record"}<ExternalLink size={14}/></a>}{bill.full_text_url && <a href={bill.full_text_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "법안 원문" : "Bill text"}<ExternalLink size={14}/></a>}</div></section>

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
