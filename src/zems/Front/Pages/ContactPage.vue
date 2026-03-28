<script setup>
import ContactInfoSection from '@/zems/Front/components/Section/ContactInfoSection.vue'
import PageHero from '@/components/Widget/PageHero.vue'
</script>

<template>
  <div class="contact-page">
    <PageHero
      routeName="Contact us"
      title="Secure Connection"
      subtitle="Establish a priority link with our command center. Our tactical specialists are standing by for immediate intelligence assessment."
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
