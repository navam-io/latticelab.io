<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div
        v-if="showHeader"
        class="text-center mb-10"
        :data-testid="`${testId}-header`"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          :data-testid="`${testId}-title`"
        >
          {{ sectionTitle }}
        </h2>
        <p
          v-if="sectionDescription"
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          :data-testid="`${testId}-description`"
        >
          {{ sectionDescription }}
        </p>
      </div>

      <!-- Tools Grid Container (4x2) -->
      <div
        class="max-w-6xl mx-auto"
        :data-testid="`${testId}-container`"
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          :data-testid="`${testId}-grid`"
        >
          <!-- Tool Cards -->
          <article
            v-for="tool in tools"
            :key="tool.id"
            class="p-6 bg-white rounded-2xl border border-gray-200 hover:border-violet-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            :data-testid="`${testId}-tool-${tool.id}`"
          >
            <!-- Icon -->
            <div
              :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                tool.iconBg,
                tool.iconColor
              ]"
              :data-testid="`${testId}-tool-${tool.id}-icon`"
              v-html="tool.icon"
            />

            <!-- Name -->
            <h3
              class="text-lg font-bold text-gray-900 mb-2"
              :data-testid="`${testId}-tool-${tool.id}-name`"
            >
              {{ tool.name }}
            </h3>

            <!-- One-liner -->
            <p
              class="text-sm text-gray-600 mb-4 line-clamp-2"
              :data-testid="`${testId}-tool-${tool.id}-description`"
            >
              {{ tool.description }}
            </p>

            <!-- Explore Link -->
            <a
              :href="tool.href"
              class="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              :data-testid="`${testId}-tool-${tool.id}-link`"
            >
              Explore
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Tool {
  id: string
  name: string
  description: string
  icon: string
  iconBg: string
  iconColor: string
  href: string
}

interface Props {
  /** Section title */
  sectionTitle?: string
  /** Section description */
  sectionDescription?: string
  /** Whether to show the section header */
  showHeader?: boolean
  /** Background variant */
  background?: 'white' | 'gray' | 'gradient'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'Powerful Tools',
  sectionDescription: 'Eight specialized tools to help you make informed AI infrastructure decisions.',
  showHeader: true,
  background: 'white',
  testId: 'tools-carousel'
})

// Section classes based on background
const sectionClasses = computed(() => {
  const base = 'py-16 md:py-24'

  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white'
  }

  return `${base} ${backgrounds[props.background]}`
})

// Tools data (8 tools in 4x2 grid)
const tools = ref<Tool[]>([
  // Row 1
  {
    id: 'memory-calculator',
    name: 'Memory Calculator',
    description: 'Estimate model memory requirements and get batch size recommendations for your hardware.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    href: '/tools/memory-calculator'
  },
  {
    id: 'tco-calculator',
    name: 'TCO Calculator',
    description: 'Calculate total cost of ownership with detailed breakdowns and multi-provider comparison.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    href: '/tools/tco-calculator'
  },
  {
    id: 'model-registry',
    name: 'Model Registry',
    description: 'Compare 30+ AI models from Anthropic, OpenAI, Google with capabilities and pricing.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    href: '/tools/model-registry'
  },
  {
    id: 'accelerator-registry',
    name: 'Accelerator Registry',
    description: 'Compare GPUs across AWS, GCP, and Azure with interactive filtering and performance metrics.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    href: '/tools/accelerator-registry'
  },
  // Row 2
  {
    id: 'parallelism-advisor',
    name: 'Parallelism Advisor',
    description: 'Get recommendations for tensor, pipeline, and data parallelism configurations.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    href: '/tools/parallelism-advisor'
  },
  {
    id: 'quantization-advisor',
    name: 'Quantization Advisor',
    description: 'Explore quantization options like INT8 and FP16 with quality vs speed tradeoff analysis.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    href: '/tools/quantization-advisor'
  },
  {
    id: 'spot-advisor',
    name: 'Spot Advisor',
    description: 'Check spot availability by region, interruption frequency, and calculate cost savings.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    href: '/tools/spot-advisor'
  },
  {
    id: 'live-data-feeds',
    name: 'Live Data Feeds',
    description: 'Keep pricing, benchmarks, and model capabilities current with automatic data sync.',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    href: '/tools/live-data-feeds'
  }
])
</script>

<style scoped>
/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
