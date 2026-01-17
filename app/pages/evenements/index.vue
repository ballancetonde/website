<script setup>
const { data: nextEvents } = await useAsyncData(useRoute().path + '-next', () => {
  return queryCollection('events').where('date', '>=', new Date().toISOString().split('T')[0]).order('date', 'ASC').all()
})
const { data: previousEvents } = await useAsyncData(useRoute().path + '-prev', () => {
  return queryCollection('events').where('date', '<', new Date().toISOString().split('T')[0]).order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Nos événements',
  description: 'Nous organisons deux événements par mois, à Ballan Miré, pour partager des moments ludiques et conviviaux autour d\'une grande variété de jeux',
})
</script>

<template>
  <UContainer>
    <UPageHeader
        title="Nos événements"
        description="Nous organisons deux événements par mois, à Ballan Miré, pour partager des moments ludiques et conviviaux autour d'une grande variété de jeux"
        class="py-[50px]"
    />

    <UPageBody>
      <UBlogPosts>
        <UBlogPost
            v-for="(post, index) in nextEvents"
            :key="index"
            :description="post.address"
            :image="post.image"
            :date="post.title"
            :title="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
            :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
      <UPageSection title="Événements passés">
        <UBlogPosts>
          <UBlogPost
              v-for="(post, index) in previousEvents"
              :key="index"
              :description="post.address"
              :image="post.image"
              :date="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
              :title="post.title"
              :ui="{
            description: 'line-clamp-2'
          }"
          />
        </UBlogPosts>
      </UPageSection>
    </UPageBody>
  </UContainer>
</template>