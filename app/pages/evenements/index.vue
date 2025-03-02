<script setup>
const { data: nextEvents } = await useAsyncData(useRoute().path + '-next', () => {
  return queryCollection('events').where('date', '>', new Date().toISOString()).order('date', 'ASC').all()
})
const { data: previousEvents } = await useAsyncData(useRoute().path + '-prev', () => {
  return queryCollection('events').where('date', '<', new Date().toISOString()).order('date', 'DESC').all()
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
            :title="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
            :orientation="'horizontal'"
            class="col-span-full"
            :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
      <UPageSection title="Événements passées">
        <UBlogPosts>
          <UBlogPost
              v-for="(post, index) in previousEvents"
              :key="index"
              :description="post.address"
              :image="post.image"
              :title="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
              :ui="{
            description: 'line-clamp-2'
          }"
          />
        </UBlogPosts>
      </UPageSection>
    </UPageBody>
  </UContainer>
</template>