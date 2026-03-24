<script setup>
import StatItem from '@/Widget/StatItem.vue'

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1000+', label: 'Professional Guards' },
  { number: '10+', label: 'Years of Experience' }
]
</script>

<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <StatItem 
          v-for="stat in stats" 
          :key="stat.label" 
          v-bind="stat"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 4rem 0;
  background-color: var(--secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
