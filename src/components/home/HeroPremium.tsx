'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { PhoneButton } from '@/components/shared/PhoneButton';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { MascotteInteractive } from '@/components/shared/MascotteInteractive';
import { fadeInUp, fadeInDown, scaleIn } from '@/lib/utils/animations';
import { useTimeOfDay } from '@/lib/hooks/useTimeOfDay';
import { useGeolocation } from '@/lib/hooks/useGeolocation';

export const HeroPremium: React.FC = () => {
  const timeOfDay = useTimeOfDay();
  const location = useGeolocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Parallax suiveur de souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Messages dynamiques selon l'heure
  const getTimeMessage = () => {
    if (timeOfDay === 'night') {
      return '🌙 Intervention de nuit – Réponse rapide';
    }
    return '✅ Disponible immédiatement';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Camionnette avec effet stylé */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage: 'url(/camionette.webp)',
            backgroundPosition: 'right center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient overlay pour fondu élégant */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent" />
      </motion.div>

      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-orange-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Glassmorphism Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche avec glassmorphism */}
          <div className="text-center lg:text-left">
            {/* Badge dynamique glassmorphism */}
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-xl border border-white/20"
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {getTimeMessage()} • {location.region}
            </motion.div>

            {/* Titre avec effet typewriter et glassmorphism */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight relative z-10"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Clef Auto{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200 }}
                  className="text-orange-primary inline-block relative"
                >
                  Liège
                  <motion.span
                    className="absolute -right-8 -top-4"
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.span>
                </motion.span>
              </motion.h1>

              {/* Glassmorphism blur effect behind title */}
              <div className="absolute inset-0 bg-white/40 dark:bg-black/20 blur-3xl -z-10 rounded-full" />
            </motion.div>

            {/* Sous-titre avec glassmorphism */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="relative inline-block mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 px-6 py-3 rounded-2xl border border-white/20">
                Votre partenaire de confiance à Liège<br />
                <span className="font-semibold text-orange-primary">Intervention 24/7</span>
              </p>
            </motion.div>

            {/* CTA Buttons avec effets premium */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-primary to-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <PhoneButton
                    size="lg"
                    animate
                    className="shadow-2xl backdrop-blur-md bg-orange-primary/95"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <WhatsAppButton
                    size="lg"
                    className="shadow-2xl backdrop-blur-md"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Trust badges avec glassmorphism */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm"
            >
              {[
                { icon: '⚡', text: 'Intervention < 30 min' },
                { icon: '💰', text: 'Devis gratuit' },
                { icon: '🚗', text: 'Toutes marques' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 shadow-lg"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Micro copy anti-hésitation */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left mt-6 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 inline-block px-4 py-2 rounded-full"
            >
              Réponse immédiate • Devis gratuit • Sans engagement
            </motion.p>
          </div>

          {/* Mascotte droite avec parallax */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/30 to-transparent blur-3xl rounded-full scale-150" />
              <MascotteInteractive />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator amélioré */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium group-hover:text-orange-primary transition-colors">
            Découvrez mes services
          </span>
          <motion.div
            className="p-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-orange-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
