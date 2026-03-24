<script setup>
import SectionHeader from '@/Widget/SectionHeader.vue'
import TeamCard from '@/Widget/TeamCard.vue'

const team = [
  {
    name: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Sarah Dracos',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    name: 'Viktor Reznov',
    role: 'Tactical Command Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>

<template>
  <section class="leadership-section section-padding">
    <div class="container">
      <SectionHeader 
        subtitle="The Command Chain" 
        title="Elite Leadership Team" 
      />
      
      <div class="team-grid">
        <TeamCard 
          v-for="member in team" 
          :key="member.name" 
          v-bind="member"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.leadership-section {
  background-color: var(--secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 4rem;
}

@media (max-width: 991px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
