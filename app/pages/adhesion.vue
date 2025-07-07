<script setup lang="ts">
useSeoMeta({
  title: 'Adhésion',
  description: 'Rejoignez l\'aventure et lancez vos dés ! Ballan\'ce ton dé est une association de jeu de société située à Ballan-Miré. Nous organisons deux événements par mois, avec des dates qui varient, pour partager des moments ludiques et conviviaux autour d\'une grande variété de jeux.',
})
</script>

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
  <UPageSection>
    <MDC value="Je certifie l’exactitude des informations fournies lors de l'adhésion et m’engage à prévenir l’association de toute modification.

## Autorisation relative au droit à l’image des adhérents de l’association Ballan’ce Ton Dé

Dans le cadre de notre association Ballan Ce ton Dé, des photos peuvent être prise et utilisées en vue de promouvoir nos activités et notre association.

Lors de votre inscription, vous pourrez choisir d'autoriser ou non la prise et la diffusion de photos **de moi (ou du mineur dont j'ai la charge)** pour la communication de l'association, les partenaires de l’association dans le milieu ludique (associations, boutiques de jeux etc.), les structures organisant des festivals et manifestations auxquelles l’association participe ainsi que les partenaires institutionnels (Centre social, M.J.C., Mairie de Ballan-Miré etc…) et ce à des fins non commerciales.

L’autorisation vaut pendant <ins>toute la durée de l’adhésion et se prolonge au-delà</ins> dés lors que les images sont utilisées conformément aux circonstances qui avaient justifié l’autorisation.

*Pour information, la prise et l’utilisation de photos de groupe lors d’évènements d’actualité, manifestation publique et dans des lieux publiques ne sont pas soumise à une autorisation individuelle des personnes photographiées sous réserve de ne pas exposer une personne comme étant le sujet principal de l’image et ne pas excéder le droit à l’information (pas de détournement de l’objet et d’utilisation à des fins commerciales).*" />
    <iframe src="https://www.helloasso.com/associations/ballan-ce-ton-de/adhesions/adhesion-2025-2026/widget" class="w-full h-[1600px]" allowtransparency="true" />
  </UPageSection>
</template>