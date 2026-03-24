<script setup>
import SectionHeader from '@/Widget/SectionHeader.vue'
import ServiceCard from '@/Widget/ServiceCard.vue'

const services = [
  { 
    title: 'Executive Protection', 
    desc: 'Close protection for high-profile assets and individuals worldwide.',
    icon: 'fa-user-shield'
  },
  { 
    title: 'Asset Surveillance', 
    desc: 'Advanced monitoring and infrastructural resource protection.',
    icon: 'fa-tower-observation'
  },
  { 
    title: 'Strategic Audit', 
    desc: 'Vulnerability assessment and high-level defensive mapping.',
    icon: 'fa-chart-pie'
  },
  { 
    title: 'Rapid Intercept', 
    desc: 'Emergency response units available for immediate high-stakes intervention.',
    icon: 'fa-bolt',
    featured: true
  },
  { 
    title: 'Digital Defense', 
    desc: 'Advanced cybersecurity and enterprise data protection.',
    icon: 'fa-laptop-code'
  }
]
</script>

<template>
  <section class="services-section section-padding">
    <div class="container relative">
      <SectionHeader 
        subtitle="Professional Services" 
        title="Strategic Protection" 
      />

      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.title"
          :class="['grid-item', { 'wide': service.featured }]"
        >
          <ServiceCard v-bind="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--bg-dark);
}

.section-header {
  margin-bottom: 5rem;
  max-width: 650px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.grid-item.wide {
  grid-column: span 2;
}

@media (max-width: 991px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .grid-item.wide {
    grid-column: span 1;
  }
}
</style>
