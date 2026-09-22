import { ArrowLeft, BookOpenText, Check, FolderOpen, Search } from "lucide-react";
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
  const [categoryId, setCategoryId] = useState(civicLanguageCategories[0].id);

  const completedCount = useMemo(() => new Set(civicLanguageCategories.flatMap((category) => category.terms).filter((item) => item.href).map((item) => item.label)).size, []);
  const filteredCategories = useMemo(() => {
    const needle = normalized(query);
    return civicLanguageCategories
      .map((category) => ({
        ...category,
        terms: category.terms.filter((item) => {
          if (status === "published" && !item.href) return false;
          if (status === "planned" && item.href) return false;
          if (status === "priority" && !item.priority) return false;
          if (!needle) return true;
          return [item.label, ...(item.aliases ?? [])].some((value) => normalized(value).includes(needle));
        }),
      }));
  }, [query, status]);
  const activeCategory = filteredCategories.find((category) => category.id === categoryId) ?? filteredCategories[0];
  const matchingTermCount = filteredCategories.reduce((total, category) => total + category.terms.length, 0);

  const renderTerm = (item: CivicLanguageTerm) => {
    const content = <>
      <span className="min-w-0 flex-1"><span className="font-extrabold text-navy">{item.label}</span>{item.aliases?.length ? <span className="ml-1 text-[10px] text-charcoal/40">({item.aliases.join(" · ")})</span> : null}</span>
      {item.href ? <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-extrabold text-green-deep"><Check size={11}/>{ko ? "완료" : "Done"}</span> : <span className="shrink-0 text-[10px] font-bold text-charcoal/30">{ko ? "예정" : "Planned"}</span>}
      {item.priority ? <span className="shrink-0 rounded-full bg-gold/15 px-1.5 py-0.5 text-[9px] font-extrabold text-navy">{ko ? `우선 ${item.priority}` : `P${item.priority}`}</span> : null}
      {item.analysisOnly ? <span className="shrink-0 rounded-full bg-charcoal/5 px-1.5 py-0.5 text-[9px] font-extrabold text-charcoal/55">{ko ? "분석" : "Analysis"}</span> : null}
    </>;

    return item.href
      ? <Link key={item.label} to={item.href} className="flex min-h-9 items-center gap-1.5 border-b border-green-deep/10 px-1 py-1.5 text-[13px] transition-colors hover:bg-green-pale/55">{content}</Link>
      : <div key={item.label} className="flex min-h-9 items-center gap-1.5 border-b border-green-deep/10 px-1 py-1.5 text-[13px]">{content}</div>;
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

        <div className="mt-5 overflow-hidden border border-green-deep/20 bg-ivory shadow-[0_20px_55px_rgba(23,76,58,.08)]">
          <div className="grid lg:grid-cols-[13.5rem_minmax(0,1fr)]">
            <aside className="border-b border-green-deep/15 bg-green-pale/55 p-3 lg:border-r lg:border-b-0" aria-label={ko ? "시민언어 파일 태그" : "Civic language file tabs"}>
              <div className="flex items-center justify-between px-2 py-1.5">
                <span className="flex items-center gap-2 text-[11px] font-extrabold tracking-[.14em] text-green-deep"><FolderOpen size={15}/>{ko ? "분류 파일" : "FILE INDEX"}</span>
                <span className="text-[10px] font-bold text-charcoal/40">{ko ? `${matchingTermCount}개` : matchingTermCount}</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-orientation="vertical">
                {filteredCategories.map((category, index) => {
                  const selected = category.id === activeCategory.id;
                  return <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="civic-language-folder"
                    onClick={() => setCategoryId(category.id)}
                    className={`group flex min-h-8 items-center gap-2 border-l-[3px] px-2 py-1.5 text-left transition ${selected ? "border-green-deep bg-white text-navy shadow-sm" : "border-transparent text-charcoal/55 hover:bg-white/65 hover:text-navy"} ${category.terms.length === 0 ? "opacity-40" : ""}`}
                  >
                    <span className={`text-[10px] font-black ${selected ? "text-gold" : "text-charcoal/30"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1 truncate text-[11px] font-extrabold sm:text-xs">{category.title}</span>
                    <span className="text-[9px] font-bold text-charcoal/35">{category.terms.length}</span>
                  </button>;
                })}
              </div>
            </aside>

            <section id="civic-language-folder" role="tabpanel" className="relative min-h-[43rem] bg-white">
              <div className="absolute top-0 right-6 h-3 w-32 rounded-b-sm bg-gold/70 sm:w-44" aria-hidden="true"/>
              <div className="border-b border-green-deep/12 px-5 pt-7 pb-4 sm:px-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[.16em] text-green-mid">{ko ? "시민언어 파일" : "CIVIC LANGUAGE FILE"} {String(civicLanguageCategories.findIndex((item) => item.id === activeCategory.id) + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{activeCategory.title}</h3>
                    <p className="mt-1 text-sm font-bold leading-6 text-green-deep">{activeCategory.question}</p>
                  </div>
                  <span className="rounded-full bg-green-pale px-2.5 py-1 text-[10px] font-extrabold text-green-deep">{ko ? `현재 ${activeCategory.terms.length}개` : `${activeCategory.terms.length} shown`}</span>
                </div>
                <p className="mt-3 max-w-3xl text-[13px] leading-6 text-charcoal/60 sm:text-sm">{activeCategory.description}</p>
              </div>
              {activeCategory.terms.length ? <div className="grid gap-x-4 px-5 py-3 sm:grid-cols-2 sm:px-7 xl:grid-cols-3">
                {activeCategory.terms.map(renderTerm)}
              </div> : <div className="flex min-h-56 items-center justify-center px-6 text-center text-sm font-bold text-charcoal/40">{ko ? "이 파일에는 현재 조건에 맞는 용어가 없습니다. 다른 파일 태그를 선택해보세요." : "No terms in this file match the current filters. Choose another file tab."}</div>}
            </section>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t-2 border-navy pt-7" aria-labelledby="priorities-heading">
        <div className="flex items-center gap-3"><BookOpenText className="text-green-deep"/><h2 id="priorities-heading" className="text-2xl font-extrabold text-navy">{ko ? "씨앗이 우선 정리할 40개 용어" : "Forty terms SEED will examine first"}</h2></div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-charcoal/60">{ko ? "시민의 일상과 현재의 정치·사회 논쟁에 가까운 말부터 정리합니다. 새 글이 게시되면 자동으로 ‘정리 완료’로 바뀌고 해당 기사로 연결됩니다." : "We begin with terms closest to everyday civic life and current debate. Each entry links to its article when published."}</p>
        <ol className="mt-5 grid grid-cols-2 gap-x-3 border-t border-green-deep/12 sm:grid-cols-3 lg:grid-cols-4">
          {civicLanguagePriorities.map((item) => <li key={item.label} className="grid grid-cols-[1.35rem_1fr] gap-1.5 border-b border-green-deep/10 py-2 pr-1"><span className="text-[11px] font-extrabold text-gold">{item.priority}</span><div className="min-w-0"><strong className="block truncate text-xs text-navy">{item.label}</strong><p className="mt-0.5 line-clamp-2 text-[10px] leading-4 text-charcoal/50">{civicLanguageQuestions[item.label]}</p></div></li>)}
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
