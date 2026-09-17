import { Landmark, ReceiptText, Scale } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n";

const links = [
  { to: "/monitoring", ko: "이슈감시", en: "Issue Watch", icon: Landmark, end: true },
  { to: "/monitoring/legislation", ko: "입법감시", en: "Legislative Watch", icon: Scale },
  { to: "/monitoring/tax", ko: "세금감시", en: "Tax Watch", icon: ReceiptText },
  { to: "/monitoring/public-interest", ko: "공익감시", en: "Public-Interest Watch", icon: Landmark },
];

export default function MonitoringSubnav() {
  const { language } = useLanguage();
  const ko = language === "ko";

  return <nav aria-label={ko ? "시민감시 하위 메뉴" : "Civic Watch sections"} className="border-y border-green-deep/15 bg-white">
    <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4">
      {links.map(({ to, ko: labelKo, en: labelEn, icon: Icon, end }) => <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) => `flex items-center gap-3 border-b border-green-deep/12 px-4 py-4 text-sm font-extrabold transition last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${isActive ? "bg-green-deep text-white" : "text-green-deep hover:bg-green-pale"}`}
      >
        <Icon size={17}/><span>{ko ? labelKo : labelEn}</span>
      </NavLink>)}
    </div>
  </nav>;
}
