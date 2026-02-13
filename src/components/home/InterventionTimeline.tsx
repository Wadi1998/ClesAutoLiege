'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Car, Wrench, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: <Phone className="w-8 h-8" />,
    title: 'Vous m\'appelez',
    description: 'Décrivez votre problème. Je vous donne un devis clair par téléphone et confirme ma disponibilité immédiate.',
    duration: '2 min',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 2,
    icon: <Car className="w-8 h-8" />,
    title: 'Je me déplace',
    description: 'J\'arrive sur place en moins de 30 minutes avec tout le matériel nécessaire pour votre véhicule.',
    duration: '< 30 min',
    color: 'from-orange-primary to-red-500'
  },
  {
    number: 3,
    icon: <Wrench className="w-8 h-8" />,
    title: 'J\'interviens',
    description: 'Diagnostic précis et intervention professionnelle. Je travaille rapidement et avec soin sur votre véhicule.',
    duration: '15-45 min',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: 4,
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'C\'est réglé !',
    description: 'Test complet, facture détaillée et garantie. Vous repartez serein avec vos clés fonctionnelles.',
    duration: '5 min',
    color: 'from-green-500 to-emerald-600'
  }
];

export const InterventionTimeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2 mb-6"
          >
            <Clock className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Processus Simple</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
            Votre Intervention en <span className="text-orange-primary">4 Étapes</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un processus clair et rapide pour résoudre votre problème de clés en moins d'1 heure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Ligne de connexion (sauf pour le dernier) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-32 w-1 h-24 bg-gradient-to-b from-orange-primary to-transparent -translate-x-1/2" />
              )}

              <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Card avec glassmorphism */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-1 group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Header avec numéro et durée */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-xl shadow-lg`}>
                        {step.number}
                      </div>
                      <span className="text-sm font-semibold text-orange-primary bg-orange-primary/10 px-3 py-1 rounded-full">
                        ⏱️ {step.duration}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-primary transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Icon central (visible sur desktop) */}
                <div className="hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-2xl relative`}
                  >
                    {step.icon}
                    {/* Pulse effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Spacer pour alignement */}
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-primary to-red-500 text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <p className="text-2xl font-bold mb-4">⚡ Temps total moyen : 45-60 minutes</p>
            <p className="text-white/90 mb-6">De votre appel à la résolution complète du problème</p>
            <motion.a
              href="tel:+32493447205"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-orange-primary px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Lancez le processus maintenant</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
