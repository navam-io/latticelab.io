---
name: Model Registry
description: Browse and compare 30+ AI models from Anthropic, OpenAI, Google, and Ollama. Filter by capabilities, context windows, pricing, and performance metrics to find the perfect model for your use case.
shortDescription: Compare 30+ AI models with capabilities, pricing, and context windows.
icon: M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4
iconBg: bg-indigo-100
iconColor: text-indigo-600
features:
  - 30+ models from Anthropic, OpenAI, Google, Ollama
  - Capability filtering (vision, tools, streaming, thinking)
  - Context window and max output token limits
  - Input/output token pricing comparison
  - Batch API and prompt caching pricing
  - Model versioning and deprecation tracking
journeyLink: /blog/model-registry
docsLink: /docs/guides/compare-models
order: 2
category: registry
seoTitle: AI Model Registry - Compare 30+ LLMs Across Providers | Lattice
seoDescription: Browse and compare 30+ AI models from Anthropic, OpenAI, Google. Filter by capabilities, pricing, and context windows to find the right model for your workload.
---

## Overview

The Model Registry is Lattice's centralized database of model capabilities, constraints, and pricing. Instead of hunting through documentation, browse a unified interface where every model is described with consistent fields: context window, pricing per million tokens, supported features, and provider-specific quirks.

## Key Capabilities

### Browsing Models by Provider

The Models tab displays all 30+ registered models in a sortable table:

- **Provider**: Anthropic, OpenAI, Google, Ollama
- **Model**: Display name with preview badge for new models
- **Context**: Context window in tokens
- **Input**: Price per million input tokens
- **Output**: Price per million output tokens

### Model Details

Click any row to view:

**Capabilities Grid:**
- Context Window (e.g., 200K for Claude Sonnet 4.5)
- Max Output tokens
- Vision (image input support)
- Tools (function calling)
- Thinking (extended reasoning)
- Streaming support

**Pricing Breakdown:**
- Standard API pricing
- Batch API discounts
- Prompt caching rates

### Registry Integration
- Stack Configuration shows pricing inline
- Research Agent cites current pricing
- Smart Defaults adapt to model constraints
- TCO Calculator pulls live pricing
