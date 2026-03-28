<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import BaseImage from '@/components/Elements/BaseImage.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import BaseTitle from '@/components/Elements/BaseTitle.vue'
import ListItem from '@/components/Elements/ListItem.vue'
</script>

<template>
  <section class="mission-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content">
          <SectionHeader
            class="mb-2"
            title="Enforcing Global Security Excellence"
            subTitle="Our Mission"
          />
          <BaseParagraph>
            We provide peace of mind through precision security and intelligent protection.
          </BaseParagraph>
          <BaseParagraph>
            At SecureCorp, we combine years of field expertise with modern technology to ensure your
            safety. Our focus is on proactive readiness—identifying and neutralizing risks before
            they become threats.</BaseParagraph
          >

          <ul class="stats all-2">
            <ListItem class="mini-stat">
              <BaseTitle>99.8%</BaseTitle>
              <span>Response Accuracy</span>
            </ListItem>
            <ListItem class="mini-stat">
              <BaseTitle>24/7</BaseTitle>
              <span>Unit Readiness</span>
            </ListItem>
          </ul>
        </div>

        <div class="image">
          <BaseImage
            image="https://images.unsplash.com/photo-1544993570-05e1f210815a?q=80&w=869&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  background-color: var(--bg-dark-color);
  position: relative;
  padding: var(--section-padding) 0;
}
.mission-section .content p {
  font-size: 1.15rem;
  color: var(--text-secondary);
}
.stats {
  border-top: 1px solid var(--border);
  margin-top: 2.5rem;
  padding-top: 2rem;
}

.stats .title {
  color: var(--primary-color);
}
.stats li span {
  color: var(--text-secondary);
  text-transform: uppercase;
}
.mission-section .image {
  border: 2px solid var(--border);
}

.mission-section .image img {
  width: 90%;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
}
</style>
