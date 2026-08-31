import { Heart, Menu, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AUDITION_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getContent(language);

  const toggleLanguage = () => setLanguage(language === "ko" ? "en" : "ko");

  const navLinkClass = "text-[13px] font-semibold text-charcoal/70 transition hover:text-green-deep";
  const mobileLinkClass = "rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 hover:bg-green-pale";

  const renderNavItem = (item: (typeof t.nav)[number], mobile = false) => {
    const className = mobile ? mobileLinkClass : navLinkClass;
    const close = () => mobile && setOpen(false);

    if ("url" in item) {
      return (
        <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" onClick={close} className={className}>
          {item.label}
        </a>
      );
    }

    return (
      <Link key={item.label} to={item.path} onClick={close} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-deep/15 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex h-[78px] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-4" aria-label={language === "en" ? "SEED Civic Partners home" : "씨앗연대 홈"}>
          <img
            src={`${import.meta.env.BASE_URL}images/brand/seed-civic-partners-logo-animated.gif`}
            alt="SEED Civic Partners"
            className="h-11 w-auto"
          />
          <span className="hidden border-l border-green-deep/20 pl-4 text-[9px] font-bold leading-4 tracking-[.15em] text-charcoal/45 sm:block">INDEPENDENT<br />CIVIC JOURNAL</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 xl:flex" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
          {t.nav.map((item) => renderNavItem(item))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex xl:ml-2">
          <button onClick={toggleLanguage} className="button-secondary min-w-20 text-xs" type="button">
            {t.actions.language}
          </button>
          <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-secondary text-xs">
            <Plus size={15} />
            {t.actions.proposal}
          </a>
          <Link to="/support" className="button-primary text-xs">
            <Heart size={15} />
            {t.actions.support}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto grid size-10 place-items-center rounded-md border border-green-deep/15 text-green-deep xl:hidden"
          aria-label={language === "en" ? "Open menu" : "메뉴 열기"}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-deep/10 bg-paper px-5 py-5 xl:hidden">
          <nav className="container-page grid grid-cols-2 gap-2">{t.nav.map((item) => renderNavItem(item, true))}</nav>
          <div className="container-page mt-3 grid gap-2 sm:grid-cols-3">
            <button onClick={toggleLanguage} className="button-secondary" type="button">
              {t.actions.language}
            </button>
            <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">
              {t.actions.proposal}
            </a>
            <Link to="/support" onClick={() => setOpen(false)} className="button-primary">
              {t.actions.support}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
