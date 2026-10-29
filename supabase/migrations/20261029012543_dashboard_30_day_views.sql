-- Extend the private owner dashboard's daily page-view trend from 7 to 30 Korea-local dates.
-- Keep the existing signature, owner authorization, and grants intact.
create or replace function public.get_daily_view_stats()
returns table (view_date date, views bigint, visitors bigint)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_seed_owner() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  return query
    with days as (
      select generate_series(
        (now() at time zone 'Asia/Seoul')::date - 29,
        (now() at time zone 'Asia/Seoul')::date,
        interval '1 day'
      )::date as day
    ), counts as (
      select
        (v.viewed_at at time zone 'Asia/Seoul')::date as day,
        count(*)::bigint as total_views,
        count(distinct v.visitor_id)::bigint as total_visitors
      from public.content_page_views v
      where v.viewed_at >= ((now() at time zone 'Asia/Seoul')::date - 29)::timestamp at time zone 'Asia/Seoul'
      group by 1
    )
    select d.day, coalesce(c.total_views, 0)::bigint, coalesce(c.total_visitors, 0)::bigint
    from days d left join counts c using (day)
    order by d.day;
end;
$$;
