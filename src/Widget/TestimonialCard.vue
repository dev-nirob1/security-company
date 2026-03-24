<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
})
</script>

<template>
  <div class="testimonial-card">
    <div class="card-body">
      <div class="quote-icon">
        <i class="fa-solid fa-quote-left"></i>
      </div>
      <p class="content">{{ content }}</p>
      <div class="author">
        <div class="avatar">
          <img :src="image" :alt="name" class="avatar-img" />
        </div>
        <div class="info">
          <h4>{{ name }}</h4>
          <span>{{ role }}</span>
        </div>
      </div>
    </div>
    <div class="tech-lines">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.08);
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  padding: 0;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.card-body {
  padding: 2.5rem;
}

.testimonial-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.quote-icon {
  font-size: 2.5rem;
  color: var(--primary);
  opacity: 0.6;
  margin-bottom: 1.5rem;
}

.content {
  font-size: 1.05rem;
  color: #fff;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 2rem;
}

.author {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--primary);
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h4 {
  color: #fff;
  margin-bottom: 2px;
  font-size: 1rem;
}

.info span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.tech-lines {
  display: flex;
  gap: 4px;
  padding: 0 2.5rem 1.5rem;
}

.tech-lines span {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.tech-lines span:first-child {
  width: 30px;
}
.tech-lines span:last-child {
  width: 10px;
}

.testimonial-card:hover .tech-lines span {
  background: var(--primary);
  opacity: 0.6;
}
</style>
