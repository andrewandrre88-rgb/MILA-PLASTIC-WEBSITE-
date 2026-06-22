import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export default function useSEO({ title, description, keywords, canonicalPath }: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = `${title} | Mila Plastics - High-Performance Sprayers & Pumps`;

    // 2. Helper to set/create meta element
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Update description meta
    setMetaTag("name", "description", description);

    // 4. Update keywords meta (default incorporating user target keywords)
    const defaultKeywords = "trigger sprayer, trigger sprayer factory, mist sprayer, foam pump, lotion pump, sprayer manufacturer, plastic sprayers, detergent spray bottles, industrial sprayer factory";
    const mergedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    setMetaTag("name", "keywords", mergedKeywords);

    // 5. Update Open Graph (Facebook/LinkedIn) tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    
    const canonicalUrl = `https://mila.tech${canonicalPath || window.location.pathname}`;
    setMetaTag("property", "og:url", canonicalUrl);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 7. Dynamic JSON-LD Structured Data Schema for Search Engines
    let schemaScript = document.getElementById("mila-jsonld-schema") as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "mila-jsonld-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "name": title,
      "description": description,
      "brand": {
        "@type": "Brand",
        "name": "Mila Plastics"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Mila Plastics Factory",
        "url": "https://mila.tech",
        "logo": "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/166723e1-e79d-4b0d-b111-ac1545336904-modified.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+86-181-5747-6044",
          "contactType": "sales",
          "areaServed": "Worldwide"
        }
      }
    };
    schemaScript.text = JSON.stringify(schemaData);

  }, [title, description, keywords, canonicalPath]);
}
