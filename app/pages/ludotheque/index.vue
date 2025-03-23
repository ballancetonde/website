<script setup>
const { data: games } = await useAsyncData(useRoute().path, () => {
  return queryCollection('games').all()
})
</script>

<template>
  <UContainer>
    <UPageHeader
        title="Notre ludothèque"
        description="Retrouvez-ici nos différents jeux"
        class="py-[50px]"
    />

    <UPageBody>
      <UBlogPosts>
        <UBlogPost
            v-for="(game, index) in games"
            :key="index"
            :description="game.description"
            :image="game.image"
            :title="game.title"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>