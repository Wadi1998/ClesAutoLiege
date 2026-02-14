'use client';

import React from 'react';
import { GalleryPremium } from '@/components/home/GalleryPremium';
import { StructuredData } from '@/components/seo/StructuredData';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export default function RealisationsPage() {
  // Schema pour la page galerie
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nos Réalisations - Clés Auto Liège',
    description: 'Découvrez nos interventions réussies en serrurerie automobile à Liège et région',
    url: 'https://www.clesautoliege.be/realisations',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.clesautoliege.be'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Nos Réalisations',
          item: 'https://www.clesautoliege.be/realisations'
        }
      ]
    }
  };

  return (
    <>
      {/* SEO Schema */}
      <StructuredData data={gallerySchema} />
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Nos Réalisations', href: '/realisations' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Nos <span className="text-primary-600 dark:text-primary-400">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Découvrez nos interventions réussies en serrurerie automobile
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">1200+ Interventions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">100% Réussites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryPremium />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;une intervention ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour une intervention rapide et professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+32123456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Appelez maintenant
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-all"
            >
              Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
