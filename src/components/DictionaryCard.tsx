import type { DictionaryEntry } from "../data/dictionary";

export default function DictionaryCard({ entry }: { entry: DictionaryEntry }) {
  return (
    <article className="card h-full p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-green-deep">{entry.word}</h3>
        <span className="rounded-full bg-ivory px-3 py-1 text-xs font-bold text-gold">
          {entry.category}
        </span>
      </div>
      <p className="text-sm font-semibold text-navy">기존 이미지</p>
      <p className="mt-1 text-sm leading-6 text-charcoal/65">{entry.oldImage}</p>
      <p className="mt-5 text-sm font-semibold text-navy">씨앗연대의 재정의</p>
      <p className="mt-1 leading-7 text-charcoal/78">{entry.seedDefinition}</p>
      <p className="mt-5 rounded-lg bg-green-pale p-4 text-sm leading-6 text-green-deep">
        {entry.civicMeaning}
      </p>
    </article>
  );
}
