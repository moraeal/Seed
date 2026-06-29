import { Download, Mail, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="section-band bg-green-deep text-ivory">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold text-gold">JOIN THE PLATFORM</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            자유와 책임의 시민언어를 다시 심겠습니다.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/78">
            씨앗연대는 작은 씨앗에서 시작합니다. 그러나 이 씨앗은 시민이 다시
            공공성의 주체로 자라나는 토양이 될 것입니다.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <Link
            to="/support"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-ivory px-5 py-3 font-bold text-green-deep"
          >
            <Mail size={18} aria-hidden />
            후원 문의하기
          </Link>
          <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-ivory/25 px-5 py-3 font-bold text-ivory">
            <Download size={18} aria-hidden />
            제안서 다운로드
          </button>
          <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-ivory/25 px-5 py-3 font-bold text-ivory">
            <Newspaper size={18} aria-hidden />
            창립 소식 받기
          </button>
        </div>
      </div>
    </section>
  );
}
