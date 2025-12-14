<template>
  <div
    class="relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :data-testid="testId"
  >
    <!-- Trigger Button -->
    <button
      ref="triggerRef"
      @click="handleClick"
      @keydown.escape="close"
      @keydown.enter="handleClick"
      @keydown.space.prevent="handleClick"
      :class="triggerClasses"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      :data-testid="`${testId}-trigger`"
    >
      <slot name="trigger">
        {{ label }}
      </slot>
      <svg
        v-if="showChevron"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        :data-testid="`${testId}-chevron`"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Teleported Menu Panel - only render after mount to prevent SSR hydration issues -->
    <teleport to="body" v-if="isMounted">
      <!-- Backdrop overlay -->
      <transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="fixed inset-0 z-[45]"
          :class="backdropClasses"
          @click="close"
          :data-testid="`${testId}-backdrop`"
        />
      </transition>

      <!-- Menu panel -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isOpen"
          ref="panelRef"
          :class="panelClasses"
          @click.stop
          @mouseenter="handleMenuEnter"
          @mouseleave="handleMenuLeave"
          @keydown.escape="close"
          :data-testid="`${testId}-panel`"
        >
          <div :class="contentContainerClasses">
            <slot :close="close" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface Props {
  label?: string
  showChevron?: boolean
  closeOnClick?: boolean
  closeDelay?: number
  position?: 'full-width' | 'dropdown'
  offset?: number
  variant?: 'default' | 'dark' | 'light'
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Menu',
  showChevron: true,
  closeOnClick: true,
  closeDelay: 150,
  position: 'full-width',
  offset: 65,
  variant: 'default',
  testId: 'mega-menu'
})

const emit = defineEmits<{
  open: []
  close: []
  toggle: [isOpen: boolean]
}>()

const isOpen = ref(false)
const triggerRef = ref<HTMLButtonElement | null>(null)
const panelRef = ref<HTMLDivElement | null>(null)
const isTouchDevice = ref(false)
const isMounted = ref(false)
let closeTimeout: ReturnType<typeof setTimeout> | null = null

// Detect touch device
const checkTouchDevice = () => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// Trigger button classes
const triggerClasses = computed(() => {
  const base = 'flex items-center gap-1 transition-colors touch-manipulation'

  const variants = {
    default: 'text-foreground/60 hover:text-foreground/80',
    dark: 'text-white/70 hover:text-white',
    light: 'text-gray-600 hover:text-gray-900'
  }

  return `${base} ${variants[props.variant]}`
})

// Backdrop classes
const backdropClasses = computed(() => {
  const variants = {
    default: 'bg-black/10',
    dark: 'bg-black/30',
    light: 'bg-white/50'
  }

  return variants[props.variant]
})

// Panel classes
const panelClasses = computed(() => {
  const base = 'fixed z-[50]'

  const positions = {
    'full-width': `left-0 right-0 top-[${props.offset}px]`,
    'dropdown': 'min-w-[320px]'
  }

  const variants = {
    default: 'bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 border-b border-gray-200',
    dark: 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700',
    light: 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-xl'
  }

  if (props.position === 'full-width') {
    return `${base} left-0 right-0 ${variants[props.variant]}`
  }

  return `${base} ${positions[props.position]} ${variants[props.variant]} rounded-xl`
})

// Content container classes
const contentContainerClasses = computed(() => {
  if (props.position === 'full-width') {
    return 'container mx-auto px-4 py-6 sm:py-8 max-w-6xl'
  }
  return 'p-4'
})

// Desktop: hover behavior
const handleMouseEnter = () => {
  if (!isTouchDevice.value) {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      closeTimeout = null
    }
    open()
  }
}

const handleMouseLeave = () => {
  if (!isTouchDevice.value) {
    closeTimeout = setTimeout(() => {
      close()
    }, props.closeDelay)
  }
}

// Keep menu open when hovering over menu panel
const handleMenuEnter = () => {
  if (!isTouchDevice.value && closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
}

const handleMenuLeave = () => {
  if (!isTouchDevice.value) {
    closeTimeout = setTimeout(() => {
      close()
    }, props.closeDelay)
  }
}

// Click handler (works on all devices)
const handleClick = () => {
  toggle()
}

// Open/close/toggle methods
const open = () => {
  if (!isOpen.value) {
    isOpen.value = true
    emit('open')
    emit('toggle', true)
  }
}

const close = () => {
  if (isOpen.value) {
    isOpen.value = false
    emit('close')
    emit('toggle', false)
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      closeTimeout = null
    }
  }
}

const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

// Handle escape key globally
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    close()
    triggerRef.value?.focus()
  }
}

// Update panel position based on offset
watch(() => props.offset, () => {
  if (panelRef.value && props.position === 'full-width') {
    panelRef.value.style.top = `${props.offset}px`
  }
}, { immediate: true })

// Set initial panel position after mount
watch(isOpen, (newValue) => {
  if (newValue && panelRef.value && props.position === 'full-width') {
    panelRef.value.style.top = `${props.offset}px`
  }
})

onMounted(() => {
  // Set mounted flag to enable teleport (prevents SSR hydration issues)
  isMounted.value = true
  checkTouchDevice()
  window.addEventListener('resize', checkTouchDevice)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkTouchDevice)
  document.removeEventListener('keydown', handleEscape)
  if (closeTimeout) {
    clearTimeout(closeTimeout)
  }
})

// Expose methods for parent components
defineExpose({
  open,
  close,
  toggle,
  isOpen
})
</script>

<style scoped>
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
</style>
