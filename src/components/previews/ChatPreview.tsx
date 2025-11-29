/**
 * ChatPreview Component
 *
 * Interactive demo simulating the Lattice Lab chat experience.
 * Shows a pre-scripted conversation with typing indicators,
 * streaming text, citations, thinking steps, and artifacts.
 *
 * Feature Slice 25: Chat Preview Component
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  TypingIndicator,
  CitationPill,
  MessageBubble,
  PreviewContainer,
} from './shared';
import {
  demoChatMessages,
  demoCitations,
  demoThinkingSteps,
  demoArtifact,
  type Citation,
  type Artifact,
} from '@/lib/preview-data';

// Demo state machine
type DemoPhase =
  | 'idle'
  | 'user-message'
  | 'thinking'
  | 'streaming'
  | 'complete';

interface ThinkingStep {
  text: string;
  completed: boolean;
}

export function ChatPreview() {
  // Demo state
  const [phase, setPhase] = useState<DemoPhase>('idle');
  const [userMessage, setUserMessage] = useState('');
  const [streamedContent, setStreamedContent] = useState('');
  const [thinkingSteps, setThinkingSteps] = useState<ThinkingStep[]>([]);
  const [showThinking, setShowThinking] = useState(true);
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [demoKey, setDemoKey] = useState(0);

  // Accessibility: respect reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Refs for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const streamingRef = useRef<boolean>(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      streamingRef.current = false;
    };
  }, []);

  // Start demo automatically on mount
  useEffect(() => {
    startDemo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoKey]);

  const startDemo = useCallback(() => {
    // Reset state
    setPhase('idle');
    setUserMessage('');
    setStreamedContent('');
    setThinkingSteps([]);
    setShowThinking(true);
    setArtifact(null);
    streamingRef.current = false;

    // Start with user message after delay
    timeoutRef.current = setTimeout(() => {
      setPhase('user-message');
      setUserMessage(demoChatMessages[0].content);

      // Move to thinking phase
      timeoutRef.current = setTimeout(() => {
        setPhase('thinking');
        animateThinkingSteps();
      }, 1000);
    }, 500);
  }, []);

  const animateThinkingSteps = useCallback(() => {
    const steps = demoThinkingSteps.map((text) => ({ text, completed: false }));
    setThinkingSteps(steps);

    // Animate each step completing
    steps.forEach((_, index) => {
      timeoutRef.current = setTimeout(() => {
        setThinkingSteps((prev) =>
          prev.map((step, i) =>
            i === index ? { ...step, completed: true } : step
          )
        );

        // After last step, start streaming
        if (index === steps.length - 1) {
          timeoutRef.current = setTimeout(() => {
            setPhase('streaming');
            streamResponse();
          }, 500);
        }
      }, 400 * (index + 1));
    });
  }, []);

  const streamResponse = useCallback(() => {
    const fullContent = demoChatMessages[1].content;

    // If user prefers reduced motion, show full content immediately
    if (prefersReducedMotion) {
      setStreamedContent(fullContent);
      setPhase('complete');
      setArtifact(demoArtifact);
      return;
    }

    let charIndex = 0;
    streamingRef.current = true;

    const streamChar = () => {
      if (!streamingRef.current) return;

      if (charIndex < fullContent.length) {
        setStreamedContent(fullContent.slice(0, charIndex + 1));
        charIndex++;

        // Variable delay for natural feel
        const char = fullContent[charIndex - 1];
        let delay = 10;
        if (['.', '!', '?'].includes(char)) delay = 80;
        else if ([',', ':'].includes(char)) delay = 40;
        else if (char === '\n') delay = 60;

        timeoutRef.current = setTimeout(streamChar, delay);
      } else {
        // Streaming complete
        streamingRef.current = false;
        setPhase('complete');

        // Show artifact after delay
        timeoutRef.current = setTimeout(() => {
          setArtifact(demoArtifact);
        }, 300);
      }
    };

    streamChar();
  }, [prefersReducedMotion]);

  const handleReplay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    streamingRef.current = false;
    setDemoKey((prev) => prev + 1);
  }, []);

  const toggleThinking = useCallback(() => {
    setShowThinking((prev) => !prev);
  }, []);

  // Parse content to render citations inline
  const renderContentWithCitations = (content: string, citations: Citation[]) => {
    // Split content by citation markers [1], [2], etc.
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const citationRegex = /\[(\d+)\]/g;
    let match;

    while ((match = citationRegex.exec(content)) !== null) {
      // Add text before citation
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }

      // Find matching citation
      const citationNum = parseInt(match[1], 10);
      const citation = citations.find((c) => c.number === citationNum);

      if (citation) {
        parts.push(
          <CitationPill
            key={`${citation.id}-${match.index}`}
            citation={citation}
            className="mx-0.5"
          />
        );
      } else {
        parts.push(match[0]);
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts;
  };

  // Render markdown-like formatting
  const renderFormattedContent = (content: string, citations: Citation[]) => {
    const lines = content.split('\n');

    return lines.map((line, lineIndex) => {
      // Handle headers
      if (line.startsWith('**') && line.endsWith('**')) {
        const headerText = line.slice(2, -2);
        return (
          <p key={lineIndex} className="mt-3 mb-1 font-semibold text-foreground">
            {headerText}
          </p>
        );
      }

      // Handle list items
      if (line.startsWith('- ')) {
        const itemContent = line.slice(2);
        return (
          <li key={lineIndex} className="ml-4 text-sm">
            {renderContentWithCitations(itemContent, citations)}
          </li>
        );
      }

      // Handle empty lines
      if (line.trim() === '') {
        return <br key={lineIndex} />;
      }

      // Regular paragraph
      return (
        <p key={lineIndex} className="text-sm">
          {renderContentWithCitations(line, citations)}
        </p>
      );
    });
  };

  return (
    <PreviewContainer
      title="Lattice Lab — Chat"
      onReplay={handleReplay}
      data-testid="chat-preview"
    >
      <div className="flex h-[400px]" data-testid="chat-preview-content">
        {/* Main Chat Area */}
        <div className="flex-1 overflow-y-auto p-4" data-testid="chat-messages">
          <div className="space-y-4">
            {/* User Message */}
            <AnimatePresence>
              {(phase !== 'idle' && userMessage) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageBubble role="user" data-testid="chat-user-message">
                    {userMessage}
                  </MessageBubble>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Thinking Steps */}
            <AnimatePresence>
              {phase !== 'idle' && phase !== 'user-message' && thinkingSteps.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-lg border border-border bg-surface-2 p-3"
                  data-testid="thinking-steps"
                >
                  <button
                    onClick={toggleThinking}
                    className="flex w-full items-center gap-2 text-left text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md"
                    aria-expanded={showThinking}
                    aria-controls="thinking-steps-content"
                    aria-label={`${showThinking ? 'Hide' : 'Show'} thinking steps`}
                    data-testid="thinking-toggle"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${showThinking ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="font-medium">Thinking...</span>
                    <span className="text-xs text-muted-foreground">
                      ({thinkingSteps.filter((s) => s.completed).length}/{thinkingSteps.length} steps)
                    </span>
                  </button>

                  <AnimatePresence>
                    {showThinking && (
                      <motion.div
                        id="thinking-steps-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 space-y-1 overflow-hidden"
                        role="region"
                        aria-label="Thinking steps"
                      >
                        {thinkingSteps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                            data-testid={`thinking-step-${index}`}
                          >
                            {step.completed ? (
                              <svg
                                className="h-3.5 w-3.5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            ) : (
                              <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-muted-foreground/40" />
                            )}
                            <span className={step.completed ? 'line-through opacity-60' : ''}>
                              {step.text}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Assistant Response */}
            <AnimatePresence>
              {(phase === 'thinking' || phase === 'streaming' || phase === 'complete') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <MessageBubble
                    role="assistant"
                    isStreaming={phase === 'streaming'}
                    data-testid="chat-assistant-message"
                  >
                    {phase === 'thinking' && !streamedContent ? (
                      <TypingIndicator />
                    ) : (
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        {renderFormattedContent(streamedContent, demoCitations)}
                        {phase === 'streaming' && (
                          <span className="inline-block h-4 w-0.5 animate-pulse bg-accent" />
                        )}
                      </div>
                    )}
                  </MessageBubble>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Sidebar with Artifact */}
        <AnimatePresence>
          {artifact && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-l border-border bg-surface-2 p-3"
              data-testid="chat-sidebar"
            >
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Artifacts
              </h3>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="cursor-pointer rounded-lg border border-border bg-background p-3 transition-colors hover:border-accent"
                data-testid="artifact-card"
              >
                <div className="mb-1 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-xs font-medium capitalize text-muted-foreground">
                    {artifact.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground" data-testid="artifact-title">
                  {artifact.title}
                </p>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {artifact.preview}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status Bar with ARIA live region for screen readers */}
      <div
        className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-2"
        data-testid="chat-status-bar"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span
            className={`h-2 w-2 rounded-full ${phase === 'complete' ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`}
            aria-hidden="true"
          />
          <span>
            {phase === 'idle' && 'Starting demo...'}
            {phase === 'user-message' && 'User query'}
            {phase === 'thinking' && 'Analyzing sources...'}
            {phase === 'streaming' && 'Generating response...'}
            {phase === 'complete' && 'Response complete'}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          {phase === 'complete' && (
            <span data-testid="citation-count">
              {demoCitations.length} citations • 1 artifact
            </span>
          )}
        </div>
      </div>
    </PreviewContainer>
  );
}

export default ChatPreview;
