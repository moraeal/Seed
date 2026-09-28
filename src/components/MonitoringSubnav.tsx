import { Landmark, ReceiptText, Scale } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";

const links = [
  { to: "/monitoring", ko: "이슈감시", en: "Issue Watch", icon: Landmark },
  { to: "/monitoring/legislation", ko: "입법감시", en: "Legislative Watch", icon: Scale },
  { to: "/monitoring/tax", ko: "세금감시", en: "Tax Watch", icon: ReceiptText },
  { to: "/monitoring/public-interest", ko: "공익감시", en: "Public-Interest Watch", icon: Landmark },
];

export default function MonitoringSubnav() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const currentPath = useLocation().pathname.replace(/\/+$/, "") || "/";

  return <nav aria-label={ko ? "시민감시 하위 메뉴" : "Civic Watch sections"} className="border-t border-[#d8e8de] bg-[#f4f5ed]">
    <div className="container-page flex overflow-x-auto pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {links.map(({ to, ko: labelKo, en: labelEn, icon: Icon }) => <Link
        key={to}
        to={to}
        aria-current={currentPath === to ? "page" : undefined}
        className={`relative -mb-px flex min-w-max flex-1 items-center justify-center gap-2 rounded-t-xl border px-3 py-2.5 text-sm font-extrabold transition sm:gap-3 sm:px-4 ${currentPath === to ? "z-10 border-[#526f7f] bg-[#526f7f] text-white shadow-[0_-2px_8px_rgba(25,68,91,.14)]" : "border-transparent border-b-green-deep/20 bg-[#e9eee8] text-charcoal/70 hover:bg-[#f7f8f2] hover:text-green-deep"}`}
      >
        <Icon size={17}/><span>{ko ? labelKo : labelEn}</span>
      </Link>)}
    </div>
  </nav>;
}
