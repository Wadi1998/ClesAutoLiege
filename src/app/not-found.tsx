import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold font-heading text-orange-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6">
          Page introuvable
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" icon={Home}>
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/#services">
            <Button variant="outline" size="lg" icon={ArrowLeft}>
              Voir les services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
