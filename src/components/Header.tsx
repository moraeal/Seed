import { LogIn, LogOut, Menu, Search, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";
import BrandLockup from "./BrandLockup";
import HomeSectionNav from "./HomeSectionNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { user, nickname, isVerified, signOut } = useAuth();
  const t = getContent(language);
  const ko = language === "ko";
  const isHome = location.pathname === "/" || location.pathname === "/en/";

  const nav = language === "en"
    ? [
        ["Voice of the Seed", "/columns"],
        ["Today's News", "/news"],
        ["SEED Briefings", "/briefings"],
        ["SEED Language", "/seed-language"],
        ["About", "/about"],
      ]
    : [
        ["씨앗의 소리", "/columns"],
        ["오늘의 뉴스", "/news"],
        ["씨앗브리핑", "/briefings"],
        ["씨앗언어", "/seed-language"],
        ["소개", "/about"],
      ];

  const toggleLanguage = () => {
    const nextLanguage = language === "ko" ? "en" : "ko";
    setOpen(false);
    setLanguage(nextLanguage);
    if (nextLanguage === "en" && location.pathname === "/") navigate("/en/");
    if (nextLanguage === "ko" && /^\/en(?:\/|$)/.test(location.pathname)) navigate("/");
  };

  const navLinkClass = "inline-flex items-center border-b-2 px-0.5 py-2.5 text-[13px] font-bold transition";
  const mobileLinkClass = "flex min-h-12 items-center justify-between border-b border-green-deep/10 px-3 py-3 text-base font-bold transition last:border-b-0";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const renderNavItem = ([label, path]: string[], mobile = false) => {
    const close = () => mobile && setOpen(false);
    return (
      <NavLink
        key={label}
        to={path}
        onClick={close}
        className={({ isActive }) => mobile
          ? `${mobileLinkClass} ${isActive ? "bg-green-pale text-green-deep" : "text-charcoal/75 hover:bg-green-pale/70 hover:text-green-deep"}`
          : `${navLinkClass} ${isActive ? "border-green-deep text-green-deep" : "border-transparent text-charcoal/72 hover:border-green-deep hover:text-green-deep"}`}
      >
        {({ isActive }) => <><span>{label}</span>{mobile && isActive && <span className="ml-auto text-xs font-extrabold text-green-mid">{language === "en" ? "Current" : "현재"}</span>}</>}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex min-h-[70px] items-center gap-3 border-b border-green-deep/10 py-2 md:min-h-[74px] md:gap-4">
        <Link to={language === "en" ? "/en/" : "/"} className="flex min-w-0 shrink flex-col items-start gap-0.5" aria-label={language === "en" ? "SEED VOICE home" : "씨앗의 소리 홈"}>
          <BrandLockup tone="header" />
          <span className="max-w-[calc(100vw-8.5rem)] text-[10px] font-medium leading-[1.35] tracking-[-.02em] text-charcoal/52 sm:max-w-[42rem] sm:text-[11px] md:max-w-[46rem] lg:max-w-[50rem]">
            {ko
              ? "시민과 기업의 자유를 지키는 독립 시민저널"
              : "An independent civic journal for citizens, enterprise and freedom."}
          </span>
        </Link>

        <div className="ml-auto hidden shrink-0 items-center gap-1.5 xl:flex">
          <Link to="/search" className="inline-flex min-h-8 items-center gap-1.5 px-2 text-[11px] font-extrabold text-charcoal/62 transition hover:text-green-deep" aria-label={ko ? "검색" : "Search"}>
            <Search size={15}/><span>{ko ? "검색" : "Search"}</span>
          </Link>
          <a href="#newsletter" className="inline-flex min-h-8 items-center rounded-sm bg-green-deep px-3.5 text-[11px] font-extrabold text-white transition hover:bg-green-mid">
            {ko ? "구독" : "Subscribe"}
          </a>
          {user ? (
            <>
              <Link to="/account" className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-green-deep/12 bg-white px-2.5 text-[11px] font-extrabold text-green-deep">
                <UserRound size={13}/><span className="max-w-20 truncate">{nickname}</span>{isVerified && <span className="text-[9px] text-green-mid">●</span>}
              </Link>
              <button onClick={() => void signOut()} className="grid size-8 place-items-center rounded-md border border-green-deep/12 text-charcoal/50 hover:text-green-deep" type="button" aria-label={language === "en" ? "Sign out" : "로그아웃"}><LogOut size={14}/></button>
            </>
          ) : (
            <Link to="/account" className="inline-flex min-h-8 items-center gap-1.5 px-2 text-[11px] font-extrabold text-charcoal/58 transition hover:text-green-deep"><LogIn size={13}/>{language === "en" ? "Sign in" : "로그인"}</Link>
          )}
          <button onClick={toggleLanguage} className="min-h-8 px-2 text-[11px] font-bold text-charcoal/58 transition hover:text-green-deep" type="button">{t.actions.language}</button>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-0.5 xl:hidden">
          <Link to="/search" className="grid size-9 place-items-center rounded-md text-green-deep transition hover:bg-green-pale" aria-label={ko ? "검색" : "Search"}>
            <Search size={18}/>
          </Link>
          <button onClick={() => setOpen(!open)} className="grid size-9 place-items-center rounded-md text-green-deep transition hover:bg-green-pale" aria-label={language === "en" ? (open ? "Close menu" : "Open menu") : (open ? "메뉴 닫기" : "메뉴 열기")} aria-expanded={open} aria-controls="mobile-main-menu" type="button">
            {open ? <X size={20}/> : <Menu size={20}/>} 
          </button>
        </div>
      </div>

      <nav className="hidden border-b border-green-deep/14 bg-paper xl:block" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
        <div className="container-page flex items-center justify-start gap-8">{nav.map((item) => renderNavItem(item))}</div>
      </nav>

      {isHome && <HomeSectionNav />}

      {open && (
        <div id="mobile-main-menu" className="border-t border-green-deep/10 bg-paper px-5 py-4 shadow-[0_12px_24px_rgba(17,43,37,.08)] xl:hidden">
          <nav className="container-page grid sm:grid-cols-2 sm:gap-x-5">{nav.map((item) => renderNavItem(item, true))}</nav>
          <div className="container-page mt-4 flex flex-wrap gap-2">
            <a href="#newsletter" onClick={() => setOpen(false)} className="button-primary">{ko ? "구독" : "Subscribe"}</a>
            {user ? (
              <>
                <Link to="/account" onClick={() => setOpen(false)} className="button-secondary"><UserRound size={15}/>{nickname}</Link>
                <button onClick={() => { setOpen(false); void signOut(); }} className="button-secondary" type="button"><LogOut size={15}/>{language === "en" ? "Sign out" : "로그아웃"}</button>
              </>
            ) : <Link to="/account" onClick={() => setOpen(false)} className="button-secondary"><LogIn size={15}/>{language === "en" ? "Sign in" : "로그인"}</Link>}
            <button onClick={toggleLanguage} className="button-secondary" type="button">{t.actions.language}</button>
          </div>
        </div>
      )}
    </header>
  );
}
