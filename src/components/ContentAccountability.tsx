import { Activity, CalendarCheck2, History } from "lucide-react";
import { getContentRevisions } from "../data/contentRevisions";
import { useLanguage } from "../i18n";
import CorrectionSection from "./CorrectionSection";

export default function ContentAccountability({ postSlug, publishedDate }: { postSlug: string; publishedDate: string }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const revisions = getContentRevisions(postSlug, publishedDate);

  return <section className="mt-12 border-y-2 border-green-deep bg-white" aria-labelledby="accountability-title">
    <div className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-deep px-3 py-1.5 text-xs font-extrabold text-white"><Activity size={14}/>{ko ? "지속 모니터링 중" : "ONGOING MONITORING"}</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/50"><CalendarCheck2 size={14}/>{ko ? `최초 확인 기준일 ${publishedDate.replace(/-/g, ".")}` : `Initial verification: ${publishedDate}`}</span>
      </div>
      <h2 id="accountability-title" className="mt-4 text-2xl font-extrabold text-navy">{ko ? "새로운 사실을 확인하고 수정 과정을 공개합니다" : "We verify new facts and disclose every revision"}</h2>
      <p className="mt-3 text-sm leading-7 text-charcoal/65">{ko ? "이 콘텐츠와 관련된 공식 발표·법령·판결·통계의 변화를 계속 살펴봅니다. 새롭게 확인된 사실이 기존 설명이나 판단에 영향을 주면 근거를 검토한 뒤 가능한 한 신속히 본문에 반영하고, 무엇을 왜 바꾸었는지 아래 기록에 남깁니다." : "We continue to track relevant official announcements, laws, rulings and data. When verified new facts affect the article, we update it as promptly as possible and record what changed and why below."}</p>

      <details className="mt-6 rounded-lg border border-green-deep/10 bg-ivory" open>
        <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 font-extrabold text-navy"><History size={18} className="text-green-mid"/>{ko ? `수정 기록 ${revisions.length}건` : `${revisions.length} revision records`}</summary>
        <ol className="border-t border-green-deep/10 px-5">
          {revisions.map((revision, index) => <li key={`${revision.date}-${revision.version}`} className="grid gap-2 border-b border-green-deep/10 py-4 last:border-0 sm:grid-cols-[7.5rem_6rem_1fr] sm:gap-4">
            <time className="text-xs font-semibold text-charcoal/45">{revision.date.replace(/-/g, ".")}</time>
            <span className={`w-fit rounded-full px-2 py-1 text-[10px] font-extrabold ${revision.kind === "content" ? "bg-green-pale text-green-deep" : "bg-charcoal/10 text-charcoal/55"}`}>{revision.version}</span>
            <div><strong className="text-sm text-navy">{ko ? revision.titleKo : revision.titleEn}</strong><p className="mt-1 text-xs leading-6 text-charcoal/55">{ko ? revision.detailKo : revision.detailEn}</p></div>
          </li>)}
        </ol>
      </details>

      <CorrectionSection postSlug={postSlug}/>
    </div>
  </section>;
}

