import { ArrowRight, BookOpenCheck, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { MAGAZINE_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Forum() {
  const { language } = useLanguage();
  const page = getContent(language).simplePages.forum;

  if (language === "en") {
    return (
      <section className="section-band bg-paper">
        <div className="container-page">
          <span className="section-kicker">INSIGHTS</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-charcoal/65">{page.subtitle}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="content-card">
              <BookOpenCheck className="text-green-mid" size={28} />
              <h2 className="mt-5 text-xl font-extrabold text-navy">What to expect</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/65">Briefings will cover citizen agency, regulatory and institutional questions, enterprise and civil society, digital government, and lessons from SEED's pilot programs.</p>
            </article>
            <article className="content-card">
              <Globe2 className="text-green-mid" size={28} />
              <h2 className="mt-5 text-xl font-extrabold text-navy">For international partners</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/65">For background materials, partnership conversations, or joint research and civic education proposals, contact hello@seedcivicpartners.org.</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:hello@seedcivicpartners.org" className="button-primary">Contact SEED <ArrowRight size={16} /></a>
            <Link to="/about" className="button-secondary">About SEED</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper">
      <div className="container-page py-8">
        <span className="section-kicker">PUBLIC FORUM</span>
        <h1 className="mt-3 text-3xl font-extrabold text-navy">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/60">{page.subtitle}</p>
      </div>
      <iframe
        title={page.title}
        src={MAGAZINE_URL}
        className="h-[calc(100vh-170px)] min-h-[680px] w-full border-0 bg-white"
      />
    </section>
  );
}
