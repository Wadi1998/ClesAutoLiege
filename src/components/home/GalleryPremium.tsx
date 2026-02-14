'use client';

import React, { useState } from 'react';
import { OptimizedImage } from '@/components/shared/OptimizedImage';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/camionette.webp',
    title: 'Véhicule d\'intervention',
    category: 'equipement',
    description: 'Notre camionnette équipée pour toutes les interventions'
  },
  {
    id: 2,
    image: '/mascotte.webp',
    title: 'Équipe professionnelle',
    category: 'equipe',
    description: 'Des experts à votre service 24/7'
  },
  {
    id: 3,
    image: '/logo.png',
    title: 'Clés Auto Liège',
    category: 'marque',
    description: 'Votre expert en serrurerie automobile'
  },
];

const categories = [
  { id: 'tous', label: 'Tous' },
  { id: 'equipement', label: 'Équipement' },
  { id: 'equipe', label: 'Équipe' },
  { id: 'marque', label: 'Marque' },
];

export const GalleryPremium: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const filteredItems = selectedCategory === 'tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 dark:bg-gray-800">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
