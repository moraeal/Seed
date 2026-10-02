# SEED publishing rules

- Database-backed automatic legislative articles must generate an article-specific raster image, upload it to the permanent `editorial-images` bucket and verify the public JPEG before publication. Persist `editorial_image` with bilingual alt text and `verified_at`; do not promote missing, pending or failed artwork as a logo card. Keep failed generation retryable without rerunning a complete editorial analysis, and preserve publication dates during image repair.
- Main cards and legislative detail pages use the same verified image. Social previews and static bill routes use one public database snapshot per production build; scheduled deployments keep these in sync after unattended publishing.
- Inline text overrides must match the saved original text before applying. A positional override must never replace the headline of a different article after automatic card reordering.

- On the homepage, show at most one article for each specific event or policy dispute across the editor's pick, four quick reads, and hot-issue cards. When publishing a follow-up, commentary, briefing, or tracker on the same subject, add its route to the shared group in `src/data/homeTopics.ts`. The earlier placement keeps its article and lower placements choose the next distinct topic. Group by the actual subject, not by a broad desk label such as defense or tax. Related articles remain available on their own listing and detail pages.

- Hot issues select from all published news, briefings, columns, and civic/legislative/tax watch content relevant to citizens' and businesses' freedom and the public interest. Glossary entries and poems stay in their own sections. Use the shared selection in `src/data/hotIssueSelection.ts` on the homepage and Hot Issues listing. Rank by the latest publication or verified substantive update; never bump a date for a routine check, deployment, layout edit or popularity alone. Existing collections have no reserved slots: newer distinct issues displace them. Keep four homepage cards after excluding topics shown above. Add same-subject routes to `homeTopics.ts` when publishing; collections automatically include those candidates and derive their date, image and latest-development summary from the newest item. Never leave a manually written “latest change” in place of newer reporting or let an older collection suppress its own new follow-up.

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
