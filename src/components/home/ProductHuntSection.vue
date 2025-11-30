<template>
  <section class="py-12 bg-gradient-to-br from-slate-50 to-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Countdown / Launch Status -->
        <div class="mb-6">
          <div v-if="!hasLaunched" class="flex flex-col items-center gap-4">
            <div class="flex gap-1">
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums">{{ timeLeft.hours.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Hours</div>
              </div>
              <div class="text-2xl font-bold text-gray-400 self-center">:</div>
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums">{{ timeLeft.minutes.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Min</div>
              </div>
              <div class="text-2xl font-bold text-gray-400 self-center">:</div>
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums animate-pulse">{{ timeLeft.seconds.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Sec</div>
              </div>
            </div>
            <p class="text-lg font-medium text-gray-700">Find us on Product Hunt. Launching soon!</p>
          </div>
          <div v-else class="flex flex-col items-center gap-4">
            <div class="flex items-center gap-2 text-gray-600">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-lg font-medium">
                <span class="text-green-600 font-bold">{{ daysSinceLaunch }}</span> days since launch
              </span>
            </div>
            <p class="text-lg font-medium text-gray-700">Find us on Product Hunt. We launched!</p>
          </div>
        </div>

        <!-- Product Hunt Badge -->
        <div class="flex justify-center">
          <a
            href="https://www.producthunt.com/products/lattice-4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-lattice-5"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block hover:opacity-90 transition-opacity"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1043998&theme=dark&t=1764472990625"
              alt="Lattice - Smart AI System Decisions | Product Hunt"
              width="250"
              height="54"
              class="w-[250px] h-[54px]"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Launch date: midnight 11/30/2025 PST (which is end of 11/29/2025 PST)
// PST is UTC-8, so midnight PST = 08:00 UTC next day
const launchDate = new Date('2025-11-30T08:00:00Z');

const now = ref(new Date());
let intervalId: number | null = null;

const hasLaunched = computed(() => now.value >= launchDate);

const timeLeft = computed(() => {
  const diff = Math.max(0, launchDate.getTime() - now.value.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
});

const daysSinceLaunch = computed(() => {
  if (!hasLaunched.value) return 0;
  const diff = now.value.getTime() - launchDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
