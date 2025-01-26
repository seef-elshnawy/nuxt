import * as path from "path";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  css: ["~/assets/css/main.scss"],
  vite: {
    plugins: [tailwindcss()],
  },
});
