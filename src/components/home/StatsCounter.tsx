'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import { useIsDesktop } from '@/lib/hooks/useMediaQuery';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 1200,
    suffix: '+',
    label: 'Interventions réussies',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 5,
    suffix: ' ans',
    label: "D'expérience",
    color: 'from-orange-primary to-red-500'
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: 4.9,
    suffix: '/5',
    label: 'Note moyenne',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 100,
    suffix: '%',
    label: 'Clients satisfaits',
    color: 'from-green-500 to-emerald-600'
  }
];

const Counter: React.FC<{ value: number; suffix: string; duration?: number }> = React.memo(({ 
  value, 
  suffix, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function pour un effet plus naturel
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value * 10) / 10);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const displayValue = useMemo(
    () => count.toFixed(value % 1 !== 0 ? 1 : 0),
    [count, value]
  );

  return (
    <span ref={ref} className="font-bold">
      {displayValue}{suffix}
    </span>
  );
});

Counter.displayName = 'Counter';

export const StatsCounter: React.FC = React.memo(() => {
  const isDesktop = useIsDesktop();
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-dark to-blue-medium dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background patterns - Desktop only */}
      {isDesktop && (
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-orange-primary rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des Chiffres qui Parlent
          </h2>
          <p className="text-white/80 text-lg">
            Ma réputation en quelques statistiques
          </p>
        </motion.div>

        {/* Grille de stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isDesktop ? { scale: 1.05, y: -5 } : {}}
              className="relative group"
            >
              {/* Card avec glassmorphism */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 shadow-xl">
                {/* Icon avec gradient */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>

                {/* Valeur animée */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {stat.label}
                </p>

                {/* Glow effect on hover - Desktop only */}
                {isDesktop && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA sous les stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 text-lg mb-6">
            Rejoignez les 1200+ clients satisfaits à Liège !
          </p>
          <motion.a
            href="tel:+32493447205"
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-dark px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-white/20 transition-all"
          >
            <span>📞</span>
            <span>Appelez maintenant</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

StatsCounter.displayName = 'StatsCounter';
