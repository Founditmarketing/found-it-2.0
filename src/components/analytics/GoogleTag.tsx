'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { createCalendlyListener } from '@/lib/analytics';

/* One env var moves the whole site to a different Ads account if the new
   campaign build's conversion ID ever differs from the legacy tag. */
const AW_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-17848789749';
/* GA4 rides the same gtag loader. Every track* helper in lib/analytics.ts
   already sends with send_to: GA4_ID — this config line is what makes the
   property receive them. Stream: founditsoftware.com (created 8/29). */
/* Fallback hardcoded like AW_ID above: measurement IDs are public by nature
   (they ship in every page's HTML), and Vercel stored the env var as
   Sensitive = runtime-only, which a NEXT_PUBLIC_ build-time inline never sees. */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-KTTL0Y293M';

export const GoogleTag = () => {
    useEffect(() => {
        const handleCalendlyMessage = createCalendlyListener();
        window.addEventListener('message', handleCalendlyMessage);
        return () => window.removeEventListener('message', handleCalendlyMessage);
    }, []);

    return (
        <>
            {/* afterInteractive (not lazyOnload): the /thank-you page-load conversion
                is a URL-rule action and needs the config ping to fire promptly,
                especially on mobile where users bounce before browser idle. */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${AW_ID}');
          ${GA4_ID ? `gtag('config', '${GA4_ID}');` : ''}
        `}
            </Script>
        </>
    );
};
