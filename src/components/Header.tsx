import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getContent(language);

  const nav = language === "en"
    ? [
        ["News", "/news"],
        ["Briefings", "/briefings"],
        ["Columns", "/columns"],
        ["Watch", "/monitoring"],
        ["Proposals", "/proposals"],
        ["Experiments", "/experiments"],
        ["Academy", "/academy"],
        ["Forum", "/forum"],
        ["About", "/about"],
      ]
    : [
        ["뉴스", "/news"],
        ["브리핑", "/briefings"],
        ["칼럼", "/columns"],
        ["감시", "/monitoring"],
        ["제안", "/proposals"],
        ["실험", "/experiments"],
        ["아카데미", "/academy"],
        ["공론장", "/forum"],
        ["소개", "/about"],
      ];

  const toggleLanguage = () => setLanguage(language === "ko" ? "en" : "ko");
  const navLinkClass = "text-[12px] font-semibold text-charcoal/70 transition hover:text-green-deep 2xl:text-[13px]";
  const mobileLinkClass = "rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 hover:bg-green-pale";

  const renderNavItem = ([label, path]: string[], mobile = false) => {
    const className = mobile ? mobileLinkClass : navLinkClass;
    const close = () => mobile && setOpen(false);
    return <Link key={label} to={path} onClick={close} className={className}>{label}</Link>;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-deep/15 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex h-[78px] items-center gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-4" aria-label={language === "en" ? "SEED Civic Partners home" : "씨드시민파트너스 홈"}>
          <img src={`${import.meta.env.BASE_URL}images/brand/seed-civic-partners-logo.svg`} alt="SEED Civic Partners" className="h-11 w-auto" />
          <span className="hidden border-l border-green-deep/20 pl-4 text-[9px] font-bold leading-4 tracking-[.15em] text-charcoal/45 sm:block">INDEPENDENT<br />CIVIC JOURNAL</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-3 xl:flex 2xl:gap-5" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
          {nav.map((item) => renderNavItem(item))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex xl:ml-1">
          <button onClick={toggleLanguage} className="button-secondary min-w-20 text-xs" type="button">{t.actions.language}</button>
        </div>

        <button onClick={() => setOpen(!open)} className="ml-auto grid size-10 place-items-center rounded-md border border-green-deep/15 text-green-deep xl:hidden" aria-label={language === "en" ? "Open menu" : "메뉴 열기"} type="button">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-deep/10 bg-paper px-5 py-5 xl:hidden">
          <nav className="container-page grid grid-cols-2 gap-2 sm:grid-cols-3">{nav.map((item) => renderNavItem(item, true))}</nav>
          <div className="container-page mt-3"><button onClick={toggleLanguage} className="button-secondary" type="button">{t.actions.language}</button></div>
        </div>
      )}
    </header>
  );
}
