import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyContactBar } from '@/components/shared/StickyContactBar';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { SmartFloatingCTA } from '@/components/shared/SmartFloatingCTA';
import { BackToTopButton } from '@/components/shared/BackToTopButton';
import { generateMetadata } from '@/lib/utils/seo';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Optimisation des polices avec display swap et subsets optimaux
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true, // Optimisation du layout shift
});

const poppins = Poppins({ 
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true, // Optimisation du layout shift
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cles-auto-liege.be'),
  ...generateMetadata({
    title: 'Clés Auto Liège | Serrurier Automobile 24/7 - Intervention Rapide',
    description: 'Expert en serrurerie automobile à Liège. Reproduction clés, ouverture portière, dépannage 24h/24. Intervention rapide dans toute la région. ☎️ 04 93 44 72 05',
    keywords: ['serrurier auto Liège', 'clé voiture Liège', 'ouverture portière Liège', 'dépannage auto Liège', 'serrurerie automobile Liège', 'clé transpondeur Liège', 'serrurier 24/7 Liège', 'reproduction clé voiture Liège', 'programmation clé électronique Liège'],
  }),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Clés Auto Liège',
    startupImage: [
      '/images/LogoOK.png',
    ],
  },
  icons: {
    icon: [
      { url: '/images/LogoOK.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/LogoOK.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/LogoOK.png',
  },
  other: {
    'author': 'Clés Auto Liège',
    'reply-to': 'contact@cles-auto-liege.be',
    'link': 'https://cles-auto-liege.be/humans.txt',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-BE" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Préchargement des ressources critiques - Optimisé avec fetchpriority */}
        <link rel="preload" href="/images/LogoOK.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/mascotte.webp" as="image" type="image/webp" fetchPriority="high" />
        
        {/* Theme colors pour PWA et navigateurs */}
        <meta name="theme-color" content="#FF6B35" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)" />
        
        {/* Humans.txt et Security.txt */}
        <link type="text/plain" rel="author" href="/humans.txt" />
        
        {/* Optimisation du viewport pour mobile - Amélioré */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        
        {/* Resource hints pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://vercel-insights.com" />
        
        {/* Google Site Verification (à configurer) */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        
        {/* Balise géolocalisation pour SEO local */}
        <meta name="geo.region" content="BE-WLG" />
        <meta name="geo.placename" content="Liège" />
        <meta name="geo.position" content="50.6326;5.5797" />
        <meta name="ICBM" content="50.6326, 5.5797" />
        
        
        {/* Apple Mobile Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Clés Auto Liège" />
        <link rel="apple-touch-icon" href="/images/LogoOK.png" />
        
        {/* Microsoft Meta Tags */}
        <meta name="msapplication-TileColor" content="#FF6B35" />
        <meta name="msapplication-TileImage" content="/images/LogoOK.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        
        {/* Alternate languages (hreflang) */}
        <link rel="alternate" hrefLang="fr-BE" href="https://cles-auto-liege.be" />
        <link rel="alternate" hrefLang="fr" href="https://cles-auto-liege.be" />
        <link rel="alternate" hrefLang="x-default" href="https://cles-auto-liege.be" />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen pt-24 sm:pt-[92px]" id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <StickyContactBar />
        <SmartFloatingCTA />
        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
