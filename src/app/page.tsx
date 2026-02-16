'use client';

import React, { lazy, Suspense } from 'react';
// Composants critiques chargés immédiatement (above the fold)
import { HeroPremium } from '@/components/home/HeroPremium';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { StructuredData } from '@/components/seo/StructuredData';
import { 
  generateLocalBusinessSchema, 
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateProfessionalServiceSchema
} from '@/lib/utils/seo';
import { globalFAQs } from '@/lib/data/faqs';

// Lazy loading des composants below the fold pour optimiser le chargement initial
const StatsCounter = lazy(() => import('@/components/home/StatsCounter').then(mod => ({ default: mod.StatsCounter })));
const InterventionTimeline = lazy(() => import('@/components/home/InterventionTimeline').then(mod => ({ default: mod.InterventionTimeline })));
const ProfessionalEquipment = lazy(() => import('@/components/home/ProfessionalEquipment').then(mod => ({ default: mod.ProfessionalEquipment })));
const MarquesCarousel = lazy(() => import('@/components/home/MarquesCarousel').then(mod => ({ default: mod.MarquesCarousel })));
const GoogleReviewsLive = lazy(() => import('@/components/home/GoogleReviewsLive').then(mod => ({ default: mod.GoogleReviewsLive })));
const GalleryPremium = lazy(() => import('@/components/realisations/GalleryPremium').then(mod => ({ default: mod.GalleryPremium })));
const ZoneIntervention = lazy(() => import('@/components/home/ZoneIntervention').then(mod => ({ default: mod.ZoneIntervention })));

// Loader minimal pour le lazy loading
const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Chargement...</div>
  </div>
);

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const professionalServiceSchema = generateProfessionalServiceSchema();
  const faqSchema = generateFAQSchema(globalFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  return (
    <>
      {/* Schema Markup SEO - Configuration complète pour maximiser la visibilité */}
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={professionalServiceSchema} />
      <StructuredData data={faqSchema} />
      
      {/* Section 1: Hero Premium - Impact maximum avec parallax et glassmorphism */}
      <HeroPremium />
      
      {/* Section 2: Services Grid - Présentation des 6 services */}
      <ServicesGrid />
      
      {/* Section 3: Carrousel Marques - 50+ marques */}
      <Suspense fallback={<LoadingFallback />}>
        <MarquesCarousel />
      </Suspense>
      
      {/* Section 4: Nos Réalisations - Galerie d'interventions (REMONTÉ POUR PLUS DE VISIBILITÉ) */}
      <Suspense fallback={<LoadingFallback />}>
        <GalleryPremium />
      </Suspense>
      
      {/* Section 5: Stats Counter - Compteurs animés (1200+ interventions, 4.9★) */}
      <Suspense fallback={<LoadingFallback />}>
        <StatsCounter />
      </Suspense>
      
      {/* Section 5: Timeline - Votre intervention en 4 étapes */}
      <Suspense fallback={<LoadingFallback />}>
        <InterventionTimeline />
      </Suspense>
      
      {/* Section 6: Équipement professionnel - Crédibilité */}
      <Suspense fallback={<LoadingFallback />}>
        <ProfessionalEquipment />
      </Suspense>
      
      {/* Section 7: Avis Google LIVE - Reviews temps réel */}
      <Suspense fallback={<LoadingFallback />}>
        <GoogleReviewsLive />
      </Suspense>
      
      {/* Section 8: Zone d'intervention - SEO local */}
      <Suspense fallback={<LoadingFallback />}>
        <ZoneIntervention />
      </Suspense>
    </>
  );
}

