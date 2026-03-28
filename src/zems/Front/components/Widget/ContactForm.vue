<script setup>
import InputField from '@/components/Elements/InputField.vue'
import SubTitle from '@/components/Elements/SubTitle.vue'
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
  <div class="form">
    <SubTitle class="mb-2">SEND US A MESSAGE</SubTitle>
    <form>
      <div class="medium-2 gap-1">
        <div class="input-group">
          <label>FULL NAME</label>
          <InputField placeholder="Enter your name" required />
        </div>
        <div class="input-group">
          <label>EMAIL ADDRESS</label>
          <InputField placeholder="Enter your email" required />
        </div>
      </div>
      <div class="input-group">
        <label>PRIORITY LEVEL</label>
        <select v-model="form.priority">
          <option value="normal">Standard Inquiry</option>
          <option value="urgent">Urgent Response</option>
          <option value="critical">Critical/Emergency</option>
        </select>
      </div>
      <div class="input-group">
        <label>YOUR INQUIRY</label>
        <textarea
          v-model="form.message"
          placeholder="How can we assist with your security needs?"
          rows="5"
          required
        ></textarea>
      </div>
      <Button class="width-full btn btn-primary">Submit</Button>
    </form>
  </div>
  <!-- <div class="tactical-form-container">
    <div v-if="!isSubmitted" class="form-wrapper">
      <form @submit.prevent="handleSubmit" class="tactical-form">
        <div class="form-header">
          <div class="header-line"></div>
          <span>SEND US A MESSAGE</span>
        </div>

        <div class="form-grid">
          <div class="input-group">
            <label>FULL NAME</label>
            <input v-model="form.name" type="text" placeholder="Enter your name" required />
          </div>

          <div class="input-group">
            <label>EMAIL ADDRESS</label>
            <input v-model="form.email" type="email" placeholder="Enter your email" required />
          </div>

          <div class="input-group full">
            <label>PRIORITY LEVEL</label>
            <select v-model="form.priority">
              <option value="normal">Standard Inquiry</option>
              <option value="urgent">Urgent Response</option>
              <option value="critical">Critical/Emergency</option>
            </select>
          </div>

          <div class="input-group full">
            <label>YOUR INQUIRY</label>
            <textarea
              v-model="form.message"
              placeholder="How can we assist with your security needs?"
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-primary width-full mt-2" :disabled="isSubmitting">
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
      <p>
        Your intelligence has been received. Our tactical team will contact you shortly via secure
        channel.
      </p>
      <button @click="isSubmitted = false" class="btn btn-primary">NEW TRANSMISSION</button>
    </div>
  </div> -->
</template>

<style scoped>
.form {
  padding: 2rem;
  background: var(--secondary-color);
  clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%);
}
.form form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.input-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
}
input,
select,
textarea {
  background: var(--bg-dark-color);
  border: 1px solid var(--glass-border);
  padding: 1rem;
  color: var(--white-color);
  font-size: 0.95rem;
  transition: all 0.3s ease-in-out;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background: var(--secondary-color);
}

/* 


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
 */
</style>
