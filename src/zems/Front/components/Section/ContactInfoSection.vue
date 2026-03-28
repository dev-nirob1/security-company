<script setup>
import ContactForm from '../Widget/ContactForm.vue'
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import ContactData from '../Widget/ContactData.vue'

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
  <section class="contact-info-section">
    <div class="container">
      <div class="medium-2 gap-3">
        <ContactForm />

        <div>
          <SectionHeader
            class="mb-2"
            title="Connection Channels"
            subTitle="Direct Global Assistance"
          />
          <ul>
            <ContactData v-for="(data, i) in contactInfo" :key="i" :data="data" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info-section {
  padding: var(--section-padding) 0;
  background: var(--bg-dark-color);
}
.contact-info-section ul {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
