import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { civicSections } from "../data/civicSections";

export default function CivicLifeSubnav() {
  const { language } = useLanguage();
  const path = useLocation().pathname.replace(/\/+$/, "");
  const links = [{ path: "/civic-life", title: { ko: "시민생활", en: "Civic Life" } }, ...civicSections];
  return <nav aria-label={language === "ko" ? "시민생활 하위 메뉴" : "Civic Life sections"} className="border-t border-[#d8e8de] bg-[#f4f5ed]">
    <div className="container-page flex overflow-x-auto pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {links.map((item) => <Link key={item.path} to={item.path} aria-current={path === item.path ? "page" : undefined} className={`-mb-px min-w-max flex-1 rounded-t-xl border px-3 py-2.5 text-center text-sm font-extrabold transition ${path === item.path ? "border-[#526f7f] bg-[#526f7f] text-white" : "border-transparent bg-[#e9eee8] text-charcoal/70 hover:bg-[#f7f8f2] hover:text-green-deep"}`}>{item.title[language]}</Link>)}
    </div>
  </nav>;
}
