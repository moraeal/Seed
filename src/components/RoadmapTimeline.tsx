import type { RoadmapPhase } from "../data/roadmap";

export default function RoadmapTimeline({ phases }: { phases: RoadmapPhase[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {phases.map((phase) => (
        <article key={phase.period} className="card p-6">
          <p className="mb-2 text-sm font-bold text-gold">{phase.period}</p>
          <h3 className="text-2xl font-bold text-green-deep">{phase.title}</h3>
          <ul className="mt-5 grid gap-3">
            {phase.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal/72">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
