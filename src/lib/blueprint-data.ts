/**
 * Blueprint Data
 *
 * Sample blueprint data for the blueprints gallery page.
 * Based on the 36 vendor blueprints available in Lattice Lab.
 *
 * Feature Slice 20: Blueprints Gallery Page
 */

export interface Blueprint {
  id: string;
  name: string;
  vendor: string;
  category: BlueprintCategory;
  description: string;
  sourceCount: number;
  isOfficial: boolean;
  tags: string[];
}

export type BlueprintCategory =
  | 'All'
  | 'Production'
  | 'Development'
  | 'Comparison'
  | 'Enterprise'
  | 'Research'
  | 'Cost'
  | 'Performance';

export const categories: { id: BlueprintCategory; label: string; description: string }[] = [
  { id: 'All', label: 'All Blueprints', description: 'View all 36 available blueprints' },
  { id: 'Production', label: 'Production', description: 'Production-ready AI stacks' },
  { id: 'Development', label: 'Development', description: 'Local development setups' },
  { id: 'Comparison', label: 'Comparison', description: 'Multi-vendor comparisons' },
  { id: 'Enterprise', label: 'Enterprise', description: 'Enterprise features & compliance' },
  { id: 'Research', label: 'Research', description: 'Academic & research resources' },
  { id: 'Cost', label: 'Cost Optimization', description: 'Budget-friendly configurations' },
  { id: 'Performance', label: 'Performance', description: 'Latency & throughput optimized' },
];

export const blueprints: Blueprint[] = [
  // Production Blueprints
  {
    id: 'anthropic-production',
    name: 'Anthropic Claude',
    vendor: 'Anthropic',
    category: 'Production',
    description: 'Production Claude stack with model cards, API documentation, pricing guides, and safety research papers.',
    sourceCount: 12,
    isOfficial: true,
    tags: ['Claude', 'API', 'Enterprise'],
  },
  {
    id: 'openai-production',
    name: 'OpenAI GPT',
    vendor: 'OpenAI',
    category: 'Production',
    description: 'Complete GPT-4 production setup with embeddings, fine-tuning guides, and best practices documentation.',
    sourceCount: 15,
    isOfficial: true,
    tags: ['GPT-4', 'Embeddings', 'Fine-tuning'],
  },
  {
    id: 'aws-bedrock',
    name: 'AWS Bedrock',
    vendor: 'Amazon Web Services',
    category: 'Production',
    description: 'Multi-model access through AWS Bedrock with pricing, integration guides, and enterprise features.',
    sourceCount: 18,
    isOfficial: true,
    tags: ['AWS', 'Multi-model', 'Enterprise'],
  },
  {
    id: 'google-vertex',
    name: 'Google Vertex AI',
    vendor: 'Google Cloud',
    category: 'Production',
    description: 'Gemini models and Vertex AI platform documentation including MLOps guides and PaLM migration.',
    sourceCount: 14,
    isOfficial: true,
    tags: ['Gemini', 'Vertex AI', 'MLOps'],
  },
  {
    id: 'azure-openai',
    name: 'Azure OpenAI',
    vendor: 'Microsoft',
    category: 'Production',
    description: 'Enterprise GPT deployment on Azure with security, scaling, and compliance documentation.',
    sourceCount: 16,
    isOfficial: true,
    tags: ['Azure', 'Enterprise', 'Security'],
  },
  {
    id: 'meta-llama',
    name: 'Meta Llama',
    vendor: 'Meta',
    category: 'Production',
    description: 'Open-source Llama models with deployment guides, fine-tuning tutorials, and research papers.',
    sourceCount: 11,
    isOfficial: true,
    tags: ['Llama', 'Open Source', 'Fine-tuning'],
  },

  // Development Blueprints
  {
    id: 'ollama-local',
    name: 'Ollama Local',
    vendor: 'Ollama',
    category: 'Development',
    description: 'Local LLM development with Ollama. Includes setup guides, model catalog, and integration docs.',
    sourceCount: 8,
    isOfficial: false,
    tags: ['Local', 'Development', 'Free'],
  },
  {
    id: 'langchain-dev',
    name: 'LangChain',
    vendor: 'LangChain',
    category: 'Development',
    description: 'LangChain framework documentation, tutorials, and integration guides for building AI applications.',
    sourceCount: 22,
    isOfficial: true,
    tags: ['Framework', 'RAG', 'Agents'],
  },
  {
    id: 'llamaindex-dev',
    name: 'LlamaIndex',
    vendor: 'LlamaIndex',
    category: 'Development',
    description: 'RAG framework documentation with examples, best practices, and advanced retrieval patterns.',
    sourceCount: 19,
    isOfficial: true,
    tags: ['RAG', 'Indexing', 'Retrieval'],
  },
  {
    id: 'huggingface-dev',
    name: 'Hugging Face',
    vendor: 'Hugging Face',
    category: 'Development',
    description: 'Transformers library, model hub documentation, and datasets for AI development.',
    sourceCount: 25,
    isOfficial: true,
    tags: ['Models', 'Datasets', 'Transformers'],
  },

  // Comparison Blueprints
  {
    id: 'llm-comparison',
    name: 'LLM Comparison',
    vendor: 'Multi-vendor',
    category: 'Comparison',
    description: 'Side-by-side comparison of major LLMs including Claude, GPT-4, Gemini, and Llama models.',
    sourceCount: 20,
    isOfficial: false,
    tags: ['Comparison', 'Benchmarks', 'Multi-model'],
  },
  {
    id: 'embedding-comparison',
    name: 'Embedding Models',
    vendor: 'Multi-vendor',
    category: 'Comparison',
    description: 'Compare embedding models from OpenAI, Cohere, Voyage AI, and open-source alternatives.',
    sourceCount: 14,
    isOfficial: false,
    tags: ['Embeddings', 'RAG', 'Comparison'],
  },
  {
    id: 'vector-db-comparison',
    name: 'Vector Databases',
    vendor: 'Multi-vendor',
    category: 'Comparison',
    description: 'Compare Pinecone, Weaviate, Chroma, Qdrant, and Milvus for vector storage needs.',
    sourceCount: 18,
    isOfficial: false,
    tags: ['Vector DB', 'Storage', 'Comparison'],
  },

  // Enterprise Blueprints
  {
    id: 'enterprise-security',
    name: 'Enterprise Security',
    vendor: 'Multi-vendor',
    category: 'Enterprise',
    description: 'Security documentation, SOC 2 compliance guides, and data privacy best practices.',
    sourceCount: 16,
    isOfficial: false,
    tags: ['Security', 'SOC 2', 'Compliance'],
  },
  {
    id: 'nvidia-enterprise',
    name: 'NVIDIA AI Enterprise',
    vendor: 'NVIDIA',
    category: 'Enterprise',
    description: 'NVIDIA NIM, TensorRT, and AI Enterprise platform documentation for GPU-accelerated AI.',
    sourceCount: 14,
    isOfficial: true,
    tags: ['GPU', 'Inference', 'Enterprise'],
  },
  {
    id: 'databricks-enterprise',
    name: 'Databricks',
    vendor: 'Databricks',
    category: 'Enterprise',
    description: 'Databricks AI/ML platform with MLflow, Unity Catalog, and lakehouse AI documentation.',
    sourceCount: 17,
    isOfficial: true,
    tags: ['MLOps', 'Lakehouse', 'Enterprise'],
  },

  // Research Blueprints
  {
    id: 'ai-safety-research',
    name: 'AI Safety Research',
    vendor: 'Multi-vendor',
    category: 'Research',
    description: 'AI safety papers, alignment research, and responsible AI guidelines from leading labs.',
    sourceCount: 24,
    isOfficial: false,
    tags: ['Safety', 'Alignment', 'Research'],
  },
  {
    id: 'academic-benchmarks',
    name: 'Academic Benchmarks',
    vendor: 'Multi-vendor',
    category: 'Research',
    description: 'Academic benchmark papers including MMLU, HellaSwag, HumanEval, and GSM8K documentation.',
    sourceCount: 15,
    isOfficial: false,
    tags: ['Benchmarks', 'Evaluation', 'Academic'],
  },

  // Cost Optimization Blueprints
  {
    id: 'cost-optimization',
    name: 'Cost Optimization',
    vendor: 'Multi-vendor',
    category: 'Cost',
    description: 'Pricing documentation and cost optimization strategies across all major AI providers.',
    sourceCount: 20,
    isOfficial: false,
    tags: ['Pricing', 'Cost', 'Optimization'],
  },
  {
    id: 'open-source-stack',
    name: 'Open Source Stack',
    vendor: 'Multi-vendor',
    category: 'Cost',
    description: 'Free and open-source AI stack with Llama, Mistral, and community models.',
    sourceCount: 18,
    isOfficial: false,
    tags: ['Open Source', 'Free', 'Self-hosted'],
  },
  {
    id: 'groq-inference',
    name: 'Groq Inference',
    vendor: 'Groq',
    category: 'Cost',
    description: 'Ultra-fast inference with Groq LPUs. Includes pricing, API docs, and performance guides.',
    sourceCount: 9,
    isOfficial: true,
    tags: ['Fast', 'Inference', 'Cost-effective'],
  },

  // Performance Blueprints
  {
    id: 'low-latency-stack',
    name: 'Low Latency Stack',
    vendor: 'Multi-vendor',
    category: 'Performance',
    description: 'Optimized for sub-second responses. Includes Groq, Fireworks, and streaming configurations.',
    sourceCount: 12,
    isOfficial: false,
    tags: ['Latency', 'Speed', 'Streaming'],
  },
  {
    id: 'high-throughput',
    name: 'High Throughput',
    vendor: 'Multi-vendor',
    category: 'Performance',
    description: 'Batch processing and high-throughput configurations for large-scale AI workloads.',
    sourceCount: 14,
    isOfficial: false,
    tags: ['Throughput', 'Batch', 'Scale'],
  },
  {
    id: 'fireworks-ai',
    name: 'Fireworks AI',
    vendor: 'Fireworks',
    category: 'Performance',
    description: 'Fast inference platform with function calling, structured outputs, and custom models.',
    sourceCount: 10,
    isOfficial: true,
    tags: ['Fast', 'Function Calling', 'Custom'],
  },
  {
    id: 'together-ai',
    name: 'Together AI',
    vendor: 'Together',
    category: 'Performance',
    description: 'High-performance inference and fine-tuning platform with open-source model support.',
    sourceCount: 11,
    isOfficial: true,
    tags: ['Inference', 'Fine-tuning', 'Open Source'],
  },

  // Additional Blueprints to reach 36
  {
    id: 'cohere-enterprise',
    name: 'Cohere',
    vendor: 'Cohere',
    category: 'Production',
    description: 'Enterprise NLP with Command, Embed, and Rerank models for production deployments.',
    sourceCount: 13,
    isOfficial: true,
    tags: ['NLP', 'Embeddings', 'Rerank'],
  },
  {
    id: 'mistral-ai',
    name: 'Mistral AI',
    vendor: 'Mistral',
    category: 'Production',
    description: 'European AI with Mistral Large, Medium, and open-weight models for various use cases.',
    sourceCount: 10,
    isOfficial: true,
    tags: ['European', 'Open Weights', 'Multilingual'],
  },
  {
    id: 'perplexity-api',
    name: 'Perplexity',
    vendor: 'Perplexity',
    category: 'Production',
    description: 'Online LLM with real-time web search capabilities and citation support.',
    sourceCount: 8,
    isOfficial: true,
    tags: ['Search', 'Citations', 'Real-time'],
  },
  {
    id: 'anyscale-endpoints',
    name: 'Anyscale',
    vendor: 'Anyscale',
    category: 'Enterprise',
    description: 'Scalable AI infrastructure with Ray and managed endpoints for enterprise workloads.',
    sourceCount: 12,
    isOfficial: true,
    tags: ['Ray', 'Scalable', 'Infrastructure'],
  },
  {
    id: 'replicate-models',
    name: 'Replicate',
    vendor: 'Replicate',
    category: 'Development',
    description: 'Run open-source models in the cloud with simple API access and custom deployments.',
    sourceCount: 9,
    isOfficial: true,
    tags: ['Cloud', 'Open Source', 'Simple'],
  },
  {
    id: 'modal-serverless',
    name: 'Modal',
    vendor: 'Modal',
    category: 'Development',
    description: 'Serverless AI infrastructure with GPU access, batch jobs, and scheduled tasks.',
    sourceCount: 11,
    isOfficial: true,
    tags: ['Serverless', 'GPU', 'Batch'],
  },
  {
    id: 'pinecone-vector',
    name: 'Pinecone',
    vendor: 'Pinecone',
    category: 'Enterprise',
    description: 'Managed vector database with hybrid search, filtering, and enterprise security.',
    sourceCount: 14,
    isOfficial: true,
    tags: ['Vector DB', 'Managed', 'Hybrid Search'],
  },
  {
    id: 'weaviate-vector',
    name: 'Weaviate',
    vendor: 'Weaviate',
    category: 'Development',
    description: 'Open-source vector database with GraphQL API and built-in vectorization modules.',
    sourceCount: 16,
    isOfficial: true,
    tags: ['Vector DB', 'Open Source', 'GraphQL'],
  },
  {
    id: 'rag-evaluation',
    name: 'RAG Evaluation',
    vendor: 'Multi-vendor',
    category: 'Research',
    description: 'RAGAS, TruLens, and LangSmith documentation for evaluating RAG pipelines.',
    sourceCount: 13,
    isOfficial: false,
    tags: ['RAG', 'Evaluation', 'Metrics'],
  },
  {
    id: 'agentic-frameworks',
    name: 'Agentic Frameworks',
    vendor: 'Multi-vendor',
    category: 'Research',
    description: 'AutoGPT, CrewAI, and agent framework documentation for building autonomous AI systems.',
    sourceCount: 17,
    isOfficial: false,
    tags: ['Agents', 'Autonomous', 'Frameworks'],
  },
  {
    id: 'voyage-ai',
    name: 'Voyage AI',
    vendor: 'Voyage',
    category: 'Production',
    description: 'Industry-leading embedding models for retrieval, with domain-specific and multilingual options.',
    sourceCount: 8,
    isOfficial: true,
    tags: ['Embeddings', 'Retrieval', 'Multilingual'],
  },
];

export function getBlueprintsByCategory(category: BlueprintCategory): Blueprint[] {
  if (category === 'All') {
    return blueprints;
  }
  return blueprints.filter((bp) => bp.category === category);
}

export function getBlueprintById(id: string): Blueprint | undefined {
  return blueprints.find((bp) => bp.id === id);
}

export function getVendors(): string[] {
  return [...new Set(blueprints.map((bp) => bp.vendor))].sort();
}

export function getBlueprintCount(): number {
  return blueprints.length;
}
