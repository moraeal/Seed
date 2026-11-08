import type { AuthUser } from '../auth';

const authUrl = (import.meta.env.VITE_SUPABASE_URL || 'https://wajlmbahjyazkftwaeem.supabase.co').replace(/\/$/, '');
const authKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje';

export async function verifyOfflineOwner(token: string | null, userId: string, signal: AbortSignal) {
  if (!token) throw new Error('운영자 계정으로 다시 로그인해주세요. / Please sign in again.');
  const response = await fetch(`${authUrl}/auth/v1/user`, {
    headers: { apikey: authKey, Authorization: `Bearer ${token}` }, cache: 'no-store', signal,
  });
  if (!response.ok) throw new Error('운영자 권한을 확인하지 못했습니다. / Owner verification failed.');
  const verified: AuthUser = await response.json();
  if (verified.id !== userId || verified.app_metadata?.seed_role !== 'owner') {
    throw new Error('운영자만 저장할 수 있습니다. / Owner access required.');
  }
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));
const allowedTags = new Set('ARTICLE SECTION DIV SPAN P H1 H2 H3 H4 H5 H6 FIGURE FIGCAPTION IMG A STRONG B EM I U S BLOCKQUOTE UL OL LI DL DT DD TABLE THEAD TBODY TFOOT TR TH TD CAPTION BR HR TIME SUP SUB PRE CODE'.split(' '));

// Rebuild a passive document from an allowlist. No app scripts, event handlers,
// credentials, comments, correction forms or authenticated UI enter the file.
export function passiveArticle(source: Element, base: string): HTMLElement {
  const output = document.createElement('article');
  function copy(node: Node, parent: Node) {
    if (node.nodeType === Node.TEXT_NODE) { parent.appendChild(document.createTextNode(node.textContent || '')); return; }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const element = node as Element;
    if (element.matches('script,style,link,iframe,object,embed,form,input,textarea,select,details,nav,dialog,[hidden],[role="tooltip"],#comments')) return;
    if (element.localName === 'svg') {
      // Small interface icons carry no editorial content. Retain chart SVGs
      // as isolated images, where scripts and interaction cannot execute.
      const width = Number(element.getAttribute('viewBox')?.split(/[ ,]+/)[2] || element.getAttribute('width') || 0);
      if (width < 100) return;
      const svg = element.cloneNode(true) as Element;
      svg.querySelectorAll('script,foreignObject,image,use,a,style').forEach(item => item.remove());
      [svg, ...svg.querySelectorAll('*')].forEach(item => [...item.attributes].forEach(attr => {
        if (/^on|href|style/i.test(attr.name) || /url\(/i.test(attr.value)) item.removeAttribute(attr.name);
      }));
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      const image = document.createElement('img');
      image.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(svg))))}`;
      image.alt = element.getAttribute('aria-label') || '도표 / Chart';
      parent.appendChild(image); return;
    }
    if (!allowedTags.has(element.tagName)) { element.childNodes.forEach(child => copy(child, parent)); return; }
    const next = document.createElement(element.tagName.toLowerCase());
    if (element.tagName === 'A') {
      try {
        const href = new URL(element.getAttribute('href') || '', base);
        if (['https:', 'http:', 'mailto:'].includes(href.protocol)) {
          next.setAttribute('href', href.href); next.setAttribute('target', '_blank'); next.setAttribute('rel', 'noopener noreferrer');
        }
      } catch { /* Keep link text even when the URL is invalid. */ }
    }
    if (element.tagName === 'IMG') {
      const src = element.getAttribute('src');
      if (!src) return;
      const url = new URL(src, base);
      if (!['https:', 'http:'].includes(url.protocol)) return;
      next.setAttribute('src', url.href);
      next.setAttribute('alt', element.getAttribute('alt') || '');
    }
    for (const attr of ['colspan', 'rowspan', 'scope', 'datetime']) {
      if (element.hasAttribute(attr)) next.setAttribute(attr, element.getAttribute(attr)!);
    }
    parent.appendChild(next);
    node.childNodes.forEach(child => copy(child, next));
  }
  source.childNodes.forEach(child => copy(child, output));
  return output;
}

function blobDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('이미지를 읽지 못했습니다. / Could not read image.'));
    reader.readAsDataURL(blob);
  });
}

export async function embedOfflineImages(article: HTMLElement, signal: AbortSignal) {
  const cache = new Map<string, string>();
  for (const image of article.querySelectorAll('img')) {
    signal.throwIfAborted();
    const src = image.getAttribute('src')!;
    if (src.startsWith('data:image/svg+xml;base64,')) continue;
    if (!cache.has(src)) {
      const response = await fetch(src, { signal, credentials: 'omit' });
      if (!response.ok) throw new Error(`이미지 저장 실패 / Image unavailable: ${image.alt || src}`);
      const blob = await response.blob();
      if (!/^image\/(?:png|jpeg|webp|gif|avif|svg\+xml)(?:;|$)/i.test(blob.type) || !blob.size || blob.size > 20 * 1024 * 1024) {
        throw new Error('이미지 형식 또는 크기를 확인해주세요. / Invalid image format or size.');
      }
      cache.set(src, await blobDataUrl(blob));
    }
    image.src = cache.get(src)!;
  }
}

// Load the actual rendered reading page, not the search-engine fallback (which
// can omit figures). A hidden iframe shares the owner's existing login session.
export function captureOfflineArticle(path: string, signal: AbortSignal): Promise<HTMLElement> {
  const url = new URL(path, location.origin);
  if (url.origin !== location.origin) return Promise.reject(new Error('사이트 내부 기사만 저장할 수 있습니다.'));
  return new Promise((resolve, reject) => {
    const frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true'); frame.tabIndex = -1;
    frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:1000px;height:800px;visibility:hidden';
    let stable = ''; let stableSince = 0;
    const cleanup = () => { clearInterval(poll); clearTimeout(timeout); frame.remove(); signal.removeEventListener('abort', abort); };
    const fail = (error: Error) => { cleanup(); reject(error); };
    const abort = () => fail(new DOMException('Cancelled', 'AbortError'));
    const timeout = window.setTimeout(() => fail(new Error('기사 본문을 확인하지 못했습니다. 다시 시도해주세요. / Article loading timed out.')), 45000);
    const poll = window.setInterval(() => {
      try {
        const doc = frame.contentDocument;
        const article = doc?.querySelector('main article:has(h1)');
        // Avoid loading placeholders, subscription previews and static SEO text.
        if (!article || !article.querySelector('.article-copy, .article-section, .reading-column') || article.textContent!.length < 250) return;
        const snapshot = article.innerHTML;
        if (snapshot !== stable) { stable = snapshot; stableSince = Date.now(); return; }
        if (Date.now() - stableSince < 1500) return;
        const result = passiveArticle(article, url.href);
        if (!result.querySelector('h1') || result.textContent!.length < 250) return;
        cleanup(); resolve(result);
      } catch (error) { fail(error instanceof Error ? error : new Error('기사 저장 실패')); }
    }, 250);
    signal.addEventListener('abort', abort, { once: true });
    if (signal.aborted) { abort(); return; }
    frame.src = url.href;
    document.body.appendChild(frame);
  });
}

export function offlineDocument(entries: { path: string; title: string; html: string }[], ko: boolean) {
  const saved = new Intl.DateTimeFormat(ko ? 'ko-KR' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Seoul' }).format(new Date());
  const title = ko ? '씨앗의 소리 · 오프라인 읽기' : 'SEED VOICE · Offline reading';
  return `<!doctype html><html lang="${ko ? 'ko' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'"><title>${title}</title><style>
  *{box-sizing:border-box}body{margin:0;background:#faf9f5;color:#26332f;font:18px/1.85 system-ui,-apple-system,sans-serif;overflow-wrap:anywhere}main{max-width:820px;margin:auto;padding:28px 20px}header{border-bottom:2px solid #174c3a;padding-bottom:24px}h1{font-size:clamp(1.6rem,5vw,2.5rem);line-height:1.4}h2{font-size:1.4rem;margin-top:2rem}h3{font-size:1.2rem}p{margin:1em 0}a{color:#176047}article{margin:2rem 0;padding:1rem 0}section+section{margin-top:2rem}img{display:block;width:100%;height:auto;margin:1.5rem auto}figure{margin:1.5rem 0}figcaption,small,.saved{font-size:.85rem;color:#62736b}table{border-collapse:collapse;display:block;overflow-x:auto}td,th{padding:.6rem;border:1px solid #ccd5ce}blockquote{border-left:3px solid #a68a45;margin:1.5rem 0;padding-left:1rem}.entry{border-bottom:1px solid #ccd5ce;padding-bottom:2rem}.back{font-size:.85rem}@media print{body{background:white}main{max-width:none}.entry{break-before:page}a{color:inherit}}
  </style></head><body><main><header id="contents"><strong>${title}</strong><p class="saved">${ko ? '저장 시각' : 'Saved'}: ${escapeHtml(saved)} (KST) · ${entries.length}${ko ? '편' : ' articles'}</p><p>${ko ? '본문과 이미지는 인터넷 없이 읽을 수 있습니다. 외부 링크·동영상은 인터넷 연결이 필요합니다. 수정 사항은 다시 저장해야 반영됩니다.' : 'Text and images work offline. External links and videos require internet access. Download again to receive corrections.'}</p><ol>${entries.map((entry, index) => `<li><a href="#article-${index}">${escapeHtml(entry.title)}</a></li>`).join('')}</ol></header>${entries.map((entry, index) => `<section class="entry" id="article-${index}"><p class="saved"><a href="${escapeHtml(new URL(entry.path, location.origin).href)}" target="_blank" rel="noopener noreferrer">${ko ? '온라인 원문' : 'Online original'}</a></p>${entry.html}<a class="back" href="#contents">${ko ? '저장한 기사 목록으로' : 'Back to saved articles'}</a></section>`).join('')}</main></body></html>`;
}

export function downloadOfflineDocument(html: string) {
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = `seed-offline-${new Date().toISOString().replace(/[:.]/g, '-')}.html`;
  document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}
