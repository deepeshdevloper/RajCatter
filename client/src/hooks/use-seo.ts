import { useEffect } from "react";

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | Raj Catters - Luxury Catering Bhopal`;
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');

      if (metaDescription) metaDescription.setAttribute("content", description);
      if (ogTitle) ogTitle.setAttribute("content", title);
      if (ogDescription) ogDescription.setAttribute("content", description);
      if (twitterTitle) twitterTitle.setAttribute("content", title);
      if (twitterDescription) twitterDescription.setAttribute("content", description);
    }
  }, [title, description]);
}