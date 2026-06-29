import type { CollectionEntry } from "astro:content";
import { getAbsoluteUrl, getSiteSettings, getSocialLinks } from "@/lib/content/site";

type StructuredData = Record<string, unknown>;

type PageSchemaInput = {
  title: string;
  description?: string;
  canonical?: string;
};

export function buildBaseSchemas(input: PageSchemaInput): StructuredData[] {
  const site = getSiteSettings();
  const socialLinks = getSocialLinks();
  const pageUrl = input.canonical ?? site.siteUrl;
  const openingHoursSpecification = site.businessHours
    .filter((item) => !item.isClosed)
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${item.day}`,
      opens: item.opens,
      closes: item.closes
    }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: site.siteUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: site.siteName,
      url: site.siteUrl,
      telephone: site.contact.phone,
      email: site.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address
      },
      openingHoursSpecification,
      sameAs: socialLinks.links.map((item) => item.url).filter((url) => Boolean(url) && url !== "#")
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: input.title,
      description: input.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: site.siteName,
        url: site.siteUrl
      }
    }
  ];
}

export function buildContactPageSchema() {
  const site = getSiteSettings();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${site.siteName} Iletisim`,
    url: getAbsoluteUrl("/iletisim/"),
    mainEntity: {
      "@type": "Organization",
      name: site.siteName,
      telephone: site.contact.phone,
      email: site.contact.email
    }
  };
}

export function buildServicePageSchema(
  entry: CollectionEntry<"services">,
  canonical: string
) {
  const site = getSiteSettings();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: entry.data.title,
    description: entry.data.summary,
    serviceType: entry.data.serviceType ?? entry.data.title,
    provider: {
      "@type": "LocalBusiness",
      name: site.siteName,
      telephone: site.contact.phone,
      areaServed: {
        "@type": "AdministrativeArea",
        name: site.contact.address
      }
    },
    url: canonical
  };
}

export function buildAreaPageSchema(
  entry: CollectionEntry<"areas">,
  canonical: string
) {
  const site = getSiteSettings();

  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: entry.data.title,
    description: entry.data.summary,
    url: canonical,
    containedInPlace: {
      "@type": entry.data.serviceAreaType,
      name: entry.data.title
    },
    provider: {
      "@type": "LocalBusiness",
      name: site.siteName,
      telephone: site.contact.phone
    }
  };
}
