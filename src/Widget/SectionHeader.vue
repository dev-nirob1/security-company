<script setup>
defineProps({
  subtitle: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="section-header">
    <span class="badge">{{ subtitle }}</span>
    <h2 class="text-gradient">{{ title }}</h2>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 3.5rem;
  text-align: left;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
}
</style>
