import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { monitoringItems } from "../data/civicParticipation";

export default function Monitoring() {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">CIVIC WATCH</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">시민감시</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            권력이 어디로 이동하고, 시민의 세금과 자유가 어떻게 쓰이는지 계속 추적합니다. 한 번의 비판으로 끝내지 않고 숫자와 후속 조치를 기록합니다.
          </p>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {monitoringItems.map((item) => (
            <Link key={item.title} to={item.link} className="group flex min-h-[310px] flex-col border border-green-deep/15 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,76,58,.10)]">
              <div className="flex items-center justify-between gap-3">
                <span className="section-kicker">{item.tag}</span>
                <span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{item.status}</span>
              </div>
              <Eye className="mt-8 text-gold" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy group-hover:text-green-mid">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
              <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-extrabold text-green-deep">감시 기록 보기<ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>

        <aside className="mt-12 grid gap-6 border-t-2 border-navy pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">씨드의 감시 원칙</h2></div>
          <p className="text-sm leading-8 text-charcoal/65">진영의 유불리가 아니라 사실과 권력의 크기를 봅니다. 진보 진영의 과장과 권력 남용은 분명하게 비판하되, 우리 편의 과장도 사실과 다르면 바로잡습니다. 감시는 비난을 위한 것이 아니라 시민이 권력의 결정을 다시 확인할 수 있게 만드는 기록입니다.</p>
        </aside>
      </div>
    </section>
  );
}
