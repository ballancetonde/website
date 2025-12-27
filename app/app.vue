<script setup lang="ts">
import { fr } from '@nuxt/ui/locale'

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

useSeoMeta({
  titleTemplate: 'Ballan\'ce Ton Dé - %s',
  title: 'Association de jeux de société à Ballan-Miré',
  description: 'Venez découvrir une communauté passionnée de jeux de société à Ballan-Miré ! Que vous soyez débutant ou expert, rejoignez-nous pour des soirées ludiques conviviales et animées. Ambiance garantie !',
})
</script>

<template>
  <UApp :locale="fr">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>