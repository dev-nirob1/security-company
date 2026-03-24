<script setup>
</script>

<template>
  <section class="mission-section section-padding">
    <div class="container">
      <div class="mission-grid">
        <div class="content-side">
          <h2 class="section-title">Enforcing Global <span class="accent">Security Excellence</span></h2>
          
          <div class="mission-description">
            <p class="lead">We provide peace of mind through precision security and intelligent protection.</p>
            <p>At SecureCorp, we combine years of field expertise with modern technology to ensure your safety. Our focus is on proactive readiness—identifying and neutralizing risks before they become threats.</p>
          </div>
          
          <div class="stats-mini-grid">
            <div class="mini-stat">
              <span class="value">99.8%</span>
              <span class="label">Response Accuracy</span>
            </div>
            <div class="mini-stat">
              <span class="value">24/7</span>
              <span class="label">Unit Readiness</span>
            </div>
          </div>
        </div>
        
        <div class="visual-side">
          <div class="tactical-frame">
            <img src="https://images.unsplash.com/photo-1544993570-05e1f210815a?q=80&w=869&auto=format&fit=crop" alt="Tactical Briefing" class="vision-img" />
            <div class="scanner-sweep"></div>
            <div class="corner-accents">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  background-color: var(--bg-dark);
  position: relative;
  overflow: hidden;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  align-items: center;
}

.tech-metadata {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: monospace;
  font-size: 0.7rem;
  color: var(--primary);
  opacity: 0.6;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.accent {
  color: var(--primary);
}

.mission-description p {
  margin-bottom: 2rem;
}

.stats-mini-grid {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.mini-stat {
  display: flex;
  flex-direction: column;
}

.mini-stat .value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  font-family: var(--font-heading);
}

.mini-stat .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.visual-side {
  position: relative;
}

.tactical-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  padding: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.vision-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
}

.scanner-sweep {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--primary), transparent);
  box-shadow: 0 0 15px var(--primary);
  animation: scanner 4s ease-in-out infinite;
  z-index: 5;
}

@keyframes scanner {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.corner-accents span {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary);
  opacity: 0.4;
}

.corner-accents span:nth-child(1) { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.corner-accents span:nth-child(2) { top: 0; right: 0; border-left: 0; border-bottom: 0; }
.corner-accents span:nth-child(3) { bottom: 0; left: 0; border-right: 0; border-top: 0; }
.corner-accents span:nth-child(4) { bottom: 0; right: 0; border-left: 0; border-top: 0; }

@media (max-width: 991px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
