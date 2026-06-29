type PillarCardProps = {
  title: string;
  english: string;
  description: string;
  index: number;
};

export default function PillarCard({ title, english, description, index }: PillarCardProps) {
  return (
    <article className="card h-full p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-green-pale text-sm font-bold text-green-deep">
          {index}
        </span>
        <span className="text-sm font-semibold text-gold">{english}</span>
      </div>
      <h3 className="text-2xl font-bold text-green-deep">{title}</h3>
      <p className="mt-4 leading-7 text-charcoal/72">{description}</p>
    </article>
  );
}
