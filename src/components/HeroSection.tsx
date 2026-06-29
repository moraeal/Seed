import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,76,58,0.08),transparent_44%,rgba(183,144,75,0.12))]" />
      <div className="container-page relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-deep/15 bg-ivory px-4 py-2 text-sm font-semibold text-green-deep">
            <ShieldCheck size={16} aria-hidden />
            자유와 책임의 시민사회 플랫폼
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-green-deep sm:text-6xl lg:text-7xl">
            씨앗연대
            <span className="mt-4 block text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              자유와 책임으로 자라는 시민운동
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-charcoal/76 sm:text-xl">
            시민 안의 공공성의 씨앗을 발견하고, 자유와 책임의 언어로 새로운
            시민사회를 세웁니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-green-deep px-6 py-3 font-bold text-ivory transition hover:bg-green-mid"
            >
              활동 방식 보기
              <ArrowRight size={18} aria-hidden />
            </a>
            <Link
              to="/support"
              className="focus-ring inline-flex items-center justify-center rounded-lg border border-green-deep/20 bg-ivory px-6 py-3 font-bold text-green-deep transition hover:bg-green-pale"
            >
              후원 참여하기
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="card p-6 sm:p-8">
            <p className="text-sm font-bold text-gold">CIVIC LANGUAGE LAB</p>
            <div className="mt-6 grid gap-4">
              {[
                ["권리와 평등", "시민의 출발 조건"],
                ["자유와 책임", "시민의 성장 조건"],
                ["공공성", "시민 안에서 자라는 씨앗"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-lg border border-green-deep/10 bg-ivory p-5"
                >
                  <p className="text-xl font-bold text-green-deep">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
