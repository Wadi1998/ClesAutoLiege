'use client';

import { useState, useEffect } from 'react';

export type TimeOfDay = 'day' | 'night';

export const useTimeOfDay = (): TimeOfDay => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // 22h-8h = nuit, sinon jour
      setTimeOfDay(hour >= 22 || hour < 8 ? 'night' : 'day');
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check toutes les minutes

    return () => clearInterval(interval);
  }, []);

  return timeOfDay;
};
