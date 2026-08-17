'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { createCalendlyListener } from '@/lib/analytics';

/* One env var moves the whole site to a different Ads account if the new
   campaign build's conversion ID ever differs from the legacy tag. */
const AW_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-17848789749';

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
        `}
            </Script>
        </>
    );
};
