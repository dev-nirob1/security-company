<script setup>
import PageHero from '@/Widget/PageHero.vue'
import ContactInfoSection from '@/components/Section/ContactInfoSection.vue'
</script>

<template>
  <div class="contact-page">
    <PageHero 
      title="Secure Connection" 
      subtitle="Establish a priority link with our command center. Our tactical specialists are standing by for immediate intelligence assessment."
      bgImage="https://images.unsplash.com/photo-1454165833767-1330084bc6f9?q=80&w=2070&auto=format&fit=crop"
    />
    
    <ContactInfoSection />
  </div>
</template>

<style scoped>
.contact-page {
  background-color: var(--bg-dark);
  min-height: 100vh;
}
</style>
