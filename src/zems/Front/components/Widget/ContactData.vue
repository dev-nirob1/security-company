<script setup>
import ListItem from '@/components/Elements/ListItem.vue'

defineProps({
  data: { type: Object },
})
</script>

<template>
  <ListItem class="contact-data">
    <div class="icon">
      <i :class="['fa-solid', data.icon]"></i>
    </div>
    <div class="content">
      <div class="label">{{ data.label }}</div>
      <h6>{{ data.value }}</h6>
    </div>
  </ListItem>
</template>

<style scoped>
.contact-data {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  transition: all 0.4s ease-in-out;
}

.contact-data .icon {
  width: 40px;
  height: 40px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}
.contact-data .label {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 0.1rem;
}
.contact-data:hover {
  transform: translateX(4px);
  border-color: var(--primary-color);
}
</style>
