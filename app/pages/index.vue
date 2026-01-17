<script setup lang="ts">
const {data: post} = await useAsyncData(useRoute().path + '-next', () => {
  return queryCollection('events').where('date', '>=', new Date().toISOString().split('T')[0]).order('date', 'ASC').first()
})
</script>

<template>
  <UPageHero
      title="Bienvenue"
      description="Ballan'ce ton dé est une association de jeu de société située à Ballan-Miré. Nous organisons deux événements par mois, avec des dates qui varient, pour partager des moments ludiques et conviviaux autour d'une grande variété de jeux."
      :ui="{ container: 'md:pt-18 lg:pt-20' }"
      :links="[{to: '/evenements', label: 'Nos événements', icon: 'i-lucide-calendar-days', variant: 'subtle', color: 'neutral'}, {to: '/adhesion', label: 'Adhérer à l\'association', icon: 'i-lucide-arrow-right', trailing: true}]"
  >
    <UPageSection title="Prochain événement" v-if="post"
                  :links="[{to: '/evenements', label: 'Nos autres événements', icon: 'i-lucide-arrow-right', trailing: true}]" :ui="{description: 'text-left'}">
      <template #description>
        <UBlogPosts>
          <UBlogPost
              :description="post.address"
              :image="post.image"
              :date="post.title"
              :title="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
              :orientation="'horizontal'"
              class="col-span-full"
              :ui="{
              description: 'line-clamp-2'
            }"
          />
        </UBlogPosts>
      </template>
    </UPageSection>
    <img src="/soiree-jeu-2.jpg" />
  </UPageHero>

</template>