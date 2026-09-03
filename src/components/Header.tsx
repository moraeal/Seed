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
        ["Civic Briefings", "/briefings"],
        ["Voice of the Seed", "/columns"],
        ["About the Journal", "/about"],
        ["Founding Statement", "/founding-statement"],
      ]
    : [
        ["씨드뉴스", "/news"],
        ["시민브리핑", "/briefings"],
        ["씨앗의 소리", "/columns"],
        ["저널 소개", "/about"],
        ["창립취지문", "/founding-statement"],
      ];

  const toggleLanguage = () => {
    const nextLanguage = language === "ko" ? "en" : "ko";
    setLanguage(nextLanguage);
    if (nextLanguage === "en" && location.pathname === "/") navigate("/en/");
    if (nextLanguage === "ko" && /^\/en(?:\/|$)/.test(location.pathname)) navigate("/");
  };
  const navLinkClass = "border-b-2 border-transparent px-1 py-3 text-[13px] font-bold text-charcoal/72 transition hover:border-green-deep hover:text-green-deep";
  const mobileLinkClass = "rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 hover:bg-green-pale";

  const renderNavItem = ([label, path]: string[], mobile = false) => {
    const className = mobile ? mobileLinkClass : navLinkClass;
    const close = () => mobile && setOpen(false);
    return <Link key={label} to={path} onClick={close} className={className}>{label}</Link>;
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex h-[76px] items-center gap-4 border-b border-green-deep/12 md:h-[82px]">
        <Link to={language === "en" ? "/en/" : "/"} className="flex min-w-0 shrink items-center" aria-label={language === "en" ? "SEED Civic Journal home" : "씨드시민파트너스 홈"}>
          <BrandLockup tone="header" />
        </Link>

        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
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

      <nav className="hidden border-b border-green-deep/18 bg-paper xl:block" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
        <div className="container-page flex items-center justify-center gap-10">{nav.map((item) => renderNavItem(item))}</div>
      </nav>

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
