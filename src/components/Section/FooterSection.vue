<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <router-link to="/" class="logo">
          <span class="logo-icon">🛡️</span>
          <span class="logo-text">SECURE<span class="accent">CORP</span></span>
        </router-link>
        <p class="brand-desc">
          Professional security services for corporate and private sectors. 
          Your safety is our primary mission since 2011.
        </p>
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" class="social-icon" aria-label="X (Twitter)">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" class="social-icon" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div class="footer-nav">
        <div class="nav-column">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        
        <div class="nav-column">
          <h3>Services</h3>
          <ul>
            <li><router-link to="/services">Executive Protection</router-link></li>
            <li><router-link to="/services">Asset Surveillance</router-link></li>
            <li><router-link to="/services">Risk Assessment</router-link></li>
          </ul>
        </div>
      </div>

      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>123 Security Avenue, Suite 500<br />New York, NY 10001</p>
        <p class="contact-detail">Email: <span>contact@securecorp.com</span></p>
        <p class="contact-detail">Phone: <span>+1 (555) 123-4567</span></p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <p>&copy; 2026 SecureCorp. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #01040f;
  padding: 6rem 0 2rem;
  border-top: 1px solid var(--border);
  color: #fff;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  margin-bottom: 1.5rem;
}

.logo-text .accent {
  color: var(--primary);
}

.brand-desc {
  max-width: 320px;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
}

.social-icon:hover {
  background: var(--primary);
  color: var(--secondary);
  transform: translateY(-3px);
  border-color: var(--primary);
}

.footer-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.nav-column h3, .footer-contact h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--primary);
}

.nav-column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-column a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.nav-column a:hover {
  color: var(--primary);
}

.footer-contact p {
  opacity: 0.8;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.contact-detail span {
  display: block;
  color: #fff;
  font-weight: 600;
  margin-top: 0.25rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a:hover {
  color: var(--primary);
}

@media (max-width: 991px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
