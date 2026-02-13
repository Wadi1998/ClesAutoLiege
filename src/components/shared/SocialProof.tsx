'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const NEARBY_CITIES = [
  'Herstal', 'Seraing', 'Ans', 'Saint-Nicolas', 'Grâce-Hollogne',
  'Awans', 'Fléron', 'Chaudfontaine', 'Flémalle', 'Ougrée'
];

export const SocialProof: React.FC = () => {
  const [lastIntervention, setLastIntervention] = useState({
    city: 'Seraing',
    time: '2h',
  });

  useEffect(() => {
    // Simulation réaliste de dernière intervention
    const updateIntervention = () => {
      const randomCity = NEARBY_CITIES[Math.floor(Math.random() * NEARBY_CITIES.length)];
      const randomTime = Math.floor(Math.random() * 4) + 1; // 1-4 heures
      setLastIntervention({
        city: randomCity,
        time: `${randomTime}h`,
      });
    };

    // Mise à jour toutes les 5 minutes pour rester crédible
    const interval = setInterval(updateIntervention, 300000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:block fixed bottom-24 right-4 md:right-8 z-40 max-w-xs"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
        {/* Compteur social */}
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-orange-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              +1200 interventions
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Réussies à Liège
            </p>
          </div>
        </div>

        {/* Dernière intervention */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              Dernière intervention
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {lastIntervention.city}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Il y a {lastIntervention.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
