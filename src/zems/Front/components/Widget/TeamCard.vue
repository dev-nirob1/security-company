<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue'
import SubTitle from '@/components/Elements/SubTitle.vue'

defineProps({
  member: { type: Object, required: true },
})
</script>

<template>
  <div class="team-card">
    <div class="image">
      <BaseImage :image="member.image" :alt="member.name" />
      <!-- <div class="status-badge">
        <span class="pulse"></span>
        ON DUTY
      </div> -->
    </div>

    <div class="info">
      <span>{{ member.role }}</span>
      <SubTitle>{{ member.name }}</SubTitle>

      <div class="tech-lines">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  background: var(--secondary-color);
  border: 1px solid var(--border);
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  transition: 0.4s ease-in-out;
}
.team-card .image {
  height: 380px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.team-card .info {
  padding: 1.5rem 2rem;
}
.team-card .info .sub-title {
  margin: 0.75rem 0 1.25rem 0;
}
.team-card .info span {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--primary-color);
}
.team-card .tech-lines {
  display: flex;
  gap: 4px;
}

.team-card .tech-lines span {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.team-card .tech-lines span:first-child {
  width: 30px;
}
.team-card .tech-lines span:last-child {
  width: 10px;
}
.team-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-8px);
}

.team-card:hover .image img {
  transform: scale(1.05);
}

.team-card:hover .tech-lines span {
  background: var(--primary-color);
}
</style>
