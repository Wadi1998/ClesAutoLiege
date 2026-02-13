'use client';

import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Shield } from 'lucide-react';

export const CTAFinal: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-hover to-red-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            {/* Badge urgence */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 py-2 mb-8 animate-bounce">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                Disponible Maintenant
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white leading-tight">
              Besoin d'une Intervention<br />
              <span className="text-yellow-300">Urgente ?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 mb-4 font-medium">
              Je suis à votre service 24h/24, 7j/7
            </p>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Clés perdues, portière bloquée, clé cassée ? Appelez-moi maintenant, j'arrive en moins de 30 minutes dans la région de Liège
            </p>
          </div>

          {/* Boutons CTA principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:0493447205"
              className="group relative bg-white text-orange-primary px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/5 to-orange-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">04 93 44 72 05</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </a>
            
            <a
              href="https://wa.me/324934472055?text=Bonjour,%20j'ai%20besoin%20d'une%20intervention%20urgente%20pour..."
              className="group relative bg-green-whatsapp text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 inline-flex items-center gap-3 border-2 border-white/30 w-full sm:w-auto justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">WhatsApp</span>
            </a>
          </div>

          {/* Points de réassurance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Clock className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">
                Intervention Rapide
              </h3>
              <p className="text-white/90 text-sm">
                Arrivée en moins de 30 minutes dans la région de Liège
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Shield className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">
                Sans Dommage
              </h3>
              <p className="text-white/90 text-sm">
                Techniques professionnelles non destructives garanties
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MapPin className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">
                Toute la Région
              </h3>
              <p className="text-white/90 text-sm">
                Liège, Herstal, Seraing, Ans et toute la périphérie
              </p>
            </div>
          </div>

          {/* Texte de réassurance final */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">Note 5/5</span>
              </div>
              
              <div className="w-px h-8 bg-white/30 hidden md:block"></div>
              
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Devis Gratuit</span>
              </div>
              
              <div className="w-px h-8 bg-white/30 hidden md:block"></div>
              
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Service 24h/24</span>
              </div>
            </div>
          </div>

          {/* Message final */}
          <p className="text-center text-white/90 mt-8 text-lg">
            <strong className="text-yellow-300">Pas de frais cachés • Pas d'engagement</strong>
            <br />
            <span className="text-base">Appelez-moi, je vous réponds immédiatement et vous donne un prix clair par téléphone</span>
          </p>
        </div>
      </div>
    </section>
  );
};
