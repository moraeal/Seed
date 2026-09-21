import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Building2, CircleAlert, ExternalLink, FileCheck2, Landmark, ReceiptText, Scale, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import SafeImage from "../components/SafeImage";
import ShareButton from "../components/ShareButton";
import {
  publicInstitutionReformTasks,
  publicInstitutionReformTracker,
  reformLensLabels,
  reformStageLabels,
  type ReformLens,
} from "../data/publicInstitutionReformTracker";
import { useLanguage } from "../i18n";

const lensIcons = {
  all: Landmark,
  tax: ReceiptText,
  tariff: WalletCards,
  housing: Building2,
  "region-jobs": Scale,
};

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function PublicInstitutionReformTrackerPage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const t = <T extends { ko: string; en: string }>(value: T) => value[language];
  const [activeLens, setActiveLens] = useState<ReformLens | "all">("all");
  const filteredTasks = useMemo(
    () => activeLens === "all" ? publicInstitutionReformTasks : publicInstitutionReformTasks.filter((task) => task.lenses.includes(activeLens)),
    [activeLens],
  );

  return <article className="bg-paper pb-14 sm:pb-20">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page max-w-6xl py-5 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "시민감시" : "Civic Watch"}</Link>
          <ShareButton title={t(publicInstitutionReformTracker.title)} text={t(publicInstitutionReformTracker.summary)} />
        </div>
        <div className="mt-4 grid gap-7 border-t-2 border-navy pt-5 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2.5"><span className="section-kicker">SPECIAL WATCH · PUBLIC INSTITUTIONS</span><span className="rounded-full bg-red-700 px-3 py-1 text-[11px] font-extrabold text-white">{t(publicInstitutionReformTracker.status)}</span></div>
            <h1 className="editorial-title mt-4 text-balance text-[2.25rem] font-bold leading-[1.12] text-navy sm:text-[3.2rem]">{t(publicInstitutionReformTracker.title)}</h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-charcoal/68 sm:text-base sm:leading-8">{t(publicInstitutionReformTracker.summary)}</p>
            <p className="mt-5 border-l-4 border-gold pl-4 text-lg font-extrabold leading-8 text-green-deep">{ko ? "기관은 줄고, 국민 부담과 정부 권한도 줄어드는가?" : "Will institutions, public cost and government power all shrink together?"}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-charcoal/45"><time>{ko ? "최초 공개 2026.09.21" : "First published Sep. 21, 2026"}</time><span>{ko ? "새 사실이 확인될 때만 갱신" : "Updated only when material facts change"}</span></div>
          </div>
          {publicInstitutionReformTracker.heroImage && <figure className="overflow-hidden border border-green-deep/12 bg-white shadow-soft"><SafeImage src={publicInstitutionReformTracker.heroImage.src} alt={t(publicInstitutionReformTracker.heroImage.alt)} className="aspect-[4/3] w-full object-cover" loading="eager"/><figcaption className="border-t border-green-deep/10 px-4 py-3 text-xs leading-5 text-charcoal/55">{t(publicInstitutionReformTracker.heroImage.caption)} <span className="text-charcoal/35">· {t(publicInstitutionReformTracker.heroImage.credit)}</span></figcaption></figure>}
        </div>
      </div>
    </header>

    <div className="container-page max-w-6xl py-9 sm:py-12">
      <section aria-labelledby="summary-title">
        <div className="border-b-2 border-navy pb-4"><span className="section-kicker">30-SECOND BRIEF</span><h2 id="summary-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "30초로 보는 개혁의 현재" : "The reform in 30 seconds"}</h2></div>
        <div className="mt-4 grid gap-px overflow-hidden bg-green-deep/12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["109", ko ? "정부가 제시한 순감축 목표" : "Government's net reduction target"],
            ["15", ko ? "전략적 구조개혁" : "Strategic restructuring"],
            ["11", ko ? "유사·중복기능 일원화" : "Overlapping-function consolidation"],
            ["83", ko ? "자회사·소규모기관 통합" : "Subsidiaries and small bodies"],
          ].map(([value, label]) => <div key={label} className="bg-white p-5 sm:p-6"><strong className="editorial-title text-4xl font-bold text-red-700">{value}</strong><p className="mt-2 text-sm font-extrabold leading-6 text-navy">{label}</p></div>)}
        </div>
        <aside className="mt-4 flex gap-3 border-l-4 border-gold bg-gold/10 p-5"><CircleAlert className="mt-0.5 shrink-0 text-gold" size={21}/><p className="text-sm leading-7 text-charcoal/70">{ko ? "109는 개편 대상기관의 단순 명단 수가 아니라 통합·청산 뒤 줄이겠다는 목표입니다. LH 분리처럼 기관 수가 늘 수 있는 조치와 공항 통합 재검토도 같은 계획에 포함돼 있습니다." : "The figure 109 is a net reduction target after mergers and liquidation, not a simple list of affected bodies. The same plan also includes an LH split that may add an entity and an airport merger that remains under review."}</p></aside>
      </section>

      <section className="mt-12" aria-labelledby="lens-title">
        <div className="flex flex-col gap-3 border-b-2 border-navy pb-4 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">WHAT CHANGES FOR ME</span><h2 id="lens-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "내 생활에서 찾아보기" : "Find what changes in your life"}</h2></div><p className="max-w-xl text-sm leading-7 text-charcoal/55">{ko ? "기관 이름이 아니라 세금·요금·주택·지역과 일자리에서 출발합니다." : "Start with taxes, bills, housing, regions and jobs—not agency names."}</p></div>
        <div className="mt-5 grid gap-2 sm:grid-cols-5" role="group" aria-label={ko ? "시민 관심사 필터" : "Citizen-interest filters"}>
          {(Object.keys(reformLensLabels) as Array<ReformLens | "all">).map((lens) => { const Icon = lensIcons[lens]; const active = activeLens === lens; return <button key={lens} type="button" onClick={() => setActiveLens(lens)} className={`flex min-h-14 items-center justify-center gap-2 px-4 py-3 text-sm font-extrabold transition ${active ? "bg-green-deep text-white shadow-soft" : "bg-white text-navy hover:bg-green-pale"}`} aria-pressed={active}><Icon size={17}/>{t(reformLensLabels[lens])}</button>; })}
        </div>
      </section>

      <section className="mt-8" aria-live="polite">
        <div className="grid gap-6">
          {filteredTasks.map((task, index) => <article key={task.id} id={task.id} className="overflow-hidden border border-green-deep/12 bg-white shadow-[0_18px_55px_rgba(23,76,58,.07)]">
            <div className="grid lg:grid-cols-[19rem_1fr]">
              <a href={task.media.url} target="_blank" rel="noreferrer" className="group flex min-w-0 flex-col bg-ivory" aria-label={`${t(task.media.outlet)}: ${t(task.media.title)}`}>
                <div className="relative aspect-video overflow-hidden bg-navy lg:aspect-auto lg:min-h-[15rem]"><SafeImage src={imageSrc(task.media.thumbnailSrc)} alt={t(task.media.thumbnailAlt)} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"/><span className="absolute left-3 top-3 bg-navy/90 px-2.5 py-1 text-[10px] font-black tracking-[.08em] text-white">{ko ? "언론 보도" : "MEDIA REPORT"}</span></div>
                <div className="flex flex-1 flex-col p-5"><div className="flex items-center justify-between gap-3 text-[11px] font-black text-green-deep"><span>{t(task.media.outlet)}</span><ExternalLink size={14}/></div><strong className="mt-2 text-base leading-6 text-navy group-hover:text-green-deep">{t(task.media.title)}</strong><time className="mt-auto pt-4 text-xs text-charcoal/40">{task.media.publishedAt.replace(/-/g, ".")}</time></div>
              </a>
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-black text-gold">{String(index + 1).padStart(2, "0")}</span><span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{t(reformStageLabels[task.stage])}</span><span className="text-xs font-extrabold text-charcoal/45">{t(task.reformType)}</span></div>
                <h3 className="editorial-title mt-3 text-2xl font-bold leading-tight text-navy sm:text-[1.8rem]">{t(task.title)}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-green-deep">{t(task.institutions)}</p>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="border-t-2 border-navy pt-3"><dt className="text-[10px] font-black tracking-[.12em] text-charcoal/40">{ko ? "정부가 약속한 것" : "GOVERNMENT PROMISE"}</dt><dd className="mt-2 text-sm leading-7 text-charcoal/70">{t(task.governmentPromise)}</dd></div>
                  <div className="border-t-2 border-green-deep pt-3"><dt className="text-[10px] font-black tracking-[.12em] text-charcoal/40">{ko ? "지금 확정된 것" : "CONFIRMED SO FAR"}</dt><dd className="mt-2 text-sm leading-7 text-charcoal/70">{t(task.confirmed)}</dd></div>
                </dl>
                <div className="mt-5 border-l-4 border-gold bg-gold/10 p-4"><p className="text-xs font-black tracking-[.1em] text-amber-800">{ko ? "시민에게 중요한 이유" : "WHY IT MATTERS"}</p><p className="mt-2 text-sm leading-7 text-charcoal/72">{t(task.citizenImpact)}</p></div>
                <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]"><div><p className="text-xs font-black text-red-700">{ko ? "아직 결정되지 않은 것" : "STILL UNDECIDED"}</p><ul className="mt-2 grid gap-1.5">{task.unresolved.map((item) => <li key={t(item)} className="flex gap-2 text-sm leading-6 text-charcoal/65"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-red-700"/><span>{t(item)}</span></li>)}</ul></div><div className="grid content-start gap-2 text-xs"><span className="bg-ivory px-3 py-2 font-bold text-navy">{t(task.lawStatus)}</span><span className="bg-ivory px-3 py-2 font-bold text-navy">{t(task.costStatus)}</span></div></div>
              </div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="mt-12 grid gap-7 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="border-b-2 border-navy pb-4"><span className="section-kicker">THE PUBLIC TEST</span><h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "씨앗이 끝까지 확인할 것" : "What SEED will verify to the end"}</h2></div>
          <ol className="mt-4 grid gap-3">{publicInstitutionReformTracker.questions.map((question, index) => <li key={index} className="grid grid-cols-[2rem_1fr] gap-3 bg-white p-5"><span className="text-sm font-black text-red-700">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-semibold leading-7 text-navy">{t(question)}</p></li>)}</ol>
        </div>
        <aside className="bg-navy p-6 text-white sm:p-7"><FileCheck2 className="text-gold" size={25}/><span className="mt-5 block text-[10px] font-black tracking-[.14em] text-gold">NEXT CHECK</span><h2 className="mt-2 text-xl font-extrabold">{ko ? "다음에 확인할 변화" : "The next changes to verify"}</h2><p className="mt-4 text-sm leading-7 text-white/78">{t(publicInstitutionReformTracker.nextCheck!)}</p><Link to="/news/lh-debt-split-power-five-merge" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/35 underline-offset-4">{ko ? "연결된 쟁점기사 읽기" : "Read the connected analysis"}<ArrowRight size={15}/></Link></aside>
      </section>

      <section className="mt-12 border-t-2 border-navy pt-6">
        <h2 className="text-2xl font-extrabold text-navy">{ko ? "공식 근거자료" : "Official records"}</h2>
        <p className="mt-2 text-sm leading-7 text-charcoal/55">{ko ? "화면에는 언론 보도를 먼저 보여주고, 사실과 진행단계는 아래 정부 원문으로 다시 확인합니다." : "Media coverage appears first on the page; facts and stages are checked again against the official records below."}</p>
        <div className="mt-4 divide-y divide-green-deep/10 border-y border-green-deep/10">{publicInstitutionReformTracker.sources.map((source, index) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 py-4"><span className="text-sm font-black text-gold">{String(index + 1).padStart(2, "0")}</span><strong className="flex-1 text-sm leading-6 text-navy group-hover:text-green-deep">{t(source.label)}</strong><ExternalLink className="mt-1 shrink-0 text-charcoal/35" size={15}/></a>)}</div>
      </section>

      <aside className="mt-10 border-l-4 border-gold bg-white p-5 sm:p-6"><div className="flex items-center gap-3"><Scale className="text-gold" size={21}/><h2 className="font-extrabold text-navy">{ko ? "이 기록의 기준" : "Method"}</h2></div><p className="mt-3 text-sm leading-7 text-charcoal/65">{t(publicInstitutionReformTracker.sourceBasis)}</p></aside>
      <ContentAccountability postSlug={`monitoring-${publicInstitutionReformTracker.slug}`} publishedDate={publicInstitutionReformTracker.updatedAt}/>
      <CommentSection postSlug={`monitoring-${publicInstitutionReformTracker.slug}`}/>
    </div>
  </article>;
}
