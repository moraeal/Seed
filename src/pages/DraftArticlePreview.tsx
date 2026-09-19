import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";
import ContributionArticle from "../components/ContributionArticle";
import { ArticleDraft, getArticleDraft } from "../lib/authorPortal";

export default function DraftArticlePreview() {
  const { session, user, nickname, loading: authLoading } = useAuth();
  const [params] = useSearchParams();
  const [draft, setDraft] = useState<ArticleDraft | null>(null);
  const [error, setError] = useState("");
  const role = user?.app_metadata?.seed_role;
  const authorized = role === "author" || role === "owner";
  const draftId = params.get("id") || "";

  useEffect(() => {
    if (!session || !authorized || !draftId) return;
    let cancelled = false;
    void getArticleDraft(session, draftId).then((item) => { if (!cancelled) setDraft(item); }).catch((reason) => { if (!cancelled) setError(reason instanceof Error ? reason.message : "원고를 불러오지 못했습니다."); });
    return () => { cancelled = true; };
  }, [session?.access_token, authorized, draftId]);

  if (authLoading) return <div className="container-page min-h-[55vh] py-24 text-center text-sm text-charcoal/50">계정을 확인하는 중입니다.</div>;
  if (!user || !authorized) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">비공개 미리보기</h1><p className="mt-4 text-charcoal/60">이 원고를 볼 수 있는 필자 또는 편집부 계정으로 로그인해주세요.</p><Link to={`/account?returnTo=${encodeURIComponent(`/writer/preview?id=${draftId}`)}`} className="button-primary mt-7">로그인</Link></div>;
  if (!draftId) return <div className="container-page min-h-[50vh] py-24 text-center text-charcoal/60">미리볼 원고가 지정되지 않았습니다.</div>;
  if (error) return <div className="container-page min-h-[50vh] py-24 text-center text-charcoal/60">{error}</div>;
  if (!draft) return <div className="container-page min-h-[50vh] py-24 text-center text-charcoal/50">기사 페이지를 만드는 중입니다.</div>;

  return <ContributionArticle title={draft.title} subtitle={draft.page_subtitle} summary={draft.page_summary} byline={draft.page_byline || nickname} contentType={draft.content_type} body={draft.edited_text || draft.source_text} heroImageUrl={draft.page_hero_image_url} publishedAt={draft.published_at} preview backTo={role === "owner" ? "/insights/editorial" : "/writer"}/>;
}
