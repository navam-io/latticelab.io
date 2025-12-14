<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div
        v-if="showHeader"
        class="text-center mb-12"
        :data-testid="`${testId}-header`"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          :data-testid="`${testId}-title`"
        >
          {{ sectionTitle }}
        </h2>
        <p
          v-if="sectionDescription"
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          :data-testid="`${testId}-description`"
        >
          {{ sectionDescription }}
        </p>
      </div>

      <!-- Pricing Card -->
      <div
        class="max-w-xl mx-auto"
        :data-testid="`${testId}-container`"
      >
        <article
          class="relative overflow-hidden bg-white rounded-3xl border border-gray-200 shadow-xl"
          :data-testid="`${testId}-card`"
        >
          <!-- Gradient Border Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 pointer-events-none"
            :data-testid="`${testId}-gradient`"
          />

          <!-- Card Content -->
          <div class="relative p-8 md:p-12">
            <!-- Price Section -->
            <div
              class="text-center mb-10"
              :data-testid="`${testId}-price-section`"
            >
              <!-- Price Amount -->
              <div class="mb-4">
                <span
                  class="text-7xl md:text-8xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"
                  :data-testid="`${testId}-price`"
                >
                  {{ price }}
                </span>
              </div>

              <!-- Tagline -->
              <p
                class="text-xl md:text-2xl font-medium text-gray-700"
                :data-testid="`${testId}-tagline`"
              >
                {{ tagline }}
              </p>
            </div>

            <!-- Divider -->
            <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mb-10" />

            <!-- Features List -->
            <ul
              class="space-y-4 mb-10"
              :data-testid="`${testId}-features`"
            >
              <li
                v-for="(feature, index) in features"
                :key="index"
                class="flex items-start gap-3"
                :data-testid="`${testId}-feature-${index}`"
              >
                <svg
                  class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  :data-testid="`${testId}-feature-${index}-icon`"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Section -->
            <div
              class="text-center"
              :data-testid="`${testId}-cta-section`"
            >
              <!-- Stripe Button Slot -->
              <div
                v-if="showStripeButton"
                class="stripe-button-container inline-flex mb-4"
                :data-testid="`${testId}-stripe-container`"
              >
                <slot name="stripe-button">
                  <!-- Default Stripe button placeholder -->
                  <stripe-buy-button
                    :buy-button-id="stripeButtonId"
                    :publishable-key="stripePublishableKey"
                  />
                </slot>
              </div>

              <!-- Alternative CTA Button -->
              <a
                v-if="ctaHref && !showStripeButton"
                :href="ctaHref"
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl hover:from-violet-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                :data-testid="`${testId}-cta-button`"
              >
                {{ ctaLabel }}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <!-- Trust Indicators -->
              <p
                v-if="trustText"
                class="text-sm text-gray-500 mt-4"
                :data-testid="`${testId}-trust-text`"
              >
                {{ trustText }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Section title */
  sectionTitle?: string
  /** Section description */
  sectionDescription?: string
  /** Whether to show the section header */
  showHeader?: boolean
  /** Price to display */
  price?: string
  /** Tagline under the price */
  tagline?: string
  /** List of features */
  features?: string[]
  /** Whether to show Stripe button */
  showStripeButton?: boolean
  /** Stripe buy button ID */
  stripeButtonId?: string
  /** Stripe publishable key */
  stripePublishableKey?: string
  /** Alternative CTA href (when not using Stripe) */
  ctaHref?: string
  /** Alternative CTA label */
  ctaLabel?: string
  /** Trust text under CTA */
  trustText?: string
  /** Background variant */
  background?: 'white' | 'gray' | 'gradient'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'Simple, One-Time Pricing',
  sectionDescription: 'Get lifetime access to Lattice with a single purchase. No subscriptions, no recurring fees.',
  showHeader: true,
  price: '$99',
  tagline: 'One-time payment. Lifetime access.',
  features: () => [
    'Full access to Sources, Lab, and Studio panels',
    '36 curated vendor blueprints (Anthropic, AWS, NVIDIA, GCP, Meta, Mistral)',
    'Unlimited workspaces and source ingestion',
    'Scenario configuration with SLOs, budget, and compliance',
    'Artifact generation and export (CSV, JSON, Markdown)',
    'All future updates included'
  ],
  showStripeButton: true,
  stripeButtonId: 'buy_btn_1SYXbwRCxnzBPkIXayfIahbD',
  stripePublishableKey: 'pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB',
  ctaHref: undefined,
  ctaLabel: 'Get Started',
  trustText: 'Secure payment via Stripe',
  background: 'gray',
  testId: 'pricing-card'
})

// Section classes based on background
const sectionClasses = computed(() => {
  const base = 'py-16 md:py-24'

  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50'
  }

  return `${base} ${backgrounds[props.background]}`
})
</script>

<style scoped>
.stripe-button-container {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
}
</style>
