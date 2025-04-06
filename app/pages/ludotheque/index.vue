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
            :to="game.path"
            :ui="{header: 'aspect-square'}"
        >
          <template #description>
            <div class="space-x-3">
              <UBadge variant="subtle" icon="i-lucide-users" v-if="game.players">{{game.players.min}} <span v-if="game.players.min !== game.players.max">à {{game.players.max}}</span>joueurs</UBadge>
              <UBadge variant="subtle" icon="i-lucide-hourglass" v-if="game.play_time_mins">{{game.play_time_mins}} minutes</UBadge>
            </div>
          </template>
        </UBlogPost>
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>