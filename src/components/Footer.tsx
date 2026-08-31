import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { language } = useLanguage();
  const t = getContent(language);
  const email = t.footer.contact.replace("Contact: ", "");

  return <footer className="border-t border-white/10 bg-[#112B25] py-14 text-white">
    <div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div><img src={`${import.meta.env.BASE_URL}images/brand/seed-civic-partners-logo.svg`} alt="SEED Civic Partners" className="h-12 w-auto brightness-0 invert"/><h2 className="editorial-title mt-7 text-2xl font-bold">{t.footer.title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{t.footer.description}</p><a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold-light">{t.footer.contact}<ArrowUpRight size={14}/></a></div>
        <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">EXPLORE</p><nav className="mt-5 grid gap-3 text-sm text-white/65"><Link to="/about">씨앗연대 소개</Link><Link to="/briefings">시민브리핑</Link><Link to="/roadmap">로드맵</Link></nav></div><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/35">PARTICIPATE</p><nav className="mt-5 grid gap-3 text-sm text-white/65"><Link to="/support">후원하기</Link><a href="https://moraeal.github.io/moraeal/" target="_blank" rel="noreferrer">시민제안</a></nav></div></div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/35"><span>© 2026 SEED Civic Partners</span><span>사실을 진영의 언어에서 꺼내 시민의 언어로</span></div>
    </div>
  </footer>;
}
