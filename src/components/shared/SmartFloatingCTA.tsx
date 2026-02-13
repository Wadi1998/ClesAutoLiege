'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';

export const SmartFloatingCTA: React.FC = () => {
  const { isMiddle, isTop } = useScrollPosition();

  // CTA plus agressif si scroll > 50%
  const isAggressive = isMiddle;

  return (
    <AnimatePresence>
      {!isTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="hidden md:flex fixed bottom-4 left-4 md:left-8 z-50"
        >
          {isAggressive ? (
            // CTA Agressif - Grande urgence
            <motion.a
              href="tel:+324934472055"
              className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-red-700 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Phone className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
              </div>
              <div>
                <p className="font-bold text-sm">🚨 Besoin d'aide ?</p>
                <p className="text-xs opacity-90">Cliquez pour appeler</p>
              </div>
            </motion.a>
          ) : (
            // CTA Discret - Scroll début
            <motion.div className="flex gap-2">
              <motion.a
                href="tel:+324934472055"
                className="w-12 h-12 bg-orange-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Appeler maintenant"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/324934472055"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
