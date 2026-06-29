import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "../data/homeData";

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setActive((v) => (v + 1) % heroSlides.length), 5000); return () => window.clearInterval(id); }, []);
  const slide = heroSlides[active];
  const move = (step: number) => setActive((active + step + heroSlides.length) % heroSlides.length);
  return (
    <div className={`hero-slide hero-art-slide hero-${slide.tone}`}>
      <img src={slide.image} alt="" className="absolute inset-0 hidden size-full object-contain sm:block" />
      <img src={slide.image} alt="" className="absolute inset-0 size-full object-cover sm:hidden" />
      <div className="sr-only"><span>{slide.category}</span><h1>{slide.title}</h1><p>{slide.description}</p></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/80 to-transparent p-6 pb-16 text-white sm:hidden">
        <span className="w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">{slide.category}</span>
        <h1 className="mt-3 text-2xl font-extrabold leading-tight">{slide.title}</h1>
        <p className="mt-3 text-sm leading-6 text-white/80">{slide.description}</p>
        <a href={slide.href ?? "#"} target={slide.href ? "_blank" : undefined} rel={slide.href ? "noopener noreferrer" : undefined} className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-green-deep">{slide.button}<ArrowRight size={16} /></a>
      </div>
      <a
        href={slide.href ?? "#"}
        target={slide.href ? "_blank" : undefined}
        rel={slide.href ? "noopener noreferrer" : undefined}
        aria-label={`${slide.button}: ${slide.title}`}
        title={slide.button}
        className={`absolute left-[5.5%] z-20 hidden w-[24%] rounded-md focus:outline-none focus:ring-4 focus:ring-gold sm:block ${active > 1 ? "bottom-[13%] h-[14%]" : "bottom-[8%] h-[14%]"}`}
      />
      <button onClick={() => move(-1)} className="absolute left-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-navy/55 text-white backdrop-blur-sm transition hover:bg-navy" aria-label="이전"><ArrowLeft size={18} /></button>
      <button onClick={() => move(1)} className="absolute right-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-navy/55 text-white backdrop-blur-sm transition hover:bg-navy" aria-label="다음"><ArrowRight size={18} /></button>
      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-navy/55 px-3 py-2 backdrop-blur-sm">{heroSlides.map((item, index) => <button key={item.title} onClick={() => setActive(index)} aria-label={`${index + 1}번 슬라이드`} className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-white" : "w-3 bg-white/45"}`} />)}</div>
    </div>
  );
}
