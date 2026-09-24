-- Collect newly proposed bills for editorial review without publishing them.
-- The plenary-passed bill jobs continue on their existing schedule.
do $$
declare
  old_job bigint;
begin
  for old_job in select jobid from cron.job where jobname = 'seed-legislative-proposals-daily'
  loop
    perform cron.unschedule(old_job);
  end loop;

  -- 06:30 Korea time. Overlap covers weekends and delayed Assembly data;
  -- bill_id and review_state prevent duplicate records and repeated analysis.
  perform cron.schedule(
    'seed-legislative-proposals-daily',
    '30 21 * * *',
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
        body := '{"mode":"proposed","days":4,"analyze":true,"analysisLimit":12,"media":false,"autoPublish":false}'::jsonb,
        timeout_milliseconds := 300000
      );
    $cron$
  );
end;
$$;
