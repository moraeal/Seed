import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

type ContinuationItem = {
  href: string;
  title: string;
  summary: string;
};

type ArticleContinuationProps = {
  item: ContinuationItem;
  listHref: string;
  listLabel: string;
};

export function getFollowingItem<T extends { slug: string }>(items: T[], currentSlug: string) {
  if (items.length < 2) return undefined;
  const currentIndex = items.findIndex((item) => item.slug === currentSlug);
  if (currentIndex < 0) return undefined;
  return items[(currentIndex + 1) % items.length];
}

export default function ArticleContinuation({ item, listHref, listLabel }: ArticleContinuationProps) {
  const { language } = useLanguage();
  const ko = language === "ko";

  return (
    <nav className="mt-14 border-t-2 border-navy pt-7" aria-label={ko ? "다음 콘텐츠" : "Continue reading"}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="section-kicker">{ko ? "이어 읽기" : "CONTINUE READING"}</span>
        <Link to={listHref} className="text-link text-sm">{listLabel}</Link>
      </div>
      <Link
        to={item.href}
        className="group mt-4 block border border-green-deep/12 bg-white px-5 py-5 transition hover:border-green-mid/35 hover:shadow-soft sm:px-6 sm:py-6"
      >
        <h2 className="text-xl font-extrabold leading-snug text-navy transition group-hover:text-green-deep sm:text-2xl">{item.title}</h2>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-charcoal/60 sm:text-[15px]">{item.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">
          {ko ? "다음 글 읽기" : "Read next"}<ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </nav>
  );
}
