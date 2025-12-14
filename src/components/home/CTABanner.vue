<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <!-- Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600"
      :data-testid="`${testId}-gradient`"
    />

    <!-- Optional Pattern Overlay -->
    <div
      v-if="showPattern"
      class="absolute inset-0 opacity-10"
      :data-testid="`${testId}-pattern`"
    >
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
    </div>

    <!-- Content Container -->
    <div class="relative container mx-auto px-4">
      <div
        :class="contentClasses"
        :data-testid="`${testId}-content`"
      >
        <!-- Headline -->
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          :data-testid="`${testId}-headline`"
        >
          {{ headline }}
        </h2>

        <!-- Subheadline -->
        <p
          v-if="subheadline"
          class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          :class="{ 'mx-auto': centered }"
          :data-testid="`${testId}-subheadline`"
        >
          {{ subheadline }}
        </p>

        <!-- CTAs -->
        <DualCTA
          :primaryLabel="primaryCTA"
          :primaryHref="primaryHref"
          :secondaryLabel="secondaryCTA"
          :secondaryHref="secondaryHref"
          variant="dark"
          :size="ctaSize"
          :alignment="centered ? 'center' : 'left'"
          :showArrows="showArrows"
          :primaryTestId="`${testId}-primary-cta`"
          :secondaryTestId="`${testId}-secondary-cta`"
          :containerTestId="`${testId}-cta-container`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DualCTA from '../shared/DualCTA.vue'

interface Props {
  /** Main headline text */
  headline?: string
  /** Optional subheadline text */
  subheadline?: string
  /** Primary CTA button label */
  primaryCTA?: string
  /** Primary CTA href */
  primaryHref?: string
  /** Secondary CTA button label */
  secondaryCTA?: string
  /** Secondary CTA href */
  secondaryHref?: string
  /** Whether to center content */
  centered?: boolean
  /** Whether to show arrows on CTAs */
  showArrows?: boolean
  /** CTA button size */
  ctaSize?: 'sm' | 'md' | 'lg'
  /** Whether to show pattern overlay */
  showPattern?: boolean
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  headline: 'Start Making Confident Decisions',
  subheadline: 'Join engineers who trust Lattice for AI infrastructure planning.',
  primaryCTA: 'Get Started',
  primaryHref: '/#pricing',
  secondaryCTA: 'View Documentation',
  secondaryHref: '/docs',
  centered: true,
  showArrows: true,
  ctaSize: 'lg',
  showPattern: false,
  testId: 'cta-banner'
})

// Section classes
const sectionClasses = computed(() => {
  return 'relative py-16 md:py-24 overflow-hidden'
})

// Content alignment classes
const contentClasses = computed(() => {
  const base = 'relative z-10'
  const alignment = props.centered ? 'text-center' : 'text-left'

  return `${base} ${alignment}`
})
</script>
