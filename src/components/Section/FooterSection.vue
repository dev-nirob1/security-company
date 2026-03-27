<script setup>
import { RouterLink } from 'vue-router'
import BaseImage from '../Elements/BaseImage.vue'
import BaseParagraph from '../Elements/BaseParagraph.vue'
import ListItem from '../Elements/ListItem.vue'
</script>

<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="medium-2 large-5 gap-2">
        <div class="brand-info large-span-2">
          <RouterLink to="/" class="logo">
            <BaseImage image="/logo.jpeg" />
            <BaseParagraph
              >Professional security services for corporate and private sectors. Your safety is our
              primary mission since 2011.</BaseParagraph
            >
          </RouterLink>
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
        <div class="navigation">
          <h5>Quick Links</h5>
          <ul>
            <ListItem><router-link to="/">Home</router-link></ListItem>
            <ListItem><router-link to="/services">Services</router-link></ListItem>
            <ListItem><router-link to="/about">About Us</router-link></ListItem>
            <ListItem><router-link to="/contact">Contact</router-link></ListItem>
          </ul>
        </div>
        <div class="navigation">
          <h5>Services</h5>
          <ul>
            <ListItem><router-link to="/services">Executive Protection</router-link></ListItem>
            <ListItem><router-link to="/services">Asset Surveillance</router-link></ListItem>
            <ListItem><router-link to="/services">Risk Assessment</router-link></ListItem>
            <ListItem><a href="#">Privacy Policy</a></ListItem>
            <ListItem><a href="#">Terms of Service</a></ListItem>
          </ul>
        </div>
        <div class="navigation">
          <h5>Contact Us</h5>
          <ul>
            <ListItem>123 Security Avenue, Suite 500 New York, NY 10001</ListItem>
            <ListItem>Email: contact@securecorp.com</ListItem>
            <ListItem>Phone: +1 (555) 123-4567</ListItem>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <BaseParagraph>&copy; 2026 SecureCorp. All rights reserved.</BaseParagraph>
          <BaseParagraph>
            Design & Developed by
            <a href="https://webpoka.com/" target="_blank">Webpoka</a>
          </BaseParagraph>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-dark-color);
  color: var(--text-secondary);
}
.logo img {
  height: 70px;
}
.footer .brand-info p {
  font-size: 1.15rem;
  margin-top: 1.15rem;
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
  font-size: 1.1rem;
  transition: all 0.3s ease;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
}

.social-icon:hover {
  background: var(--primary-color);
  color: var(--secondary-color);
  transform: translateY(-3px);
  border-color: var(--primary-color);
}
.footer h5 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}
.footer ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer .navigation li {
  color: var(--text-secondary);
}
.footer .footer-bottom {
  border-top: 1px solid var(--secondary-color);
  font-size: 0.85rem;
  padding: 1rem 0;
}
.footer .footer-bottom .bottom-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer .footer-bottom .bottom-content a {
  color: var(--primary-color);
}
</style>
