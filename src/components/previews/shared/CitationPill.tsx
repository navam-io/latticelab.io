/**
 * CitationPill Component
 *
 * Inline citation badge with hover tooltip showing source details.
 * Used to display grounded citations in AI responses.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Citation {
  id: string;
  number: number;
  source: string;
  page?: number;
  excerpt?: string;
}

interface CitationPillProps {
  citation: Citation;
  className?: string;
}

export function CitationPill({ citation, className = '' }: CitationPillProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        type="button"
        className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent/20 px-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        data-testid={`citation-pill-${citation.id}`}
        aria-label={`Citation ${citation.number}: ${citation.source}`}
        aria-expanded={isOpen}
        aria-describedby={`citation-tooltip-${citation.id}`}
      >
        {citation.number}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2"
            data-testid={`citation-tooltip-${citation.id}`}
          >
            <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
              <div className="mb-1 text-xs font-medium text-muted-foreground">
                Source {citation.number}
              </div>
              <div className="mb-1 text-sm font-semibold text-foreground">
                {citation.source}
              </div>
              {citation.page && (
                <div className="mb-2 text-xs text-muted-foreground">
                  Page {citation.page}
                </div>
              )}
              {citation.excerpt && (
                <div className="text-xs italic text-muted-foreground line-clamp-3">
                  "{citation.excerpt}"
                </div>
              )}
            </div>
            {/* Tooltip arrow */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1">
              <div className="h-2 w-2 rotate-45 border-b border-r border-border bg-background" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default CitationPill;
