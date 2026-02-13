'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

/**
 * Composant pour tracker les Core Web Vitals
 * LCP, FID, CLS, FCP, TTFB, INP
 * Essentiel pour le SEO et l'expérience utilisateur
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Envoyer les métriques vers Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Log en développement
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Web Vital:', metric.name, Math.round(metric.value), 'ms');
      
      // Alertes si les métriques sont mauvaises
      const thresholds = {
        LCP: 2500, // Largest Contentful Paint - doit être < 2.5s
        FID: 100,  // First Input Delay - doit être < 100ms
        CLS: 0.1,  // Cumulative Layout Shift - doit être < 0.1
        FCP: 1800, // First Contentful Paint - doit être < 1.8s
        TTFB: 800, // Time to First Byte - doit être < 800ms
        INP: 200,  // Interaction to Next Paint - doit être < 200ms
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      const value = metric.name === 'CLS' ? metric.value : Math.round(metric.value);
      
      if (threshold && value > threshold) {
        console.warn(`⚠️ ${metric.name} est au-dessus du seuil recommandé:`, value, '>', threshold);
      }
    }

    // Envoyer vers un service d'analytics personnalisé si nécessaire
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   body: JSON.stringify(metric),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  });

  return null;
}

/**
 * Hook personnalisé pour mesurer les performances
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Mesurer le temps de chargement de la page
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationTiming) {
      const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
      const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
      
      console.log('⚡ Page Load Time:', Math.round(pageLoadTime), 'ms');
      console.log('📄 DOM Content Loaded:', Math.round(domContentLoaded), 'ms');
    }

    // Mesurer les ressources chargées
    const resources = performance.getEntriesByType('resource');
    const totalResourceSize = resources.reduce((total, resource: any) => {
      return total + (resource.transferSize || 0);
    }, 0);
    
    console.log('📦 Total Resources Size:', Math.round(totalResourceSize / 1024), 'KB');
    console.log('🔢 Total Resources Count:', resources.length);
  }, []);
}
