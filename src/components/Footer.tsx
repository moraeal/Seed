import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { SITE_DESCRIPTION } from "../siteMeta";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const email = "seedvoicekr@gmail.com";

  return <footer className="border-t border-white/10 bg-[#112B25] py-8 text-white">
    <div className="container-page">
      <div className="grid gap-7 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <BrandLockup tone="footer" />
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{ko ? SITE_DESCRIPTION : "SEED VOICE defends freedom for citizens and enterprise, scrutinizes power, and restores integrity to the public good."}</p><a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gold-light">Contact: {email}<ArrowUpRight size={14}/></a>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">READ</p><nav className="mt-3 grid gap-2 text-sm text-white/65"><Link to="/news">{ko ? "핫이슈" : "Hot Issues"}</Link><Link to="/briefings">{ko ? "브리핑" : "Briefings"}</Link><Link to="/monitoring">{ko ? "시민감시" : "Civic Watch"}</Link><Link to="/seed-language">{ko ? "시민언어" : "Glossary"}</Link><Link to="/columns">{ko ? "칼럼" : "Columns"}</Link></nav></div><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">ABOUT</p><nav className="mt-3 grid gap-2 text-sm text-white/65"><Link to="/about">{ko ? "소개" : "About"}</Link><Link to="/publisher-message">{ko ? "발행인 소개" : "About the Publisher"}</Link></nav></div></div>
      </div>
      <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4 text-[11px] text-white/35"><span>{ko ? "© 2026 씨앗의 소리" : "© 2026 SEED VOICE"}</span><span>{ko ? "사실은 정확하게, 관점은 분명하게" : "Accurate in fact, clear in viewpoint"}</span></div>
    </div>
  </footer>;
}
