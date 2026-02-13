'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Euro, Clock, Check } from 'lucide-react';

const services = [
  {
    title: 'Ouverture Portière',
    price: '60-90',
    features: [
      'Sans dommage',
      'Toutes marques',
      'Intervention < 30 min',
      'Garantie sans trace'
    ],
    popular: false
  },
  {
    title: 'Reproduction Clé',
    price: '80-150',
    features: [
      'Programmation incluse',
      'Clés électroniques',
      'Sur place',
      'Test complet'
    ],
    popular: true
  },
  {
    title: 'Extraction Clé Cassée',
    price: '70-120',
    features: [
      'Technique professionnelle',
      'Aucune détérioration',
      'Nouvelle clé possible',
      'Rapide et propre'
    ],
    popular: false
  },
  {
    title: 'Dépannage Urgence',
    price: '90-180',
    features: [
      'Disponible 24/7',
      'Nuit et week-end',
      'Intervention rapide',
      'Tous problèmes'
    ],
    popular: false
  }
];

export const PricingGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FF6B35 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
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
            <Euro className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Tarifs Transparents</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
            Grille <span className="text-orange-primary">Tarifaire</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Des prix clairs et justes pour tous mes services. Devis gratuit par téléphone.
          </p>

          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Prix ferme annoncé avant intervention • Aucune surprise
            </span>
          </div>
        </motion.div>

        {/* Grille de pricing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Badge "Populaire" */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-primary to-red-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    ⭐ Plus demandé
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl ${
                service.popular 
                  ? 'border-2 border-orange-primary ring-2 ring-orange-primary/20' 
                  : 'border-2 border-gray-200 dark:border-gray-700 hover:border-orange-primary'
              }`}>
                {/* Titre du service */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-primary transition-colors">
                  {service.title}
                </h3>

                {/* Prix */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-orange-primary">
                      {service.price}€
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Prix selon situation
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="tel:+32493447205"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center py-3 rounded-full font-bold transition-all ${
                    service.popular
                      ? 'bg-gradient-to-r from-orange-primary to-red-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-orange-primary hover:text-white'
                  }`}
                >
                  Appeler maintenant
                </motion.a>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                  service.popular ? 'from-orange-primary to-red-500' : 'from-gray-400 to-gray-500'
                } opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 max-w-3xl">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong className="text-orange-primary">💡 Bon à savoir :</strong> Les prix varient selon le modèle de véhicule, 
              l'heure d'intervention et la complexité. Je vous donne toujours un devis précis par téléphone AVANT de me déplacer. 
              Aucun frais caché, le prix annoncé est le prix final.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
