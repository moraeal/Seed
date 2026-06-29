import FrameCard from "../components/FrameCard";
import SectionTitle from "../components/SectionTitle";
import { frameCategories, frames } from "../data/frames";

export default function TodayFrame() {
  return (
    <section className="section-band">
      <div className="container-page">
        <SectionTitle
          eyebrow="Today Frame"
          title="오늘의 프레임"
          description="사회 이슈를 단순한 찬반 구도가 아니라 자유와 책임, 공공성의 질문으로 다시 봅니다."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {frameCategories.map((category, index) => (
            <button
              key={category}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-bold ${
                index === 0
                  ? "bg-green-deep text-ivory"
                  : "border border-green-deep/15 bg-paper text-green-deep"
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {frames.map((frame) => (
            <FrameCard key={frame.issue} frame={frame} />
          ))}
        </div>
      </div>
    </section>
  );
}
