/**
 * TypingIndicator Component
 *
 * Animated typing dots that simulate AI thinking/typing state.
 * Used in chat previews to show the AI is "generating" a response.
 *
 * Feature Slice 24: Preview Components — Shared Utilities
 */
import { motion } from 'framer-motion';

interface TypingIndicatorProps {
  className?: string;
}

export function TypingIndicator({ className = '' }: TypingIndicatorProps) {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -4 },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={`flex items-center gap-1 ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      data-testid="typing-indicator"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="h-2 w-2 rounded-full bg-muted-foreground/60"
          variants={dotVariants}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          data-testid={`typing-dot-${index}`}
        />
      ))}
    </motion.div>
  );
}

export default TypingIndicator;
