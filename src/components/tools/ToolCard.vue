<template>
  <article
    :class="cardClasses"
    :data-testid="testId"
  >
    <!-- Icon -->
    <div
      :class="iconClasses"
      :data-testid="`${testId}-icon`"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="icon"
        />
      </svg>
    </div>

    <!-- Category Badge -->
    <span
      v-if="category && showCategory"
      :class="categoryClasses"
      :data-testid="`${testId}-category`"
    >
      {{ category }}
    </span>

    <!-- Name -->
    <h3
      class="text-lg font-bold text-gray-900 mb-2"
      :data-testid="`${testId}-name`"
    >
      {{ name }}
    </h3>

    <!-- Description -->
    <p
      class="text-sm text-gray-600 mb-4 line-clamp-2"
      :data-testid="`${testId}-description`"
    >
      {{ description }}
    </p>

    <!-- Features -->
    <div
      v-if="features.length > 0 && showFeatures"
      class="mb-4"
      :data-testid="`${testId}-features`"
    >
      <ul class="space-y-1">
        <li
          v-for="(feature, index) in displayedFeatures"
          :key="index"
          class="flex items-start gap-2 text-xs text-gray-600"
          :data-testid="`${testId}-feature-${index}`"
        >
          <svg class="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
      <span
        v-if="features.length > maxFeatures"
        class="text-xs text-gray-400 mt-1 block"
        :data-testid="`${testId}-features-more`"
      >
        +{{ features.length - maxFeatures }} more features
      </span>
    </div>

    <!-- CTAs -->
    <div
      class="flex items-center gap-3 mt-auto"
      :data-testid="`${testId}-ctas`"
    >
      <!-- Primary CTA: Explore -->
      <a
        :href="exploreHref"
        :class="exploreBtnClasses"
        :data-testid="`${testId}-explore`"
      >
        {{ exploreText }}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      <!-- Secondary CTA: Try Demo (optional) -->
      <a
        v-if="showDemoBtn && demoHref"
        :href="demoHref"
        :class="demoBtnClasses"
        :data-testid="`${testId}-demo`"
      >
        {{ demoText }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Tool name */
  name: string
  /** Tool description */
  description: string
  /** SVG path for icon */
  icon: string
  /** Icon background color (Tailwind class) */
  iconBg?: string
  /** Icon color (Tailwind class) */
  iconColor?: string
  /** Tool category */
  category?: string
  /** Show category badge */
  showCategory?: boolean
  /** Feature highlights */
  features?: string[]
  /** Show features list */
  showFeatures?: boolean
  /** Maximum features to show */
  maxFeatures?: number
  /** Explore link href */
  exploreHref: string
  /** Explore button text */
  exploreText?: string
  /** Demo link href */
  demoHref?: string
  /** Demo button text */
  demoText?: string
  /** Show demo button */
  showDemoBtn?: boolean
  /** Card size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconBg: 'bg-violet-100',
  iconColor: 'text-violet-600',
  showCategory: false,
  features: () => [],
  showFeatures: true,
  maxFeatures: 3,
  exploreText: 'Explore',
  demoText: 'Try Demo',
  showDemoBtn: false,
  size: 'md',
  testId: 'tool-card'
})

// Displayed features limited by maxFeatures
const displayedFeatures = computed(() => {
  return props.features.slice(0, props.maxFeatures)
})

// Card classes based on size
const cardClasses = computed(() => {
  const base = 'flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-violet-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'

  const sizes = {
    sm: 'p-4 min-h-[200px]',
    md: 'p-6 min-h-[280px]',
    lg: 'p-8 min-h-[320px]'
  }

  return `${base} ${sizes[props.size]}`
})

// Icon container classes
const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-10 h-10 rounded-lg mb-3',
    md: 'w-12 h-12 rounded-xl mb-4',
    lg: 'w-14 h-14 rounded-xl mb-5'
  }

  return `${sizes[props.size]} flex items-center justify-center ${props.iconBg} ${props.iconColor}`
})

// Category badge classes
const categoryClasses = computed(() => {
  return 'inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full mb-2 capitalize'
})

// Explore button classes
const exploreBtnClasses = computed(() => {
  return 'inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors'
})

// Demo button classes
const demoBtnClasses = computed(() => {
  return 'inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors'
})
</script>
