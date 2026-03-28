<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import TeamCard from '../Widget/TeamCard.vue'

const team = [
  {
    name: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Sarah Dracos',
    role: 'Director of Operations',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    name: 'Viktor Reznov',
    role: 'Tactical Command Lead',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
]
</script>

<template>
  <section class="leadership-section">
    <div class="container">
      <SectionHeader class="mb-3" subTitle="The Command Chain" title="Elite Leadership Team" />

      <div class="medium-2 large-3 gap-2">
        <TeamCard v-for="(member, i) in team" :key="i" :member="member" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.leadership-section {
  padding: var(--section-padding) 0;
}
</style>
