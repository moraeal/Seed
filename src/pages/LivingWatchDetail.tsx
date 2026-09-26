import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  ChevronDown,
  CircleDot,
  Clock3,
  ExternalLink,
  FileText,
  History,
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
import type { getArticleReadingPath } from "../data/articleReadingPaths";
import type { LocalizedText, PublicInterestWatchCase, WatchTimelineStatus } from "../data/publicInterestWatch";
import type { Language } from "../i18n";

type Props = {
  item: PublicInterestWatchCase;
  language: Language;
  readingPath: ReturnType<typeof getArticleReadingPath>;
};

const timelineTone: Record<WatchTimelineStatus, string> = {
  confirmed: "border-green-deep bg-green-deep text-white",
  response: "border-gold bg-gold text-navy",
  new: "border-red-700 bg-red-700 text-white",
  pending: "border-charcoal/25 bg-white text-charcoal/55",
};

export default function LivingWatchDetail({ item, language, readingPath }: Props) {
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];
  const layered = item.displayMode === "layered";
  const articleWidthHeader = item.slug === "supreme-court-renomination-tracker-2026";
  const timelineLabels: Record<WatchTimelineStatus, string> = {
    confirmed: ko ? "확인" : "VERIFIED",
    response: ko ? "해명" : "RESPONSE",
    new: ko ? "새로 추가" : "NEW",
    pending: ko ? "다음 확인" : "NEXT",
  };

  return (
    <article className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className={`container-page py-5 sm:py-7 ${articleWidthHeader ? "max-w-[50rem]" : "max-w-6xl"}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "시민감시" : "Civic Watch"}</Link>
            <ShareButton title={t(item.title)} text={t(item.summary)} />
          </div>

          <div className={`mt-4 grid gap-7 border-t-2 border-navy pt-5 ${articleWidthHeader ? "" : "lg:grid-cols-[1.08fr_.92fr] lg:items-center"}`}>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="section-kicker">CIVIC WATCH · NEWS TRACKER</span>
                <span className="rounded-full bg-red-700 px-3 py-1 text-[11px] font-extrabold text-white">{t(item.status)}</span>
              </div>
              <p className="mt-4 text-sm font-extrabold text-green-deep">{t(item.organization)}</p>
              <h1 className="editorial-title mt-2 text-balance text-[2rem] font-bold leading-[1.18] text-navy sm:text-[2.75rem]">{t(item.title)}</h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-charcoal/68 sm:text-base sm:leading-8">{t(item.summary)}</p>

              <dl className="mt-6 grid gap-px overflow-hidden border border-green-deep/12 bg-green-deep/12 sm:grid-cols-3">
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-black tracking-[.14em] text-charcoal/40">{item.publishedAt ? (ko ? "최초 게시" : "FIRST PUBLISHED") : (ko ? "사건 시작" : "OPENED")}</dt>
                  <dd className="mt-2 text-sm font-extrabold text-navy">{(item.publishedAt ?? item.openedAt)?.replace(/-/g, ".")}</dd>
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
                <SafeImage src={item.heroImage.src} alt={t(item.heroImage.alt)} className={`${articleWidthHeader ? "aspect-video" : "aspect-[4/3]"} w-full object-cover`} loading="eager" />
                <figcaption className="border-t border-green-deep/10 px-4 py-3 text-xs leading-5 text-charcoal/55">
                  {t(item.heroImage.caption)} <span className="text-charcoal/35">· {t(item.heroImage.credit)}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </header>

      <div className={`container-page py-8 sm:py-12 ${articleWidthHeader ? "max-w-[50rem]" : "max-w-5xl"}`}>
        {layered && item.snapshot && (
          <section aria-labelledby="snapshot-title" className="border border-green-deep/15 bg-white shadow-soft">
            <div className="border-b border-green-deep/12 bg-navy px-5 py-5 text-white sm:px-7">
              <span className="text-[10px] font-black tracking-[.16em] text-gold">CURRENT STATUS</span>
              <h2 id="snapshot-title" className="mt-1.5 text-2xl font-extrabold">{ko ? "30초로 보는 현재 상황" : "The situation in 30 seconds"}</h2>
              <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-white/82 sm:text-base">{t(item.snapshot.conclusion)}</p>
            </div>
            <div className="grid gap-px bg-green-deep/12 lg:grid-cols-[1.15fr_.85fr]">
              <div className="bg-white p-5 sm:p-7">
                <h3 className="text-sm font-black text-green-deep">{ko ? "확인된 핵심" : "KEY FACTS"}</h3>
                <ol className="mt-4 space-y-3">
                  {item.snapshot.keyFacts.map((fact, index) => (
                    <li key={index} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="grid size-7 place-items-center rounded-full bg-green-pale text-xs font-black text-green-deep">{index + 1}</span>
                      <p className="text-sm font-semibold leading-6 text-charcoal/72">{t(fact)}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-ivory p-5 sm:p-7">
                <h3 className="text-sm font-black text-red-700">{ko ? "계속 확인할 사안" : "STILL BEING TRACKED"}</h3>
                <ul className="mt-4 space-y-3">
                  {item.snapshot.tracking.map((entry, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-6 text-charcoal/68"><Clock3 className="mt-1 shrink-0 text-red-700" size={14}/><span>{t(entry)}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {item.nextCheck && !layered && (
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
              {(layered ? item.keyChanges.slice(0, 3) : item.keyChanges).map((entry, index) => (
                <div key={index} className="grid grid-cols-[2.25rem_1fr] gap-3 border border-red-700/15 bg-white p-4 sm:p-5">
                  <span className="grid size-9 place-items-center rounded-full bg-red-700 text-sm font-black text-white">{index + 1}</span>
                  <div>
                    <time className="text-[10px] font-black tracking-[.1em] text-red-700">{ko ? "확인 " : "VERIFIED "}{entry.date.replace(/-/g, ".")}</time>
                    <p className="mt-1 text-sm font-semibold leading-7 text-charcoal/72">{t(entry.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {layered && !!item.issues?.length && (
          <section className="mt-12" aria-labelledby="issues-dashboard-title">
            <div className="border-b-2 border-navy pb-4">
              <span className="section-kicker">ISSUE DASHBOARD</span>
              <h2 id="issues-dashboard-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "쟁점별로 보는 현재 판단" : "Current assessment by issue"}</h2>
              <p className="mt-2 text-sm leading-7 text-charcoal/55">{ko ? "확인된 판단을 먼저 읽고, 주장과 해명은 필요할 때 펼쳐볼 수 있습니다." : "Read the current assessment first, then expand the competing claims when needed."}</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {item.issues.map((issue, index) => (
                <article key={index} className="border border-green-deep/12 bg-white p-5 shadow-[4px_4px_0_0_rgba(24,83,66,0.06)] sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold leading-7 text-navy">{t(issue.title)}</h3>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black ${issue.status === "confirmed" ? "bg-green-pale text-green-deep" : issue.status === "contested" ? "bg-gold/20 text-amber-800" : "bg-charcoal/8 text-charcoal/55"}`}>
                      {issue.status === "confirmed" ? (ko ? "확인" : "VERIFIED") : issue.status === "contested" ? (ko ? "논쟁 중" : "CONTESTED") : (ko ? "확인 중" : "PENDING")}
                    </span>
                  </div>
                  <div className="mt-4 border-l-4 border-green-deep bg-green-pale/45 p-4">
                    <span className="text-[10px] font-black tracking-[.12em] text-green-deep">{ko ? "현재 판단" : "CURRENT ASSESSMENT"}</span>
                    <p className="mt-1.5 text-sm leading-7 text-charcoal/72">{t(issue.assessment)}</p>
                  </div>
                  <details className="group mt-4 border-t border-green-deep/10 pt-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold text-green-deep">
                      <span>{ko ? "주장과 해명 자세히 보기" : "Open claims and response"}</span>
                      <ChevronDown size={17} className="transition group-open:rotate-180"/>
                    </summary>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-charcoal/68">
                      <div><strong className="block text-xs text-red-700">{ko ? "제기된 주장" : "CLAIM"}</strong><p className="mt-1">{t(issue.claim)}</p></div>
                      <div><strong className="block text-xs text-amber-800">{ko ? "당사자 해명" : "RESPONSE"}</strong><p className="mt-1">{t(issue.response)}</p></div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </section>
        )}

        {!!item.timeline?.length && (
          <section id="issue-timeline" className="mt-14 scroll-mt-24" aria-labelledby="timeline-title">
            <details className="group" open={!layered}>
              <summary className="flex cursor-pointer list-none items-end justify-between gap-4 border-b-2 border-navy pb-4">
                <div>
                  <span className="section-kicker">ISSUE TIMELINE</span>
                  <h2 id="timeline-title" className="mt-1.5 text-3xl font-extrabold text-navy">{ko ? "전체 진행 기록" : "Full case timeline"}</h2>
                  <p className="mt-2 text-sm leading-7 text-charcoal/55">{layered ? (ko ? "날짜별 설명과 기사 원문은 여기서 펼쳐볼 수 있습니다." : "Expand the dated record for explanations and original sources.") : (ko ? "새로운 사실이 확인될 때마다 같은 기록에 이어 붙입니다." : "Each verified development is added to the same living record.")}</p>
                </div>
                <span className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-green-deep">{layered ? (ko ? "펼쳐보기" : "Open") : (ko ? "접기" : "Close")}<ChevronDown size={19} className="transition group-open:rotate-180"/></span>
              </summary>

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
                        {layered ? (
                          <details className="group mt-3 border-t border-green-deep/10 pt-3" open={index < 3}>
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold text-green-deep">
                              <span>{ko ? "통합 설명과 근거 보기" : "Open explanation and evidence"}</span>
                              <ChevronDown size={17} className="transition group-open:rotate-180"/>
                            </summary>
                            <p className="mt-3 text-sm leading-7 text-charcoal/68 sm:text-[15px]">{t(entry.description)}</p>
                          </details>
                        ) : <p className="mt-2 text-sm leading-7 text-charcoal/68 sm:text-[15px]">{t(entry.description)}</p>}
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
            </details>
          </section>
        )}

        {layered && item.nextCheck && (
          <details className="group mt-10 border border-gold/35 bg-navy text-white shadow-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
              <span className="flex items-center gap-3"><CalendarClock className="text-gold" size={23}/><span><span className="block text-[10px] font-black tracking-[.16em] text-gold">NEXT CHECK</span><strong className="mt-1 block text-lg">{ko ? "앞으로 확인할 세부 항목" : "Detailed follow-up checklist"}</strong></span></span>
              <ChevronDown size={20} className="shrink-0 transition group-open:rotate-180"/>
            </summary>
            <div className="border-t border-white/15 px-5 py-5 sm:px-6"><p className="text-sm font-semibold leading-7 text-white/82">{t(item.nextCheck)}</p></div>
          </details>
        )}

        {!!item.authorityMap?.length && (
          <section className="mt-12" aria-labelledby="authority-map-title">
            <div className="border-b-2 border-navy pb-4">
              <span className="section-kicker">WHERE THE POWER GOES</span>
              <h2 id="authority-map-title" className="mt-1.5 text-2xl font-extrabold text-navy sm:text-3xl">{ko ? "검찰의 권한은 어디로 가는가" : "Where the prosecution service's powers go"}</h2>
              {item.authorityMapIntro && <p className="mt-2 max-w-3xl text-sm leading-7 text-charcoal/58">{t(item.authorityMapIntro)}</p>}
            </div>
            <div className="mt-4 overflow-x-auto border border-green-deep/12 bg-white">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="w-[24%] px-5 py-3 text-xs font-black tracking-[.06em]">{ko ? "기관" : "INSTITUTION"}</th>
                    <th className="w-[38%] px-5 py-3 text-xs font-black tracking-[.06em]">{ko ? "맡게 되는 권한" : "ROLE"}</th>
                    <th className="px-5 py-3 text-xs font-black tracking-[.06em]">{ko ? "시민이 확인할 지점" : "PUBLIC TEST"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-deep/10">
                  {item.authorityMap.map((entry) => (
                    <tr key={t(entry.institution)} className="align-top">
                      <th className="bg-ivory/65 px-5 py-4 text-sm font-extrabold leading-6 text-navy">{t(entry.institution)}</th>
                      <td className="px-5 py-4 text-sm leading-7 text-charcoal/70">{t(entry.role)}</td>
                      <td className="px-5 py-4 text-sm leading-7 text-charcoal/70">{t(entry.citizenCheck)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className={`${layered ? "mt-10" : "mt-12"} grid gap-8 lg:grid-cols-2`} aria-label={ko ? "사실과 남은 논란" : "Facts and unresolved controversies"}>
          <div>
            <div className="border-b-2 border-green-deep pb-4">
              <span className="section-kicker">FACTS SO FAR</span>
              <h2 className="mt-1.5 text-2xl font-extrabold text-navy">{item.sectionHeadings?.facts ? t(item.sectionHeadings.facts) : (ko ? "지금까지 확인된 사실" : "What has been established")}</h2>
            </div>
            <ul className="mt-4 divide-y divide-green-deep/10 border-y border-green-deep/10 bg-white px-5">
              {item.confirmedFacts.map((fact, index) => (
                <li key={index} className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
                  <CircleDot className="mt-1 text-green-deep" size={15}/>
                  <p className="text-sm leading-7 text-charcoal/70">{t(fact)}</p>
                </li>
              ))}
            </ul>
          </div>

          {!!item.currentControversies?.length && (
            <div>
              <div className="border-b-2 border-gold pb-4">
                <span className="section-kicker">STILL IN DISPUTE</span>
                <h2 className="mt-1.5 text-2xl font-extrabold text-navy">{item.sectionHeadings?.controversies ? t(item.sectionHeadings.controversies) : (ko ? "아직 논란 중인 부분" : "What remains disputed")}</h2>
              </div>
              <div className="mt-4 space-y-3">
                {item.currentControversies.map((issue, index) => (
                  <article key={index} className="border-l-4 border-gold bg-white p-5">
                    <h3 className="text-base font-extrabold leading-6 text-navy">{t(issue.title)}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/68">{t(issue.description)}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {!!item.followUpChecks?.length && (
          <section className="mt-12" aria-labelledby="follow-up-title">
            <div className="border-b-2 border-red-700 pb-4">
              <span className="section-kicker">WHAT CITIZENS SHOULD TRACK</span>
              <h2 id="follow-up-title" className="mt-1.5 text-2xl font-extrabold text-navy">{item.sectionHeadings?.followUp ? t(item.sectionHeadings.followUp) : (ko ? "앞으로 확인할 결정과 결과" : "Decisions and outcomes to watch")}</h2>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {item.followUpChecks.map((entry, index) => (
                <li key={index} className="grid grid-cols-[2rem_1fr] gap-3 border border-red-700/15 bg-white p-5">
                  <span className="text-sm font-black text-red-700">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-7 text-charcoal/70">{t(entry)}</p>
                </li>
              ))}
            </ul>
          </section>
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
        <ArticleContinuation {...readingPath} />
      </div>
    </article>
  );
}
