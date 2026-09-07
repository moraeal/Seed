-- Security hardening applied to the production Supabase project on 2026-09-07.
-- This file records permission changes that are not tied to one feature schema.

alter function public.normalize_seed_nickname(text) set search_path = '';
alter function public.is_nickname_available(text) set search_path = '';
alter function public.register_auth_user_nickname() set search_path = '';

revoke all on function public.normalize_seed_nickname(text) from public, anon, authenticated;
revoke all on function public.register_auth_user_nickname() from public, anon, authenticated;

-- Current frontend does not call this legacy admin RPC.
do $$
begin
  if to_regprocedure('public.get_member_subscriptions()') is not null then
    revoke all on function public.get_member_subscriptions() from public, anon, authenticated;
  end if;
end $$;
