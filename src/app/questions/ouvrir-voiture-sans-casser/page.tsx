import React from 'react';
import { Metadata } from 'next';
import { Shield, CheckCircle, XCircle, AlertTriangle, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comment ouvrir une voiture sans casser ? Méthode pro à Liège',
  description: 'Découvrez les méthodes professionnelles non-destructives pour ouvrir une voiture sans dommage à Liège. Intervention rapide par serrurier automobile expert.',
  keywords: ['ouvrir voiture sans casser', 'ouverture portière sans dommage', 'méthode non destructive', 'serrurier auto liège'],
};

export default function OuvrirVoitureSansCasserPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comment ouvrir une voiture <span className="text-orange-primary">sans casser</span> ?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Les méthodes professionnelles non-destructives utilisées par les experts à Liège
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+32493447205"
                className="inline-flex items-center gap-2 bg-orange-primary text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                🚨 Intervention urgente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes professionnelles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Les méthodes professionnelles <span className="text-green-500">sans dommage</span>
            </h2>

            <div className="space-y-6">
              {/* Méthode 1 */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Wrench className="w-6 h-6 text-green-500" />
                      La technique du coussin gonflable
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Insertion d'un coussin pneumatique dans l'espace entre la porte et le châssis. 
                      Une fois gonflé, il crée un espace suffisant pour insérer un outil long et actionner 
                      la serrure de l'intérieur.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Zéro dommage</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Rapide (5-10 min)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 2 */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-green-500" />
                      Le crochetage professionnel
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Utilisation d'outils spécialisés (crochets, extracteurs) pour manipuler le mécanisme 
                      de serrure sans endommager le barillet. Cette technique requiert une expertise pointue 
                      et des années d'expérience.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Serrure intacte</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Expertise requise</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 3 */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      La programmation électronique
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Pour les véhicules récents avec système de verrouillage électronique, utilisation 
                      d'équipement de diagnostic pour communiquer avec le calculateur et déverrouiller 
                      les portes de manière logicielle.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">High-tech</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">Véhicules récents</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes à ÉVITER */}
      <section className="py-16 md:py-24 bg-red-50 dark:bg-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              Méthodes dangereuses à <span className="text-red-500">ÉVITER</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      ❌ Casser la vitre
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Coût de remplacement : 150-400€. Risque de blessure. Exposition aux intempéries. 
                      <strong> Toujours plus cher qu'un serrurier professionnel.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      ❌ Forcer avec un tournevis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Risque de déformation permanente de la porte, peinture écaillée, joints endommagés. 
                      Réparations coûteuses (500€+).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      ❌ Utiliser un cintre métallique
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Risque de rayer la peinture, endommager les mécanismes internes, casser des pièces 
                      en plastique. Méthode inefficace sur véhicules modernes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                💡 <strong>Conseil :</strong> Faire appel à un professionnel coûte généralement 
                entre 60-100€ et garantit zéro dommage. C'est toujours moins cher que de réparer 
                les dégâts causés par une tentative amateur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un professionnel */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Pourquoi faire appel à un professionnel ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zéro dommage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Outils professionnels et expertise garantissant aucun dommage
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Rapide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Intervention en moins de 30 minutes à Liège
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Équipement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Matériel professionnel adapté à toutes marques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-orange-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Portière bloquée à Liège ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ouverture sans dommage • Intervention &lt; 30 minutes • Prix transparent
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
