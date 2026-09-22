import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import useScrollY from '@/hooks/useScrollY.js';

const SHOW_AFTER_PX = 480;

export default function BackToTop() {
  const scrollY = useScrollY();
  const shouldReduceMotion = useReducedMotion();
  const visible = scrollY > SHOW_AFTER_PX;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'instant' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-line bg-glass text-ink shadow-lg backdrop-blur-xl transition-colors hover:bg-accent-soft hover:text-accent sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
