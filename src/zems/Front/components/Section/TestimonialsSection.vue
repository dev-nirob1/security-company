<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import TestimonialCard from '../Widget/TestimonialCard.vue'

const testimonials = [
  {
    name: 'Alexander Knight',
    role: 'CEO, Knight Corp',
    content:
      'SecureCorp has been our trusted partner for over 5 years. Their tactical integration and response times are simply unparalleled in the industry.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    content:
      "The professional conduct of their elite guards is world-class. They don't just provide security; they provide absolute peace of mind.",
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'James Wilson',
    role: 'Residential Manager',
    content:
      'Implementing their 24/7 surveillance system was the best decision for our community. Safe, secure, and highly professional.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
]

const carouselConfig = {
  itemsToShow: 2,
  itemsToScroll: 1,
  gap: 20,
  snapAlign: 'start',
  wrapAround: true,
  autoplay: 4000,
  pauseAutoplayOnHover: true,
  breakpoints: {
    0: { itemsToShow: 1 },
    768: { itemsToShow: 2 },
  },
}
</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <SectionHeader class="mb-3" subTitle="Trusted by Leaders" title="Client Testimonials" />

      <Carousel v-bind="carouselConfig" class="testimonial-carousel">
        <Slide v-for="item in testimonials" :key="item.name">
          <TestimonialCard :item="item" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: var(--section-padding) 0;
}

/* Override vue3-carousel Navigation Buttons */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.3s;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--secondary-color);
}

:deep(.carousel__prev) {
  left: -1rem;
}
:deep(.carousel__next) {
  right: -1rem;
}

:deep(.carousel__slide) {
  padding: 0.5rem 0 4rem;
  align-items: stretch;
}
</style>
