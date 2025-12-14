<template>
  <div :data-testid="testId">
    <!-- Hamburger Button -->
    <button
      ref="triggerRef"
      @click="toggle"
      @keydown.escape="close"
      :class="triggerClasses"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      aria-label="Open menu"
      :data-testid="`${testId}-trigger`"
    >
      <slot name="trigger">
        <!-- Animated hamburger icon -->
        <div class="relative w-6 h-5 flex flex-col justify-between">
          <span
            :class="[
              'block h-0.5 w-6 rounded-full transition-all duration-300',
              variant === 'dark' ? 'bg-white' : 'bg-gray-900',
              isOpen ? 'rotate-45 translate-y-2' : ''
            ]"
          />
          <span
            :class="[
              'block h-0.5 w-6 rounded-full transition-all duration-300',
              variant === 'dark' ? 'bg-white' : 'bg-gray-900',
              isOpen ? 'opacity-0' : ''
            ]"
          />
          <span
            :class="[
              'block h-0.5 w-6 rounded-full transition-all duration-300',
              variant === 'dark' ? 'bg-white' : 'bg-gray-900',
              isOpen ? '-rotate-45 -translate-y-2' : ''
            ]"
          />
        </div>
      </slot>
    </button>

    <!-- Teleported Overlay and Panel -->
    <teleport to="body" v-if="isMounted">
      <!-- Backdrop overlay -->
      <transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="fixed inset-0 z-[90] bg-black/50"
          @click="close"
          :data-testid="`${testId}-backdrop`"
        />
      </transition>

      <!-- Mobile Navigation Panel -->
      <transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-show="isOpen"
          ref="panelRef"
          :class="panelClasses"
          @keydown.escape="close"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          :data-testid="`${testId}-panel`"
        >
          <!-- Panel Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <slot name="header">
              <span class="text-lg font-semibold">Menu</span>
            </slot>
            <button
              @click="close"
              class="p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Close menu"
              :data-testid="`${testId}-close`"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Navigation Content -->
          <nav class="flex-1 overflow-y-auto overscroll-contain" :data-testid="`${testId}-nav`">
            <slot :close="close" :toggleSection="toggleSection" :openSections="openSections">
              <!-- Default accordion sections -->
              <div v-for="(section, index) in sections" :key="section.title" class="border-b border-gray-100">
                <!-- Section Header (Accordion trigger) -->
                <button
                  @click="toggleSection(section.title)"
                  class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors touch-manipulation"
                  :aria-expanded="openSections.includes(section.title)"
                  :data-testid="`${testId}-section-${index}`"
                >
                  <span class="font-medium text-gray-900">{{ section.title }}</span>
                  <svg
                    class="w-5 h-5 text-gray-500 transition-transform duration-200"
                    :class="{ 'rotate-180': openSections.includes(section.title) }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Section Content (Accordion panel) -->
                <transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-96"
                  leave-active-class="transition-all duration-150 ease-in"
                  leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div
                    v-show="openSections.includes(section.title)"
                    class="overflow-hidden bg-gray-50"
                    :data-testid="`${testId}-section-${index}-content`"
                  >
                    <div class="py-2">
                      <a
                        v-for="(link, linkIndex) in section.links"
                        :key="link.href"
                        :href="link.href"
                        @click="handleLinkClick"
                        class="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors touch-manipulation min-h-[48px]"
                        :data-testid="`${testId}-section-${index}-link-${linkIndex}`"
                      >
                        <!-- Icon slot -->
                        <div
                          v-if="link.icon"
                          class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          :class="link.iconBg || 'bg-violet-100'"
                        >
                          <component :is="link.icon" v-if="typeof link.icon === 'object'" class="w-4 h-4 text-violet-600" />
                          <span v-else v-html="link.icon" class="w-4 h-4 text-violet-600" />
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-center gap-2">
                            <span class="text-gray-900">{{ link.label }}</span>
                            <span
                              v-if="link.badge"
                              class="px-1.5 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 rounded"
                            >
                              {{ link.badge }}
                            </span>
                          </div>
                          <p v-if="link.description" class="text-sm text-gray-500 truncate">
                            {{ link.description }}
                          </p>
                        </div>
                        <svg
                          v-if="showArrows"
                          class="w-4 h-4 text-gray-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </transition>
              </div>
            </slot>
          </nav>

          <!-- Panel Footer -->
          <div v-if="$slots.footer" class="p-4 border-t border-gray-200 mt-auto">
            <slot name="footer" :close="close" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface NavLink {
  label: string
  href: string
  description?: string
  icon?: string | object
  iconBg?: string
  badge?: string
}

interface NavSection {
  title: string
  links: NavLink[]
}

interface Props {
  sections?: NavSection[]
  showArrows?: boolean
  closeOnLinkClick?: boolean
  variant?: 'default' | 'dark'
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  sections: () => [],
  showArrows: true,
  closeOnLinkClick: true,
  variant: 'default',
  testId: 'mobile-nav'
})

const emit = defineEmits<{
  open: []
  close: []
  toggle: [isOpen: boolean]
}>()

const isOpen = ref(false)
const isMounted = ref(false)
const triggerRef = ref<HTMLButtonElement | null>(null)
const panelRef = ref<HTMLDivElement | null>(null)
const openSections = ref<string[]>([])

// Computed classes
const triggerClasses = computed(() => [
  'p-2 rounded-lg transition-colors touch-manipulation',
  'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2',
  props.variant === 'dark' ? 'hover:bg-white/10' : ''
])

const panelClasses = computed(() => [
  'fixed top-0 right-0 bottom-0 z-[95] w-full max-w-sm',
  'bg-white shadow-2xl flex flex-col',
  'overscroll-contain'
])

// Methods
const open = () => {
  isOpen.value = true
  lockBodyScroll()
  emit('open')
  emit('toggle', true)
}

const close = () => {
  isOpen.value = false
  unlockBodyScroll()
  emit('close')
  emit('toggle', false)
  // Return focus to trigger
  triggerRef.value?.focus()
}

const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

const toggleSection = (title: string) => {
  const index = openSections.value.indexOf(title)
  if (index > -1) {
    openSections.value.splice(index, 1)
  } else {
    openSections.value.push(title)
  }
}

const handleLinkClick = () => {
  if (props.closeOnLinkClick) {
    close()
  }
}

// Body scroll lock
let scrollPosition = 0

const lockBodyScroll = () => {
  scrollPosition = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollPosition}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.overflow = ''
  window.scrollTo(0, scrollPosition)
}

// Escape key handler
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    close()
  }
}

// Focus trap
const handleTab = (event: KeyboardEvent) => {
  if (!isOpen.value || !panelRef.value) return

  const focusableElements = panelRef.value.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement?.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement?.focus()
  }
}

// Lifecycle
onMounted(() => {
  isMounted.value = true
  document.addEventListener('keydown', handleEscape)
  document.addEventListener('keydown', handleTab)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('keydown', handleTab)
  // Ensure body scroll is restored
  if (isOpen.value) {
    unlockBodyScroll()
  }
})

// Cleanup on close
watch(isOpen, (newValue) => {
  if (!newValue) {
    // Reset open sections when closing
    // openSections.value = []
  }
})

// Expose methods for external control
defineExpose({
  open,
  close,
  toggle,
  isOpen
})
</script>

<style scoped>
/* Ensure touch-friendly tap targets */
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Prevent overscroll bounce on iOS */
.overscroll-contain {
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}
</style>
