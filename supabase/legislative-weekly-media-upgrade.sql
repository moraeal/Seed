-- Weekly legislative monitoring, reverse-direction signals, and reviewed media summaries.

alter table public.legislative_bills
  add column if not exists direction_risk_score integer not null default 0,
  add column if not exists direction_risk_flags text[] not null default '{}',
  add column if not exists media_coverage_draft jsonb not null default '[]'::jsonb,
  add column if not exists media_coverage jsonb not null default '[]'::jsonb,
  add column if not exists media_checked_at timestamptz;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_direction_risk_score_check') then
    alter table public.legislative_bills
      add constraint legislative_bills_direction_risk_score_check
      check (direction_risk_score between 0 and 100);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_media_coverage_draft_array_check') then
    alter table public.legislative_bills
      add constraint legislative_bills_media_coverage_draft_array_check
      check (jsonb_typeof(media_coverage_draft) = 'array');
  end if;
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_media_coverage_array_check') then
    alter table public.legislative_bills
      add constraint legislative_bills_media_coverage_array_check
      check (jsonb_typeof(media_coverage) = 'array');
  end if;
end;
$$;

create index if not exists legislative_bills_direction_risk_idx
  on public.legislative_bills (direction_risk_score desc, proposed_date desc);

-- Replace the former 30-minute collector with one editorial update each Monday
-- at 06:30 KST (Sunday 21:30 UTC). The Edge Function still requires its Vault token,
-- and its output remains private until an owner approves publication.
do $$
declare
  existing_job bigint;
begin
  for existing_job in
    select jobid from cron.job where jobname in (
      'seed-legislative-monitor-every-30-minutes',
      'seed-legislative-monitor-weekly'
    )
  loop
    perform cron.unschedule(existing_job);
  end loop;

  perform cron.schedule(
    'seed-legislative-monitor-weekly',
    '30 21 * * 0',
    $cron$
      select net.http_post(
        url := 'https://wajlmbahjyazkftwaeem.supabase.co/functions/v1/legislative-monitor',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'x-seed-cron-token', (
            select decrypted_secret from vault.decrypted_secrets
            where name = 'legislative_cron_token'
            order by created_at desc limit 1
          )
        ),
        body := '{"days":7,"analyze":true,"analysisLimit":5,"media":true}'::jsonb,
        timeout_milliseconds := 180000
      );
    $cron$
  );
end;
$$;
