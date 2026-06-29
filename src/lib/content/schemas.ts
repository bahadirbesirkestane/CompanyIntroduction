import { z } from "astro:content";

export const siteSettingsSchema = z.object({
  siteUrl: z.string().url(),
  siteName: z.string(),
  slogan: z.string(),
  logo: z.string(),
  contact: z.object({
    phone: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
    address: z.string(),
    mapEmbedUrl: z.string().url().or(z.literal(""))
  }),
  businessHours: z.array(
    z.object({
      day: z.string(),
      opens: z.string(),
      closes: z.string(),
      isClosed: z.boolean().default(false)
    })
  ),
  social: z.object({
    facebook: z.string(),
    instagram: z.string(),
    youtube: z.string()
  }),
  defaultSeo: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional()
  })
});

export const homepageSchema = z.object({
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    secondaryCtaLabel: z.string(),
    secondaryCtaHref: z.string()
  }),
  sections: z.object({
    servicesEyebrow: z.string(),
    servicesTitle: z.string(),
    servicesText: z.string(),
    servicesCtaLabel: z.string(),
    servicesCtaHref: z.string(),
    faqEyebrow: z.string(),
    faqTitle: z.string(),
    faqText: z.string(),
    faqCtaLabel: z.string(),
    faqCtaHref: z.string(),
    areasEyebrow: z.string(),
    areasTitle: z.string(),
    areasText: z.string(),
    areasCtaLabel: z.string(),
    areasCtaHref: z.string(),
    testimonialsEyebrow: z.string(),
    testimonialsTitle: z.string(),
    testimonialsText: z.string(),
    testimonialsCtaLabel: z.string(),
    testimonialsCtaHref: z.string()
  }),
  cta: z.object({
    eyebrow: z.string(),
    title: z.string(),
    text: z.string(),
    buttonLabel: z.string(),
    buttonHref: z.string()
  })
});

export const navigationSchema = z.object({
  main: z.array(
    z.object({
      label: z.string(),
      href: z.string()
    })
  ),
  footerGroups: z.array(
    z.object({
      title: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
    })
  ),
  footerBottom: z.array(
    z.object({
      label: z.string(),
      href: z.string()
    })
  )
});

export const socialLinksSchema = z.object({
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string()
    })
  )
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type HomepageContent = z.infer<typeof homepageSchema>;
export type NavigationData = z.infer<typeof navigationSchema>;
export type SocialLinksData = z.infer<typeof socialLinksSchema>;
