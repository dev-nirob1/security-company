<script setup>
import TacticalForm from '@/Widget/TacticalForm.vue'
import IntelNode from '@/Widget/IntelNode.vue'

const contactInfo = [
  {
    label: 'Main Office',
    value: '72 Tactical Way, London, UK',
    icon: 'fa-location-dot',
  },
  {
    label: 'Secure Line',
    value: '+44 20 7946 0123',
    icon: 'fa-phone',
    link: 'tel:+442079460123',
  },
  {
    label: 'General Inquiries',
    value: 'ops@securecorp.com',
    icon: 'fa-envelope',
    link: 'mailto:ops@securecorp.com',
  },
]
</script>

<template>
  <section class="contact-info-section section-padding">
    <div class="container">
      <div class="contact-grid">
        <div class="form-side">
          <TacticalForm />
        </div>

        <div class="info-side">
          <div class="info-header">
            <span class="badge">Connection Channels</span>
            <h2>Direct Global <span class="accent">Assistance</span></h2>
            <p>
              Connect with our main office for immediate security inquiries and deployment
              strategies.
            </p>
          </div>

          <div class="nodes-list">
            <IntelNode v-for="node in contactInfo" :key="node.label" v-bind="node" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info-section {
  background: var(--bg-dark);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: start;
}

.visual-placeholder {
  min-height: 400px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
}

.placeholder-content i {
  font-size: 4rem;
  color: var(--primary);
  margin-bottom: 2rem;
  opacity: 0.5;
}

.placeholder-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.info-header {
  margin-bottom: 3rem;
}

.nodes-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.network-map {
  position: relative;
  height: 250px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.map-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-point {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.map-point span {
  width: 10px;
  height: 10px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary);
}

@media (max-width: 1100px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
