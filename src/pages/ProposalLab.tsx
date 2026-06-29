import { useState } from "react";
import ProposalFlow from "../components/ProposalFlow";
import SectionTitle from "../components/SectionTitle";

const fields = [
  "이름 또는 닉네임",
  "이메일",
  "제안 제목",
  "문제 설명",
  "왜 공공적 문제라고 생각하는가",
  "관련 지역 또는 분야",
];

export default function ProposalLab() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section-band">
      <div className="container-page">
        <SectionTitle
          eyebrow="Proposal Lab"
          title="씨앗시민 제안소"
          description="시민의 문제의식을 프레임 분석, 브리핑, 공론장, 시민실험, 정책 제안으로 연결합니다."
        />
        <div className="mt-10">
          <ProposalFlow />
        </div>
        <form
          className="card mt-12 grid gap-5 p-6 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
        >
          <h3 className="text-2xl font-bold text-green-deep">제안 데모 폼</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field, index) => (
              <label key={field} className={index >= 3 ? "md:col-span-2" : ""}>
                <span className="mb-2 block text-sm font-bold text-navy">{field}</span>
                {index >= 3 ? (
                  <textarea
                    className="focus-ring min-h-28 w-full rounded-lg border border-green-deep/15 bg-ivory px-4 py-3"
                    required
                  />
                ) : (
                  <input
                    className="focus-ring w-full rounded-lg border border-green-deep/15 bg-ivory px-4 py-3"
                    required={index !== 1}
                    type={index === 1 ? "email" : "text"}
                  />
                )}
              </label>
            ))}
          </div>
          <button
            className="focus-ring justify-self-start rounded-lg bg-green-deep px-6 py-3 font-bold text-ivory"
            type="submit"
          >
            제안 접수 데모
          </button>
        </form>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-charcoal/45 px-5">
          <div className="card max-w-md p-7">
            <h3 className="text-2xl font-bold text-green-deep">안내</h3>
            <p className="mt-4 leading-7 text-charcoal/75">
              첫 버전에서는 접수 데모입니다. 정식 오픈 시 제안이 접수됩니다.
            </p>
            <button
              type="button"
              className="focus-ring mt-6 rounded-lg bg-green-deep px-5 py-3 font-bold text-ivory"
              onClick={() => setOpen(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
