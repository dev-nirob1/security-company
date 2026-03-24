<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<template>
  <div class="advantage-item">
    <div class="icon-box">
      <i :class="['fa-solid', icon]"></i>
    </div>
    <div class="text-box">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.advantage-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.icon-box {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
  transition: all 0.3s ease;
}

.advantage-item:hover .icon-box {
  background: var(--primary);
  color: var(--secondary);
  transform: scale(1.1);
}

h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
}
</style>
