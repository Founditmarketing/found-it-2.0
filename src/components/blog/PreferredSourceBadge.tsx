'use client';

import Script from 'next/script';

/* Google Preferred Sources (9/7, Trevor: "add a Google preferred sources
   badge"). The OFFICIAL button: publisher.js scans the DOM for
   [google-add-preferred-source-btn] and renders Google's own badge — one
   reader tap and founditsoftware.com surfaces preferred in their Search,
   Top Stories, and AI Overviews. Domain-level sites are eligible; no news
   registration needed. data-theme dark matches the house. If the script
   ever fails to paint, only the one quiet mono line shows — no dead link
   (the /preferences/source deeplink is deliberately not duplicated). */
export function PreferredSourceBadge() {
  return (
    <div className="mt-16 flex flex-col items-center gap-3">
      <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
        Read us first on Google
      </p>
      <div {...{ 'google-add-preferred-source-btn': '', 'data-theme': 'dark' }} />
      <Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="lazyOnload" />
    </div>
  );
}
