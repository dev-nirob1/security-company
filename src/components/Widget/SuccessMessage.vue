<script setup lang="ts">
import BaseParagraph from '../Elements/BaseParagraph.vue'
import BaseTitle from '../Elements/BaseTitle.vue'
</script>

<template>
  <div class="success-message">
    <div class="success-icon">
      <i class="fa-solid fa-check-double"></i>
    </div>
    <BaseTitle>Transmission Successful</BaseTitle>
    <BaseParagraph>
      Your intelligence has been received. Our tactical team will contact you shortly via secure
      channel.
    </BaseParagraph>
  </div>
</template>

<style scoped>
.success-message {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>
