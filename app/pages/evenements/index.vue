<script setup>
const { data: nextEvents } = await useAsyncData(useRoute().path + '-next', () => {
  return queryCollection('events').where('start_date', '>=', new Date().toISOString().split('T')[0]).order('start_date', 'ASC').all()
})
const { data: previousEvents } = await useAsyncData(useRoute().path + '-prev', () => {
  return queryCollection('events').where('start_date', '<', new Date().toISOString().split('T')[0]).order('start_date', 'DESC').all()
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
            :to="post.to"
            :title="formatEventDate(post.start_date, post.end_date)"
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
              :title="formatEventDate(post.start_date, post.end_date)"
              :date="post.title"
              :ui="{
            description: 'line-clamp-2'
          }"
          />
        </UBlogPosts>
      </UPageSection>
    </UPageBody>
  </UContainer>
</template>