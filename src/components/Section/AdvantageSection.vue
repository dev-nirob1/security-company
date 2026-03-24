<script setup>
import SectionHeader from '@/Widget/SectionHeader.vue'

const advantages = [
  {
    title: 'Elite Training',
    desc: 'Our guards undergo rigorous military-grade tactical training.',
    icon: 'fa-user-ninja',
  },
  {
    title: '24/7 Intelligence',
    desc: 'Real-time monitoring and threat intelligence from our command center.',
    icon: 'fa-brain',
  },
  {
    title: 'State-of-the-art Tech',
    desc: 'Drones, biometric access, and AI-powered surveillance systems.',
    icon: 'fa-microchip',
  },
]
</script>

<template>
  <section class="advantage-section section-padding">
    <div class="container overflow-visible">
      <div class="advantage-grid">
        <div class="content-side">
          <SectionHeader subtitle="Strategic Advantage" title="Why Elite Security?" />

          <div class="advantage-list">
            <div v-for="item in advantages" :key="item.title" class="advantage-item">
              <div class="icon-box">
                <i :class="['fa-solid', item.icon]"></i>
              </div>
              <div class="text-box">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="visual-side">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544993570-05e1f210815a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional Security Guard"
              class="main-img"
            />
            <div class="tech-frame"></div>
            <div class="floating-data flex flex-col gap-2">
              <div class="data-node">
                <span class="pulse"></span>
                <span>OS: SECURE-9</span>
              </div>
              <div class="data-node">
                <span>V-SCAN: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ... existing styles ... */
.advantage-section {
  background-color: var(--bg-dark);
  border-top: 1px solid var(--border);
}

.advantage-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
}

.advantage-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.advantage-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.icon-box {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
}

h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.visual-side {
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
  border: 1px solid var(--glass-border);
}

.tech-frame {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 60px;
  height: 60px;
  border-top: 2px solid var(--primary);
  border-left: 2px solid var(--primary);
  pointer-events: none;
}

.floating-data {
  position: absolute;
  top: 2rem;
  right: -2rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border: 1px solid var(--primary);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%);
  font-family: monospace;
  font-size: 0.7rem;
  color: #fff;
  z-index: 20;
}

.data-node {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pulse {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 991px) {
  .advantage-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .visual-side {
    max-width: 500px;
    margin: 3rem auto 0;
  }
}

@media (max-width: 768px) {
  .floating-data {
    right: 1rem;
    top: 1rem;
  }
  .tech-frame {
    display: none;
  }
}
</style>
