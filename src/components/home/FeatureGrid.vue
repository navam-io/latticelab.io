<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div
        v-if="showHeader"
        class="text-center mb-12"
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

      <!-- 2x2 Feature Card Grid -->
      <div
        :class="gridClasses"
        :data-testid="`${testId}-grid`"
      >
        <!-- Sources Card -->
        <FeatureCard
          title="Sources"
          tagline="Your Knowledge, Indexed"
          :description="showDescriptions ? 'Build a curated knowledge base from PDFs, URLs, GitHub repos, YouTube transcripts, and Google Docs.' : undefined"
          :icon="sourcesIcon"
          :screenshot="sourcesScreenshot"
          href="/features/sources"
          variant="violet"
          :testId="`${testId}-sources`"
        />

        <!-- Lab Card -->
        <FeatureCard
          title="Lab"
          tagline="Research Agent"
          :description="showDescriptions ? 'Chat with an AI research agent grounded in your sources. Get recommendations with transparent reasoning.' : undefined"
          :icon="labIcon"
          :screenshot="labScreenshot"
          href="/features/lab"
          variant="blue"
          :testId="`${testId}-lab`"
        />

        <!-- Studio Card -->
        <FeatureCard
          title="Studio"
          tagline="Artifacts That Matter"
          :description="showDescriptions ? 'Turn AI responses into reusable artifacts. Generate comparison tables, decision memos, and more.' : undefined"
          :icon="studioIcon"
          :screenshot="studioScreenshot"
          href="/features/studio"
          variant="teal"
          :testId="`${testId}-studio`"
        />

        <!-- Blueprints Card -->
        <FeatureCard
          title="Blueprints"
          tagline="34 Vendor Blueprints"
          :description="showDescriptions ? 'Pre-configured knowledge bundles from Anthropic, AWS, NVIDIA, Google Cloud, and Azure.' : undefined"
          :icon="blueprintsIcon"
          badge="34 Blueprints"
          :screenshot="blueprintsScreenshot"
          href="/features/blueprints"
          variant="purple"
          :testId="`${testId}-blueprints`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FeatureCard from './FeatureCard.vue'

interface Props {
  /** Section title */
  sectionTitle?: string
  /** Section description */
  sectionDescription?: string
  /** Whether to show the section header */
  showHeader?: boolean
  /** Whether to show descriptions on cards */
  showDescriptions?: boolean
  /** Custom screenshot for Sources */
  sourcesScreenshot?: string
  /** Custom screenshot for Lab */
  labScreenshot?: string
  /** Custom screenshot for Studio */
  studioScreenshot?: string
  /** Custom screenshot for Blueprints */
  blueprintsScreenshot?: string
  /** Background variant */
  background?: 'white' | 'gray' | 'gradient'
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'Core Features',
  sectionDescription: 'Four powerful panels designed to help you make confident AI infrastructure decisions.',
  showHeader: true,
  showDescriptions: true,
  sourcesScreenshot: '/images/journeys/view-source/view-source-03.png',
  labScreenshot: '/images/journeys/chat-with-ai/chat-with-ai-04.png',
  studioScreenshot: '/images/journeys/view-artifact/view-artifact-02.png',
  blueprintsScreenshot: '/images/journeys/browse-blueprints/browse-blueprints-02.png',
  background: 'gray',
  testId: 'feature-grid'
})

// Section classes based on background
const sectionClasses = computed(() => {
  const base = 'py-16 md:py-24'

  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50'
  }

  return `${base} ${backgrounds[props.background]}`
})

// Grid layout classes
const gridClasses = computed(() => {
  return 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto'
})

// Icon SVGs
const sourcesIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`

const labIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`

const studioIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`

const blueprintsIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>`
</script>
