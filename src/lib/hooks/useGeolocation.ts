'use client';

import { useState, useEffect } from 'react';

interface LocationData {
  city: string;
  region: string;
  isNearby: boolean; // Si proche de Liège/Herstal
}

const NEARBY_CITIES = ['herstal', 'liège', 'liege', 'seraing', 'ans', 'awans', 'flemalle'];

// Fallback par défaut pour éviter les problèmes
const DEFAULT_LOCATION: LocationData = {
  city: 'Liège',
  region: 'Région de Liège',
  isNearby: false,
};

export const useGeolocation = (): LocationData => {
  const [location, setLocation] = useState<LocationData>(DEFAULT_LOCATION);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const detectLocation = async () => {
      try {
        // Timeout de 3 secondes pour éviter les blocages
        const controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Vérifier que le composant est toujours monté
        if (!isMounted) return;

        // Vérifier que les données sont valides
        if (data && data.city && typeof data.city === 'string') {
          const city = data.city.toLowerCase();
          const isNearby = NEARBY_CITIES.some(nearbyCity =>
            city.includes(nearbyCity) || nearbyCity.includes(city)
          );

          setLocation({
            city: isNearby ? data.city : 'Liège',
            region: isNearby ? `Intervention rapide à ${data.city}` : 'Région de Liège',
            isNearby,
          });
        }
      } catch (error) {
        // Gestion silencieuse des erreurs (timeout, CORS, network, etc.)
        // On garde le fallback DEFAULT_LOCATION déjà défini
        if (process.env.NODE_ENV === 'development') {
          console.info('Geolocation API unavailable, using default location:', error);
        }
      }
    };

    detectLocation();

    // Cleanup pour éviter les fuites mémoire et les mises à jour après unmount
    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return location;
};
