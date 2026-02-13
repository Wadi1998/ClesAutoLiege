'use client';

import React from 'react';
// Composants Premium
import { HeroPremium } from '@/components/home/HeroPremium';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { StatsCounter } from '@/components/home/StatsCounter';
import { InterventionTimeline } from '@/components/home/InterventionTimeline';
import { WhyNotClassic } from '@/components/home/WhyNotClassic';
import { ProfessionalEquipment } from '@/components/home/ProfessionalEquipment';
import { Guarantees } from '@/components/home/Guarantees';
import { MarquesCarousel } from '@/components/home/MarquesCarousel';
import { GoogleReviewsLive } from '@/components/home/GoogleReviewsLive';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { GalleryPremium } from '@/components/home/GalleryPremium';
import { ZoneIntervention } from '@/components/home/ZoneIntervention';
import { FAQSection } from '@/components/home/FAQSection';
import { CTAFinal } from '@/components/home/CTAFinal';
// SEO
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/utils/seo';
import { globalFAQs } from '@/lib/data/faqs';

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(globalFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  return (
    <>
      {/* Schema Markup SEO */}
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      {/* Section 1: Hero Premium - Impact maximum avec parallax et glassmorphism */}
      <HeroPremium />
      
      {/* Section 2: Services Grid - Présentation des 6 services */}
      <ServicesGrid />
      
      {/* Section 3: Stats Counter - Compteurs animés (1200+ interventions, 4.9★) */}
      <StatsCounter />
      
      {/* Section 4: Timeline - Votre intervention en 4 étapes */}
      <InterventionTimeline />
      
      {/* Section 5: Pourquoi pas un serrurier classique - Autorité */}
      <WhyNotClassic />
      
      {/* Section 6: Équipement professionnel - Crédibilité */}
      <ProfessionalEquipment />
      
      {/* Section 7: Garanties - Trust & assurances */}
      <Guarantees />
      
      {/* Section 9: Carrousel Marques - 50+ marques */}
      <MarquesCarousel />
      
      {/* Section 10: Avis Google LIVE - Reviews temps réel */}
      <GoogleReviewsLive />
      
      {/* Section 11: Pourquoi me choisir - Trust signals */}
      <WhyChooseUs />
      
      {/* Section 12: Galerie Premium - Portfolio avec slider horizontal */}
      <GalleryPremium />
      
      {/* Section 13: Zone d'intervention - SEO local */}
      <ZoneIntervention />
      
      {/* Section 14: FAQ - Questions fréquentes */}
      <FAQSection />
      
      {/* Section 15: CTA Final - Conversion ultime */}
      <CTAFinal />
    </>
  );
}
