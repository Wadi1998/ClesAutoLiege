import React from 'react';
import { Metadata } from 'next';
import { Euro, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Combien coûte une clé BMW à Liège ? Prix 2026 | Clef Auto Liège',
  description: 'Prix détaillé pour une reproduction de clé BMW à Liège : 120-180€ selon le modèle. Intervention rapide, devis gratuit. Économisez par rapport au concessionnaire BMW.',
  keywords: ['prix clé bmw liège', 'reproduction clé bmw', 'coût clé bmw', 'clé bmw liège tarif'],
};

export default function PrixCleBMWPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Combien coûte une clé BMW à <span className="text-orange-primary">Liège</span> ?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Tout savoir sur les prix, délais et options pour votre clé BMW en 2026
            </p>
            <a
              href="tel:+324934472055"
              className="inline-flex items-center gap-2 bg-orange-primary text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors"
            >
              📞 Devis gratuit immédiat
            </a>
          </div>
        </div>
      </section>

      {/* Prix détaillés */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Fourchette de prix
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-primary rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Serrurier Auto</p>
                    <p className="text-2xl font-bold text-orange-primary">120-180€</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Intervention rapide (30 min)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Programmation incluse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Déplacement à domicile</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Concessionnaire BMW</p>
                    <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">350-550€</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">Délai 3-7 jours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">Marge constructeur élevée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">Amener le véhicule</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facteurs influençant le prix */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Qu'est-ce qui influence le prix ?
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  1. Le modèle de votre BMW
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Les modèles récents (depuis 2015) avec système Comfort Access sont légèrement plus coûteux en raison 
                  de la technologie avancée de programmation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700 dark:text-gray-300">• BMW Série 1, 2, 3 (anciens modèles) : 120-140€</li>
                  <li className="text-gray-700 dark:text-gray-300">• BMW Série 5, X3, X5 : 140-160€</li>
                  <li className="text-gray-700 dark:text-gray-300">• BMW Série 7, i8, récents : 160-180€</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  2. Type de clé
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Clé standard, clé avec télécommande intégrée ou clé Comfort Access (sans contact).
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  3. Urgence de l'intervention
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Intervention standard ou urgence immédiate (nuit, week-end). Supplément possible pour intervention nocturne.
                </p>
              </div>
            </div>

            {/* Processus */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Comment ça se passe ?
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Appel téléphonique</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vous nous appelez, nous vous donnons un devis précis selon votre modèle BMW
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Intervention rapide</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous nous déplaçons chez vous ou sur votre lieu de stationnement en moins de 30 minutes
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Programmation sur place</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reproduction et programmation de votre clé BMW directement sur place (15-30 minutes)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Test et garantie</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vérification complète de toutes les fonctions, garantie travail incluse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-orange-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une clé BMW à Liège ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit par téléphone • Intervention en 30 minutes
          </p>
          <a
            href="tel:+32493447205"
            className="inline-flex items-center gap-2 bg-white text-orange-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            📞 04 93 44 72 05
          </a>
        </div>
      </section>
    </div>
  );
}
