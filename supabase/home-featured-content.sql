create table if not exists public.homepage_featured_content (
  slot text primary key default 'primary' check (slot = 'primary'),
  content_path text not null check (content_path ~ '^/(columns|news|briefings|seed-language)/[a-z0-9][a-z0-9-]*$'),
  updated_at timestamptz not null default now()
);

alter table public.homepage_featured_content enable row level security;

grant select on table public.homepage_featured_content to anon, authenticated;
grant insert, update on table public.homepage_featured_content to authenticated;
revoke delete on table public.homepage_featured_content from anon, authenticated;

create policy "Public settings are readable"
on public.homepage_featured_content for select
to anon, authenticated
using (true);

create policy "Owner can insert settings"
on public.homepage_featured_content for insert
to authenticated
with check (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner');

create policy "Owner can update settings"
on public.homepage_featured_content for update
to authenticated
using (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner')
with check (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner');
