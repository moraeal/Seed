create policy "members read own campaign signatures" on public.comments for select to authenticated
using (post_slug = 'campaign-no-more-tax-signatures' and user_id = (select auth.uid()));
create policy "members update own campaign signatures" on public.comments for update to authenticated
using (post_slug = 'campaign-no-more-tax-signatures' and user_id = (select auth.uid()) and is_visible and not is_siya and parent_id is null)
with check (post_slug = 'campaign-no-more-tax-signatures' and user_id = (select auth.uid()) and is_visible and not is_siya and parent_id is null and char_length(body) between 2 and 120);
create policy "members delete own campaign signatures" on public.comments for delete to authenticated
using (post_slug = 'campaign-no-more-tax-signatures' and user_id = (select auth.uid()) and not is_siya and parent_id is null);
create or replace function private.check_campaign_signature() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  if new.post_slug <> 'campaign-no-more-tax-signatures' then return new; end if;
  new.body := btrim(regexp_replace(new.body, '\s+', ' ', 'g'));
  if char_length(new.body) not between 2 and 120 then
    raise exception 'CAMPAIGN_SIGNATURE_LENGTH' using errcode = '23514';
  end if;
  if tg_op = 'INSERT' then
    if new.user_id is null then raise exception 'CAMPAIGN_SIGNATURE_LOGIN_REQUIRED' using errcode = '23514'; end if;
    perform pg_advisory_xact_lock(hashtextextended('campaign-signature:' || new.user_id::text, 0));
    if (select count(*) from public.comments where post_slug = new.post_slug and user_id = new.user_id) >= 2 then
      raise exception 'CAMPAIGN_SIGNATURE_LIMIT' using errcode = '23514';
    end if;
  end if;
  return new;
end;
$$;
create trigger check_campaign_signature_before_write before insert or update on public.comments
for each row execute function private.check_campaign_signature();
