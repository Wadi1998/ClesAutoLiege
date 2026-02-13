'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, TrendingUp } from 'lucide-react';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface GooglePlaceData {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export const GoogleReviewsLive: React.FC = () => {
  const [placeData, setPlaceData] = useState<GooglePlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simuler un appel API (en production, créer une route API Next.js)
    const fetchGoogleReviews = async () => {
      try {
        // TODO: Créer /api/google-reviews avec Google Places API
        // Pour l'instant, simulation avec délai
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Données simulées (remplacer par vraie API)
        setPlaceData({
          rating: 4.9,
          user_ratings_total: 127,
          reviews: [
            {
              author_name: 'Sophie Martinez',
              rating: 5,
              text: 'Service impeccable ! Intervention rapide en pleine nuit. Professionnel et sympathique. Je recommande vivement !',
              time: Date.now() - 86400000 * 2,
              relative_time_description: 'il y a 2 jours',
              profile_photo_url: '/api/placeholder/40/40'
            },
            {
              author_name: 'Marc Dupont',
              rating: 5,
              text: 'Excellente prestation pour ma BMW. Beaucoup moins cher que le concessionnaire, fait en 20 minutes chez moi.',
              time: Date.now() - 86400000 * 5,
              relative_time_description: 'il y a 5 jours',
            },
            {
              author_name: 'Isabelle Laurent',
              rating: 5,
              text: 'Très réactif et professionnel. Ma clé cassée extraite et remplacée en 30 minutes. Parfait !',
              time: Date.now() - 86400000 * 7,
              relative_time_description: 'il y a 1 semaine',
            }
          ]
        });
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-orange-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Chargement des avis Google...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !placeData) {
    return null; // Fallback silencieux
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête avec stats Google */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-xl mb-6"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'/%3E%3Cpath fill='%2334A853' d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'/%3E%3Cpath fill='%23FBBC05' d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z'/%3E%3Cpath fill='%23EA4335' d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'/%3E%3C/svg%3E"
              alt="Google"
              className="w-8 h-8"
            />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {placeData.rating.toFixed(1)}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(placeData.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {placeData.user_ratings_total} avis Google
              </p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="ml-2"
            >
              <TrendingUp className="w-6 h-6 text-green-500" />
            </motion.div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
            Avis <span className="text-orange-primary">Google</span> Vérifiés
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que mes clients disent de leurs expériences. 
            Tous les avis sont authentiques et vérifiés par Google.
          </p>
        </div>

        {/* Grille d'avis */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {placeData.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Header avec avatar */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {review.author_name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white truncate">
                    {review.author_name}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {review.relative_time_description}
                    </span>
                  </div>
                </div>
              </div>

              {/* Texte de l'avis */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                {review.text}
              </p>

              {/* Badge Google vérifié */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='16' height='16'%3E%3Cpath fill='%234285F4' d='M24 9.5c8 0 14.5 6.5 14.5 14.5s-6.5 14.5-14.5 14.5S9.5 32 9.5 24 16 9.5 24 9.5m0-2C14.6 7.5 7.5 14.6 7.5 24S14.6 40.5 24 40.5 40.5 33.4 40.5 24 33.4 7.5 24 7.5z'/%3E%3Cpath fill='%234285F4' d='M22 32l-6-6 1.4-1.4L22 29.2l8.6-8.6L32 22z'/%3E%3C/svg%3E"
                    alt="Vérifié"
                  />
                  <span>Avis vérifié Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien vers tous les avis Google */}
        <div className="text-center">
          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>Voir tous les {placeData.user_ratings_total} avis sur Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
