<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import GalleryCard from '../Widget/GalleryCard.vue'

const items = [
  {
    title: 'Corporate Headquarters Deployment',
    category: 'Facility Security',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Executive Transport Operations',
    category: 'Elite Transit',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop',
  },
  {
    title: 'High-Level Security Briefing',
    category: 'Strategic Planning',
    image:
      'https://images.unsplash.com/photo-1558236711-33157ee21345?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Industrial Support Units',
    category: 'Infrastructure',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Modern Surveillance Center',
    category: '24/7 Monitoring',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Professional Protective Services',
    category: 'Personal Defense',
    image:
      'https://images.unsplash.com/photo-1544993570-05e1f210815a?q=80&w=2070&auto=format&fit=crop',
  },
]
</script>

<template>
  <section class="gallery-section section-padding">
    <div class="container">
      <SectionHeader class="mb-3" subTitle="Visual Operations" title="SecureCorp in Action" />

      <div class="medium-2 large-3 gap-2">
        <GalleryCard v-for="(item, i) in items" :key="i" v-bind="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: var(--section-padding) 0;
  background-color: var(--bg-dark);
}
</style>
