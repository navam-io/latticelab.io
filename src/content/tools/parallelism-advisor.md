---
name: Parallelism Advisor
description: Get recommendations for tensor, pipeline, and data parallelism configurations. Optimize your distributed training setup for maximum efficiency.
shortDescription: Get recommendations for tensor, pipeline, and data parallelism configurations.
icon: M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z
iconBg: bg-amber-100
iconColor: text-amber-600
features:
  - Data parallelism configuration
  - Tensor parallelism recommendations
  - Pipeline parallelism stages
  - ZeRO optimization levels
  - Communication efficiency analysis
  - Gradient checkpointing guidance
journeyLink: /blog/parallelism-advisor
docsLink: /docs/guides/build-stacks
order: 4
category: advisor
seoTitle: Distributed Training Parallelism Advisor | Lattice
seoDescription: Get optimal parallelism configurations for distributed AI training. Recommendations for tensor, pipeline, and data parallelism with efficiency analysis.
---

## Overview

The Parallelism Advisor helps you configure distributed training for maximum efficiency. Get optimal settings for data, tensor, and pipeline parallelism based on your model and hardware.

## Key Capabilities

### Data Parallelism
Recommendations for:
- Optimal number of data parallel ranks
- Gradient synchronization frequency
- Batch size per GPU
- All-reduce optimization

### Tensor Parallelism
Configure tensor parallel:
- Degree recommendations (TP=2, 4, 8)
- Layer-wise distribution
- Attention head splitting
- NVLink/InfiniBand requirements

### Pipeline Parallelism
Optimize pipeline stages:
- Number of pipeline stages
- Micro-batch scheduling
- Bubble optimization
- Memory vs throughput tradeoffs

### ZeRO Optimization
DeepSpeed ZeRO guidance:
- ZeRO Stage 1, 2, 3 selection
- Offloading recommendations
- CPU/NVMe offload analysis
- Memory savings estimates

## Hardware-Aware Recommendations

Tailored advice based on:
- GPU memory per device
- Inter-GPU bandwidth
- Network topology
- Cluster size

## Integration

Works with:
- DeepSpeed configuration
- FSDP settings
- Megatron-LM parameters
- PyTorch distributed
