import Script from 'next/script';
import { phoneTel } from '@/lib/phone';

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Found It Marketing",
        "image": "https://founditmarketing.com/og-image.png",
        "@id": "https://founditmarketing.com",
        "url": "https://founditmarketing.com",
        "telephone": `+1${phoneTel}`,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "3803 Rue Left Bank",
            "addressLocality": "Alexandria",
            "addressRegion": "LA",
            "postalCode": "71303",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.2829,
            "longitude": -92.4812
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Alexandria",
                "sameAs": "https://en.wikipedia.org/wiki/Alexandria,_Louisiana"
            },
            {
                "@type": "City",
                "name": "Pineville",
                "sameAs": "https://en.wikipedia.org/wiki/Pineville,_Louisiana"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Central Louisiana",
                "sameAs": "https://en.wikipedia.org/wiki/Central_Louisiana"
            }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/founditmarketing",
            "https://www.instagram.com/founditmarketing",
            "https://www.linkedin.com/company/founditmarketing",
            "https://twitter.com/founditagency",
            "https://www.youtube.com/@founditmarketing"
        ]
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
