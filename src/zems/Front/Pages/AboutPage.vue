<script setup>
import PageHero from '@/components/Widget/PageHero.vue'
import CtaSection from '../components/Section/CtaSection.vue'
import MissionSection from '../components/Section/MissionSection.vue'
import AdvantageSection from '../components/Section/AdvantageSection.vue'
</script>

<template>
  <div class="about-page">
    <PageHero
      routeName="About Us"
      title="Tactical Heritage"
      subtitle="SecureCorp stands as the vanguard of high-stakes protection, blending veteran military expertise with next-generation security engineering."
    />

    <MissionSection />

    <div class="bg-secondary">
      <AdvantageSection />
    </div>

    <LeadershipSection />

    <CtaSection />
  </div>
</template>

<style scoped>
.advan {
  background-color: var(--secondary) !important;
}
</style>
