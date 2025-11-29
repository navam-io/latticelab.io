/**
 * MessageBubble Component
 *
 * Chat message display component for user and AI messages.
 * Supports streaming text animation and citation rendering.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type MessageRole = 'user' | 'assistant';

interface MessageBubbleProps {
  role: MessageRole;
  children: ReactNode;
  isStreaming?: boolean;
  className?: string;
  'data-testid'?: string;
}

export function MessageBubble({
  role,
  children,
  isStreaming = false,
  className = '',
  'data-testid': testId,
}: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} ${className}`}
      data-testid={testId || `message-bubble-${role}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-accent text-white'
            : 'border border-border bg-surface-2 text-foreground'
        }`}
      >
        {/* Avatar for assistant */}
        {!isUser && (
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
              <svg
                className="h-3.5 w-3.5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-muted-foreground">Lattice</span>
          </div>
        )}

        {/* Message content */}
        <div className={`text-sm leading-relaxed ${isUser ? '' : 'prose prose-sm max-w-none dark:prose-invert'}`}>
          {children}
        </div>

        {/* Streaming cursor */}
        {isStreaming && !isUser && (
          <motion.span
            className="ml-0.5 inline-block h-4 w-0.5 bg-foreground"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.div>
  );
}

export default MessageBubble;
