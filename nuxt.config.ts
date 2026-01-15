// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-27',
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
  },
  hub: {
    db: {
      dialect: 'sqlite',
      driver: 'd1',
      connection: { databaseId: '5305c37f-7d2d-4a8d-8f56-050f6fdaa5a4' }
    },
  },
})