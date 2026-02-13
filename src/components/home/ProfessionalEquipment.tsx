'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Key, Lock, Wifi } from 'lucide-react';
import { fadeInUp } from '@/lib/utils/animations';

export const ProfessionalEquipment: React.FC = () => {
  const equipment = [
    {
      icon: Key,
      title: 'Valise de programmation',
      description: 'Équipement professionnel pour toutes marques',
    },
    {
      icon: Wrench,
      title: 'Outils non-destructifs',
      description: 'Ouverture sans dommage garanti',
    },
    {
      icon: Lock,
      title: 'Scanner diagnostic',
      description: 'Analyse électronique avancée',
    },
    {
      icon: Wifi,
      title: 'Programmation à distance',
      description: 'Technologies de pointe automobile',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Équipement <span className="text-orange-primary">professionnel</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Des outils de haute technologie pour une intervention rapide et sécurisée
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pictogrammes supplémentaires */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Certifié automobile</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Méthodes non-destructives</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Matériel à jour 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
