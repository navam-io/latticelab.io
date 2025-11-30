<template>
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-blue-900">
    <!-- Lattice Cross Pattern Background (blog-style) -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
      <div class="text-center max-w-6xl mx-auto">
        <!-- Main Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight animate-fade-in tracking-tight">
          <span class="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Let's Talk AI Infrastructure
          </span>
        </h1>

        <!-- Glassmorphism Card for Description -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl animate-slide-up max-w-4xl mx-auto">
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-6">
            Questions about Lattice? Need help with AI system decisions?
          </p>

          <p class="text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
            Whether you're evaluating Lattice for your team, have questions about features, or want to discuss enterprise requirements, we're here to help. Get in touch and we'll respond within 24 hours.
          </p>
        </div>

        <!-- Value Propositions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up-delayed">
          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Smart Recommendations</h3>
            <p class="text-white/70 text-sm">AI-powered guidance grounded in vendor documentation and real benchmarks</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Transparent Citations</h3>
            <p class="text-white/70 text-sm">Every recommendation traced back to authoritative sources you can verify</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">One-Time Purchase</h3>
            <p class="text-white/70 text-sm">$99 for lifetime access, no subscriptions, no hidden fees</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Animations */
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
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up-delayed 1s ease-out 0.6s forwards;
  opacity: 0;
}

/* Glass morphism enhancements */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}
</style>
