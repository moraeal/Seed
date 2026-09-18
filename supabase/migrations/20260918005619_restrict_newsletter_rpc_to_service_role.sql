-- Newsletter subscriptions must pass through the Turnstile-protected Edge Function.
-- The Edge Function calls this RPC with the service role after verification.
revoke all on function public.subscribe_newsletter(text, text, text)
  from public, anon, authenticated;
grant execute on function public.subscribe_newsletter(text, text, text)
  to service_role;
