alter table public.article_drafts
  add column if not exists page_subtitle text not null default '',
  add column if not exists page_summary text not null default '',
  add column if not exists page_byline text not null default '',
  add column if not exists page_slug text,
  add column if not exists page_hero_image_url text not null default '';

alter table public.article_drafts
  drop constraint if exists article_drafts_page_subtitle_check,
  drop constraint if exists article_drafts_page_summary_check,
  drop constraint if exists article_drafts_page_byline_check,
  drop constraint if exists article_drafts_page_slug_check,
  drop constraint if exists article_drafts_page_hero_image_url_check;

alter table public.article_drafts
  add constraint article_drafts_page_subtitle_check check (char_length(page_subtitle) <= 500),
  add constraint article_drafts_page_summary_check check (char_length(page_summary) <= 2000),
  add constraint article_drafts_page_byline_check check (char_length(page_byline) <= 120),
  add constraint article_drafts_page_slug_check check (
    page_slug is null
    or (char_length(page_slug) between 3 and 100 and page_slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
  ),
  add constraint article_drafts_page_hero_image_url_check check (char_length(page_hero_image_url) <= 1000);

create unique index if not exists article_drafts_page_slug_unique_idx
  on public.article_drafts (lower(page_slug))
  where page_slug is not null;

create or replace function private.touch_article_draft_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  owner_request boolean := private.has_seed_role(array['owner']);
  publish_body text;
begin
  if tg_op = 'INSERT' then
    if not owner_request and (
      new.edited_text <> ''
      or new.editor_feedback <> ''
      or new.reviewer_id is not null
      or new.reviewed_at is not null
      or new.published_at is not null
      or new.page_slug is not null
      or new.page_hero_image_url <> ''
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
    or new.page_slug is distinct from old.page_slug
    or new.page_hero_image_url is distinct from old.page_hero_image_url
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
    or new.page_slug is distinct from old.page_slug
    or new.page_hero_image_url is distinct from old.page_hero_image_url
  ) then
    new.reviewer_id := auth.uid();
    new.reviewed_at := now();
  end if;

  if owner_request and new.status = 'published' then
    publish_body := coalesce(nullif(btrim(new.edited_text), ''), nullif(btrim(new.source_text), ''));
    if nullif(btrim(new.title), '') is null or publish_body is null then
      raise exception 'published article requires a title and body' using errcode = '23514';
    end if;

    new.page_slug := coalesce(
      nullif(btrim(new.page_slug), ''),
      'contribution-' || left(replace(new.id::text, '-', ''), 12)
    );
    new.page_byline := coalesce(nullif(btrim(new.page_byline), ''), '씨앗의 소리 필자');
    new.page_summary := coalesce(
      nullif(btrim(new.page_summary), ''),
      left(regexp_replace(publish_body, '\s+', ' ', 'g'), 220)
    );

    if old.status is distinct from 'published' then
      new.published_at := now();
    end if;
  end if;

  return new;
end;
$$;

create or replace function private.get_published_contribution(requested_slug text)
returns table (
  id uuid,
  slug text,
  title text,
  subtitle text,
  summary text,
  byline text,
  content_type text,
  body text,
  hero_image_url text,
  published_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    d.id,
    d.page_slug,
    d.title,
    d.page_subtitle,
    d.page_summary,
    d.page_byline,
    d.content_type,
    coalesce(nullif(d.edited_text, ''), d.source_text),
    d.page_hero_image_url,
    d.published_at,
    d.updated_at
  from public.article_drafts d
  where d.status = 'published'
    and lower(d.page_slug) = lower(btrim(requested_slug))
  limit 1;
$$;

create or replace function public.get_published_contribution(requested_slug text)
returns table (
  id uuid,
  slug text,
  title text,
  subtitle text,
  summary text,
  byline text,
  content_type text,
  body text,
  hero_image_url text,
  published_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security invoker
set search_path = pg_catalog
as $$
  select * from private.get_published_contribution(requested_slug);
$$;

create or replace function private.list_published_contributions()
returns table (
  slug text,
  title text,
  subtitle text,
  summary text,
  byline text,
  content_type text,
  hero_image_url text,
  published_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    d.page_slug,
    d.title,
    d.page_subtitle,
    d.page_summary,
    d.page_byline,
    d.content_type,
    d.page_hero_image_url,
    d.published_at
  from public.article_drafts d
  where d.status = 'published'
    and d.page_slug is not null
  order by d.published_at desc
  limit 100;
$$;

create or replace function public.list_published_contributions()
returns table (
  slug text,
  title text,
  subtitle text,
  summary text,
  byline text,
  content_type text,
  hero_image_url text,
  published_at timestamptz
)
language sql
stable
security invoker
set search_path = pg_catalog
as $$
  select * from private.list_published_contributions();
$$;

revoke all on function private.get_published_contribution(text) from public, anon, authenticated;
revoke all on function public.get_published_contribution(text) from public, anon, authenticated;
revoke all on function private.list_published_contributions() from public, anon, authenticated;
revoke all on function public.list_published_contributions() from public, anon, authenticated;

grant usage on schema private to anon, authenticated;
grant execute on function private.get_published_contribution(text) to anon, authenticated;
grant execute on function public.get_published_contribution(text) to anon, authenticated;
grant execute on function private.list_published_contributions() to anon, authenticated;
grant execute on function public.list_published_contributions() to anon, authenticated;

comment on function public.get_published_contribution(text) is '공개된 필자 기사의 게시용 필드만 반환합니다.';
comment on function public.list_published_contributions() is '공개된 필자 기사 목록의 게시용 필드만 반환합니다.';
