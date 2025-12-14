<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div
        v-if="showHeader"
        class="text-center mb-10"
        :data-testid="`${testId}-header`"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          :data-testid="`${testId}-title`"
        >
          {{ sectionTitle }}
        </h2>
        <p
          v-if="sectionDescription"
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          :data-testid="`${testId}-description`"
        >
          {{ sectionDescription }}
        </p>
      </div>

      <!-- Tools Carousel Container -->
      <div
        class="relative"
        :data-testid="`${testId}-container`"
      >
        <!-- Scroll Indicators (Desktop) -->
        <button
          v-if="showNavigation && canScrollLeft"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:border-violet-300 hover:shadow-xl transition-all duration-200"
          @click="scrollLeft"
          :data-testid="`${testId}-nav-left`"
          aria-label="Scroll left"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          v-if="showNavigation && canScrollRight"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:border-violet-300 hover:shadow-xl transition-all duration-200"
          @click="scrollRight"
          :data-testid="`${testId}-nav-right`"
          aria-label="Scroll right"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Scrollable Track -->
        <div
          ref="trackRef"
          class="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          :data-testid="`${testId}-track`"
          @scroll="handleScroll"
        >
          <!-- Tool Cards -->
          <article
            v-for="tool in tools"
            :key="tool.id"
            class="flex-shrink-0 w-[280px] md:w-[320px] p-6 bg-white rounded-2xl border border-gray-200 hover:border-violet-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 snap-start"
            :data-testid="`${testId}-tool-${tool.id}`"
          >
            <!-- Icon -->
            <div
              :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                tool.iconBg,
                tool.iconColor
              ]"
              :data-testid="`${testId}-tool-${tool.id}-icon`"
              v-html="tool.icon"
            />

            <!-- Name -->
            <h3
              class="text-lg font-bold text-gray-900 mb-2"
              :data-testid="`${testId}-tool-${tool.id}-name`"
            >
              {{ tool.name }}
            </h3>

            <!-- One-liner -->
            <p
              class="text-sm text-gray-600 mb-4 line-clamp-2"
              :data-testid="`${testId}-tool-${tool.id}-description`"
            >
              {{ tool.description }}
            </p>

            <!-- Explore Link -->
            <a
              :href="tool.href"
              class="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              :data-testid="`${testId}-tool-${tool.id}-link`"
            >
              Explore
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>

        <!-- Scroll Dots (Mobile) -->
        <div
          v-if="showDots"
          class="flex md:hidden justify-center gap-2 mt-4"
          :data-testid="`${testId}-dots`"
        >
          <button
            v-for="(_, index) in tools"
            :key="index"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-200',
              currentIndex === index ? 'bg-violet-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
            ]"
            @click="scrollToIndex(index)"
            :data-testid="`${testId}-dot-${index}`"
            :aria-label="`Go to tool ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Tool {
  id: string
  name: string
  description: string
  icon: string
  iconBg: string
  iconColor: string
  href: string
}

interface Props {
  /** Section title */
  sectionTitle?: string
  /** Section description */
  sectionDescription?: string
  /** Whether to show the section header */
  showHeader?: boolean
  /** Whether to show navigation arrows */
  showNavigation?: boolean
  /** Whether to show scroll dots on mobile */
  showDots?: boolean
  /** Background variant */
  background?: 'white' | 'gray' | 'gradient'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'Powerful Tools',
  sectionDescription: 'Seven specialized tools to help you make informed AI infrastructure decisions.',
  showHeader: true,
  showNavigation: true,
  showDots: true,
  background: 'white',
  testId: 'tools-carousel'
})

// Section classes based on background
const sectionClasses = computed(() => {
  const base = 'py-16 md:py-24'

  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white'
  }

  return `${base} ${backgrounds[props.background]}`
})

// Tools data
const tools = ref<Tool[]>([
  {
    id: 'accelerator-registry',
    name: 'Accelerator Registry',
    description: 'Compare GPUs across AWS, GCP, and Azure with interactive filtering and performance metrics.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    href: '/tools/accelerator-registry'
  },
  {
    id: 'memory-calculator',
    name: 'Memory Calculator',
    description: 'Estimate model memory requirements and get batch size recommendations for your hardware.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    href: '/tools/memory-calculator'
  },
  {
    id: 'tco-calculator',
    name: 'TCO Calculator',
    description: 'Calculate total cost of ownership with detailed breakdowns and multi-provider comparison.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    href: '/tools/tco-calculator'
  },
  {
    id: 'parallelism-advisor',
    name: 'Parallelism Advisor',
    description: 'Get recommendations for tensor, pipeline, and data parallelism configurations.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    href: '/tools/parallelism-advisor'
  },
  {
    id: 'quantization-advisor',
    name: 'Quantization Advisor',
    description: 'Explore quantization options like INT8 and FP16 with quality vs speed tradeoff analysis.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    href: '/tools/quantization-advisor'
  },
  {
    id: 'spot-advisor',
    name: 'Spot Instance Advisor',
    description: 'Check spot availability by region, interruption frequency, and calculate cost savings.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    href: '/tools/spot-advisor'
  },
  {
    id: 'evaluation',
    name: 'Evaluation Framework',
    description: 'Create custom evaluations with LLM-as-judge support for model quality assessment.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    href: '/tools/evaluation'
  }
])

// Scroll state
const trackRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

// Handle scroll events
const handleScroll = () => {
  if (!trackRef.value) return

  const track = trackRef.value
  const cardWidth = 320 + 24 // card width + gap
  const scrollPosition = track.scrollLeft
  const maxScroll = track.scrollWidth - track.clientWidth

  currentIndex.value = Math.round(scrollPosition / cardWidth)
  canScrollLeft.value = scrollPosition > 0
  canScrollRight.value = scrollPosition < maxScroll - 10
}

// Scroll navigation
const scrollLeft = () => {
  if (!trackRef.value) return
  const cardWidth = 320 + 24
  trackRef.value.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!trackRef.value) return
  const cardWidth = 320 + 24
  trackRef.value.scrollBy({ left: cardWidth * 2, behavior: 'smooth' })
}

const scrollToIndex = (index: number) => {
  if (!trackRef.value) return
  const cardWidth = 280 + 16 // mobile card width + gap
  trackRef.value.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
}

// Initialize scroll state
onMounted(() => {
  handleScroll()
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleScroll)
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

/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
