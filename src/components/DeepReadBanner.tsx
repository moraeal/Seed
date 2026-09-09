import { ArrowRight, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function DeepReadBanner({ href, readMinutes }: { href: string; readMinutes?: number }) {
  const { language } = useLanguage();
  const ko = language === "ko";

  return (
    <Link
      to={href}
      className="group my-8 flex items-center gap-4 border-y border-green-deep/20 bg-white px-5 py-5 text-green-deep transition hover:bg-green-pale/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep sm:px-6"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green-pale text-green-deep">
        <BookOpenText size={20} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="section-kicker">DEEP READ</span>
        <span className="mt-1 block text-base font-extrabold leading-7 text-navy">
          {ko ? "이 글의 내용을 좀 더 깊게 읽고 싶으시면 누르세요" : "Select here to explore this article in greater depth"}
        </span>
        {readMinutes && <span className="mt-1 block text-xs font-semibold text-charcoal/45">{ko ? `${readMinutes}분 읽기` : `${readMinutes} min read`}</span>}
      </span>
      <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
