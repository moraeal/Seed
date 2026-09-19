import { ExternalLink, Eye, FileText, LoaderCircle, Save, Send, Sparkles, UploadCloud } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { ArticleDraft, ArticleDraftStatus, ArticleDraftType, listArticleDrafts, saveArticleDraft, uploadDraftAttachment } from "../lib/authorPortal";
import { useLanguage } from "../i18n";

const statusLabel: Record<ArticleDraftStatus, string> = {
  draft: "작성 중",
  submitted: "검토 요청",
  in_review: "편집부 검토 중",
  changes_requested: "수정 요청",
  approved: "승인",
  published: "게시 완료",
};

const emptyDraft = (userId: string, nickname: string): ArticleDraft => ({
  id: crypto.randomUUID(),
  author_id: userId,
  title: "",
  content_type: "column",
  source_text: "",
  editor_notes: "",
  ai_instructions: "",
  edited_text: "",
  editor_feedback: "",
  page_subtitle: "",
  page_summary: "",
  page_byline: nickname,
  page_slug: null,
  page_hero_image_url: "",
  status: "draft",
  attachment_name: null,
  attachment_type: null,
  attachment_path: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  submitted_at: null,
  reviewer_id: null,
  reviewed_at: null,
  published_at: null,
});

export default function WriterRoom() {
  const { session, user, nickname, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const role = user?.app_metadata?.seed_role;
  const authorized = role === "author" || role === "owner";
  const [drafts, setDrafts] = useState<ArticleDraft[]>([]);
  const [draft, setDraft] = useState<ArticleDraft | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");

  const editable = !draft || ["draft", "submitted", "changes_requested"].includes(draft.status);
  const lastSaved = useMemo(() => draft?.updated_at ? new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(draft.updated_at)) : "", [draft?.updated_at]);

  const loadDrafts = async () => {
    if (!session || !authorized || !user) return;
    setLoading(true);
    setNotice("");
    try {
      const rows = await listArticleDrafts(session);
      setDrafts(rows);
      setDraft((current) => current ? rows.find((item) => item.id === current.id) || current : rows[0] || emptyDraft(user.id, nickname));
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "원고 목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void loadDrafts(); }, [session?.access_token, authorized, user?.id]);

  const update = <K extends keyof ArticleDraft>(key: K, value: ArticleDraft[K]) => {
    setDraft((current) => current ? { ...current, [key]: value } : current);
  };

  const persist = async (status: "draft" | "submitted") => {
    if (!session || !user || !draft) return;
    if (!draft.title.trim() && !draft.source_text.trim() && !attachment) {
      setNotice("제목이나 원고 내용, 첨부파일 중 하나를 입력해주세요.");
      return;
    }
    setSaving(true);
    setNotice("");
    try {
      let attachmentFields = {
        attachment_name: draft.attachment_name,
        attachment_type: draft.attachment_type,
        attachment_path: draft.attachment_path,
      };
      if (attachment) {
        if (attachment.size > 20 * 1024 * 1024) throw new Error("첨부파일은 20MB 이하만 올릴 수 있습니다.");
        const uploaded = await uploadDraftAttachment(session, user.id, draft.id, attachment);
        attachmentFields = { attachment_name: uploaded.name, attachment_type: uploaded.type, attachment_path: uploaded.path };
      }
      const saved = await saveArticleDraft(session, {
        id: draft.id,
        author_id: user.id,
        title: draft.title.trim(),
        content_type: draft.content_type,
        source_text: draft.source_text,
        editor_notes: draft.editor_notes,
        ai_instructions: draft.ai_instructions,
        page_subtitle: draft.page_subtitle,
        page_summary: draft.page_summary,
        page_byline: draft.page_byline,
        status,
        ...attachmentFields,
      });
      setDraft(saved);
      setAttachment(null);
      setDrafts((current) => [saved, ...current.filter((item) => item.id !== saved.id)]);
      setNotice(status === "submitted" ? "편집부에 검토를 요청했습니다." : "원고를 임시저장했습니다.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "원고를 저장하지 못했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.files?.[0] || null;
    setAttachment(next);
    if (next && !draft?.title.trim()) update("title", next.name.replace(/\.[^.]+$/, ""));
  };

  if (authLoading) return <div className="container-page min-h-[55vh] py-24 text-center text-sm text-charcoal/50">계정을 확인하는 중입니다.</div>;
  if (!user) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">필자 집필실</h1><p className="mt-4 text-charcoal/60">필자로 등록된 계정으로 로그인해주세요.</p><Link to="/account?returnTo=/writer" className="button-primary mt-7">로그인</Link></div>;
  if (!authorized) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">접근할 수 없습니다</h1><p className="mt-4 text-charcoal/60">최고관리자가 필자로 지정한 회원만 집필실을 이용할 수 있습니다.</p><Link to="/account" className="button-secondary mt-7">내 계정으로</Link></div>;

  return (
    <section className="min-h-[72vh] bg-ivory py-10 sm:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-navy pb-5">
          <div><p className="section-kicker">SEED WRITERS' ROOM</p><h1 className="editorial-title mt-2 text-4xl font-bold text-navy">필자 집필실</h1><p className="mt-3 text-sm leading-6 text-charcoal/55">원고를 직접 작성하거나 파일로 올리고, 편집 방향과 AI 수정 요청을 함께 남길 수 있습니다.</p></div>
          <button type="button" className="button-primary" onClick={() => { setDraft(emptyDraft(user.id, nickname)); setAttachment(null); setNotice(""); }}><FileText size={16}/>새 원고</button>
        </div>

        {notice && <p className="mt-5 border border-green-deep/15 bg-[#E8EFE9] px-4 py-3 text-sm font-semibold text-green-deep" role="status">{notice}</p>}

        <div className="mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="border border-green-deep/12 bg-white p-4">
            <div className="flex items-center justify-between"><h2 className="font-extrabold text-navy">내 원고</h2>{loading && <LoaderCircle className="animate-spin text-green-mid" size={16}/>}</div>
            <div className="mt-4 divide-y divide-green-deep/10 border-t border-green-deep/15">
              {drafts.map((item) => <button key={item.id} type="button" onClick={() => { setDraft(item); setAttachment(null); setNotice(""); }} className={`block w-full px-2 py-4 text-left ${draft?.id === item.id ? "bg-green-pale/55" : "hover:bg-ivory"}`}><span className="block text-[10px] font-black tracking-[.12em] text-green-deep">{statusLabel[item.status]}</span><strong className="mt-1 block line-clamp-2 text-sm leading-5 text-navy">{item.title || "제목 없는 원고"}</strong><span className="mt-1 block text-[11px] text-charcoal/40">{new Date(item.updated_at).toLocaleDateString("ko-KR")}</span></button>)}
              {!loading && drafts.length === 0 && <p className="py-6 text-center text-xs leading-5 text-charcoal/45">저장된 원고가 없습니다.<br/>새 원고를 시작해보세요.</p>}
            </div>
          </aside>

          {draft && <form onSubmit={(event: FormEvent) => { event.preventDefault(); void persist("draft"); }} className="border border-green-deep/12 bg-white p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><span className="inline-flex bg-green-pale px-2.5 py-1 text-[11px] font-extrabold text-green-deep">{statusLabel[draft.status]}</span>{lastSaved && <span className="ml-2 text-[11px] text-charcoal/40">최근 저장 {lastSaved}</span>}</div><p className="text-xs text-charcoal/45">원문은 게시 전까지 비공개로 보관됩니다.</p></div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
              <label className="field"><span>기사 유형</span><select value={draft.content_type} disabled={!editable} onChange={(event) => update("content_type", event.target.value as ArticleDraftType)}><option value="column">칼럼</option><option value="briefing">브리핑</option><option value="civic_language">시민언어</option><option value="monitoring">시민감시</option><option value="other">기타</option></select></label>
              <label className="field"><span>원고 제목</span><input value={draft.title} disabled={!editable} maxLength={300} onChange={(event) => update("title", event.target.value)} placeholder="임시 제목을 입력하세요"/></label>
            </div>

            <label className="field mt-5"><span>원고 본문</span><textarea value={draft.source_text} disabled={!editable} onChange={(event) => update("source_text", event.target.value)} rows={18} placeholder="원고를 직접 작성하거나 아래에서 파일을 첨부하세요." className="resize-y leading-7"/></label>

            <div className="mt-5 rounded-lg border border-dashed border-green-deep/25 bg-ivory p-5">
              <label className="flex cursor-pointer flex-col items-center justify-center text-center"><UploadCloud className="text-green-mid" size={28}/><span className="mt-2 text-sm font-extrabold text-navy">원고 파일 첨부</span><span className="mt-1 text-xs text-charcoal/45">HWP·DOCX·PDF·TXT·MD, 최대 20MB</span><input type="file" className="sr-only" disabled={!editable} accept=".hwp,.docx,.pdf,.txt,.md" onChange={selectFile}/></label>
              {(attachment || draft.attachment_name) && <p className="mt-3 text-center text-xs font-semibold text-green-deep">{attachment?.name || draft.attachment_name}</p>}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <label className="field"><span>편집부에 남길 메모</span><textarea value={draft.editor_notes} disabled={!editable} onChange={(event) => update("editor_notes", event.target.value)} rows={5} placeholder="출처, 반드시 살릴 문장, 공개 시 주의사항 등을 적어주세요."/></label>
              <label className="field"><span className="inline-flex items-center gap-1.5"><Sparkles size={15}/>AI 편집 요청</span><textarea value={draft.ai_instructions} disabled={!editable} onChange={(event) => update("ai_instructions", event.target.value)} rows={5} placeholder="문체, 분량, 이미지·도표 수정 방향을 적어주세요."/><small className="font-normal leading-5 text-charcoal/45">AI 자동 편집·이미지·도표 생성은 다음 개발 단계에서 이 지시란과 연결됩니다.</small></label>
            </div>

            <section className="mt-5 border border-green-deep/12 bg-[#F7F6F0] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2"><div><h3 className="text-sm font-extrabold text-navy">기사 페이지 정보</h3><p className="mt-1 text-xs leading-5 text-charcoal/45">저장 후 실제 사이트 형태로 미리볼 수 있습니다.</p></div></div>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <label className="field"><span>부제</span><input value={draft.page_subtitle} disabled={!editable} maxLength={300} onChange={(event) => update("page_subtitle", event.target.value)} placeholder="제목 아래에 표시할 부제"/></label>
                <label className="field"><span>필자명</span><input value={draft.page_byline} disabled={!editable} maxLength={100} onChange={(event) => update("page_byline", event.target.value)} placeholder="기사에 표시할 이름"/></label>
              </div>
              <label className="field mt-4"><span>기사 요약</span><textarea value={draft.page_summary} disabled={!editable} maxLength={600} onChange={(event) => update("page_summary", event.target.value)} rows={3} placeholder="목록과 기사 머리말에 표시할 짧은 요약"/></label>
            </section>

            {(draft.editor_feedback || draft.edited_text || ["in_review", "approved", "published"].includes(draft.status)) && <section className="mt-5 border-l-4 border-green-mid bg-green-pale/45 p-5">
              <h3 className="text-sm font-extrabold text-navy">편집부 검토 내용</h3>
              {draft.editor_feedback && <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-charcoal/70">{draft.editor_feedback}</div>}
              {draft.edited_text && <details className="mt-4"><summary className="cursor-pointer text-sm font-bold text-green-deep">편집본 미리보기</summary><div className="mt-3 max-h-96 overflow-y-auto whitespace-pre-wrap border-t border-green-deep/10 pt-4 text-sm leading-7 text-charcoal/70">{draft.edited_text}</div></details>}
            </section>}

            <div className="mt-7 flex flex-wrap justify-end gap-3 border-t border-green-deep/10 pt-5">
              <button type="button" className="button-secondary" onClick={() => {
                if (!drafts.some((item) => item.id === draft.id)) { setNotice("기사 페이지를 보려면 원고를 먼저 임시저장해주세요."); return; }
                window.open(`/writer/preview?id=${encodeURIComponent(draft.id)}`, "_blank", "noopener,noreferrer");
              }}><Eye size={16}/>페이지 미리보기</button>
              {draft.status === "published" && draft.page_slug && <Link className="button-secondary" to={`/contributions?article=${encodeURIComponent(draft.page_slug)}`} target="_blank" rel="noreferrer"><ExternalLink size={16}/>게시 페이지</Link>}
              <button type="submit" className="button-secondary" disabled={saving || !editable}><Save size={16}/>{saving ? "저장 중" : "임시저장"}</button>
              <button type="button" className="button-primary" disabled={saving || !editable} onClick={() => void persist("submitted")}><Send size={16}/>{saving ? "처리 중" : "편집부 검토 요청"}</button>
            </div>
          </form>}
        </div>
      </div>
    </section>
  );
}
