import { ChevronLeft, ChevronRight, CornerUpRight, MessageCircle, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { discussionSourceTypes, resolveDiscussionSource } from "../data/discussionSources";
import { CommentRecord, commentsReady, loadAllComments, parseCommentBody } from "../lib/comments";
import { useLanguage } from "../i18n";

const PAGE_SIZE = 30;

export default function Forum() {
  const { language } = useLanguage();
  const [comments, setComments] = useState<CommentRecord[]>([]);
  const [filter, setFilter] = useState("전체");
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    setNotice("");
    try {
      setComments(await loadAllComments(300));
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "공론장 댓글을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const filteredComments = useMemo(() => comments.filter((comment) => {
    if (filter === "전체") return true;
    return resolveDiscussionSource(comment.post_slug).type === filter;
  }), [comments, filter]);

  const totalPages = Math.max(1, Math.ceil(filteredComments.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleComments = filteredComments.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const ko = language === "ko";

  const continuationUrl = (comment: CommentRecord, sourcePath: string) => {
    const parsed = parseCommentBody(comment.body);
    const params = new URLSearchParams({
      continueFrom: comment.id,
      continueNick: comment.nickname,
      continueText: parsed.text.replace(/\s+/g, " ").trim().slice(0, 140),
    });
    return `${sourcePath}?${params.toString()}#comments-form`;
  };

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <span className="section-kicker">SEED PUBLIC FORUM</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">{ko ? "공론장" : "Public Forum"}</h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-charcoal/65">
              {ko
                ? "뉴스·브리핑·칼럼·감시·제안·실험·아카데미에 남겨진 시민의견을 한곳에서 봅니다. 한 페이지에 최대 30개를 보여주고, 길어진 토론은 ‘새 댓글로 이어가기’로 새로운 의견으로 발전시킬 수 있습니다."
                : "Comments from SEED content are gathered here with their original source. Up to 30 comments appear per page, and longer exchanges can continue as a new comment linked to the previous discussion."}
            </p>
            <button onClick={() => void refresh()} className="button-secondary mt-6" type="button" disabled={loading}>
              <RefreshCw size={15} className={loading ? "animate-spin" : ""} />{ko ? "새 댓글 확인" : "Refresh"}
            </button>
          </div>
        </div>
      </header>

      <div className="container-page py-10 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-green-deep/15 pb-6">
          <div className="flex flex-wrap gap-2">
            {discussionSourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                type="button"
                className={`rounded-full border px-4 py-2 text-xs font-extrabold transition ${filter === type ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-charcoal/60 hover:border-green-deep/35"}`}
              >
                {type}
              </button>
            ))}
          </div>
          <p className="text-xs font-semibold text-charcoal/45">
            {ko ? `총 ${filteredComments.length}개 · 페이지당 최대 ${PAGE_SIZE}개` : `${filteredComments.length} comments · ${PAGE_SIZE} per page`}
          </p>
        </div>

        {notice && <p className="mt-6 rounded-lg bg-gold/10 p-4 text-sm font-semibold text-charcoal/70">{notice}</p>}
        {!commentsReady && <p className="mt-6 rounded-lg bg-gold/10 p-4 text-sm text-charcoal/65">댓글 저장소 연결을 확인하고 있습니다.</p>}

        <div className="mt-4 divide-y divide-green-deep/12 border-y border-green-deep/12">
          {visibleComments.map((comment) => {
            const source = resolveDiscussionSource(comment.post_slug);
            const parsed = parseCommentBody(comment.body);
            return (
              <article key={comment.id} className="grid gap-5 py-7 md:grid-cols-[220px_1fr]">
                <div>
                  <span className="section-kicker">{source.type}</span>
                  {source.path !== "/forum" ? (
                    <Link to={source.path} className="mt-2 block text-sm font-extrabold leading-6 text-navy hover:text-green-mid">{source.title}</Link>
                  ) : (
                    <p className="mt-2 text-sm font-extrabold leading-6 text-navy">{source.title}</p>
                  )}
                  <p className="mt-3 text-[11px] text-charcoal/40">{ko ? "작성 위치" : "Source"} · {source.type}</p>
                </div>
                <div className="border-l-0 border-green-deep/10 md:border-l md:pl-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <strong className="text-sm text-navy">{comment.nickname}</strong>
                    <time className="text-xs text-charcoal/40">{new Date(comment.created_at).toLocaleString(ko ? "ko-KR" : "en-US")}</time>
                  </div>

                  {parsed.continuation && source.path !== "/forum" && (
                    <Link to={`${source.path}#comment-${parsed.continuation.commentId}`} className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-pale px-3 py-1.5 text-[11px] font-extrabold text-green-deep hover:bg-green-pale/70">
                      <CornerUpRight size={13}/>{parsed.continuation.nickname}{ko ? "님의 의견에서 이어짐 · 이전 의견 보기" : " · continued discussion"}
                    </Link>
                  )}

                  <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-charcoal/75">{parsed.text}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    {source.path !== "/forum" && (
                      <>
                        <Link to={`${source.path}#comments`} className="inline-flex items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "원문과 전체 댓글 보기" : "Open source discussion"}<MessageCircle size={14}/></Link>
                        <Link to={continuationUrl(comment, source.path)} className="inline-flex items-center gap-2 text-xs font-extrabold text-green-mid hover:text-green-deep"><CornerUpRight size={14}/>{ko ? "새 댓글로 이어가기" : "Continue as new comment"}</Link>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          {!loading && visibleComments.length === 0 && <p className="py-16 text-center text-sm text-charcoal/45">{ko ? "아직 등록된 시민의견이 없습니다." : "No comments yet."}</p>}
          {loading && <p className="py-16 text-center text-sm text-charcoal/45">{ko ? "공론장을 불러오는 중입니다." : "Loading forum…"}</p>}
        </div>

        {!loading && filteredComments.length > PAGE_SIZE && (
          <nav className="mt-8 flex items-center justify-center gap-3" aria-label={ko ? "공론장 페이지 이동" : "Forum pagination"}>
            <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1} className="button-secondary min-h-10 px-3 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={16}/>{ko ? "이전" : "Prev"}</button>
            <span className="min-w-24 text-center text-sm font-extrabold text-navy">{currentPage} / {totalPages}</span>
            <button type="button" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={currentPage === totalPages} className="button-secondary min-h-10 px-3 disabled:cursor-not-allowed disabled:opacity-40">{ko ? "다음" : "Next"}<ChevronRight size={16}/></button>
          </nav>
        )}
      </div>
    </section>
  );
}
