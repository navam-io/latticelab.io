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
  { id: 'getting-started', label: 'Getting Started', icon: 'lightning', tags: ['getting-started', 'workspaces', 'organization'] },
  { id: 'blueprints', label: 'Blueprints', icon: 'clipboard', tags: ['blueprints', 'vendors', 'discovery', 'filtering'] },
  { id: 'sources', label: 'Sources', icon: 'archive', tags: ['sources', 'knowledge-management', 'reading'] },
  { id: 'scenarios', label: 'Scenarios', icon: 'chart', tags: ['scenarios', 'comparison', 'requirements', 'workflow'] },
  { id: 'stacks', label: 'Stacks', icon: 'server', tags: ['stacks', 'infrastructure', 'hardware', 'framework'] },
  { id: 'settings', label: 'Settings', icon: 'cog', tags: ['settings', 'configuration', 'api-keys', 'customization'] },
  { id: 'lab', label: 'Lab', icon: 'beaker', tags: ['lab', 'chat', 'research', 'citations', 'ai-assistant', 'ai-research'] },
  { id: 'studio', label: 'Studio', icon: 'document', tags: ['studio', 'artifacts', 'export'] },
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
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-gradient-to-br from-violet-50 via-white to-blue-50 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.04]">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%236d28d9&quot; fill-opacity=&quot;0.6&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Smart AI System
            <span class="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"> Decisions</span>
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
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
              class="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Quick Stats -->
          <div class="flex items-center justify-center gap-6 mt-6 text-gray-500 text-sm">
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

    <!-- Category Cards Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Browse by Category</h2>
            </div>
            <button
              v-if="selectedCategory"
              @click="selectedCategory = null"
              class="text-sm text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filter
            </button>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = selectedCategory === cat.id ? null : cat.id"
              :class="[
                'group p-4 rounded-xl border-2 text-left transition-all duration-300',
                selectedCategory === cat.id
                  ? 'border-violet-500 bg-violet-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-violet-300 hover:shadow-md'
              ]"
            >
              <div class="flex items-center gap-3">
                <div :class="[
                  'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                  selectedCategory === cat.id ? 'bg-violet-500' : 'bg-gray-100 group-hover:bg-violet-100'
                ]">
                  <!-- Lightning - Getting Started -->
                  <svg v-if="cat.icon === 'lightning'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <!-- Clipboard - Blueprints -->
                  <svg v-else-if="cat.icon === 'clipboard'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <!-- Archive - Sources -->
                  <svg v-else-if="cat.icon === 'archive'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <!-- Chart - Scenarios -->
                  <svg v-else-if="cat.icon === 'chart'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <!-- Server - Stacks -->
                  <svg v-else-if="cat.icon === 'server'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <!-- Cog - Settings -->
                  <svg v-else-if="cat.icon === 'cog'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <!-- Beaker - Lab -->
                  <svg v-else-if="cat.icon === 'beaker'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <!-- Document - Studio -->
                  <svg v-else-if="cat.icon === 'document'" :class="['w-5 h-5', selectedCategory === cat.id ? 'text-white' : 'text-gray-600 group-hover:text-violet-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span :class="[
                  'font-medium transition-colors',
                  selectedCategory === cat.id ? 'text-violet-700' : 'text-gray-700'
                ]">{{ cat.label }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Guides Grid Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">
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
              Clear all filters
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
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              v-for="post in filteredPosts"
              :key="post.slug"
              :href="`/blog/${post.slug}`"
              class="group block bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-xl transition-all duration-300"
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
                  v-if="post.data.featured"
                  class="absolute top-3 left-3 px-3 py-1 bg-violet-600 text-white text-xs font-medium rounded-full flex items-center gap-1"
                >
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Featured
                </span>
              </div>

              <!-- Content -->
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                  {{ post.data.title }}
                </h3>
                <p v-if="post.data.description || post.data.excerpt" class="text-gray-500 text-sm mb-4 line-clamp-2">
                  {{ post.data.description || post.data.excerpt }}
                </p>
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <span>{{ formatDate(post.data.pubDate || post.data.date) }}</span>
                  <span v-if="post.data.readingTime">{{ post.data.readingTime }}</span>
                </div>
                <!-- Tags -->
                <div v-if="post.data.tags && post.data.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="tag in post.data.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.data.tags.length > 3"
                    class="px-2.5 py-1 text-gray-400 text-xs"
                  >
                    +{{ post.data.tags.length - 3 }}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-violet-600 to-blue-600">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready for Smart AI System Decisions?
        </h2>
        <p class="text-violet-100 mb-8 max-w-xl mx-auto">
          Get lifetime access to Lattice and start making confident AI infrastructure decisions today.
        </p>
        <a href="/#pricing" class="inline-flex items-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
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
