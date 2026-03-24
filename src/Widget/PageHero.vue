<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  bgImage: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2012/11/28/10/30/men-67636_1280.jpg',
  },
})
</script>

<template>
  <section class="page-hero">
    <div class="hero-bg">
      <img :src="bgImage" :alt="title" class="bg-img" />
      <div class="overlay"></div>
    </div>

    <div class="container relative">
      <div class="hero-content">
        <nav class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">/</span>
          <span class="current">{{ title }}</span>
        </nav>

        <h1 class="text-gradient">{{ title }}</h1>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </div>

      <div class="tech-markers">
        <div class="marker"><span>COORD: 51.5074° N, 0.1278° W</span></div>
        <div class="line"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px; /* Account for navbar */
  background: #000;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(2, 6, 23, 0.8),
    rgba(2, 6, 23, 0.3),
    rgba(2, 6, 23, 0.8)
  );
  z-index: 2;
}

.container {
  width: 100%;
  position: relative;
  z-index: 10;
}

.hero-content {
  max-width: 800px;
  text-align: left;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.breadcrumb a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: var(--primary);
}

.separator {
  color: rgba(255, 255, 255, 0.1);
}

.current {
  color: var(--primary);
}

h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  max-width: 600px;
}

.tech-markers {
  position: absolute;
  bottom: 2rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.marker {
  font-family: monospace;
  font-size: 0.65rem;
  color: var(--primary);
  opacity: 0.6;
}

.line {
  width: 100px;
  height: 1px;
  background: linear-gradient(to left, var(--primary), transparent);
}

@media (max-width: 768px) {
  .page-hero {
    height: 350px;
  }
}
</style>
