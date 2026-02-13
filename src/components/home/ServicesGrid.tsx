'use client';

import React from 'react';
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

export const ServicesGrid: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Mes Services de Serrurerie Automobile
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert en serrurerie automobile à Liège. Toutes marques, intervention 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.id} variants={staggerItem}>
                  <Link href={`/services/${service.slug}`}>
                    <Card hover className="h-full">
                      <div className="flex flex-col h-full">
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-4">
                          {Icon && <Icon className="w-8 h-8 text-orange-primary" />}
                        </div>
                        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-orange-primary font-semibold group-hover:gap-2 transition-all">
                          En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
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
};
