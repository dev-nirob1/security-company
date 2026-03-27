<script setup>
import BaseButton from '../Elements/BaseButton.vue'
import BaseImage from '../Elements/BaseImage.vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <router-link to="/" class="logo">
          <BaseImage image="/logo.jpeg" alt="Logo" />
        </router-link>
        <ul :class="isMenuOpen && 'open'">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            <router-link to="/about">About Us</router-link>
          </li>
          <li>
            <router-link class="btn btn-primary" to="/contact">Contact Us</router-link>
          </li>
        </ul>
        <BaseButton class="hamburger" @click="toggleMenu">
          <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </BaseButton>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 1rem 0;
  position: relative;
}
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .logo img {
  height: 60px;
}
header ul {
  position: absolute;
  transform: translateX(100%);
  top: 0;
  right: 0;
  height: 100vh;
  width: 60vw;
  z-index: 999;
  background-color: var(--bg-dark-color);
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.5s ease-in-out;
}
header ul.open {
  transform: translateX(0);
}
header ul li a {
  font-weight: 600;
  padding: 0.75rem;
}

ul .btn {
  padding: 0.5rem 1.75rem;
  color: var(--white-color);
}

/* hover and active link style  */
header ul li a:hover {
  color: var(--primary-color);
}
header ul li a.router-link-exact-active {
  color: var(--primary-color);
}

ul .btn.router-link-exact-active,
ul .btn:hover {
  color: var(--bg-dark-color);
}

/* hambuger  */
.hamburger {
  color: var(--white-color);
  z-index: 1000;
  font-size: 1.5rem;
  background-color: transparent;
  padding: 0.25rem;
  clip-path: none;
}

@media (min-width: 768px) {
  header ul {
    position: inherit;
    transform: translateX(0);
    height: auto;
    width: auto;
    padding: 0;
    flex-direction: row;
    align-items: center;
  }
  .hamburger {
    display: none;
  }
}
</style>
