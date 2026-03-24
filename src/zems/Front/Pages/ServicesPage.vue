<script setup>
import PageHero from '@/Widget/PageHero.vue'
import ServicesSection from '@/components/Section/ServicesSection.vue'
import SectorsSection from '@/components/Section/SectorsSection.vue'
import CtaSection from '@/components/Section/CtaSection.vue'
</script>

<template>
  <div class="services-page">
    <PageHero 
      title="Elite Services" 
      subtitle="Advanced security frameworks engineered for the modern threat landscape. We provide tactical protection for individuals, assets, and infrastructure."
    />
    
    <!-- We re-use the ServicesSection but it will be visually distinct due to PageHero -->
    <ServicesSection />
    
    <SectorsSection />
    
    <CtaSection />
  </div>
</template>

<style scoped>
.services-page {
  background-color: var(--bg-dark);
}
</style>
