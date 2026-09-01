import { CornerUpRight, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  buildContinuedCommentBody,
  CommentContinuation,
  CommentRecord,
  commentsReady,
  createComment,
  loadComments,
  parseCommentBody,
} from "../lib/comments";

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<CommentRecord[]>([]);
  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [continuation, setContinuation] = useState<CommentContinuation | undefined>();
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const refresh = () => loadComments(postSlug).then(setComments).catch(() => setNotice("댓글을 불러오지 못했습니다."));

  useEffect(() => {
    void refresh();
  }, [postSlug]);

  useEffect(() => {
    const commentId = searchParams.get("continueFrom");
    const continueNick = searchParams.get("continueNick");
    const continueText = searchParams.get("continueText");
    if (!commentId || !continueNick) return;

    setContinuation({
      commentId,
      nickname: continueNick,
      excerpt: continueText || "이전 의견",
    });
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  }, [searchParams]);

  const beginContinuation = (comment: CommentRecord) => {
    const parsed = parseCommentBody(comment.body);
    setContinuation({
      commentId: comment.id,
      nickname: comment.nickname,
      excerpt: parsed.text.replace(/\s+/g, " ").trim().slice(0, 140),
    });
    setBody("");
    setNotice("");
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!commentsReady) return setNotice("댓글 기능을 준비하고 있습니다.");
    if (nickname.trim().length < 2 || body.trim().length < 2) return setNotice("닉네임과 댓글을 두 글자 이상 입력해주세요.");

    const payload = continuation
      ? buildContinuedCommentBody(continuation, body.trim())
      : body.trim();

    if (payload.length > 1000) return setNotice("이어쓰기 정보까지 포함해 댓글은 1,000자까지 등록할 수 있습니다. 본문을 조금 줄여주세요.");

    setSubmitting(true);
    setNotice("");
    try {
      await createComment(postSlug, nickname.trim(), payload);
      setBody("");
      setContinuation(undefined);
      setNotice("댓글이 등록되었습니다.");
      await refresh();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "댓글 등록에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="comments" className="mt-14 scroll-mt-28 border-t border-green-deep/10 pt-10" aria-labelledby="comments-title">
      <div className="flex items-center gap-2">
        <MessageCircle className="text-green-mid" size={24} />
        <h2 id="comments-title" className="text-2xl font-extrabold text-navy">시민의견 <span className="text-green-mid">{comments.length}</span></h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-charcoal/55">서로를 존중하며 사실과 근거를 중심으로 의견을 나눠주세요. 대화가 길어지면 ‘새 댓글로 이어가기’를 눌러 새 토론으로 이어갈 수 있습니다.</p>

      <form id="comments-form" ref={formRef} onSubmit={submit} className="mt-6 scroll-mt-28 rounded-lg border border-green-deep/10 bg-white p-5 shadow-soft">
        {continuation && (
          <div className="mb-5 rounded-lg border border-green-mid/20 bg-green-pale/60 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold text-green-deep">새 댓글로 이어쓰기</p>
                <p className="mt-2 text-sm font-semibold text-navy">{continuation.nickname}님의 의견에서 이어집니다.</p>
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-charcoal/55">“{continuation.excerpt}”</p>
              </div>
              <button type="button" onClick={() => setContinuation(undefined)} className="grid size-8 shrink-0 place-items-center rounded-full border border-green-deep/10 text-charcoal/45 hover:text-green-deep" aria-label="이어쓰기 취소"><X size={15}/></button>
            </div>
          </div>
        )}

        <div className="sr-only" aria-hidden="true"><label>웹사이트<input tabIndex={-1} autoComplete="off" /></label></div>
        <label className="field max-w-xs"><span>닉네임</span><input value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength={30} placeholder="씨앗시민" required /></label>
        <label className="field mt-4"><span>{continuation ? "이어지는 의견" : "댓글"}</span><textarea value={body} onChange={(event) => setBody(event.target.value)} maxLength={1000} rows={4} placeholder={continuation ? "이전 의견에 이어 새로운 주장이나 질문을 적어주세요." : "의견과 질문을 남겨주세요."} required /></label>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-charcoal/45">{body.length}/1,000</span>
          <button className="button-primary" type="submit" disabled={submitting || !commentsReady}><Send size={15} />{submitting ? "등록 중" : continuation ? "새 댓글로 등록" : "댓글 등록"}</button>
        </div>
        {notice && <p className="mt-3 text-sm font-semibold text-green-deep" role="status">{notice}</p>}
        {!commentsReady && <p className="mt-3 rounded-md bg-gold/10 px-4 py-3 text-xs leading-6 text-charcoal/65">댓글 저장소 연결을 마치는 중입니다. 연결 후 별도 회원가입 없이 이용할 수 있습니다.</p>}
      </form>

      <div className="mt-7 divide-y divide-green-deep/10">
        {comments.map((comment) => {
          const parsed = parseCommentBody(comment.body);
          return (
            <article id={`comment-${comment.id}`} key={comment.id} className="scroll-mt-28 py-5">
              <div className="flex items-center justify-between gap-4"><strong className="text-sm text-navy">{comment.nickname}</strong><time className="text-xs text-charcoal/40">{new Date(comment.created_at).toLocaleDateString("ko-KR")}</time></div>
              {parsed.continuation && (
                <a href={`#comment-${parsed.continuation.commentId}`} className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-pale px-3 py-1.5 text-[11px] font-extrabold text-green-deep hover:bg-green-pale/70">
                  <CornerUpRight size={13}/>{parsed.continuation.nickname}님의 의견에서 이어짐 · 이전 의견 보기
                </a>
              )}
              <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-charcoal/75">{parsed.text}</p>
              <button type="button" onClick={() => beginContinuation(comment)} className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-green-deep hover:text-green-mid"><CornerUpRight size={14}/>새 댓글로 이어가기</button>
            </article>
          );
        })}
        {commentsReady && comments.length === 0 && <p className="py-8 text-center text-sm text-charcoal/45">첫 번째 시민의견을 남겨주세요.</p>}
      </div>
    </section>
  );
}
