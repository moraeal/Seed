create or replace function private.has_seed_role(allowed_roles text[])
returns boolean
language sql
stable
security invoker
set search_path = pg_catalog
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'seed_role', '') = any(allowed_roles);
$$;

create table if not exists public.article_drafts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  title text not null default '' check (char_length(title) <= 300),
  content_type text not null default 'column' check (content_type in ('column', 'briefing', 'civic_language', 'monitoring', 'other')),
  source_text text not null default '' check (char_length(source_text) <= 200000),
  editor_notes text not null default '' check (char_length(editor_notes) <= 20000),
  ai_instructions text not null default '' check (char_length(ai_instructions) <= 20000),
  status text not null default 'draft' check (status in ('draft', 'submitted', 'changes_requested', 'approved', 'published')),
  attachment_name text check (attachment_name is null or char_length(attachment_name) <= 255),
  attachment_type text check (attachment_type is null or char_length(attachment_type) <= 160),
  attachment_path text check (attachment_path is null or char_length(attachment_path) <= 900),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  submitted_at timestamptz,
  published_at timestamptz
);

create index if not exists article_drafts_author_updated_idx
  on public.article_drafts (author_id, updated_at desc);

create index if not exists article_drafts_status_updated_idx
  on public.article_drafts (status, updated_at desc);

create or replace function private.touch_article_draft_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  new.updated_at := now();
  if new.status = 'submitted' and old.status is distinct from 'submitted' then
    new.submitted_at := now();
  end if;
  return new;
end;
$$;

drop trigger if exists article_drafts_touch_updated_at on public.article_drafts;
create trigger article_drafts_touch_updated_at
before update on public.article_drafts
for each row execute function private.touch_article_draft_updated_at();

alter table public.article_drafts enable row level security;

drop policy if exists "Authors can read their drafts" on public.article_drafts;
create policy "Authors can read their drafts"
  on public.article_drafts for select
  to authenticated
  using (
    ((select private.has_seed_role(array['author', 'owner'])) and author_id = (select auth.uid()))
    or (select private.has_seed_role(array['owner']))
  );

drop policy if exists "Authors can create their drafts" on public.article_drafts;
create policy "Authors can create their drafts"
  on public.article_drafts for insert
  to authenticated
  with check (
    (select private.has_seed_role(array['author', 'owner']))
    and author_id = (select auth.uid())
    and status in ('draft', 'submitted')
  );

drop policy if exists "Authors can update editable drafts" on public.article_drafts;
create policy "Authors can update editable drafts"
  on public.article_drafts for update
  to authenticated
  using (
    (select private.has_seed_role(array['author']))
    and author_id = (select auth.uid())
    and status in ('draft', 'submitted', 'changes_requested')
  )
  with check (
    (select private.has_seed_role(array['author']))
    and author_id = (select auth.uid())
    and status in ('draft', 'submitted')
  );

drop policy if exists "Owner can update all drafts" on public.article_drafts;
create policy "Owner can update all drafts"
  on public.article_drafts for update
  to authenticated
  using ((select private.has_seed_role(array['owner'])))
  with check ((select private.has_seed_role(array['owner'])));

drop policy if exists "Authors can delete editable drafts" on public.article_drafts;
create policy "Authors can delete editable drafts"
  on public.article_drafts for delete
  to authenticated
  using (
    (select private.has_seed_role(array['author']))
    and author_id = (select auth.uid())
    and status in ('draft', 'changes_requested')
  );

drop policy if exists "Owner can delete all drafts" on public.article_drafts;
create policy "Owner can delete all drafts"
  on public.article_drafts for delete
  to authenticated
  using ((select private.has_seed_role(array['owner'])));

revoke all on table public.article_drafts from public, anon, authenticated;
grant select, insert, update, delete on table public.article_drafts to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'author-drafts',
  'author-drafts',
  false,
  20971520,
  array[
    'text/plain',
    'text/markdown',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/x-hwp',
    'application/haansofthwp',
    'application/octet-stream'
  ]::text[]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Authors can upload their source files" on storage.objects;
create policy "Authors can upload their source files"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'author-drafts'
    and (select private.has_seed_role(array['author', 'owner']))
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Authors can read their source files" on storage.objects;
create policy "Authors can read their source files"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'author-drafts'
    and (
      ((select private.has_seed_role(array['author', 'owner'])) and (storage.foldername(name))[1] = (select auth.uid())::text)
      or (select private.has_seed_role(array['owner']))
    )
  );

drop policy if exists "Authors can update their source files" on storage.objects;
create policy "Authors can update their source files"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'author-drafts'
    and (select private.has_seed_role(array['author', 'owner']))
    and (storage.foldername(name))[1] = (select auth.uid())::text
  )
  with check (
    bucket_id = 'author-drafts'
    and (select private.has_seed_role(array['author', 'owner']))
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Authors can delete their source files" on storage.objects;
create policy "Authors can delete their source files"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'author-drafts'
    and (select private.has_seed_role(array['author', 'owner']))
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create or replace function public.set_member_seed_role(target_user_id uuid, target_role text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_role text := nullif(btrim(coalesce(target_role, '')), '');
  current_role text;
begin
  if not public.is_seed_owner() then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  if target_user_id = auth.uid() then
    raise exception 'owner role cannot be changed here' using errcode = '22023';
  end if;

  if normalized_role is not null and normalized_role <> 'author' then
    raise exception 'invalid role' using errcode = '22023';
  end if;

  select u.raw_app_meta_data ->> 'seed_role'
    into current_role
    from auth.users u
   where u.id = target_user_id
     and u.deleted_at is null
     and u.email_confirmed_at is not null
   for update;

  if not found then
    raise exception 'verified member not found' using errcode = 'P0002';
  end if;

  if current_role = 'owner' then
    raise exception 'owner role cannot be changed here' using errcode = '22023';
  end if;

  update auth.users
     set raw_app_meta_data = case
       when normalized_role is null then coalesce(raw_app_meta_data, '{}'::jsonb) - 'seed_role'
       else jsonb_set(coalesce(raw_app_meta_data, '{}'::jsonb), '{seed_role}', to_jsonb(normalized_role), true)
     end,
     updated_at = now()
   where id = target_user_id;

  return coalesce(normalized_role, 'member');
end;
$$;

drop function if exists public.get_member_registrations();
create function public.get_member_registrations()
returns table (
  user_id uuid,
  email text,
  nickname text,
  phone text,
  content_subscription_consent boolean,
  social_preferences text[],
  created_at timestamptz,
  email_confirmed_at timestamptz,
  seed_role text
)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_seed_owner() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  return query
    select u.id, u.email::text,
      coalesce(nullif(btrim(u.raw_user_meta_data ->> 'nickname'), ''), split_part(u.email, '@', 1), '인증회원')::text,
      nullif(btrim(u.raw_user_meta_data ->> 'contact_phone'), '')::text,
      (coalesce(u.raw_user_meta_data ->> 'content_subscription_consent', '') = 'true')::boolean,
      coalesce(
        array(select jsonb_array_elements_text(
          case when jsonb_typeof(u.raw_user_meta_data -> 'social_preferences') = 'array'
            then u.raw_user_meta_data -> 'social_preferences' else '[]'::jsonb end
        )),
        '{}'::text[]
      ),
      u.created_at,
      u.email_confirmed_at,
      coalesce(nullif(u.raw_app_meta_data ->> 'seed_role', ''), 'member')::text
    from auth.users u
    where u.deleted_at is null
    order by u.created_at desc;
end;
$$;

revoke all on function private.has_seed_role(text[]) from public, anon, authenticated;
revoke all on function private.touch_article_draft_updated_at() from public, anon, authenticated;
revoke all on function public.set_member_seed_role(uuid, text) from public, anon, authenticated;
revoke all on function public.get_member_registrations() from public, anon, authenticated;

grant usage on schema private to authenticated;
grant execute on function private.has_seed_role(text[]) to authenticated;
grant execute on function public.set_member_seed_role(uuid, text) to authenticated;
grant execute on function public.get_member_registrations() to authenticated;
