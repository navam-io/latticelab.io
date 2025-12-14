<template>
  <nav
    ref="navRef"
    :class="navClasses"
    :data-testid="testId"
    aria-label="Page navigation"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-12">
        <!-- Feature Name -->
        <div
          class="font-semibold text-gray-900 truncate flex-shrink-0"
          :data-testid="`${testId}-title`"
        >
          {{ featureName }}
        </div>

        <!-- Navigation Links (scrollable on mobile) -->
        <div
          class="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide ml-4"
          :data-testid="`${testId}-links`"
        >
          <a
            v-for="(item, index) in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="getLinkClasses(item.id)"
            :data-testid="`${testId}-link-${index}`"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.label }}
          </a>

          <!-- Buy Button -->
          <a
            v-if="showBuyButton"
            :href="buyButtonHref"
            :class="buyButtonClasses"
            :data-testid="`${testId}-buy-button`"
          >
            {{ buyButtonText }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface NavItem {
  /** Section ID to scroll to */
  id: string
  /** Display label */
  label: string
}

interface Props {
  /** Feature name displayed on the left */
  featureName: string
  /** Navigation items */
  navItems?: NavItem[]
  /** Whether to show the buy button */
  showBuyButton?: boolean
  /** Buy button text */
  buyButtonText?: string
  /** Buy button href */
  buyButtonHref?: string
  /** Offset from top when sticky (accounts for main header) */
  stickyOffset?: number
  /** Scroll offset when clicking nav items */
  scrollOffset?: number
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  navItems: () => [
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'use-cases', label: 'Use Cases' }
  ],
  showBuyButton: true,
  buyButtonText: 'Buy',
  buyButtonHref: '/#pricing',
  stickyOffset: 64,
  scrollOffset: 120,
  testId: 'sticky-nav'
})

// Refs
const navRef = ref<HTMLElement | null>(null)
const isSticky = ref(false)
const isVisible = ref(false) // Track if nav should be visible at all
const activeSection = ref<string>(props.navItems[0]?.id || '')

// Compute nav container classes
const navClasses = computed(() => {
  const base = 'w-full border-b bg-white/95 backdrop-blur-sm transition-all duration-300 z-40'

  // Hide nav when not visible (at very top of page)
  if (!isVisible.value) {
    return `${base} fixed opacity-0 pointer-events-none -translate-y-full`
  }

  if (isSticky.value) {
    return `${base} fixed shadow-sm opacity-100 translate-y-0`
  }

  return `${base} relative opacity-100`
})

// Get link classes with active state
const getLinkClasses = (sectionId: string) => {
  const base = 'px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200'

  if (activeSection.value === sectionId) {
    return `${base} bg-violet-100 text-violet-700`
  }

  return `${base} text-gray-600 hover:text-gray-900 hover:bg-gray-100`
}

// Buy button classes
const buyButtonClasses = computed(() => {
  return 'ml-2 px-4 py-1.5 text-sm font-semibold rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors whitespace-nowrap flex-shrink-0'
})


// Track if user is navigating via nav click (to keep nav visible)
let isNavigating = false
let navigationTimeout: ReturnType<typeof setTimeout> | null = null

// Scroll to section with smooth behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Mark as navigating to keep nav visible during scroll
    isNavigating = true
    isVisible.value = true

    // Clear any existing timeout
    if (navigationTimeout) {
      clearTimeout(navigationTimeout)
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    // StickyNav is always at top:0 when fixed, account for its height plus padding
    const navHeight = 48 // StickyNav height
    const offsetPosition = elementPosition - navHeight - 20

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    })

    // Keep nav visible for a bit after navigation completes
    navigationTimeout = setTimeout(() => {
      isNavigating = false
      // Re-check visibility based on scroll position
      handleScroll()
    }, 1000)
  }
}

// Handle scroll for sticky behavior and active section
let initialPosition = 0
let ticking = false
const visibilityThreshold = 100 // Show nav after scrolling this many pixels

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY

      // Show nav after scrolling past threshold (Apple-style: hidden at very top)
      // But keep visible if user is actively navigating via nav clicks
      if (!isNavigating) {
        isVisible.value = scrollTop > visibilityThreshold
      }

      // Check if should be sticky (once visible, always sticky)
      isSticky.value = scrollTop > initialPosition

      // Update active section based on scroll position
      updateActiveSection()

      ticking = false
    })
    ticking = true
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + props.scrollOffset + 50

  // Find the current active section
  for (let i = props.navItems.length - 1; i >= 0; i--) {
    const item = props.navItems[i]
    const element = document.getElementById(item.id)
    if (element) {
      const elementTop = element.offsetTop
      if (scrollPosition >= elementTop) {
        activeSection.value = item.id
        return
      }
    }
  }

  // Default to first section
  if (props.navItems.length > 0) {
    activeSection.value = props.navItems[0].id
  }
}

// Setup scroll listener
onMounted(() => {
  // Store initial position (below hero)
  if (navRef.value) {
    const rect = navRef.value.getBoundingClientRect()
    initialPosition = rect.top + window.scrollY - props.stickyOffset
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Clean up navigation timeout
  if (navigationTimeout) {
    clearTimeout(navigationTimeout)
  }
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* When sticky, position at top:0 (replaces header when header is hidden) */
nav.fixed {
  top: 0;
}
</style>
