<script setup>
defineProps({
  number: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <div class="stat-item">
    <h2 class="stat-number">{{ number }}</h2>
    <p class="stat-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.stat-item {
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 0.02em;
}
</style>
