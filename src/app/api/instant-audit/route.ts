import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/server/guards';

export const runtime = 'nodejs';
export const maxDuration = 15;

interface CheckResult {
  label: string;
  pass: boolean;
  detail: string;
  /** Plain-business translation of what a failed check costs. May contain a
   *  `{city}` placeholder the client replaces with the visitor's geo city. */
  impact?: string;
}

/** Block obviously private/internal targets (SSRF guard). */
function isSafeHostname(host: string): boolean {
  const h = host.toLowerCase();
  if (!h.includes('.')) return false;
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return false;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) {
    const [a, b] = h.split('.').map(Number);
    if (a === 10 || a === 127 || a === 0 || (a === 192 && b === 168) || (a === 172 && b >= 16 && b <= 31) || (a === 169 && b === 254)) {
      return false;
    }
  }
  return true;
}

const MAX_HOPS = 3;
const MAX_BYTES = 500_000;

/**
 * Fetch with redirects followed MANUALLY so every hop is re-validated against
 * the private-network blocklist — redirect:'follow' would let a public URL
 * bounce the request to localhost/private ranges (SSRF).
 */
async function safeFetch(startUrl: URL): Promise<{ res: Response; finalUrl: string } | null> {
  let current = startUrl;
  for (let hop = 0; hop <= MAX_HOPS; hop++) {
    if (!/^https?:$/.test(current.protocol) || !isSafeHostname(current.hostname)) return null;
    const res = await fetch(current.toString(), {
      redirect: 'manual',
      signal: AbortSignal.timeout(6500),
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; FoundItAuditBot/1.0; +https://founditmarketing.com)',
        accept: 'text/html,application/xhtml+xml',
      },
    });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (!loc) return null;
      try { current = new URL(loc, current); } catch { return null; }
      continue;
    }
    return { res, finalUrl: current.toString() };
  }
  return null;
}

/** Read at most maxBytes from the response body, then cancel the stream. */
async function readCapped(res: Response, maxBytes: number): Promise<{ text: string; bytes: number }> {
  const reader = res.body?.getReader();
  if (!reader) return { text: '', bytes: 0 };
  const chunks: Buffer[] = [];
  let total = 0;
  while (total < maxBytes) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(Buffer.from(value));
    total += value.byteLength;
  }
  try { await reader.cancel(); } catch { /* already done */ }
  return { text: Buffer.concat(chunks).toString('utf8'), bytes: total };
}

export async function POST(req: Request) {
  try {
    // Free tool that makes outbound fetches — throttle per IP.
    const ip = clientIp(req);
    if (!rateLimit(`audit:${ip}`, 6, 60_000) || !rateLimit(`audit-day:${ip}`, 60, 86_400_000)) {
      return NextResponse.json({ error: 'Too many scans. Try again in a minute.' }, { status: 429 });
    }

    const { url } = await req.json();
    if (!url || typeof url !== 'string' || url.length > 500) {
      return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
    }

    let target: URL;
    try {
      target = new URL(/^https?:\/\//i.test(url.trim()) ? url.trim() : `https://${url.trim()}`);
    } catch {
      return NextResponse.json({ error: 'That does not look like a valid URL.' }, { status: 400 });
    }
    if (!isSafeHostname(target.hostname)) {
      return NextResponse.json({ error: 'That URL cannot be scanned.' }, { status: 400 });
    }

    const started = Date.now();
    let fetched: { res: Response; finalUrl: string } | null;
    try {
      fetched = await safeFetch(target);
    } catch {
      fetched = null;
    }
    if (!fetched) {
      return NextResponse.json(
        { error: 'We could not reach that site. Check the URL and try again.' },
        { status: 422 }
      );
    }
    const { res } = fetched;
    const ttfbMs = Date.now() - started;
    const { text: raw, bytes } = await readCapped(res, MAX_BYTES);
    const html = raw.slice(0, 400_000);
    const totalMs = Date.now() - started;
    const sizeKB = Math.round(bytes / 1024);
    const lower = html.toLowerCase();

    const pick = (re: RegExp) => {
      const m = html.match(re);
      return m ? m[1].trim().replace(/\s+/g, ' ') : null;
    };
    const title = pick(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const metaDesc = pick(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i)
      || pick(/<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["']/i);
    const hasH1 = /<h1[\s>]/i.test(html);
    const hasViewport = /name=["']viewport["']/i.test(html);
    const hasSchema = /application\/ld\+json/i.test(html);
    const hasOg = /property=["']og:title["']/i.test(html);
    const isHttps = fetched.finalUrl.startsWith('https://');

    const hasGtag = lower.includes('googletagmanager.com/gtag') || lower.includes('gtag(');
    const hasGtm = lower.includes('googletagmanager.com/gtm.js') || /gtm-[a-z0-9]+/i.test(html);
    const hasMetaPixel = lower.includes('fbq(') || lower.includes('connect.facebook.net');

    const ttfbPass = ttfbMs < 1200;
    const weightPass = sizeKB < 900;
    const titlePass = !!title && title.length >= 15 && title.length <= 70;
    const descPass = !!metaDesc && metaDesc.length >= 50;
    const tagPass = hasGtag || hasGtm;

    const speedChecks: CheckResult[] = [
      {
        label: 'Server response time',
        pass: ttfbPass,
        detail: `${ttfbMs}ms to first byte ${ttfbMs < 600 ? '(fast)' : ttfbMs < 1200 ? '(acceptable)' : '(slow — costs conversions)'}`,
        impact: ttfbPass ? undefined : 'Every extra second sends mobile visitors back to Google — straight to the next {city} business on the list. Slow responses quietly kill calls all week.',
      },
      {
        label: 'Page weight',
        pass: weightPass,
        detail: `${sizeKB}KB of HTML${sizeKB >= 900 ? ' — heavy for mobile' : ''}`,
        impact: weightPass ? undefined : 'On a cell connection this page crawls. Most mobile visitors give up before your phone number even loads.',
      },
      {
        label: 'HTTPS security',
        pass: isHttps,
        detail: isHttps ? 'Secure connection' : 'Not serving over HTTPS',
        impact: isHttps ? undefined : 'Browsers stamp "Not Secure" next to your name. That warning alone sends customers to a competitor.',
      },
    ];

    const seoChecks: CheckResult[] = [
      {
        label: 'Title tag',
        pass: titlePass,
        detail: title ? `"${title.slice(0, 60)}${title.length > 60 ? '…' : ''}" (${title.length} chars)` : 'Missing',
        impact: titlePass ? undefined : 'Your title is the headline of your free Google listing. A weak or missing one hands the click to the next result down — on every single search.',
      },
      {
        label: 'Meta description',
        pass: descPass,
        detail: metaDesc ? `${metaDesc.length} chars` : 'Missing — Google writes its own',
        impact: descPass ? undefined : "Google is writing your sales pitch for you — and it's never as convincing as one built to win the click in {city}.",
      },
      {
        label: 'H1 heading',
        pass: hasH1,
        detail: hasH1 ? 'Present' : 'Missing',
        impact: hasH1 ? undefined : "Google can't tell what this page is about, so it ranks a {city} competitor who makes it obvious.",
      },
      {
        label: 'Mobile viewport',
        pass: hasViewport,
        detail: hasViewport ? 'Configured' : 'Missing — fails mobile usability',
        impact: hasViewport ? undefined : 'Most local searches happen on a phone. Google buries sites that fail mobile usability — so you lose rankings you should own.',
      },
      {
        label: 'Structured data (AI search)',
        pass: hasSchema,
        detail: hasSchema ? 'Schema found' : 'None — invisible to AI engines like ChatGPT',
        impact: hasSchema ? undefined : "When locals ask ChatGPT or Google AI for a recommendation in {city}, you're invisible. Competitors with structured data are taking those referrals right now.",
      },
      {
        label: 'Social preview tags',
        pass: hasOg,
        detail: hasOg ? 'Open Graph present' : 'Missing',
        impact: hasOg ? undefined : 'Every time your link gets texted or shared, it shows up as a blank gray box instead of a sales pitch.',
      },
    ];

    const trackingChecks: CheckResult[] = [
      {
        label: 'Google Ads / Analytics tag',
        pass: tagPass,
        detail: tagPass ? 'Detected' : 'None found — ad spend is flying blind',
        impact: tagPass ? undefined : "Without tracking you can't see which ads make the phone ring — so the budget keeps flowing to the ones that don't.",
      },
      {
        label: 'Meta (Facebook) pixel',
        pass: hasMetaPixel,
        detail: hasMetaPixel ? 'Detected' : 'Not found',
        impact: hasMetaPixel ? undefined : "Most first-time visitors leave without calling. With no pixel, you can't follow them on Facebook and Instagram to bring them back.",
      },
    ];

    const all = [...speedChecks, ...seoChecks, ...trackingChecks];
    const score = Math.round((all.filter((c) => c.pass).length / all.length) * 100);
    const grade: 'green' | 'yellow' | 'red' = score >= 75 ? 'green' : score >= 45 ? 'yellow' : 'red';

    return NextResponse.json({
      // Clamped to the report endpoint's 500-char schema cap so a long
      // redirect chain can't make the emailed-report submission fail.
      url: fetched.finalUrl.slice(0, 500),
      scannedMs: totalMs,
      score,
      grade,
      groups: [
        { name: 'Speed', checks: speedChecks },
        { name: 'SEO Foundations', checks: seoChecks },
        { name: 'Tracking Stack', checks: trackingChecks },
      ],
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Scan failed. Try again in a moment.' }, { status: 500 });
  }
}
