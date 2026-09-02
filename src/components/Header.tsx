import { LogIn, LogOut, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";
import BrandLockup from "./BrandLockup";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { user, nickname, isVerified, signOut } = useAuth();
  const t = getContent(language);

  const nav = language === "en"
    ? [
        ["News", "/news"],
        ["Briefings", "/briefings"],
        ["Columns", "/columns"],
        ["Public Watch", "/monitoring"],
        ["Proposals", "/proposals"],
        ["Forum", "/forum"],
        ["Partners", "/partners"],
        ["About", "/about"],
      ]
    : [
        ["뉴스", "/news"],
        ["브리핑", "/briefings"],
        ["칼럼", "/columns"],
        ["공익감시", "/monitoring"],
        ["제안", "/proposals"],
        ["공론장", "/forum"],
        ["파트너스", "/partners"],
        ["소개", "/about"],
      ];

  const toggleLanguage = () => {
    const nextLanguage = language === "ko" ? "en" : "ko";
    setLanguage(nextLanguage);
    if (nextLanguage === "en" && location.pathname === "/") navigate("/en/");
    if (nextLanguage === "ko" && /^\/en(?:\/|$)/.test(location.pathname)) navigate("/");
  };
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
        <Link to={language === "en" ? "/en/" : "/"} className="flex shrink-0 items-center" aria-label={language === "en" ? "SEED Civic Partners home" : "씨드시민파트너스 홈"}>
          <BrandLockup tone="header" />
        </Link>

        <nav className="ml-auto hidden items-center gap-3 xl:flex 2xl:gap-5" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
          {nav.map((item) => renderNavItem(item))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex xl:ml-1">
          {user ? (
            <>
              <Link to="/account" className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-green-deep/15 bg-white px-3 text-xs font-extrabold text-green-deep">
                <UserRound size={14}/><span className="max-w-20 truncate">{nickname}</span>{isVerified && <span className="text-[9px] text-green-mid">●</span>}
              </Link>
              <button onClick={() => void signOut()} className="grid size-9 place-items-center rounded-md border border-green-deep/15 text-charcoal/55 hover:text-green-deep" type="button" aria-label={language === "en" ? "Sign out" : "로그아웃"}><LogOut size={15}/></button>
            </>
          ) : (
            <Link to="/account" className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-green-deep/15 bg-white px-3 text-xs font-extrabold text-green-deep"><LogIn size={14}/>{language === "en" ? "Sign in" : "로그인"}</Link>
          )}
          <button onClick={toggleLanguage} className="button-secondary min-w-20 text-xs" type="button">{t.actions.language}</button>
        </div>

        <button onClick={() => setOpen(!open)} className="ml-auto grid size-10 place-items-center rounded-md border border-green-deep/15 text-green-deep xl:hidden" aria-label={language === "en" ? "Open menu" : "메뉴 열기"} type="button">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-deep/10 bg-paper px-5 py-5 xl:hidden">
          <nav className="container-page grid grid-cols-2 gap-2 sm:grid-cols-3">{nav.map((item) => renderNavItem(item, true))}</nav>
          <div className="container-page mt-4 flex flex-wrap gap-2">
            {user ? (
              <>
                <Link to="/account" onClick={() => setOpen(false)} className="button-secondary"><UserRound size={15}/>{nickname}</Link>
                <button onClick={() => { setOpen(false); void signOut(); }} className="button-secondary" type="button"><LogOut size={15}/>{language === "en" ? "Sign out" : "로그아웃"}</button>
              </>
            ) : <Link to="/account" onClick={() => setOpen(false)} className="button-primary"><LogIn size={15}/>{language === "en" ? "Sign in" : "로그인"}</Link>}
            <button onClick={toggleLanguage} className="button-secondary" type="button">{t.actions.language}</button>
          </div>
        </div>
      )}
    </header>
  );
}
