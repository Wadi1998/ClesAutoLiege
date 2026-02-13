'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages, categories, GalleryImage } from '@/lib/data/gallery';

export const GalleryPremium: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredImages = selectedCategory === 'tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
      setSelectedImage(filteredImages[lightboxIndex + 1]);
    } else {
      setLightboxIndex(0);
      setSelectedImage(filteredImages[0]);
    }
  };

  const prevImage = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
      setSelectedImage(filteredImages[lightboxIndex - 1]);
    } else {
      setLightboxIndex(filteredImages.length - 1);
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, lightboxIndex]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 107 53 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête avec glassmorphism */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-orange-primary/30 rounded-full px-6 py-3 mb-6 shadow-xl"
          >
            <Camera className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Portfolio Interventions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white"
          >
            Mes Interventions en <span className="text-orange-primary">Photos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Découvrez quelques exemples de mes interventions dans la région de Liège. 
            Chaque photo témoigne de mon professionnalisme et de la qualité de mon travail.
          </motion.p>

          {/* Filtres par catégorie avec animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat.value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                onClick={() => setSelectedCategory(cat.value)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-orange-primary to-red-500 text-white shadow-xl scale-105'
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-700 dark:text-gray-300 hover:bg-orange-primary/10 hover:text-orange-primary border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat.label} <span className="text-sm opacity-75">({cat.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Slider horizontal avec contrôles */}
        <div className="relative group">
          {/* Bouton gauche */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 -translate-x-6"
          >
            <ChevronLeft className="w-6 h-6 text-orange-primary" />
          </button>

          {/* Bouton droite */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 translate-x-6"
          >
            <ChevronRight className="w-6 h-6 text-orange-primary" />
          </button>

          {/* Grille/Slider d'images */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => openLightbox(image)}
                  className="group/card relative flex-shrink-0 w-[300px] h-[300px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 snap-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Placeholder visuel */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-6xl mb-4 group-hover/card:scale-110 transition-transform">
                      {image.placeholder.split(':')[0]}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {image.placeholder.split(':')[1]}
                    </p>
                  </div>

                  {/* Overlay au hover avec glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{image.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ZoomIn className="w-4 h-4 text-orange-primary" />
                        <span className="text-orange-primary text-sm font-semibold">
                          Voir en grand
                        </span>
                      </div>
                      <span className="text-xs text-white/70 bg-white/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.value === image.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Badge numéro */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-orange-primary/90 backdrop-blur-md text-white rounded-full flex items-center justify-center font-bold text-sm opacity-0 group-hover/card:opacity-100 transition-opacity">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicateur de scroll */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(Math.ceil(filteredImages.length / 3))].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
              />
            ))}
          </div>
        </div>

        {/* Note sur les vraies photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-md rounded-xl p-6 max-w-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">📸 Photos à venir :</strong> 
              {' '}Les images affichées sont des placeholders. Des photos réelles de mes interventions 
              seront ajoutées prochainement pour vous montrer concrètement la qualité de mon travail.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal amélioré */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 backdrop-blur-md"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Bouton précédent */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 backdrop-blur-md"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Bouton suivant */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 backdrop-blur-md"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Contenu lightbox */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Image (placeholder) */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center p-12 relative overflow-hidden">
                {/* Animated gradient orb */}
                <motion.div
                  className="absolute w-64 h-64 bg-orange-primary/30 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="text-9xl mb-6 relative z-10">
                  {selectedImage.placeholder.split(':')[0]}
                </div>
                <p className="text-white text-xl text-center relative z-10">
                  {selectedImage.placeholder.split(':')[1]}
                </p>
              </div>

              {/* Informations avec glassmorphism */}
              <div className="p-6 bg-gray-800/80 backdrop-blur-md">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="bg-gradient-to-r from-orange-primary to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {categories.find(c => c.value === selectedImage.category)?.label}
                  </span>
                </div>
                <p className="text-gray-300 text-lg mb-4">{selectedImage.description}</p>
                
                {/* Navigation info */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Photo {lightboxIndex + 1} sur {filteredImages.length}</span>
                  <span className="text-xs opacity-75">← → Flèches pour naviguer • ESC pour fermer</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
