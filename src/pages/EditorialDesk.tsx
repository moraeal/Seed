import { ArrowLeft, CheckCircle2, Download, ExternalLink, Eye, FileCheck2, FilePenLine, Inbox, LoaderCircle, RefreshCw, RotateCcw, Save, Send, UserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { ArticleDraft, ArticleDraftStatus, ArticleDraftType, downloadDraftAttachment, listArticleDrafts, updateArticleDraftReview } from "../lib/authorPortal";
import { listMemberRegistrations, MemberRegistration } from "../lib/engagement";
import { useLanguage } from "../i18n";

const statusLabel: Record<ArticleDraftStatus, string> = {
  draft: "작성 중",
  submitted: "검토 요청",
  in_review: "편집 중",
  changes_requested: "수정 요청",
  approved: "게시 준비",
  published: "게시 완료",
};

const typeLabel: Record<ArticleDraftType, string> = {
  column: "칼럼",
  briefing: "브리핑",
  civic_language: "시민언어",
  monitoring: "시민감시",
  other: "기타",
};

type QueueFilter = "active" | ArticleDraftStatus | "all";

export default function EditorialDesk() {
  const { session, user, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const authorized = user?.app_metadata?.seed_role === "owner";
  const [drafts, setDrafts] = useState<ArticleDraft[]>([]);
  const [members, setMembers] = useState<MemberRegistration[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<QueueFilter>("active");
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState<ArticleDraftType>("column");
  const [editedText, setEditedText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [summary, setSummary] = useState("");
  const [byline, setByline] = useState("");
  const [slug, setSlug] = useState("");
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [notice, setNotice] = useState("");

  const selected = drafts.find((item) => item.id === selectedId) || null;
  const memberMap = useMemo(() => new Map(members.map((item) => [item.user_id, item])), [members]);
  const visibleDrafts = useMemo(() => drafts.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return ["submitted", "in_review", "changes_requested", "approved"].includes(item.status);
    return item.status === filter;
  }), [drafts, filter]);
  const counts = useMemo(() => ({
    active: drafts.filter((item) => ["submitted", "in_review", "changes_requested", "approved"].includes(item.status)).length,
    draft: drafts.filter((item) => item.status === "draft").length,
    submitted: drafts.filter((item) => item.status === "submitted").length,
    in_review: drafts.filter((item) => item.status === "in_review").length,
    changes_requested: drafts.filter((item) => item.status === "changes_requested").length,
    approved: drafts.filter((item) => item.status === "approved").length,
    published: drafts.filter((item) => item.status === "published").length,
    all: drafts.length,
  }), [drafts]);

  const loadQueue = async () => {
    if (!session || !authorized) return;
    setLoading(true);
    setNotice("");
    try {
      const [nextDrafts, nextMembers] = await Promise.all([
        listArticleDrafts(session),
        listMemberRegistrations(session),
      ]);
      setDrafts(nextDrafts);
      setMembers(nextMembers);
      setSelectedId((current) => current && nextDrafts.some((item) => item.id === current)
        ? current
        : nextDrafts.find((item) => ["submitted", "in_review", "changes_requested", "approved"].includes(item.status))?.id || null);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "원고함을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void loadQueue(); }, [session?.access_token, authorized]);
  useEffect(() => {
    if (!selected) return;
    setTitle(selected.title);
    setContentType(selected.content_type);
    setEditedText(selected.edited_text || selected.source_text);
    setFeedback(selected.editor_feedback || "");
    setSubtitle(selected.page_subtitle || "");
    setSummary(selected.page_summary || "");
    setByline(selected.page_byline || memberMap.get(selected.author_id)?.nickname || "필자");
    setSlug(selected.page_slug || "");
    setHeroImageUrl(selected.page_hero_image_url || "");
    setNotice("");
  }, [selected?.id]);

  const selectDraft = (draft: ArticleDraft) => {
    setSelectedId(draft.id);
  };

  const persist = async (status: ArticleDraftStatus, successMessage: string) => {
    if (!session || !selected) return;
    if (status === "changes_requested" && !feedback.trim()) {
      setNotice("필자에게 전달할 수정 요청 내용을 먼저 입력해주세요.");
      return;
    }
    setSaving(true);
    setNotice("");
    try {
      const saved = await updateArticleDraftReview(session, selected.id, {
        title: title.trim() || selected.title,
        content_type: contentType,
        edited_text: editedText,
        editor_feedback: feedback.trim(),
        page_subtitle: subtitle.trim(),
        page_summary: summary.trim(),
        page_byline: byline.trim(),
        page_slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "") || null,
        page_hero_image_url: heroImageUrl.trim(),
        status,
      });
      setDrafts((current) => current.map((item) => item.id === saved.id ? saved : item));
      setNotice(successMessage);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "검토 내용을 저장하지 못했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const downloadAttachment = async () => {
    if (!session || !selected?.attachment_path) return;
    setDownloading(true);
    setNotice("");
    try {
      await downloadDraftAttachment(session, selected);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "첨부파일을 내려받지 못했습니다.");
    } finally {
      setDownloading(false);
    }
  };

  const formatDate = (value: string | null) => value
    ? new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value))
    : "—";

  if (authLoading) return <div className="container-page min-h-[55vh] py-24 text-center text-sm text-charcoal/50">계정을 확인하는 중입니다.</div>;
  if (!user) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">편집부 원고함</h1><p className="mt-4 text-charcoal/60">최고관리자 계정으로 로그인해주세요.</p><Link to="/account?returnTo=/insights/editorial" className="button-primary mt-7">로그인</Link></div>;
  if (!authorized) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">접근할 수 없습니다</h1><p className="mt-4 text-charcoal/60">편집부 원고함은 최고관리자만 이용할 수 있습니다.</p></div>;

  const author = selected ? memberMap.get(selected.author_id) : undefined;
  const filters: { key: QueueFilter; label: string }[] = [
    { key: "active", label: "진행 중" },
    { key: "submitted", label: "새 요청" },
    { key: "in_review", label: "편집 중" },
    { key: "changes_requested", label: "수정 요청" },
    { key: "approved", label: "게시 준비" },
    { key: "published", label: "게시 완료" },
    { key: "all", label: "전체" },
  ];

  return (
    <section className="min-h-[75vh] bg-ivory py-10 sm:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-navy pb-5">
          <div>
            <p className="section-kicker">PRIVATE EDITORIAL DESK</p>
            <h1 className="editorial-title mt-2 text-4xl font-bold text-navy">편집부 원고함</h1>
            <p className="mt-3 text-sm leading-6 text-charcoal/55">필자가 검토 요청한 원고를 편집하고, 수정 요청부터 게시 준비까지 상태를 관리합니다.</p>
          </div>
          <div className="flex flex-wrap gap-2"><Link to="/insights" className="button-secondary"><ArrowLeft size={15}/>관리 화면</Link><button type="button" className="button-secondary" onClick={() => void loadQueue()} disabled={loading}><RefreshCw className={loading ? "animate-spin" : ""} size={15}/>새로고침</button></div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label="원고 상태 필터">
          {filters.map((item) => <button key={item.key} type="button" onClick={() => setFilter(item.key)} className={`whitespace-nowrap border px-3 py-2 text-xs font-bold ${filter === item.key ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-green-deep"}`}>{item.label} <span className="ml-1 opacity-70">{counts[item.key]}</span></button>)}
        </div>

        {notice && <p className="mt-5 border border-green-deep/15 bg-[#E8EFE9] px-4 py-3 text-sm font-semibold text-green-deep" role="status">{notice}</p>}

        <div className="mt-6 grid gap-6 xl:grid-cols-[330px_minmax(0,1fr)]">
          <aside className="border border-green-deep/12 bg-white p-4">
            <div className="flex items-center justify-between"><h2 className="inline-flex items-center gap-2 font-extrabold text-navy"><Inbox size={17}/>원고 목록</h2>{loading && <LoaderCircle className="animate-spin text-green-mid" size={16}/>}</div>
            <div className="mt-4 divide-y divide-green-deep/10 border-t border-green-deep/15">
              {visibleDrafts.map((item) => {
                const itemAuthor = memberMap.get(item.author_id);
                return <button key={item.id} type="button" onClick={() => selectDraft(item)} className={`block w-full px-3 py-4 text-left transition-colors ${selectedId === item.id ? "bg-green-pale/60" : "hover:bg-ivory"}`}>
                  <span className="flex items-center justify-between gap-2 text-[10px] font-black tracking-[.08em] text-green-deep"><span>{statusLabel[item.status]} · {typeLabel[item.content_type]}</span>{item.status === "submitted" && <span className="size-2 rounded-full bg-amber-500"/>}</span>
                  <strong className="mt-1.5 block line-clamp-2 text-sm leading-5 text-navy">{item.title || "제목 없는 원고"}</strong>
                  <span className="mt-2 flex items-center justify-between text-[11px] text-charcoal/45"><span>{itemAuthor?.nickname || "필자"}</span><span>{formatDate(item.submitted_at || item.updated_at)}</span></span>
                </button>;
              })}
              {!loading && visibleDrafts.length === 0 && <p className="py-9 text-center text-xs leading-5 text-charcoal/45">이 상태의 원고가 없습니다.</p>}
            </div>
          </aside>

          {selected ? <div className="border border-green-deep/12 bg-white p-5 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-green-deep/10 pb-5">
              <div><span className="inline-flex bg-green-pale px-2.5 py-1 text-[11px] font-extrabold text-green-deep">{statusLabel[selected.status]}</span><h2 className="editorial-title mt-3 text-2xl font-bold text-navy">{selected.title || "제목 없는 원고"}</h2><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal/50"><span className="inline-flex items-center gap-1"><UserRound size={13}/>{author?.nickname || "필자"}{author?.email ? ` · ${author.email}` : ""}</span><span>요청 {formatDate(selected.submitted_at)}</span><span>최근 검토 {formatDate(selected.reviewed_at)}</span></div></div>
              {selected.attachment_path && <button type="button" className="button-secondary" onClick={() => void downloadAttachment()} disabled={downloading}><Download size={15}/>{downloading ? "받는 중" : selected.attachment_name || "첨부파일"}</button>}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
              <label className="field"><span>기사 유형</span><select value={contentType} onChange={(event) => setContentType(event.target.value as ArticleDraftType)}>{Object.entries(typeLabel).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
              <label className="field"><span>편집 제목</span><input value={title} maxLength={300} onChange={(event) => setTitle(event.target.value)} /></label>
            </div>

            <div className="mt-5 grid gap-5 2xl:grid-cols-2">
              <section><div className="mb-2 flex items-center justify-between"><h3 className="text-sm font-extrabold text-navy">필자 원문</h3><span className="text-[11px] text-charcoal/40">원문 보존 · 읽기 전용</span></div><div className="h-[34rem] overflow-y-auto whitespace-pre-wrap border border-green-deep/12 bg-[#F7F6F0] p-4 text-sm leading-7 text-charcoal/70">{selected.source_text || "본문 없이 첨부파일로 제출된 원고입니다."}</div></section>
              <label className="field"><span className="flex items-center justify-between"><strong>편집본</strong><small className="font-normal text-charcoal/40">원문과 별도로 저장됩니다</small></span><textarea value={editedText} onChange={(event) => setEditedText(event.target.value)} rows={23} className="resize-y leading-7" placeholder="편집을 시작하면 필자 원문이 자동으로 복사됩니다."/></label>
            </div>

            {(selected.editor_notes || selected.ai_instructions) && <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {selected.editor_notes && <section className="bg-[#F1F2EC] p-4"><h3 className="text-xs font-extrabold text-navy">필자가 남긴 메모</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-charcoal/65">{selected.editor_notes}</p></section>}
              {selected.ai_instructions && <section className="bg-green-pale/55 p-4"><h3 className="text-xs font-extrabold text-navy">AI 편집 요청</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-charcoal/65">{selected.ai_instructions}</p></section>}
            </div>}

            <label className="field mt-5"><span>필자에게 전달할 편집 의견</span><textarea value={feedback} onChange={(event) => setFeedback(event.target.value)} rows={6} placeholder="수정이 필요한 이유와 구체적인 요청 사항을 적어주세요."/></label>

            <section className="mt-5 border border-green-deep/12 bg-[#F7F6F0] p-5">
              <div><h3 className="text-sm font-extrabold text-navy">기사 페이지 설정</h3><p className="mt-1 text-xs leading-5 text-charcoal/45">미리보기로 실제 구현 화면을 확인한 뒤 최종 게시할 수 있습니다.</p></div>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <label className="field"><span>부제</span><input value={subtitle} maxLength={300} onChange={(event) => setSubtitle(event.target.value)} placeholder="제목 아래 부제"/></label>
                <label className="field"><span>필자명</span><input value={byline} maxLength={100} onChange={(event) => setByline(event.target.value)} placeholder="공개 필자명"/></label>
              </div>
              <label className="field mt-4"><span>기사 요약</span><textarea value={summary} maxLength={600} onChange={(event) => setSummary(event.target.value)} rows={3} placeholder="비워두면 본문 앞부분으로 자동 생성됩니다."/></label>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <label className="field"><span>공개 주소</span><div className="flex items-stretch"><span className="inline-flex items-center border border-r-0 border-green-deep/15 bg-white px-3 text-xs text-charcoal/45">/contributions?article=</span><input value={slug} maxLength={120} onChange={(event) => setSlug(event.target.value)} placeholder="비우면 자동 생성"/></div></label>
                <label className="field"><span>대표 이미지 URL</span><input value={heroImageUrl} maxLength={1000} onChange={(event) => setHeroImageUrl(event.target.value)} placeholder="비우면 기본 이미지 사용"/></label>
              </div>
            </section>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-green-deep/10 pt-5">
              <button type="button" className="button-secondary" onClick={() => window.open(`/writer/preview?id=${encodeURIComponent(selected.id)}`, "_blank", "noopener,noreferrer")}><Eye size={16}/>페이지 미리보기</button>
              {selected.status === "published" && selected.page_slug && <Link className="button-secondary" to={`/contributions?article=${encodeURIComponent(selected.page_slug)}`} target="_blank" rel="noreferrer"><ExternalLink size={16}/>게시 페이지</Link>}
              <button type="button" className="button-secondary" disabled={saving} onClick={() => void persist(selected.status, "편집 내용을 저장했습니다.")}><Save size={16}/>{saving ? "저장 중" : "편집 저장"}</button>
              {selected.status === "submitted" && <button type="button" className="button-primary" disabled={saving} onClick={() => void persist("in_review", "검토를 시작했습니다.")}><FilePenLine size={16}/>검토 시작</button>}
              {selected.status === "changes_requested" && <button type="button" className="button-primary" disabled={saving} onClick={() => void persist("in_review", "원고를 다시 검토 중으로 옮겼습니다.")}><RotateCcw size={16}/>다시 검토</button>}
              {["in_review", "submitted"].includes(selected.status) && <button type="button" className="button-secondary" disabled={saving} onClick={() => void persist("changes_requested", "필자에게 수정 요청 상태로 전달했습니다.")}><Send size={16}/>필자 수정 요청</button>}
              {["in_review", "submitted", "changes_requested"].includes(selected.status) && <button type="button" className="button-primary" disabled={saving} onClick={() => void persist("approved", "게시 준비 원고로 승인했습니다.")}><FileCheck2 size={16}/>게시 준비 승인</button>}
              {selected.status === "approved" && <><button type="button" className="button-secondary" disabled={saving} onClick={() => void persist("in_review", "편집 중 상태로 되돌렸습니다.")}><RotateCcw size={16}/>편집으로 되돌리기</button><button type="button" className="button-primary" disabled={saving} onClick={() => void persist("published", "기사 페이지를 최종 게시했습니다.")}><CheckCircle2 size={16}/>최종 게시</button></>}
            </div>
          </div> : <div className="grid min-h-96 place-items-center border border-green-deep/12 bg-white p-8 text-center text-sm text-charcoal/45">검토할 원고를 선택해주세요.</div>}
        </div>
      </div>
    </section>
  );
}
