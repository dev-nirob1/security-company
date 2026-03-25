<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue'
import BaseImage from '@/components/Elements/BaseImage.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import HeroTitle from '@/components/Elements/HeroTitle.vue'
</script>

<template>
  <section class="hero relative">
    <div class="wrapper">
      <div class="container">
        <div class="content">
          <HeroTitle>
            Professional Security<br />
            <span class="highlight">You Can Trust</span></HeroTitle
          >
          <BaseParagraph>
            Elite protection solutions for corporate and private sectors. Your safety is our
            absolute priority.
          </BaseParagraph>
          <div class="actions">
            <BaseButton class="btn-primary">REQUEST SERVICE</BaseButton>
            <BaseButton class="btn-outline">CONTACT US</BaseButton>
          </div>
        </div>
        <div class="image">
          <BaseImage image="https://cdn.pixabay.com/photo/2012/11/28/10/30/men-67636_1280.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  display: grid;
  align-items: center;
}
.hero .content {
  max-width: 700px;
}

.image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.hero p {
  max-width: 600px;
  font-size: 1.25rem;
  margin: 1.5rem 0 2rem 0;
}
.hero .actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hero .actions .btn {
  width: 100%;
}
.hero .highlight {
  color: var(--primary-color);
}
@media (min-width: 576px) {
  .hero .actions {
    flex-direction: row;
    gap: 1.5rem;
  }
  .hero .actions .btn {
    width: auto;
  }
}
</style>
