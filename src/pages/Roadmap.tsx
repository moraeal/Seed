import ImpactMetric from "../components/ImpactMetric";
import RoadmapTimeline from "../components/RoadmapTimeline";
import SectionTitle from "../components/SectionTitle";
import { metrics } from "../data/metrics";
import { hundredDayRoadmap, threeYearPlan, yearGoals } from "../data/roadmap";

export default function Roadmap() {
  return (
    <section className="section-band">
      <div className="container-page">
        <SectionTitle
          eyebrow="Roadmap"
          title="100일 계획에서 3년 확장까지"
          description="언어 연구, 콘텐츠 발행, 시민 제안, 공론장 조직화를 단계적으로 연결합니다."
        />
        <div className="mt-10">
          <RoadmapTimeline phases={hundredDayRoadmap} />
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-2xl font-bold text-green-deep">1년 차 목표</h3>
            <ul className="mt-5 grid gap-3">
              {yearGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-sm leading-6 text-charcoal/72">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-2xl font-bold text-green-deep">3년 차 확장 계획</h3>
            <ul className="mt-5 grid gap-3">
              {threeYearPlan.map((plan) => (
                <li key={plan} className="flex gap-3 text-sm leading-6 text-charcoal/72">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {plan}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <ImpactMetric key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
