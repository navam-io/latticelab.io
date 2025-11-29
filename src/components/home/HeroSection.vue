<template>
  <!-- Lattice Hero Section -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-violet-900">
    <!-- Subtle Code Pattern Background -->
    <div class="absolute inset-0 code-grid-pattern opacity-10"></div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-8 md:py-16">
      <div class="max-w-6xl mx-auto">

        <!-- Top Section: Centered Hero Message -->
        <div class="mb-16 pt-6 text-center">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight py-6 animate-fade-in">
            <span class="bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Smart AI System Decisions
            </span>
          </h1>

          <!-- Glassmorphism Card with Subtitle -->
          <div class="backdrop-blur-xl bg-gradient-to-br from-violet-500/10 via-white/5 to-blue-500/10 border border-violet-400/30 rounded-3xl pt-6 pb-8 px-8 md:px-10 shadow-2xl animate-slide-up max-w-4xl mx-auto hero-glass-card">
            <!-- White Subheading -->
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-6 text-white">
              Agentic AI Lab Assistant for Research Engineers, Platform Leads & CTOs
            </p>

            <!-- Description -->
            <p class="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              Lattice automates research synthesis for AI stack decisions. Process vendor documentation, benchmarks, and pricing data with grounded recommendations and full citations back to authoritative sources.
            </p>

            <!-- CTA Button -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div class="stripe-button-container">
                <stripe-buy-button
                  buy-button-id="buy_btn_1SYXbwRCxnzBPkIXayfIahbD"
                  publishable-key="pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB"
                >
                </stripe-buy-button>
              </div>
              <span class="text-white/60 text-sm">Lifetime access • One-time purchase</span>
            </div>
          </div>
        </div>

        <!-- Feature Showcase -->
        <div class="relative">
          <div class="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <!-- Three-Panel Layout Preview -->
            <div class="p-8 md:p-12">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Sources Panel -->
                <div class="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-violet-400/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <h3 class="text-white font-bold text-lg">Sources</h3>
                  </div>
                  <p class="text-white/70 text-sm leading-relaxed">
                    Multi-source ingestion: PDFs, URLs, GitHub, YouTube, Google Docs. Hybrid semantic + keyword search with citation tracking.
                  </p>
                </div>

                <!-- Lab Panel -->
                <div class="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                    <h3 class="text-white font-bold text-lg">Lab</h3>
                  </div>
                  <p class="text-white/70 text-sm leading-relaxed">
                    LangGraph-powered research agent with transparent reasoning. Grounded recommendations citing specific source chunks.
                  </p>
                </div>

                <!-- Studio Panel -->
                <div class="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-teal-400/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 class="text-white font-bold text-lg">Studio</h3>
                  </div>
                  <p class="text-white/70 text-sm leading-relaxed">
                    Save responses as reusable artifacts. Generate comparison tables, memos, and decision documents with export options.
                  </p>
                </div>
              </div>

              <!-- Key Stats -->
              <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4">
                  <div class="text-3xl font-bold text-violet-400">36</div>
                  <div class="text-white/60 text-sm">Curated Blueprints</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-3xl font-bold text-blue-400">10+</div>
                  <div class="text-white/60 text-sm">Vendor Integrations</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-3xl font-bold text-teal-400">2,134</div>
                  <div class="text-white/60 text-sm">Passing Tests</div>
                </div>
                <div class="text-center p-4">
                  <div class="text-3xl font-bold text-purple-400">v0.6.2</div>
                  <div class="text-white/60 text-sm">Latest Release</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
// Hero section for Lattice landing page
</script>

<style scoped>
/* Code Grid Pattern */
.code-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
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

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

/* Hero Glass Card with neon glow */
.hero-glass-card {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 80px -20px rgba(139, 92, 246, 0.3),
    0 0 40px -10px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

.stripe-button-container {
  display: inline-flex;
  align-items: center;
  height: 48px;
}
</style>
