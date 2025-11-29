/**
 * ScenarioPreview Component
 *
 * Interactive demo simulating the Lattice Scenario Configuration.
 * Shows form controls for workload configuration and AI stack recommendations.
 *
 * Feature Slice 28: Scenario Preview Component
 */
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreviewContainer } from './shared';

// Workload types
const workloadTypes = [
  { id: 'chat', label: 'Chat', description: 'Conversational AI assistants' },
  { id: 'rag', label: 'RAG', description: 'Retrieval-augmented generation' },
  { id: 'agentic', label: 'Agentic', description: 'Autonomous AI agents' },
  { id: 'batch', label: 'Batch', description: 'Large-scale processing' },
];

// Latency percentile options
const latencyPercentiles = ['P50', 'P95', 'P99'] as const;
type LatencyPercentile = (typeof latencyPercentiles)[number];

// Demo recommendation results
interface Recommendation {
  id: string;
  model: string;
  vendor: string;
  framework: string;
  estimatedCost: string;
  latency: string;
  score: number;
}

const demoRecommendations: Record<string, Recommendation[]> = {
  chat: [
    {
      id: 'rec-1',
      model: 'Claude Sonnet 4',
      vendor: 'Anthropic',
      framework: 'LangChain',
      estimatedCost: '$2,400/mo',
      latency: '180ms',
      score: 95,
    },
    {
      id: 'rec-2',
      model: 'GPT-4o',
      vendor: 'OpenAI',
      framework: 'OpenAI SDK',
      estimatedCost: '$2,100/mo',
      latency: '150ms',
      score: 92,
    },
    {
      id: 'rec-3',
      model: 'Gemini Pro',
      vendor: 'Google',
      framework: 'Vertex AI',
      estimatedCost: '$1,800/mo',
      latency: '200ms',
      score: 88,
    },
  ],
  rag: [
    {
      id: 'rec-1',
      model: 'Claude Sonnet 4',
      vendor: 'Anthropic',
      framework: 'LlamaIndex',
      estimatedCost: '$3,200/mo',
      latency: '250ms',
      score: 96,
    },
    {
      id: 'rec-2',
      model: 'GPT-4o',
      vendor: 'OpenAI',
      framework: 'LangChain',
      estimatedCost: '$2,800/mo',
      latency: '220ms',
      score: 93,
    },
  ],
  agentic: [
    {
      id: 'rec-1',
      model: 'Claude Opus 4',
      vendor: 'Anthropic',
      framework: 'CrewAI',
      estimatedCost: '$5,500/mo',
      latency: '450ms',
      score: 97,
    },
    {
      id: 'rec-2',
      model: 'GPT-4o',
      vendor: 'OpenAI',
      framework: 'AutoGPT',
      estimatedCost: '$4,200/mo',
      latency: '380ms',
      score: 91,
    },
  ],
  batch: [
    {
      id: 'rec-1',
      model: 'Claude Haiku',
      vendor: 'Anthropic',
      framework: 'Batch API',
      estimatedCost: '$800/mo',
      latency: '2s',
      score: 94,
    },
    {
      id: 'rec-2',
      model: 'GPT-4o Mini',
      vendor: 'OpenAI',
      framework: 'Batch API',
      estimatedCost: '$650/mo',
      latency: '1.8s',
      score: 92,
    },
  ],
};

// Vendor colors
const vendorColors: Record<string, string> = {
  Anthropic: 'bg-orange-500/10 text-orange-600',
  OpenAI: 'bg-green-500/10 text-green-600',
  Google: 'bg-blue-500/10 text-blue-600',
};

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
  isTop: boolean;
}

function RecommendationCard({ recommendation, index, isTop }: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`rounded-lg border p-4 ${
        isTop
          ? 'border-accent bg-accent/5'
          : 'border-border bg-background'
      }`}
      data-testid={`recommendation-card-${recommendation.id}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2">
            {isTop && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Best Match
              </span>
            )}
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${vendorColors[recommendation.vendor] || 'bg-gray-500/10 text-gray-600'}`}
            >
              {recommendation.vendor}
            </span>
          </div>

          {/* Model name */}
          <h4 className="mt-2 text-sm font-medium text-foreground" data-testid={`recommendation-model-${recommendation.id}`}>
            {recommendation.model}
          </h4>

          {/* Framework */}
          <p className="text-xs text-muted-foreground">
            via {recommendation.framework}
          </p>
        </div>

        {/* Score */}
        <div className="text-right">
          <div
            className={`text-2xl font-bold ${isTop ? 'text-accent' : 'text-foreground'}`}
            data-testid={`recommendation-score-${recommendation.id}`}
          >
            {recommendation.score}
          </div>
          <div className="text-xs text-muted-foreground">match</div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-xs">
        <div>
          <span className="text-muted-foreground">Est. Cost:</span>{' '}
          <span className="font-medium text-foreground" data-testid={`recommendation-cost-${recommendation.id}`}>
            {recommendation.estimatedCost}
          </span>
        </div>
        <div>
          <span className="text-muted-foreground">Latency:</span>{' '}
          <span className="font-medium text-foreground" data-testid={`recommendation-latency-${recommendation.id}`}>
            {recommendation.latency}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ScenarioPreview() {
  const [workloadType, setWorkloadType] = useState('chat');
  const [latencyPercentile, setLatencyPercentile] = useState<LatencyPercentile>('P95');
  const [latencyValue, setLatencyValue] = useState(200);
  const [throughput, setThroughput] = useState(1000);
  const [budget, setBudget] = useState('5000');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);

  const handleGetRecommendations = useCallback(() => {
    setIsLoading(true);
    setRecommendations(null);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setRecommendations(demoRecommendations[workloadType] || demoRecommendations.chat);
    }, 1500);
  }, [workloadType]);

  const handleReset = useCallback(() => {
    setRecommendations(null);
  }, []);

  const handleWorkloadChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkloadType(e.target.value);
    setRecommendations(null);
  }, []);

  const handleLatencyPercentileChange = useCallback((percentile: LatencyPercentile) => {
    setLatencyPercentile(percentile);
  }, []);

  const handleLatencyValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLatencyValue(parseInt(e.target.value, 10));
  }, []);

  const handleThroughputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setThroughput(parseInt(e.target.value, 10));
  }, []);

  const handleBudgetChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
  }, []);

  return (
    <PreviewContainer
      title="Lattice Lab — Scenarios"
      data-testid="scenario-preview"
    >
      <div
        className="flex h-[480px] flex-col"
        data-testid="scenario-preview-content"
      >
        {/* Form Section */}
        <div className="flex-1 overflow-y-auto p-4" data-testid="scenario-form">
          <div className="space-y-4">
            {/* Workload Type */}
            <div>
              <label
                htmlFor="workload-type"
                className="mb-1.5 block text-xs font-medium text-foreground"
              >
                Workload Type
              </label>
              <select
                id="workload-type"
                value={workloadType}
                onChange={handleWorkloadChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                data-testid="scenario-workload-select"
              >
                {workloadTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label} — {type.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Latency Slider */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">
                  Max Latency Target
                </label>
                <div className="flex gap-1">
                  {latencyPercentiles.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handleLatencyPercentileChange(p)}
                      className={`rounded px-2 py-0.5 text-xs transition-colors ${
                        latencyPercentile === p
                          ? 'bg-accent text-white'
                          : 'bg-surface-2 text-muted-foreground hover:text-foreground'
                      }`}
                      data-testid={`scenario-latency-${p.toLowerCase()}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={latencyValue}
                  onChange={handleLatencyValueChange}
                  className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-surface-2 accent-accent"
                  data-testid="scenario-latency-slider"
                />
                <span
                  className="w-16 text-right text-sm font-medium text-foreground"
                  data-testid="scenario-latency-value"
                >
                  {latencyValue}ms
                </span>
              </div>
            </div>

            {/* Throughput Slider */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-foreground">
                  Monthly Throughput
                </label>
                <span
                  className="text-xs text-muted-foreground"
                  data-testid="scenario-throughput-value"
                >
                  {throughput.toLocaleString()} requests/day
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={throughput}
                onChange={handleThroughputChange}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-surface-2 accent-accent"
                data-testid="scenario-throughput-slider"
              />
            </div>

            {/* Budget Input */}
            <div>
              <label
                htmlFor="budget"
                className="mb-1.5 block text-xs font-medium text-foreground"
              >
                Monthly Budget
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  $
                </span>
                <input
                  type="text"
                  id="budget"
                  value={budget}
                  onChange={handleBudgetChange}
                  placeholder="5000"
                  className="w-full rounded-lg border border-border bg-background py-2 pl-7 pr-12 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  data-testid="scenario-budget-input"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  /month
                </span>
              </div>
            </div>

            {/* Get Recommendations Button */}
            <button
              type="button"
              onClick={recommendations ? handleReset : handleGetRecommendations}
              disabled={isLoading}
              className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
              data-testid="scenario-submit-btn"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyzing...
                </span>
              ) : recommendations ? (
                'Reset & Try Again'
              ) : (
                'Get Recommendations'
              )}
            </button>
          </div>

          {/* Recommendations Results */}
          <AnimatePresence>
            {recommendations && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 space-y-3"
                data-testid="scenario-recommendations"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">
                    Recommended Stacks
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {recommendations.length} options found
                  </span>
                </div>
                {recommendations.map((rec, index) => (
                  <RecommendationCard
                    key={rec.id}
                    recommendation={rec}
                    index={index}
                    isTop={index === 0}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-2 text-xs text-muted-foreground"
          data-testid="scenario-footer"
        >
          <span>
            {workloadTypes.find((t) => t.id === workloadType)?.label} workload
          </span>
          <span>
            {latencyPercentile} ≤ {latencyValue}ms • {throughput.toLocaleString()} req/day
          </span>
        </div>
      </div>
    </PreviewContainer>
  );
}

export default ScenarioPreview;
