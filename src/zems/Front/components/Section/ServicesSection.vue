<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import ServiceCard from '../Widget/ServiceCard.vue'
const services = [
  {
    title: 'Executive Protection',
    desc: 'Close protection for high-profile assets and individuals worldwide.',
    icon: 'fa-user-shield',
  },
  {
    title: 'Asset Surveillance',
    desc: 'Advanced monitoring and infrastructural resource protection.',
    icon: 'fa-tower-observation',
  },
  {
    title: 'Strategic Audit',
    desc: 'Vulnerability assessment and high-level defensive mapping.',
    icon: 'fa-chart-pie',
  },
  {
    title: 'Rapid Intercept',
    desc: 'Emergency response units available for immediate high-stakes intervention.',
    icon: 'fa-bolt',
    featured: true,
  },
  {
    title: 'Digital Defense',
    desc: 'Advanced cybersecurity and enterprise data protection.',
    icon: 'fa-laptop-code',
  },
]
</script>
<template>
  <section class="services-section">
    <div class="container">
      <div class="content">
        <SectionHeader class="mb-3" subTitle="Professional Services" title="Strategic Protection" />
        <div class="medium-2 large-3 gap-2">
          <div v-for="(service, i) in services" :key="i" class="grid-item">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: var(--section-padding) 0;
}
@media (min-width: 992px) {
  .services-section .grid-item:nth-child(4) {
    grid-column: span 2;
  }
}
</style>
