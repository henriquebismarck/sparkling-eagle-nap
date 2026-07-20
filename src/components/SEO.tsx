"use client";

import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "book";
  noIndex?: boolean;
  noFollow?: boolean;
}

export const SEO = ({
  title = "A Direita – História, Princípios e Evolução do Conservadorismo | eBook Educativo",
  description = "Descubra a história e os princípios do pensamento conservador de forma clara e organizada. eBook digital com 7 capítulos, bônus exclusivos e acesso imediato. Ideal para estudantes, professores e pesquisadores.",
  image = "https://adireita.com.br/og-image.jpg",
  url = "https://adireita.com.br/",
  type = "website",
  noIndex = false,
  noFollow = false,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        if (property) {
          tag.setAttribute("property", name);
        } else {
          tag.setAttribute("name", name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Update canonical
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Update meta tags
    updateMetaTag("title", title);
    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:card", "summary_large_image");

    // Robots
    const robotsContent = `${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`;
    updateMetaTag("robots", robotsContent);

  }, [title, description, image, url, type, noIndex, noFollow]);

  return null; // This component doesn't render anything
};

export default SEO;