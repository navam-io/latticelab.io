<template>
  <component
    :is="as"
    :class="gradientClasses"
    :style="customGradientStyle"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /**
   * The text content to display (alternative to using slot)
   */
  text?: string
  /**
   * The gradient variant to use
   * - primary: Violet to Blue
   * - secondary: Teal to Cyan
   * - accent: Blue to Teal
   * - hero: Purple/Indigo spectrum (for dark backgrounds)
   * - light: Light gradient (for dark backgrounds)
   * - animated: Animated shifting gradient
   * - custom: Use customFrom and customTo props
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'hero' | 'light' | 'animated' | 'custom'
  /**
   * The size of the text
   * - hero: Extra large (120px+), for main hero headlines
   * - display-xl/lg/md/sm: Display sizes for section headlines
   * - heading-xl/lg/md/sm/xs: Heading sizes
   */
  size?: 'hero' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xs'
  /**
   * The HTML tag to render
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  /**
   * Custom gradient start color (hex, rgb, or CSS color)
   * Only used when variant is 'custom'
   */
  customFrom?: string
  /**
   * Custom gradient end color (hex, rgb, or CSS color)
   * Only used when variant is 'custom'
   */
  customTo?: string
  /**
   * Custom gradient direction in degrees (default: 135)
   * Only used when variant is 'custom'
   */
  customAngle?: number
  /**
   * Whether to center the text
   */
  centered?: boolean
  /**
   * Additional CSS classes to apply
   */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: undefined,
  variant: 'primary',
  size: 'heading-lg',
  as: 'span',
  customFrom: '#8B5CF6',
  customTo: '#3B82F6',
  customAngle: 135,
  centered: false,
  class: ''
})

const sizeClasses: Record<NonNullable<Props['size']>, string> = {
  'hero': 'text-hero',
  'display-xl': 'text-display-xl',
  'display-lg': 'text-display-lg',
  'display-md': 'text-display-md',
  'display-sm': 'text-display-sm',
  'heading-xl': 'heading-xl',
  'heading-lg': 'heading-lg',
  'heading-md': 'heading-md',
  'heading-sm': 'heading-sm',
  'heading-xs': 'heading-xs'
}

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
  'primary': 'gradient-text-primary',
  'secondary': 'gradient-text-secondary',
  'accent': 'gradient-text-accent',
  'hero': 'gradient-text-hero',
  'light': 'gradient-text-light',
  'animated': 'gradient-text-animated',
  'custom': 'gradient-text' // Base class for custom gradients
}

const gradientClasses = computed(() => {
  const classes = [
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.centered ? 'text-center' : '',
    props.class
  ]
  return classes.filter(Boolean).join(' ')
})

const customGradientStyle = computed(() => {
  if (props.variant !== 'custom') return undefined

  return {
    backgroundImage: `linear-gradient(${props.customAngle}deg, ${props.customFrom} 0%, ${props.customTo} 100%)`
  }
})
</script>
