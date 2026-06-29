import type { SupportTier } from "../data/supportTiers";

export default function SupportTierCard({ tier }: { tier: SupportTier }) {
  return (
    <article className="card h-full p-6">
      <h3 className="text-xl font-bold text-green-deep">{tier.name}</h3>
      <p className="mt-4 text-2xl font-extrabold text-navy">{tier.price}</p>
      <p className="mt-4 leading-7 text-charcoal/72">{tier.description}</p>
    </article>
  );
}
