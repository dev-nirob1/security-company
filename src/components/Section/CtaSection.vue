<template>
  <section class="cta-section">
    <div class="container cta-content">
      <div class="content-wrapper">
        <span class="badge">Take Action Now</span>
        <h2>Ready to Secure <span class="accent">Your Future?</span></h2>
        <p>Get a comprehensive security assessment from our elite team today.</p>
        <div class="cta-actions">
          <router-link to="/contact" class="btn-tactical">
            <i class="fa-solid fa-shield-halved"></i> Get a Free Quote
          </router-link>
          <a href="tel:+1234567890" class="btn-tactical-outline">
            <i class="fa-solid fa-phone"></i> Call Us Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
  /* Ultimate layering fix: Gradient + Image in one command */
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url('https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
}

.content-wrapper {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(245, 158, 11, 0.1);
  color: var(--primary);
  border: 1px solid rgba(245, 158, 11, 0.25);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #fff;
}

.accent {
  color: var(--primary);
}

p {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.9rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: 0.3s ease;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.btn-primary {
  background: var(--primary);
  color: var(--secondary);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(245, 158, 11, 0.35);
}

.btn-outline {
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: var(--secondary);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .cta-section {
    padding: 5rem 0;
  }
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
