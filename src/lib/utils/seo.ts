import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  ogImage = '/logo.png',
  ogType = 'website',
  canonical,
  noindex = false,
  article,
}: SEOProps): Metadata => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  const fullTitle = title.includes('Clés Auto Liège') ? title : `${title} | Clés Auto Liège`;
  
  // Générer une description optimale (entre 150-160 caractères)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  const metadata: Metadata = {
    title: fullTitle,
    description: optimizedDescription,
    keywords: keywords.join(', '),
    authors: [{ name: 'Clés Auto Liège', url: siteUrl }],
    creator: 'Clés Auto Liège',
    publisher: 'Clés Auto Liège',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType as any,
      locale: 'fr_BE',
      url: canonical || siteUrl,
      siteName: 'Clés Auto Liège',
      title: fullTitle,
      description: optimizedDescription,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(article && {
        article: {
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          authors: article.author ? [article.author] : undefined,
          section: article.section,
          tags: article.tags,
        },
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: optimizedDescription,
      images: [`${siteUrl}${ogImage}`],
      creator: '@ClefAutoLiege',
      site: '@ClefAutoLiege',
    },
    alternates: {
      canonical: canonical || siteUrl,
      languages: {
        'fr-BE': canonical || siteUrl,
        'fr': canonical || siteUrl,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    category: 'Services automobiles',
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }),
      'contact:phone_number': process.env.NEXT_PUBLIC_PHONE_DISPLAY || '04 93 44 72 05',
      'contact:country-name': 'Belgium',
      'contact:region': 'Liège',
      'contact:city': 'Liège',
      'contact:postal-code': '4000',
      'geo.region': 'BE-WLG',
      'geo.placename': 'Liège',
      'geo.position': '50.6326;5.5797',
      'ICBM': '50.6326, 5.5797',
      'business:contact_data:street_address': 'Liège',
      'business:contact_data:locality': 'Liège',
      'business:contact_data:region': 'Wallonie',
      'business:contact_data:postal_code': '4000',
      'business:contact_data:country_name': 'Belgium',
    },
  };

  return metadata;
};

export const generateLocalBusinessSchema = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Clés Auto Liège',
    alternateName: ['Serrurier Auto Liège', 'Clés Auto Liège', 'Clef Voiture Liège'],
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description: 'Expert en serrurerie automobile à Liège. Intervention 24h/24, 7j/7 pour tous vos problèmes de clés auto : reproduction, ouverture portière, dépannage urgence.',
    url: siteUrl,
    telephone: '+32493447205',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    email: 'contact@clefautoliege.be',
    sameAs: [
      'https://www.facebook.com/clefautoliege',
      'https://www.instagram.com/clefautoliege',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Liège',
      addressRegion: 'Wallonie',
      postalCode: '4000',
      addressCountry: 'BE',
      streetAddress: 'Zone de Liège',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.6326,
      longitude: 5.5797,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      { '@type': 'City', name: 'Liège', '@id': 'https://www.wikidata.org/wiki/Q3992' },
      { '@type': 'City', name: 'Herstal' },
      { '@type': 'City', name: 'Seraing' },
      { '@type': 'City', name: 'Ans' },
      { '@type': 'City', name: 'Flémalle' },
      { '@type': 'City', name: 'Grâce-Hollogne' },
      { '@type': 'City', name: 'Chaudfontaine' },
      { '@type': 'City', name: 'Ougrée' },
      { '@type': 'City', name: 'Angleur' },
      { '@type': 'City', name: 'Beyne-Heusay' },
      { '@type': 'City', name: 'Saint-Nicolas' },
      { '@type': 'City', name: 'Bressoux' },
      { '@type': 'City', name: 'Grivegnée' },
    ],
    slogan: 'Votre partenaire de confiance à Liège - Intervention 24/7',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de serrurerie automobile',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reproduction de clés automobile',
            description: 'Duplication de tous types de clés auto, transpondeurs et télécommandes',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ouverture de portière',
            description: 'Ouverture non destructive en cas de clés enfermées',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dépannage urgence 24/7',
            description: 'Intervention rapide jour et nuit',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation de serrures',
            description: 'Réparation et remplacement de serrures automobiles',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Programmation clés électroniques',
            description: 'Programmation de clés à transpondeur et télécommandes',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Extraction de clés cassées',
            description: 'Extraction professionnelle sans dommage',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Clés Auto Liège',
            },
          },
        },
      ],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+32493447205',
        contactType: 'customer service',
        availableLanguage: ['French'],
        areaServed: 'BE',
        contactOption: 'TollFree',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  };
};

export const generateServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Clés Auto Liège',
      telephone: '+32493447205',
      url: siteUrl,
    },
    description: serviceDescription,
    areaServed: {
      '@type': 'City',
      name: 'Liège',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+32493447205',
        availableLanguage: 'French',
      },
    },
    url: `${siteUrl}${serviceUrl}`,
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
};
