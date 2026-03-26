<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'

defineProps({
  item: { type: Object },
})
</script>

<template>
  <div class="testimonial-card">
    <div class="card-body">
      <div class="icon">
        <i class="fa-solid fa-quote-left"></i>
      </div>
      <BaseParagraph class="content">{{ item.content }}</BaseParagraph>
      <div class="author">
        <div class="avatar">
          <img :src="item.image" :alt="item.name" class="avatar-img" />
        </div>
        <div class="info">
          <h6>{{ item.name }}</h6>
          <span>{{ item.role }}</span>
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
  background: var(--bg-dark-color);
  border: 1px solid rgba(255, 255, 255, 0.08);
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card-body {
  padding: 2.5rem;
}

.testimonial-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-4px);
}

.icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  opacity: 0.6;
}

.content {
  font-size: 1.15rem;
  color: #fff;
  line-height: 1.7;
  font-style: italic;
  margin: 1rem 0;
}

.author {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info span {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.tech-lines {
  display: flex;
  gap: 4px;
  padding: 0 2.5rem 2.5rem;
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
  background: var(--primary-color);
  opacity: 0.7;
}
</style>
