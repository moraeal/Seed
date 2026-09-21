-- Daily tax-policy monitoring for SEED VOICE.
-- Candidates stay private. Important issues create a submitted editorial draft;
-- nothing is published without the owner's review.

create extension if not exists pg_net with schema extensions;
create extension if not exists pg_cron with schema pg_catalog;

create table if not exists public.tax_watch_settings (
  singleton boolean primary key default true check (singleton),
  owner_user_id uuid not null references auth.users(id) on delete restrict,
  enabled boolean not null default true,
  commentary_threshold integer not null default 75 check (commentary_threshold between 0 and 100),
  last_checked_at timestamptz,
  updated_at timestamptz not null default now()
);

insert into public.tax_watch_settings (singleton, owner_user_id)
select true, id
from auth.users
where raw_app_meta_data ->> 'seed_role' = 'owner'
order by created_at
limit 1
on conflict (singleton) do update
set owner_user_id = excluded.owner_user_id,
    updated_at = now();

create table if not exists public.tax_watch_items (
  id uuid primary key default gen_random_uuid(),
  source_hash text not null unique,
  issue_key text not null,
  source_title text not null,
  source_url text not null,
  source_name text not null default '언론 보도',
  source_kind text not null default 'media' check (source_kind in ('official', 'media')),
  published_at timestamptz,
  checked_at timestamptz not null default now(),
  issue_title_ko text not null default '',
  issue_title_en text not null default '',
  summary_ko text not null default '',
  summary_en text not null default '',
  relevance_score integer not null default 0 check (relevance_score between 0 and 100),
  editorial_decision text not null default 'notice_only' check (editorial_decision in ('notice_only', 'commentary_draft', 'ignored', 'error')),
  relevance_reason_ko text not null default '',
  relevance_reason_en text not null default '',
  topics text[] not null default '{}',
  citizen_impact_ko text[] not null default '{}',
  citizen_impact_en text[] not null default '{}',
  business_impact_ko text[] not null default '{}',
  business_impact_en text[] not null default '{}',
  property_impact_ko text[] not null default '{}',
  property_impact_en text[] not null default '{}',
  authority_shift_ko text[] not null default '{}',
  authority_shift_en text[] not null default '{}',
  evidence_gaps_ko text[] not null default '{}',
  evidence_gaps_en text[] not null default '{}',
  source_excerpt text not null default '',
  article_draft_id uuid references public.article_drafts(id) on delete set null,
  processing_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists tax_watch_items_checked_idx
  on public.tax_watch_items (checked_at desc);
create index if not exists tax_watch_items_decision_idx
  on public.tax_watch_items (editorial_decision, relevance_score desc, checked_at desc);
create index if not exists tax_watch_items_issue_idx
  on public.tax_watch_items (issue_key, checked_at desc);
create index if not exists tax_watch_items_article_draft_idx
  on public.tax_watch_items (article_draft_id);
create index if not exists tax_watch_settings_owner_idx
  on public.tax_watch_settings (owner_user_id);

create table if not exists public.tax_watch_sync_runs (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  status text not null default 'running' check (status in ('running', 'success', 'partial', 'error')),
  fetched_count integer not null default 0,
  new_count integer not null default 0,
  notice_count integer not null default 0,
  commentary_count integer not null default 0,
  ignored_count integer not null default 0,
  error_message text,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists tax_watch_sync_runs_started_idx
  on public.tax_watch_sync_runs (started_at desc);

alter table public.tax_watch_settings enable row level security;
alter table public.tax_watch_items enable row level security;
alter table public.tax_watch_sync_runs enable row level security;

create policy "Owner can read tax watch settings"
  on public.tax_watch_settings for select to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can update tax watch settings"
  on public.tax_watch_settings for update to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner')
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');

create policy "Owner can read tax watch items"
  on public.tax_watch_items for select to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');
create policy "Owner can update tax watch items"
  on public.tax_watch_items for update to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner')
  with check (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');

create policy "Owner can read tax watch runs"
  on public.tax_watch_sync_runs for select to authenticated
  using (((select auth.jwt()) -> 'app_metadata' ->> 'seed_role') = 'owner');

revoke all on table public.tax_watch_settings, public.tax_watch_items, public.tax_watch_sync_runs from public, anon, authenticated;
grant select, update on table public.tax_watch_settings, public.tax_watch_items to authenticated;
grant select on table public.tax_watch_sync_runs to authenticated;

create or replace function public.verify_tax_watch_cron_token(candidate text)
returns boolean
language sql
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from vault.decrypted_secrets
    where name = 'tax_watch_cron_token'
      and decrypted_secret = candidate
  );
$$;

revoke all on function public.verify_tax_watch_cron_token(text) from public, anon, authenticated;
grant execute on function public.verify_tax_watch_cron_token(text) to service_role;

do $$
begin
  if not exists (
    select 1 from vault.decrypted_secrets where name = 'tax_watch_cron_token'
  ) then
    perform vault.create_secret(encode(extensions.gen_random_bytes(32), 'hex'), 'tax_watch_cron_token');
  end if;
end;
$$;

do $$
declare
  existing_job bigint;
begin
  for existing_job in
    select jobid from cron.job where jobname = 'seed-tax-watch-daily'
  loop
    perform cron.unschedule(existing_job);
  end loop;

  -- Every day at 06:30 KST (21:30 UTC on the previous calendar day).
  perform cron.schedule(
    'seed-tax-watch-daily',
    '30 21 * * *',
    $cron$
      select net.http_post(
        url := 'https://wajlmbahjyazkftwaeem.supabase.co/functions/v1/tax-watch-monitor',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'x-seed-cron-token', (
            select decrypted_secret
            from vault.decrypted_secrets
            where name = 'tax_watch_cron_token'
            order by created_at desc
            limit 1
          )
        ),
        body := '{"days":3,"maxCandidates":80,"createDrafts":true}'::jsonb,
        timeout_milliseconds := 300000
      );
    $cron$
  );
end;
$$;
