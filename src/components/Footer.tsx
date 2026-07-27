import { Link } from "react-router-dom";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <footer className="border-t border-green-deep/10 bg-ivory py-10">
      <div className="container-page grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}images/brand/seed-civic-partners-logo.svg`}
            alt="SEED Civic Partners"
            className="h-12 w-auto"
          />
          <h2 className="mt-5 text-lg font-extrabold text-navy">{t.footer.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/60">{t.footer.description}</p>
          <p className="mt-3 text-sm font-semibold text-green-deep">{t.footer.profile}</p>
          <p className="mt-2 text-sm font-semibold text-green-deep">{t.footer.contact}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold text-charcoal/60">
          <Link to="/about" className="hover:text-green-deep">
            {language === "en" ? "About" : "소개"}
          </Link>
          <Link to="/roadmap" className="hover:text-green-deep">
            {language === "en" ? "Roadmap" : "로드맵"}
          </Link>
          <Link to="/support" className="hover:text-green-deep">
            {language === "en" ? "Partnership & Support" : "협력 및 후원"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
