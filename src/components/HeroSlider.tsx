import { ArrowLeft, ArrowRight, Landmark, MessageCircle, SearchCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "../data/homeData";

const icons = [Landmark, SearchCheck, MessageCircle];
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setActive((v) => (v + 1) % heroSlides.length), 5000); return () => window.clearInterval(id); }, []);
  const slide = heroSlides[active];
  const Icon = icons[active];
  const move = (step: number) => setActive((active + step + heroSlides.length) % heroSlides.length);
  return (
    <div className={`hero-slide hero-${slide.tone}`}>
      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">
        <div><span className="eyebrow-pill">{slide.category}</span><h1 className="mt-6 max-w-2xl text-3xl font-extrabold leading-[1.25] text-white sm:text-4xl lg:text-[44px]">{slide.title}</h1><p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{slide.description}</p><a href={slide.href ?? "#"} target={slide.href ? "_blank" : undefined} rel={slide.href ? "noopener noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-green-deep transition hover:-translate-y-0.5">{slide.button}<ArrowRight size={17} /></a></div>
        <div className="mt-8 flex items-center justify-between"><div className="flex gap-2">{heroSlides.map((item, index) => <button key={item.title} onClick={() => setActive(index)} aria-label={`${index + 1}번 슬라이드`} className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-white" : "w-3 bg-white/35"}`} />)}</div><div className="flex gap-2"><button onClick={() => move(-1)} className="hero-arrow" aria-label="이전"><ArrowLeft size={18} /></button><button onClick={() => move(1)} className="hero-arrow" aria-label="다음"><ArrowRight size={18} /></button></div></div>
      </div>
      <div className="absolute right-8 top-10 hidden size-44 place-items-center rounded-full border border-white/20 bg-white/10 text-white/70 lg:grid"><Icon size={76} strokeWidth={1.2} /></div>
    </div>
  );
}
