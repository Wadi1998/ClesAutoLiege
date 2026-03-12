import React from 'react';
import { Metadata } from 'next';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentions Légales | Clés Auto Liège',
  description: 'Mentions légales de Clés Auto Liège - Serrurier automobile professionnel à Liège, Belgique.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Mentions Légales
          </h1>

          {/* Informations entreprise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange-primary" />
              Informations légales
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Raison sociale</h3>
                <p className="text-gray-600 dark:text-gray-400">Clés Auto Liège</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Forme juridique</h3>
                <p className="text-gray-600 dark:text-gray-400">Entreprise individuelle</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Siège social</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-orange-primary flex-shrink-0 mt-0.5" />
                  <span>Région de Liège, Belgique</span>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-orange-primary" />
                    <a href="tel:+32493447205" className="hover:text-orange-primary transition-colors">
                      04 93 44 72 05
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-orange-primary" />
                    <span>Disponible par téléphone</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hébergement du site
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Ce site est hébergé par Vercel Inc.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, États-Unis
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Propriété intellectuelle
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                L'ensemble de ce site relève de la législation belge et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les marques, logos, graphismes et images reproduits sur ce site sont la propriété de leurs 
                titulaires respectifs. Toute reproduction, distribution, modification, adaptation, 
                retransmission ou publication, même partielle, de ces différents éléments est strictement 
                interdite sans l'accord écrit de Clés Auto Liège.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Protection des données personnelles
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un 
                droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous 
                concernant.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Les seules 
                données collectées sont celles que vous nous transmettez volontairement lors d'un contact 
                téléphonique ou via WhatsApp.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Pour exercer ces droits, vous pouvez nous contacter par téléphone au 04 93 44 72 05.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Cookies
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site 
                (préférences de thème sombre/clair).
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Aucun cookie de tracking ou de publicité n'est utilisé. Pour plus d'informations, 
                consultez notre <a href="/politique-cookies" className="text-orange-primary hover:underline">politique de cookies</a>.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Limitation de responsabilité
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de 
                bien vouloir nous le signaler par téléphone.
              </p>
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
