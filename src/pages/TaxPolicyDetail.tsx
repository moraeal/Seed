import { ArrowLeft, CalendarDays, ExternalLink, ReceiptText, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ContentAccountability from "../components/ContentAccountability";
import SafeImage from "../components/SafeImage";
import { getTaxPolicy, type LocalizedText } from "../data/taxWatch";
import { useLanguage } from "../i18n";

const localized = (value: LocalizedText, ko: boolean) => ko ? value.ko : value.en;
const dateText = (date: string) => date.replace(/-/g, ".");

export default function TaxPolicyDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const policy = getTaxPolicy(slug);

  if (!policy) return <div className="container-page min-h-[55vh] py-24 text-center"><h1 className="editorial-title text-3xl font-bold text-navy">{ko ? "공개된 세금정책 기록을 찾을 수 없습니다." : "This published tax policy record could not be found."}</h1><Link to="/monitoring/tax" className="button-primary mt-7">{ko ? "세금감시 목록" : "Tax Watch"}</Link></div>;

  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-9 sm:py-12">
      <div className="container-page max-w-5xl">
        <Link to="/monitoring/tax" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "세금감시 목록" : "Tax Watch"}</Link>
        <div className="mt-4 border-t-2 border-navy pt-4">
          <div className="flex flex-wrap gap-2 text-xs font-extrabold text-green-deep"><span>{localized(policy.status, ko)}</span><span className="border border-green-deep/20 px-2 py-0.5">{ko ? `의견 제출 ${dateText(policy.deadline)}까지` : `Comments due ${policy.deadline}`}</span><span className="inline-flex items-center gap-1 text-gold"><Star size={13} fill="currentColor"/>{ko ? "씨앗이 선정한 세금정책" : "Seed Voice selection"}</span></div>
          <h1 className="article-detail-title mt-3">{localized(policy.title, ko)}</h1>
          <p className="article-summary">{localized(policy.summary, ko)}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/50"><span className="flex items-center gap-1.5"><CalendarDays size={14}/>{ko ? `확인 ${dateText(policy.checkedAt)}` : `Checked ${policy.checkedAt}`}</span><span>{localized(policy.affected, ko)}</span><span className="ml-auto flex items-center gap-1.5 font-bold text-green-deep"><ReceiptText size={14}/>{ko ? `시민영향도 ${policy.importance}` : `Civic impact ${policy.importance}`}</span></div>
        </div>
      </div>
    </header>

    <div className="article-content-frame py-9 sm:py-12">
      <figure className="article-visual-wide overflow-hidden bg-navy"><SafeImage src={ko ? policy.heroImage.ko : policy.heroImage.en} alt={localized(policy.heroImage.alt, ko)} className="aspect-video w-full object-cover" loading="eager"/><figcaption className="bg-white px-4 py-3 text-xs leading-6 text-charcoal/50">{policy.heroImage.caption ? localized(policy.heroImage.caption, ko) : <>{localized(policy.heroImage.alt, ko)} · {ko ? "행정안전부 발표자료를 바탕으로 씨앗의 소리가 재구성했습니다." : "Reconstructed by Seed Voice from the Interior Ministry's official plan."}</>}</figcaption></figure>

      <section className="reading-column mt-8 border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">01 · {ko ? "이 정책, 한 문장으로" : "IN ONE SENTENCE"}</span><p className="mt-3 text-base font-semibold leading-8 text-navy">{localized(policy.oneSentence, ko)}</p></section>

      <NumberedSection number="02" title={ko ? "시민의 삶에서 크게 바뀌는 두 가지" : "The two biggest practical changes"}>
        <div className="grid gap-4 sm:grid-cols-2">{policy.keyChanges.map((change, index) => <div key={change.title.ko} className="border border-green-deep/15 bg-white p-5 shadow-[5px_5px_0_0_rgba(24,83,66,0.08)]"><span className="text-3xl font-black text-gold">0{index + 1}</span><h3 className="mt-4 text-base font-extrabold leading-7 text-navy">{localized(change.title, ko)}</h3><p className="mt-2 text-sm leading-7 text-charcoal/65">{localized(change.body, ko)}</p></div>)}</div>
        <p className="mt-5 text-xs leading-6 text-charcoal/50">{policy.processNote ? localized(policy.processNote, ko) : ko ? "아직 확정된 법률이 아닙니다. 입법예고와 국회 심사 과정에서 대상과 범위가 달라질 수 있습니다." : "This is not yet enacted law. Its scope may change during public consultation and parliamentary review."}</p>
      </NumberedSection>

      <NumberedSection number="03" title={ko ? "한눈에 보는 변화" : "The change at a glance"}>
        <p className="mb-5 text-sm leading-7 text-charcoal/60">{ko ? "법률 용어 대신, 시민의 부담과 기업 활동, 정부의 책임이 어떻게 달라지는지 세 장으로 정리했습니다." : "Three cards show how the policy affects citizens, enterprise and government responsibility."}</p>
        <div className="grid gap-4 md:grid-cols-3">{policy.changeMap.map((group, index) => <div key={group.title.ko} className="relative overflow-hidden border border-green-deep/20 bg-white p-5"><span className="absolute right-4 top-3 text-5xl font-black leading-none text-green-pale">0{index + 1}</span><span className="section-kicker">CHANGE MAP</span><h3 className="mt-2 text-lg font-extrabold text-navy">{localized(group.title, ko)}</h3><ul className="mt-5 space-y-3 border-l-2 border-gold pl-3">{group.items.map((item) => <li key={item.ko} className="text-sm font-semibold leading-6 text-charcoal/75">{localized(item, ko)}</li>)}</ul></div>)}</div>
      </NumberedSection>

      <section className="article-section reading-column border-y border-green-deep/15 bg-ivory px-6 py-6 sm:px-8"><span className="section-kicker">04 · {ko ? "정부 설명" : "GOVERNMENT EXPLANATION"}</span><h2 className="mt-2 text-lg font-extrabold text-navy">{ko ? "왜 이 정책을 내놓았나" : "Why was this policy proposed?"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/70">{localized(policy.officialRationale, ko)}</p><p className="mt-3 text-xs leading-6 text-charcoal/45">{ko ? "소관 부처가 공개한 정책 취지를 독자가 읽기 쉽게 압축한 것입니다. 씨앗의 판단은 아래와 구분합니다." : "This is a reader-friendly condensation of the responsible ministry's rationale and is separate from Seed Voice's view below."}</p></section>

      <NumberedSection number="05" title={ko ? "그래서, 무엇을 주목해야 하나" : "What deserves attention"}>
        <div className="grid gap-5 md:grid-cols-2"><Impact title={ko ? "논란이 될 수 있는 지점" : "Potential points of dispute"} items={policy.risks} ko={ko}/><Impact title={ko ? "시민과 국회가 확인할 질문" : "Questions citizens and Parliament should ask"} items={policy.questions} ko={ko}/></div>
      </NumberedSection>

      <section className="article-section reading-column border-2 border-green-deep bg-ivory p-6 shadow-[7px_7px_0_0_rgba(24,83,66,0.12)] sm:p-8"><div className="flex items-center gap-2 text-green-deep"><Star size={17} fill="currentColor"/><span className="text-[11px] font-black tracking-[.18em]">06 · SEED VOICE VIEW</span></div><h2 className="editorial-title mt-3 text-2xl font-bold text-navy">{ko ? "씨앗은 이렇게 봅니다" : "How Seed Voice sees it"}</h2><p className="mt-4 whitespace-pre-line text-base leading-8 text-charcoal/75">{localized(policy.seedView, ko)}</p><p className="mt-5 border-t border-green-deep/15 pt-4 text-xs leading-6 text-charcoal/50">{ko ? "이 상자는 공식 사실 정보와 구분되는 씨앗의 소리의 편집 판단입니다. 새 자료가 확인되면 근거와 판단을 함께 갱신합니다." : "This box contains Seed Voice's editorial judgment, separate from the official factual record. Evidence and analysis will be updated when new material is verified."}</p></section>

      <NumberedSection number="07" title={ko ? "정책 진행 타임라인" : "Policy timeline"}>
        <ol className="space-y-5 border-l-2 border-green-deep/20 pl-6">{policy.timeline.map((event) => <li key={`${event.date}-${event.title.ko}`}><time className="text-xs font-black text-green-deep">{event.date.length === 7 ? event.date.replace("-", ".") : dateText(event.date)}</time><h3 className="mt-1 font-bold text-navy">{localized(event.title, ko)}</h3>{event.date === policy.checkedAt && <span className="mt-1 inline-flex bg-green-pale px-2 py-1 text-[10px] font-bold text-green-deep">{ko ? "현재 확인 단계" : "Current verified stage"}</span>}</li>)}</ol>
      </NumberedSection>

      <section className="article-section article-section-long reading-column"><p className="section-kicker">08 · {ko ? "원문 및 시민 참여" : "SOURCES AND PARTICIPATION"}</p><h2 className="article-section-title mt-2">{ko ? "원문을 확인하고 의견을 제출할 수 있습니다" : "Read the source and submit comments"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/60">{ko ? `공식 발표자료 · 마지막 확인 ${dateText(policy.checkedAt)} · 현재 단계 ${policy.status.ko}` : `Official government material · Last checked ${policy.checkedAt} · Current stage: ${policy.status.en}`}</p><div className="mt-4 flex flex-wrap gap-3">{policy.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="button-secondary">{localized(source.label, ko)}<ExternalLink size={14}/></a>)}</div></section>

      <ContentAccountability postSlug={`tax-${policy.slug}`} publishedDate={policy.checkedAt}/>
    </div>
  </article>;
}

function NumberedSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="article-section article-section-long reading-column"><p className="section-kicker">{number}</p><h2 className="article-section-title mt-2">{title}</h2><div className="mt-5">{children}</div></section>;
}

function Impact({ title, items, ko }: { title: string; items: LocalizedText[]; ko: boolean }) {
  return <div className="border-t-2 border-navy pt-3"><h3 className="mb-4 text-sm font-extrabold text-navy">{title}</h3><ul className="space-y-3">{items.map((item) => <li key={item.ko} className="flex gap-3 text-base leading-8 text-charcoal/75"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{localized(item, ko)}</span></li>)}</ul></div>;
}
