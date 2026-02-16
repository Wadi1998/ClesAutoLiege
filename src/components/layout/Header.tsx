'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PhoneButton } from '@/components/shared/PhoneButton';
import { services } from '@/lib/data/services';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 bg-blue-dark border-b border-blue-medium/70 shadow-sm py-3 sm:py-4 ${
          isMobileMenuOpen ? 'hidden lg:block' : 'block'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Optimisé avec next/image */}
            <Link href="/" className="flex items-center gap-0 sm:gap-1 group">
              <div className="relative w-[72px] h-[72px] sm:w-[60px] sm:h-[60px] flex items-center justify-center self-center shrink-0 -mr-1 sm:mr-0">
                <Image 
                  src="/images/LogoOK.png" 
                  alt="Clés Auto Liège" 
                  fill
                  sizes="(max-width: 639px) 72px, 60px"
                  className="object-contain object-center"
                  priority
                  quality={90}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold font-heading text-white">
                  Clés Auto Liège
                </h1>
                <p className="text-xs text-gray-300">Disponible 24/7</p>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-100 hover:text-orange-primary font-medium transition-colors"
              >
                Accueil
              </Link>

              {/* Services Dropdown - Optimisé */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 text-gray-100 hover:text-orange-primary font-medium transition-colors"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                          prefetch={false}
                        >
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {service.title}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                            {service.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </nav>

            {/* Actions Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <PhoneButton size="md" animate />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-blue-medium/70 hover:bg-blue-medium transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Optimisé avec will-change */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-blue-dark/90 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-blue-dark border-l border-blue-medium shadow-2xl overflow-y-auto"
              style={{ willChange: 'transform' }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold font-heading text-white">
                    Menu
                  </h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-full bg-blue-medium/70 hover:bg-blue-medium transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 rounded-xl font-semibold text-white hover:bg-blue-medium/70 transition-colors"
                    prefetch={false}
                  >
                    Accueil
                  </Link>

                  {/* Services */}
                  <div>
                    <p className="px-4 py-2 text-sm font-semibold text-gray-300">
                      Mes Services
                    </p>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="block px-4 py-3 rounded-xl text-gray-100 hover:bg-blue-medium/70 transition-colors"
                        prefetch={false}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-blue-medium">
                  <PhoneButton size="lg" fullWidth animate />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
