import { ArrowRight } from "lucide-react";

const steps = [
  "시민 제안",
  "프레임 분석",
  "씨앗시민 브리핑",
  "공개 공론장",
  "시민실험",
  "정책 제안",
  "후속 점검",
];

export default function ProposalFlow() {
  return (
    <div className="grid gap-3 md:grid-cols-7">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3 md:block">
          <div className="rounded-lg border border-green-deep/10 bg-paper p-4 text-center shadow-soft">
            <span className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-green-deep text-sm font-bold text-ivory">
              {index + 1}
            </span>
            <p className="text-sm font-bold leading-5 text-green-deep">{step}</p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="text-gold md:mx-auto md:mt-3" size={18} aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
