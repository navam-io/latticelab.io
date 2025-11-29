<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  iconPath: string;
}>();
</script>

<template>
  <section class="relative py-20 overflow-hidden" :class="[
    `bg-gradient-to-br`,
    gradientFrom || 'from-violet-900',
    gradientVia || 'via-purple-900',
    gradientTo || 'to-indigo-900'
  ]">
    <!-- Background pattern -->
    <div class="absolute inset-0 hero-grid-pattern opacity-10"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Text Content -->
        <div class="text-center mb-12">
          <div class="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20 icon-container">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"></path>
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {{ title }}
          </h1>
          <p class="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay">
            {{ description }}
          </p>
        </div>

        <!-- Product Screenshot with Shadow Effects -->
        <div class="relative product-container">
          <!-- Glow effect behind -->
          <div class="absolute -inset-8 bg-white/10 rounded-3xl blur-3xl opacity-50 glow-pulse"></div>

          <!-- Screenshot with browser chrome -->
          <div class="relative product-image">
            <div class="relative rounded-2xl overflow-hidden border border-white/20 product-frame">
              <!-- Browser Chrome -->
              <div class="flex items-center gap-2 px-4 py-3 bg-gray-900/90 backdrop-blur border-b border-white/10">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1 ml-4">
                  <div class="bg-gray-800/80 rounded-lg px-4 py-1.5 text-xs text-gray-400 max-w-md mx-auto text-center">
                    latticelab.io
                  </div>
                </div>
              </div>
              <!-- Screenshot -->
              <img
                :src="imageSrc"
                :alt="imageAlt"
                class="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
  </section>
</template>

<style scoped>
.hero-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Icon container subtle pulse */
.icon-container {
  animation: icon-pulse 3s ease-in-out infinite;
}

@keyframes icon-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.15);
  }
}

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

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fade-in 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

/* Glow pulse effect */
@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02);
  }
}

.glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}

/* Product image hover effects */
.product-container {
  transition: transform 0.4s ease;
}

.product-container:hover {
  transform: translateY(-8px);
}

.product-image {
  position: relative;
}

.product-frame {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.product-container:hover .product-frame {
  box-shadow:
    0 40px 70px -15px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    0 0 40px 0 rgba(255, 255, 255, 0.1);
}

/* Subtle float animation */
@keyframes subtle-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.product-image {
  animation: subtle-float 5s ease-in-out infinite;
}

.product-container:hover .product-image {
  animation-play-state: paused;
}
</style>
