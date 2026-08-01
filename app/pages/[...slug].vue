<script setup lang="ts">
const { data: page } = await useAsyncData(useRoute().path, () => {
  return queryCollection('pages').path(useRoute().path).first()
})

watch(page, (page) => {
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page introuvable', fatal: true })
  }
}, { immediate: true })
</script>

<template>
  <ContentRenderer :value="page" />
</template>