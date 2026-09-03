export type SeedComment = {
  id: string;
  post_slug: string;
  nickname: string;
  body: string;
  created_at: string;
};

// The public forum starts empty. Comments shown hereafter come only from
// authenticated citizen submissions stored in Supabase.
export const seedComments: SeedComment[] = [];
