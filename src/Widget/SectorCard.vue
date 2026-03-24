<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<template>
  <div class="sector-card">
    <div class="sector-image">
      <img :src="image" :alt="title" />
      <div class="overlay"></div>
      <div class="sector-icon">
        <i :class="['fa-solid', icon]"></i>
      </div>
    </div>
    <div class="sector-content">
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
      <div class="marker-line"></div>
    </div>
  </div>
</template>

<style scoped>
.sector-card {
  display: flex;
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  overflow: hidden;
  height: 100%;
}

.sector-image {
  position: relative;
  width: 40%;
  flex-shrink: 0;
  overflow: hidden;
}

.sector-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, var(--bg-dark));
}

.sector-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
}

.sector-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 700;
}

p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.marker-line {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: width 0.4s ease, background 0.4s ease;
}

.sector-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
}

.sector-card:hover .sector-image img {
  transform: scale(1.1);
}

.sector-card:hover .marker-line {
  width: 100%;
  background: var(--primary);
}

@media (max-width: 600px) {
  .sector-card {
    flex-direction: column;
  }
  .sector-image {
    width: 100%;
    height: 200px;
  }
  .overlay {
    background: linear-gradient(to bottom, transparent, var(--bg-dark));
  }
}
</style>
