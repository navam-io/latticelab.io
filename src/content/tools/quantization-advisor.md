---
name: Quantization Advisor
description: Explore quantization options like INT8, FP16, and INT4 with quality vs speed tradeoff analysis. Understand the impact on model accuracy and inference performance.
shortDescription: Explore quantization options like INT8 and FP16 with quality vs speed tradeoff analysis.
icon: M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01
iconBg: bg-purple-100
iconColor: text-purple-600
features:
  - FP16/BF16 mixed precision analysis
  - INT8 quantization guidance
  - INT4/GPTQ/AWQ recommendations
  - Quality degradation estimates
  - Speedup predictions
  - Hardware compatibility checks
journeyLink: /blog/quantization-advisor
docsLink: /docs/guides/evaluate-models
order: 5
category: advisor
seoTitle: AI Model Quantization Advisor - INT8, FP16, INT4 Guide | Lattice
seoDescription: Get quantization recommendations for AI models. Analyze INT8, FP16, INT4 options with quality vs speed tradeoffs and hardware compatibility.
---

## Overview

The Quantization Advisor helps you choose the right precision for your model deployment. Understand the tradeoffs between model quality, inference speed, and memory usage.

## Key Capabilities

### Precision Options
Analyze different quantization levels:
- **FP32**: Full precision baseline
- **FP16/BF16**: Half precision, minimal quality loss
- **INT8**: 8-bit quantization, 2x memory reduction
- **INT4**: 4-bit quantization, 4x memory reduction

### Quality Analysis
Understand accuracy impact:
- Perplexity degradation estimates
- Task-specific quality metrics
- Calibration requirements
- Outlier handling strategies

### Performance Predictions
Estimate speedup gains:
- Inference latency reduction
- Throughput improvement
- Memory footprint reduction
- Batch size increases

### Method Recommendations
Guidance on quantization methods:
- **PTQ**: Post-training quantization
- **QAT**: Quantization-aware training
- **GPTQ**: For large language models
- **AWQ**: Activation-aware quantization
- **SmoothQuant**: For transformers

## Hardware Compatibility

Check support for:
- NVIDIA Tensor Cores (INT8, FP16)
- AMD Matrix Cores
- Intel AMX
- Apple Neural Engine

## Model-Specific Advice

Tailored recommendations for:
- LLMs (LLaMA, Mistral, GPT)
- Vision models (ViT, ResNet)
- Multi-modal (CLIP, LLaVA)
- Embedding models
