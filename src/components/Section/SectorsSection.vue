<script setup>
import SectionHeader from '@/Widget/SectionHeader.vue'
import SectorCard from '@/Widget/SectorCard.vue'

const sectors = [
  {
    title: 'Corporate & Finance',
    desc: 'High-level protection for executive offices, banking institutions, and corporate headquarters.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-building-columns'
  },
  {
    title: 'Executive Protection',
    desc: 'Discreet close protection for high-net-worth individuals, celebrities, and public figures.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-user-secret'
  },
  {
    title: 'Maritime & Global Logistics',
    desc: 'Securing critical supply chains, port facilities, and high-value cargo in transit.',
    image: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6afd?q=80&w=2070&auto=format&fit=crop',
    icon: 'fa-ship'
  },
  {
    title: 'Strategic Infrastructure',
    desc: 'Protection for energy grids, data centers, and telecommunications hubs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    icon: 'fa-satellite-dish'
  }
]
</script>

<template>
  <section class="sectors-section section-padding">
    <div class="container">
      <SectionHeader 
        subtitle="Specialized Ecosystems" 
        title="Sectors We Protect" 
      />

      <div class="sectors-grid">
        <SectorCard 
          v-for="sector in sectors" 
          :key="sector.title" 
          v-bind="sector"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.sectors-section {
  background-color: var(--secondary);
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 1100px) {
  .sectors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
