<template>
  <div :class="containerClasses" :data-testid="containerTestId">
    <!-- Secondary/Outline Button (Learn more) -->
    <component
      :is="secondaryHref ? 'a' : 'button'"
      :href="secondaryHref"
      :class="secondaryButtonClasses"
      :data-testid="secondaryTestId"
    >
      {{ secondaryLabel }}
      <svg
        v-if="showArrows"
        class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </component>

    <!-- Primary/Filled Button (Buy) -->
    <component
      :is="primaryHref ? 'a' : 'button'"
      :href="primaryHref"
      :class="primaryButtonClasses"
      :data-testid="primaryTestId"
    >
      {{ primaryLabel }}
      <svg
        v-if="showArrows"
        class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // Primary button (filled) - typically "Buy" or main action
  primaryLabel?: string
  primaryHref?: string
  primaryTestId?: string

  // Secondary button (outline) - typically "Learn more"
  secondaryLabel?: string
  secondaryHref?: string
  secondaryTestId?: string

  // Container test ID
  containerTestId?: string

  // Styling options
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'dark' | 'light'
  alignment?: 'left' | 'center' | 'right'
  stacked?: boolean
  showArrows?: boolean
  gap?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  primaryLabel: 'Buy',
  primaryHref: undefined,
  primaryTestId: 'dual-cta-primary',
  secondaryLabel: 'Learn more',
  secondaryHref: undefined,
  secondaryTestId: 'dual-cta-secondary',
  containerTestId: undefined,
  size: 'md',
  variant: 'default',
  alignment: 'left',
  stacked: false,
  showArrows: false,
  gap: 'md'
})

// Container classes for layout
const containerClasses = computed(() => {
  const base = 'flex'

  // Direction: stacked (column) vs inline (row)
  const direction = props.stacked
    ? 'flex-col'
    : 'flex-col sm:flex-row'

  // Alignment
  const alignments = {
    left: 'items-start sm:items-center justify-start',
    center: 'items-center justify-center',
    right: 'items-end sm:items-center justify-end'
  }

  // Gap between buttons
  const gaps = {
    sm: 'gap-2',
    md: 'gap-3 sm:gap-4',
    lg: 'gap-4 sm:gap-6'
  }

  return `${base} ${direction} ${alignments[props.alignment]} ${gaps[props.gap]}`
})

// Base button classes shared by both buttons
const baseButtonClasses = computed(() => {
  const base = 'group inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return `${base} ${sizes[props.size]}`
})

// Primary button (filled) classes
const primaryButtonClasses = computed(() => {
  const variants = {
    default: 'bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg',
    dark: 'bg-white text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-lg',
    light: 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
  }

  return `${baseButtonClasses.value} ${variants[props.variant]}`
})

// Secondary button (outline) classes
const secondaryButtonClasses = computed(() => {
  const variants = {
    default: 'text-violet-600 hover:text-violet-700 hover:bg-violet-50',
    dark: 'text-white hover:text-gray-200 hover:bg-white/10',
    light: 'text-gray-900 hover:text-gray-700 hover:bg-gray-100'
  }

  return `${baseButtonClasses.value} ${variants[props.variant]}`
})
</script>
