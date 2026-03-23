<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const isScrolled = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Hide on scroll down, show on scroll up
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isVisible.value = false
  } else {
    isVisible.value = true
  }
  
  isScrolled.value = currentScrollY > 20
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="navbar" 
    :class="{ 
      'hidden': !isVisible, 
      'scrolled': isScrolled 
    }"
  >
    <div class="container nav-content">
      <router-link to="/" class="logo">
        <span class="logo-icon">🛡️</span>
        <span class="logo-text">SECURE<span class="accent">CORP</span></span>
      </router-link>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact" class="btn-inquiry">Get Inquiry</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  padding: 1.5rem 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, padding 0.3s ease;
  background: transparent;
}

.navbar.hidden {
  transform: translateY(-100%);
}

.navbar.scrolled {
  padding: 0.8rem 0;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.logo .accent {
  color: #f59e0b;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links .router-link-active {
  color: #f59e0b;
}

.btn-inquiry {
  background: #f59e0b;
  color: #0f172a !important;
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
}

.btn-inquiry:hover {
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* User might want a mobile menu later */
  }
}
</style>
