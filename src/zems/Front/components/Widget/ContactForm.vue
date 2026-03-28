<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue'
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
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    form.value = { name: '', email: '', priority: 'normal', message: '' }
    alert('Transmission Successful!')
  }, 2000)
}
</script>

<template>
  <!-- <SuccessMessage v-if="isSubmitted" /> -->
  <div class="form">
    <SubTitle class="mb-2">SEND US A MESSAGE</SubTitle>
    <form @submit.prevent="handleSubmit">
      <div class="medium-2 gap-1">
        <div class="input-group">
          <label>FULL NAME</label>
          <InputField v-model="form.name" placeholder="Enter your name" required />
        </div>
        <div class="input-group">
          <label>EMAIL ADDRESS</label>
          <InputField v-model="form.email" placeholder="Enter your email" required />
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
      <BaseButton class="width-full btn btn-primary" :disabled="isSubmitting">{{
        isSubmitting ? 'Submitting...' : 'Submit'
      }}</BaseButton>
    </form>
  </div>
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
.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (min-width: 992px) {
  .form {
    padding: 3rem;
  }
}
</style>
