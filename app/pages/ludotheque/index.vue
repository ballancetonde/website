<script setup>
const { data: posts } = await useAsyncData(useRoute().path, () => {
  return queryCollection('events').order('date', 'DESC').all()
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
            v-for="(post, index) in posts"
            :key="index"
            :description="post.address"
            :image="post.image"
            :title="new Date(post.date).toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric' })"
            :orientation="index === 0 ? 'horizontal' : 'vertical'"
            :class="[index === 0 && 'col-span-full']"
            :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>