import siteSettings from "@/data/site-settings.json";
import homepage from "@/data/homepage.json";
import navigation from "@/data/navigation.json";
import socialLinks from "@/data/social-links.json";
import {
  homepageSchema,
  navigationSchema,
  siteSettingsSchema,
  socialLinksSchema,
  type HomepageContent,
  type NavigationData,
  type SiteSettings,
  type SocialLinksData
} from "@/lib/content/schemas";

const parsedSiteSettings = siteSettingsSchema.parse(siteSettings);
const parsedHomepage = homepageSchema.parse(homepage);
const parsedNavigation = navigationSchema.parse(navigation);
const parsedSocialLinks = socialLinksSchema.parse(socialLinks);

export function getSiteSettings(): SiteSettings {
  return parsedSiteSettings;
}

export function getHomepageContent(): HomepageContent {
  return parsedHomepage;
}

export function getNavigation(): NavigationData {
  return parsedNavigation;
}

export function getSocialLinks(): SocialLinksData {
  return parsedSocialLinks;
}

export function getSiteUrl() {
  return getSiteSettings().siteUrl;
}

export function getAdminUrl() {
  return new URL("/admin/", getSiteUrl()).toString();
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function getPhoneHref() {
  const site = getSiteSettings();
  return `tel:${site.contact.phone.replace(/\s+/g, "")}`;
}

export function getWhatsappHref(message = "Merhaba, bilgi almak istiyorum.") {
  const site = getSiteSettings();
  const phone = site.contact.whatsapp.replace(/[^\d+]/g, "");
  return `https://wa.me/${phone.replace(/^\+/, "")}?text=${encodeURIComponent(message)}`;
}
