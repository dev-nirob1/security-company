<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  priority: 'normal',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    form.value = { name: '', email: '', priority: 'normal', message: '' }
  }, 2000)
}
</script>

<template>
  <div class="tactical-form-container">
    <div v-if="!isSubmitted" class="form-wrapper">
      <form @submit.prevent="handleSubmit" class="tactical-form">
        <div class="form-header">
          <div class="header-line"></div>
          <span>SECURE CHANNEL OPEN</span>
        </div>

        <div class="form-grid">
          <div class="input-group">
            <label>IDENTIFIER</label>
            <input 
              v-model="form.name" 
              type="text" 
              placeholder="Your Full Name" 
              required 
            />
          </div>

          <div class="input-group">
            <label>COMM_LINK</label>
            <input 
              v-model="form.email" 
              type="email" 
              placeholder="Email Address" 
              required 
            />
          </div>

          <div class="input-group full">
            <label>THREAT_LEVEL / PRIORITY</label>
            <select v-model="form.priority">
              <option value="normal">NORMAL - STANDARD INQUIRY</option>
              <option value="urgent">URGENT - RAPID RESPONSE</option>
              <option value="critical">CRITICAL - IMMEDIATE DEPLOYMENT</option>
            </select>
          </div>

          <div class="input-group full">
            <label>INTEL_DESCRIPTION</label>
            <textarea 
              v-model="form.message" 
              placeholder="Details of your security requirements..." 
              rows="5" 
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">ESTABLISH CONNECTION</span>
          <span v-else class="loading-dots">ESTABLISHING...</span>
        </button>
      </form>
    </div>

    <div v-else class="success-message">
      <div class="success-icon">
        <i class="fa-solid fa-shield-check"></i>
      </div>
      <h3>Transmission Successful</h3>
      <p>Your intelligence has been received. Our tactical team will contact you shortly via secure channel.</p>
      <button @click="isSubmitted = false" class="btn-reset">NEW TRANSMISSION</button>
    </div>
  </div>
</template>

<style scoped>
.tactical-form-container {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%);
  position: relative;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  color: var(--primary);
  letter-spacing: 0.1em;
}

.header-line {
  height: 2px;
  width: 30px;
  background: var(--primary);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group.full {
  grid-column: span 2;
}

label {
  font-family: monospace;
  font-size: 0.65rem;
  color: var(--text-muted);
  font-weight: 700;
  letter-spacing: 0.05em;
}

input, select, textarea {
  background: rgba(2, 6, 23, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: #fff;
  font-family: var(--font-main);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.15);
}

select {
  cursor: pointer;
}

select option {
  background: var(--bg-dark);
}

.submit-btn {
  margin-top: 2rem;
  width: 100%;
  padding: 1.25rem;
  background: var(--primary);
  color: var(--secondary);
  border: none;
  font-weight: 800;
  font-family: var(--font-heading);
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.4s ease;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  font-size: 4rem;
  color: var(--primary);
  margin-bottom: 2rem;
}

.success-message h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
}

.btn-reset {
  margin-top: 2rem;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
}

.btn-reset:hover {
  background: var(--primary);
  color: var(--secondary);
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .input-group.full {
    grid-column: span 1;
  }
}
</style>
