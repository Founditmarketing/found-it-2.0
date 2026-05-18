'use client';

import Script from 'next/script';

export const GoogleTag = () => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17848789749"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
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
