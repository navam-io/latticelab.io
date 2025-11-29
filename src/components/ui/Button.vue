<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  href: undefined,
  disabled: false
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200'

  const variants = {
    primary: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabledClass}`
})
</script>
