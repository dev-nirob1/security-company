<script setup>
// import ServicesSection from '@/components/Section/ServicesSection.vue'
import GallerySection from '@/components/Section/GallerySection.vue'
import TestimonialsSection from '@/components/Section/TestimonialsSection.vue'
import CtaSection from '@/components/Section/CtaSection.vue'
import HeroSection from '../components/Section/HeroSection.vue'
import StatsSection from '../components/Section/StatsSection.vue'
import AdvantageSection from '../components/Section/AdvantageSection.vue'
import ServicesSection from '../components/Section/ServicesSection.vue'
// import ServicesSection from '../components/Section/ServicesSection.vue'
// import ServicesSection from '../components/Section/ServicesSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />
    <StatsSection />
    <AdvantageSection />
    <div class="bg-secondary">
      <ServicesSection />
    </div>
    <!-- <GallerySection /> -->
    <!-- <TestimonialsSection /> -->
    <CtaSection />
  </div>
</template>
