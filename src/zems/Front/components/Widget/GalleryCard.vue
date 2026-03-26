<script setup>
defineProps({
  title: { type: String, default: 'Security Project' },
  category: { type: String, default: 'Strategic Operations' },
  image: { type: String, required: true },
})
</script>

<template>
  <div class="gallery-card group">
    <div class="image">
      <img :src="image" :alt="title" loading="lazy" />
      <div class="overlay">
        <div class="content">
          <span class="category-tag">{{ category }}</span>
          <h4 class="title-text">{{ title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
}

.image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--bg-card-color);
}

.image-wrapper img {
  transition: all 0.6s ease-in-out;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(2, 6, 23, 0.9) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.content {
  transform: translateY(1rem);
  transition: all 0.4s ease-in-out;
}

.category-tag {
  display: block;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
}

/* Productivity Hover Effects */
.gallery-card:hover img {
  transform: scale(1.1);
}
.gallery-card:hover .overlay {
  opacity: 1;
}
.gallery-card:hover .content {
  transform: translateY(0);
}
</style>
