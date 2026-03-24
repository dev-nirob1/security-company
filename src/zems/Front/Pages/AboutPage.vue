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
      bgImage="https://images.unsplash.com/photo-1558236711-33157ee21345?q=80&w=2070&auto=format&fit=crop"
    />
    
    <MissionSection />
    
    <div class="pillars-wrapper">
      <AdvantageSection />
    </div>
    
    <LeadershipSection />
    
    <CtaSection />
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--bg-dark);
}

.pillars-wrapper {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
