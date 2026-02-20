'use client';

import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  // Retourner false jusqu'au montage pour éviter hydration mismatch
  return mounted ? matches : false;
};

// Hooks prédéfinis pour les breakpoints communs
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');


