import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CircleDot,
  Clock3,
  ExternalLink,
  FileQuestion,
  FileText,
  History,
  Lightbulb,
  MessageSquareText,
  PlayCircle,
  Scale,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import ArticleContinuation from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import SafeImage from "../components/SafeImage";
import ShareButton from "../components/ShareButton";
import type { EditorialContinuation } from "../data/editorialContinuations";
import type { LocalizedText, PublicInterestWatchCase, WatchTimelineStatus } from "../data/publicInterestWatch";
import type { Language } from "../i18n";

type Props = {
  item: PublicInterestWatchCase;
  language: Language;
  continuation?: EditorialContinuation;
};

const timelineTone: Record<WatchTimelineStatus, string> = {
  confirmed: "border-green-deep bg-green-deep text-white",
  response: "border-gold bg-gold text-navy",
  new: "border-red-700 bg-red-700 text-white",
  pending: "border-charcoal/25 bg-white text-charcoal/55",
};

const issueTone = {
  confirmed: "bg-green-pale text-green-deep",
  contested: "bg-gold/15 text-amber-800",
  pending: "bg-charcoal/8 text-charcoal/55",
};

export default function LivingWatchDetail({ item, language, continuation }: Props) {
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];
  const timelineLabels: Record<WatchTimelineStatus, string> = {
    confirmed: ko ? "확인" : "VERIFIED",
    response: ko ? "해명" : "RESPONSE",
    new: ko ? "새로 추가" : "NEW",
    pending: ko ? "다음 확인" : "NEXT",
  };
  const issueLabels = {
    confirmed: ko ? "사실 확인" : "VERIFIED",
    contested: ko ? "주장 충돌" : "CONTESTED",
    pending: ko ? "추가 확인" : "PENDING",
  };

  return (
    <article className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page max-w-6xl py-5 sm:py-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "씨앗의 눈" : "SEED Watch"}</Link>
            <ShareButton title={t(item.title)} text={t(item.summary)} />
          </div>

          <div className="mt-4 grid gap-7 border-t-2 border-navy pt-5 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="section-kicker">LIVING ISSUE RECORD</span>
                <span className="rounded-full bg-red-700 px-3 py-1 text-[11px] font-extrabold text-white">{t(item.status)}</span>
              </div>
              <p className="mt-4 text-sm font-extrabold text-green-deep">{t(item.organization)}</p>
              <h1 className="editorial-title mt-2 text-balance text-[2rem] font-bold leading-[1.18] text-navy sm:text-[2.75rem]">{t(item.title)}</h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-charcoal/68 sm:text-base sm:leading-8">{t(item.summary)}</p>

              <dl className="mt-6 grid gap-px overflow-hidden border border-green-deep/12 bg-green-deep/12 sm:grid-cols-3">
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-black tracking-[.14em] text-charcoal/40">{ko ? "사건 시작" : "OPENED"}</dt>
                  <dd className="mt-2 text-sm font-extrabold text-navy">{item.openedAt?.replace(/-/g, ".")}</dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-black tracking-[.14em] text-charcoal/40">{ko ? "마지막 업데이트" : "LAST UPDATED"}</dt>
                  <dd className="mt-2 text-sm font-extrabold text-red-700">{item.updatedAt.replace(/-/g, ".")}</dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-black tracking-[.14em] text-charcoal/40">{ko ? "업데이트" : "UPDATES"}</dt>
                  <dd className="mt-2 text-sm font-extrabold text-navy">{item.timeline?.filter((entry) => entry.status !== "pending").length ?? 0}{ko ? "건" : ""}</dd>
                </div>
              </dl>
            </div>

            {item.heroImage && (
              <figure className="overflow-hidden border border-green-deep/12 bg-white shadow-soft">
                <SafeImage src={item.heroImage.src} alt={t(item.heroImage.alt)} className="aspect-[4/3] w-full object-cover" loading="eager" />
                <figcaption className="border-t border-green-deep/10 px-4 py-3 text-xs leading-5 text-charcoal/55">
                  {t(item.heroImage.caption)} <span className="text-charcoal/35">· {t(item.heroImage.credit)}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </header>

      <div className="container-page max-w-5xl py-8 sm:py-12">
        {item.nextCheck && (
          <aside className="grid gap-4 border-l-4 border-gold bg-navy p-5 text-white shadow-soft sm:grid-cols-[auto_1fr] sm:p-6">
            <CalendarClock className="text-gold" size={25}/>
            <div>
              <span className="text-[10px] font-black tracking-[.16em] text-gold">{ko ? "다음 확인" : "NEXT CHECK"}</span>
              <p className="mt-2 text-sm font-semibold leading-7 text-white/85 sm:text-base">{t(item.nextCheck)}</p>
            </div>
          </aside>
        )}

        {!!item.keyChanges?.length && (
          <section className="mt-10" aria-labelledby="changes-title">
            <div className="flex items-center gap-3 border-b-2 border-navy pb-4">
              <Sparkles className="text-red-700" size={23}/>
              <div>
                <span className="section-kicker">WHAT CHANGED</span>
                <h2 id="changes-title" className="mt-1 text-2xl font-extrabold text-navy">{ko ? "지난 보도 뒤 새롭게 확인된 내용" : "What has changed since the earlier briefing"}</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {item.keyChanges.map((entry, index) => (
                <div key={index} className="grid grid-cols-[2.25rem_1fr] gap-3 border border-red-700/15 bg-white p-4 sm:p-5">
                  <span className="grid size-9 place-items-center rounded-full bg-red-700 text-sm font-black text-white">{index + 1}</span>
                  <p className="text-sm font-semibold leading-7 text-charcoal/72">{t(entry)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {!!item.timeline?.length && (
          <section className="mt-14" aria-labelledby="timeline-title">
            <div className="border-b-2 border-navy pb-4">
              <span className="section-kicker">ISSUE TIMELINE</span>
              <h2 id="timeline-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "시간의 흐름으로 보는 사건" : "The case, in chronological order"}</h2>
              <p className="mt-2 text-sm leading-7 text-charcoal/55">{ko ? "새로운 사실이 확인될 때마다 같은 기록에 이어 붙입니다." : "Each verified development is added to the same living record."}</p>
            </div>

            <ol className="relative mt-7 before:absolute before:bottom-3 before:left-[1.35rem] before:top-3 before:w-px before:bg-green-deep/20 sm:before:left-[8.1rem]">
              {item.timeline.map((entry, index) => (
                <li key={`${entry.date}-${index}`} className="relative grid gap-3 pb-8 pl-[3.5rem] sm:grid-cols-[6.7rem_1fr] sm:gap-8 sm:pl-0">
                  <div className="sm:text-right">
                    <time className="text-xs font-extrabold text-charcoal/48">{entry.date.replace(/-/g, ".")}</time>
                  </div>
                  <span className={`absolute left-[.62rem] top-0 z-10 grid size-8 place-items-center rounded-full border-2 sm:left-[7.25rem] ${timelineTone[entry.status]}`}>
                    {entry.status === "pending" ? <Clock3 size={14}/> : entry.status === "response" ? <MessageSquareText size={14}/> : <CircleDot size={13}/>} 
                  </span>
                  <div className={`border ${entry.status === "new" ? "border-red-700/25 bg-red-50/45" : entry.status === "pending" ? "border-dashed border-charcoal/25 bg-white/55" : "border-green-deep/12 bg-white"}`}>
                    <div className={entry.sources?.length ? "grid md:grid-cols-[minmax(0,1fr)_15rem]" : undefined}>
                      <div className="p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-black tracking-[.08em] ${entry.status === "new" ? "bg-red-700 text-white" : entry.status === "pending" ? "bg-charcoal/8 text-charcoal/55" : entry.status === "response" ? "bg-gold/20 text-amber-800" : "bg-green-pale text-green-deep"}`}>{timelineLabels[entry.status]}</span>
                          {entry.change && <span className="text-xs font-bold text-red-700">{t(entry.change)}</span>}
                        </div>
                        <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy sm:text-xl">{t(entry.title)}</h3>
                        <p className="mt-2 text-sm leading-7 text-charcoal/68 sm:text-[15px]">{t(entry.description)}</p>
                      </div>

                      {!!entry.sources?.length && (() => {
                        const source = entry.sources[0];
                        return (
                          <a href={source.url} target="_blank" rel="noreferrer" className="group flex min-w-0 flex-col border-t border-green-deep/10 bg-ivory/75 transition hover:bg-green-pale/55 md:border-l md:border-t-0" aria-label={`${t(source.publisher)}: ${t(source.title)}`}>
                            <div className="relative aspect-video overflow-hidden bg-navy">
                              {source.thumbnailSrc ? (
                                <SafeImage src={source.thumbnailSrc} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]" />
                              ) : (
                                <div className="grid h-full place-items-center bg-[linear-gradient(135deg,#123f35,#0f2438)] px-5 text-center">
                                  <div>
                                    <FileText className="mx-auto text-gold" size={24}/>
                                    <span className="mt-2 block text-sm font-black text-white">{t(source.publisher)}</span>
                                  </div>
                                </div>
                              )}
                              {source.kind === "video" && <PlayCircle className="absolute bottom-2.5 right-2.5 fill-white/90 text-navy" size={30}/>}
                              {entry.sources.length > 1 && <span className="absolute left-2.5 top-2.5 rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-black text-white">+{entry.sources.length - 1}</span>}
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <div className="flex items-center justify-between gap-2 text-[10px] font-black tracking-[.08em] text-green-deep">
                                <span>{t(source.publisher)}</span>
                                <ExternalLink size={13}/>
                              </div>
                              <strong className="mt-2 line-clamp-2 text-sm leading-5 text-navy group-hover:text-green-deep">{t(source.title)}</strong>
                              <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[10px] text-charcoal/42">
                                <time>{source.publishedAt?.replace(/-/g, ".")}</time>
                                <span>{source.kind === "video" ? (ko ? "영상 보기" : "Watch") : (ko ? "원문 보기" : "Open source")}</span>
                              </div>
                            </div>
                          </a>
                        );
                      })()}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {!!item.issues?.length && (
          <section className="mt-10" aria-labelledby="issues-title">
            <div className="border-b-2 border-navy pb-4">
              <span className="section-kicker">ISSUE CHECK</span>
              <h2 id="issues-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "쟁점별 현재 확인 상태" : "Current verification status by issue"}</h2>
              <p className="mt-2 text-sm leading-7 text-charcoal/55">{ko ? "의혹 제기, 후보자의 해명, 씨앗이 확인한 내용을 구분합니다." : "Allegations, the nominee's response and SEED's assessment are separated."}</p>
            </div>

            <div className="mt-5 space-y-4">
              {item.issues.map((issue, index) => (
                <article key={index} className="overflow-hidden border border-green-deep/12 bg-white">
                  <header className="flex flex-wrap items-center justify-between gap-3 border-b border-green-deep/10 bg-ivory px-5 py-4">
                    <h3 className="text-lg font-extrabold text-navy">{t(issue.title)}</h3>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black tracking-[.08em] ${issueTone[issue.status]}`}>{issueLabels[issue.status]}</span>
                  </header>
                  <div className="grid gap-px bg-green-deep/10 md:grid-cols-3">
                    <div className="bg-white p-5"><span className="text-[10px] font-black tracking-[.14em] text-charcoal/38">{ko ? "제기된 주장" : "ALLEGATION"}</span><p className="mt-3 text-sm leading-7 text-charcoal/68">{t(issue.claim)}</p></div>
                    <div className="bg-white p-5"><span className="text-[10px] font-black tracking-[.14em] text-charcoal/38">{ko ? "후보자·여당의 설명" : "RESPONSE"}</span><p className="mt-3 text-sm leading-7 text-charcoal/68">{t(issue.response)}</p></div>
                    <div className="bg-green-pale/55 p-5"><span className="text-[10px] font-black tracking-[.14em] text-green-deep">{ko ? "씨앗의 확인" : "SEED CHECK"}</span><p className="mt-3 text-sm font-semibold leading-7 text-charcoal/72">{t(issue.assessment)}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="border-t-2 border-navy pt-5">
            <div className="flex items-center gap-3"><FileQuestion className="text-gold"/><h2 className="text-2xl font-extrabold text-navy">{ko ? "아직 남은 질문" : "Questions still open"}</h2></div>
            <ol className="mt-4 space-y-3">
              {item.questions.map((entry, index) => <li key={index} className="grid grid-cols-[1.75rem_1fr] gap-3 bg-white p-4"><span className="text-xs font-black text-gold">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-7 text-charcoal/70">{t(entry)}</p></li>)}
            </ol>
          </div>
          <div className="border-t-2 border-navy pt-5">
            <div className="flex items-center gap-3"><Lightbulb className="text-green-mid"/><h2 className="text-2xl font-extrabold text-navy">{ko ? "제도 개선 제안" : "Reform proposals"}</h2></div>
            <ol className="mt-4 space-y-3">
              {item.proposals.map((entry, index) => <li key={index} className="grid grid-cols-[1.75rem_1fr] gap-3 bg-white p-4"><span className="text-xs font-black text-green-mid">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-7 text-charcoal/70">{t(entry)}</p></li>)}
            </ol>
          </div>
        </section>

        {item.caution && (
          <aside className="mt-10 rounded-lg border border-gold/30 bg-gold/10 p-6">
            <div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 shrink-0 text-gold" size={20}/><div><h2 className="font-extrabold text-navy">{ko ? "사실 해석 주의" : "A note on interpretation"}</h2><p className="mt-2 text-sm leading-7 text-charcoal/65">{t(item.caution)}</p></div></div>
          </aside>
        )}

        {!!item.relatedContents?.length && (
          <section className="mt-12 border-t-2 border-navy pt-6">
            <span className="section-kicker">CONNECTED COVERAGE</span>
            <h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "이 사건과 연결된 씨앗 기사" : "SEED coverage connected to this case"}</h2>
            <div className="mt-4 grid gap-4">
              {item.relatedContents.map((content) => (
                <Link key={content.href} to={content.href} className="group border border-green-deep/12 bg-white p-5 transition hover:border-green-mid/35 hover:shadow-soft sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs"><span className="font-extrabold text-gold">{t(content.label)}</span><time className="text-charcoal/40">{content.date.replace(/-/g, ".")}</time></div>
                  <h3 className="mt-2 text-xl font-extrabold text-navy group-hover:text-green-deep">{t(content.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/60">{t(content.summary)}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "기사 읽기" : "Read article"}<ArrowRight size={15}/></span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 border-t-2 border-navy pt-6">
          <div className="flex items-center gap-3"><Scale className="text-gold"/><h2 className="text-2xl font-extrabold text-navy">{ko ? "작성 기준과 확인 자료" : "Method and source record"}</h2></div>
          <p className="mt-4 border-l-4 border-gold bg-white p-5 text-sm leading-7 text-charcoal/65">{t(item.sourceBasis)}</p>
          <div className="mt-5 divide-y divide-green-deep/10 border-y border-green-deep/10">
            {item.sources.map((source, index) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 py-3.5 text-charcoal/70 hover:text-green-deep">
                <span className="text-sm font-extrabold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1"><strong className="block text-sm font-extrabold text-navy group-hover:text-green-deep">{t(source.label)}</strong>{source.note && <span className="mt-1 block text-xs leading-6 text-charcoal/45">{t(source.note)}</span>}</span>
                <ExternalLink className="mt-0.5 shrink-0" size={16}/>
              </a>
            ))}
          </div>
        </section>

        <aside className="mt-9 rounded-xl bg-green-deep p-6 text-white sm:p-7">
          <div className="flex items-center gap-3"><History className="text-gold"/><h2 className="text-xl font-extrabold">{ko ? "이 기록은 사건이 끝날 때까지 이어집니다" : "This record continues until the case is resolved"}</h2></div>
          <p className="mt-4 text-sm leading-7 text-white/75">{ko ? "새로운 공식 자료, 당사자의 설명과 반론, 국회의 결정이 확인되면 같은 페이지에 날짜와 근거를 남겨 추가합니다. 사실 오류는 수정 이유와 함께 공개합니다." : "New official records, responses and parliamentary decisions will be added to this page with dates and sources. Factual errors will be corrected with an explanation."}</p>
        </aside>

        <ContentAccountability postSlug={`monitoring-${item.slug}`} publishedDate={item.updatedAt} />
        <CommentSection postSlug={`monitoring-${item.slug}`} />
        {continuation && <ArticleContinuation item={continuation} />}
      </div>
    </article>
  );
}
