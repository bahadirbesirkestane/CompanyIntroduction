import type { CollectionEntry } from "astro:content";
import { getAbsoluteUrl, getSiteSettings, getSiteUrl } from "@/lib/content/site";

type SeoInput = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  image?: string;
};

export function buildMeta(input: SeoInput = {}) {
  const site = getSiteSettings();
  const title = input.title ? `${input.title} | ${site.siteName}` : site.defaultSeo.title;
  const canonical = input.canonical
    ? input.canonical.startsWith("http")
      ? input.canonical
      : new URL(input.canonical, getSiteUrl()).toString()
    : undefined;

  return {
    title,
    description: input.description ?? site.defaultSeo.description,
    canonical,
    noindex: input.noindex ?? false,
    image: input.image ? getAbsoluteUrl(input.image) : site.defaultSeo.ogImage ? getAbsoluteUrl(site.defaultSeo.ogImage) : undefined
  };
}

export function buildCollectionSeo(
  entry: CollectionEntry<"services"> | CollectionEntry<"pages"> | CollectionEntry<"areas">,
  options?: { canonicalPath?: string }
) {
  return buildMeta({
    title: entry.data.seo?.title ?? entry.data.title,
    description: entry.data.seo?.description ?? entry.data.summary,
    canonical: entry.data.seo?.canonical ?? options?.canonicalPath,
    noindex: entry.data.seo?.noindex
  });
}
