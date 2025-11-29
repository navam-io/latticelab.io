<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, One-Time Pricing
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Get lifetime access to Lattice with a single purchase. No subscriptions, no recurring fees.
        </p>
      </div>

      <!-- Pricing Card -->
      <div class="max-w-lg mx-auto">
        <div class="bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl p-1">
          <div class="bg-white rounded-3xl p-8">
            <!-- Price -->
            <div class="text-center mb-8">
              <div class="text-5xl font-bold text-gray-900 mb-2">$99</div>
              <div class="text-gray-600">One-time payment • Lifetime access</div>
            </div>

            <!-- Features List -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Full access to Sources, Lab, and Studio panels</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">36 curated vendor blueprints (Anthropic, AWS, NVIDIA, GCP, Meta, Mistral)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Unlimited workspaces and source ingestion</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Scenario configuration with SLOs, budget, and compliance</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Artifact generation and export (CSV, JSON, Markdown)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">All future updates included</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="text-center">
              <div class="stripe-button-container inline-flex">
                <stripe-buy-button
                  buy-button-id="buy_btn_1SYXbwRCxnzBPkIXayfIahbD"
                  publishable-key="pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB"
                >
                </stripe-buy-button>
              </div>
            </div>

            <!-- API Costs Note -->
            <div class="mt-6 p-4 bg-gray-50 rounded-xl">
              <p class="text-sm text-gray-600 text-center">
                <strong>Note:</strong> You'll need your own API keys for LLM providers (Anthropic, OpenAI, etc.).
                Typical usage costs $3-15/month depending on volume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pricing section for Lattice
</script>

<style scoped>
.stripe-button-container {
  display: inline-flex;
  align-items: center;
  height: 48px;
}
</style>
