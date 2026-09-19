create or replace function private.touch_article_draft_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  owner_request boolean := private.has_seed_role(array['owner']);
begin
  if tg_op = 'INSERT' then
    if not owner_request and (
      new.edited_text <> ''
      or new.editor_feedback <> ''
      or new.reviewer_id is not null
      or new.reviewed_at is not null
      or new.published_at is not null
    ) then
      raise exception 'editorial fields are owner-only' using errcode = '42501';
    end if;

    new.updated_at := now();
    if new.status = 'submitted' and new.submitted_at is null then
      new.submitted_at := now();
    end if;
    return new;
  end if;

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

drop trigger if exists article_drafts_touch_updated_at on public.article_drafts;
create trigger article_drafts_touch_updated_at
before insert or update on public.article_drafts
for each row execute function private.touch_article_draft_updated_at();
