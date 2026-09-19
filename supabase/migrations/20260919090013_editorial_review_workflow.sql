alter table public.article_drafts
  add column if not exists edited_text text not null default '',
  add column if not exists editor_feedback text not null default '',
  add column if not exists reviewer_id uuid references auth.users(id) on delete set null,
  add column if not exists reviewed_at timestamptz;

alter table public.article_drafts
  drop constraint if exists article_drafts_status_check;

alter table public.article_drafts
  add constraint article_drafts_status_check
  check (status in ('draft', 'submitted', 'in_review', 'changes_requested', 'approved', 'published'));

alter table public.article_drafts
  drop constraint if exists article_drafts_edited_text_check,
  drop constraint if exists article_drafts_editor_feedback_check;

alter table public.article_drafts
  add constraint article_drafts_edited_text_check check (char_length(edited_text) <= 200000),
  add constraint article_drafts_editor_feedback_check check (char_length(editor_feedback) <= 30000);

create index if not exists article_drafts_review_queue_idx
  on public.article_drafts (status, submitted_at desc nulls last, updated_at desc);

create or replace function private.touch_article_draft_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  owner_request boolean := private.has_seed_role(array['owner']);
begin
  if new.author_id is distinct from old.author_id then
    raise exception 'draft author cannot be changed' using errcode = '42501';
  end if;

  if not owner_request and (
    new.edited_text is distinct from old.edited_text
    or new.editor_feedback is distinct from old.editor_feedback
    or new.reviewer_id is distinct from old.reviewer_id
    or new.reviewed_at is distinct from old.reviewed_at
    or new.published_at is distinct from old.published_at
  ) then
    raise exception 'editorial fields are owner-only' using errcode = '42501';
  end if;

  new.updated_at := now();

  if new.status = 'submitted' and old.status is distinct from 'submitted' then
    new.submitted_at := now();
  end if;

  if owner_request and (
    new.status is distinct from old.status
    or new.edited_text is distinct from old.edited_text
    or new.editor_feedback is distinct from old.editor_feedback
  ) then
    new.reviewer_id := auth.uid();
    new.reviewed_at := now();
  end if;

  if owner_request and new.status = 'published' and old.status is distinct from 'published' then
    new.published_at := now();
  end if;

  return new;
end;
$$;

comment on column public.article_drafts.edited_text is '편집부가 원문을 보존한 채 작성하는 편집본';
comment on column public.article_drafts.editor_feedback is '필자에게 전달하는 편집부 검토 의견';
comment on column public.article_drafts.reviewer_id is '최근 검토를 저장한 최고관리자 계정';
comment on column public.article_drafts.reviewed_at is '편집부가 최근 검토한 시각';
