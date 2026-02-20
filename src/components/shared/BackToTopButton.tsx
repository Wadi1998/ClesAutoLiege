'use client';

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';

export const BackToTopButton: React.FC = () => {
  const { scrollY, isBottom } = useScrollPosition();

  const shouldShow = useMemo(() => isBottom || scrollY > 1200, [isBottom, scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 rounded-full bg-orange-primary text-white shadow-lg hover:bg-orange-hover hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Remonter en haut de la page"
          title="Remonter en haut"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
