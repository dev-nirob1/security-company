<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const isScrolled = ref(false)
const isMenuOpen = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isVisible.value = false
    isMenuOpen.value = false // Close menu on scroll
  } else {
    isVisible.value = true
  }

  isScrolled.value = currentScrollY > 20
  lastScrollY = currentScrollY
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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
      hidden: !isVisible,
      scrolled: isScrolled,
      'menu-open': isMenuOpen,
    }"
  >
    <div class="container nav-content">
      <router-link to="/" class="logo">
        <span class="logo-icon">🛡️</span>
        <span class="logo-text">SECURE<span class="accent">CORP</span></span>
      </router-link>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link to="/" @click="isMenuOpen = false">Home</router-link>
        <router-link to="/services" @click="isMenuOpen = false">Services</router-link>
        <router-link to="/about" @click="isMenuOpen = false">About Us</router-link>
        <router-link to="/contact" class="btn-tactical btn-nav" @click="isMenuOpen = false"
          >Get Inquiry</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  padding: 1rem 0;
  background: var(--bg-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.hidden {
  transform: translateY(-100%);
}

.navbar.scrolled {
  background: rgba(2, 6, 23, 0.95);
  backdrop-filter: blur(12px);
  padding: 0.8rem 0;
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
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.logo .accent {
  color: var(--primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

/* Base hover for all links except buttons */
.nav-links a:not(.btn-nav):hover {
  color: var(--primary);
}

/* Active state for regular links only (Exact match) */
.nav-links a:not(.btn-nav).router-link-exact-active {
  color: var(--primary);
}

/* Specific fix for Button link active state */
.nav-links a.btn-nav.router-link-exact-active {
  color: var(--secondary);
  background: var(--primary-hover);
}

.btn-nav {
  padding: 0.6rem 1.5rem;
  font-size: 0.85rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2001;
}

.bar {
  width: 25px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: var(--bg-dark);
    flex-direction: column;
    justify-content: start;
    padding: 6rem 2rem 2rem 2rem;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .menu-open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .menu-open .bar:nth-child(2) {
    opacity: 0;
  }
  .menu-open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
