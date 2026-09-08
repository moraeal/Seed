import { LogIn, LogOut, Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
        ["Voice of the Seed", "/columns"],
        ["Today's News", "/news"],
        ["SEED Briefings", "/briefings"],
        ["SEED Language", "/seed-language"],
        ["About", "/about"],
      ]
    : [
        ["씨앗의소리", "/columns"],
        ["오늘의뉴스", "/news"],
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
  const navLinkClass = "border-b-2 px-1 py-3 text-[13px] font-bold transition";
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
        {({ isActive }) => <>{label}{mobile && isActive && <span className="text-xs font-extrabold text-green-mid">{language === "en" ? "Current" : "현재"}</span>}</>}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex min-h-[100px] items-center gap-3 border-b border-green-deep/12 py-3 md:min-h-[106px] md:gap-4">
        <Link to={language === "en" ? "/en/" : "/"} className="flex min-w-0 shrink flex-col items-start gap-1.5" aria-label={language === "en" ? "SEED VOICE home" : "씨앗의 소리 홈"}>
          <BrandLockup tone="header" />
          <span className="max-w-[calc(100vw-5.75rem)] text-xs font-medium leading-[1.5] tracking-[-.02em] text-charcoal/65 sm:max-w-[42rem] sm:text-[13px] md:max-w-[46rem] md:text-sm lg:max-w-[50rem]">
            {language === "ko"
              ? "시민과 기업의 자유를 지키는 독립 시민저널"
              : "An independent civic journal that watches power, expands the sphere of freedom, and protects enterprise and innovation."}
          </span>
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

        <button onClick={() => setOpen(!open)} className="ml-auto grid size-10 place-items-center rounded-md border border-green-deep/15 text-green-deep xl:hidden" aria-label={language === "en" ? (open ? "Close menu" : "Open menu") : (open ? "메뉴 닫기" : "메뉴 열기")} aria-expanded={open} aria-controls="mobile-main-menu" type="button">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="hidden border-b border-green-deep/18 bg-paper xl:block" aria-label={language === "en" ? "Main menu" : "주요 메뉴"}>
        <div className="container-page flex items-center justify-end gap-10">{nav.map((item) => renderNavItem(item))}</div>
      </nav>

      {open && (
        <div id="mobile-main-menu" className="border-t border-green-deep/10 bg-paper px-5 py-4 shadow-[0_12px_24px_rgba(17,43,37,.08)] xl:hidden">
          <nav className="container-page grid sm:grid-cols-2 sm:gap-x-5">{nav.map((item) => renderNavItem(item, true))}</nav>
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
