<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div :class="layoutClasses">
          <!-- Image Side -->
          <div
            :class="imageSideClasses"
            :data-testid="`${testId}-image`"
          >
            <!-- Image with frame -->
            <div v-if="image" class="relative">
              <!-- Glow effect -->
              <div
                v-if="showGlow"
                :class="glowClasses"
              />

              <!-- Browser frame -->
              <div
                v-if="showBrowserFrame"
                class="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200"
              >
                <div class="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-400" />
                    <div class="w-3 h-3 rounded-full bg-yellow-400" />
                    <div class="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <img
                  :src="image"
                  :alt="imageAlt"
                  class="w-full h-auto"
                  loading="lazy"
                  :data-testid="`${testId}-screenshot`"
                />
              </div>

              <!-- Simple image without frame -->
              <img
                v-else
                :src="image"
                :alt="imageAlt"
                class="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
                :data-testid="`${testId}-screenshot`"
              />
            </div>

            <!-- Placeholder when no image -->
            <div
              v-else-if="showPlaceholder"
              class="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center"
              :data-testid="`${testId}-placeholder`"
            >
              <div class="text-gray-400 text-sm">Screenshot</div>
            </div>
          </div>

          <!-- Content Side -->
          <div
            :class="contentSideClasses"
            :data-testid="`${testId}-content`"
          >
            <!-- Icon -->
            <div
              v-if="icon"
              :class="iconContainerClasses"
              :data-testid="`${testId}-icon`"
            >
              <svg
                class="w-7 h-7"
                :class="iconColorClass"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="icon"
                />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :class="titleClasses"
              :data-testid="`${testId}-title`"
            >
              {{ title }}
            </h3>

            <!-- Description -->
            <p
              v-if="description"
              class="text-gray-600 leading-relaxed mb-6"
              :data-testid="`${testId}-description`"
            >
              {{ description }}
            </p>

            <!-- Features List -->
            <ul
              v-if="features && features.length > 0"
              class="space-y-3 mb-6"
              :data-testid="`${testId}-features`"
            >
              <li
                v-for="(feature, index) in features"
                :key="index"
                class="flex items-start gap-3"
                :data-testid="`${testId}-feature-${index}`"
              >
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700" v-html="feature" />
              </li>
            </ul>

            <!-- Journey Guide Link -->
            <a
              v-if="journeyLink"
              :href="journeyLink"
              class="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors group"
              :data-testid="`${testId}-journey-link`"
            >
              {{ journeyLinkText }}
              <svg
                class="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Section title */
  title: string
  /** Section description */
  description?: string
  /** List of feature bullet points (supports HTML) */
  features?: string[]
  /** Image URL */
  image?: string
  /** Image alt text */
  imageAlt?: string
  /** Icon SVG path */
  icon?: string
  /** Icon color variant */
  iconColor?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
  /** Image position */
  imagePosition?: 'left' | 'right'
  /** Background color */
  background?: 'white' | 'gray'
  /** Show browser frame around image */
  showBrowserFrame?: boolean
  /** Show glow effect behind image */
  showGlow?: boolean
  /** Show placeholder when no image */
  showPlaceholder?: boolean
  /** Journey guide link URL */
  journeyLink?: string
  /** Journey guide link text */
  journeyLinkText?: string
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: undefined,
  features: undefined,
  image: undefined,
  imageAlt: 'Feature screenshot',
  icon: undefined,
  iconColor: 'violet',
  imagePosition: 'left',
  background: 'white',
  showBrowserFrame: true,
  showGlow: false,
  showPlaceholder: false,
  journeyLink: undefined,
  journeyLinkText: 'View journey guide',
  testId: 'capability-section'
})

// Section background classes
const sectionClasses = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  }
  return `py-16 md:py-20 ${backgrounds[props.background]}`
})

// Layout classes for grid
const layoutClasses = computed(() => {
  const base = 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
  return base
})

// Image side classes with order
const imageSideClasses = computed(() => {
  if (props.imagePosition === 'right') {
    return 'order-1 lg:order-2'
  }
  return 'order-1 lg:order-1'
})

// Content side classes with order
const contentSideClasses = computed(() => {
  if (props.imagePosition === 'right') {
    return 'order-2 lg:order-1'
  }
  return 'order-2 lg:order-2'
})

// Glow effect classes
const glowClasses = computed(() => {
  const colors = {
    violet: 'from-violet-400/20 to-purple-400/20',
    blue: 'from-blue-400/20 to-indigo-400/20',
    teal: 'from-teal-400/20 to-cyan-400/20',
    amber: 'from-amber-400/20 to-orange-400/20',
    rose: 'from-rose-400/20 to-pink-400/20',
    green: 'from-green-400/20 to-emerald-400/20'
  }
  return `absolute -inset-4 bg-gradient-to-br ${colors[props.iconColor]} blur-2xl rounded-3xl`
})

// Icon container classes
const iconContainerClasses = computed(() => {
  const colors = {
    violet: 'bg-violet-100',
    blue: 'bg-blue-100',
    teal: 'bg-teal-100',
    amber: 'bg-amber-100',
    rose: 'bg-rose-100',
    green: 'bg-green-100'
  }
  return `w-14 h-14 ${colors[props.iconColor]} rounded-2xl flex items-center justify-center mb-6`
})

// Icon color class
const iconColorClass = computed(() => {
  const colors = {
    violet: 'text-violet-600',
    blue: 'text-blue-600',
    teal: 'text-teal-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    green: 'text-green-600'
  }
  return colors[props.iconColor]
})

// Title classes
const titleClasses = computed(() => {
  return 'text-2xl md:text-3xl font-bold text-gray-900 mb-4'
})
</script>
