import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import siteSettings from "./src/data/site-settings.json" with { type: "json" };

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: siteSettings.siteUrl,
  integrations: [tailwind()],
  output: "hybrid",
  adapter: cloudflare()
});