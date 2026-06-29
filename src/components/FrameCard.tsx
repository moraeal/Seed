import type { Frame } from "../data/frames";

export default function FrameCard({ frame }: { frame: Frame }) {
  return (
    <article className="card flex h-full flex-col p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-green-deep">{frame.issue}</h3>
        <span className="shrink-0 rounded-full bg-green-pale px-3 py-1 text-xs font-bold text-green-deep">
          {frame.category}
        </span>
      </div>
      <dl className="grid gap-4 text-sm leading-6">
        <div>
          <dt className="font-bold text-navy">기존 프레임</dt>
          <dd className="mt-1 text-charcoal/70">{frame.progressiveFrame}</dd>
        </div>
        <div>
          <dt className="font-bold text-navy">놓친 질문</dt>
          <dd className="mt-1 text-charcoal/70">{frame.missedQuestion}</dd>
        </div>
        <div className="rounded-lg bg-green-pale p-4">
          <dt className="font-bold text-green-deep">자유와 책임의 해석</dt>
          <dd className="mt-1 text-charcoal/78">{frame.seedInterpretation}</dd>
        </div>
      </dl>
      <p className="mt-5 border-t border-green-deep/10 pt-4 font-semibold leading-7 text-green-deep">
        {frame.citizenSentence}
      </p>
    </article>
  );
}
