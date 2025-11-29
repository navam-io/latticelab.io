<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <!-- FAQ Grid -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span class="font-semibold text-gray-900">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-gray-500 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="openIndex === index" class="px-6 pb-5 overflow-hidden">
              <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: "What is Lattice?",
    answer: "Lattice is an agentic AI lab assistant that helps research engineers, platform leads, and CTOs make confident AI infrastructure decisions. It automates research synthesis by processing vendor documentation, benchmarks, and pricing data—providing grounded recommendations with full citations back to authoritative sources."
  },
  {
    question: "How does Lattice differ from ChatGPT or Claude?",
    answer: "Unlike general-purpose AI assistants, Lattice is purpose-built for AI infrastructure research. It ingests your specific sources (vendor docs, papers, pricing pages), maintains citation chains, and provides recommendations grounded in your curated knowledge base—not generic training data. Every claim links back to a specific source chunk you can verify."
  },
  {
    question: "What are blueprints?",
    answer: "Blueprints are curated knowledge bundles that package vendor documentation, pre-configured scenarios, and recommended stacks. Lattice includes 36 blueprints from leading vendors like Anthropic, AWS, NVIDIA, GCP, Meta, and Mistral. Apply a blueprint to instantly populate your workspace with relevant sources and configurations."
  },
  {
    question: "Do I need my own API keys?",
    answer: "Yes, Lattice uses your own API keys for LLM providers (Anthropic, OpenAI, Google). This keeps your data private and gives you full control over usage costs. Typical monthly API costs range from $3-15 depending on usage volume."
  },
  {
    question: "What source types can I add?",
    answer: "Lattice supports multiple source types: PDF documents, web URLs, GitHub repositories, YouTube video transcripts, and Google Docs. All content is chunked, embedded, and indexed for semantic search. Citations track back to specific chunks in your sources."
  },
  {
    question: "What is a scenario?",
    answer: "A scenario defines your workload requirements: workload type (Chat, RAG, Agentic, Embedding), SLO requirements (latency P50/P95/P99, throughput, availability), budget constraints, and compliance needs (regions, certifications like SOC2/HIPAA/GDPR). Lattice uses scenarios to recommend appropriate stacks."
  },
  {
    question: "What is a stack?",
    answer: "A stack is a configuration that includes: model (provider, model ID, temperature, context length), framework (LangGraph, LangChain, custom), and hardware (cloud provider, region, GPU type, instance sizing). Stacks are recommended based on your scenario requirements."
  },
  {
    question: "Is my data private?",
    answer: "Yes. Your sources are processed locally and stored in your own database. API calls to LLM providers use your own keys and are subject to their privacy policies. Lattice doesn't share your research data with third parties."
  },
  {
    question: "What's included in the $99 purchase?",
    answer: "The one-time $99 purchase includes lifetime access to Lattice: all three panels (Sources, Lab, Studio), 36 curated blueprints, unlimited workspaces, scenario and stack configuration, artifact generation and export, and all future updates. No subscriptions or recurring fees."
  }
]
</script>
