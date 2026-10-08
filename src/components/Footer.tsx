import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { SITE_DESCRIPTION } from "../siteMeta";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const email = "seedvoicekr@gmail.com";

  return <footer className="border-t-4 border-[#eed474] bg-[#19445b] py-8 text-white">
    <div className="container-page">
      <div className="grid gap-7 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <BrandLockup tone="footer" />
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">{ko ? SITE_DESCRIPTION : "SEED VOICE defends freedom for citizens and enterprise, scrutinizes power, and restores integrity to the public good."}</p><a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#ffe48a]">Contact: {email}<ArrowUpRight size={14}/></a>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-[#ffe48a]">READ</p><nav className="mt-3 grid gap-2 text-sm text-white/80"><Link to="/news">{ko ? "핫이슈" : "Hot Issues"}</Link><Link to="/briefings">{ko ? "브리핑" : "Briefings"}</Link><Link to="/monitoring">{ko ? "시민감시" : "Civic Watch"}</Link><Link to="/civic-life">{ko ? "시민생활" : "Civic Life"}</Link><Link to="/seed-language">{ko ? "시민언어" : "Glossary"}</Link><Link to="/columns">{ko ? "칼럼" : "Columns"}</Link></nav></div><div><p className="text-[10px] font-extrabold tracking-[.18em] text-[#ffe48a]">ABOUT</p><nav className="mt-3 grid gap-2 text-sm text-white/80"><Link to="/about">{ko ? "소개" : "About"}</Link><Link to="/publisher-message">{ko ? "발행인 소개" : "About the Publisher"}</Link></nav></div></div>
      </div>
      <div className="mt-7 flex flex-col gap-4 border-t border-white/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-white/60">
          <span>{ko ? "© 2026 씨앗의 소리" : "© 2026 SEED VOICE"}</span>
          <span>{ko ? "사실은 정확하게, 관점은 분명하게" : "Accurate in fact, clear in viewpoint"}</span>
        </div>
        <Link
          to="/account?mode=signup"
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-lg bg-[#ffe48a] px-6 py-3 text-base font-extrabold text-[#19445b] transition hover:bg-[#eed474] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe48a] sm:w-auto"
        >
          {ko ? "구독 가입" : "Subscribe"}
        </Link>
      </div>
    </div>
  </footer>;
}
