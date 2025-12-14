<template>
  <section
    :class="sectionClasses"
    :data-testid="testId"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div
          v-if="title || description"
          class="text-center mb-12"
          :data-testid="`${testId}-header`"
        >
          <!-- Icon -->
          <div
            v-if="icon"
            :class="iconContainerClasses"
            :data-testid="`${testId}-icon`"
          >
            <svg
              class="w-7 h-7"
              :class="iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="icon"
              />
            </svg>
          </div>

          <!-- Title -->
          <h2
            v-if="title"
            class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            :data-testid="`${testId}-title`"
          >
            {{ title }}
          </h2>

          <!-- Description -->
          <p
            v-if="description"
            class="text-gray-600 max-w-2xl mx-auto"
            :data-testid="`${testId}-description`"
          >
            {{ description }}
          </p>
        </div>

        <!-- Content Grid -->
        <div
          :class="gridClasses"
          :data-testid="`${testId}-grid`"
        >
          <!-- Journey Guides Section -->
          <div
            v-if="journeys && journeys.length > 0"
            :data-testid="`${testId}-journeys`"
          >
            <h3
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"
              :data-testid="`${testId}-journeys-title`"
            >
              <svg
                class="w-5 h-5 text-violet-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Journey Guides
            </h3>
            <div class="space-y-3">
              <a
                v-for="(journey, index) in journeys"
                :key="index"
                :href="journey.href"
                class="group flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-violet-50 border border-transparent hover:border-violet-200 transition-all duration-200"
                :data-testid="`${testId}-journey-${index}`"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  <svg
                    class="w-4 h-4 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4
                    class="font-medium text-gray-900 group-hover:text-violet-700 transition-colors"
                    :data-testid="`${testId}-journey-${index}-title`"
                  >
                    {{ journey.title }}
                  </h4>
                  <p
                    v-if="journey.description"
                    class="text-sm text-gray-600 mt-0.5"
                    :data-testid="`${testId}-journey-${index}-description`"
                  >
                    {{ journey.description }}
                  </p>
                </div>
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Blog Posts Section -->
          <div
            v-if="blogPosts && blogPosts.length > 0"
            :data-testid="`${testId}-blogs`"
          >
            <h3
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"
              :data-testid="`${testId}-blogs-title`"
            >
              <svg
                class="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Related Posts
            </h3>
            <div class="space-y-3">
              <a
                v-for="(post, index) in blogPosts"
                :key="index"
                :href="post.href"
                class="group flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200"
                :data-testid="`${testId}-blog-${index}`"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg
                    class="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4
                    class="font-medium text-gray-900 group-hover:text-blue-700 transition-colors"
                    :data-testid="`${testId}-blog-${index}-title`"
                  >
                    {{ post.title }}
                  </h4>
                  <p
                    v-if="post.description"
                    class="text-sm text-gray-600 mt-0.5"
                    :data-testid="`${testId}-blog-${index}-description`"
                  >
                    {{ post.description }}
                  </p>
                </div>
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Documentation Links Section -->
          <div
            v-if="docs && docs.length > 0"
            :data-testid="`${testId}-docs`"
          >
            <h3
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"
              :data-testid="`${testId}-docs-title`"
            >
              <svg
                class="w-5 h-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Documentation
            </h3>
            <div class="space-y-3">
              <a
                v-for="(doc, index) in docs"
                :key="index"
                :href="doc.href"
                class="group flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 border border-transparent hover:border-teal-200 transition-all duration-200"
                :data-testid="`${testId}-doc-${index}`"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                  <svg
                    class="w-4 h-4 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4
                    class="font-medium text-gray-900 group-hover:text-teal-700 transition-colors"
                    :data-testid="`${testId}-doc-${index}-title`"
                  >
                    {{ doc.title }}
                  </h4>
                  <p
                    v-if="doc.description"
                    class="text-sm text-gray-600 mt-0.5"
                    :data-testid="`${testId}-doc-${index}-description`"
                  >
                    {{ doc.description }}
                  </p>
                </div>
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- CTA Link -->
        <div
          v-if="ctaLink"
          class="mt-10 text-center"
          :data-testid="`${testId}-cta-container`"
        >
          <a
            :href="ctaLink"
            class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors"
            :data-testid="`${testId}-cta`"
          >
            {{ ctaText }}
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ContentLink {
  /** Link title */
  title: string
  /** Link description */
  description?: string
  /** Link URL */
  href: string
}

interface Props {
  /** Section title */
  title?: string
  /** Section description */
  description?: string
  /** Icon SVG path for header */
  icon?: string
  /** Icon color variant */
  iconColor?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
  /** Journey guide links */
  journeys?: ContentLink[]
  /** Blog post links */
  blogPosts?: ContentLink[]
  /** Documentation links */
  docs?: ContentLink[]
  /** Background color */
  background?: 'white' | 'gray'
  /** Number of columns (auto-adjusts based on content) */
  columns?: 1 | 2 | 3
  /** CTA button link */
  ctaLink?: string
  /** CTA button text */
  ctaText?: string
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  icon: undefined,
  iconColor: 'violet',
  journeys: undefined,
  blogPosts: undefined,
  docs: undefined,
  background: 'white',
  columns: undefined,
  ctaLink: undefined,
  ctaText: 'View all resources',
  testId: 'related-content'
})

// Count active sections for auto column calculation
const activeSections = computed(() => {
  let count = 0
  if (props.journeys && props.journeys.length > 0) count++
  if (props.blogPosts && props.blogPosts.length > 0) count++
  if (props.docs && props.docs.length > 0) count++
  return count
})

// Section background classes
const sectionClasses = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  }
  return `py-16 md:py-20 ${backgrounds[props.background]}`
})

// Icon container classes
const iconContainerClasses = computed(() => {
  const colors = {
    violet: 'bg-violet-100',
    blue: 'bg-blue-100',
    teal: 'bg-teal-100',
    amber: 'bg-amber-100',
    rose: 'bg-rose-100',
    green: 'bg-green-100'
  }
  return `w-14 h-14 ${colors[props.iconColor]} rounded-2xl flex items-center justify-center mx-auto mb-6`
})

// Icon color class
const iconColorClass = computed(() => {
  const colors = {
    violet: 'text-violet-600',
    blue: 'text-blue-600',
    teal: 'text-teal-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    green: 'text-green-600'
  }
  return colors[props.iconColor]
})

// Grid classes based on columns or active sections
const gridClasses = computed(() => {
  const cols = props.columns || activeSections.value || 1
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }
  return `grid ${columnClasses[cols as 1 | 2 | 3]} gap-8`
})
</script>
