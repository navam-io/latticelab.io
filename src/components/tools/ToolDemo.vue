<template>
  <div
    :class="containerClasses"
    :data-testid="testId"
  >
    <!-- Header -->
    <div
      v-if="showHeader"
      class="flex items-center justify-between mb-4 pb-4 border-b border-gray-200"
      :data-testid="`${testId}-header`"
    >
      <div class="flex items-center gap-3">
        <!-- Demo Icon -->
        <div
          :class="iconClasses"
          :data-testid="`${testId}-icon`"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3
            class="font-semibold text-gray-900"
            :data-testid="`${testId}-title`"
          >
            {{ title }}
          </h3>
          <p
            v-if="subtitle"
            class="text-sm text-gray-500"
            :data-testid="`${testId}-subtitle`"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div
        class="flex items-center gap-2"
        :data-testid="`${testId}-actions`"
      >
        <button
          v-if="showResetBtn"
          type="button"
          class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          :data-testid="`${testId}-reset-btn`"
          @click="handleReset"
          aria-label="Reset demo"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <button
          v-if="showFullscreenBtn"
          type="button"
          class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          :data-testid="`${testId}-fullscreen-btn`"
          @click="toggleFullscreen"
          aria-label="Toggle fullscreen"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Demo Content Area -->
    <div
      :class="contentClasses"
      :data-testid="`${testId}-content`"
    >
      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center bg-white/80 z-10"
        :data-testid="`${testId}-loading`"
      >
        <div class="flex flex-col items-center gap-3">
          <div class="w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full animate-spin" />
          <span class="text-sm text-gray-600">{{ loadingText }}</span>
        </div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="hasError"
        class="absolute inset-0 flex items-center justify-center bg-red-50 z-10"
        :data-testid="`${testId}-error`"
      >
        <div class="flex flex-col items-center gap-3 text-center px-4">
          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p class="font-medium text-red-800">{{ errorTitle }}</p>
            <p class="text-sm text-red-600">{{ errorMessage }}</p>
          </div>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
            :data-testid="`${testId}-retry-btn`"
            @click="handleRetry"
          >
            Try Again
          </button>
        </div>
      </div>

      <!-- Placeholder State -->
      <div
        v-else-if="showPlaceholder"
        class="flex items-center justify-center h-full"
        :data-testid="`${testId}-placeholder`"
      >
        <div class="flex flex-col items-center gap-4 text-center px-4">
          <div
            :class="placeholderIconClasses"
            :data-testid="`${testId}-placeholder-icon`"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="placeholderIcon" />
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900">{{ placeholderTitle }}</p>
            <p class="text-sm text-gray-500 max-w-sm">{{ placeholderDescription }}</p>
          </div>
          <button
            v-if="showStartBtn"
            type="button"
            :class="startBtnClasses"
            :data-testid="`${testId}-start-btn`"
            @click="handleStart"
          >
            {{ startBtnText }}
          </button>
        </div>
      </div>

      <!-- Slot for actual demo content -->
      <slot v-else />
    </div>

    <!-- Footer -->
    <div
      v-if="showFooter"
      class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between"
      :data-testid="`${testId}-footer`"
    >
      <p class="text-xs text-gray-500">{{ footerText }}</p>
      <a
        v-if="docsLink"
        :href="docsLink"
        class="text-xs text-violet-600 hover:text-violet-700 font-medium"
        :data-testid="`${testId}-docs-link`"
      >
        View Documentation
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Demo title */
  title?: string
  /** Demo subtitle */
  subtitle?: string
  /** Whether demo is loading */
  isLoading?: boolean
  /** Loading text */
  loadingText?: string
  /** Whether there's an error */
  hasError?: boolean
  /** Error title */
  errorTitle?: string
  /** Error message */
  errorMessage?: string
  /** Whether to show placeholder */
  showPlaceholder?: boolean
  /** Placeholder title */
  placeholderTitle?: string
  /** Placeholder description */
  placeholderDescription?: string
  /** Placeholder icon (SVG path) */
  placeholderIcon?: string
  /** Show start button in placeholder */
  showStartBtn?: boolean
  /** Start button text */
  startBtnText?: string
  /** Show header */
  showHeader?: boolean
  /** Show footer */
  showFooter?: boolean
  /** Footer text */
  footerText?: string
  /** Documentation link */
  docsLink?: string
  /** Show reset button */
  showResetBtn?: boolean
  /** Show fullscreen button */
  showFullscreenBtn?: boolean
  /** Container height */
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  /** Color scheme */
  colorScheme?: 'violet' | 'blue' | 'emerald' | 'amber' | 'rose'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Interactive Demo',
  loadingText: 'Loading demo...',
  errorTitle: 'Demo Unavailable',
  errorMessage: 'There was an error loading the demo. Please try again.',
  placeholderTitle: 'Ready to Explore',
  placeholderDescription: 'Click the button below to start the interactive demo.',
  placeholderIcon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
  showStartBtn: true,
  startBtnText: 'Start Demo',
  showHeader: true,
  showFooter: false,
  footerText: 'This is an interactive demo. Your inputs are not saved.',
  showResetBtn: true,
  showFullscreenBtn: false,
  height: 'md',
  colorScheme: 'violet',
  testId: 'tool-demo'
})

// Emit events
const emit = defineEmits<{
  (e: 'reset'): void
  (e: 'start'): void
  (e: 'retry'): void
  (e: 'fullscreen', isFullscreen: boolean): void
}>()

// Color schemes
const colorSchemes = {
  violet: {
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    btnBg: 'bg-violet-600 hover:bg-violet-700',
    btnText: 'text-white'
  },
  blue: {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    btnBg: 'bg-blue-600 hover:bg-blue-700',
    btnText: 'text-white'
  },
  emerald: {
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700',
    btnText: 'text-white'
  },
  amber: {
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    btnBg: 'bg-amber-600 hover:bg-amber-700',
    btnText: 'text-white'
  },
  rose: {
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    btnBg: 'bg-rose-600 hover:bg-rose-700',
    btnText: 'text-white'
  }
}

const currentScheme = computed(() => colorSchemes[props.colorScheme])

// Container classes
const containerClasses = computed(() => {
  return 'bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'
})

// Icon classes
const iconClasses = computed(() => {
  return `w-10 h-10 rounded-xl flex items-center justify-center ${currentScheme.value.iconBg} ${currentScheme.value.iconColor}`
})

// Content area classes
const contentClasses = computed(() => {
  const base = 'relative bg-gray-50 rounded-xl overflow-hidden'

  const heights = {
    sm: 'min-h-[200px]',
    md: 'min-h-[300px]',
    lg: 'min-h-[400px]',
    xl: 'min-h-[500px]',
    auto: 'min-h-[200px]'
  }

  return `${base} ${heights[props.height]}`
})

// Placeholder icon classes
const placeholderIconClasses = computed(() => {
  return `w-16 h-16 rounded-2xl flex items-center justify-center ${currentScheme.value.iconBg} ${currentScheme.value.iconColor}`
})

// Start button classes
const startBtnClasses = computed(() => {
  return `px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors ${currentScheme.value.btnBg} ${currentScheme.value.btnText}`
})

// Event handlers
const handleReset = () => {
  emit('reset')
}

const handleStart = () => {
  emit('start')
}

const handleRetry = () => {
  emit('retry')
}

const toggleFullscreen = () => {
  // This would need browser fullscreen API integration
  emit('fullscreen', true)
}
</script>
