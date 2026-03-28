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
.section-header .title {
  font-weight: 800;
}
</style>
