import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { CommentRecord, commentsReady, createComment, loadComments } from "../lib/comments";

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<CommentRecord[]>([]);
  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const refresh = () => loadComments(postSlug).then(setComments).catch(() => setNotice("댓글을 불러오지 못했습니다."));
  useEffect(() => {
    void refresh();
  }, [postSlug]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!commentsReady) return setNotice("댓글 기능을 준비하고 있습니다.");
    if (nickname.trim().length < 2 || body.trim().length < 2) return setNotice("닉네임과 댓글을 두 글자 이상 입력해주세요.");
    if (body.length > 1000) return setNotice("댓글은 1,000자까지 작성할 수 있습니다.");
    setSubmitting(true);
    setNotice("");
    try {
      await createComment(postSlug, nickname.trim(), body.trim());
      setBody("");
      setNotice("댓글이 등록되었습니다.");
      await refresh();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "댓글 등록에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-14 border-t border-green-deep/10 pt-10" aria-labelledby="comments-title">
      <div className="flex items-center gap-2">
        <MessageCircle className="text-green-mid" size={24} />
        <h2 id="comments-title" className="text-2xl font-extrabold text-navy">시민의견 <span className="text-green-mid">{comments.length}</span></h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-charcoal/55">서로를 존중하며 사실과 근거를 중심으로 의견을 나눠주세요. 개인정보와 비방성 내용은 숨김 처리될 수 있습니다.</p>

      <form onSubmit={submit} className="mt-6 rounded-lg border border-green-deep/10 bg-white p-5 shadow-soft">
        <div className="sr-only" aria-hidden="true"><label>웹사이트<input tabIndex={-1} autoComplete="off" /></label></div>
        <label className="field max-w-xs"><span>닉네임</span><input value={nickname} onChange={(event) => setNickname(event.target.value)} maxLength={30} placeholder="씨앗시민" required /></label>
        <label className="field mt-4"><span>댓글</span><textarea value={body} onChange={(event) => setBody(event.target.value)} maxLength={1000} rows={4} placeholder="의견과 질문을 남겨주세요." required /></label>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-charcoal/45">{body.length}/1,000</span>
          <button className="button-primary" type="submit" disabled={submitting || !commentsReady}><Send size={15} />{submitting ? "등록 중" : "댓글 등록"}</button>
        </div>
        {notice && <p className="mt-3 text-sm font-semibold text-green-deep" role="status">{notice}</p>}
        {!commentsReady && <p className="mt-3 rounded-md bg-gold/10 px-4 py-3 text-xs leading-6 text-charcoal/65">댓글 저장소 연결을 마치는 중입니다. 연결 후 별도 회원가입 없이 이용할 수 있습니다.</p>}
      </form>

      <div className="mt-7 divide-y divide-green-deep/10">
        {comments.map((comment) => <article key={comment.id} className="py-5"><div className="flex items-center justify-between gap-4"><strong className="text-sm text-navy">{comment.nickname}</strong><time className="text-xs text-charcoal/40">{new Date(comment.created_at).toLocaleDateString("ko-KR")}</time></div><p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-charcoal/75">{comment.body}</p></article>)}
        {commentsReady && comments.length === 0 && <p className="py-8 text-center text-sm text-charcoal/45">첫 번째 시민의견을 남겨주세요.</p>}
      </div>
    </section>
  );
}
