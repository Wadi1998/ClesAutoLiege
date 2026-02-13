'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Award, Wrench, Clock, Shield } from 'lucide-react';
import { fadeInUp } from '@/lib/utils/animations';

export const WhyNotClassic: React.FC = () => {
  const comparisons = [
    {
      classic: 'Généraliste - Tous types de serrures',
      specialist: 'Spécialiste automobile uniquement',
      icon: Award,
    },
    {
      classic: 'Outils standards basiques',
      specialist: 'Équipement high-tech automobile',
      icon: Wrench,
    },
    {
      classic: 'Délai d\'intervention variable',
      specialist: 'Intervention < 30 minutes garantie',
      icon: Clock,
    },
    {
      classic: 'Risque de dommages mécaniques',
      specialist: 'Méthodes non-destructives certifiées',
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi pas un serrurier <span className="text-orange-primary">classique</span> ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            La serrurerie automobile nécessite une expertise spécifique et un équipement professionnel adapté
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-orange-primary" />
                  </div>
                  <div className="flex-1">
                    {/* Serrurier classique */}
                    <div className="flex items-start gap-2 mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Serrurier classique</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.classic}</p>
                      </div>
                    </div>
                    
                    {/* Spécialiste auto */}
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Spécialiste Auto</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.specialist}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge garantie */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            <div className="text-left">
              <p className="text-sm font-bold text-green-900 dark:text-green-100">
                Satisfaction garantie
              </p>
              <p className="text-xs text-green-700 dark:text-green-300">
                Intervention professionnelle certifiée
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
