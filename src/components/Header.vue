<template>
  <header
    :class="headerClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2 group" :data-testid="`${testId}-logo`">
          <img src="/images/logo.png" alt="Lattice Logo" class="h-8 w-auto" />
          <div class="flex flex-col">
            <span class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Lattice</span>
            <span class="text-[10px] text-muted-foreground/70 -mt-1 hidden sm:block">Smart AI System Decisions</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav
          class="hidden md:flex items-center space-x-6 text-sm font-medium"
          aria-label="Main navigation"
          :data-testid="`${testId}-desktop-nav`"
        >
          <!-- Features MegaMenu -->
          <MegaMenu
            label="Features"
            :offset="headerHeight"
            :testId="`${testId}-features`"
          >
            <template #default="{ close }">
              <!-- Core Panels Row -->
              <div class="mb-6">
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">Core Panels</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4">
                  <!-- Sources -->
                  <a
                    href="/features/sources"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-sources`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-violet-700 transition-colors">Sources</div>
                        <div class="text-xs text-gray-500">Knowledge Management</div>
                      </div>
                    </div>
                  </a>

                  <!-- Lab -->
                  <a
                    href="/features/lab"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-lab`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">Lab</div>
                        <div class="text-xs text-gray-500">AI-Powered Analysis</div>
                      </div>
                    </div>
                  </a>

                  <!-- Studio -->
                  <a
                    href="/features/studio"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-studio`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-teal-700 transition-colors">Studio</div>
                        <div class="text-xs text-gray-500">Artifacts & Exports</div>
                      </div>
                    </div>
                  </a>

                  <!-- Blueprints -->
                  <a
                    href="/features/blueprints"
                    class="group block p-4 rounded-2xl border-2 border-violet-300 bg-gradient-to-br from-slate-50 to-violet-50 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation relative"
                    @click="close"
                    :data-testid="`${testId}-link-blueprints`"
                  >
                    <div class="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-violet-500 to-blue-600 text-white text-[10px] font-bold rounded-full shadow-lg">
                      36
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-violet-700 transition-colors">Blueprints</div>
                        <div class="text-xs text-gray-500">Curated Bundles</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Configuration Row -->
              <div>
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">Configuration</div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
                  <!-- Scenarios -->
                  <a
                    href="/features/scenarios"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-scenarios`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-amber-700 transition-colors">Scenarios</div>
                        <div class="text-xs text-gray-500">Use Case Definition</div>
                      </div>
                    </div>
                  </a>

                  <!-- Stacks -->
                  <a
                    href="/features/stacks"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-stacks`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors">Stacks</div>
                        <div class="text-xs text-gray-500">Infrastructure Config</div>
                      </div>
                    </div>
                  </a>

                  <!-- Settings -->
                  <a
                    href="/features/settings"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-slate-400 hover:shadow-xl hover:shadow-slate-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-settings`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-slate-400 to-gray-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-slate-700 transition-colors">Settings</div>
                        <div class="text-xs text-gray-500">Customization</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Tools Row -->
              <div class="mt-6">
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">Tools</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4">
                  <!-- Row 1 -->
                  <!-- Memory Calculator -->
                  <a
                    href="/tools/memory-calculator"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-memory-calculator`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">Memory Calculator</div>
                        <div class="text-xs text-gray-500">GPU Memory Estimation</div>
                      </div>
                    </div>
                  </a>

                  <!-- TCO Calculator -->
                  <a
                    href="/tools/tco-calculator"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-tco-calculator`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors">TCO Calculator</div>
                        <div class="text-xs text-gray-500">Cost Analysis</div>
                      </div>
                    </div>
                  </a>

                  <!-- Model Registry -->
                  <a
                    href="/tools/model-registry"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-model-registry`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-indigo-700 transition-colors">Model Registry</div>
                        <div class="text-xs text-gray-500">AI Model Comparison</div>
                      </div>
                    </div>
                  </a>

                  <!-- Accelerator Registry -->
                  <a
                    href="/tools/accelerator-registry"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-accelerator-registry`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-violet-700 transition-colors">Accelerator Registry</div>
                        <div class="text-xs text-gray-500">GPU Comparison</div>
                      </div>
                    </div>
                  </a>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 mt-4">
                  <!-- Parallelism Advisor -->
                  <a
                    href="/tools/parallelism-advisor"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-parallelism-advisor`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-amber-700 transition-colors">Parallelism Advisor</div>
                        <div class="text-xs text-gray-500">Distributed Training</div>
                      </div>
                    </div>
                  </a>

                  <!-- Quantization Advisor -->
                  <a
                    href="/tools/quantization-advisor"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-quantization-advisor`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-rose-700 transition-colors">Quantization Advisor</div>
                        <div class="text-xs text-gray-500">Precision Optimization</div>
                      </div>
                    </div>
                  </a>

                  <!-- Spot Advisor -->
                  <a
                    href="/tools/spot-advisor"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-spot-advisor`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-cyan-700 transition-colors">Spot Advisor</div>
                        <div class="text-xs text-gray-500">Savings Opportunities</div>
                      </div>
                    </div>
                  </a>

                  <!-- Live Data Feeds -->
                  <a
                    href="/tools/live-data-feeds"
                    class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                    @click="close"
                    :data-testid="`${testId}-link-live-data-feeds`"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 group-hover:text-cyan-700 transition-colors">Live Data Feeds</div>
                        <div class="text-xs text-gray-500">Automatic Data Sync</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </template>
          </MegaMenu>

          <a
            href="/blog"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            :data-testid="`${testId}-link-blog`"
          >
            Blog
          </a>
          <a
            href="/docs/getting-started/introduction"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            :data-testid="`${testId}-link-docs`"
          >
            Docs
          </a>
          <a
            href="/#pricing"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            :data-testid="`${testId}-link-pricing`"
          >
            Pricing
          </a>
          <a
            href="/contact"
            class="transition-colors hover:text-foreground/80 text-foreground/60"
            :data-testid="`${testId}-link-contact`"
          >
            Contact
          </a>
        </nav>

        <!-- Desktop: Buy Button -->
        <a
          href="/#pricing"
          class="hidden md:inline-flex px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          :data-testid="`${testId}-buy-desktop`"
        >
          Buy $99
        </a>

        <!-- Mobile: Buy Button + Hamburger -->
        <div class="flex md:hidden items-center gap-3">
          <a
            href="/#pricing"
            class="px-3 py-1.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
            :data-testid="`${testId}-buy-mobile`"
          >
            Buy $99
          </a>
          <MobileNav
            :sections="mobileNavSections"
            :testId="`${testId}-mobile`"
          >
            <template #header>
              <a href="/" class="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Lattice Logo" class="h-6 w-auto" />
                <span class="text-lg font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Lattice</span>
              </a>
            </template>
            <template #footer="{ close }">
              <a
                href="/#pricing"
                class="block w-full py-3 text-center font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                @click="close"
              >
                Buy $99 - Lifetime Access
              </a>
            </template>
          </MobileNav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MegaMenu from '@components/navigation/MegaMenu.vue'
import MobileNav from '@components/navigation/MobileNav.vue'

interface Props {
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  testId: 'header'
})

// Header height for MegaMenu offset
const headerHeight = ref(65)

// Scroll tracking for hide/show behavior
const isHidden = ref(false)
const lastScrollY = ref(0)
const scrollThreshold = 100 // Start hiding after scrolling this far
const scrollDelta = 10 // Minimum scroll distance to trigger hide/show

// Computed header classes with hide animation
const headerClasses = computed(() => {
  const base = 'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 transition-transform duration-300'

  if (isHidden.value) {
    return `${base} -translate-y-full`
  }

  return `${base} translate-y-0`
})

// Mobile navigation sections
const mobileNavSections = [
  {
    title: 'Features',
    links: [
      { label: 'Sources', href: '/features/sources', description: 'Knowledge Management' },
      { label: 'Lab', href: '/features/lab', description: 'AI-Powered Analysis' },
      { label: 'Studio', href: '/features/studio', description: 'Artifacts & Exports' },
      { label: 'Blueprints', href: '/features/blueprints', description: 'Curated Bundles', badge: '36' },
      { label: 'All Features', href: '/features', description: 'Overview' }
    ]
  },
  {
    title: 'Configuration',
    links: [
      { label: 'Scenarios', href: '/features/scenarios', description: 'Use Case Definition' },
      { label: 'Stacks', href: '/features/stacks', description: 'Infrastructure Config' },
      { label: 'Settings', href: '/features/settings', description: 'Customization' }
    ]
  },
  {
    title: 'Tools',
    links: [
      { label: 'Memory Calculator', href: '/tools/memory-calculator', description: 'GPU Memory Estimation' },
      { label: 'TCO Calculator', href: '/tools/tco-calculator', description: 'Cost Analysis' },
      { label: 'Model Registry', href: '/tools/model-registry', description: 'AI Model Comparison' },
      { label: 'Accelerator Registry', href: '/tools/accelerator-registry', description: 'GPU Comparison' },
      { label: 'Parallelism Advisor', href: '/tools/parallelism-advisor', description: 'Distributed Training' },
      { label: 'Quantization Advisor', href: '/tools/quantization-advisor', description: 'Precision Optimization' },
      { label: 'Spot Advisor', href: '/tools/spot-advisor', description: 'Savings Opportunities' },
      { label: 'Live Data Feeds', href: '/tools/live-data-feeds', description: 'Automatic Data Sync' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Latest updates' },
      { label: 'Documentation', href: '/docs/getting-started/introduction', description: 'Technical guides' },
      { label: 'Pricing', href: '/#pricing', description: 'One-time payment' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  }
]

// Update header height on resize for proper MegaMenu positioning
const updateHeaderHeight = () => {
  const header = document.querySelector('header')
  if (header) {
    headerHeight.value = header.offsetHeight
  }
}

// Handle scroll to hide/show header (Apple-style behavior)
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY

      // Always show header at the very top
      if (currentScrollY < scrollThreshold) {
        isHidden.value = false
        lastScrollY.value = currentScrollY
        ticking = false
        return
      }

      // Calculate scroll direction and distance
      const scrollDistance = currentScrollY - lastScrollY.value

      // Hide on scroll down (positive distance), show on scroll up (negative distance)
      if (Math.abs(scrollDistance) > scrollDelta) {
        if (scrollDistance > 0) {
          // Scrolling down - hide header
          isHidden.value = true
          // Dispatch custom event for StickyNav to listen to
          window.dispatchEvent(new CustomEvent('header-visibility', { detail: { hidden: true } }))
        } else {
          // Scrolling up - show header
          isHidden.value = false
          // Dispatch custom event for StickyNav to listen to
          window.dispatchEvent(new CustomEvent('header-visibility', { detail: { hidden: false } }))
        }
        lastScrollY.value = currentScrollY
      }

      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', updateHeaderHeight)
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Initialize scroll position
  lastScrollY.value = window.scrollY
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeaderHeight)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Ensure touch-friendly tap targets */
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
</style>
