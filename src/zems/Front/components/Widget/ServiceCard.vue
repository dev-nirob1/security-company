<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'

defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <div class="service-card">
    <div class="card-body">
      <div class="icon">
        <i :class="['fa-solid', service.icon]"></i>
      </div>
      <h4>{{ service.title }}</h4>
      <BaseParagraph>{{ service.desc }}</BaseParagraph>
    </div>

    <div class="card-footer">
      <div class="tech-lines">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  position: relative;
  background: var(--bg-dark-color);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2.5rem 2rem;
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  transition: all 0.4s ease-in-out;
  height: 100%;
  overflow: hidden;
}

.service-card .icon {
  font-size: 2.25rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: 0;
}

.service-card .card-footer {
  margin-top: auto;
  padding-top: 2rem;
}

.service-card .tech-lines {
  display: flex;
  gap: 4px;
}

.service-card .tech-lines span {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
}

.service-card .tech-lines span:first-child {
  width: 30px;
}
.service-card .tech-lines span:last-child {
  width: 10px;
}

.service-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-0.25rem);
}

.service-card:hover .tech-lines span {
  background: var(--primary-color);
  opacity: 0.7;
}
</style>
