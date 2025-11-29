<template>
  <div class="subscribe-form">
    <!-- Compact inline form -->
    <form v-if="!isSubscribed" @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4">
      <input
        v-model="email"
        type="email"
        required
        :disabled="isSubmitting"
        placeholder="Enter your email"
        :class="[
          'flex-1 px-5 py-4 rounded-xl border transition-all duration-300',
          variant === 'dark'
            ? 'bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder-white/50 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20'
            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200'
        ]"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        :class="[
          'px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl',
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white hover:scale-105'
        ]"
      >
        <span v-if="!isSubmitting">Subscribe</span>
        <span v-else class="flex items-center gap-2">
          <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Subscribing...
        </span>
      </button>
    </form>

    <!-- Success State -->
    <div v-else :class="[
      'px-6 py-4 rounded-xl border backdrop-blur-sm',
      variant === 'dark'
        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30'
        : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
    ]">
      <div :class="[
        'flex items-center justify-center gap-2',
        variant === 'dark' ? 'text-green-400' : 'text-green-600'
      ]">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="font-semibold text-lg">You're subscribed!</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  variant?: 'light' | 'dark'
  source?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  source: 'latticelab.io'
})

// Email subscription state
const email = ref('')
const isSubmitting = ref(false)
const isSubscribed = ref(false)

// Google Apps Script URL (same as contact form)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdlD8irGX0Rbm-URqJgOmVXx8Ox3AXnxJ8P6KOzx1ZgTqpYFxxMLfFpEBM4PPczkwZdw/exec'

const handleSubscribe = async () => {
  if (!email.value || isSubmitting.value) return

  isSubmitting.value = true

  try {
    const payload = {
      email: email.value,
      name: '',
      company: '',
      message: 'Newsletter subscription - Lattice Lab',
      timestamp: new Date().toISOString(),
      source: props.source
    }

    // Use form submission approach that works with Google Apps Script
    const formElement = document.createElement('form')
    formElement.method = 'POST'
    formElement.action = GOOGLE_SCRIPT_URL
    formElement.target = 'hidden_iframe'
    formElement.style.display = 'none'

    // Add form fields
    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = String(value)
      formElement.appendChild(input)
    })

    // Create hidden iframe for submission
    let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.id = 'hidden_iframe'
      iframe.name = 'hidden_iframe'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
    }

    // Submit form
    document.body.appendChild(formElement)
    formElement.submit()
    document.body.removeChild(formElement)

    // Show success after short delay
    setTimeout(() => {
      isSubscribed.value = true
      isSubmitting.value = false
    }, 1000)

  } catch (error) {
    console.error('Subscription error:', error)
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
