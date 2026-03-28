<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import BaseImage from '@/components/Elements/BaseImage.vue'
import ListItem from '@/components/Elements/ListItem.vue'
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
  {
    title: 'Rapid Response',
    desc: 'Average response time of under 3 minutes for emergency situations.',
    icon: 'fa-bolt',
  },
]
</script>

<template>
  <section class="advantage-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content py-2">
          <SectionHeader class="mb-3" subTitle="Strategic Advantage" title="Why Elite Security?" />
          <ul class="advantage">
            <ListItem v-for="item in advantages" :key="item.title">
              <div class="icon-box">
                <i :class="['fa-solid', item.icon]"></i>
              </div>
              <div class="text-box">
                <h5>{{ item.title }}</h5>
                <p>{{ item.desc }}</p>
              </div>
            </ListItem>
          </ul>
        </div>
        <div class="image relative">
          <BaseImage
            image="https://images.unsplash.com/photo-1544993570-05e1f210815a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantage-section {
  padding: var(--section-padding) 0;
}
.advantage {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.advantage li {
  display: flex;
  gap: 1.5rem;
}
.icon-box {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
  transition: all 0.3s ease;
}
.advantage p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
.advantage-section .image img {
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
  aspect-ratio: 1/1;
}
.advantage-section .image::before {
  position: absolute;
  content: '';
  top: -20px;
  left: -20px;
  width: 60px;
  height: 60px;
  border-top: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
  pointer-events: none;
}
.advantage li:hover .icon-box {
  background: var(--primary-color);
  color: var(--secondary-color);
  transform: scale(1.1);
}
</style>
