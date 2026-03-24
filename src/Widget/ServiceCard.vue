<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, default: 'fa-shield-halved' },
  featured: { type: Boolean, default: false },
})
</script>

<template>
  <div class="service-card" :class="{ featured: featured }">
    <div class="card-body">
      <div class="icon-wrap">
        <i :class="['fa-solid', icon]"></i>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
    </div>

    <div class="card-footer">
      <div class="tech-lines">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  position: relative;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2.5rem 2rem;
  border-radius: 4px;
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.service-card.featured {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(15, 23, 42, 0.8));
  border-color: rgba(245, 158, 11, 0.25);
}

.card-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.scanner-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary);
  box-shadow: 0 0 10px var(--primary);
  opacity: 0;
  transition: 0.3s;
}

.service-card:hover .scanner-line {
  opacity: 1;
  animation: scan 2.5s linear infinite;
}

@keyframes scan {
  0% {
    left: 0;
    width: 20px;
  }
  50% {
    left: 80%;
    width: 40px;
  }
  100% {
    left: 0;
    width: 20px;
  }
}

.corner-accent {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  border-right: 2px solid rgba(255, 255, 255, 0.1);
}

.icon-wrap {
  font-size: 2.25rem;
  color: var(--primary);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.card-footer {
  margin-top: auto;
  padding-top: 2rem;
}

.tech-lines {
  display: flex;
  gap: 4px;
}

.tech-lines span {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
}

.tech-lines span:first-child {
  width: 30px;
}
.tech-lines span:last-child {
  width: 10px;
}

.service-card:hover {
  background: rgba(15, 23, 42, 0.85);
  border-color: var(--primary);
  transform: translateY(-5px);
}

.service-card:hover .tech-lines span {
  background: var(--primary);
  opacity: 0.6;
}
</style>
