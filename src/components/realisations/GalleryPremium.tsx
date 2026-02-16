'use client';

import React from 'react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const interventionItems: GalleryItem[] = Array.from({ length: 13 }, (_, index) => {
  const number = index + 1;

  return {
    id: 100 + number,
    image: `/images/${number}.webp`,
    title: `Intervention ${number}`,
    category: 'interventions',
    description: 'Intervention serrurerie auto réalisée sur site à Liège.'
  };
});

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/camionette.webp',
    title: 'Véhicule d\'intervention',
    category: 'equipement',
    description: 'Notre camionnette équipée pour toutes les interventions'
  },
  ...interventionItems,
];

export const GalleryPremium: React.FC = () => {
  const interventionGallery = galleryItems.filter(item => item.category === 'interventions');
  const camionnette = galleryItems.find(item => item.category === 'equipement');

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section camionnette */}
        {camionnette && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                <img
                  src={camionnette.image}
                  alt={camionnette.title}
                  className="absolute inset-0 h-full w-full object-cover object-center block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                  Intervention mobile 24/7
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
                  Notre camionnette d&apos;intervention
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nous intervenons rapidement partout à Liège et dans les environs avec un équipement complet pour ouvrir, réparer ou programmer vos clés sur place.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section interventions */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Nos interventions récentes
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Un aperçu de quelques interventions réalisées chez nos clients.
          </p>
        </div>

        <div className="interventions-slider">
          <div className="interventions-track">
            {[...interventionGallery, ...interventionGallery].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="intervention-card"
              >
                <div className="intervention-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[22rem] object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .interventions-slider {
          overflow: hidden;
          position: relative;
        }

        .interventions-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: interventions-scroll 45s linear infinite;
        }

        .intervention-card {
          flex: 0 0 auto;
          width: 280px;
        }

        .intervention-media {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
        }

        @keyframes interventions-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .interventions-track {
            animation-duration: 38s;
          }

          .intervention-card {
            width: 280px;
          }

          .intervention-card :global(img) {
            height: 22rem !important;
          }
        }
      `}</style>
    </section>
  );
};






