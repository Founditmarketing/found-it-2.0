import Script from 'next/script';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": name,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Found It Marketing",
            "url": "https://www.founditsoftware.com"
        },
        "areaServed": {
            "@type": "City",
            "name": "Alexandria",
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "LA"
            }
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Custom AI Software Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name
                    }
                }
            ]
        },
        "name": name,
        "description": description,
        "url": url
    };

    if (image) {
        Object.assign(schema, { image });
    }

    return (
        <Script
            id={`service-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
