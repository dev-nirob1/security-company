<script setup>
import PageHero from '@/Widget/PageHero.vue'
import MissionSection from '@/components/Section/MissionSection.vue'
import AdvantageSection from '@/components/Section/AdvantageSection.vue'
import LeadershipSection from '@/components/Section/LeadershipSection.vue'
import CtaSection from '@/components/Section/CtaSection.vue'
</script>

<template>
  <div class="about-page">
    <PageHero
      title="Tactical Heritage"
      subtitle="SecureCorp stands as the vanguard of high-stakes protection, blending veteran military expertise with next-generation security engineering."
    />

    <MissionSection />

    <div class="advan">
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
