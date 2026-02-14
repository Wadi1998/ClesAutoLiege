/**
 * Utilitaires pour optimiser les performances du site
 * Monitoring et optimisation automatique
 */

/**
 * Précharge les ressources critiques
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Précharger les images critiques
  const criticalImages = ['/logo.png', '/mascotte.webp'];
  
  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Optimise les ressources en fonction de la connexion
 */
export function optimizeForConnection() {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return 'high';

  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType;

  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'low';
    case '3g':
      return 'medium';
    case '4g':
    default:
      return 'high';
  }
}

/**
 * Enregistre les Web Vitals pour monitoring
 */
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Vous pouvez envoyer ces métriques à votre service d'analytics
    console.log(metric);
    
    // Exemple d'envoi à Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

/**
 * Détecte si l'utilisateur préfère des animations réduites
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Optimise les événements scroll avec throttle
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

/**
 * Optimise les événements resize avec debounce
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Précharge une route pour la navigation
 */
export function prefetchRoute(href: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Nettoie les event listeners inutiles
 */
export function cleanupEventListeners() {
  if (typeof window === 'undefined') return;

  // Nettoie les listeners qui ne sont plus nécessaires
  window.removeEventListener('scroll', () => {});
  window.removeEventListener('resize', () => {});
}

/**
 * Active le mode économie de données
 */
export function enableDataSaver(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection;
  return connection?.saveData === true;
}

/**
 * Obtient la qualité d'image optimale selon la connexion
 */
export function getOptimalImageQuality(): number {
  const connectionQuality = optimizeForConnection();
  const dataSaver = enableDataSaver();

  if (dataSaver) return 50;

  switch (connectionQuality) {
    case 'low':
      return 60;
    case 'medium':
      return 75;
    case 'high':
    default:
      return 85;
  }
}
