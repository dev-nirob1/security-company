<script setup>
import ListItem from '@/components/Elements/ListItem.vue'
import { RouterLink } from 'vue-router'
defineProps({
  routeName: {
    type: String,
  },
})
</script>
<template>
  <ul class="breadcrumb">
    <ListItem><RouterLink to="/">Home</RouterLink></ListItem>
    <ListItem>{{ routeName }}</ListItem>
  </ul>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-transform: uppercase;
}
.breadcrumb li:last-child {
  color: var(--primary-color);
}
.breadcrumb li:not(:last-child)::after {
  content: '/';
  margin-left: 1rem;
  color: var(--text-secondary);
}
</style>
