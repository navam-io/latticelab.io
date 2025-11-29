/**
 * PreviewShowcase Component
 *
 * React component that showcases all shared preview components.
 * Used for testing and development purposes.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */
import { useState } from 'react';
import {
  TypingIndicator,
  CitationPill,
  MessageBubble,
  PreviewContainer,
} from './shared';
import { demoCitations, demoChatMessages } from '@/lib/preview-data';

export function PreviewShowcase() {
  const [demoKey, setDemoKey] = useState(0);

  const handleReplay = () => {
    setDemoKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-12" data-testid="preview-showcase">
      {/* Typing Indicator Section */}
      <section data-testid="typing-indicator-section">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Typing Indicator
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Animated dots that show when the AI is "thinking" or generating a response.
        </p>
        <div className="rounded-lg border border-border bg-surface-2 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
              <svg
                className="h-4 w-4 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">Lattice is thinking</span>
            <TypingIndicator />
          </div>
        </div>
      </section>

      {/* Citation Pill Section */}
      <section data-testid="citation-pill-section">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Citation Pills
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Inline citations that expand on hover to show source details.
        </p>
        <div className="rounded-lg border border-border bg-surface-2 p-6">
          <p className="text-sm leading-relaxed text-foreground">
            Claude Sonnet 4 achieves 88.7% accuracy on HumanEval
            <CitationPill citation={demoCitations[0]} className="mx-1" />
            while GPT-4o reaches 90.2%
            <CitationPill citation={demoCitations[1]} className="mx-1" />
            according to official benchmarks.
          </p>
        </div>
      </section>

      {/* Message Bubble Section */}
      <section data-testid="message-bubble-section">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Message Bubbles
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Chat message components for user and assistant messages.
        </p>
        <div className="space-y-4 rounded-lg border border-border bg-surface-2 p-6">
          <MessageBubble role="user">
            Compare Claude Sonnet 4 and GPT-4o for our RAG pipeline.
          </MessageBubble>
          <MessageBubble role="assistant">
            <p className="mb-2">
              Based on the benchmarks, both models excel at RAG tasks:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>Claude Sonnet 4: 200K context window, excellent for large documents</li>
              <li>GPT-4o: Faster response times, better for real-time applications</li>
            </ul>
          </MessageBubble>
          <MessageBubble role="assistant" isStreaming>
            Analyzing cost projections...
          </MessageBubble>
        </div>
      </section>

      {/* Preview Container Section */}
      <section data-testid="preview-container-section">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Preview Container
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Window-like container with title bar and optional replay button.
        </p>
        <PreviewContainer
          key={demoKey}
          title="Lattice Lab — Chat"
          onReplay={handleReplay}
        >
          <div className="space-y-4 p-6">
            {demoChatMessages.map((msg) => (
              <MessageBubble key={msg.id} role={msg.role}>
                {msg.role === 'user' ? (
                  msg.content
                ) : (
                  <div className="whitespace-pre-wrap">{msg.content.slice(0, 200)}...</div>
                )}
              </MessageBubble>
            ))}
          </div>
        </PreviewContainer>
      </section>

      {/* All Citations */}
      <section data-testid="all-citations-section">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          All Demo Citations
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          All citation pills from the demo data.
        </p>
        <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-surface-2 p-6">
          {demoCitations.map((citation) => (
            <CitationPill key={citation.id} citation={citation} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default PreviewShowcase;
