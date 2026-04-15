import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({ title, description, canonical, schema }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (schema) {
      const existing = document.querySelectorAll('script[data-seo-head="true"]');
      existing.forEach(el => el.remove());
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach(s => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-head', 'true');
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-head="true"]');
      scripts.forEach(el => el.remove());
    };
  }, [title, description, canonical, schema]);

  return null;
}

export function buildServiceSchema(entity: {
  h1: string;
  metaDescription: string;
  slug: string;
  schemaServiceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": entity.schemaServiceType,
    "name": entity.h1,
    "description": entity.metaDescription,
    "url": `https://www.midwestwindmillcompany.com/services/${entity.slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Midwest Windmill Company",
      "url": "https://www.midwestwindmillcompany.com",
      "telephone": "+1-660-341-8951",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22275 Youngstown Trail",
        "addressLocality": "Kirksville",
        "addressRegion": "MO",
        "postalCode": "63501",
        "addressCountry": "US"
      }
    },
    "areaServed": { "@type": "Country", "name": "United States" }
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
}
