import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { AUDITION_URL, topTabs } from "../data/homeData";

export default function TopTabs() {
  const [active, setActive] = useState(0);
  return <aside className="h-full rounded-lg border border-green-deep/10 bg-paper p-5 shadow-soft sm:p-7"><div className="flex border-b border-green-deep/10">{topTabs.map((tab, index) => <button key={tab.label} onClick={() => setActive(index)} className={`flex-1 border-b-2 pb-4 text-sm font-bold transition ${active === index ? "border-green-deep text-green-deep" : "border-transparent text-charcoal/50"}`}>{tab.label}</button>)}</div><ol className="divide-y divide-green-deep/10">{topTabs[active].items.map((item, index) => { const audition = item.includes("공개 오디션"); return <li key={item}><a href={audition ? AUDITION_URL : "#"} target={audition ? "_blank" : undefined} rel={audition ? "noopener noreferrer" : undefined} className="group flex gap-4 py-5"><span className="font-serif text-lg text-gold">0{index + 1}</span><span className="flex-1 text-sm font-semibold leading-6 text-charcoal/80 group-hover:text-green-deep">{item}</span><ArrowUpRight className="mt-1 shrink-0 text-charcoal/25 group-hover:text-green-deep" size={16} /></a></li>; })}</ol><a href="#" className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-green-deep">더 많은 시민브리핑 보기 <ArrowRightIcon /></a></aside>;
}
function ArrowRightIcon() { return <span aria-hidden>→</span>; }
