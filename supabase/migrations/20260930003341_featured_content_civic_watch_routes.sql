alter table public.homepage_featured_content
  drop constraint if exists homepage_featured_content_content_path_check;

alter table public.homepage_featured_content
  add constraint homepage_featured_content_content_path_check
  check (content_path ~ '^/((columns|news|briefings|seed-language)|monitoring(/(legislation|tax)(/commentary)?)?)/[a-z0-9][a-z0-9-]*$');
