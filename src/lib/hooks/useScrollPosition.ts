'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollPercentage: number;
  isTop: boolean;
  isMiddle: boolean;
  isBottom: boolean;
}

export const useScrollPosition = (): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollPercentage: 0,
    isTop: true,
    isMiddle: false,
    isBottom: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      setPosition({
        scrollY,
        scrollPercentage: Math.min(100, Math.max(0, scrollPercentage)),
        isTop: scrollY < 100,
        isMiddle: scrollPercentage >= 50 && scrollPercentage < 90,
        isBottom: scrollPercentage >= 90,
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};
