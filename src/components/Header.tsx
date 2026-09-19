import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["KUMEPUME", "#top"],
  ["사업", "#work"],
  ["활동과 성과", "#stories"],
  ["씨앗의 소리", "#seed-voice"],
  ["투명경영", "#transparency"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-[#183b33]/10 bg-[#fffdf8]/95 backdrop-blur-xl">
      <div className="container-page flex min-h-[78px] items-center gap-5 py-2 lg:min-h-[86px]">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="KUMEPUME 홈">
          <span className="kumepume-logo-mark" aria-hidden="true"><span /><span /><span /></span>
          <span><strong className="block text-[1.4rem] font-black leading-none tracking-[-.055em] text-[#183b33] sm:text-[1.65rem]">KUMEPUME</strong><small className="mt-1 block text-[9px] font-black tracking-[.15em] text-charcoal/45">사단법인 꿈에품에</small></span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 xl:flex" aria-label="주요 메뉴">
          {navigation.map(([label, href]) => <a key={label} href={href} className="text-[14px] font-extrabold text-charcoal/72 transition hover:text-[#e47716]">{label}</a>)}
        </nav>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <a href="#join" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ef901f] px-5 text-sm font-black text-[#183b33] transition hover:bg-[#ffc04c]"><Heart size={16} fill="currentColor" /> 함께하기</a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="ml-auto grid size-11 place-items-center rounded-full border border-[#183b33]/15 text-[#183b33] xl:hidden" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>

      {open && <div className="border-t border-[#183b33]/10 bg-[#fffdf8] px-5 pb-6 pt-3 shadow-xl xl:hidden"><nav className="container-page grid">{navigation.map(([label, href]) => <a key={label} href={href} className="border-b border-[#183b33]/10 py-4 text-base font-black text-[#183b33]" onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="container-page mt-5"><a href="#join" onClick={() => setOpen(false)} className="kumepume-button-primary w-full">함께하기 <Heart size={17} fill="currentColor" /></a></div></div>}
    </header>
  );
}
