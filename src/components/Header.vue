<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
    <div class="container mx-auto px-4 py-4 sm:py-0">
      <div class="flex flex-col items-center sm:flex-row sm:h-16 sm:items-center">
        <a href="/" class="flex items-center space-x-2 mb-3 sm:mb-0 group">
          <img src="/images/logo.png" alt="Lattice Logo" class="h-8 w-auto" />
          <div class="flex flex-col">
            <span class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Lattice</span>
            <span class="text-[10px] text-muted-foreground/70 -mt-1 hidden sm:block">AI Infrastructure Research</span>
          </div>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium sm:ml-auto" aria-label="Main navigation">
          <a href="/" class="transition-colors hover:text-foreground/80 text-foreground">Home</a>

          <!-- Features Dropdown -->
          <div
            class="relative"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <button
              @click="toggleDropdown"
              @keydown.escape="closeDropdown"
              @keydown.enter="toggleDropdown"
              @keydown.space.prevent="toggleDropdown"
              class="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1 touch-manipulation"
              aria-haspopup="true"
              :aria-expanded="showDropdown"
              aria-label="Features menu"
              ref="dropdownButton"
            >
              Features
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showDropdown }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <a href="/blog" class="transition-colors hover:text-foreground/80 text-foreground/60">Blog</a>
          <a href="/pricing" class="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</a>
          <a href="/about" class="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
          <a href="/contact" class="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
        </nav>
      </div>
    </div>

    <!-- Features Ribbon Menu -->
    <teleport to="body">
      <!-- Subtle overlay backdrop -->
      <transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="showDropdown"
          class="fixed inset-0 bg-black/10 z-[45]"
          @click="closeDropdown"
        ></div>
      </transition>

      <!-- Ribbon menu panel -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="showDropdown"
          class="fixed left-0 right-0 top-[73px] sm:top-[65px] z-[50] bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
          @click.stop
          @mouseenter="handleMenuEnter"
          @mouseleave="handleMenuLeave"
        >
          <div class="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
            <!-- Core Panels Row -->
            <div class="mb-6">
              <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">Core Panels</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4">
                <!-- Sources -->
                <a
                  href="/features/sources"
                  class="group block p-4 rounded-2xl border border-gray-200 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
                  @click="closeDropdown"
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
          </div>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showDropdown = ref(false);
const dropdownButton = ref(null);
const isTouchDevice = ref(false);
let closeTimeout = null;

// Detect touch device
const checkTouchDevice = () => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Desktop: hover behavior
const handleMouseEnter = () => {
  if (!isTouchDevice.value) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    showDropdown.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isTouchDevice.value) {
    closeTimeout = setTimeout(() => {
      showDropdown.value = false;
    }, 150);
  }
};

// Keep menu open when hovering over the menu itself
const handleMenuEnter = () => {
  if (!isTouchDevice.value && closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

const handleMenuLeave = () => {
  if (!isTouchDevice.value) {
    closeTimeout = setTimeout(() => {
      showDropdown.value = false;
    }, 150);
  }
};

// Mobile: click/tap behavior
const toggleDropdown = () => {
  if (isTouchDevice.value) {
    showDropdown.value = !showDropdown.value;
  }
};

const closeDropdown = () => {
  showDropdown.value = false;
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

onMounted(() => {
  checkTouchDevice();
  window.addEventListener('resize', checkTouchDevice);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkTouchDevice);
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
});
</script>

<style scoped>
/* Ensure touch-friendly tap targets */
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
</style>
