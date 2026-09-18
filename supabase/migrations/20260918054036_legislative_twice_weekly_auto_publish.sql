-- Monitor plenary-passed bills twice a week and publish evidence-complete analyses automatically.

alter table public.legislative_bills
  add column if not exists plenary_passed_at date,
  add column if not exists media_impact_score integer not null default 0,
  add column if not exists auto_published boolean not null default false;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'legislative_bills_media_impact_score_check'
  ) then
    alter table public.legislative_bills
      add constraint legislative_bills_media_impact_score_check
      check (media_impact_score between 0 and 100);
  end if;
end;
$$;

create index if not exists legislative_bills_plenary_passed_idx
  on public.legislative_bills (plenary_passed_at desc, media_impact_score desc, importance_score desc);

do $$
declare
  existing_job bigint;
begin
  for existing_job in
    select jobid from cron.job where jobname in (
      'seed-legislative-monitor-every-30-minutes',
      'seed-legislative-monitor-weekly',
      'seed-legislative-monitor-tuesday',
      'seed-legislative-monitor-friday'
    )
  loop
    perform cron.unschedule(existing_job);
  end loop;

  -- Tuesday 06:30 KST (Monday 21:30 UTC). Looks back four days so weekends are covered.
  perform cron.schedule(
    'seed-legislative-monitor-tuesday',
    '30 21 * * 1',
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
        body := '{"days":4,"analyze":true,"analysisLimit":8,"media":true,"autoPublish":true}'::jsonb,
        timeout_milliseconds := 300000
      );
    $cron$
  );

  -- Friday 06:30 KST (Thursday 21:30 UTC). The overlap is intentional; bill IDs prevent duplicates.
  perform cron.schedule(
    'seed-legislative-monitor-friday',
    '30 21 * * 4',
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
        body := '{"days":4,"analyze":true,"analysisLimit":8,"media":true,"autoPublish":true}'::jsonb,
        timeout_milliseconds := 300000
      );
    $cron$
  );
end;
$$;
