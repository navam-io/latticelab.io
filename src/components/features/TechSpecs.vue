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

        <!-- Specs Grid -->
        <div
          v-if="specs && specs.length > 0"
          :class="gridClasses"
          :data-testid="`${testId}-grid`"
        >
          <div
            v-for="(spec, index) in specs"
            :key="index"
            :class="specCardClasses"
            :data-testid="`${testId}-spec-${index}`"
          >
            <!-- Spec Category Icon -->
            <div
              v-if="spec.icon"
              :class="specIconClasses(spec.color)"
              :data-testid="`${testId}-spec-${index}-icon`"
            >
              <svg
                class="w-5 h-5"
                :class="specIconColorClass(spec.color)"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="spec.icon"
                />
              </svg>
            </div>

            <!-- Spec Category Name -->
            <h3
              class="text-lg font-semibold text-gray-900 mb-3"
              :data-testid="`${testId}-spec-${index}-name`"
            >
              {{ spec.category }}
            </h3>

            <!-- Spec Items List -->
            <ul
              class="space-y-2"
              :data-testid="`${testId}-spec-${index}-items`"
            >
              <li
                v-for="(item, itemIndex) in spec.items"
                :key="itemIndex"
                class="flex items-start gap-2 text-gray-600"
                :data-testid="`${testId}-spec-${index}-item-${itemIndex}`"
              >
                <svg
                  class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm" v-html="item" />
              </li>
            </ul>
          </div>
        </div>

        <!-- Table View (Alternative) -->
        <div
          v-if="tableData && tableData.length > 0"
          class="overflow-x-auto"
          :data-testid="`${testId}-table-container`"
        >
          <table
            class="w-full border-collapse"
            :data-testid="`${testId}-table`"
          >
            <thead>
              <tr class="border-b border-gray-200">
                <th
                  v-for="(header, index) in tableHeaders"
                  :key="index"
                  class="text-left py-4 px-4 font-semibold text-gray-900 first:pl-0 last:pr-0"
                  :data-testid="`${testId}-table-header-${index}`"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, rowIndex) in tableData"
                :key="rowIndex"
                class="border-b border-gray-100 last:border-0"
                :data-testid="`${testId}-table-row-${rowIndex}`"
              >
                <td
                  v-for="(cell, cellIndex) in row"
                  :key="cellIndex"
                  class="py-4 px-4 text-gray-600 first:pl-0 last:pr-0 first:font-medium first:text-gray-900"
                  :data-testid="`${testId}-table-cell-${rowIndex}-${cellIndex}`"
                >
                  <span v-if="typeof cell === 'boolean'">
                    <svg
                      v-if="cell"
                      class="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <svg
                      v-else
                      class="w-5 h-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span v-else v-html="cell" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Docs Link -->
        <div
          v-if="docsLink"
          class="mt-8 text-center"
          :data-testid="`${testId}-docs-link-container`"
        >
          <a
            :href="docsLink"
            class="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors group"
            :data-testid="`${testId}-docs-link`"
          >
            {{ docsLinkText }}
            <svg
              class="w-4 h-4 transition-transform group-hover:translate-x-1"
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
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SpecItem {
  /** Category name */
  category: string
  /** List of items in this category */
  items: string[]
  /** Optional icon SVG path */
  icon?: string
  /** Optional color variant */
  color?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
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
  /** Specs in card grid format */
  specs?: SpecItem[]
  /** Table headers (for table view) */
  tableHeaders?: string[]
  /** Table data rows (for table view) */
  tableData?: (string | boolean)[][]
  /** Background color */
  background?: 'white' | 'gray'
  /** Number of columns in grid */
  columns?: 2 | 3 | 4
  /** Link to documentation */
  docsLink?: string
  /** Docs link text */
  docsLinkText?: string
  /** Test ID prefix */
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  icon: undefined,
  iconColor: 'violet',
  specs: undefined,
  tableHeaders: undefined,
  tableData: undefined,
  background: 'white',
  columns: 3,
  docsLink: undefined,
  docsLinkText: 'View full documentation',
  testId: 'tech-specs'
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

// Grid classes based on columns
const gridClasses = computed(() => {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return `grid ${columnClasses[props.columns]} gap-8`
})

// Spec card classes
const specCardClasses = computed(() => {
  return 'p-6 rounded-2xl bg-gray-50 border border-gray-100'
})

// Spec icon container classes
const specIconClasses = (color?: string) => {
  const colorValue = color || 'violet'
  const colors = {
    violet: 'bg-violet-100',
    blue: 'bg-blue-100',
    teal: 'bg-teal-100',
    amber: 'bg-amber-100',
    rose: 'bg-rose-100',
    green: 'bg-green-100'
  }
  return `w-10 h-10 ${colors[colorValue as keyof typeof colors]} rounded-xl flex items-center justify-center mb-4`
}

// Spec icon color class
const specIconColorClass = (color?: string) => {
  const colorValue = color || 'violet'
  const colors = {
    violet: 'text-violet-600',
    blue: 'text-blue-600',
    teal: 'text-teal-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    green: 'text-green-600'
  }
  return colors[colorValue as keyof typeof colors]
}
</script>
