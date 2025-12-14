<template>
  <ul
    :class="listClasses"
    :data-testid="testId"
  >
    <li
      v-for="(link, index) in links"
      :key="index"
      :data-testid="`${testId}-item-${index}`"
    >
      <a
        :href="link.href"
        :class="linkClasses"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        :data-testid="`${testId}-link-${index}`"
      >
        {{ link.label }}
        <svg
          v-if="link.external"
          class="w-3 h-3 inline-block ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          :data-testid="`${testId}-external-icon-${index}`"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface FooterLink {
  /** Link label */
  label: string
  /** Link URL */
  href: string
  /** Whether link opens in new tab */
  external?: boolean
}

interface Props {
  /** Array of links to display */
  links: FooterLink[]
  /** Spacing between links */
  spacing?: 'tight' | 'normal' | 'relaxed'
  /** Link size variant */
  size?: 'sm' | 'md'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  spacing: 'normal',
  size: 'sm',
  testId: 'footer-links'
})

// List spacing classes
const listClasses = computed(() => {
  const spacings: Record<string, string> = {
    tight: 'space-y-1',
    normal: 'space-y-2',
    relaxed: 'space-y-3'
  }

  return spacings[props.spacing]
})

// Link styling classes
const linkClasses = computed(() => {
  const base = 'text-gray-500 hover:text-gray-900 transition-colors duration-200'

  const sizes: Record<string, string> = {
    sm: 'text-sm',
    md: 'text-base'
  }

  return `${base} ${sizes[props.size]}`
})
</script>
