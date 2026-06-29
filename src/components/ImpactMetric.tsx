import type { Metric } from "../data/metrics";

export default function ImpactMetric({ metric }: { metric: Metric }) {
  return (
    <article className="rounded-lg border border-green-deep/10 bg-ivory p-5">
      <p className="text-4xl font-extrabold text-green-deep">{metric.value}</p>
      <h3 className="mt-2 font-bold text-navy">{metric.label}</h3>
      <p className="mt-1 text-sm leading-6 text-charcoal/64">{metric.description}</p>
    </article>
  );
}
