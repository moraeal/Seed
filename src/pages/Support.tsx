import CTASection from "../components/CTASection";
import ImpactMetric from "../components/ImpactMetric";
import SectionTitle from "../components/SectionTitle";
import SupportTierCard from "../components/SupportTierCard";
import { metrics } from "../data/metrics";
import { fundUses, sponsorshipPrinciples, supportTiers } from "../data/supportTiers";

export default function Support() {
  return (
    <>
      <section className="section-band">
        <div className="container-page">
          <SectionTitle
            eyebrow="Support"
            title="후원은 자유와 책임의 시민사회 인프라를 세우는 일입니다."
            description="씨앗연대는 특정 이해관계를 대변하지 않고 시민언어, 공론장, 제안 플랫폼을 투명하게 구축합니다."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-green-deep">왜 후원해야 하는가</h3>
              <p className="mt-4 leading-8 text-charcoal/75">
                자유와 책임의 언어는 저절로 살아나지 않습니다. 연구, 콘텐츠, 공론장,
                청년 리더십, 지역 모임이 이어질 때 시민사회 안에 안정적인 기반이
                생깁니다.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-green-deep">후원금 사용처</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {fundUses.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal/72">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {supportTiers.map((tier) => (
              <SupportTierCard key={tier.name} tier={tier} />
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <ImpactMetric key={metric.label} metric={metric} />
            ))}
          </div>
          <div className="mt-10 card p-6">
            <h3 className="text-2xl font-bold text-green-deep">기업 후원 원칙</h3>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {sponsorshipPrinciples.map((principle, index) => (
                <li key={principle} className="rounded-lg bg-ivory p-4 leading-7 text-charcoal/74">
                  <span className="mr-2 font-bold text-gold">{index + 1}.</span>
                  {principle}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
