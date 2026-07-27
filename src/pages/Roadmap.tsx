import { CheckCircle2 } from "lucide-react";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Roadmap() {
  const { language } = useLanguage();
  const t = getContent(language).roadmap;

  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="container-page">
        <span className="section-kicker">ROADMAP</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{t.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/70">{t.subtitle}</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.phases.map((phase, index) => (
            <article key={phase.title} className="content-card flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-extrabold leading-tight text-navy">{phase.title}</h2>
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-green-deep text-sm font-extrabold text-gold">
                  {index + 1}
                </span>
              </div>
              <ul className="mt-6 grid gap-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-charcoal/65">
                    <CheckCircle2 className="mt-1 shrink-0 text-green-mid" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
