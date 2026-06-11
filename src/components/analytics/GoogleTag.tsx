'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { createCalendlyListener } from '@/lib/analytics';

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
                src="https://www.googletagmanager.com/gtag/js?id=AW-17848789749"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17848789749');
        `}
            </Script>
        </>
    );
};
