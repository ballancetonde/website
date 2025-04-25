// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/scripts',
    '@nuxthub/core'
  ],
  ui: {
    colorMode: false,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})