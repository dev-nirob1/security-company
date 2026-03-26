<script setup>
import BaseImage from '../Elements/BaseImage.vue'
import BaseParagraph from '../Elements/BaseParagraph.vue'
import HeroTitle from '../Elements/HeroTitle.vue'
</script>

<template>
  <section class="cta-section">
    <div class="content">
      <span class="badge">Take Action Now</span>
      <HeroTitle>Ready to Secure <span class="accent">Your Future?</span></HeroTitle>
      <BaseParagraph
        >Get a comprehensive security assessment from our elite team today.</BaseParagraph
      >
      <div class="actions">
        <RouterLink to="/contact" class="btn btn-primary"> Get a Free Quote </RouterLink>
        <a href="tel:+1234567890" class="btn btn-outline"> Call Us Now </a>
      </div>
    </div>
    <div class="image">
      <BaseImage
        image="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.cta-section .image img {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.cta-section .content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary-color);
  border: 1px solid rgba(245, 158, 11, 0.25);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.accent {
  color: var(--primary-color);
}

p {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}
.actions {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}
@media (min-width: 768px) {
  .cta-section {
    padding: 8rem 0;
  }
}
</style>
