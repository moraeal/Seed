-- SEED VOICE legislative monitoring schema.
-- Run this once, then deploy supabase/functions/legislative-monitor/index.ts.
-- Keep ASSEMBLY_OPEN_API_KEY, OPENAI_API_KEY and the cron token in Supabase secrets/Vault.

create extension if not exists pg_net with schema extensions;
create extension if not exists pg_cron with schema pg_catalog;

create table if not exists public.legislative_bills (
  bill_id text primary key,
  bill_no text,
  assembly_age integer not null default 22,
  slug text not null unique,
  title text not null,
  proposer text,
  representative_proposer text,
  co_proposers text[] not null default '{}',
  proposer_kind text,
  proposed_date date,
  committee text,
  bill_kind text,
  source_status text,
  processing_result text,
  official_summary text,
  proposal_reason text,
  main_content text,
  detail_url text,
  full_text_url text,
  source_payload jsonb not null default '{}'::jsonb,
  source_hash text,
  importance_score integer not null default 0 check (importance_score between 0 and 100),
  importance_level text not null default 'unrated' check (importance_level in ('unrated', 'low', 'medium', 'high', 'critical')),
  review_state text not null default 'collected' check (review_state in ('collected', 'queued', 'analyzing', 'review', 'published', 'held', 'excluded', 'error')),
  analysis jsonb not null default '{}'::jsonb,
  analysis_model text,
  analysis_generated_at timestamptz,
  analysis_error text,
  published_at timestamptz,
  last_source_update timestamptz,
  source_checked_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists legislative_bills_proposed_date_idx on public.legislative_bills (proposed_date desc);
create index if not exists legislative_bills_review_state_idx on public.legislative_bills (review_state, importance_score desc);
create index if not exists legislative_bills_published_at_idx on public.legislative_bills (published_at desc) where published_at is not null;

create table if not exists public.legislative_bill_events (
  id uuid primary key default gen_random_uuid(),
  bill_id text not null references public.legislative_bills (bill_id) on delete cascade,
  event_key text not null,
  event_type text not null,
  event_date date,
  title text not null,
  description text,
  source_url text,
  source_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (bill_id, event_key)
);

create index if not exists legislative_bill_events_bill_date_idx on public.legislative_bill_events (bill_id, event_date desc);

create table if not exists public.legislative_sync_runs (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  status text not null default 'running' check (status in ('running', 'success', 'partial', 'error')),
  endpoint text,
  fetched_count integer not null default 0,
  inserted_count integer not null default 0,
  updated_count integer not null default 0,
  queued_count integer not null default 0,
  error_message text,
  metadata jsonb not null default '{}'::jsonb
);

alter table public.legislative_bills enable row level security;
alter table public.legislative_bill_events enable row level security;
alter table public.legislative_sync_runs enable row level security;

create policy "Published legislative bills are public" on public.legislative_bills for select to anon
  using (review_state = 'published' and published_at is not null);
create policy "Authenticated readers see published bills and owners see all" on public.legislative_bills for select to authenticated
  using ((review_state = 'published' and published_at is not null) or (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner'));
create policy "Owner can insert legislative bills" on public.legislative_bills for insert to authenticated
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can update legislative bills" on public.legislative_bills for update to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner')
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can delete legislative bills" on public.legislative_bills for delete to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');

create policy "Published bill events are public" on public.legislative_bill_events for select to anon
  using (exists (select 1 from public.legislative_bills b where b.bill_id = legislative_bill_events.bill_id and b.review_state = 'published' and b.published_at is not null));
create policy "Authenticated readers see published events and owners see all" on public.legislative_bill_events for select to authenticated
  using ((((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner') or exists (select 1 from public.legislative_bills b where b.bill_id = legislative_bill_events.bill_id and b.review_state = 'published' and b.published_at is not null));
create policy "Owner can insert bill events" on public.legislative_bill_events for insert to authenticated
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can update bill events" on public.legislative_bill_events for update to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner')
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can delete bill events" on public.legislative_bill_events for delete to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can read legislative sync runs" on public.legislative_sync_runs for select to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');

grant select on public.legislative_bills, public.legislative_bill_events to anon;
grant select, insert, update, delete on public.legislative_bills, public.legislative_bill_events to authenticated;
grant select on public.legislative_sync_runs to authenticated;

create or replace function public.verify_legislative_cron_token(candidate text)
returns boolean
language sql
security definer
set search_path = ''
as $$
  select exists (
    select 1 from vault.decrypted_secrets
    where name = 'legislative_cron_token' and decrypted_secret = candidate
  );
$$;

revoke all on function public.verify_legislative_cron_token(text) from public, anon, authenticated;
grant execute on function public.verify_legislative_cron_token(text) to service_role;

-- Create the Vault token and pg_cron job in the dashboard/SQL editor for each environment.
-- Do not commit the token or API keys to this repository.
