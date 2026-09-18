# SEED publishing rules

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
- Every item estimated at eight minutes or longer must contain at least two meaningful titled sections and at least two purposeful visuals. Use charts or infographics for numbers and systems, and illustrations or photographs for concepts and human context. Do not add decorative images that carry no editorial meaning.
- Keep the visual hierarchy consistent across Korean and English editions. Translate every summary, section heading, image description, and caption; preserve the same editorial structure rather than delivering a thinner English version.

## Recovery and backup routine

- Before any large change, create and push an annotated restore tag from the current verified `main` state. Large changes include multi-file layout refactors, authentication or database work, deployment configuration, publishing automation, and changes that can affect many articles or routes. Name the tag `restore/YYYYMMDD-HHMM-<short-label>`.
- After the change, run the relevant checks and the full production build, deploy, and verify the operating site before declaring success. If a regression appears, prefer a new `git revert` commit back to the last verified state instead of rewriting shared history.
- Keep the encrypted Supabase database backup and encrypted full Git repository backup workflows enabled. Their Google Drive copies are disaster-recovery backups; Git history and restore tags remain the first choice for routine rollback.
