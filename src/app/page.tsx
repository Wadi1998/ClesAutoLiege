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
const WhyNotClassic = lazy(() => import('@/components/home/WhyNotClassic').then(mod => ({ default: mod.WhyNotClassic })));
const ProfessionalEquipment = lazy(() => import('@/components/home/ProfessionalEquipment').then(mod => ({ default: mod.ProfessionalEquipment })));
const Guarantees = lazy(() => import('@/components/home/Guarantees').then(mod => ({ default: mod.Guarantees })));
const MarquesCarousel = lazy(() => import('@/components/home/MarquesCarousel').then(mod => ({ default: mod.MarquesCarousel })));
const GoogleReviewsLive = lazy(() => import('@/components/home/GoogleReviewsLive').then(mod => ({ default: mod.GoogleReviewsLive })));
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs').then(mod => ({ default: mod.WhyChooseUs })));
const ZoneIntervention = lazy(() => import('@/components/home/ZoneIntervention').then(mod => ({ default: mod.ZoneIntervention })));
const FAQSection = lazy(() => import('@/components/home/FAQSection').then(mod => ({ default: mod.FAQSection })));
const CTAFinal = lazy(() => import('@/components/home/CTAFinal').then(mod => ({ default: mod.CTAFinal })));

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
      
      {/* Section 3: Stats Counter - Compteurs animés (1200+ interventions, 4.9★) */}
      <Suspense fallback={<LoadingFallback />}>
        <StatsCounter />
      </Suspense>
      
      {/* Section 4: Timeline - Votre intervention en 4 étapes */}
      <Suspense fallback={<LoadingFallback />}>
        <InterventionTimeline />
      </Suspense>
      
      {/* Section 5: Pourquoi pas un serrurier classique - Autorité */}
      <Suspense fallback={<LoadingFallback />}>
        <WhyNotClassic />
      </Suspense>
      
      {/* Section 6: Équipement professionnel - Crédibilité */}
      <Suspense fallback={<LoadingFallback />}>
        <ProfessionalEquipment />
      </Suspense>
      
      {/* Section 7: Garanties - Trust & assurances */}
      <Suspense fallback={<LoadingFallback />}>
        <Guarantees />
      </Suspense>
      
      {/* Section 9: Carrousel Marques - 50+ marques */}
      <Suspense fallback={<LoadingFallback />}>
        <MarquesCarousel />
      </Suspense>
      
      {/* Section 10: Avis Google LIVE - Reviews temps réel */}
      <Suspense fallback={<LoadingFallback />}>
        <GoogleReviewsLive />
      </Suspense>
      
      {/* Section 11: Pourquoi me choisir - Trust signals */}
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      
      {/* Section 12: Zone d'intervention - SEO local */}
      <Suspense fallback={<LoadingFallback />}>
        <ZoneIntervention />
      </Suspense>
      
      {/* Section 14: FAQ - Questions fréquentes */}
      <Suspense fallback={<LoadingFallback />}>
        <FAQSection />
      </Suspense>
      
      {/* Section 15: CTA Final - Conversion ultime */}
      <Suspense fallback={<LoadingFallback />}>
        <CTAFinal />
      </Suspense>
    </>
  );
}
