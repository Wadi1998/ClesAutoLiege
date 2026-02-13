'use client';

import { useState, useEffect } from 'react';

interface LocationData {
  city: string;
  region: string;
  isNearby: boolean; // Si proche de Liège/Herstal
}

const NEARBY_CITIES = ['herstal', 'liège', 'liege', 'seraing', 'ans', 'awans', 'flemalle'];

export const useGeolocation = (): LocationData => {
  const [location, setLocation] = useState<LocationData>({
    city: 'Liège',
    region: 'Région de Liège',
    isNearby: false,
  });

  useEffect(() => {
    // Tentative de détection via API IP (fallback simple)
    const detectLocation = async () => {
      try {
        // Note: En production, utilisez une vraie API de géolocalisation
        // Pour l'instant, on simule avec un fallback intelligent
        const response = await fetch('https://ipapi.co/json/').catch(() => null);
        
        if (response) {
          const data = await response.json();
          const city = data.city?.toLowerCase() || 'liège';
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
        // Fallback silencieux
        console.debug('Geolocation not available, using default');
      }
    };

    detectLocation();
  }, []);

  return location;
};
