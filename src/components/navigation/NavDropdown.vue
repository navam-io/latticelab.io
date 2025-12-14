<template>
  <div
    :class="containerClasses"
    :data-testid="testId"
  >
    <!-- Column Header -->
    <h3
      v-if="title"
      :class="titleClasses"
      :data-testid="`${testId}-title`"
    >
      {{ title }}
    </h3>

    <!-- Links List -->
    <ul class="space-y-1" role="menu">
      <li
        v-for="(link, index) in links"
        :key="link.href || index"
        role="none"
      >
        <a
          :href="link.href"
          :class="linkClasses(link)"
          role="menuitem"
          :data-testid="`${testId}-link-${index}`"
          @click="$emit('linkClick', link)"
        >
          <!-- Icon (if provided) -->
          <div
            v-if="link.icon"
            :class="iconContainerClasses(link)"
          >
            <component
              :is="link.icon"
              class="w-5 h-5"
            />
          </div>

          <!-- Text Content -->
          <div class="flex-1 min-w-0">
            <span :class="linkLabelClasses(link)">
              {{ link.label }}
            </span>
            <span
              v-if="link.description && showDescriptions"
              :class="linkDescriptionClasses"
            >
              {{ link.description }}
            </span>
          </div>

          <!-- Badge (if provided) -->
          <span
            v-if="link.badge"
            :class="badgeClasses"
          >
            {{ link.badge }}
          </span>

          <!-- Arrow (if link is featured or arrow is enabled) -->
          <svg
            v-if="link.featured || showArrows"
            class="w-4 h-4 text-gray-400 group-hover:text-violet-500 transition-colors flex-shrink-0"
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
      </li>
    </ul>

    <!-- Footer Link (optional) -->
    <div
      v-if="footerLink"
      class="mt-4 pt-4 border-t border-gray-100"
    >
      <a
        :href="footerLink.href"
        class="group inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
        :data-testid="`${testId}-footer-link`"
        @click="$emit('linkClick', footerLink)"
      >
        {{ footerLink.label }}
        <svg
          class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
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
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'

interface NavLink {
  label: string
  href: string
  description?: string
  icon?: Component
  badge?: string | number
  featured?: boolean
  color?: string
}

interface FooterLink {
  label: string
  href: string
}

interface Props {
  title?: string
  links: NavLink[]
  footerLink?: FooterLink
  variant?: 'default' | 'compact' | 'featured'
  showDescriptions?: boolean
  showArrows?: boolean
  testId?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  footerLink: undefined,
  variant: 'default',
  showDescriptions: true,
  showArrows: false,
  testId: 'nav-dropdown'
})

defineEmits<{
  linkClick: [link: NavLink | FooterLink]
}>()

// Container classes
const containerClasses = computed(() => {
  const base = 'flex flex-col'

  const variants = {
    default: '',
    compact: '',
    featured: ''
  }

  return `${base} ${variants[props.variant]}`
})

// Title classes
const titleClasses = computed(() => {
  const base = 'font-semibold uppercase tracking-wider mb-3 px-1'

  const variants = {
    default: 'text-xs text-gray-500',
    compact: 'text-xs text-gray-500',
    featured: 'text-sm text-gray-700'
  }

  return `${base} ${variants[props.variant]}`
})

// Link classes
const linkClasses = (link: NavLink) => {
  const base = 'group flex items-start gap-3 p-3 rounded-xl transition-all duration-200'

  if (link.featured) {
    return `${base} bg-gradient-to-r from-violet-50 to-blue-50 hover:from-violet-100 hover:to-blue-100 border border-violet-100 hover:border-violet-200`
  }

  const variants = {
    default: 'hover:bg-gray-50',
    compact: 'p-2 hover:bg-gray-50',
    featured: 'hover:bg-gray-50'
  }

  return `${base} ${variants[props.variant]}`
}

// Icon container classes
const iconContainerClasses = (link: NavLink) => {
  const base = 'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110'

  // Use link color if provided
  if (link.color) {
    return `${base} ${link.color}`
  }

  return `${base} bg-gray-100 text-gray-600 group-hover:bg-violet-100 group-hover:text-violet-600`
}

// Link label classes
const linkLabelClasses = (link: NavLink) => {
  const base = 'block font-semibold transition-colors duration-200'

  if (link.featured) {
    return `${base} text-gray-900 group-hover:text-violet-700`
  }

  const variants = {
    default: 'text-sm text-gray-900 group-hover:text-violet-700',
    compact: 'text-sm text-gray-800 group-hover:text-violet-700',
    featured: 'text-base text-gray-900 group-hover:text-violet-700'
  }

  return `${base} ${variants[props.variant]}`
}

// Link description classes
const linkDescriptionClasses = computed(() => {
  const variants = {
    default: 'block text-xs text-gray-500 mt-0.5',
    compact: 'block text-xs text-gray-500 mt-0.5',
    featured: 'block text-sm text-gray-500 mt-1'
  }

  return variants[props.variant]
})

// Badge classes
const badgeClasses = computed(() => {
  return 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-700'
})
</script>
