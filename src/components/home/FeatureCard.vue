<template>
  <article
    :class="cardClasses"
    :data-testid="testId"
  >
    <!-- Card Content -->
    <div class="relative z-10 flex flex-col h-full">
      <!-- Header: Icon + Title -->
      <div class="mb-4">
        <!-- Icon -->
        <div
          v-if="icon || $slots.icon"
          :class="iconContainerClasses"
          :data-testid="`${testId}-icon`"
        >
          <slot name="icon">
            <div v-html="icon" class="w-6 h-6" />
          </slot>
        </div>

        <!-- Product Name -->
        <h3
          :class="titleClasses"
          :data-testid="`${testId}-title`"
        >
          {{ title }}
        </h3>

        <!-- Tagline -->
        <p
          :class="taglineClasses"
          :data-testid="`${testId}-tagline`"
        >
          {{ tagline }}
        </p>
      </div>

      <!-- Description (optional) -->
      <p
        v-if="description"
        class="text-sm text-gray-600 mb-4 flex-grow"
        :data-testid="`${testId}-description`"
      >
        {{ description }}
      </p>

      <!-- Badge (optional) -->
      <div
        v-if="badge"
        class="mb-4"
        :data-testid="`${testId}-badge`"
      >
        <span :class="badgeClasses">
          {{ badge }}
        </span>
      </div>

      <!-- Screenshot/Image Area -->
      <div
        class="relative mt-auto rounded-xl overflow-hidden bg-gray-100"
        :data-testid="`${testId}-image-container`"
      >
        <img
          v-if="screenshot"
          :src="screenshot"
          :alt="`${title} screenshot`"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          :data-testid="`${testId}-screenshot`"
        />
        <!-- Placeholder if no screenshot -->
        <div
          v-else
          class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
          :data-testid="`${testId}-placeholder`"
        >
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <!-- CTAs -->
      <div class="mt-4" :data-testid="`${testId}-ctas`">
        <DualCTA
          v-if="showCTAs"
          :secondaryLabel="secondaryCTA"
          :secondaryHref="secondaryHref"
          :primaryLabel="primaryCTA"
          :primaryHref="primaryHref"
          size="sm"
          alignment="left"
          showArrows
          :containerTestId="`${testId}-dual-cta`"
          :primaryTestId="`${testId}-primary-cta`"
          :secondaryTestId="`${testId}-secondary-cta`"
        />
        <!-- Single link when only href provided -->
        <a
          v-else-if="href"
          :href="href"
          class="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 group/link"
          :data-testid="`${testId}-link`"
        >
          {{ linkLabel }}
          <svg class="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Hover Glow Effect -->
    <div
      v-if="showGlow"
      :class="glowClasses"
      :data-testid="`${testId}-glow`"
    />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DualCTA from '@components/shared/DualCTA.vue'

interface Props {
  /** Product/feature title */
  title: string
  /** Short tagline */
  tagline: string
  /** Optional description text */
  description?: string
  /** SVG icon HTML string */
  icon?: string
  /** Icon background color class */
  iconBg?: string
  /** Screenshot image URL */
  screenshot?: string
  /** Optional badge text (e.g., "36 Blueprints") */
  badge?: string
  /** Simple link href (alternative to dual CTAs) */
  href?: string
  /** Label for simple link */
  linkLabel?: string
  /** Primary CTA label */
  primaryCTA?: string
  /** Primary CTA href */
  primaryHref?: string
  /** Secondary CTA label */
  secondaryCTA?: string
  /** Secondary CTA href */
  secondaryHref?: string
  /** Card color variant */
  variant?: 'violet' | 'blue' | 'teal' | 'amber' | 'emerald' | 'purple' | 'default'
  /** Whether to show hover glow effect */
  showGlow?: boolean
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: undefined,
  icon: undefined,
  iconBg: 'bg-violet-100',
  screenshot: undefined,
  badge: undefined,
  href: undefined,
  linkLabel: 'Learn more',
  primaryCTA: undefined,
  primaryHref: undefined,
  secondaryCTA: 'Learn more',
  secondaryHref: undefined,
  variant: 'default',
  showGlow: true,
  testId: 'feature-card'
})

// Determine if we should show dual CTAs
const showCTAs = computed(() => {
  return props.primaryCTA && props.primaryHref
})

// Card container classes
const cardClasses = computed(() => {
  const base = [
    'group',
    'relative',
    'bg-white',
    'rounded-3xl',
    'p-6',
    'border',
    'border-gray-200',
    'overflow-hidden',
    'transition-all',
    'duration-300',
    'hover:shadow-xl',
    'hover:-translate-y-1',
    'hover:border-gray-300'
  ]

  return base.join(' ')
})

// Icon container classes based on variant
const iconContainerClasses = computed(() => {
  const variantBgs: Record<string, string> = {
    violet: 'bg-violet-100',
    blue: 'bg-blue-100',
    teal: 'bg-teal-100',
    amber: 'bg-amber-100',
    emerald: 'bg-emerald-100',
    purple: 'bg-purple-100',
    default: props.iconBg
  }

  const variantColors: Record<string, string> = {
    violet: 'text-violet-600',
    blue: 'text-blue-600',
    teal: 'text-teal-600',
    amber: 'text-amber-600',
    emerald: 'text-emerald-600',
    purple: 'text-purple-600',
    default: 'text-violet-600'
  }

  return `w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${variantBgs[props.variant]} ${variantColors[props.variant]}`
})

// Title classes
const titleClasses = computed(() => {
  return 'text-xl font-bold text-gray-900 mb-1'
})

// Tagline classes
const taglineClasses = computed(() => {
  return 'text-sm text-gray-500 font-medium'
})

// Badge classes based on variant
const badgeClasses = computed(() => {
  const variantStyles: Record<string, string> = {
    violet: 'bg-violet-100 text-violet-700',
    blue: 'bg-blue-100 text-blue-700',
    teal: 'bg-teal-100 text-teal-700',
    amber: 'bg-amber-100 text-amber-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    purple: 'bg-purple-100 text-purple-700',
    default: 'bg-gray-100 text-gray-700'
  }

  return `inline-flex px-3 py-1 text-xs font-semibold rounded-full ${variantStyles[props.variant]}`
})

// Glow effect classes based on variant
const glowClasses = computed(() => {
  const variantGlows: Record<string, string> = {
    violet: 'from-violet-400/20',
    blue: 'from-blue-400/20',
    teal: 'from-teal-400/20',
    amber: 'from-amber-400/20',
    emerald: 'from-emerald-400/20',
    purple: 'from-purple-400/20',
    default: 'from-violet-400/20'
  }

  return `absolute -inset-px rounded-3xl bg-gradient-to-br ${variantGlows[props.variant]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`
})
</script>
