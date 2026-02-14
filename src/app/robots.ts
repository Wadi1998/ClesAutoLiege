import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/*.webp$', '/*.jpg$', '/*.png$', '/logo.png', '/mascotte.webp'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: ['Yandex', 'Baiduspider'],
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Bloquer les mauvais bots qui consomment des ressources
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'BLEXBot', 'DataForSeoBot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
