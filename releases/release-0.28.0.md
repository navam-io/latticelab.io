# Release 0.28.0 — Scenario Preview Component

**Release Date**: 2025-11-28
**Phase**: Phase 3 (Interactive Previews)
**Feature Slice**: 28

---

## Summary

This release introduces the ScenarioPreview component, an interactive demo that simulates the Lattice Scenario Configuration. The component provides form controls for workload configuration and displays AI stack recommendations based on user inputs.

---

## New Components

### ScenarioPreview (`src/components/previews/ScenarioPreview.tsx`)

A comprehensive React component that demonstrates:

- **Workload Type Dropdown**
  - Chat — Conversational AI assistants
  - RAG — Retrieval-augmented generation
  - Agentic — Autonomous AI agents
  - Batch — Large-scale processing
  - Dynamic recommendations based on selection

- **Latency Slider**
  - Range: 50ms to 1000ms (step 50)
  - P50/P95/P99 percentile toggle buttons
  - Real-time value display
  - Footer updates with current settings

- **Throughput Slider**
  - Range: 100 to 10,000 requests/day (step 100)
  - Formatted with locale-aware number display
  - Real-time footer updates

- **Budget Input**
  - Dollar sign prefix
  - "/month" suffix indicator
  - Free-form text input for budget amount

- **Get Recommendations Button**
  - Loading spinner animation during fetch
  - "Analyzing..." text during loading
  - Transitions to "Reset & Try Again" after results
  - Disabled state during loading

- **Recommendation Cards**
  - Model name (Claude Sonnet 4, GPT-4o, etc.)
  - Vendor badge with color coding:
    - Anthropic: Orange
    - OpenAI: Green
    - Google: Blue
  - Framework information (LangChain, LlamaIndex, etc.)
  - Estimated monthly cost
  - Latency estimate
  - Match score (0-100)
  - "Best Match" badge on top recommendation
  - Staggered animation on appearance

- **Footer**
  - Current workload type
  - Latency percentile and target
  - Daily throughput

---

## New Pages

### Scenario Preview Demo (`/scenario-preview-demo`)
- Development page for testing the ScenarioPreview
- Lists all demo features
- Noindex to prevent search indexing

---

## Demo Recommendations

Workload-specific AI stack recommendations:

| Workload | Options | Top Recommendation |
|----------|---------|-------------------|
| Chat | 3 | Claude Sonnet 4 (95% match) |
| RAG | 2 | Claude Sonnet 4 (96% match) |
| Agentic | 2 | Claude Opus 4 (97% match) |
| Batch | 2 | Claude Haiku (94% match) |

---

## Test Coverage

76 new tests added in `tests/feature-28-scenario-preview.spec.ts`:

- **Demo Page**: 3 tests
- **ScenarioPreview Container**: 5 tests
- **Workload Type Dropdown**: 7 tests
- **Latency Slider**: 9 tests
- **Throughput Slider**: 5 tests
- **Budget Input**: 6 tests
- **Get Recommendations Button**: 4 tests
- **Recommendation Cards**: 12 tests
- **Workload-Specific Recommendations**: 4 tests
- **Footer Display**: 4 tests
- **Accessibility**: 5 tests
- **Responsive Design**: 4 tests
- **Animation States**: 4 tests
- **Edge Cases**: 5 tests

**Total Test Count**: 1,538 tests (all passing)

---

## Files Created

```
src/components/previews/ScenarioPreview.tsx
src/pages/scenario-preview-demo.astro
tests/feature-28-scenario-preview.spec.ts
releases/release-0.28.0.md
```

---

## Files Modified

```
package.json                  — Version bump to 0.28.0
backlog/active.md             — Updated backlog status
```

---

## Technical Details

### State Management
```typescript
const [workloadType, setWorkloadType] = useState('chat');
const [latencyPercentile, setLatencyPercentile] = useState<LatencyPercentile>('P95');
const [latencyValue, setLatencyValue] = useState(200);
const [throughput, setThroughput] = useState(1000);
const [budget, setBudget] = useState('5000');
const [isLoading, setIsLoading] = useState(false);
const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
```

### Recommendation Interface
```typescript
interface Recommendation {
  id: string;
  model: string;
  vendor: string;
  framework: string;
  estimatedCost: string;
  latency: string;
  score: number;
}
```

### Vendor Colors
```typescript
const vendorColors = {
  Anthropic: 'bg-orange-500/10 text-orange-600',
  OpenAI: 'bg-green-500/10 text-green-600',
  Google: 'bg-blue-500/10 text-blue-600',
};
```

### Recommendation Flow
1. User configures workload type, latency, throughput, budget
2. Click "Get Recommendations" → Loading state (1.5s simulated)
3. Recommendations display with staggered animation
4. Top recommendation highlighted with "Best Match" badge
5. Click "Reset & Try Again" to reconfigure

### Accessibility
- All form controls have proper labels
- Decorative icons use `aria-hidden="true"`
- Button types explicitly set
- Keyboard navigable

---

## Usage

```tsx
import { ScenarioPreview } from '@/components/previews/ScenarioPreview';

// As an Astro React island
<ScenarioPreview client:load />
```

---

## Next Steps

Feature Slice 29 (Integrate Previews into Feature Pages) will:
- Add ChatPreview to `/features/lab` page
- Add SourcesPreview to `/features/sources` page
- Add BlueprintPreview to `/features/sources` page (secondary)
- Add ScenarioPreview to `/features/scenarios` page
- Create dedicated "Try It" sections
- Add reduced motion fallbacks
- Optimize for mobile layouts

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: In Progress (5/7 slices)
- **Phase 4 (Purchase)**: Planned
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 28/40 feature slices complete (70%)
