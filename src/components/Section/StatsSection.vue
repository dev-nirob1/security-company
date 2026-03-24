<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <h2 class="stat-number">500+</h2>
          <p class="stat-label">Happy Clients</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">1000+</h2>
          <p class="stat-label">Professional Guards</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">10+</h2>
          <p class="stat-label">Years of Experience</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 4rem 0;
  background-color: var(--secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 1.5rem;
}

.stat-number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--primary);
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-item {
    border-bottom: 1px solid var(--border);
  }

  .stat-item:last-child {
    border-bottom: none;
  }
}
</style>
