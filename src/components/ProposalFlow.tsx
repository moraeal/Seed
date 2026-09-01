import { ArrowRight } from "lucide-react";

const steps = {
  ko: ["시민 제안", "사실 확인", "씨드 브리핑", "공개 공론장", "시민실험", "정책 제안", "후속 점검"],
  en: ["Citizen Proposal", "Fact Review", "SEED Briefing", "Public Forum", "Civic Experiment", "Policy Proposal", "Follow-up"],
};

export default function ProposalFlow({ ko = true }: { ko?: boolean }) {
  const items = ko ? steps.ko : steps.en;

  return (
    <div className="grid gap-3 md:grid-cols-7">
      {items.map((step, index) => (
        <div key={step} className="flex items-center gap-3 md:block">
          <div className="h-full border border-green-deep/10 bg-white p-4 text-center shadow-[0_10px_30px_rgba(23,76,58,.05)]">
            <span className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-green-deep text-sm font-bold text-ivory">
              {index + 1}
            </span>
            <p className="text-sm font-bold leading-5 text-green-deep">{step}</p>
          </div>
          {index < items.length - 1 && (
            <ArrowRight className="text-gold md:mx-auto md:mt-3" size={18} aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
