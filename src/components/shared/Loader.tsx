'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { loaderDots } from '@/lib/utils/animations';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      {/* Logo ou Mascotte */}
      <div className="mb-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-24 h-24 bg-orange-primary rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Texte de chargement */}
      <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
        Clef Auto Liège
      </h2>

      {/* Dots animés */}
      <div className="flex gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-orange-primary rounded-full"
            variants={loaderDots}
            initial="initial"
            animate="animate"
            transition={{
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Barre de progression */}
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-orange-primary"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
};
