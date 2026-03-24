<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  socials: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="team-card">
    <div class="image-box">
      <img :src="image" :alt="name" class="member-img" />
      <div class="status-badge">
        <span class="pulse"></span>
        ON DUTY
      </div>
      <div class="overlay"></div>
    </div>
    
    <div class="info-box">
      <div class="role-tag">{{ role }}</div>
      <h3 class="member-name">{{ name }}</h3>
      
      <div class="tech-lines">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.05);
  clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.image-box {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1.2;
  overflow: hidden;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.8) contrast(1.1);
  transition: transform 0.6s ease, filter 0.6s ease;
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(4px);
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--primary);
  font-family: monospace;
  font-size: 0.65rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 5;
  letter-spacing: 0.05em;
}

.pulse {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-dark) 0%, transparent 40%);
  opacity: 0.9;
}

.info-box {
  padding: 1.5rem 2rem 2.5rem;
}

.role-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.member-name {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.25rem;
}

.tech-lines {
  display: flex;
  gap: 4px;
}

.tech-lines span {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.tech-lines span:first-child { width: 30px; }
.tech-lines span:last-child { width: 10px; }

.team-card:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.team-card:hover .member-img {
  transform: scale(1.05);
  filter: saturate(1) contrast(1.1);
}

.team-card:hover .tech-lines span {
  background: var(--primary);
}
</style>
