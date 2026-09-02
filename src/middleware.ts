import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  /* Uppercase rescue (9/2): the brand sets URLs in mono CAPS on graphics and
     covers, and Facebook linkifies them verbatim — FOUNDITSOFTWARE.COM/THE-RECORD
     404'd because paths are case-sensitive. Any path with an uppercase letter
     redirects to its lowercase twin; every route on this site is lowercase. */
  const { pathname } = req.nextUrl;
  if (/[A-Z]/.test(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  /* Edge personalization: stamp the visitor's city (from Vercel's geo headers)
     into a readable cookie so the homepage hero can greet them locally.
     No external lookups, no PII beyond coarse city name. */
  const res = NextResponse.next();
  if (!req.cookies.get('fi_city')) {
    const raw = req.headers.get('x-vercel-ip-city');
    if (raw) {
      try {
        const city = decodeURIComponent(raw).slice(0, 40);
        if (/^[a-zA-Z .'-]{2,}$/.test(city)) {
          res.cookies.set('fi_city', city, { maxAge: 60 * 60 * 24 * 30, path: '/', sameSite: 'lax' });
        }
      } catch { /* ignore malformed header */ }
    }
  }
  return res;
}

export const config = {
  /* Broad matcher (was a hand-kept pillar list): everything except api,
     Next internals, and files with extensions. The city cookie now sets on
     first touch of any page instead of only pillar pages — same cookie,
     earlier — and the uppercase rescue needs sitewide coverage anyway. */
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
