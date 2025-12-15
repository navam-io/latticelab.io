---
name: Memory Calculator
description: Accurate GPU memory calculations using formulas from the HuggingFace Ultrascaling Playbook. Avoid over-provisioning or OOM errors with instant, accurate memory estimates.
shortDescription: Estimate model memory requirements and get batch size recommendations for your hardware.
icon: M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z
iconBg: bg-blue-100
iconColor: text-blue-600
productImage: /images/tools/memory-calculator-01.png
productImageAlt: Memory Calculator showing GPU memory breakdown with color-coded components
secondaryImage: /images/tools/memory-calculator-02.png
features:
  - "Presets for Llama, Mistral, Mixtral, and Qwen architectures"
  - "ZeRO Stage 1/2/3 optimization calculations"
  - "Tensor and Pipeline parallelism memory splits"
  - "Activation checkpointing memory savings"
  - "FP32, BF16, FP16, and FP8 precision support"
  - "GPU fit status with specific recommendations"
journeyLink: /blog/memory-calculator
order: 1
category: calculator
seoTitle: AI Model Memory Calculator - GPU Memory Estimation | Lattice
seoDescription: Calculate GPU memory requirements for AI models. Estimate training and inference memory, optimize batch sizes, and plan your infrastructure.
---

## Overview

The Memory Calculator helps you understand exactly how much GPU memory your model will need. Avoid out-of-memory errors and optimize your batch sizes with accurate memory estimations.

## Key Capabilities

### Memory Breakdown
Understand where your GPU memory goes:
- **Model weights**: Parameters in chosen precision
- **Optimizer states**: Adam, AdamW, SGD overhead
- **Gradients**: Full precision gradient storage
- **Activations**: Forward pass intermediate values
- **KV Cache**: Attention memory for inference

### Precision Support
Calculate memory for different precisions:
- FP32 (full precision)
- FP16/BF16 (mixed precision)
- INT8 (quantized)
- INT4 (heavily quantized)

### Batch Size Recommendations
Get optimal batch size based on:
- Available GPU memory
- Model architecture
- Sequence length
- Gradient accumulation steps

### Multi-GPU Planning
Plan distributed training with:
- Data parallel splits
- Tensor parallel configurations
- Memory per GPU estimates
- Communication overhead estimates

## Supported Models

Works with popular architectures:
- Transformer-based (LLaMA, Mistral, GPT)
- Vision models (ViT, CLIP)
- Custom architectures (input your parameters)
