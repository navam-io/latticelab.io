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
          <div class="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              <!-- Sources -->
              <a
                href="/features/sources"
                class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-gray-900 group-hover:text-violet-700 transition-colors mb-1">Sources</div>
                    <div class="text-sm text-gray-600 leading-relaxed">Knowledge Management</div>
                  </div>
                </div>
              </a>

              <!-- Lab -->
              <a
                href="/features/lab"
                class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-gray-900 group-hover:text-blue-700 transition-colors mb-1">Lab</div>
                    <div class="text-sm text-gray-600 leading-relaxed">AI-Powered Analysis</div>
                  </div>
                </div>
              </a>

              <!-- Studio -->
              <a
                href="/features/studio"
                class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-gray-900 group-hover:text-teal-700 transition-colors mb-1">Studio</div>
                    <div class="text-sm text-gray-600 leading-relaxed">Artifacts & Exports</div>
                  </div>
                </div>
              </a>

              <!-- Blueprints -->
              <a
                href="/features/blueprints"
                class="group block p-5 rounded-2xl border-2 border-violet-300 bg-gradient-to-br from-slate-50 to-violet-50 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-100/50 active:scale-[0.98] transition-all duration-300 touch-manipulation relative"
                @click="closeDropdown"
              >
                <!-- Special badge -->
                <div class="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-violet-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  36 CURATED
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-gray-900 group-hover:text-violet-700 transition-colors mb-1">Blueprints</div>
                    <div class="text-sm text-gray-600 leading-relaxed">Curated Knowledge Bundles</div>
                  </div>
                </div>
              </a>
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
