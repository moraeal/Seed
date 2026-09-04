import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const email = "seedcivicpartners@gmail.com";

  return <footer className="border-t border-white/10 bg-[#112B25] py-8 text-white">
    <div className="container-page">
      <div className="grid gap-7 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <BrandLockup tone="footer" />
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{ko ? "확인된 사실과 맥락을 바탕으로 시민이 스스로 판단할 수 있도록 돕는 독립 시민저널입니다." : "An independent civic journal helping citizens judge public affairs through verified facts, context, and clear argument."}</p><a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gold-light">Contact: {email}<ArrowUpRight size={14}/></a>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">READ</p><nav className="mt-3 grid gap-2 text-sm text-white/65"><Link to="/news">{ko ? "씨드뉴스" : "SEED News"}</Link><Link to="/briefings">{ko ? "시민브리핑" : "Civic Briefings"}</Link><Link to="/columns">{ko ? "씨앗의 소리" : "Voice of the Seed"}</Link></nav></div><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">ABOUT</p><nav className="mt-3 grid gap-2 text-sm text-white/65"><Link to="/about">{ko ? "소개" : "About"}</Link></nav></div></div>
      </div>
      <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4 text-[11px] text-white/35"><span>{ko ? "© 2026 씨앗의 소리" : "© 2026 SEED VOICE"}</span><span>{ko ? "사실은 정확하게, 관점은 분명하게" : "Accurate in fact, clear in viewpoint"}</span></div>
    </div>
  </footer>;
}
