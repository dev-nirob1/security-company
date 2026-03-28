<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import SectorCard from '../Widget/SectorCard.vue'

const sectors = [
  {
    title: 'Corporate & Finance',
    desc: 'High-level protection for executive offices, banking institutions, and corporate headquarters.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-building-columns',
  },
  {
    title: 'Executive Protection',
    desc: 'Discreet close protection for high-net-worth individuals, celebrities, and public figures.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-user-secret',
  },
  {
    title: 'Maritime & Global Logistics',
    desc: 'Securing critical supply chains, port facilities, and high-value cargo in transit.',
    image:
      'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6afd?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-ship',
  },
  {
    title: 'Strategic Infrastructure',
    desc: 'Protection for energy grids, data centers, and telecommunications hubs.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    icon: 'fa-satellite-dish',
  },
]
</script>

<template>
  <section class="sectors-section">
    <div class="container">
      <SectionHeader class="mb-3" subTitle="Specialized Ecosystems" title="Sectors We Protect" />

      <div class="medium-2 gap-2">
        <SectorCard v-for="sector in sectors" :key="sector.title" :sector="sector" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.sectors-section {
  padding: var(--section-padding) 0;
  background-color: var(--bg-dark-color);
}
</style>
