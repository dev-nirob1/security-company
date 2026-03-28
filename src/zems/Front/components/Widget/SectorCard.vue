<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import SubTitle from '@/components/Elements/SubTitle.vue'

defineProps({
  sector: { type: Object },
})
</script>

<template>
  <div class="sector-card">
    <div class="image">
      <BaseImage :image="sector.image" :alt="sector.title" />
    </div>
    <div class="content">
      <div class="icon">
        <i :class="['fa-solid', sector.icon]"></i>
      </div>
      <SubTitle>{{ sector.title }}</SubTitle>
      <BaseParagraph>{{ sector.desc }}</BaseParagraph>
      <div class="marker-line"></div>
    </div>
  </div>
</template>

<style scoped>
.sector-card {
  display: flex;
  flex-direction: column;
  background: var(--secondary-color);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  overflow: hidden;
  height: 100%;
  position: relative;
}
.sector-card .content {
  padding: 2rem;
}

.sector-card .image {
  position: relative;
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  /* background: linear-gradient(to right, transparent, var(--bg-dark)); */
}

.icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
  z-index: 5;
}

.sector-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.marker-line {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease-in-out;
}
/* hover  */
.sector-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-5px);
}

.sector-card:hover .image img {
  transform: scale(1.1);
}

.sector-card:hover .marker-line {
  width: 100%;
  background: var(--primary-color);
}
@media (min-width: 992px) {
  .sector-card {
    flex-direction: row;
  }
  .sector-card .content {
    padding: 2.5rem 2rem;
  }
  .sector-card .image {
    width: 40%;
    height: 100%;
  }
}
</style>
