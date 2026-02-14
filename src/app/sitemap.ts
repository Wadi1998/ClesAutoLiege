import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { communes } from '@/lib/data/communes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cles-auto-liege.be';
  const currentDate = new Date();
  
  // Pages services dynamiques
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Pages communes dynamiques (SEO local)
  const communePages = communes.map((commune) => ({
    url: `${baseUrl}/communes/${commune.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Page d'accueil - PRIORITÉ MAXIMUM
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    // Pages services - HAUTE PRIORITÉ
    ...servicePages,
    // Pages communes (SEO local) - MOYENNE PRIORITÉ
    ...communePages,
    // Pages de comparaison - SEO COMPÉTITIF
    {
      url: `${baseUrl}/comparaisons/serrurier-auto-vs-concessionnaire`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Pages de questions - SEO LONGUE TRAÎNE
    {
      url: `${baseUrl}/questions/combien-coute-une-cle-bmw-liege`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/questions/ouvrir-voiture-sans-casser`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // Page Réalisations - Portfolio pour crédibilité
    {
      url: `${baseUrl}/realisations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    // Pages légales - BASSE PRIORITÉ mais nécessaires
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}
