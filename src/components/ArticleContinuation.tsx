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

export default function ArticleContinuation({ item }: { item: ContinuationItem }) {
  const { language } = useLanguage();
  const ko = language === "ko";

  return (
    <nav className="mt-14 border-t-2 border-navy pt-7" aria-label={ko ? "다음 콘텐츠" : "Continue reading"}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="section-kicker">{ko ? "이어 읽기" : "CONTINUE READING"}</span>
        <Link to={item.listHref} className="text-link text-sm">{item.listLabel}</Link>
      </div>
      <Link
        to={item.href}
        className="group mt-4 block border border-green-deep/12 bg-white px-5 py-5 transition hover:border-green-mid/35 hover:shadow-soft sm:px-6 sm:py-6"
      >
        <span className="text-[11px] font-extrabold tracking-[.12em] text-gold">{item.relationship}</span>
        <h2 className="mt-2 text-xl font-extrabold leading-snug text-navy transition group-hover:text-green-deep sm:text-2xl">{item.title}</h2>
        <p className="mt-3 text-sm font-bold leading-6 text-green-deep sm:text-[15px]">{item.reason}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">
          {ko ? "관련 글 읽기" : "Read related article"}<ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </nav>
  );
}
