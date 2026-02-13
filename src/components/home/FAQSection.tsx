'use client';

import React, { useState } from 'react';
import { globalFAQs } from '@/lib/data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-light to-white dark:from-blue-dark dark:to-blue-medium">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
            Questions Fréquentes
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vous avez des questions ? J'ai les réponses ! Voici les questions les plus fréquemment posées par mes clients.
          </p>
        </div>

        {/* Accordéon FAQ */}
        <div className="max-w-4xl mx-auto space-y-4">
          {globalFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-blue-medium/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-blue-medium"
              >
                {/* Question - Bouton */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left hover:bg-gray-50 dark:hover:bg-blue-dark/30 transition-colors duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg md:text-xl font-bold text-blue-dark dark:text-white pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-orange-primary/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-orange-primary' : ''}`}>
                    <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-orange-primary'}`} />
                  </div>
                </button>

                {/* Réponse - Contenu animé */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                    <div className="pl-4 border-l-4 border-orange-primary">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA après les FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-primary to-orange-hover rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Vous Ne Trouvez Pas la Réponse ?
            </h3>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              N'hésitez pas à m'appeler ou à m'écrire sur WhatsApp. Je réponds à toutes vos questions rapidement et sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0493447205"
                className="bg-white text-orange-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span className="text-2xl">📞</span>
                <span>04 93 44 72 05</span>
              </a>
              <a
                href="https://wa.me/324934472055?text=Bonjour,%20j'ai%20une%20question%20concernant..."
                className="bg-green-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 border-2 border-white/30"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 text-sm opacity-90">
              ⚡ Réponse en quelques minutes • Disponible 24h/24
            </p>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white dark:bg-blue-medium/30 rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-primary mb-2">
              {globalFAQs.length}+
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Questions Répondues
            </p>
          </div>
          <div className="text-center bg-white dark:bg-blue-medium/30 rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-primary mb-2">
              100%
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Transparence Garantie
            </p>
          </div>
          <div className="text-center bg-white dark:bg-blue-medium/30 rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-primary mb-2">
              24/7
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Disponibilité Totale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
