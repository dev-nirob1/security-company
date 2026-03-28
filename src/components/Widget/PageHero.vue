<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import HeroTitle from '@/components/Elements/HeroTitle.vue'
import BreadCrumbSection from './BreadCrumbSection.vue'

defineProps({
  title: { type: String },
  routeName: { type: String },
  subtitle: { type: String },
  bgImage: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2012/11/28/10/30/men-67636_1280.jpg',
  },
})
</script>

<template>
  <section class="hero relative">
    <div class="wrapper">
      <div class="container">
        <BreadCrumbSection class="mb-1" :routeName="routeName" />
        <div class="content">
          <HeroTitle> {{ title }}</HeroTitle>
          <BaseParagraph>
            {{ subtitle }}
          </BaseParagraph>
        </div>
        <div class="image">
          <BaseImage :image="bgImage" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 60vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5));
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
  font-size: 1.15rem;
  margin-top: 1rem;
}
</style>
