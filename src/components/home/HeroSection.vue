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
      <div class="max-w-6xl mx-auto pt-16 pb-8 md:pt-24 md:pb-12">

        <!-- Hero Content -->
        <div class="text-center">
          <!-- Large Gradient Headline -->
          <h1
            class="text-hero font-black leading-none tracking-tight mb-4 md:mb-6 animate-fade-in"
            :data-testid="`${testId}-headline`"
          >
            <span class="gradient-text-hero">
              {{ headline }}
            </span>
          </h1>

          <!-- Tagline -->
          <p
            class="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto animate-slide-up"
            :data-testid="`${testId}-tagline`"
          >
            {{ tagline }}
          </p>

          <!-- Dual CTAs -->
          <div class="mb-12 md:mb-16 animate-slide-up-delayed" :data-testid="`${testId}-ctas`">
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
          <div class="relative animate-fade-in-delayed" :data-testid="`${testId}-product-image`">
            <!-- Glow Effect Behind Image -->
            <div
              class="absolute -inset-8 bg-gradient-to-r from-violet-600/30 via-blue-600/20 to-teal-600/30 blur-3xl rounded-3xl"
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
                  <div class="text-white/60 text-sm font-mono ml-4">localhost/lattice</div>
                </div>

                <!-- Screenshot/Image Area -->
                <div class="relative bg-gray-950">
                  <img
                    v-if="displayImage"
                    :src="displayImage"
                    :alt="productImageAlt"
                    class="w-full h-auto"
                    loading="eager"
                    :data-testid="`${testId}-screenshot`"
                  />
                  <!-- Placeholder if no image -->
                  <div
                    v-else
                    class="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                    :data-testid="`${testId}-placeholder`"
                  >
                    <div class="text-center">
                      <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p class="text-gray-500 text-sm">Product screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Gradient Glow -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl pointer-events-none"
      :data-testid="`${testId}-bottom-glow`"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import DualCTA from '@components/shared/DualCTA.vue'

// Hero images that alternate randomly on page load
const heroImages = [
  '/images/hero-lattice-app.png',
  '/images/hero-lattice-app-alt.png'
]

interface Props {
  /** Main headline text (defaults to "Lattice") */
  headline?: string
  /** Tagline below the headline */
  tagline?: string
  /** Primary CTA button label */
  primaryCTA?: string
  /** Primary CTA button href */
  primaryHref?: string
  /** Secondary CTA button label */
  secondaryCTA?: string
  /** Secondary CTA button href */
  secondaryHref?: string
  /** Product screenshot image URL */
  productImage?: string
  /** Alt text for product image */
  productImageAlt?: string
  /** Test ID prefix for testing */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  headline: 'Lattice',
  tagline: 'AI Infrastructure Decisions, Grounded in Evidence',
  primaryCTA: 'Buy $99',
  primaryHref: '/#pricing',
  secondaryCTA: 'Learn more',
  secondaryHref: '#features',
  productImage: '',  // Will be set randomly
  productImageAlt: 'Lattice AI Infrastructure Platform',
  testId: 'hero-section'
})

// Randomly select hero image on mount
const selectedImage = ref(heroImages[0])
onMounted(() => {
  selectedImage.value = heroImages[Math.floor(Math.random() * heroImages.length)]
})

// Use prop if provided, otherwise use randomly selected image
const displayImage = computed(() => props.productImage || selectedImage.value)

const sectionClasses = computed(() => [
  'relative',
  'min-h-screen',
  'overflow-hidden',
  'bg-gradient-to-br',
  'from-gray-900',
  'via-slate-900',
  'to-violet-900'
])
</script>

<style scoped>
/* Hero size for the headline (120px+ as per spec) */
.text-hero {
  font-size: clamp(4rem, 15vw, 10rem);
  line-height: 1;
}

/* Gradient text styling */
.gradient-text-hero {
  background: linear-gradient(135deg, #a78bfa 0%, #818cf8 25%, #60a5fa 50%, #34d399 75%, #2dd4bf 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Animation utilities */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slideUp 1s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-fade-in-delayed {
  animation: fadeIn 1.2s ease-out 0.6s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
