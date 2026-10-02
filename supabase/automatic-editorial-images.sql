-- Images live outside transient AI provider URLs. Only the server writes objects.
alter table public.legislative_bills add column if not exists editorial_image jsonb;
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('editorial-images', 'editorial-images', true, 10485760, array['image/jpeg'])
on conflict (id) do nothing;

create or replace function public.require_legislative_editorial_image()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.review_state = 'published' and (tg_op = 'INSERT' or old.review_state is distinct from 'published') then
    if new.editorial_image is null
      or new.editorial_image->>'status' is distinct from 'ready'
      or coalesce(new.editorial_image->>'verified_at', '') = ''
      or coalesce(new.editorial_image->>'alt_ko', '') = ''
      or coalesce(new.editorial_image->>'alt_en', '') = ''
      or coalesce(new.editorial_image->>'src', '') not like 'https://wajlmbahjyazkftwaeem.supabase.co/storage/v1/object/public/editorial-images/%' then
      raise exception 'A verified editorial image is required before publication';
    end if;
  end if;
  return new;
end;
$$;
revoke all on function public.require_legislative_editorial_image() from public;
drop trigger if exists require_legislative_editorial_image on public.legislative_bills;
create trigger require_legislative_editorial_image before insert or update of review_state on public.legislative_bills
for each row execute function public.require_legislative_editorial_image();

-- Retry artwork independently; never publish an unapproved proposal draft.
select cron.schedule('seed-editorial-image-repair', '15 * * * *', $cron$
  select net.http_post(
    url := 'https://wajlmbahjyazkftwaeem.supabase.co/functions/v1/legislative-monitor',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-seed-cron-token', (
      select decrypted_secret from vault.decrypted_secrets where name = 'legislative_cron_token' order by created_at desc limit 1
    )), body := '{"imagesOnly":true,"imageLimit":2}'::jsonb, timeout_milliseconds := 10000
  );
$cron$);
