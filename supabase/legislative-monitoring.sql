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
  current_stage text not null default '발의',
  is_featured boolean not null default false,
  featured_order integer check (featured_order is null or featured_order between 1 and 99),
  featured_reason_ko text,
  featured_reason_en text,
  observation_keywords text[] not null default '{}',
  public_summary_ko text,
  public_summary_en text,
  seed_view_ko text,
  seed_view_en text,
  related_content jsonb not null default '[]'::jsonb check (jsonb_typeof(related_content) = 'array'),
  allow_bookmark boolean not null default true,
  notification_status text not null default 'disabled' check (notification_status in ('disabled', 'available', 'active')),
  important_change_status text not null default 'none' check (important_change_status in ('none', 'draft', 'approved')),
  important_change_note_ko text,
  important_change_note_en text,
  editorial_updated_at timestamptz,
  last_source_update timestamptz,
  source_checked_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists legislative_bills_proposed_date_idx on public.legislative_bills (proposed_date desc);
create index if not exists legislative_bills_review_state_idx on public.legislative_bills (review_state, importance_score desc);
create index if not exists legislative_bills_published_at_idx on public.legislative_bills (published_at desc) where published_at is not null;
create index if not exists legislative_bills_featured_order_idx on public.legislative_bills (featured_order, published_at desc) where is_featured = true and review_state = 'published' and published_at is not null;

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

create schema if not exists private;

create or replace function private.track_legislative_bill_change()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.current_stage is distinct from old.current_stage then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'stage:' || gen_random_uuid()::text, 'stage_change', current_date,
      '법안 단계 변경: ' || coalesce(old.current_stage, '미확인') || ' → ' || coalesce(new.current_stage, '미확인'),
      case when new.source_status is not null then '국회 공개 상태: ' || new.source_status else null end,
      new.detail_url
    );
  end if;

  if new.source_status is distinct from old.source_status then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'source-status:' || gen_random_uuid()::text, 'source_status', current_date,
      '국회 공개 상태 변경',
      coalesce(old.source_status, '미확인') || ' → ' || coalesce(new.source_status, '미확인'),
      new.detail_url
    );
  end if;

  if new.important_change_status = 'approved'
     and (
       old.important_change_status is distinct from new.important_change_status
       or old.important_change_note_ko is distinct from new.important_change_note_ko
     ) then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'important-change:' || gen_random_uuid()::text, 'approved_change', current_date,
      '중요 변경사항 승인', new.important_change_note_ko, new.detail_url
    );
  end if;

  return new;
end;
$$;

drop trigger if exists legislative_bill_change_history on public.legislative_bills;
create trigger legislative_bill_change_history
after update of current_stage, source_status, important_change_status, important_change_note_ko
on public.legislative_bills
for each row execute function private.track_legislative_bill_change();

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
