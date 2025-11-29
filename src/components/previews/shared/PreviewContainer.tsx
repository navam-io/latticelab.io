/**
 * PreviewContainer Component
 *
 * Wrapper component with consistent styling for interactive previews.
 * Provides a mock window chrome and consistent layout.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PreviewContainerProps {
  title?: string;
  children: ReactNode;
  className?: string;
  showWindowControls?: boolean;
  onReplay?: () => void;
  'data-testid'?: string;
}

export function PreviewContainer({
  title = 'Lattice Lab',
  children,
  className = '',
  showWindowControls = true,
  onReplay,
  'data-testid': testId = 'preview-container',
}: PreviewContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`overflow-hidden rounded-xl border border-border bg-background shadow-2xl ${className}`}
      data-testid={testId}
    >
      {/* Window chrome / title bar */}
      {showWindowControls && (
        <div
          className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2"
          data-testid="preview-titlebar"
        >
          <div className="flex items-center gap-3">
            {/* Traffic light buttons */}
            <div className="flex gap-1.5" data-testid="preview-window-controls">
              <span className="h-3 w-3 rounded-full bg-red-400/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <span className="h-3 w-3 rounded-full bg-green-400/60" />
            </div>
            {/* Title */}
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
          </div>

          {/* Replay button */}
          {onReplay && (
            <button
              type="button"
              onClick={onReplay}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-surface-3 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label="Replay demo"
              data-testid="preview-replay-button"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Replay
            </button>
          )}
        </div>
      )}

      {/* Content area */}
      <div className="relative" data-testid="preview-content">
        {children}
      </div>
    </motion.div>
  );
}

export default PreviewContainer;
