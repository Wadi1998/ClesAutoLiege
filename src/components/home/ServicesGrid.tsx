'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Key, DoorOpen, AlertCircle, Settings, Cpu, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { services } from '@/lib/data/services';
import { staggerContainer, staggerItem } from '@/lib/utils/animations';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

const iconMap: { [key: string]: any } = {
  Key, DoorOpen, AlertCircle, Settings, Cpu, Wrench
};

export const ServicesGrid: React.FC = React.memo(() => {
  const { ref, inView } = useScrollAnimation();

  // Mémoiser le container animation state
  const animationState = useMemo(() => inView ? "visible" : "hidden", [inView]);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animationState}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Nos Services de Serrurerie Automobile
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert en serrurerie automobile à Liège. Toutes marques, intervention 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id} 
                  variants={staggerItem}
                  style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
                >
                  <Link href={`/services/${service.slug}`} prefetch={false}>
                    <Card hover className="h-full p-3 sm:p-6">
                      <div className="flex flex-col h-full">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                          {Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-primary" />}
                        </div>
                        <h3 className="text-sm sm:text-xl font-bold font-heading text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight line-clamp-2">
                          {service.title}
                        </h3>
                        <p className="hidden sm:block text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                          {service.shortDescription}
                        </p>
                        <div className="mt-auto flex items-center text-orange-primary font-semibold text-xs sm:text-base group-hover:gap-2 transition-all">
                          <span className="hidden sm:inline">En savoir plus</span>
                          <span className="sm:hidden">Voir</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ServicesGrid.displayName = 'ServicesGrid';
