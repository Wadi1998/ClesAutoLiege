const crypto = require('crypto');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images - Format WebP et AVIF pour performances maximales
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an de cache pour les images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Headers HTTP pour SEO et sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Sécurité
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // Performance et SEO
          {
            key: 'Link',
            value: '<https://cles-auto-liege.be>; rel="canonical"',
          },
        ],
      },
      // Cache optimisé pour les ressources statiques
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fichiers SEO avec cache modéré
      {
        source: '/(robots.txt|sitemap.xml|humans.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },

  // Redirections SEO si nécessaire (éviter le contenu dupliqué)
  async redirects() {
    return [
      // Rediriger www vers non-www (ou l'inverse selon votre préférence)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.cles-auto-liege.be',
          },
        ],
        destination: 'https://cles-auto-liege.be/:path*',
        permanent: true,
      },
    ];
  },

  // Compression Gzip/Brotli
  compress: true,
  
  // Masquer le header X-Powered-By pour la sécurité
  poweredByHeader: false,
  
  // Mode strict React
  reactStrictMode: true,
  
  // Optimisation des performances
  swcMinify: true,
  
  // Optimisations expérimentales
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Optimisations du compilateur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

}

module.exports = nextConfig
