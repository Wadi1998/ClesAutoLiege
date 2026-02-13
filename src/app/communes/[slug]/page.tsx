    import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { StructuredData } from '@/components/seo/StructuredData';
import { PhoneButton } from '@/components/shared/PhoneButton';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { getCommuneBySlug, getCommunesByProximity, getAllCommunesSlugs } from '@/lib/data/communes';
import { services } from '@/lib/data/services';
import { generateMetadata as generateSEOMetadata, generateLocalBusinessSchema } from '@/lib/utils/seo';
import { MapPin, Clock, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllCommunesSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const commune = getCommuneBySlug(params.slug);
  if (!commune) return {};

  return generateSEOMetadata({
    title: `Serrurier Auto ${commune.name} | Clés Auto Liège - Dépannage 24/7`,
    description: `${commune.description} Intervention en ${commune.interventionTime}. Toutes marques, devis gratuit. ☎️ 04 93 44 72 05`,
    keywords: [
      `serrurier auto ${commune.name}`,
      `clé voiture ${commune.name}`,
      `ouverture portière ${commune.name}`,
      `dépannage auto ${commune.name}`,
      `reproduction clé ${commune.name}`,
      `serrurerie automobile ${commune.name}`
    ],
  });
}

export default function CommunePage({ params }: Props) {
  const commune = getCommuneBySlug(params.slug);
  if (!commune) return notFound();

  const nearbyCommunes = getCommunesByProximity(params.slug);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <StructuredData data={localBusinessSchema} />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Communes', href: '/#zone-intervention' },
            { label: commune.name, href: `/communes/${params.slug}` }
          ]} />

          {/* Hero Section Commune */}
          <div className="mt-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-orange-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white">
                Serrurier Automobile à {commune.name}
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {commune.description}
            </p>
            
            {/* Badges Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  Disponible 24h/24
                </span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-orange-primary" />
                <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                  Arrivée en {commune.interventionTime}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  {commune.postalCode} {commune.name}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneButton size="lg" animate />
              <WhatsAppButton size="lg" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contenu Principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* À Propos de la Zone */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-primary" />
                  Intervention à {commune.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  {commune.specificInfo}
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">Zone de couverture</h3>
                  <p className="text-gray-700 dark:text-gray-300">{commune.serviceArea}</p>
                </div>
              </div>

              {/* Mes Services à [Commune] */}
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Mes Services de Serrurerie Auto à {commune.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-primary"
                    >
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {service.shortDescription}
                      </p>
                      <span className="text-orange-primary text-sm font-semibold flex items-center gap-1">
                        En savoir plus →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pourquoi me choisir */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Pourquoi me faire confiance à {commune.name} ?
                </h2>
                <div className="space-y-4">
                  {[
                    `Intervention rapide : J'arrive en ${commune.interventionTime} dans la région de ${commune.name}`,
                    'Disponibilité 24h/24 et 7j/7, même les week-ends et jours fériés',
                    'Toutes marques de véhicules prises en charge',
                    'Techniques non destructives : votre véhicule reste intact',
                    'Devis gratuit et transparent par téléphone',
                    'Matériel professionnel de dernière génération',
                    'Paiement après intervention (cash ou Bancontact)'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communes à proximité */}
              {nearbyCommunes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">
                    J'interviens aussi dans les communes proches
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {nearbyCommunes.map((nearby) => (
                      <Link
                        key={nearby.id}
                        href={`/communes/${nearby.slug}`}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                      >
                        <MapPin className="w-8 h-8 text-orange-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-lg mb-1">{nearby.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {nearby.postalCode}
                        </p>
                        <p className="text-xs text-orange-primary font-semibold mt-2">
                          Arrivée en {nearby.interventionTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Urgence */}
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-8 h-8" />
                    <h3 className="font-bold text-xl">Urgence à {commune.name} ?</h3>
                  </div>
                  <p className="mb-6">
                    J'interviens en {commune.interventionTime} dans votre zone. Appelez-moi maintenant !
                  </p>
                  <div className="space-y-3">
                    <PhoneButton size="md" fullWidth animate />
                    <WhatsAppButton size="md" fullWidth />
                  </div>
                </div>

                {/* Info Pratique */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-lg mb-4">Informations pratiques</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Zone d'intervention</p>
                      <p className="text-gray-600 dark:text-gray-400">{commune.serviceArea}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Temps d'arrivée moyen</p>
                      <p className="text-gray-600 dark:text-gray-400">{commune.interventionTime}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Code postal</p>
                      <p className="text-gray-600 dark:text-gray-400">{commune.postalCode}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Disponibilité</p>
                      <p className="text-green-600 dark:text-green-400 font-semibold">24h/24 • 7j/7</p>
                    </div>
                  </div>
                </div>

                {/* Retour */}
                <Link
                  href="/#zone-intervention"
                  className="block text-center bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">
                    ← Voir toutes les communes
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
