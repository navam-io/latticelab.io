---
name: Live Data Feeds
description: Keep pricing, benchmarks, and model capabilities current with automatic data synchronization. Configure feeds from AI providers to ensure your cost estimates and recommendations stay accurate.
shortDescription: Automatic data sync for pricing, benchmarks, and model capabilities.
icon: M13 10V3L4 14h7v7l9-11h-7z
iconBg: bg-cyan-100
iconColor: text-cyan-600
features:
  - Pricing feeds from major AI providers
  - Model card and capability updates
  - Benchmark feeds (LMArena, MLPerf)
  - Configurable sync frequency
  - Feed status monitoring
  - Stale data alerts
journeyLink: /blog/live-data-feeds
docsLink: /docs/guides/configure-feeds
order: 8
category: data
seoTitle: Live Data Feeds - Automatic AI Data Sync | Lattice
seoDescription: Keep your AI infrastructure data current with automatic feeds for pricing, benchmarks, and model capabilities from Anthropic, OpenAI, Google, and more.
---

## Overview

Live Data Feeds transforms Lattice from a static planning tool into a continuously updated knowledge base. Feeds automatically sync pricing, model cards, and benchmark data from AI providers, keeping your cost estimates accurate and your recommendations current.

## Key Capabilities

### Feed Categories

**Pricing Feeds:**
- Model input/output token costs
- Context window sizes and max output tokens
- Batch pricing and volume discounts
- Provider: Anthropic, OpenAI, Google, AWS, Azure, Mistral, Cohere

**Model Card Feeds:**
- Capabilities (vision, tool use, streaming, extended thinking)
- Performance metrics and ELO ratings
- Rate limits (requests per minute, tokens per minute)
- Provider: Anthropic, OpenAI, Google, Meta, HuggingFace, Ollama

**Benchmark Feeds:**
- Overall ELO rankings
- Category-specific scores (coding, reasoning, instruction following)
- Provider: LMArena, Artificial Analysis, MLPerf

### Feed Management
- Add and configure feeds from supported providers
- Set sync frequency (hourly, daily, weekly)
- Monitor feed status (Active, Paused, Error, Stale)
- Manual sync trigger for immediate updates

### Integration
- TCO Calculator uses live pricing data
- Model Registry reflects current capabilities
- Accelerator Registry shows real-time cloud pricing
- Recommendations based on latest benchmarks
