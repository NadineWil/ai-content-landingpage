/*
 * SEO Component - Optimized for search engines, GEO, and AI search
 */

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "AI-Content mit Branding-Fokus | Authentischer Content für Unternehmen",
  description = "Professioneller AI-Content, der deine Marke stärkt. Strategische Content-Erstellung mit Fokus auf Branding, Authentizität und messbare Ergebnisse für Unternehmen und Selbstständige.",
  keywords = "AI-Content, Content-Erstellung, Branding, Authentizität, Unternehmen, Marketing, AI-Marketing, Content-Strategie",
  ogImage = "/images/hero-gradient.png"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    });

    // Add structured data for Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "AI-Content mit Branding-Fokus",
      "description": description,
      "url": window.location.origin,
      "serviceType": "Content Creation, AI Marketing, Brand Strategy",
      "areaServed": "DE",
      "offers": {
        "@type": "Offer",
        "description": "AI-Content-Erstellung mit Branding-Fokus für Unternehmen"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogImage]);

  return null;
}
