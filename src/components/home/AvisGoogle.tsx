'use client';

import React, { useState, useEffect } from 'react';
import { avis, getAverageRating, getTotalReviews } from '@/lib/data/avis';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const AvisGoogle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const averageRating = getAverageRating();
  const totalReviews = getTotalReviews();

  // Nombre d'avis visibles selon la taille de l'écran
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play du carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % avis.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? avis.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % avis.length);
    setIsAutoPlaying(false);
  };

  const getVisibleAvis = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(avis[(currentIndex + i) % avis.length]);
    }
    return visible;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) return 'Il y a quelques jours';
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaine${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
    if (diffDays < 365) return `Il y a ${Math.floor(diffDays / 30)} mois`;
    return `Il y a ${Math.floor(diffDays / 365)} an${Math.floor(diffDays / 365) > 1 ? 's' : ''}`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-blue-dark">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
            Ce Que Mes Clients Disent de Moi
          </h2>

          {/* Note globale */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="text-6xl md:text-7xl font-bold text-orange-primary">
              {averageRating}
            </div>
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Basé sur <span className="font-bold text-orange-primary">{totalReviews} avis</span> clients
            </p>
          </div>
        </div>

        {/* Carousel d'avis */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {getVisibleAvis().map((avisItem) => (
                <div
                  key={avisItem.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-gray-light dark:bg-blue-medium/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full backdrop-blur-sm border border-gray-200 dark:border-blue-medium hover:scale-105">
                    {/* Header de l'avis */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Initiales */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-primary to-orange-hover flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {avisItem.initials}
                      </div>

                      {/* Nom et date */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-blue-dark dark:text-white truncate">
                          {avisItem.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(avisItem.date)}
                        </p>
                      </div>
                    </div>

                    {/* Étoiles */}
                    <div className="flex gap-1 mb-4">
                      {renderStars(avisItem.rating)}
                    </div>

                    {/* Commentaire */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      "{avisItem.comment}"
                    </p>

                    {/* Service */}
                    {avisItem.service && (
                      <div className="inline-block bg-orange-primary/10 border border-orange-primary rounded-full px-4 py-1">
                        <span className="text-sm text-orange-primary font-medium">
                          {avisItem.service}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-blue-medium shadow-xl rounded-full p-3 hover:bg-orange-primary hover:text-white transition-all duration-300 z-10 hidden md:block"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-blue-medium shadow-xl rounded-full p-3 hover:bg-orange-primary hover:text-white transition-all duration-300 z-10 hidden md:block"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots de pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {avis.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-primary w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-primary/50'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA pour voir tous les avis */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ces avis sont des témoignages représentatifs de mes clients satisfaits
          </p>
          <a
            href="tel:0493447205"
            className="inline-block bg-orange-primary hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contactez-moi pour votre avis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};
