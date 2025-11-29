<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description?: string;
    excerpt?: string;
    pubDate?: Date;
    date?: Date;
    featuredImage?: string;
    tags?: string[];
    readingTime?: string;
    featured?: boolean;
    author?: string;
  };
}

const props = defineProps<{
  posts: BlogPost[];
  allTags: string[];
}>();

// Search and filter state
const searchQuery = ref('');
const selectedCategory = ref<string | null>(null);
const selectedTags = ref<string[]>([]);
const showAllTags = ref(false);

// Smart category groupings based on tag patterns
const categories = [
  { id: 'getting-started', label: 'Getting Started', icon: '🚀', tags: ['getting-started', 'workspaces', 'organization'] },
  { id: 'blueprints', label: 'Blueprints', icon: '📋', tags: ['blueprints', 'vendors', 'discovery', 'filtering'] },
  { id: 'sources', label: 'Sources', icon: '📚', tags: ['sources', 'knowledge-management', 'reading'] },
  { id: 'stacks', label: 'Stacks', icon: '🔧', tags: ['stacks', 'infrastructure', 'hardware', 'framework'] },
  { id: 'scenarios', label: 'Scenarios', icon: '🎯', tags: ['scenarios', 'comparison', 'requirements', 'workflow'] },
  { id: 'studio', label: 'Studio', icon: '🎨', tags: ['studio', 'artifacts', 'export'] },
  { id: 'settings', label: 'Settings', icon: '⚙️', tags: ['settings', 'configuration', 'api-keys', 'customization'] },
  { id: 'lab', label: 'Lab', icon: '🧪', tags: ['lab', 'chat', 'research', 'citations', 'ai-assistant'] },
];

// Compute filtered posts
const filteredPosts = computed(() => {
  let result = [...props.posts];

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(post =>
      post.data.title.toLowerCase().includes(query) ||
      (post.data.description || '').toLowerCase().includes(query) ||
      (post.data.excerpt || '').toLowerCase().includes(query) ||
      (post.data.tags || []).some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (selectedCategory.value) {
    const category = categories.find(c => c.id === selectedCategory.value);
    if (category) {
      result = result.filter(post =>
        (post.data.tags || []).some(tag => category.tags.includes(tag))
      );
    }
  }

  // Tag filter
  if (selectedTags.value.length > 0) {
    result = result.filter(post =>
      selectedTags.value.every(tag => (post.data.tags || []).includes(tag))
    );
  }

  // Sort: featured first, then by date
  result.sort((a, b) => {
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    const dateA = a.data.pubDate || a.data.date || new Date();
    const dateB = b.data.pubDate || b.data.date || new Date();
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  return result;
});

// Get featured posts for hero section
const featuredPosts = computed(() =>
  filteredPosts.value.filter(p => p.data.featured).slice(0, 3)
);

// Get remaining posts for grid
const regularPosts = computed(() => {
  const featuredSlugs = new Set(featuredPosts.value.map(p => p.slug));
  return filteredPosts.value.filter(p => !featuredSlugs.has(p.slug));
});

// Popular tags (top 8 by frequency)
const popularTags = computed(() => {
  const tagCounts: Record<string, number> = {};
  props.posts.forEach(post => {
    (post.data.tags || []).forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([tag]) => tag);
});

// Toggle tag selection
const toggleTag = (tag: string) => {
  const idx = selectedTags.value.indexOf(tag);
  if (idx >= 0) {
    selectedTags.value.splice(idx, 1);
  } else {
    selectedTags.value.push(tag);
  }
};

// Clear all filters
const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = null;
  selectedTags.value = [];
};

// Format date
const formatDate = (date: Date | undefined) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Check if any filters are active
const hasActiveFilters = computed(() =>
  searchQuery.value.trim() || selectedCategory.value || selectedTags.value.length > 0
);

// Results count text
const resultsText = computed(() => {
  const count = filteredPosts.value.length;
  const total = props.posts.length;
  if (!hasActiveFilters.value) return `${total} guides`;
  return `${count} of ${total} guides`;
});
</script>

<template>
  <div class="blog-home">
    <!-- Hero Section with Search -->
    <section class="relative py-16 md:py-20 bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-900 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Confident AI System Decisions
          </h1>
          <p class="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Step-by-step guides to master AI infrastructure research. From first workspace to advanced workflows.
          </p>

          <!-- Search Bar -->
          <div class="relative max-w-xl mx-auto">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search guides, topics, or features..."
              class="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-300 hover:text-white transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Quick Stats -->
          <div class="flex items-center justify-center gap-6 mt-6 text-purple-200 text-sm">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {{ posts.length }} guides
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {{ allTags.length }} topics
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Pills -->
    <section class="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center gap-2 justify-center">
          <button
            @click="selectedCategory = null"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              !selectedCategory
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            All Guides
          </button>
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = selectedCategory === cat.id ? null : cat.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5',
              selectedCategory === cat.id
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <span>{{ cat.icon }}</span>
            <span>{{ cat.label }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Filters & Results Bar -->
    <section class="py-4 bg-gray-50 border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <!-- Popular Tags -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-sm text-gray-500 mr-1">Quick filters:</span>
            <button
              v-for="tag in popularTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all',
                selectedTags.includes(tag)
                  ? 'bg-violet-100 text-violet-700 ring-1 ring-violet-300'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              ]"
            >
              {{ tag }}
            </button>
            <button
              v-if="!showAllTags && allTags.length > 8"
              @click="showAllTags = true"
              class="text-xs text-violet-600 hover:text-violet-800 font-medium"
            >
              +{{ allTags.length - 8 }} more
            </button>
          </div>

          <!-- Results & Clear -->
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-500">{{ resultsText }}</span>
            <button
              v-if="hasActiveFilters"
              @click="clearFilters"
              class="text-sm text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filters
            </button>
          </div>
        </div>

        <!-- Expanded Tags Panel -->
        <div v-if="showAllTags" class="mt-4 pt-4 border-t">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in allTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all',
                selectedTags.includes(tag)
                  ? 'bg-violet-100 text-violet-700 ring-1 ring-violet-300'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              ]"
            >
              {{ tag }}
            </button>
          </div>
          <button
            @click="showAllTags = false"
            class="mt-3 text-xs text-gray-500 hover:text-gray-700"
          >
            Show less
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <!-- Featured Section (only show when no search/filters) -->
        <div v-if="!hasActiveFilters && featuredPosts.length > 0" class="mb-12">
          <h2 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Featured Guides
          </h2>

          <!-- Magazine Layout for Featured -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Primary Featured -->
            <a
              v-if="featuredPosts[0]"
              :href="`/blog/${featuredPosts[0].slug}`"
              class="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700 aspect-[4/3] lg:aspect-auto lg:row-span-2"
            >
              <img
                v-if="featuredPosts[0].data.featuredImage"
                :src="featuredPosts[0].data.featuredImage"
                :alt="featuredPosts[0].data.title"
                class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span class="inline-block px-3 py-1 bg-violet-500 text-white text-xs font-medium rounded-full mb-3">
                  Featured
                </span>
                <h3 class="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {{ featuredPosts[0].data.title }}
                </h3>
                <p class="text-gray-200 text-sm lg:text-base line-clamp-2 mb-4">
                  {{ featuredPosts[0].data.description || featuredPosts[0].data.excerpt }}
                </p>
                <div class="flex items-center gap-4 text-sm text-gray-300">
                  <span>{{ formatDate(featuredPosts[0].data.pubDate || featuredPosts[0].data.date) }}</span>
                  <span v-if="featuredPosts[0].data.readingTime">{{ featuredPosts[0].data.readingTime }}</span>
                </div>
              </div>
            </a>

            <!-- Secondary Featured -->
            <div class="grid grid-cols-1 gap-6">
              <a
                v-for="post in featuredPosts.slice(1, 3)"
                :key="post.slug"
                :href="`/blog/${post.slug}`"
                class="group relative block rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9]"
              >
                <img
                  v-if="post.data.featuredImage"
                  :src="post.data.featuredImage"
                  :alt="post.data.title"
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-5">
                  <h3 class="text-lg font-bold text-white mb-1 group-hover:text-violet-200 transition-colors line-clamp-2">
                    {{ post.data.title }}
                  </h3>
                  <div class="flex items-center gap-3 text-sm text-gray-300">
                    <span>{{ formatDate(post.data.pubDate || post.data.date) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- All Guides Grid -->
        <div>
          <h2 v-if="!hasActiveFilters" class="text-lg font-semibold text-gray-900 mb-6">
            All Guides
          </h2>
          <h2 v-else class="text-lg font-semibold text-gray-900 mb-6">
            Search Results
          </h2>

          <!-- Empty State -->
          <div v-if="filteredPosts.length === 0" class="text-center py-16">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">No guides found</h3>
            <p class="text-gray-500 mb-4">Try adjusting your search or filters</p>
            <button
              @click="clearFilters"
              class="text-violet-600 hover:text-violet-800 font-medium"
            >
              Clear all filters
            </button>
          </div>

          <!-- Adaptive Grid -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <a
              v-for="post in (hasActiveFilters ? filteredPosts : regularPosts)"
              :key="post.slug"
              :href="`/blog/${post.slug}`"
              class="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-lg transition-all duration-300"
            >
              <!-- Thumbnail -->
              <div class="aspect-video bg-gray-100 overflow-hidden relative">
                <img
                  v-if="post.data.featuredImage"
                  :src="post.data.featuredImage"
                  :alt="post.data.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-100">
                  <svg class="w-12 h-12 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <!-- Featured badge -->
                <span
                  v-if="post.data.featured && hasActiveFilters"
                  class="absolute top-2 left-2 px-2 py-0.5 bg-violet-600 text-white text-xs font-medium rounded-full"
                >
                  Featured
                </span>
              </div>

              <!-- Content -->
              <div class="p-4">
                <h3 class="text-base font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                  {{ post.data.title }}
                </h3>
                <p v-if="post.data.description || post.data.excerpt" class="text-gray-500 text-sm mb-3 line-clamp-2">
                  {{ post.data.description || post.data.excerpt }}
                </p>
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <span>{{ formatDate(post.data.pubDate || post.data.date) }}</span>
                  <span v-if="post.data.readingTime">{{ post.data.readingTime }}</span>
                </div>
                <!-- Tags -->
                <div v-if="post.data.tags && post.data.tags.length > 0" class="flex flex-wrap gap-1.5 mt-3">
                  <span
                    v-for="tag in post.data.tags.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.data.tags.length > 2"
                    class="px-2 py-0.5 text-gray-400 text-xs"
                  >
                    +{{ post.data.tags.length - 2 }}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 bg-gradient-to-r from-violet-600 to-indigo-600">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay up to date
        </h2>
        <p class="text-violet-100 mb-8 max-w-xl mx-auto">
          Get notified when we publish new guides and updates about AI infrastructure research.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button class="px-6 py-3 bg-white text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
