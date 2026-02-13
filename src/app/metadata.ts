/**
 * Metadata centralisé pour le site Clef Auto Liège
 * Utilisé pour générer les metadata SEO de manière cohérente
 */

export const siteMetadata = {
  title: 'Clef Auto Liège | Serrurier Automobile 24/7 - Intervention Rapide',
  description: 'Expert en serrurerie automobile à Liège. Reproduction clés, ouverture portière, dépannage 24h/24. Intervention rapide dans toute la région. ☎️ 04 93 44 72 05',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be',
  siteName: 'Clef Auto Liège',
  locale: 'fr_BE',
  type: 'website',
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '04 93 44 72 05',
  phoneRaw: process.env.NEXT_PUBLIC_PHONE || '0493447205',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '32493447205',
  slogan: 'Votre partenaire de confiance à Liège - Intervention 24/7',
  
  // Keywords SEO principaux
  keywords: [
    'serrurier auto Liège',
    'serrurerie automobile Liège',
    'clé voiture Liège',
    'dépannage auto Liège',
    'ouverture portière Liège',
    'reproduction clé voiture',
    'clé transpondeur',
    'serrurier 24/7',
    'dépannage urgence auto',
    'programmation clé électronique'
  ],
  
  // Social media
  social: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '32493447205'}`,
  },
  
  // Business info
  business: {
    name: 'Clef Auto Liège',
    city: 'Liège',
    region: 'Wallonie',
    country: 'Belgium',
    countryCode: 'BE',
    postalCode: '4000',
    latitude: '50.6326',
    longitude: '5.5797',
    openingHours: '24/7',
    priceRange: '€€',
    areasServed: [
      'Liège',
      'Herstal',
      'Seraing',
      'Ans',
      'Flémalle',
      'Grâce-Hollogne',
      'Chaudfontaine',
      'Ougrée',
      'Angleur',
      'Beyne-Heusay',
      'Saint-Nicolas',
      'Bressoux',
      'Grivegnée'
    ]
  }
};

export default siteMetadata;
