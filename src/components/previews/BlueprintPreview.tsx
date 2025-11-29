/**
 * BlueprintPreview Component
 *
 * Interactive demo simulating the Lattice Blueprint Gallery.
 * Shows blueprint cards with category filters and an apply modal.
 *
 * Feature Slice 27: Blueprint Preview Component
 */
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreviewContainer } from './shared';
import {
  demoBlueprints,
  filterBlueprints,
  getBlueprintCategories,
  type Blueprint,
} from '@/lib/preview-data';

// Vendor colors for badges
const vendorColors: Record<string, string> = {
  Anthropic: 'bg-orange-500/10 text-orange-600',
  OpenAI: 'bg-green-500/10 text-green-600',
  AWS: 'bg-yellow-500/10 text-yellow-700',
  'Multi-vendor': 'bg-purple-500/10 text-purple-600',
};

interface BlueprintCardProps {
  blueprint: Blueprint;
  index: number;
  onApply: (blueprint: Blueprint) => void;
}

function BlueprintCard({ blueprint, index, onApply }: BlueprintCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group cursor-pointer rounded-lg border border-border bg-background p-4 transition-all hover:border-accent hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`blueprint-card-${blueprint.id}`}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          {/* Header with vendor badge */}
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${vendorColors[blueprint.vendor] || 'bg-gray-500/10 text-gray-600'}`}
              data-testid={`blueprint-vendor-${blueprint.id}`}
            >
              {blueprint.vendor}
            </span>
            {blueprint.isOfficial && (
              <span
                className="inline-flex items-center gap-1 text-xs text-yellow-600"
                data-testid={`blueprint-official-${blueprint.id}`}
              >
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Official
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="truncate text-sm font-medium text-foreground group-hover:text-accent">
            {blueprint.name}
          </h3>

          {/* Description */}
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
            {blueprint.description}
          </p>

          {/* Metadata */}
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {blueprint.sourceCount} sources
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5">
              {blueprint.category}
            </span>
          </div>
        </div>

        {/* Apply button (shown on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onApply(blueprint);
              }}
              className="ml-2 flex-shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent/90"
              data-testid={`blueprint-apply-btn-${blueprint.id}`}
            >
              Apply
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface ApplyModalProps {
  blueprint: Blueprint;
  phase: 'applying' | 'success';
  onClose: () => void;
}

function ApplyModal({ blueprint, phase, onClose }: ApplyModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      data-testid="blueprint-modal"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="mx-4 w-full max-w-sm rounded-lg border border-border bg-background p-6 shadow-xl"
        data-testid="blueprint-modal-content"
      >
        {phase === 'applying' ? (
          <div className="text-center" data-testid="blueprint-modal-applying">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Applying Blueprint
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Setting up {blueprint.name}...
            </p>
          </div>
        ) : (
          <div className="text-center" data-testid="blueprint-modal-success">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10"
            >
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Blueprint Applied!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {blueprint.sourceCount} sources added to your workspace
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              data-testid="blueprint-modal-close"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function BlueprintPreview() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [applyingBlueprint, setApplyingBlueprint] = useState<Blueprint | null>(null);
  const [modalPhase, setModalPhase] = useState<'applying' | 'success'>('applying');

  const categories = getBlueprintCategories(demoBlueprints);
  const filteredBlueprints = filterBlueprints(demoBlueprints, selectedCategory);

  const handleApply = useCallback((blueprint: Blueprint) => {
    setApplyingBlueprint(blueprint);
    setModalPhase('applying');

    // Simulate apply process
    setTimeout(() => {
      setModalPhase('success');
    }, 1500);
  }, []);

  const handleCloseModal = useCallback(() => {
    setApplyingBlueprint(null);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <PreviewContainer
      title="Lattice Lab — Blueprints"
      data-testid="blueprint-preview"
    >
      <div
        className="relative flex h-[420px] flex-col"
        data-testid="blueprint-preview-content"
      >
        {/* Category Filter Tabs */}
        <div
          className="flex gap-2 border-b border-border bg-surface-2 px-4 py-3"
          data-testid="blueprint-filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-background text-muted-foreground hover:bg-surface-2 hover:text-foreground'
              }`}
              data-testid={`blueprint-filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Header Stats */}
        <div
          className="flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground"
          data-testid="blueprint-stats"
        >
          <span data-testid="blueprint-count">
            {filteredBlueprints.length} blueprint
            {filteredBlueprints.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            = Official
          </span>
        </div>

        {/* Blueprint Cards */}
        <div
          className="flex-1 overflow-y-auto p-4"
          data-testid="blueprint-list"
        >
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredBlueprints.length > 0 ? (
                filteredBlueprints.map((blueprint, index) => (
                  <BlueprintCard
                    key={blueprint.id}
                    blueprint={blueprint}
                    index={index}
                    onApply={handleApply}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 text-center text-sm text-muted-foreground"
                  data-testid="blueprint-empty-state"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-muted-foreground/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <p className="mt-2">No blueprints in this category</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-2 text-xs text-muted-foreground"
          data-testid="blueprint-footer"
        >
          <span>
            {demoBlueprints.filter((b) => b.isOfficial).length} official •{' '}
            {demoBlueprints.filter((b) => !b.isOfficial).length} community
          </span>
          <span>
            {demoBlueprints.reduce((acc, b) => acc + b.sourceCount, 0)} total
            sources
          </span>
        </div>

        {/* Apply Modal */}
        <AnimatePresence>
          {applyingBlueprint && (
            <ApplyModal
              blueprint={applyingBlueprint}
              phase={modalPhase}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </div>
    </PreviewContainer>
  );
}

export default BlueprintPreview;
