import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const { language } = useLanguage();
  const t = getContent(language);
  const ko = language === "ko";
  const email = "seedcivicpartners@gmail.com";

  return <footer className="border-t border-white/10 bg-[#112B25] py-14 text-white">
    <div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLockup tone="footer" />
            <h2 className="editorial-title text-xl font-bold leading-tight sm:text-2xl">{t.footer.title}</h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{t.footer.description}</p><a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold-light">Contact: {email}<ArrowUpRight size={14}/></a>
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">EXPLORE</p><nav className="mt-5 grid gap-3 text-sm text-white/65"><Link to="/about">{ko ? "씨드시민파트너스 소개" : "About SEED"}</Link><Link to="/briefings">{ko ? "시민브리핑" : "Civic Briefings"}</Link><Link to="/columns">{ko ? "씨드칼럼" : "SEED Columns"}</Link><Link to="/roadmap">{ko ? "로드맵" : "Roadmap"}</Link></nav></div><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">PARTICIPATE</p><nav className="mt-5 grid gap-3 text-sm text-white/65"><Link to="/support">{ko ? "후원하기" : "Support SEED"}</Link><a href="https://moraeal.github.io/moraeal/" target="_blank" rel="noreferrer">{ko ? "시민제안" : "Citizen Proposals"}</a></nav></div></div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/35"><span>© 2026 SEED Civic Partners</span><span>{ko ? "사실을 진영의 언어에서 꺼내 시민의 언어로" : "From partisan language to the language of citizens"}</span></div>
    </div>
  </footer>;
}
