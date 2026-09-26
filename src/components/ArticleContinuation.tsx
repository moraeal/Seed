import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

type ContinuationItem = {
  href: string;
  title: string;
  relationship: string;
  reason: string;
  listHref: string;
  listLabel: string;
};

export default function ArticleContinuation({ item, items, topic }: { item?: ContinuationItem; items?: ContinuationItem[]; topic?: string }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const entries = items ?? (item ? [item] : []);
  if (!entries.length) return null;

  return (
    <nav className="mt-14 border-t-2 border-navy pt-7" aria-label={ko ? "다음 콘텐츠" : "Continue reading"}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="section-kicker">{ko ? "이어 읽기" : "CONTINUE READING"}</span>
        <Link to={entries[0].listHref} className="text-link text-sm">{entries[0].listLabel}</Link>
      </div>
      {topic && <p className="mt-2 text-sm font-bold text-green-deep">{ko ? "같은 사안 · " : "On this issue · "}{topic}</p>}
      <div className={`mt-4 grid gap-3 ${entries.length > 1 ? "md:grid-cols-2" : ""}`}>
        {entries.map((entry, index) => <Link
          key={entry.href}
          to={entry.href}
          className={`group flex flex-col border border-green-deep/12 bg-white px-5 py-5 transition hover:border-green-mid/35 hover:shadow-soft sm:px-6 sm:py-6 ${entries.length === 3 && index === 0 ? "md:col-span-2" : ""}`}
        >
          <span className="text-[11px] font-extrabold tracking-[.12em] text-gold">{entry.relationship}</span>
          <h2 className="mt-2 text-lg font-extrabold leading-snug text-navy transition group-hover:text-green-deep sm:text-xl">{entry.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm font-bold leading-6 text-green-deep">{entry.reason}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-extrabold text-green-deep">
            {ko ? "관련 글 읽기" : "Read related article"}<ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>)}
      </div>
    </nav>
  );
}
