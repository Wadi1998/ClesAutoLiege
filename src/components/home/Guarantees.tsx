'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CreditCard, CheckCircle2, Award, Clock } from 'lucide-react';

const guarantees = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Travail Garanti',
    description: 'Toutes mes interventions sont garanties. En cas de problème, je reviens gratuitement.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Assurance Professionnelle',
    description: 'Couvert par une assurance RC professionnelle pour votre tranquillité d\'esprit.',
    color: 'from-orange-primary to-red-500'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Paiement Sécurisé',
    description: 'Cash, carte bancaire ou virement. Facture détaillée fournie après chaque intervention.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Confidentialité',
    description: 'Respect total de votre vie privée et de vos données personnelles (RGPD).',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Satisfaction Garantie',
    description: 'Si vous n\'êtes pas satisfait, je m\'engage à trouver une solution adaptée.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Intervention Rapide',
    description: 'Engagement de rapidité : moins de 30 minutes dans la région de Liège.',
    color: 'from-red-500 to-red-600'
  }
];

export const Guarantees: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #FF6B35 25%, transparent 25%), 
                           linear-gradient(-45deg, #FF6B35 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #FF6B35 75%), 
                           linear-gradient(-45deg, transparent 75%, #FF6B35 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
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
            <Shield className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Vos Garanties</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
            Travaillez avec un <span className="text-orange-primary">Professionnel de Confiance</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Votre sécurité et votre satisfaction sont mes priorités. Découvrez mes engagements.
          </p>
        </motion.div>

        {/* Grille de garanties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card avec glassmorphism */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-orange-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Icon avec gradient */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${guarantee.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {guarantee.icon}
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-primary transition-colors">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {guarantee.description}
                </p>

                {/* Checkmark badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${guarantee.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge "100% Satisfait ou Remboursé" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-r from-orange-primary to-red-500 text-white rounded-2xl p-8 shadow-2xl max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-16 h-16" />
              </motion.div>
              <div className="text-left">
                <p className="text-3xl font-bold">100% Satisfait</p>
                <p className="text-xl opacity-90">ou Remboursé</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Si vous n'êtes pas entièrement satisfait de mon intervention, je m'engage à revenir gratuitement 
              ou à vous rembourser intégralement. Votre satisfaction est ma priorité absolue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
