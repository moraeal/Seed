import { createHandler } from "./worker.mjs";

Deno.serve(createHandler({
  env: {
    SUPABASE_URL: Deno.env.get("SUPABASE_URL"),
    SUPABASE_SERVICE_ROLE_KEY: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
    FACEBOOK_PAGE_ID: Deno.env.get("FACEBOOK_PAGE_ID"),
    FACEBOOK_PAGE_ACCESS_TOKEN: Deno.env.get("FACEBOOK_PAGE_ACCESS_TOKEN"),
  },
}));
