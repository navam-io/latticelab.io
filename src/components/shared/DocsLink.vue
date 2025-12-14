<template>
  <a
    :href="href"
    :class="containerClasses"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :data-testid="testId"
  >
    <!-- Icon -->
    <div :class="iconContainerClasses">
      <svg
        v-if="icon === 'book'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="icon-book"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <svg
        v-else-if="icon === 'code'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="icon-code"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
      <svg
        v-else-if="icon === 'guide'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="icon-guide"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
      <svg
        v-else-if="icon === 'api'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="icon-api"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="icon-document"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <h4 :class="titleClasses" data-testid="docs-link-title">
        {{ title }}
      </h4>
      <p v-if="description" :class="descriptionClasses" data-testid="docs-link-description">
        {{ description }}
      </p>
    </div>

    <!-- Arrow -->
    <div :class="arrowClasses">
      <svg
        v-if="external"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="arrow-external"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-testid="arrow-internal"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description?: string
  href: string
  icon?: 'book' | 'code' | 'guide' | 'api' | 'document'
  variant?: 'default' | 'subtle' | 'bordered' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: undefined,
  icon: 'document',
  variant: 'default',
  size: 'md',
  external: false,
  testId: 'docs-link'
})

const containerClasses = computed(() => {
  const base = 'group flex items-start gap-4 rounded-xl transition-all duration-200 no-underline'

  const variants = {
    default: 'bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200',
    subtle: 'bg-transparent hover:bg-gray-50',
    bordered: 'bg-white border border-gray-200 hover:border-violet-300 hover:shadow-md',
    filled: 'bg-violet-50 hover:bg-violet-100 border border-violet-100 hover:border-violet-200'
  }

  const sizes = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-5'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})

const iconContainerClasses = computed(() => {
  const base = 'flex-shrink-0 flex items-center justify-center rounded-lg'

  const variants = {
    default: 'bg-gray-200 text-gray-600 group-hover:bg-violet-100 group-hover:text-violet-600',
    subtle: 'bg-gray-100 text-gray-500 group-hover:bg-violet-100 group-hover:text-violet-600',
    bordered: 'bg-violet-100 text-violet-600',
    filled: 'bg-violet-200 text-violet-700'
  }

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})

const titleClasses = computed(() => {
  const base = 'font-semibold transition-colors duration-200'

  const variants = {
    default: 'text-gray-900 group-hover:text-violet-700',
    subtle: 'text-gray-800 group-hover:text-violet-700',
    bordered: 'text-gray-900 group-hover:text-violet-700',
    filled: 'text-violet-900 group-hover:text-violet-800'
  }

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})

const descriptionClasses = computed(() => {
  const base = 'mt-1 transition-colors duration-200'

  const variants = {
    default: 'text-gray-600 group-hover:text-gray-700',
    subtle: 'text-gray-500 group-hover:text-gray-600',
    bordered: 'text-gray-600 group-hover:text-gray-700',
    filled: 'text-violet-700 group-hover:text-violet-800'
  }

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})

const arrowClasses = computed(() => {
  const base = 'flex-shrink-0 transition-all duration-200 group-hover:translate-x-1'

  const variants = {
    default: 'text-gray-400 group-hover:text-violet-600',
    subtle: 'text-gray-400 group-hover:text-violet-600',
    bordered: 'text-violet-400 group-hover:text-violet-600',
    filled: 'text-violet-500 group-hover:text-violet-700'
  }

  return `${base} ${variants[props.variant]}`
})
</script>
