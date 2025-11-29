<template>
  <section :class="[
    'py-16',
    variant === 'dark'
      ? 'bg-gradient-to-r from-violet-900 via-purple-900 to-blue-900'
      : 'bg-gradient-to-r from-violet-50 via-blue-50 to-purple-50'
  ]">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Icon -->
        <div :class="[
          'w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6',
          variant === 'dark' ? 'bg-white/10' : 'bg-violet-100'
        ]">
          <svg :class="[
            'w-8 h-8',
            variant === 'dark' ? 'text-white' : 'text-violet-600'
          ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>

        <!-- Title -->
        <h2 :class="[
          'text-3xl font-bold mb-4',
          variant === 'dark' ? 'text-white' : 'text-gray-900'
        ]">
          Subscribe to Lattice Lab Newsletter
        </h2>

        <!-- Subtitle -->
        <p :class="[
          'text-lg mb-8 max-w-xl mx-auto',
          variant === 'dark' ? 'text-white/80' : 'text-gray-600'
        ]">
          Practitioner guidance on building world class AI systems
        </p>

        <!-- Subscribe Form -->
        <SubscribeForm :variant="variant" source="latticelab.io/newsletter-section" />

        <!-- Privacy note -->
        <p :class="[
          'text-sm mt-4',
          variant === 'dark' ? 'text-white/60' : 'text-gray-500'
        ]">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SubscribeForm from './SubscribeForm.vue'

interface Props {
  variant?: 'light' | 'dark'
}

withDefaults(defineProps<Props>(), {
  variant: 'light'
})
</script>
