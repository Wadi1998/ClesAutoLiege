'use client';

import React from 'react';
import { Zap, Wrench, Shield, DollarSign } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Intervention Rapide',
      points: [
        'Disponible 24h/24, 7j/7',
        'J\'arrive en moins de 30 minutes',
        'Pas de rendez-vous nécessaire'
      ],
      color: 'from-orange-primary to-orange-hover'
    },
    {
      icon: Wrench,
      title: 'Expertise Toutes Marques',
      points: [
        'Plus de 50 marques prises en charge',
        'Matériel professionnel dernière génération',
        'Formation continue sur les nouveaux modèles'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Sans Dommage Garanti',
      points: [
        'Techniques non destructives',
        'Votre véhicule reste intact',
        'Garantie satisfaction 100%'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: DollarSign,
      title: 'Transparence Totale',
      points: [
        'Devis gratuit par téléphone',
        'Pas de frais cachés',
        'Prix 30-50% moins cher qu\'en concession'
      ],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-light to-white dark:from-blue-medium dark:to-blue-dark">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
            Pourquoi Me Faire Confiance ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professionnel indépendant, je mets mon expertise et ma passion au service de votre tranquillité
          </p>
        </div>

        {/* Grid des raisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-blue-dark/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-gray-200 dark:border-blue-medium hover:scale-105 hover:-translate-y-2"
              >
                {/* Icône avec gradient */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Effet glow derrière l'icône */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold font-heading mb-4 text-blue-dark dark:text-white">
                  {reason.title}
                </h3>

                {/* Liste des points */}
                <ul className="space-y-3">
                  {reason.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-6 h-6 text-orange-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Section confiance supplémentaire */}
        <div className="mt-16 bg-gradient-to-r from-orange-primary to-orange-hover rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Une Question ? Un Doute ?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Appelez-moi pour discuter de votre situation. Je vous conseille gratuitement et sans engagement sur la meilleure solution pour votre véhicule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0493447205"
              className="bg-white text-orange-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📞 04 93 44 72 05
            </a>
            <a
              href="https://wa.me/324934472055?text=Bonjour,%20j'ai%20une%20question%20sur%20vos%20services..."
              className="bg-green-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 bg-white dark:bg-blue-medium/50 rounded-full px-6 py-3 shadow-md">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-semibold text-blue-dark dark:text-white">Disponible maintenant</span>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-blue-medium/50 rounded-full px-6 py-3 shadow-md">
            <span className="text-2xl">✓</span>
            <span className="font-semibold text-blue-dark dark:text-white">Intervention sous 30min</span>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-blue-medium/50 rounded-full px-6 py-3 shadow-md">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold text-blue-dark dark:text-white">Note 5/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
