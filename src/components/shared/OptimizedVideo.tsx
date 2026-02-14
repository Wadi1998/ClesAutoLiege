'use client';

import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

/**
 * Composant vidéo optimisé avec lazy loading et intersection observer
 * Ne charge la vidéo que lorsqu'elle est visible dans le viewport
 */
export function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Une fois chargée, on peut arrêter d'observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Commence à charger 50px avant que la vidéo soit visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isInView ? 'auto' : 'none'}
    >
      {isInView && <source src={src} type="video/mp4" />}
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  );
}
