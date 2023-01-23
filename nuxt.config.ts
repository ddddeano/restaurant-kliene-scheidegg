// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/default.scss", "@/assets/styles/style.scss"],
  imports: {
    dirs: ["stores", "composables"],
  },
  modules: [["nuxt-icon"], ["@pinia/nuxt", { autoImports: [["defineStore", "definePiniaStore"]] }]],
  app: {
    head: {
      title: "Scheidegg",
      meta: [{ name: "description", content: "buttons" }],
      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Koulen&display=swap" }],
    },
  },
});
