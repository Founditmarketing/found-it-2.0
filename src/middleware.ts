import { NextRequest, NextResponse } from 'next/server';

/* Edge personalization: stamp the visitor's city (from Vercel's geo headers)
   into a readable cookie so the homepage hero can greet them locally.
   No external lookups, no PII beyond coarse city name. */
export function middleware(req: NextRequest) {
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
  matcher: [
    '/',
    '/google-ads-management',
    '/web-design',
    '/ai-search-optimization',
    '/social-media-management',
    '/app-development',
    '/ai-marketing',
    '/lp/:path*',
  ],
};
