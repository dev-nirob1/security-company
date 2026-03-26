<script setup>
import BaseTitle from '../Elements/BaseTitle.vue'
defineProps({
  title: {
    type: String,
  },
  subTitle: { type: String },
})
</script>

<template>
  <div class="section-header">
    <span class="badge">{{ subTitle }}</span>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>
<style>
.section-header .badge {
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: var(--primary-color);
  background: rgba(245, 158, 11, 0.1);
  margin-bottom: 0.75rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: 700;
}
.section-header .title {
  font-weight: 800;
}
</style>
