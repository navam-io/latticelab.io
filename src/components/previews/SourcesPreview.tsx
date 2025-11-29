/**
 * SourcesPreview Component
 *
 * Interactive demo simulating the Lattice Sources panel.
 * Shows source cards with metadata, file upload dropzone,
 * and filter/search functionality.
 *
 * Feature Slice 26: Sources Preview Component
 */
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreviewContainer } from './shared';
import { demoSources, filterSources, type Source } from '@/lib/preview-data';

// Source type icons
const sourceTypeIcons: Record<Source['type'], JSX.Element> = {
  pdf: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  url: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  api: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

// Source type colors
const sourceTypeColors: Record<Source['type'], string> = {
  pdf: 'text-red-500 bg-red-500/10',
  url: 'text-blue-500 bg-blue-500/10',
  api: 'text-purple-500 bg-purple-500/10',
};

interface SourceCardProps {
  source: Source;
  index: number;
}

function SourceCard({ source, index }: SourceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group cursor-pointer rounded-lg border border-border bg-background p-4 transition-all hover:border-accent hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`source-card-${source.id}`}
    >
      <div className="flex items-start gap-3">
        {/* Type Icon */}
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${sourceTypeColors[source.type]}`}>
          {sourceTypeIcons[source.type]}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-medium text-foreground group-hover:text-accent">
            {source.name}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 capitalize">
              {source.type}
            </span>
            {source.pageCount && (
              <span>{source.pageCount} pages</span>
            )}
            {source.vendor && (
              <span className="inline-flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                {source.vendor}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Added {new Date(source.dateAdded).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex gap-1"
            >
              <button
                type="button"
                className="rounded-md p-1.5 text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                aria-label="View source"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-md p-1.5 text-muted-foreground hover:bg-surface-2 hover:text-red-500"
                aria-label="Remove source"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function SourcesPreview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const filteredSources = filterSources(demoSources, searchQuery);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Simulate upload progress
    simulateUpload();
  }, []);

  const simulateUpload = useCallback(() => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setUploadProgress(null), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <PreviewContainer
      title="Lattice Lab — Sources"
      data-testid="sources-preview"
    >
      <div className="flex h-[420px] flex-col" data-testid="sources-preview-content">
        {/* Header with Search */}
        <div className="border-b border-border bg-surface-2 p-4" data-testid="sources-header">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search sources..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              data-testid="sources-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
                data-testid="sources-search-clear"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span data-testid="sources-count">
              {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                PDF
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                URL
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                API
              </span>
            </div>
          </div>
        </div>

        {/* Sources List */}
        <div className="flex-1 overflow-y-auto p-4" data-testid="sources-list">
          {/* Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`mb-4 rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
              isDragOver
                ? 'border-accent bg-accent/5'
                : 'border-border hover:border-muted-foreground'
            }`}
            data-testid="sources-dropzone"
          >
            {uploadProgress !== null ? (
              <div className="space-y-2">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                <p className="text-sm text-foreground">Uploading... {uploadProgress}%</p>
                <div className="mx-auto h-1.5 w-32 overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-8 w-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-2 text-sm text-muted-foreground">
                  {isDragOver ? (
                    <span className="text-accent">Drop files here</span>
                  ) : (
                    <>
                      Drag & drop files here, or{' '}
                      <button
                        type="button"
                        className="text-accent hover:underline"
                        onClick={simulateUpload}
                        data-testid="sources-upload-button"
                      >
                        browse
                      </button>
                    </>
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, URL, or API endpoint
                </p>
              </>
            )}
          </div>

          {/* Source Cards */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredSources.length > 0 ? (
                filteredSources.map((source, index) => (
                  <SourceCard key={source.id} source={source} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 text-center text-sm text-muted-foreground"
                  data-testid="sources-empty-state"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-muted-foreground/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2">No sources found matching "{searchQuery}"</p>
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="mt-2 text-accent hover:underline"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Stats */}
        <div
          className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-2 text-xs text-muted-foreground"
          data-testid="sources-footer"
        >
          <span>
            {demoSources.filter((s) => s.type === 'pdf').length} PDFs •{' '}
            {demoSources.filter((s) => s.type === 'url').length} URLs •{' '}
            {demoSources.filter((s) => s.type === 'api').length} APIs
          </span>
          <span>
            {demoSources.reduce((acc, s) => acc + (s.pageCount || 0), 0)} total pages
          </span>
        </div>
      </div>
    </PreviewContainer>
  );
}

export default SourcesPreview;
