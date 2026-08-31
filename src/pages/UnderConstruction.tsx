import { ArrowLeft, Construction, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

type ConstructionPage = "proposals" | "experiments";

export default function UnderConstruction({ page }: { page: ConstructionPage }) {
  const { language } = useLanguage();
  const isProposal = page === "proposals";

  const copy =
    language === "en"
      ? {
          eyebrow: isProposal ? "CITIZEN PROPOSALS" : "CIVIC EXPERIMENTS",
          title: isProposal ? "The Proposals page is under construction." : "The Experiments page is under construction.",
          description: isProposal
            ? "We are preparing a space where citizens can turn everyday concerns into clear, constructive proposals."
            : "We are preparing a space to test small civic solutions and share what we learn in public.",
          status: "Preparing the structure, participation process, and public records",
          back: "Back to home",
        }
      : {
          eyebrow: isProposal ? "CITIZEN PROPOSALS" : "CIVIC EXPERIMENTS",
          title: isProposal ? "제안 페이지를 만들고 있습니다." : "실험 페이지를 만들고 있습니다.",
          description: isProposal
            ? "시민의 작은 문제의식을 구체적이고 실행 가능한 제안으로 발전시키는 공간을 준비하고 있습니다."
            : "작은 시민 해법을 직접 시험하고, 그 과정과 결과를 공개 기록으로 나누는 공간을 준비하고 있습니다.",
          status: "페이지 구성과 참여 방식, 공개 기록 체계를 준비 중입니다",
          back: "메인으로 돌아가기",
        };

  return (
    <section className="min-h-[68vh] bg-ivory py-14 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-green-deep/15 bg-paper px-7 py-14 shadow-sm sm:px-12 sm:py-20 lg:px-20">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-green-pale/70" aria-hidden="true" />
          <div className="absolute bottom-8 right-10 hidden text-green-deep/10 sm:block" aria-hidden="true">
            <Sprout size={150} strokeWidth={1.2} />
          </div>

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-pale px-4 py-2 text-[11px] font-extrabold tracking-[.16em] text-green-deep">
              <Construction size={15} />
              {copy.eyebrow}
            </div>
            <p className="mt-8 text-sm font-bold text-gold-dark">{language === "en" ? "UNDER CONSTRUCTION" : "공사중"}</p>
            <h1 className="editorial-title mt-3 text-4xl font-bold leading-tight text-navy sm:text-5xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/65">{copy.description}</p>
            <div className="mt-8 border-l-2 border-green-mid pl-4 text-sm font-semibold leading-7 text-charcoal/55">{copy.status}</div>
            <Link to="/" className="button-primary mt-10">
              <ArrowLeft size={16} />
              {copy.back}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
