<template>
  <section class="hero">
    <div class="hero-bg">
      <img
        src="https://cdn.pixabay.com/photo/2012/11/28/10/30/men-67636_1280.jpg"
        alt="Security Guard"
        class="bg-image"
      />
      <div class="overlay"></div>
    </div>

    <div class="container hero-content">
      <div class="content-wrapper">
        <h1 class="hero-title">
          Professional Security <br />
          <span class="accent">You Can Trust</span>
        </h1>

        <p class="hero-desc">
          Elite protection solutions for corporate and private sectors. Your safety is our absolute
          priority.
        </p>

        <div class="hero-actions">
          <router-link to="/services" class="btn btn-primary">Request Service</router-link>
          <router-link to="/contact" class="btn btn-outline">Contact Us</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.4));
}

.hero-content {
  width: 100%;
}

.content-wrapper {
  max-width: 700px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.hero-title .accent {
  color: var(--primary);
}

.hero-desc {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: 0.3s;
}

.btn-primary {
  background: var(--primary);
  color: var(--secondary);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: var(--secondary);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }
  .btn {
    text-align: center;
  }
}
</style>
