<template>
  <section class="py-12 bg-gradient-to-br from-slate-50 to-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Countdown / Launch Status -->
        <div class="mb-6">
          <div class="flex flex-col items-center gap-4">
            <div class="flex gap-1">
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums">{{ timeSinceLaunch.days.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Days</div>
              </div>
              <div class="text-2xl font-bold text-gray-400 self-center">:</div>
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums">{{ timeSinceLaunch.hours.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Hours</div>
              </div>
              <div class="text-2xl font-bold text-gray-400 self-center">:</div>
              <div class="bg-gray-900 text-white px-3 py-2 rounded-lg min-w-[60px]">
                <div class="text-2xl font-bold tabular-nums animate-pulse">{{ timeSinceLaunch.minutes.toString().padStart(2, '0') }}</div>
                <div class="text-xs text-gray-400 uppercase">Min</div>
              </div>
            </div>
            <p class="text-lg font-medium text-gray-700">We launched on Product Hunt. Please support us!</p>
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

// Launch date: midnight 11/30/2025 PST
// PST is UTC-8, so midnight PST = 08:00 UTC same day
const launchDate = new Date('2025-11-30T08:00:00Z');

const now = ref(new Date());
let intervalId: number | null = null;

const timeSinceLaunch = computed(() => {
  const diff = Math.max(0, now.value.getTime() - launchDate.getTime());
  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    now.value = new Date();
  }, 60000); // Update every minute since we're only showing minutes
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
