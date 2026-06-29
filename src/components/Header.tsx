import { Heart, Menu, Plus, Sprout, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AUDITION_URL, navItems } from "../data/homeData";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-green-deep/10 bg-ivory/95 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 text-green-deep" aria-label="씨앗연대 홈">
          <span className="grid size-10 place-items-center rounded-full bg-green-deep text-ivory"><Sprout size={21} /></span>
          <span><strong className="block text-lg leading-none">씨앗연대</strong><span className="mt-1 block text-[10px] font-bold tracking-[0.12em] text-charcoal/50">SEED CIVIC PARTNERS</span></span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 xl:flex" aria-label="주요 메뉴">
          {navItems.map((item) => item === "씨앗연대 소개" ? <Link key={item} to="/about" className="text-[13px] font-semibold text-charcoal/70 transition hover:text-green-deep">{item}</Link> : <a key={item} href={item === "시민제안" ? AUDITION_URL : "#"} target={item === "시민제안" ? "_blank" : undefined} rel={item === "시민제안" ? "noopener noreferrer" : undefined} className="text-[13px] font-semibold text-charcoal/70 transition hover:text-green-deep">{item}</a>)}
        </nav>
        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex xl:ml-2">
          <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-secondary text-xs"><Plus size={15} />시민제안</a>
          <a href="#" className="button-primary text-xs"><Heart size={15} />후원하기</a>
        </div>
        <button onClick={() => setOpen(!open)} className="ml-auto grid size-10 place-items-center rounded-md border border-green-deep/15 text-green-deep xl:hidden" aria-label="메뉴 열기">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-green-deep/10 bg-paper px-5 py-5 xl:hidden"><nav className="container-page grid grid-cols-2 gap-2">{navItems.map((item) => item === "씨앗연대 소개" ? <Link key={item} to="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 hover:bg-green-pale">{item}</Link> : <a key={item} href={item === "시민제안" ? AUDITION_URL : "#"} target={item === "시민제안" ? "_blank" : undefined} rel={item === "시민제안" ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-charcoal/75 hover:bg-green-pale">{item}</a>)}</nav><div className="container-page mt-3 flex gap-2"><a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-secondary flex-1">시민제안 올리기</a><a href="#" className="button-primary flex-1">후원하기</a></div></div>}
    </header>
  );
}
