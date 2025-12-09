<script setup lang="ts">
import { ref, computed } from 'vue';

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

// Smart category groupings based on tag patterns
const categories = [
  { id: 'getting-started', label: 'Getting Started', tags: ['getting-started', 'workspaces', 'organization'] },
  { id: 'blueprints', label: 'Blueprints', tags: ['blueprints', 'vendors', 'discovery', 'filtering'] },
  { id: 'sources', label: 'Sources', tags: ['sources', 'knowledge-management', 'reading'] },
  { id: 'scenarios', label: 'Scenarios', tags: ['scenarios', 'comparison', 'requirements', 'workflow'] },
  { id: 'stacks', label: 'Stacks', tags: ['stacks', 'infrastructure', 'hardware', 'framework'] },
  { id: 'settings', label: 'Settings', tags: ['settings', 'configuration', 'api-keys', 'customization'] },
  { id: 'lab', label: 'Lab', tags: ['lab', 'chat', 'research', 'citations', 'ai-assistant', 'ai-research'] },
  { id: 'studio', label: 'Studio', tags: ['studio', 'artifacts', 'export'] },
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

// Clear all filters
const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = null;
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
  searchQuery.value.trim() || selectedCategory.value
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
    <!-- Hero Section with Purple Gradient -->
    <section class="relative py-10 md:py-14 bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-900 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Smart AI System Decisions
          </h1>
          <p class="text-lg text-purple-200 mb-6 max-w-2xl mx-auto">
            Step-by-step guides to master AI infrastructure research.
          </p>

          <!-- Search Bar -->
          <div class="relative max-w-xl mx-auto mb-5">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search guides..."
              class="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
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

          <!-- Compact Category Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = selectedCategory === cat.id ? null : cat.id"
              :class="[
                'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                selectedCategory === cat.id
                  ? 'bg-white text-purple-900'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white border border-white/20'
              ]"
            >
              {{ cat.label }}
            </button>
            <button
              v-if="selectedCategory"
              @click="selectedCategory = null"
              class="px-3 py-1.5 rounded-full text-sm font-medium bg-red-500/20 text-red-200 hover:bg-red-500/30 border border-red-400/30 flex items-center gap-1"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Guides Grid Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">
                  {{ hasActiveFilters ? 'Search Results' : 'All Guides' }}
                </h2>
                <p class="text-gray-500 text-sm">{{ resultsText }}</p>
              </div>
            </div>
            <button
              v-if="hasActiveFilters"
              @click="clearFilters"
              class="text-sm text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear all
            </button>
          </div>

          <!-- Empty State -->
          <div v-if="filteredPosts.length === 0" class="text-center py-16 bg-white rounded-2xl border border-gray-200">
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

          <!-- Guides Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
              v-for="post in filteredPosts"
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
                  <svg class="w-10 h-10 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <!-- Featured badge -->
                <span
                  v-if="post.data.featured"
                  class="absolute top-2 left-2 px-2 py-0.5 bg-violet-600 text-white text-xs font-medium rounded-full flex items-center gap-1"
                >
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Featured
                </span>
              </div>

              <!-- Content -->
              <div class="p-4">
                <h3 class="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-violet-600 transition-colors line-clamp-2">
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

    <!-- CTA Section -->
    <section class="py-12 bg-gradient-to-r from-violet-600 to-blue-600">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready for Smart AI System Decisions?
        </h2>
        <p class="text-violet-100 mb-6 max-w-xl mx-auto">
          Get lifetime access to Lattice and start making confident AI infrastructure decisions today.
        </p>
        <a href="/#pricing" class="inline-flex items-center px-6 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
          Get Lattice for $99
        </a>
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
