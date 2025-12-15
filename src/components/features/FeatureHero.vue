<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <!-- Subtle Pattern Background -->
    <div class="absolute inset-0 opacity-5" :data-testid="`${testId}-pattern`">
      <div
        class="absolute inset-0"
        style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-6xl mx-auto pt-16 pb-8 md:pt-20 md:pb-12">

        <!-- Hero Content -->
        <div class="text-center">
          <!-- Large Gradient Headline -->
          <GradientText
            :as="'h1'"
            :size="headlineSize"
            :variant="gradientVariant"
            class="font-black leading-none tracking-tight mb-4 md:mb-6 animate-fade-in"
            :data-testid="`${testId}-headline`"
          >
            {{ headline }}
          </GradientText>

          <!-- Tagline with period-separated words -->
          <p
            v-if="tagline"
            class="text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 mb-4 md:mb-6 tracking-wide animate-slide-up"
            :data-testid="`${testId}-tagline`"
          >
            {{ formattedTagline }}
          </p>

          <!-- Description paragraph -->
          <p
            v-if="description"
            class="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            :data-testid="`${testId}-description`"
          >
            {{ description }}
          </p>

          <!-- Dual CTAs -->
          <div
            v-if="showCTAs"
            class="mb-12 md:mb-16 animate-slide-up-delayed"
            :data-testid="`${testId}-ctas`"
          >
            <DualCTA
              :secondaryLabel="secondaryCTA"
              :secondaryHref="secondaryHref"
              :primaryLabel="primaryCTA"
              :primaryHref="primaryHref"
              variant="dark"
              size="lg"
              alignment="center"
              showArrows
              :containerTestId="`${testId}-dual-cta`"
              :primaryTestId="`${testId}-buy-button`"
              :secondaryTestId="`${testId}-learn-more`"
            />
          </div>

          <!-- Product Image Container -->
          <div
            v-if="productImage"
            class="relative animate-fade-in-delayed"
            :data-testid="`${testId}-product-image`"
          >
            <!-- Glow Effect Behind Image -->
            <div
              :class="glowClasses"
              :data-testid="`${testId}-glow`"
            />

            <!-- Product Image Frame -->
            <div class="relative max-w-5xl mx-auto">
              <!-- Browser Window Frame -->
              <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900/80 backdrop-blur-sm">
                <!-- Window Header -->
                <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-white/10">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500" />
                    <div class="w-3 h-3 rounded-full bg-yellow-500" />
                    <div class="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div class="text-white/60 text-sm font-mono ml-4">{{ browserUrl }}</div>
                </div>

                <!-- Screenshot/Image Area -->
                <div class="relative bg-gray-950">
                  <img
                    :src="productImage"
                    :alt="productImageAlt"
                    class="w-full h-auto"
                    loading="eager"
                    :data-testid="`${testId}-screenshot`"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Placeholder when no image -->
          <div
            v-else-if="showImagePlaceholder"
            class="relative animate-fade-in-delayed"
            :data-testid="`${testId}-placeholder`"
          >
            <div class="max-w-5xl mx-auto">
              <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900/50 backdrop-blur-sm">
                <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-white/10">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500" />
                    <div class="w-3 h-3 rounded-full bg-yellow-500" />
                    <div class="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div class="aspect-video bg-gray-800/50 flex items-center justify-center">
                  <div class="text-white/40 text-sm">Product Screenshot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade (optional, disabled by default for clean section separation) -->
    <div
      v-if="showBottomFade"
      :class="bottomFadeClasses"
      :data-testid="`${testId}-fade`"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GradientText from '../shared/GradientText.vue'
import DualCTA from '../shared/DualCTA.vue'

interface Props {
  /** Main headline text */
  headline: string
  /** Tagline in "Word. Word. Word." format (periods auto-added if not present) */
  tagline?: string
  /** Description paragraph */
  description?: string
  /** Product screenshot image URL */
  productImage?: string
  /** Alt text for product image */
  productImageAlt?: string
  /** Browser URL bar text */
  browserUrl?: string
  /** Show placeholder when no product image */
  showImagePlaceholder?: boolean
  /** Show CTA buttons */
  showCTAs?: boolean
  /** Primary CTA button text */
  primaryCTA?: string
  /** Primary CTA href */
  primaryHref?: string
  /** Secondary CTA button text */
  secondaryCTA?: string
  /** Secondary CTA href */
  secondaryHref?: string
  /** Gradient color scheme */
  colorScheme?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose'
  /** Headline size */
  headlineSize?: 'hero' | 'display-xl' | 'display-lg'
  /** Gradient variant for headline */
  gradientVariant?: 'hero' | 'primary' | 'secondary' | 'accent' | 'light'
  /** Whether to show bottom fade gradient (default: false for clean section separation) */
  showBottomFade?: boolean
  /** Background to fade to (only used if showBottomFade is true) */
  fadeToBackground?: 'white' | 'gray' | 'transparent'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  tagline: undefined,
  description: undefined,
  productImage: undefined,
  productImageAlt: 'Product screenshot',
  browserUrl: 'lattice.app',
  showImagePlaceholder: false,
  showCTAs: true,
  primaryCTA: 'Get Started',
  primaryHref: '/#pricing',
  secondaryCTA: 'Learn more',
  secondaryHref: '#overview',
  colorScheme: 'violet',
  headlineSize: 'display-xl',
  gradientVariant: 'hero',
  showBottomFade: false,
  fadeToBackground: 'white',
  testId: 'feature-hero'
})

// Format tagline to ensure period-separated format
const formattedTagline = computed(() => {
  if (!props.tagline) return ''

  // If already has periods, return as-is
  if (props.tagline.includes('.')) {
    return props.tagline
  }

  // Split by spaces and join with periods
  const words = props.tagline.split(/\s+/).filter(w => w.length > 0)
  return words.join('. ') + '.'
})

// Color scheme to gradient mapping
const colorSchemes = {
  violet: {
    background: 'from-violet-900 via-purple-900 to-indigo-900',
    glow: 'from-violet-600/30 via-purple-600/20 to-indigo-600/30'
  },
  blue: {
    background: 'from-blue-900 via-indigo-900 to-violet-900',
    glow: 'from-blue-600/30 via-indigo-600/20 to-violet-600/30'
  },
  teal: {
    background: 'from-teal-900 via-cyan-900 to-blue-900',
    glow: 'from-teal-600/30 via-cyan-600/20 to-blue-600/30'
  },
  amber: {
    background: 'from-amber-900 via-orange-900 to-red-900',
    glow: 'from-amber-600/30 via-orange-600/20 to-red-600/30'
  },
  rose: {
    background: 'from-rose-900 via-pink-900 to-purple-900',
    glow: 'from-rose-600/30 via-pink-600/20 to-purple-600/30'
  }
}

// Section classes with gradient background
const sectionClasses = computed(() => {
  const scheme = colorSchemes[props.colorScheme]
  return `relative py-12 md:py-16 overflow-hidden bg-gradient-to-br ${scheme.background}`
})

// Glow effect classes
const glowClasses = computed(() => {
  const scheme = colorSchemes[props.colorScheme]
  return `absolute -inset-8 bg-gradient-to-r ${scheme.glow} blur-3xl rounded-3xl`
})

// Bottom fade classes
const bottomFadeClasses = computed(() => {
  const fadeColors = {
    white: 'from-white',
    gray: 'from-gray-50',
    transparent: 'from-transparent'
  }
  return `absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t ${fadeColors[props.fadeToBackground]} to-transparent`
})
</script>

<style scoped>
/* Text fade in animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-fade-in-delayed {
  animation: fade-in 0.8s ease-out 0.6s forwards;
  opacity: 0;
}
</style>
