import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/aboutData";

export default function ProcessTimeline() {
  return <div className="grid gap-3 lg:grid-cols-5">{processSteps.map((step, index) => <div key={step.title} className="relative"><article className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-6"><span className="text-xs font-extrabold text-gold">STEP 0{index + 1}</span><h3 className="mt-4 text-lg font-extrabold text-white">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p></article>{index < processSteps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-gold lg:block" size={24} />}</div>)}</div>;
}
