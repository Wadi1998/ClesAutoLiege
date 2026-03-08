'use client';

import React from 'react';
import { marques } from '@/lib/data/marques';

// Filtrer seulement les marques qui ont un logo
const marquesAvecLogos = marques.filter(m => m.logo);

export const MarquesCarousel: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-light to-white dark:from-blue-dark dark:to-blue-medium overflow-hidden">
      {/* Titre et description */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 text-blue-dark dark:text-white">
          Toutes Marques Prises en Charge
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Plus de 50 marques automobiles • Tous types de clés pris en charge
        </p>
      </div>

      {/* Bloc fusionné : marques + types de clés + image paysage */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-orange-primary/20 bg-white/80 dark:bg-blue-dark/40 backdrop-blur-sm p-5 sm:p-8 shadow-lg">
          <div className="relative overflow-hidden rounded-2xl h-[300px] sm:h-[360px] md:h-[440px] lg:h-[500px] shadow-xl">
            <img
              src="/images/reproduction_cle.jpg"
              alt="Reproduction de clé automobile toutes marques à Liège"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-blue-dark dark:text-white mb-3">
              Toutes les clés auto, toutes les marques
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Nous intervenons aussi bien sur les clés mécaniques classiques que sur les clés électroniques, télécommandes et systèmes mains-libres.
            </p>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-2"><span className="text-orange-primary font-bold">✓</span><span>Clés mécaniques et doubles</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-primary font-bold">✓</span><span>Clés télécommandes / plip</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-primary font-bold">✓</span><span>Clés mains-libres (keyless)</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-primary font-bold">✓</span><span>Cartes de démarrage et boîtiers</span></li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-5 py-2">
                <span className="text-orange-primary font-semibold">✓ Équipement Professionnel</span>
              </div>
              <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-5 py-2">
                <span className="text-orange-primary font-semibold">✓ Technicien Certifié</span>
              </div>
              <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-5 py-2">
                <span className="text-orange-primary font-semibold">✓ Véhicules Récents & Anciens</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg text-gray-700 dark:text-gray-300 font-medium mt-8">
          Et bien d&apos;autres marques ! <span className="text-orange-primary">Toutes les marques automobiles sont prises en charge.</span>
        </p>
      </div>

      {/* Bannière de logos animée (placée en dessous) */}
      <div className="carousel-container overflow-hidden w-full mt-12">
        <div className="carousel-track">
          {[...marquesAvecLogos, ...marquesAvecLogos].map((marque, index) => (
            <div key={`${marque.id}-${index}`} className="carousel-item">
              <img
                src={marque.logo}
                alt={marque.alt}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          gap: 4rem;
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
