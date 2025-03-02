<template>
  <UPageHero
      title="Bienvenue"
      description="Ballan'ce ton dé est une association de jeu de société située à Ballan-Miré. Nous organisons deux événements par mois, avec des dates qui varient, pour partager des moments ludiques et conviviaux autour d'une grande variété de jeux."
      :ui="{ container: 'md:pt-18 lg:pt-20' }"
      :links="[{to: '/adhesion', label: 'Adhérer à l\'association', icon: 'i-lucide-arrow-right', trailing: true}]"
  >
    <img src="/soiree-jeu-2.jpg" />
  </UPageHero>

</template>