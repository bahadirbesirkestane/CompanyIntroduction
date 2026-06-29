import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import siteSettings from "./src/data/site-settings.json" with { type: "json" };

export default defineConfig({
  site: siteSettings.siteUrl,
  integrations: [tailwind()],
  output: "static"
});
