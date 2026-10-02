-- Recovered from seven encrypted daily backups on 2026-10-02.
-- Keep the original operator selection times; preserve any newer live selections.
insert into public.homepage_featured_history (content_path, featured_at)
values
  ('/news/business-growth-regulatory-thresholds-2026', '2026-10-01 07:43:07.572+00'::timestamptz),
  ('/columns/security-pride-vigilance-armed-forces-day-2026', '2026-09-30 22:23:27.167+00'::timestamptz),
  ('/news/debt-relief-repaid-borrowers-fairness-2026', '2026-09-29 00:54:37.534+00'::timestamptz),
  ('/columns/business-succession-deduction-threshold-2026', '2026-09-28 05:49:20.182+00'::timestamptz),
  ('/columns/seoul-housing-prices-rent-broken-ladder', '2026-09-27 07:20:47.485+00'::timestamptz),
  ('/briefings/inheritance-tax-frozen-allowance-middle-class', '2026-09-26 01:10:08.639+00'::timestamptz),
  ('/columns/majority-power-must-not-command-the-judiciary', '2026-09-25 11:21:32.395+00'::timestamptz)
on conflict (content_path) do update
set featured_at = greatest(homepage_featured_history.featured_at, excluded.featured_at);

