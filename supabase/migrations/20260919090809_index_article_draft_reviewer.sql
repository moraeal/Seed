create index if not exists article_drafts_reviewer_idx
  on public.article_drafts (reviewer_id)
  where reviewer_id is not null;
