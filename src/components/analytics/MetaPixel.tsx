'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/* Meta (Facebook) Pixel — base code + SPA PageView tracking.
   TWO pixels fire on purpose: 1340127494387532 is the legacy Found It
   Marketing pixel (keeps its audience history warm), 1983551225834758 is
   the Found It Software pixel added 2026-08-08 for the VSL campaign — ads
   optimize against whichever pixel the spending ad account owns. fbq
   broadcasts every track() call to all initialized pixels. The Lead
   conversion fires from trackLead() in lib/analytics.ts (form submits
   only) so ad optimization never trains on junk engagement events — same
   discipline as the Google Ads wiring. */

const PIXEL_IDS = ['1340127494387532', '1983551225834758'];
const PIXEL_ID = PIXEL_IDS[1]; // noscript fallback pings the campaign pixel

export const MetaPixel = () => {
  const pathname = usePathname();
  const loaded = useRef(false);

  /* App Router client navigations don't reload the page, so re-fire
     PageView on route change. The initial PageView fires from the base
     snippet itself; skip the first effect run to avoid double-counting. */
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      return;
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          ${PIXEL_IDS.map((id) => `fbq('init', '${id}');`).join('\n          ')}
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
};
