import { ArrowLeft, BookOpenText, Check, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import {
  civicLanguageCategories,
  civicLanguagePriorities,
  civicLanguageQuestions,
  type CivicLanguageTerm,
} from "../data/civicLanguageMap";
import { useLanguage } from "../i18n";

type StatusFilter = "all" | "published" | "planned" | "priority";

const normalized = (value: string) => value.toLocaleLowerCase().replace(/\s+/g, "");

export default function CivicLanguageMap() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [categoryId, setCategoryId] = useState("all");

  const completedCount = useMemo(() => new Set(civicLanguageCategories.flatMap((category) => category.terms).filter((item) => item.href).map((item) => item.label)).size, []);
  const visibleCategories = useMemo(() => {
    const needle = normalized(query);
    return civicLanguageCategories
      .filter((category) => categoryId === "all" || category.id === categoryId)
      .map((category) => ({
        ...category,
        terms: category.terms.filter((item) => {
          if (status === "published" && !item.href) return false;
          if (status === "planned" && item.href) return false;
          if (status === "priority" && !item.priority) return false;
          if (!needle) return true;
          return [item.label, ...(item.aliases ?? [])].some((value) => normalized(value).includes(needle));
        }),
      }))
      .filter((category) => category.terms.length > 0);
  }, [categoryId, query, status]);

  const renderTerm = (item: CivicLanguageTerm) => {
    const content = <>
      <span className="font-extrabold text-navy">{item.label}</span>
      {item.aliases?.length ? <span className="text-xs text-charcoal/45">({item.aliases.join(" · ")})</span> : null}
      {item.href ? <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-extrabold text-green-deep"><Check size={12}/>{ko ? "정리 완료" : "Published"}</span> : <span className="ml-auto text-[11px] font-bold text-charcoal/35">{ko ? "정리 예정" : "Planned"}</span>}
      {item.priority ? <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-extrabold text-navy">{ko ? `우선 ${item.priority}` : `Priority ${item.priority}`}</span> : null}
      {item.analysisOnly ? <span className="rounded-full bg-charcoal/5 px-2 py-0.5 text-[10px] font-extrabold text-charcoal/55">{ko ? "분석 대상" : "For analysis"}</span> : null}
    </>;

    return item.href
      ? <Link key={item.label} to={item.href} className="flex min-h-11 flex-wrap items-center gap-2 border-b border-green-deep/10 px-1 py-2.5 transition-colors hover:bg-green-pale/55">{content}</Link>
      : <div key={item.label} className="flex min-h-11 flex-wrap items-center gap-2 border-b border-green-deep/10 px-1 py-2.5">{content}</div>;
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-8 sm:py-12">
      <div className="container-page max-w-5xl">
        <Link to="/seed-language" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "시민언어" : "Glossary"}</Link>
        <p className="section-kicker mt-7">WHY CIVIC LANGUAGE</p>
        <h1 className="editorial-title mt-3 max-w-4xl text-balance text-[2.25rem] font-bold leading-[1.12] text-navy sm:text-[3.2rem]">{ko ? "우리가 다시 뜻을 새겨야 할 말들" : "Words We Need to Define Again"}</h1>
        <p className="mt-4 text-lg font-bold leading-8 text-green-deep sm:text-xl">{ko ? "씨앗이 하나씩 정리할 시민언어 목록" : "A living map of civic language, one term at a time"}</p>
        <div className="mt-8 max-w-3xl space-y-4 text-[1.04rem] leading-8 text-charcoal/75">
          {ko ? <>
            <p>같은 말을 쓰면서도 전혀 다른 이야기를 할 때가 있습니다. 자유를 말하면 보수라고 하고, 평등을 말하면 진보라고 합니다. 기업의 자유를 말하면 친기업이고 노동자의 권리를 말하면 친노동이라고 합니다. 말의 뜻보다 어느 편에서 한 말인지가 먼저 판단됩니다.</p>
            <p>진영화된 말은 시민의 생각을 돕지 못합니다. 말을 듣는 순간 찬성과 반대부터 선택하게 만들고, 정책의 내용보다 상대를 규정하는 이름을 앞세웁니다. 시민언어는 사전의 뜻만 옮기는 작업이 아닙니다. 말이 어디에서 시작됐고 현실에서 어떻게 사용됐으며, 누구의 권한을 키우고 무엇을 감추는지 살펴보는 작업입니다.</p>
            <p>진보가 만든 말이라고 배척하지 않고 보수가 즐겨 쓰는 말이라고 그대로 받아들이지도 않겠습니다. 같은 기준으로 살피되 책임을 기계적으로 반씩 나누지 않겠습니다. 실제 의미와 사용 방식, 시민의 자유와 권력에 미친 효과가 판단의 기준입니다.</p>
          </> : <>
            <p>We often use the same words while meaning entirely different things. Freedom is assigned to conservatives, equality to progressives, enterprise to one camp and labour rights to another. Affiliation is judged before meaning.</p>
            <p>Civic Language is not a collection of dictionary definitions. It asks where a word came from, how politics and institutions use it, whose power it enlarges and what it hides from citizens.</p>
            <p>We will test progressive and conservative language by the same standards without mechanically dividing responsibility in half. Meaning, use and effects on civic freedom and power are the test.</p>
          </>}
        </div>
        <figure className="mt-9 overflow-hidden bg-white shadow-[0_18px_55px_rgba(23,76,58,.09)]">
          <SafeImage
            src="images/seed-language/civic-language-map-hero.webp"
            alt={ko ? "여러 세대의 시민이 붉고 푸른 표식을 걷어내며 흩어진 말의 조각을 다시 잇는 모습" : "Citizens across generations remove red and blue factional marks and reconnect scattered fragments of public language"}
            className="aspect-[16/9] w-full object-cover"
            loading="eager"
          />
          <figcaption className="border-t border-green-deep/10 px-4 py-3 text-xs leading-5 text-charcoal/50">
            {ko ? "진영의 표식에 가려진 말의 뜻을 시민이 함께 다시 잇는 장면입니다. · 씨앗의 소리 AI 제작 이미지" : "Citizens reconnect words obscured by factional labels. · AI-generated editorial image by SEED VOICE"}
          </figcaption>
        </figure>
        <blockquote className="mt-8 max-w-3xl border-l-4 border-gold pl-5 text-xl font-extrabold leading-8 text-navy sm:text-2xl">{ko ? "말은 어느 진영의 소유물이 아닙니다." : "Words belong to no political camp."}</blockquote>
      </div>
    </header>

    <main className="container-page max-w-5xl py-9 sm:py-12">
      <section aria-labelledby="language-map-heading">
        <div className="flex flex-col gap-4 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="section-kicker">CIVIC LANGUAGE MAP</span><h2 id="language-map-heading" className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">{ko ? "시민언어 전체 지도" : "The Civic Language Map"}</h2></div>
          <p className="text-sm font-semibold text-charcoal/50">{ko ? `${civicLanguageCategories.length}개 분류 · 정리 완료 ${completedCount}개` : `${civicLanguageCategories.length} categories · ${completedCount} published`}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="flex items-center gap-3 border-b-2 border-green-deep/25 bg-white px-4 py-3 focus-within:border-green-deep">
            <Search size={19} className="text-green-deep"/>
            <span className="sr-only">{ko ? "용어 검색" : "Search terms"}</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "표제어와 관련어 검색" : "Search terms and aliases"} className="w-full bg-transparent text-sm outline-none placeholder:text-charcoal/35"/>
          </label>
          <div className="flex flex-wrap gap-2" aria-label={ko ? "정리 상태" : "Publication status"}>
            {([
              ["all", ko ? "전체" : "All"], ["published", ko ? "정리 완료" : "Published"], ["planned", ko ? "정리 예정" : "Planned"], ["priority", ko ? "우선 40개" : "Top 40"],
            ] as [StatusFilter, string][]).map(([value, label]) => <button key={value} type="button" onClick={() => setStatus(value)} className={`px-3 py-2 text-xs font-extrabold transition-colors ${status === value ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{label}</button>)}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label={ko ? "분류 선택" : "Choose a category"}>
          <button type="button" onClick={() => setCategoryId("all")} className={`shrink-0 border-b-2 px-2 py-2 text-xs font-extrabold ${categoryId === "all" ? "border-green-deep text-green-deep" : "border-transparent text-charcoal/45"}`}>{ko ? "전체 분류" : "All categories"}</button>
          {civicLanguageCategories.map((category) => <button key={category.id} type="button" onClick={() => setCategoryId(category.id)} className={`shrink-0 border-b-2 px-2 py-2 text-xs font-extrabold ${categoryId === category.id ? "border-green-deep text-green-deep" : "border-transparent text-charcoal/45"}`}>{category.title}</button>)}
        </div>

        {visibleCategories.length ? <div className="mt-8 space-y-12">
          {visibleCategories.map((category, categoryIndex) => <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="grid gap-5 md:grid-cols-[14rem_1fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[.14em] text-green-mid">{String(categoryIndex + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug text-navy">{category.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-green-deep">{category.question}</p>
              </div>
              <div>
                <p className="max-w-3xl text-[15px] leading-7 text-charcoal/65">{category.description}</p>
                <div className="mt-5 grid gap-x-7 md:grid-cols-2">{category.terms.map(renderTerm)}</div>
              </div>
            </div>
          </section>)}
        </div> : <div className="py-20 text-center text-sm font-bold text-charcoal/45">{ko ? "조건에 맞는 용어가 없습니다." : "No terms match these filters."}</div>}
      </section>

      <section className="mt-16 border-t-2 border-navy pt-8" aria-labelledby="priorities-heading">
        <div className="flex items-center gap-3"><BookOpenText className="text-green-deep"/><h2 id="priorities-heading" className="text-2xl font-extrabold text-navy">{ko ? "씨앗이 우선 정리할 40개 용어" : "Forty terms SEED will examine first"}</h2></div>
        <p className="mt-4 max-w-3xl text-base leading-7 text-charcoal/65">{ko ? "시민의 일상과 현재의 정치·사회 논쟁에 가까운 말부터 하나씩 살펴보겠습니다. 새 글이 게시되면 이 목록은 자동으로 ‘정리 완료’로 바뀌고 해당 기사로 연결됩니다." : "We will begin with terms closest to everyday civic life and current public debate. Each entry will link to its article when published."}</p>
        <ol className="mt-7 grid gap-x-8 md:grid-cols-2">
          {civicLanguagePriorities.map((item) => <li key={item.label} className="grid grid-cols-[2rem_1fr] gap-2 border-b border-green-deep/10 py-3"><span className="text-sm font-extrabold text-gold">{item.priority}</span><div><strong className="text-sm text-navy">{item.label}</strong><p className="mt-1 text-sm leading-6 text-charcoal/55">{civicLanguageQuestions[item.label]}</p></div></li>)}
        </ol>
      </section>

      <section className="mt-16 bg-green-deep px-6 py-9 text-white sm:px-10 sm:py-11">
        <h2 className="editorial-title text-2xl font-bold sm:text-3xl">{ko ? "말의 뜻을 시민에게 돌려주겠습니다" : "Returning the meaning of words to citizens"}</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-white/80">
          {ko ? <>
            <p>씨앗은 하나의 정답을 붙이려 하지 않습니다. 말의 기원과 본래 의미를 확인하되 학자의 이름을 늘어놓는 데 머물지 않겠습니다. 세금, 직장, 학교, 병원, 아파트 관리비와 온라인 댓글처럼 시민이 살아가는 장면에서 그 말이 어떤 뜻을 갖는지 설명하겠습니다.</p>
            <p>말이 시민의 자유를 넓히는지, 권력을 제한하는지, 책임을 분명하게 하는지, 시민이 스스로 판단하고 성장하게 하는지를 보겠습니다.</p>
            <p className="font-extrabold text-white">씨앗은 빼앗기고 흐려진 말의 뜻을 시민에게 돌려주려 합니다. 자유와 권력의 제한, 책임과 시민의 성장이라는 기준으로 하나씩 뜻을 새기겠습니다.</p>
          </> : <>
            <p>SEED will not attach one final answer to every word. We will examine origins and meanings, then explain how each term works in taxes, work, schools, hospitals, household costs and online life.</p>
            <p>We will ask whether a word expands civic freedom, limits power, clarifies responsibility and helps citizens judge and grow for themselves.</p>
          </>}
        </div>
      </section>
    </main>
  </article>;
}
