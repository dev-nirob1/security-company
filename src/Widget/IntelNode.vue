<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, default: '' }
})
</script>

<template>
  <div class="intel-node">
    <div class="node-icon">
      <i :class="['fa-solid', icon]"></i>
    </div>
    <div class="node-content">
      <div class="node-label">{{ label }}</div>
      <a v-if="link" :href="link" class="node-value">{{ value }}</a>
      <div v-else class="node-value">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.intel-node {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(2, 6, 23, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.node-icon {
  width: 44px;
  height: 44px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.node-label {
  font-size: 0.7rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 4px;
  font-weight: 700;
  opacity: 0.8;
}

.node-value {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  display: block;
}

a.node-value:hover {
  color: var(--primary);
}

.intel-node:hover {
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  transform: translateX(5px);
}
</style>
