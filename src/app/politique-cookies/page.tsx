import React from 'react';
import { Metadata } from 'next';
import { Cookie, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Cookies | Clef Auto Liège',
  description: 'Politique d\'utilisation des cookies sur le site Clef Auto Liège. Transparence totale sur les données collectées.',
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-orange-primary" />
            Politique de Cookies
          </h1>

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Notre engagement :</strong> Ce site utilise un nombre minimal de cookies, 
                uniquement techniques, pour assurer votre confort de navigation. Aucun cookie de 
                tracking publicitaire n'est utilisé.
              </p>
            </div>
          </section>

          {/* Qu'est-ce qu'un cookie */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Qu'est-ce qu'un cookie ?
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette ou mobile) 
                lorsque vous visitez un site web. Il permet de mémoriser des informations sur votre visite, 
                comme vos préférences ou votre langue.
              </p>
            </div>
          </section>

          {/* Cookies utilisés */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Cookies utilisés sur ce site
            </h2>

            {/* Cookies techniques */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cookies techniques (obligatoires)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ces cookies sont nécessaires au bon fonctionnement du site. Ils ne collectent aucune 
                    information personnelle identifiable.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">theme_preference</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Mémorise votre préférence de thème (clair/sombre)
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-500">
                        <span>📅 Durée : 1 an</span>
                        <span>🎯 Objectif : Confort utilisateur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies NON utilisés */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cookies NON utilisés sur ce site
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>Cookies publicitaires (Google Ads, Facebook Pixel, etc.)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>Cookies de tracking comportemental</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>Cookies de réseaux sociaux tiers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>Cookies analytiques (Google Analytics)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Comment gérer vos cookies ?
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies. Cependant, 
                certaines fonctionnalités du site (comme le choix du thème) peuvent ne plus fonctionner correctement.
              </p>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chrome</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Paramètres → Confidentialité et sécurité → Cookies
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Firefox</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Options → Vie privée et sécurité → Cookies
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safari</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Préférences → Confidentialité → Cookies
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Edge</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Paramètres → Confidentialité → Cookies
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conformité RGPD */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Conformité RGPD
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ce site est conforme au Règlement Général sur la Protection des Données (RGPD) en vigueur 
                dans l'Union Européenne.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Transparence totale sur les cookies utilisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Aucune donnée personnelle collectée sans consentement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Droit d'accès, de rectification et de suppression garanti</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Questions sur les cookies ?
            </h2>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour toute question concernant notre politique de cookies, n'hésitez pas à nous contacter :
              </p>
              <a 
                href="tel:+32493447205"
                className="inline-flex items-center gap-2 bg-orange-primary text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                📞 04 93 44 72 05
              </a>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Dernière mise à jour : Février 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
