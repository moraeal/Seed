import { MAGAZINE_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Forum() {
  const { language } = useLanguage();
  const page = getContent(language).simplePages.forum;

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
