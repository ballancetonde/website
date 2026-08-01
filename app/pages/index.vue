<script setup lang="ts">
import {formatEventDate} from "~/utils/formatEventDate.ts";

const {data: post} = await useAsyncData(useRoute().path + '-next', () => {
  return queryCollection('events').where('start_date', '>=', new Date().toISOString().split('T')[0]).order('start_date', 'ASC').first()
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
              :to="post.to"
              :title="formatEventDate(post.start_date, post.end_date)"
              :orientation="'horizontal'"
              class="col-span-full"
              :ui="{
              description: 'line-clamp-2'
            }"
          />
        </UBlogPosts>
      </template>
    </UPageSection>
  </UPageHero>

</template>