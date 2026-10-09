# SEED publishing rules

- Assess every newly created article for Civic Life suitability using `CONTENT_PUBLISHING_RULES.md` §14. In the same publishing update, add suitable articles' canonical routes to `civicLifeArticlePaths` in `src/data/civicSections.ts`, regardless of their original category. Preserve their original listings, author, body and Korean/English editions; verify Civic Life inclusion before declaring publication complete.

- Database-backed automatic legislative articles must generate an article-specific raster image, upload it to the permanent `editorial-images` bucket and verify the public JPEG before publication. Persist `editorial_image` with bilingual alt text and `verified_at`; do not promote missing, pending or failed artwork as a logo card. Keep failed generation retryable without rerunning a complete editorial analysis, and preserve publication dates during image repair.
- Main cards, legislative listing rows and legislative detail pages use the same verified image. Pass image URLs unchanged to SafeImage, which handles both permanent HTTPS images and local assets. Social previews and static bill routes use one public database snapshot per production build; scheduled deployments keep these in sync after unattended publishing.
- Inline text overrides must match the saved original text before applying. A positional override must never replace the headline of a different article after automatic card reordering.

- On the homepage, show at most one article for each specific event or policy dispute across the editor's pick and four quick reads. Add same-subject routes to `src/data/homeTopics.ts`. Homepage Hot Issues must exclude stories and topics already displayed above; filter before taking four cards and claim their topics for lower sections. Preserve the complete homepage article archive on `/news`, including articles introduced in the automatic homepage desks.

- Hot Issues use the complete homepage article archive from `getHomepageArchiveCards` in `src/data/hotIssueSelection.ts`. Merge the recovered homepage records in `src/data/recoveredHomepageHistory.json` with live `homepage_featured_history`; actual operator timestamps override reconstructed records for the same route. Preserve timestamps, deduplicate canonical routes, and skip withdrawn or unavailable articles. Recovered records must have historical homepage evidence, not simply membership in an article category. Exclude current homepage placements only from the homepage carousel; show up to eight eligible cards there and every archived article on `/news`, newest introduction first. Keep the total archive count visible and maintain pagination for earlier articles.

- Homepage Civic Watch consumes the shared `src/data/civicWatchFeed.ts` list used by Issue Watch, plus published legislative records, tax policies and public-interest articles. Show the three newest eligible records without reserved category slots; exclude exact articles already shown above while allowing distinct new analyses on a related topic. Use Korea dates for timestamped publications, retain verified-image requirements, and refresh live legislative records every minute and when the page regains focus or visibility.

- For AI-generated article images, use the concise disclosure “AI 이미지” in Korean and “AI image” in English. Avoid boilerplate such as “not an actual family/person/photo” in image captions. The shared figure caption derives this label from the image credit, so do not repeat it in caption text.

- Do not use OhmyNews (오마이뉴스) as a source, link, image provider, or source-credit outlet in any new or updated SEED article, tracker, briefing, column, commentary, translation, or metadata. Replace any OhmyNews material encountered during an edit with a suitable source from another outlet.

- Paired 5-minute articles and deep reads must share the same primary image, body images, and charts from common data references. Position shared visuals at the relevant section in each edition; do not duplicate an image within one page. Apply replacements to both articles and both languages together. Deep reads remain excluded from newsletter sends.

- “대표기사” and “대표이미지” are internal editorial terms. Do not expose them in reader-facing labels, article copy, image captions, alt text, metadata, or emails. Use “5분 요약본 보기” for the deep-read link back to its short article, and “Read the 5-minute summary” in English.
- Deep reads are supplementary website articles, never separate newsletter sends. For paired content, only the standalone short article is email-eligible. Require explicit `newsletterEligible === true` when a future newsletter system selects SEED Language articles; missing flags must not opt content in. Eligibility metadata alone does not schedule or send email.

- Every new publishable news article, civic briefing, column, or commentary must ship with both the Korean original and a polished English edition in the same update.
- English editions must be written for international readers, not produced as literal Korean-to-English substitutions. Preserve facts, qualifications, dates, figures, source labels, image descriptions, and SEED's distinction between verified facts and argument.
- Every independently shareable content page must have its own primary image. The build must expose that image through Open Graph and X metadata so SNS link previews use the content's actual artwork.
- Social previews are generated automatically as 1200x630 JPEG files during the production build. Do not point SNS metadata directly to WebP or SVG source artwork.
- Do not publish when the matching English translation or primary preview image is missing. Run the full production build before release.
- Preserve SEED's long-form depth when a subject needs context, evidence, and argument. Do not shorten a briefing or column merely to chase clicks.
- Make long content easy to enter and scan: open with a concise summary or key sentence, use clear intermediate headings, keep paragraphs visually separated, and maintain generous reading space on desktop and mobile.
- Do not add a separate table-of-contents or “read the outline first” box to articles, including long-form pieces. Use the opening summary and clear intermediate headings to guide readers instead.
- Every item estimated at eight minutes or longer must contain at least two meaningful titled sections and at least two purposeful visuals. Use charts or infographics for numbers and systems, and illustrations or photographs for concepts and human context. Do not add decorative images that carry no editorial meaning.
- Keep the visual hierarchy consistent across Korean and English editions. Translate every summary, section heading, image description, and caption; preserve the same editorial structure rather than delivering a thinner English version.
- When article copy mentions or explains a related SEED article, link the article title to its canonical detail route at the point of mention. A duplicate entry in the sources list does not replace this inline link. Apply the equivalent link in the English edition.

## Recovery and backup routine

- Before any large change, create and push an annotated restore tag from the current verified `main` state. Large changes include multi-file layout refactors, authentication or database work, deployment configuration, publishing automation, and changes that can affect many articles or routes. Name the tag `restore/YYYYMMDD-HHMM-<short-label>`.
- After the change, run the relevant checks and the full production build, deploy, and verify the operating site before declaring success. If a regression appears, prefer a new `git revert` commit back to the last verified state instead of rewriting shared history.
- Keep the encrypted Supabase database backup and encrypted full Git repository backup workflows enabled. Their Google Drive copies are disaster-recovery backups; Git history and restore tags remain the first choice for routine rollback.

## Facebook operations from chat

- The connected administrative Supabase tool can execute authorized Facebook commands through `seed_facebook_chat.submit`. Read `docs/facebook-chat-operations.md` before using it. The Page API ID is `1438854115971733`; use a unique request key per intended command and reuse it when checking an existing command.
- Preview public test wording before posting. Submit create/update/delete only when the user has authorized that operation and its copy. Read the recorded job result before claiming success. Do not automatically retry pending, processing or uncertain writes.
- Facebook tokens remain in Edge Function Secrets; dispatch credentials remain in Vault. Never retrieve or print tokens, service keys, Vault contents or request headers. No recurring Facebook publication schedule is enabled by the chat bridge.

- Tracker timeline article/video cards must ship with an image. The production build runs `scripts/prepare-tracker-images.mjs` to fetch original article metadata, validate raster bytes, and store JPEGs with source URL and verification time in `trackerSourceImages.json`. Missing or invalid artwork fails publication. Do not use publisher logos as article photographs. If an original article has no accessible photograph, explicitly curate a relevant image with `kind: "context"`, bilingual alt and credit; the card must disclose it as a related image. Official document cards may retain their document icon. Keep existing article dates and text unchanged during repairs.

- Article photographs, illustrations and charts must use the same reading width as the article text through `article-content-frame` and `reading-column`, including legacy articles and both languages. Keep archive and timeline thumbnails within their cards. Chart labels use readable sans-serif typography (Pretendard/Noto Sans KR), never Chosun Ilbo Myeongjo. Use medium-weight labels and bold chart titles.

## Article citations — fixed site-wide convention

- All article types and both languages must use `ArticleText`, `CitationReference` and `ArticleSources` from `src/components/ArticleCitations.tsx`, with `createArticleCitations` from `src/lib/articleCitations.ts`. Do not implement article-specific citation parsers, slug exceptions, custom superscripts or inline citation styles.
- In body copy, citations are small, muted superscript `[n]` links to the matching numbered source at the article end. Footer sources use smaller, muted text with a working original URL, retaining the full source label, date and notes where supplied. Use the shared CSS; no per-article visual variation.
- Store references as `[n](https://original-url)` or bare `[n]` tied to the article's ordered `sources` array. Missing numbers must be fixed before publication. Duplicate URLs share one footer number; existing bare numbers keep their original source meaning.
- Meaningful internal SEED article-title links remain normal inline links. Image credits, primary-source review cards and tracker timeline cards keep their dedicated roles. They do not replace the unified end-of-article source list.
- Run `node scripts/audit-article-citations.mjs` and the full production build before publishing. The build validates source resolution and protects the shared renderer for every article family. Extend the audit and renderer when adding a new article type.
