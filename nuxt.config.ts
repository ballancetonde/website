// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-studio',
    '@nuxt/scripts',
    '@nuxthub/core',

  ],
  ui: {
    colorMode: false,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  studio: {
      route: '/admin',
      repository: {
          provider: 'github',
          owner: 'ballancetonde',
          repo: 'website',
          branch: 'main'
      },
      i18n: {
          defaultLocale: 'fr'
      }
  }
})