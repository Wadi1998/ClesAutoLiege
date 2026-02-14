/**
 * Utilitaires avancés pour le lazy loading et l'intersection observer
 * Optimisé pour les performances mobile et desktop
 */

export interface LazyLoadOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Hook personnalisé pour lazy load avec intersection observer
 * Utilise une marge pour précharger les éléments avant qu'ils soient visibles
 */
export const createLazyLoadObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: LazyLoadOptions = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const {
    rootMargin = '50px', // Précharge 50px avant que l'élément soit visible
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      rootMargin,
      threshold,
    }
  );

  return observer;
};

/**
 * Fonction pour précharger les images de manière optimisée
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Fonction pour précharger les composants dynamiques
 */
export const preloadComponent = (importFn: () => Promise<any>): Promise<any> => {
  return importFn();
};

/**
 * Détecte si l'utilisateur est sur une connexion lente
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }

  const connection = (navigator as any).connection;
  const slowConnections = ['slow-2g', '2g', '3g'];
  
  return (
    connection?.saveData === true ||
    slowConnections.includes(connection?.effectiveType)
  );
};

/**
 * Détecte si l'appareil préfère économiser la bande passante
 */
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Optimise les animations en fonction de la performance de l'appareil
 */
export const getOptimalAnimationSettings = () => {
  const slowConnection = isSlowConnection();
  const reduceMotion = shouldReduceMotion();

  return {
    enableComplexAnimations: !slowConnection && !reduceMotion,
    enableParallax: !slowConnection && !reduceMotion,
    enableParticles: !slowConnection && !reduceMotion,
    animationDuration: slowConnection ? 0.2 : 0.5,
  };
};

/**
 * Fonction pour détecter le type d'appareil
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Détecte si l'appareil supporte le touch
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

