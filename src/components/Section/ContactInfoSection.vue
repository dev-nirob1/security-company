<script setup>
import TacticalForm from '@/Widget/TacticalForm.vue'
import IntelNode from '@/Widget/IntelNode.vue'

const contactInfo = [
  {
    label: 'Main Office',
    value: '72 Tactical Way, London, UK',
    icon: 'fa-location-dot'
  },
  {
    label: 'Secure Line',
    value: '+44 20 7946 0123',
    icon: 'fa-phone',
    link: 'tel:+442079460123'
  },
  {
    label: 'General Inquiries',
    value: 'ops@securecorp.com',
    icon: 'fa-envelope',
    link: 'mailto:ops@securecorp.com'
  }
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
            <span class="badge">Connection Node</span>
            <h2>Direct Tactical <span class="accent">Intel Access</span></h2>
            <p>Our command center coordinates all transmission traffic. Use the secure channel for priority assessments.</p>
          </div>
          
          <div class="nodes-list">
            <IntelNode 
              v-for="node in contactInfo" 
              :key="node.label" 
              v-bind="node"
            />
          </div>
          
          <div class="network-map">
            <!-- Stylized CSS-based "grid" map placeholder -->
            <div class="map-grid">
              <div class="map-point point-1"><span></span>LDN_HQ</div>
              <div class="map-grid-lines"></div>
            </div>
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

.info-header {
  margin-bottom: 3rem;
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary);
  border: 1px solid rgba(245, 158, 11, 0.2);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.accent {
  color: var(--primary);
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
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}

.map-point {
  position: absolute;
  top: 40%;
  left: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 700;
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
