create extension if not exists pgcrypto;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null check (char_length(post_slug) between 1 and 120),
  nickname text not null check (char_length(nickname) between 2 and 30),
  body text not null check (char_length(body) between 2 and 1000),
  is_visible boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists comments_post_slug_created_at_idx on public.comments (post_slug, created_at desc);
alter table public.comments enable row level security;

create policy "public can read visible comments" on public.comments for select to anon using (is_visible = true);
create policy "public can submit comments" on public.comments for insert to anon with check (is_visible = true);

revoke update, delete on public.comments from anon;
grant select, insert on public.comments to anon;
