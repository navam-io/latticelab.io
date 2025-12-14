<template>
  <div
    :class="columnClasses"
    :data-testid="testId"
  >
    <!-- Column Title -->
    <h3
      :class="titleClasses"
      :data-testid="`${testId}-title`"
    >
      {{ title }}
    </h3>

    <!-- Links -->
    <FooterLinks
      :links="links"
      :spacing="linkSpacing"
      :size="linkSize"
      :testId="`${testId}-links`"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FooterLinks, { type FooterLink } from './FooterLinks.vue'

interface Props {
  /** Column title */
  title: string
  /** Array of links to display */
  links: FooterLink[]
  /** Spacing between links */
  linkSpacing?: 'tight' | 'normal' | 'relaxed'
  /** Link size */
  linkSize?: 'sm' | 'md'
  /** Title size */
  titleSize?: 'sm' | 'md' | 'lg'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  linkSpacing: 'normal',
  linkSize: 'sm',
  titleSize: 'sm',
  testId: 'footer-column'
})

// Column container classes
const columnClasses = computed(() => {
  return 'flex flex-col'
})

// Title styling classes
const titleClasses = computed(() => {
  const base = 'font-semibold text-gray-900 mb-4'

  const sizes: Record<string, string> = {
    sm: 'text-xs uppercase tracking-wider',
    md: 'text-sm',
    lg: 'text-base'
  }

  return `${base} ${sizes[props.titleSize]}`
})
</script>
