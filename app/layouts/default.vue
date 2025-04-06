<script setup lang="ts">

const { isLoading } = useLoadingIndicator()
const appear = ref(false)
const appeared = ref(false)

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})

const route = useRoute()

const items = computed(() => [
  {
    label: 'Événements',
    to: '/evenements',
    active: route.path.startsWith('/evenements')
  },
  {
    label: 'Ludothèque',
    to: '/ludotheque',
    active: route.path.startsWith('/ludotheque')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex flex-row items-center gap-x-2">
        <img src="/ballancetonde-logo.png" class="h-16"/>
        <span>Ballan'ce Ton Dé</span>
      </div>
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UButton
          class="hidden sm:flex"
          color="primary"
          to="/adhesion"
          label="Adhésion"
      />
      <UButton
          color="neutral"
          variant="ghost"
          to="https://instagram.com/ballancetonde"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
      />
      <UButton
          color="neutral"
          variant="ghost"
          to="https://www.facebook.com/profile.php?id=61557939665694"
          target="_blank"
          icon="i-simple-icons-facebook"
          aria-label="Facebook"
      />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
      <UButton
          class="w-full"
          color="primary"
          to="/adhesion"
          label="Adhésion"
      />
    </template>
  </UHeader>
  <UMain class="relative">
    <HeroBackground
        class="absolute w-full -top-px transition-all text-(--ui-primary) shrink-0 -z-1"
        :class="[
          isLoading ? 'animate-pulse' : (appear ? '' : 'opacity-0'),
          appeared ? 'duration-[400ms]': 'duration-1000'
        ]"
    />
    <slot />
  </UMain>
  <UFooter>
    <template #left>
      <p class="text-(--ui-text-muted) text-sm">© {{ new Date().getFullYear() }} Ballan'ce Ton Dé</p>
    </template>

    <template #right>
      <UButton
          color="neutral"
          variant="ghost"
          to="https://instagram.com/ballancetonde"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
      />
      <UButton
          color="neutral"
          variant="ghost"
          to="https://www.facebook.com/profile.php?id=61557939665694"
          target="_blank"
          icon="i-simple-icons-facebook"
          aria-label="Facebook"
      />
    </template>
  </UFooter>
</template>