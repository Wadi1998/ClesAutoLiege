'use client';

import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';
import { communes } from '@/lib/data/communes';

export const ZoneIntervention: React.FC = () => {
  return (
    <section id="zone-intervention" className="py-16 md:py-24 bg-white dark:bg-blue-dark">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2 mb-6">
            <MapPin className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Service Local</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
            J'Interviens Partout dans la Région de Liège
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Basé à Liège, je me déplace rapidement dans toute la région pour vous dépanner où que vous soyez
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Colonne gauche : Carte visuelle */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-primary/20 to-orange-hover/20 dark:from-orange-primary/10 dark:to-orange-hover/10 rounded-2xl p-8 backdrop-blur-sm border-2 border-orange-primary/30 shadow-xl">
              {/* Indicateur central */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Centre - Liège */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-primary to-orange-hover rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    {/* Ondes de propagation */}
                    <div className="absolute inset-0 w-20 h-20 bg-orange-primary rounded-full opacity-30 animate-ping"></div>
                  </div>
                  <p className="text-center mt-3 font-bold text-blue-dark dark:text-white text-lg">
                    Liège
                  </p>
                </div>

                {/* Cercles de zone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-orange-primary/20 dark:border-orange-primary/30"></div>
                </div>
                <div className="absolute inset-[10%] flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-orange-primary/30 dark:border-orange-primary/40"></div>
                </div>
                <div className="absolute inset-[20%] flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-orange-primary/40 dark:border-orange-primary/50"></div>
                </div>

                {/* Points de communes */}
                <div className="absolute top-[15%] right-[20%]">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                </div>
                <div className="absolute bottom-[25%] left-[15%]">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                </div>
                <div className="absolute top-[30%] left-[10%]">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                </div>
                <div className="absolute bottom-[15%] right-[25%]">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                </div>
              </div>

              {/* Légende */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Zone de couverture : <span className="text-orange-primary font-bold">~15km autour de Liège</span>
                </p>
              </div>
            </div>
          </div>

          {/* Colonne droite : Liste des communes */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
              Communes desservies :
            </h3>
            
            {/* Grid des communes avec liens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {communes.map((commune) => (
                <Link
                  key={commune.id}
                  href={`/communes/${commune.slug}`}
                  className="flex items-center gap-2 bg-gray-light dark:bg-blue-medium/30 rounded-lg px-4 py-3 hover:bg-orange-primary/10 hover:border-orange-primary border border-transparent transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-2 h-2 bg-orange-primary rounded-full group-hover:animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-dark dark:text-white group-hover:text-orange-primary transition-colors">
                    {commune.name}
                  </span>
                </Link>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <strong className="text-orange-primary">Et toute la périphérie liégeoise !</strong> 
              {' '}Vous ne voyez pas votre commune dans la liste ? Pas de souci, je couvre un large rayon autour de Liège.
            </p>

            {/* Cards info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gradient-to-r from-orange-primary/10 to-transparent dark:from-orange-primary/5 rounded-xl p-5 border-l-4 border-orange-primary">
                <Clock className="w-6 h-6 text-orange-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-dark dark:text-white mb-1">
                    Temps d'intervention
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    En moyenne <strong>moins de 30 minutes</strong> dans toute la région
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-500/10 to-transparent dark:from-green-500/5 rounded-xl p-5 border-l-4 border-green-500">
                <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-dark dark:text-white mb-1">
                    Pas sûr si je couvre votre zone ?
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Appelez-moi pour vérifier, je vous le confirme immédiatement
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:0493447205"
                      className="inline-flex items-center justify-center gap-2 bg-orange-primary hover:bg-orange-hover text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      04 93 44 72 05
                    </a>
                    <a
                      href="https://wa.me/324934472055?text=Bonjour,%20je%20suis%20à%20[VOTRE%20COMMUNE],%20pouvez-vous%20intervenir%20?"
                      className="inline-flex items-center justify-center gap-2 bg-green-whatsapp hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message final */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-dark to-blue-medium dark:from-blue-medium dark:to-blue-dark rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Service Local, Expertise Professionnelle
          </h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Contrairement aux grandes enseignes, je connais parfaitement la région de Liège et je peux vous rejoindre rapidement, même dans les zones moins accessibles. Mon engagement : être à vos côtés quand vous en avez besoin.
          </p>
        </div>
      </div>
    </section>
  );
};
