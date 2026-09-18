create schema if not exists private;

create table if not exists public.page_text_overrides (
  id uuid primary key default gen_random_uuid(),
  page_path text not null check (char_length(page_path) between 1 and 500),
  locale text not null check (locale in ('ko', 'en')),
  element_path text not null check (element_path ~ '^[0-9]+(\.[0-9]+)*$'),
  text_node_index integer not null default 0 check (text_node_index >= 0),
  original_text text not null check (char_length(original_text) between 1 and 20000),
  published_text text not null check (char_length(published_text) between 1 and 20000),
  updated_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_path, locale, element_path, text_node_index)
);

create table if not exists public.page_text_drafts (
  id uuid primary key default gen_random_uuid(),
  page_path text not null check (char_length(page_path) between 1 and 500),
  locale text not null check (locale in ('ko', 'en')),
  element_path text not null check (element_path ~ '^[0-9]+(\.[0-9]+)*$'),
  text_node_index integer not null default 0 check (text_node_index >= 0),
  original_text text not null check (char_length(original_text) between 1 and 20000),
  draft_text text not null check (char_length(draft_text) between 1 and 20000),
  updated_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_path, locale, element_path, text_node_index)
);

create table if not exists public.page_text_revisions (
  id bigint generated always as identity primary key,
  override_id uuid,
  page_path text not null,
  locale text not null,
  element_path text not null,
  text_node_index integer not null,
  revision_text text not null,
  operation text not null check (operation in ('initial', 'update', 'delete')),
  changed_by uuid references auth.users(id) on delete set null,
  changed_at timestamptz not null default now()
);

create index if not exists page_text_overrides_page_idx
  on public.page_text_overrides (page_path, locale);

create index if not exists page_text_overrides_updated_by_idx
  on public.page_text_overrides (updated_by);

create index if not exists page_text_drafts_editor_idx
  on public.page_text_drafts (updated_by, updated_at desc);

create index if not exists page_text_revisions_target_idx
  on public.page_text_revisions (page_path, locale, element_path, text_node_index, changed_at desc);

create index if not exists page_text_revisions_changed_by_idx
  on public.page_text_revisions (changed_by);

create or replace function private.is_seed_owner()
returns boolean
language sql
stable
security invoker
set search_path = pg_catalog
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'seed_role', '') = 'owner';
$$;

create or replace function private.touch_page_text_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create or replace function private.record_page_text_revision()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if tg_op = 'INSERT' then
    insert into public.page_text_revisions (
      override_id, page_path, locale, element_path, text_node_index,
      revision_text, operation, changed_by
    ) values (
      new.id, new.page_path, new.locale, new.element_path, new.text_node_index,
      new.original_text, 'initial', auth.uid()
    );
    return new;
  elsif tg_op = 'UPDATE' and old.published_text is distinct from new.published_text then
    insert into public.page_text_revisions (
      override_id, page_path, locale, element_path, text_node_index,
      revision_text, operation, changed_by
    ) values (
      old.id, old.page_path, old.locale, old.element_path, old.text_node_index,
      old.published_text, 'update', auth.uid()
    );
    return new;
  elsif tg_op = 'DELETE' then
    insert into public.page_text_revisions (
      override_id, page_path, locale, element_path, text_node_index,
      revision_text, operation, changed_by
    ) values (
      old.id, old.page_path, old.locale, old.element_path, old.text_node_index,
      old.published_text, 'delete', auth.uid()
    );
    return old;
  end if;

  return new;
end;
$$;

drop trigger if exists page_text_overrides_touch_updated_at on public.page_text_overrides;
create trigger page_text_overrides_touch_updated_at
before update on public.page_text_overrides
for each row execute function private.touch_page_text_updated_at();

drop trigger if exists page_text_drafts_touch_updated_at on public.page_text_drafts;
create trigger page_text_drafts_touch_updated_at
before update on public.page_text_drafts
for each row execute function private.touch_page_text_updated_at();

drop trigger if exists page_text_overrides_revision on public.page_text_overrides;
create trigger page_text_overrides_revision
after insert or update or delete on public.page_text_overrides
for each row execute function private.record_page_text_revision();

alter table public.page_text_overrides enable row level security;
alter table public.page_text_drafts enable row level security;
alter table public.page_text_revisions enable row level security;

drop policy if exists "Public can read published page text" on public.page_text_overrides;
create policy "Public can read published page text"
  on public.page_text_overrides for select
  to anon, authenticated
  using (true);

drop policy if exists "Owner can insert published page text" on public.page_text_overrides;
create policy "Owner can insert published page text"
  on public.page_text_overrides for insert
  to authenticated
  with check (
    (select private.is_seed_owner())
    and updated_by = (select auth.uid())
  );

drop policy if exists "Owner can update published page text" on public.page_text_overrides;
create policy "Owner can update published page text"
  on public.page_text_overrides for update
  to authenticated
  using ((select private.is_seed_owner()))
  with check (
    (select private.is_seed_owner())
    and updated_by = (select auth.uid())
  );

drop policy if exists "Owner can delete published page text" on public.page_text_overrides;
create policy "Owner can delete published page text"
  on public.page_text_overrides for delete
  to authenticated
  using ((select private.is_seed_owner()));

drop policy if exists "Owner can read page text drafts" on public.page_text_drafts;
create policy "Owner can read page text drafts"
  on public.page_text_drafts for select
  to authenticated
  using ((select private.is_seed_owner()));

drop policy if exists "Owner can insert page text drafts" on public.page_text_drafts;
create policy "Owner can insert page text drafts"
  on public.page_text_drafts for insert
  to authenticated
  with check (
    (select private.is_seed_owner())
    and updated_by = (select auth.uid())
  );

drop policy if exists "Owner can update page text drafts" on public.page_text_drafts;
create policy "Owner can update page text drafts"
  on public.page_text_drafts for update
  to authenticated
  using ((select private.is_seed_owner()))
  with check (
    (select private.is_seed_owner())
    and updated_by = (select auth.uid())
  );

drop policy if exists "Owner can delete page text drafts" on public.page_text_drafts;
create policy "Owner can delete page text drafts"
  on public.page_text_drafts for delete
  to authenticated
  using ((select private.is_seed_owner()));

drop policy if exists "Owner can read page text revisions" on public.page_text_revisions;
create policy "Owner can read page text revisions"
  on public.page_text_revisions for select
  to authenticated
  using ((select private.is_seed_owner()));

revoke all on table public.page_text_overrides from anon, authenticated;
revoke all on table public.page_text_drafts from anon, authenticated;
revoke all on table public.page_text_revisions from anon, authenticated;

grant select on table public.page_text_overrides to anon, authenticated;
grant insert, update, delete on table public.page_text_overrides to authenticated;
grant select, insert, update, delete on table public.page_text_drafts to authenticated;
grant select on table public.page_text_revisions to authenticated;

revoke all on function private.is_seed_owner() from public, anon, authenticated;
revoke all on function private.touch_page_text_updated_at() from public, anon, authenticated;
revoke all on function private.record_page_text_revision() from public, anon, authenticated;

grant usage on schema private to anon, authenticated;
grant execute on function private.is_seed_owner() to anon, authenticated;
