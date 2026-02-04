import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({
    title,
    description,
    keywords,
    image,
    type = 'website',
    schema
}) {
    const location = useLocation();
    const siteUrl = 'https://autocollectrecovery.co.uk'; // Ideally this should be an env variable or config
    const currentUrl = `${siteUrl}${location.pathname}`;
    const defaultImage = `${siteUrl}/images/auto-collect-logo.jpg`;

    // Defaults
    const metaTitle = title
        ? `${title} | Auto Collect Recovery Services`
        : 'Auto Collect Recovery Services | 24/7 Vehicle Recovery UK';

    const metaDescription = description ||
        'Fast, reliable & professional vehicle recovery across the UK. 24/7 emergency breakdown service, auction collection, and vehicle transportation.';

    const metaKeywords = keywords ||
        'vehicle recovery, breakdown service, car transport, auction collection, jump start, UK recovery, towing service, emergency roadside assistance';

    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    // Structured Data (JSON-LD)
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Auto Collect Recovery Services",
        "image": defaultImage,
        "description": metaDescription,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "338 Oakley Road",
            "addressLocality": "Luton",
            "postalCode": "LU4 9QD",
            "addressCountry": "UK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.8911, // Extracted from map link roughly
            "longitude": -0.4572
        },
        "url": siteUrl,
        "telephone": "+447384228118",
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    const jsonLd = schema || defaultSchema;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={currentUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content="Auto Collect Recovery Services" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
}
