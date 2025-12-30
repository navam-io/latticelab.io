<template>
  <!-- NeoSignal Hero Section -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-cyan-900">
    <!-- Subtle Grid Pattern Background -->
    <div class="absolute inset-0 tech-grid-pattern opacity-10"></div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">

        <!-- Hero Content -->
        <div class="text-center mb-12">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-fade-in">
            <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Join Our Mission to Accelerate
            </span>
            <br />
            <span class="text-white">
              Frontier Technology Diffusion
            </span>
          </h1>

          <!-- CTA Button -->
          <div class="animate-slide-up">
            <a
              href="https://neosignal.io"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              <span>Visit NeoSignal</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- NeoSignal Screenshot -->
        <a
          href="https://neosignal.io"
          target="_blank"
          rel="noopener noreferrer"
          class="relative block max-w-6xl mx-auto animate-slide-up-delayed hover:scale-[1.02] transition-transform duration-300"
        >
          <!-- Glow Effect Behind Image -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 blur-3xl transform scale-110"></div>

          <!-- Image Container with Frame -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-cyan-500/30 transition-colors duration-300">
            <!-- Browser Window Frame -->
            <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-white/60 text-sm font-mono ml-4">neosignal.io</div>
            </div>

            <!-- Screenshot -->
            <img
              src="/images/neosignal-command-center.png"
              alt="NeoSignal - Frontier Technology Platform"
              class="w-full h-auto"
              loading="eager"
            />
          </div>
        </a>

      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-cyan-600/20 to-transparent blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Tech Grid Pattern */
.tech-grid-pattern {
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: -1px -1px;
}

/* Hero Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up-delayed {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up-delayed 1s ease-out 0.6s forwards;
  opacity: 0;
}
</style>
