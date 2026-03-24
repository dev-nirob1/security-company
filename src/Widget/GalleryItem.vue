<script setup>
defineProps({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
})
</script>

<template>
  <div class="gallery-item">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="gallery-img" />
      <div class="overlay">
        <div class="content">
          <span class="category">{{ category }}</span>
          <h3 class="title">{{ title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-item {
  position: relative;
  overflow: hidden;
  background: var(--bg-dark);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 4px; /* Maintain subtle sharpness */
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(2, 6, 23, 0.9), transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.content {
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.category {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  color: #fff;
  font-weight: 700;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.gallery-item:hover .content {
  transform: translateY(0);
}
</style>
