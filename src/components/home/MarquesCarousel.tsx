'use client';

import React from 'react';
import { marques } from '@/lib/data/marques';

// Filtrer seulement les marques qui ont un logo
const marquesAvecLogos = marques.filter(m => m.logo);

export const MarquesCarousel: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-light to-white dark:from-blue-dark dark:to-blue-medium overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 text-blue-dark dark:text-white">
          Toutes Marques Prises en Charge
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Plus de 50 marques automobiles • Expertise toutes gammes
        </p>

        {/* Carousel infini simple */}
        <div className="carousel-container overflow-hidden">
          <div className="carousel-track">
            {[...marquesAvecLogos, ...marquesAvecLogos].map((marque, index) => (
              <div key={`${marque.id}-${index}`} className="carousel-item">
                <img
                  src={marque.logo}
                  alt={marque.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texte sous le carousel */}
        <p className="text-center mt-12 text-lg text-gray-700 dark:text-gray-300 font-medium">
          Et bien d'autres marques ! <span className="text-orange-primary">Toutes les marques automobiles sont prises en charge.</span>
        </p>

        {/* Badge certifications */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Équipement Professionnel</span>
          </div>
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Technicien Certifié</span>
          </div>
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Véhicules Récents & Anciens</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          gap: 3rem;
          animation: scroll 51s linear infinite;
        }

        .carousel-item {
          flex: 0 0 auto;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
