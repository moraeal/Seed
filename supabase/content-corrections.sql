create table if not exists public.content_corrections (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null check (char_length(post_slug) between 1 and 240),
  user_id uuid references auth.users(id) on delete set null,
  nickname text not null check (char_length(nickname) between 1 and 40),
  target_excerpt text not null check (char_length(target_excerpt) between 2 and 500),
  description text not null check (char_length(description) between 10 and 1500),
  evidence_url text check (evidence_url is null or (char_length(evidence_url) <= 500 and evidence_url ~* '^https?://')),
  status text not null default 'open' check (status in ('open', 'reviewing', 'accepted', 'rejected', 'resolved')),
  resolution_note text check (resolution_note is null or char_length(resolution_note) <= 1500),
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists content_corrections_post_created_idx
  on public.content_corrections (post_slug, created_at desc)
  where is_visible = true;

create index if not exists content_corrections_status_idx
  on public.content_corrections (status, created_at desc);

create index if not exists content_corrections_user_id_idx
  on public.content_corrections (user_id);

alter table public.content_corrections enable row level security;

drop policy if exists "Public can read visible corrections" on public.content_corrections;
create policy "Public can read visible corrections"
  on public.content_corrections for select
  to anon, authenticated
  using (is_visible = true);

drop policy if exists "Verified users can submit corrections" on public.content_corrections;
create policy "Verified users can submit corrections"
  on public.content_corrections for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and is_visible = true
    and status = 'open'
    and resolution_note is null
    and reviewed_at is null
  );

revoke all on table public.content_corrections from anon, authenticated;
grant select on table public.content_corrections to anon, authenticated;
grant insert (post_slug, user_id, nickname, target_excerpt, description, evidence_url, status, is_visible)
  on table public.content_corrections to authenticated;
