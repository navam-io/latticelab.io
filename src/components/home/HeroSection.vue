<template>
  <!-- Lattice Hero Section -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-violet-900">
    <!-- Subtle Code Pattern Background -->
    <div class="absolute inset-0 code-grid-pattern opacity-10"></div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">

        <!-- Top Section: Centered Hero Message -->
        <div class="mb-12 pt-6 text-center">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight py-6 animate-fade-in">
            <span class="bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Smart AI System Decisions
            </span>
          </h1>

          <!-- Glassmorphism Card with Subtitle -->
          <div class="backdrop-blur-xl bg-gradient-to-br from-violet-500/10 via-white/5 to-blue-500/10 border border-violet-400/30 rounded-3xl pt-6 pb-8 px-8 md:px-10 shadow-2xl animate-slide-up max-w-3xl mx-auto hero-glass-card">
            <!-- White Subheading -->
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-2 text-white">
              AI infrastructure decisions, grounded in evidence
            </p>
            <p class="text-base md:text-lg text-white/70 mb-6">
              Lattice runs privately on your laptop or cloud. Your data, your control.
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
              <span class="text-white/60 text-sm">Only $99 - Lifetime access - One-time purchase</span>
            </div>
          </div>
        </div>

        <!-- Feature Carousel -->
        <div class="relative">
          <!-- Carousel Container -->
          <div class="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

            <!-- Carousel Inner -->
            <div class="relative" style="min-height: 540px;">

              <!-- Slides -->
              <transition-group name="slide" mode="out-in">
                <div
                  v-for="(feature, index) in features"
                  v-show="currentIndex === index"
                  :key="feature.id"
                  class="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 pb-20 items-end"
                >
                  <!-- Left: Content -->
                  <div class="flex flex-col justify-center space-y-6">
                    <!-- Category Badge -->
                    <div class="inline-block">
                      <div :class="[
                        'px-4 py-2 rounded-full text-sm font-bold border-2 inline-flex items-center gap-2',
                        feature.color
                      ]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath"></path>
                        </svg>
                        {{ feature.category }}
                      </div>
                    </div>

                    <!-- Feature Name -->
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                      {{ feature.name }}
                    </h2>

                    <!-- Description -->
                    <p class="text-lg md:text-xl text-white/80 leading-relaxed">
                      {{ feature.description }}
                    </p>

                    <!-- Key Benefits -->
                    <div class="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[160px]">
                      <div class="text-sm text-white/60 mb-3 font-medium">Key capabilities:</div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div v-for="benefit in feature.benefits" :key="benefit" class="flex items-start gap-2 text-white/90 text-sm">
                          <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{{ benefit }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right: Screenshot -->
                  <div class="flex flex-col justify-end">
                    <div class="relative w-full max-w-2xl mx-auto product-image">
                      <!-- Shadow glow behind -->
                      <div :class="['absolute -inset-4 rounded-3xl blur-2xl opacity-40', feature.glowColor]"></div>

                      <!-- Terminal/Browser Window Frame -->
                      <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl transition-shadow duration-500">
                        <!-- Window Header -->
                        <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-white/10">
                          <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div class="text-white/60 text-sm font-mono ml-4">latticelab.io</div>
                        </div>

                        <!-- Screenshot with zoom on hover -->
                        <div class="bg-black overflow-hidden">
                          <img
                            :src="feature.screenshot"
                            :alt="`${feature.name} - ${feature.category}`"
                            class="w-full h-auto transition-transform duration-1000 ease-in-out hover:scale-150 hover:origin-center cursor-zoom-in"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>

            <!-- Carousel Control Bar -->
            <div class="border-t border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
              <div class="flex items-center justify-between gap-4">
                <!-- Left: Navigation Arrows -->
                <div class="flex items-center gap-2">
                  <button
                    @click="prevSlide"
                    class="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                    aria-label="Previous feature"
                  >
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    @click="nextSlide"
                    class="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                    aria-label="Next feature"
                  >
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>

                <!-- Center: Navigation Dots -->
                <div class="flex items-center gap-2">
                  <button
                    v-for="(feature, index) in features"
                    :key="`dot-${feature.id}`"
                    @click="goToSlide(index)"
                    :class="[
                      'w-2.5 h-2.5 rounded-full transition-all duration-300',
                      currentIndex === index ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                    ]"
                    :aria-label="`Go to ${feature.name}`"
                  ></button>
                </div>

                <!-- Right: Learn More Button + Progress -->
                <div class="flex items-center gap-4">
                  <a :href="features[currentIndex].link" class="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm text-white/90 hover:text-white transition-all duration-300 group">
                    <span>Learn more</span>
                    <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="flex items-center gap-3">
                    <div class="text-white/60 text-sm">
                      <span class="text-white font-bold">{{ currentIndex + 1 }}</span><span class="text-white/40">/{{ features.length }}</span>
                    </div>
                    <div class="w-20 h-1 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                      <div
                        class="h-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-300"
                        :style="{ width: `${((currentIndex + 1) / features.length) * 100}%` }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Stats Row -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="text-2xl md:text-3xl font-bold text-violet-400">36</div>
            <div class="text-white/60 text-sm">Curated Blueprints</div>
          </div>
          <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="text-2xl md:text-3xl font-bold text-blue-400">10+</div>
            <div class="text-white/60 text-sm">Vendor Integrations</div>
          </div>
          <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="text-2xl md:text-3xl font-bold text-teal-400">2,134</div>
            <div class="text-white/60 text-sm">Passing Tests</div>
          </div>
          <div class="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="text-2xl md:text-3xl font-bold text-purple-400">v0.6.2</div>
            <div class="text-white/60 text-sm">Latest Release</div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  screenshot: string;
  link: string;
  color: string;
  glowColor: string;
  iconPath: string;
}

const features: Feature[] = [
  {
    id: 'lab',
    name: 'Lab Panel',
    category: 'AI Research Agent',
    description: 'Chat with an AI research agent grounded in your sources. Get recommendations with transparent reasoning and full citations back to authoritative documentation.',
    benefits: [
      'LangGraph-powered multi-step reasoning',
      'Numbered citations with source context',
      'Scenario and stack-aware prompts',
      'Save responses as reusable artifacts'
    ],
    screenshot: '/images/journeys/chat-with-ai/chat-with-ai-04.png',
    link: '/features/lab',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    glowColor: 'bg-blue-500/30',
    iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    id: 'scenarios',
    name: 'Scenarios',
    category: 'Use Case Definition',
    description: 'Define your workload requirements to get targeted recommendations. Specify workload type, latency targets, budget constraints, and compliance needs.',
    benefits: [
      'Workload classification (chat, batch, code)',
      'SLO targets (latency, throughput)',
      'Budget and cost constraints',
      'Natural language requirement extraction'
    ],
    screenshot: '/images/journeys/edit-scenario/edit-scenario-02.png',
    link: '/features/scenarios',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    glowColor: 'bg-amber-500/30',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    id: 'stacks',
    name: 'Stacks',
    category: 'Infrastructure Config',
    description: 'Configure your AI infrastructure with model selection, hardware preferences, and framework choices. Get AI-suggested stacks optimized for your scenario.',
    benefits: [
      'Model selection (Claude, GPT-4, Gemini)',
      'Hardware preferences (A100, H100, L40S)',
      'Framework configuration (vLLM, TensorRT)',
      'AI-suggested stack recommendations'
    ],
    screenshot: '/images/journeys/create-stack/create-stack-03.png',
    link: '/features/stacks',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    glowColor: 'bg-emerald-500/30',
    iconPath: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  },
  {
    id: 'sources',
    name: 'Sources Panel',
    category: 'Knowledge Management',
    description: 'Build a curated knowledge base from PDFs, URLs, GitHub repos, YouTube transcripts, and Google Docs. Every AI recommendation links back to specific source chunks.',
    benefits: [
      'Multi-source ingestion (PDF, URL, GitHub)',
      'Hybrid semantic + keyword search',
      'Real-time indexing with chunk tracking',
      'One-click citation verification'
    ],
    screenshot: '/images/journeys/view-source/view-source-03.png',
    link: '/features/sources',
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    glowColor: 'bg-violet-500/30',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    id: 'blueprints',
    name: '36 Blueprints',
    category: 'Pre-built Knowledge',
    description: 'Pre-configured knowledge bundles from Anthropic, AWS, NVIDIA, Google Cloud, Meta, and Mistral. One-click workspace population with sources, scenarios, and stacks.',
    benefits: [
      'Curated vendor documentation',
      'Pre-defined scenarios per use case',
      'Recommended stack configurations',
      'Filter by vendor, category, or use case'
    ],
    screenshot: '/images/journeys/browse-blueprints/browse-blueprints-02.png',
    link: '/features/blueprints',
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    glowColor: 'bg-purple-500/30',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
  },
  {
    id: 'studio',
    name: 'Studio Panel',
    category: 'Artifacts & Export',
    description: 'Turn AI responses into reusable artifacts. Generate comparison tables, decision memos, and architectural recommendations with multiple export formats.',
    benefits: [
      'Four artifact types supported',
      'Citations and context included',
      'Export to Markdown, JSON, CSV',
      'Add artifacts back as sources'
    ],
    screenshot: '/images/journeys/view-artifact/view-artifact-02.png',
    link: '/features/studio',
    color: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    glowColor: 'bg-teal-500/30',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 'settings',
    name: 'Settings',
    category: 'Customization',
    description: 'Personalize Lattice to match your workflow. Configure API keys, model defaults, search behavior, agent parameters, and appearance preferences.',
    benefits: [
      'API key management for multiple providers',
      'Model defaults and temperature tuning',
      'Search & RAG configuration',
      'Data privacy and export controls'
    ],
    screenshot: '/images/journeys/configure-settings/configure-settings-03.png',
    link: '/features/settings',
    color: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
    glowColor: 'bg-slate-500/30',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  }
];

const currentIndex = ref(0);
let autoplayInterval: number | null = null;

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % features.length;
  resetAutoplay();
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + features.length) % features.length;
  resetAutoplay();
}

function goToSlide(index: number) {
  currentIndex.value = index;
  resetAutoplay();
}

function startAutoplay() {
  autoplayInterval = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % features.length;
  }, 18000);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
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

/* Slide Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
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

/* Product Image with shadow effects */
.product-image {
  transition: transform 0.4s ease;
}

.product-image:hover {
  transform: translateY(-4px);
}

/* Enhanced shadow for hover */
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
}
</style>
