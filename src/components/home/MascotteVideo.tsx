'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const MascotteVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Autoplay au chargement
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay bloqué:', err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Découvrez Votre Expert en Action 🎬
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Regardez comment notre mascotte travaille pour vous !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Vidéo */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              loop
              muted={isMuted}
              playsInline
              poster="/mascotte.webp"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>

            {/* Overlay avec contrôles */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Contrôles Play/Pause */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-20 h-20 bg-orange-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl hover:bg-orange-primary transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  )}
                </motion.button>
              </div>

              {/* Bouton Mute en bas à droite */}
              <div className="absolute bottom-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Badge "En Action" */}
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                EN ACTION
              </motion.div>
            )}
          </div>

          {/* Message promotionnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              💼 <span className="font-semibold text-orange-primary">Professionnel, rapide et efficace</span> - Votre satisfaction est notre priorité !
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Équipement professionnel
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Expert certifié
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Service 24/7
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
