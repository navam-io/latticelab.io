<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'bordered'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false
})

const cardClasses = computed(() => {
  const base = 'rounded-2xl p-6 transition-all duration-300'

  const variants = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border border-gray-200'
  }

  const hoverClass = props.hover ? 'hover:shadow-xl hover:-translate-y-1' : ''

  return `${base} ${variants[props.variant]} ${hoverClass}`
})
</script>
