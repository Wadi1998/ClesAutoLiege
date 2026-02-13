import React from 'react';
import { Metadata } from 'next';
import { Check, Euro, Clock, Wrench, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serrurier Auto vs Concessionnaire à Liège | Comparatif Prix 2026',
  description: 'Pourquoi choisir un serrurier automobile au lieu du concessionnaire à Liège ? Économisez jusqu\'à 70% avec une intervention aussi rapide et professionnelle.',
  keywords: ['serrurier auto vs concessionnaire', 'prix clé voiture liège', 'alternative concessionnaire', 'économie réparation clé'],
};

export default function ComparaisonPage() {
  const comparisons = [
    {
      criteria: 'Prix moyen reproduction clé',
      locksmith: '80-150€',
      dealer: '250-500€',
      icon: Euro,
    },
    {
      criteria: 'Délai d\'intervention',
      locksmith: '< 30 minutes',
      dealer: '3-7 jours',
      icon: Clock,
    },
    {
      criteria: 'Disponibilité',
      locksmith: '24/7 - Week-end inclus',
      dealer: 'Horaires bureau uniquement',
      icon: Clock,
    },
    {
      criteria: 'Déplacement',
      locksmith: 'À domicile / Sur place',
      dealer: 'Apporter le véhicule',
      icon: Wrench,
    },
    {
      criteria: 'Garantie',
      locksmith: 'Garantie travail',
      dealer: 'Garantie constructeur',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Serrurier Auto vs Concessionnaire à <span className="text-orange-primary">Liège</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Économisez jusqu'à 70% en choisissant un spécialiste automobile indépendant
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+32493447205"
                className="inline-flex items-center gap-2 bg-orange-primary text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Comparatif détaillé
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* En-têtes */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-900">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Critère
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
                    <Check className="w-4 h-4 text-orange-primary" />
                    <span className="text-sm font-bold text-orange-primary">Serrurier Auto</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Concessionnaire</span>
                  </div>
                </div>
              </div>

              {/* Lignes de comparaison */}
              {comparisons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.criteria}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-green-600 dark:text-green-400">
                        <Check className="w-4 h-4" />
                        {item.locksmith}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.dealer}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Pourquoi choisir un serrurier automobile ?
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Euro className="w-6 h-6 text-green-500" />
                  Économies substantielles
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un serrurier automobile facture en moyenne 60-70% moins cher qu'un concessionnaire pour le même service. 
                  Pas de marge constructeur, pas de frais de structure élevés.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-orange-primary" />
                  Rapidité d'intervention
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Intervention en moins de 30 minutes à Liège, 24h/24 et 7j/7. Pas besoin de prendre rendez-vous 
                  ou d'attendre plusieurs jours comme chez un concessionnaire.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-blue-500" />
                  Même expertise technique
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Équipement professionnel identique (valise de programmation, scanner diagnostic). 
                  Spécialiste formé sur toutes marques automobiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-orange-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une clé de voiture à Liège ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Économisez jusqu'à 70% par rapport au concessionnaire
          </p>
          <a
            href="tel:+32493447205"
            className="inline-flex items-center gap-2 bg-white text-orange-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            📞 04 93 44 72 05
          </a>
          <p className="mt-4 text-sm opacity-75">
            Intervention rapide • Devis gratuit • Région de Liège
          </p>
        </div>
      </section>
    </div>
  );
}
