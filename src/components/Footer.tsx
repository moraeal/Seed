import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#102f28] py-12 text-white sm:py-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-3xl font-black tracking-[-.055em]">KUMEPUME</p>
            <p className="mt-2 text-xs font-black tracking-[.15em] text-white/45">사단법인 꿈에품에</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">꿈에품에는 나눔과 공익봉사를 통해 사람의 가능성을 키우고, 시민과 기업의 책임 있는 참여를 사회적 변화로 연결합니다.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div><p className="text-xs font-black tracking-[.15em] text-[#ffc04c]">ABOUT</p><nav className="mt-4 grid gap-3 text-sm text-white/65"><a href="#top">KUMEPUME</a><a href="#work">사업</a><a href="#stories">활동과 성과</a></nav></div>
            <div><p className="text-xs font-black tracking-[.15em] text-[#ffc04c]">TOGETHER</p><nav className="mt-4 grid gap-3 text-sm text-white/65"><a href="#join">후원하기</a><a href="#join">공익봉사</a><a href="#join">기업협력</a></nav></div>
            <div><p className="text-xs font-black tracking-[.15em] text-[#ffc04c]">TRUST</p><nav className="mt-4 grid gap-3 text-sm text-white/65"><a href="#transparency">투명경영</a><a href="#transparency">정관·공시</a><a href="https://seedvoice.kr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">씨앗의 소리 <ArrowUpRight size={13}/></a></nav></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/38 sm:flex-row"><span>© 2026 KUMEPUME. All rights reserved.</span><span>꿈을 품고, 시민의 힘을 키웁니다.</span></div>
      </div>
    </footer>
  );
}
