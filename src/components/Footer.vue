<template>
  <footer class="border-t bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <!-- Footer Navigation -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Column 1: Features (2-column layout) -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Features</h3>
          <div class="grid grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <a href="/features/sources" class="text-gray-600 hover:text-gray-900 transition-colors">
                Sources
              </a>
              <span class="text-xs text-gray-500 block">Knowledge Management</span>
            </div>
            <div>
              <a href="/features/scenarios" class="text-gray-600 hover:text-gray-900 transition-colors">
                Scenarios
              </a>
              <span class="text-xs text-gray-500 block">Use Case Planning</span>
            </div>
            <div>
              <a href="/features/lab" class="text-gray-600 hover:text-gray-900 transition-colors">
                Lab
              </a>
              <span class="text-xs text-gray-500 block">AI-Powered Analysis</span>
            </div>
            <div>
              <a href="/features/stacks" class="text-gray-600 hover:text-gray-900 transition-colors">
                Stacks
              </a>
              <span class="text-xs text-gray-500 block">Infrastructure Config</span>
            </div>
            <div>
              <a href="/features/studio" class="text-gray-600 hover:text-gray-900 transition-colors">
                Studio
              </a>
              <span class="text-xs text-gray-500 block">Artifacts & Exports</span>
            </div>
            <div>
              <a href="/features/settings" class="text-gray-600 hover:text-gray-900 transition-colors">
                Settings
              </a>
              <span class="text-xs text-gray-500 block">API Keys & Preferences</span>
            </div>
            <div>
              <a href="/features/blueprints" class="text-gray-600 hover:text-gray-900 transition-colors">
                Blueprints
              </a>
              <span class="text-xs text-gray-500 block">36 Curated Bundles</span>
            </div>
          </div>
        </div>

        <!-- Column 2: Resources -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="/blog" class="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/blog?tag=getting-started" class="text-gray-600 hover:text-gray-900 transition-colors">
                Getting Started
              </a>
            </li>
            <li>
              <a href="/blog?tag=blueprints" class="text-gray-600 hover:text-gray-900 transition-colors">
                Blueprint Guides
              </a>
            </li>
            <li>
              <a href="/blog?tag=sources" class="text-gray-600 hover:text-gray-900 transition-colors">
                Knowledge Management
              </a>
            </li>
            <li>
              <a href="/blog?tag=scenarios" class="text-gray-600 hover:text-gray-900 transition-colors">
                Scenarios & Stacks
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="/about" class="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="https://www.navam.io" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                Navam.io
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="/#pricing" class="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" class="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Popular Guides (2-column layout) -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Popular Guides</h3>
          <div class="grid grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <a href="/blog/create-workspace" class="text-gray-600 hover:text-gray-900 transition-colors">
                Creating a Workspace
              </a>
            </div>
            <div>
              <a href="/blog/chat-with-ai" class="text-gray-600 hover:text-gray-900 transition-colors">
                Chat with AI Agent
              </a>
            </div>
            <div>
              <a href="/blog/apply-blueprint" class="text-gray-600 hover:text-gray-900 transition-colors">
                Applying Blueprints
              </a>
            </div>
            <div>
              <a href="/blog/add-sources" class="text-gray-600 hover:text-gray-900 transition-colors">
                Adding Sources
              </a>
            </div>
            <div>
              <a href="/blog/save-artifact" class="text-gray-600 hover:text-gray-900 transition-colors">
                Saving Artifacts
              </a>
            </div>
            <div>
              <a href="/blog/view-artifact" class="text-gray-600 hover:text-gray-900 transition-colors">
                Viewing Artifacts
              </a>
            </div>
            <div>
              <a href="/blog/create-scenario" class="text-gray-600 hover:text-gray-900 transition-colors">
                Creating Scenarios
              </a>
            </div>
            <div>
              <a href="/blog/create-stack" class="text-gray-600 hover:text-gray-900 transition-colors">
                Creating Stacks
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t pt-8">
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div class="flex items-center space-x-2">
            <span class="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">Lattice</span>
            <span class="text-sm text-gray-600">&copy; 2025 Lattice Lab. Smart AI System Decisions.</span>
          </div>
          <div class="text-sm text-gray-600 flex items-center gap-1">
            <span>Built with</span>
            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>by</span>
            <a href="https://www.navam.io" target="_blank" rel="noopener noreferrer" class="text-violet-600 hover:text-violet-700 font-medium transition-colors">Navam.io</a>
            <span>team</span>
          </div>
        </div>

        <!-- SEO Keywords Footer -->
        <div class="mt-6 text-center text-xs text-gray-500">
          <p>Smart AI System Decisions | LLM Evaluation | Model Comparison | Grounded Recommendations | Citation Tracking | Knowledge Management | RAG Systems | AI Agents | Claude | GPT | Gemini | For Research Engineers, Platform Leads & CTOs</p>
        </div>
      </div>
    </div>
  </footer>
</template>
