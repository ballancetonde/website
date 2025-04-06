<script setup lang="ts">
const { data: game } = await useAsyncData(useRoute().path, () => {
  return queryCollection('games').path(useRoute().path).first()
})

const youtubeRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user|shorts)\/))([^\?&\"'>]+)/;

function extractYouTubeId(url: string): string | null {
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
}

useSeoMeta({
  title: game.value.title,
  description: game.value.description,
})
</script>

<template>
  <UContainer>
    <UPage :ui="{left: 'lg:col-span-3', center: 'lg:col-span-7'}">
      <template #left>
        <div>
          <UButton to="/ludotheque" label="Retour" icon="i-lucide-arrow-left" color="primary" variant="ghost" class="my-4"/>
          <img :src="game.image" />
        </div>

      </template>

      <UPageHeader
          :title="game.title"
          class="py-[50px]"
      >
        <template #headline>
          <UBreadcrumb :items="[{to: '/ludotheque', label: 'Ludothèque'}]"/>
        </template>

        <template #description>
          <div class="space-x-3">
            <UBadge variant="subtle" icon="i-lucide-users" v-if="game.players">{{game.players.min}} <span v-if="game.players.min !== game.players.max">à {{game.players.max}}</span>joueurs</UBadge>
            <UBadge variant="subtle" icon="i-lucide-hourglass" v-if="game.play_time_mins">{{game.play_time_mins}} minutes</UBadge>
          </div>
        </template>
      </UPageHeader>
      <UPageBody>

        <ContentRenderer :value="game" />

        <USeparator v-if="game.video" />

        <ScriptYouTubePlayer
            v-if="game.video"
            above-the-fold
            :video-id="extractYouTubeId(game.video)"
        >
          <template #awaitingLoad>
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
            </div>
          </template>
        </ScriptYouTubePlayer>

      </UPageBody>
    </UPage>
  </UContainer>
</template>