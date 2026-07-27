import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

type SimplePageKey = keyof ReturnType<typeof getContent>["simplePages"];

export default function SimplePage({ pageKey }: { pageKey: SimplePageKey }) {
  const { language } = useLanguage();
  const t = getContent(language);
  const page = t.simplePages[pageKey];

  return (
    <section className="min-h-[58vh] bg-ivory py-16 sm:py-20">
      <div className="container-page">
        <span className="section-kicker">SEED CIVIC PARTNERS</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/70">{page.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about" className="button-primary">
            {language === "en" ? "About SEED" : "씨앗연대 소개"}
            <ArrowRight size={16} />
          </Link>
          <Link to="/" className="button-secondary">
            {language === "en" ? "Home" : "메인으로"}
          </Link>
        </div>
      </div>
    </section>
  );
}
