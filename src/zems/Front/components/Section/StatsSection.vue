<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import HeroTitle from '@/components/Elements/HeroTitle.vue'
import ListItem from '@/components/Elements/ListItem.vue'
const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1000+', label: 'Professional Guards' },
  { number: '10+', label: 'Years of Experience' },
]
</script>
<template>
  <section class="stats">
    <div class="container">
      <ul class="medium-2 large-3 gap-2">
        <ListItem v-for="stat in stats" :key="stat.label">
          <HeroTitle>{{ stat.number }}</HeroTitle>
          <BaseParagraph>{{ stat.label }}</BaseParagraph>
        </ListItem>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}
.stats li {
  text-align: center;
}
.stats li p {
  font-weight: 700;
  color: var(--text-secondary);
  font-size: 1.15rem;
}
.stats .hero-title {
  color: var(--primary-color);
}
</style>
