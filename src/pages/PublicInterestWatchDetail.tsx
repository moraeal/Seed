import { AlertTriangle, ArrowLeft, CheckCircle2, ExternalLink, FileQuestion, Lightbulb, Scale } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { getPublicInterestWatchCase, LocalizedText } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

export default function PublicInterestWatchDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const item = getPublicInterestWatchCase(slug);
  const t = (value: LocalizedText) => value[language];

  if (!item) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-extrabold text-navy">{ko ? "공익감시 기록을 찾을 수 없습니다." : "Watch record not found."}</h1>
        <Link to="/monitoring" className="button-primary mt-7">{ko ? "공익감시로 돌아가기" : "Back to Public-Interest Watch"}</Link>
      </div>
    );
  }

  const sections = [
    { key: "facts", icon: CheckCircle2, label: ko ? "공개자료로 확인한 사실" : "Facts confirmed in public records", items: item.confirmedFacts, tone: "text-green-mid" },
    { key: "questions", icon: FileQuestion, label: ko ? "시민이 묻는 핵심 질문" : "Questions citizens should ask", items: item.questions, tone: "text-gold" },
    { key: "proposals", icon: Lightbulb, label: ko ? "씨드의 개선 제안" : "SEED's reform proposals", items: item.proposals, tone: "text-green-deep" },
  ];

  return (
    <article className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page max-w-5xl py-12 sm:py-20">
          <Link to="/monitoring" className="text-link"><ArrowLeft size={16}/>{ko ? "공익감시 목록" : "Public-Interest Watch"}</Link>
          <div className="mt-9 border-t-2 border-navy pt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker">{t(item.eyebrow)}</span>
              <span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{t(item.status)}</span>
            </div>
            <p className="mt-6 text-sm font-extrabold text-green-deep">{t(item.organization)}</p>
            <h1 className="editorial-title mt-3 max-w-4xl text-4xl font-bold leading-[1.12] text-navy sm:text-6xl">{t(item.title)}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/65 sm:text-xl">{t(item.summary)}</p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45">
              <span>{ko ? "작성" : "Published"} {item.updatedAt.replace(/-/g, ".")}</span>
              <span>{ko ? "공개자료와 씨드 보관 문건을 교차 검토" : "Cross-checked against public disclosures and SEED records"}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl py-12 sm:py-20">
        <aside className="border-l-4 border-gold bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3"><Scale className="text-gold"/><h2 className="text-lg font-extrabold text-navy">{ko ? "이 기록의 작성 기준" : "Basis of this record"}</h2></div>
          <p className="mt-4 text-sm leading-7 text-charcoal/65">{t(item.sourceBasis)}</p>
        </aside>

        {sections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <section key={section.key} className="mt-14 border-t border-green-deep/12 pt-9">
              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full bg-green-pale"><Icon className={section.tone} size={22}/></div>
                <div><span className="font-serif text-xs font-bold text-gold">{String(sectionIndex + 1).padStart(2, "0")}</span><h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">{section.label}</h2></div>
              </div>
              <ol className="mt-7 space-y-4">
                {section.items.map((entry, index) => (
                  <li key={`${section.key}-${index}`} className="grid gap-3 border border-green-deep/10 bg-white p-5 sm:grid-cols-[2rem_1fr] sm:p-6">
                    <span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-7 text-charcoal/75 sm:text-base">{t(entry)}</p>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        {item.caution && (
          <aside className="mt-10 rounded-lg border border-gold/30 bg-gold/10 p-6">
            <div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 shrink-0 text-gold" size={20}/><div><h2 className="font-extrabold text-navy">{ko ? "수치 해석 주의" : "A note on the figures"}</h2><p className="mt-2 text-sm leading-7 text-charcoal/65">{t(item.caution)}</p></div></div>
          </aside>
        )}

        <section className="mt-14 border-t border-green-deep/12 pt-9">
          <h2 className="text-2xl font-extrabold text-navy">{ko ? "원문과 확인 자료" : "Primary records and sources"}</h2>
          <p className="mt-3 text-sm leading-7 text-charcoal/55">{ko ? "판단보다 원문 확인이 먼저입니다. 아래 자료를 직접 열어 교차 확인할 수 있습니다." : "Primary records come before conclusions. Open the materials below to verify the record yourself."}</p>
          <div className="mt-6 divide-y divide-green-deep/10 border-y border-green-deep/10">
            {item.sources.map((source, index) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 py-5 text-charcoal/70 hover:text-green-deep">
                <span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1"><strong className="block text-sm font-extrabold text-navy group-hover:text-green-deep">{t(source.label)}</strong>{source.note && <span className="mt-1 block text-xs leading-6 text-charcoal/45">{t(source.note)}</span>}</span>
                <ExternalLink className="mt-0.5 shrink-0" size={16}/>
              </a>
            ))}
          </div>
        </section>

        <aside className="mt-14 rounded-xl bg-green-deep p-7 text-white sm:p-9">
          <h2 className="text-xl font-extrabold">{ko ? "반론권과 정정 원칙" : "Right of reply and correction"}</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">{ko ? "기관의 설명과 반론을 환영합니다. 확인 가능한 근거가 도착하면 답변 전문 또는 요지를 이 기록에 연결하고, 사실 오류는 수정 이력과 함께 바로잡겠습니다." : "We welcome explanations and replies. Verifiable responses will be linked in full or summarized here, and factual errors will be corrected with a visible revision record."}</p>
          <a href="mailto:seedcivicpartners@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/35 underline-offset-4">seedcivicpartners@gmail.com</a>
        </aside>

        <CommentSection postSlug={`monitoring-${item.slug}`} />
      </div>
    </article>
  );
}
