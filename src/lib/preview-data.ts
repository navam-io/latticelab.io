/**
 * Preview Data Utilities
 *
 * Mock data and utilities for interactive preview components.
 * Contains hardcoded responses for demo scenarios.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */

// =====================
// Types
// =====================

export interface Citation {
  id: string;
  number: number;
  source: string;
  page?: number;
  excerpt?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
  thinkingSteps?: string[];
}

export interface Source {
  id: string;
  name: string;
  type: 'pdf' | 'url' | 'api';
  pageCount?: number;
  dateAdded: string;
  vendor?: string;
}

export interface Blueprint {
  id: string;
  name: string;
  vendor: string;
  category: string;
  description: string;
  sourceCount: number;
  isOfficial: boolean;
}

export interface Artifact {
  id: string;
  title: string;
  type: 'comparison' | 'memo' | 'table';
  preview: string;
}

// =====================
// Chat Demo Data
// =====================

export const demoCitations: Citation[] = [
  {
    id: 'cite-1',
    number: 1,
    source: 'Anthropic Claude Model Card',
    page: 12,
    excerpt: 'Claude Sonnet 4 achieves 88.7% on HumanEval, outperforming previous versions...',
  },
  {
    id: 'cite-2',
    number: 2,
    source: 'OpenAI GPT-4o Technical Report',
    page: 8,
    excerpt: 'GPT-4o demonstrates 90.2% accuracy on HumanEval with optimized latency...',
  },
  {
    id: 'cite-3',
    number: 3,
    source: 'LangChain RAG Benchmark 2024',
    page: 23,
    excerpt: 'For retrieval-augmented generation, context window utilization is critical...',
  },
  {
    id: 'cite-4',
    number: 4,
    source: 'Anthropic API Pricing',
    excerpt: 'Claude Sonnet 4: $3/MTok input, $15/MTok output',
  },
  {
    id: 'cite-5',
    number: 5,
    source: 'OpenAI API Pricing',
    excerpt: 'GPT-4o: $2.50/MTok input, $10/MTok output',
  },
];

export const demoThinkingSteps: string[] = [
  'Analyzing model specifications from source documents...',
  'Comparing benchmark scores across HumanEval, MMLU, and custom RAG tests...',
  'Calculating cost projections for 1M requests/month...',
  'Evaluating latency requirements against P95 benchmarks...',
];

export const demoChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'user',
    content: 'Compare Claude Sonnet 4 and GPT-4o for our RAG pipeline. We need low latency and good context handling.',
  },
  {
    id: 'msg-2',
    role: 'assistant',
    content: `Based on the benchmarks and pricing data, here's my analysis:

**Performance Comparison**

Both models excel at RAG tasks, but with different strengths:

- **Claude Sonnet 4** shows 88.7% HumanEval accuracy[1] with a 200K context window, making it excellent for large document retrieval.
- **GPT-4o** achieves 90.2% on HumanEval[2] with faster response times, better for real-time applications.

**For RAG Specifically**

The LangChain benchmarks[3] show Claude performs better on multi-document synthesis, while GPT-4o handles single-document Q&A faster.

**Cost Analysis**

At 1M requests/month with average 2K tokens per request:
- Claude Sonnet 4: ~$36K/month[4]
- GPT-4o: ~$25K/month[5]

**Recommendation**

For your low-latency requirement, **GPT-4o** is the better choice. If context handling is more critical than speed, consider Claude Sonnet 4.`,
    citations: demoCitations,
    thinkingSteps: demoThinkingSteps,
  },
];

export const demoArtifact: Artifact = {
  id: 'artifact-1',
  title: 'Claude vs GPT-4o Comparison',
  type: 'comparison',
  preview: '| Model | HumanEval | Latency | Cost/1M |',
};

// =====================
// Sources Demo Data
// =====================

export const demoSources: Source[] = [
  {
    id: 'src-1',
    name: 'OpenAI GPT-4o Technical Report',
    type: 'pdf',
    pageCount: 42,
    dateAdded: '2024-11-15',
    vendor: 'OpenAI',
  },
  {
    id: 'src-2',
    name: 'Anthropic Claude Model Card',
    type: 'pdf',
    pageCount: 28,
    dateAdded: '2024-11-14',
    vendor: 'Anthropic',
  },
  {
    id: 'src-3',
    name: 'LangChain RAG Benchmark 2024',
    type: 'url',
    dateAdded: '2024-11-13',
    vendor: 'LangChain',
  },
  {
    id: 'src-4',
    name: 'AWS Bedrock Pricing API',
    type: 'api',
    dateAdded: '2024-11-12',
    vendor: 'AWS',
  },
  {
    id: 'src-5',
    name: 'Google Gemini Model Specifications',
    type: 'pdf',
    pageCount: 35,
    dateAdded: '2024-11-11',
    vendor: 'Google',
  },
];

// =====================
// Blueprints Demo Data
// =====================

export const demoBlueprints: Blueprint[] = [
  {
    id: 'bp-1',
    name: 'Anthropic Claude Production Stack',
    vendor: 'Anthropic',
    category: 'Production',
    description: 'Complete Claude integration with model cards, pricing, and benchmarks',
    sourceCount: 12,
    isOfficial: true,
  },
  {
    id: 'bp-2',
    name: 'OpenAI GPT Production Stack',
    vendor: 'OpenAI',
    category: 'Production',
    description: 'Full GPT-4 series documentation including fine-tuning guides',
    sourceCount: 15,
    isOfficial: true,
  },
  {
    id: 'bp-3',
    name: 'AWS Bedrock Enterprise',
    vendor: 'AWS',
    category: 'Enterprise',
    description: 'Bedrock deployment patterns with compliance documentation',
    sourceCount: 18,
    isOfficial: true,
  },
  {
    id: 'bp-4',
    name: 'LLM Comparison Bundle',
    vendor: 'Multi-vendor',
    category: 'Comparison',
    description: 'Side-by-side benchmarks for Claude, GPT, Gemini, and Llama',
    sourceCount: 20,
    isOfficial: false,
  },
];

// =====================
// Utility Functions
// =====================

/**
 * Simulates typing delay for streaming text
 */
export function getTypingDelay(charIndex: number): number {
  // Variable speed for more natural feel
  const baseDelay = 15;
  const randomVariation = Math.random() * 10;
  // Slower on punctuation
  const char = String.fromCharCode(charIndex);
  if (['.', ',', '!', '?', ':'].includes(char)) {
    return baseDelay * 3 + randomVariation;
  }
  return baseDelay + randomVariation;
}

/**
 * Parses message content to identify citation markers like [1], [2]
 */
export function parseCitations(content: string, citations: Citation[]): string {
  let parsed = content;
  citations.forEach((citation) => {
    const marker = `[${citation.number}]`;
    // Replace with a placeholder that can be rendered as CitationPill
    parsed = parsed.replace(marker, `{{cite:${citation.id}}}`);
  });
  return parsed;
}

/**
 * Filters sources by search query
 */
export function filterSources(sources: Source[], query: string): Source[] {
  if (!query.trim()) return sources;
  const lowerQuery = query.toLowerCase();
  return sources.filter(
    (source) =>
      source.name.toLowerCase().includes(lowerQuery) ||
      source.vendor?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filters blueprints by category
 */
export function filterBlueprints(blueprints: Blueprint[], category: string): Blueprint[] {
  if (category === 'All') return blueprints;
  return blueprints.filter((bp) => bp.category === category);
}

/**
 * Gets unique categories from blueprints
 */
export function getBlueprintCategories(blueprints: Blueprint[]): string[] {
  const categories = new Set(blueprints.map((bp) => bp.category));
  return ['All', ...Array.from(categories)];
}
