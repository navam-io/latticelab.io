<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'secondary' | 'outline' | 'vendor'
  vendorColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  vendorColor: undefined
})

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors'

  const variants = {
    default: 'bg-violet-100 text-violet-700',
    secondary: 'bg-gray-100 text-gray-700',
    outline: 'border border-gray-200 text-gray-600',
    vendor: props.vendorColor || 'bg-gray-100 text-gray-700'
  }

  return `${base} ${variants[props.variant]}`
})
</script>
