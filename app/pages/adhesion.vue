<template>
  <UPageHero
      title="Adhésion"
  >
    <template #description>
      Rejoignez l'aventure et lancez vos dés !<br><br>Ballan'ce ton dé est une association de jeu de société située à Ballan-Miré. Nous organisons deux événements par mois, avec des dates qui varient, pour partager des moments ludiques et conviviaux autour d'une grande variété de jeux.
    </template>
  </UPageHero>
  <UPageSection title="Pourquoi adhérer ?" orientation="horizontal" :features="[
      {title: 'Accès illimité', description: 'à toutes nos soirées jeux pendant l\'année scolaire.', icon: 'i-lucide-dices'},
      {title: 'Découverte', description: 'de nouveaux jeux régulièrement grâce à notre collection.', icon: 'i-lucide-dices'},
      {title: 'Rencontres et convivialité', description: 'avec d\'autres passionnés de jeux de société.', icon: 'i-lucide-dices'},
  ]">
    <img src="/soiree-jeu-1.jpg" />
  </UPageSection>
  <UPageSection title="Tarifs d’adhésion" orientation="horizontal" reverse description="L'adhésion est valable pour toute l’année scolaire (de septembre à août)." :features="[
      {title: 'Tarif découverte (première soirée)', description: 'Gratuit', icon: 'i-lucide-dices'},
      {title: 'Tarif individuel', description: '15€ / année scolaire', icon: 'i-lucide-dices'},
      {title: 'Tarif familial - 2 adhésions individuelles', description: 'Dès que deux personnes du même foyer ont une adhésion individuelle, les autres membres de la famille peuvent les accompagner librement aux événements.', icon: 'i-lucide-dices'},

  ]">
    <img src="/soiree-jeu-2.jpg" />
  </UPageSection>
  <UPageSection title="Comment adhérer ?" orientation="horizontal" :features="[
      {title: 'Remplissez notre formulaire d\'adhésion', description: 'en ligne ou lors de l’un de nos événements.', icon: 'i-lucide-dices'},
      {title: 'Effectuez votre règlement', description: '', icon: 'i-lucide-dices'},
      {title: 'Profitez de vos soirées jeux sans limite !', description: '', icon: 'i-lucide-dices'},
  ]">
    <img src="/soiree-jeu-3.jpg" />
  </UPageSection>

</template>
<script setup lang="ts">
</script>