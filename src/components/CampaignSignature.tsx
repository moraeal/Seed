import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { createComment, loadComments, loadOwnCampaignSignatures, manageCampaignSignature, type CommentRecord } from "../lib/comments";

const signatureSlug = "campaign-no-more-tax-signatures";
const returnTo = "/civic-campaign#campaign-signature";

export default function CampaignSignature() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const { user, session, nickname, isVerified, loading } = useAuth();
  const [body, setBody] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [signatures, setSignatures] = useState<CommentRecord[]>([]);
  const [mine, setMine] = useState<CommentRecord[]>([]);
  const [mineLoading, setMineLoading] = useState(true);
  const [mineError, setMineError] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editBody, setEditBody] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const atLimit = mine.length >= 2;
  const limitMessage = ko ? "서명글은 한 계정당 최대 2개까지 등록할 수 있습니다. 기존 글을 수정하거나 삭제해주세요." : "You can register up to two signatures per account. Edit or delete an existing signature.";
  useEffect(() => {
    let active = true;
    setMine([]); setEditing(null); setDeleting(null); setMineError(false);
    if (!user || !session) { setMineLoading(false); return; }
    setMineLoading(true);
    void loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id)
      .then(rows => { if (active) setMine(rows); })
      .catch(() => { if (active) setMineError(true); })
      .finally(() => { if (active) setMineLoading(false); });
    return () => { active = false; };
  }, [user?.id, session?.access_token]);

  async function manage(id: string, remove = false) {
    if (!user || !session || busyId || submitting || !mine.some(row => row.id === id)) return;
    const text = editBody.replace(/\s+/g, " ").trim();
    if (!remove && (text.length < 2 || text.length > 120)) {
      setNotice(ko ? "서명글은 2~120자로 입력해주세요." : "Please enter 2–120 characters."); return;
    }
    setBusyId(id); setNotice("");
    try {
      await manageCampaignSignature(id, session.access_token, user.id, remove ? undefined : text);
      const change = (rows: CommentRecord[]) => remove ? rows.filter(row => row.id !== id) : rows.map(row => row.id === id ? { ...row, body: text } : row);
      setMine(change); setSignatures(change); setEditing(null); setDeleting(null);
      setNotice(remove ? (ko ? "서명글이 삭제되었습니다." : "Your signature was deleted.") : (ko ? "서명글이 수정되었습니다." : "Your signature was updated."));
      void loadComments(signatureSlug).then(setSignatures);
    } catch {
      setNotice(ko ? "처리하지 못했습니다. 로그인 상태를 확인한 뒤 다시 시도해주세요." : "The change failed. Check your login and try again.");
    } finally { setBusyId(null); }
  }

  useEffect(() => { void loadComments(signatureSlug).then(setSignatures); }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (submitting || busyId || mineLoading || mineError) return;
    if (atLimit) { setNotice(limitMessage); return; }
    if (!user || !session || !isVerified || !consent) return;
    const text = body.replace(/\s+/g, " ").trim();
    if (text.length < 2 || text.length > 120) {
      setNotice(ko ? "서명글은 2~120자로 입력해주세요." : "Please enter 2–120 characters.");
      return;
    }
    setSubmitting(true);
    setNotice("");
    try {
      await createComment(signatureSlug, nickname, text, session.access_token, user.id);
      setBody("");
      setConsent(false);
      setNotice(ko ? "서명글이 등록되었습니다. 함께해주셔서 감사합니다." : "Your signature was registered. Thank you for joining.");
      setMine(await loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id));
      setSignatures(await loadComments(signatureSlug));
    } catch (error) {
      if (error instanceof Error && error.message === "CAMPAIGN_SIGNATURE_LIMIT") {
        setNotice(limitMessage);
        void loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id).then(setMine).catch(() => setMineError(true));
      } else setNotice(ko ? "서명글을 등록하지 못했습니다. 로그인 상태를 확인한 뒤 다시 시도해주세요." : "Your signature could not be registered. Check your login and try again.");
    } finally { setSubmitting(false); }
  }

  return <section id="campaign-signature" className="reading-column mb-8 scroll-mt-52 border-2 border-green-deep bg-white p-5 sm:p-7" aria-labelledby="campaign-signature-title">
    <h2 id="campaign-signature-title" className="text-2xl font-black text-green-deep">{ko ? "증세 반대 서명에 함께해주세요" : "Join the campaign against tax increases"}</h2>
    <p className="mt-3 text-base leading-7 text-charcoal/75">{ko ? "세금을 더 걷기 전에, 어디에 얼마나 쓰는지부터 밝혀주십시오. 여러분의 뜻을 한 줄로 남겨주세요." : "Before collecting more taxes, explain where public money goes. Add your voice in one line."}</p>
    {loading ? <p className="mt-5" role="status">{ko ? "로그인 상태 확인 중" : "Checking login"}</p> : user && session && isVerified ? <form onSubmit={submit} className="mt-5">
      <p className="mb-3 text-sm text-charcoal/75">{ko ? "한 계정당 최대 2개까지 등록할 수 있으며, 내 서명글에서 수정·삭제할 수 있습니다." : "Up to two signatures per account. Manage them under My signatures."}</p>
      {atLimit && <p className="mb-3 text-sm font-bold text-green-deep">{limitMessage}</p>}
      {mineError && <p role="alert" className="mb-3 text-sm">{ko ? "내 서명글을 불러오지 못했습니다. 페이지를 새로고침해주세요." : "Unable to load your signatures. Refresh this page."}</p>}
      <p className="text-sm font-bold text-navy">{ko ? "서명 닉네임" : "Signing as"}: {nickname}</p>
      <label className="field mt-4"><span>{ko ? "한 줄 서명글" : "Your one-line signature"}</span><input value={body} onChange={event => setBody(event.target.value)} minLength={2} maxLength={120} required placeholder={ko ? "집값이 올랐다고 제 현금까지 늘어난 것은 아닙니다." : "Tell us why you are joining."} /></label>
      <label className="mt-4 flex items-start gap-3 text-sm leading-6"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required className="mt-1 size-4 shrink-0" /><span>{ko ? "증세 반대 캠페인에 참여하며, 내 닉네임과 서명글 공개에 동의합니다." : "I join this campaign and agree to publish my nickname and signature."}</span></label>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><span className="text-sm text-charcoal/55">{body.length}/120</span><button type="submit" className="button-primary" disabled={submitting || !consent || atLimit || mineLoading || mineError || Boolean(busyId)}>{submitting ? (ko ? "등록 중" : "Registering") : (ko ? "서명 등록하기" : "Register signature")}</button></div>
    </form> : <div className="mt-5">
      <p className="text-sm leading-6 text-charcoal/70">{ko ? "서명글은 이메일 인증회원이 등록할 수 있습니다. 닉네임과 서명글이 공개됩니다." : "Email-verified members can sign. Your nickname and signature will be public."}</p>
      <div className="mt-4 flex flex-wrap gap-3"><Link className="button-primary" to={`/account?mode=login&returnTo=${encodeURIComponent(returnTo)}`}>{ko ? "로그인하고 서명하기" : "Log in to sign"}</Link><Link className="button-secondary" to={`/account?mode=signup&returnTo=${encodeURIComponent(returnTo)}`}>{ko ? "가입하고 서명하기" : "Sign up to sign"}</Link></div>
    </div>}
    {user && session && mine.length > 0 && <div className="mt-6 border-t border-green-deep/15 pt-4">
      <h3 className="text-base font-bold text-navy">{ko ? "내 서명글" : "My signatures"} ({mine.length}/2)</h3>
      <ul className="mt-3 space-y-4">{mine.map(signature => <li key={signature.id} className="border border-green-deep/15 p-4 text-sm leading-6">
        <strong className="text-green-deep">{signature.nickname}</strong>
        {editing === signature.id ? <form onSubmit={event => { event.preventDefault(); void manage(signature.id); }}>
          <label className="field mt-2"><span>{ko ? "서명글 수정" : "Edit signature"}</span><input autoFocus value={editBody} onChange={event => setEditBody(event.target.value)} minLength={2} maxLength={120} required disabled={Boolean(busyId)} /></label>
          <p className="mt-2 text-charcoal/55">{editBody.length}/120</p>
          <div className="mt-2 flex gap-3"><button className="button-primary" type="submit" disabled={Boolean(busyId) || submitting}>{busyId ? (ko ? "저장 중" : "Saving") : (ko ? "저장" : "Save")}</button><button type="button" className="button-secondary" disabled={Boolean(busyId)} onClick={() => setEditing(null)}>{ko ? "취소" : "Cancel"}</button></div>
        </form> : <><p className="mt-1 break-words">{signature.body}</p>
          {deleting === signature.id ? <div className="mt-3"><p>{ko ? "이 서명글을 삭제하시겠습니까? 삭제한 글은 복구할 수 없습니다." : "Delete this signature? This cannot be undone."}</p><div className="mt-2 flex flex-wrap gap-3"><button type="button" className="button-primary" disabled={Boolean(busyId) || submitting} onClick={() => void manage(signature.id, true)}>{busyId ? (ko ? "삭제 중" : "Deleting") : (ko ? "삭제 확인" : "Confirm deletion")}</button><button type="button" className="button-secondary" disabled={Boolean(busyId)} onClick={() => setDeleting(null)}>{ko ? "취소" : "Cancel"}</button></div></div> : <div className="mt-3 flex gap-3"><button type="button" className="button-secondary" disabled={Boolean(busyId) || submitting} onClick={() => { setEditing(signature.id); setEditBody(signature.body); setDeleting(null); }}>{ko ? "수정" : "Edit"}</button><button type="button" className="button-secondary" disabled={Boolean(busyId) || submitting} onClick={() => { setDeleting(signature.id); setEditing(null); }}>{ko ? "삭제" : "Delete"}</button></div>}
        </>}
      </li>)}</ul>
    </div>}
    {notice && <p className="mt-4 text-sm font-bold text-green-deep" role="status">{notice}</p>}
    {signatures.length > 0 && <div className="mt-6 border-t border-green-deep/15 pt-4"><h3 className="text-base font-bold text-navy">{ko ? "최근 서명글" : "Recent signatures"}</h3><ul className="mt-3 space-y-3">{signatures.slice(0, 10).map(signature => <li key={signature.id} className="text-sm leading-6"><strong className="mr-3 text-green-deep">{signature.nickname}</strong>{signature.body}</li>)}</ul></div>}
  </section>;
}
