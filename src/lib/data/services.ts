export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: string;
  keywords: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  relatedServices?: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'reproduction-cles',
    title: 'Reproduction de Clés Automobile',
    shortDescription: 'Duplication de tous types de clés automobiles, y compris les clés à transpondeur et télécommandes.',
    fullDescription: [
      "Vous avez besoin d'une copie de votre clé de voiture ? Nous proposons un service complet de reproduction de clés automobiles pour toutes les marques. Que ce soit une clé classique, une clé à transpondeur ou une télécommande, nous disposons de l'équipement professionnel nécessaire pour créer une copie parfaitement fonctionnelle.",
      "Grâce à notre matériel de pointe, nous pouvons dupliquer même les clés les plus modernes avec puce électronique. Le processus est rapide, fiable et garanti. Pas besoin de vous déplacer chez le concessionnaire et payer des prix exorbitants !",
      "Nous nous déplaçons directement chez vous ou sur votre lieu de travail à Liège et dans toute la région. Vous récupérez votre nouvelle clé en quelques minutes seulement, parfaitement programmée et prête à l'emploi."
    ],
    icon: 'Key',
    keywords: ['reproduction clé voiture Liège', 'dupliquer clé auto', 'clé transpondeur', 'copie clé télécommande', 'duplication clé électronique'],
    process: [
      {
        step: 1,
        title: 'Vous nous appelez',
        description: 'Décrivez-nous votre besoin : marque du véhicule, type de clé. Nous vous donnons un devis immédiat par téléphone.'
      },
      {
        step: 2,
        title: 'Nous intervenons rapidement',
        description: 'Nous nous déplaçons chez vous avec notre matériel professionnel. Intervention en moins de 30 minutes dans la région de Liège.'
      },
      {
        step: 3,
        title: 'Clé dupliquée et programmée',
        description: 'Nous créons votre nouvelle clé sur place et la programmons si nécessaire. Vous repartez avec une copie fonctionnelle garantie.'
      }
    ],
    relatedServices: ['programmation-cles', 'extraction-cles']
  },
  {
    id: '2',
    slug: 'ouverture-portiere',
    title: 'Ouverture de Portière',
    shortDescription: 'Ouverture non destructive de votre véhicule en cas de clés enfermées à l\'intérieur.',
    fullDescription: [
      "Vous avez claqué la portière avec vos clés à l'intérieur ? Pas de panique ! Nous sommes spécialisés dans l'ouverture de portières automobiles sans aucun dommage. Grâce à nos techniques professionnelles et nos outils adaptés, nous ouvrons votre véhicule en quelques minutes.",
      "Contrairement aux méthodes amateur qui risquent d'endommager votre voiture, nous utilisons exclusivement des techniques non destructives approuvées par les professionnels. Votre véhicule reste intact, pas de rayure, pas de casse.",
      "Disponibles 24h/24 et 7j/7, nous intervenons rapidement partout dans la région de Liège. Que vous soyez sur un parking, devant chez vous ou sur l'autoroute, nous venons vous dépanner en urgence."
    ],
    icon: 'DoorOpen',
    keywords: ['ouverture portière voiture Liège', 'clé enfermée', 'déblocage auto', 'ouverture voiture sans clé', 'portière bloquée'],
    process: [
      {
        step: 1,
        title: 'Vous nous appelez',
        description: 'Contactez-nous immédiatement, où que vous soyez. Nous localisons votre position et estimons notre temps d\'arrivée.'
      },
      {
        step: 2,
        title: 'Nous intervenons rapidement',
        description: 'Nous arrivons avec nos outils professionnels en moins de 30 minutes et préparons l\'ouverture de votre véhicule.'
      },
      {
        step: 3,
        title: 'Portière ouverte sans dommage',
        description: 'Nous ouvrons votre véhicule avec une technique non destructive. Vous récupérez vos clés et votre voiture est intacte.'
      }
    ],
    relatedServices: ['depannage-urgence', 'extraction-cles']
  },
  {
    id: '3',
    slug: 'depannage-urgence',
    title: 'Dépannage d\'Urgence 24/7',
    shortDescription: 'Intervention rapide 24h/24 pour tous vos problèmes de serrurerie automobile.',
    fullDescription: [
      "Un problème de serrurerie auto en pleine nuit ? Le week-end ? Un jour férié ? Nous sommes disponibles 24 heures sur 24, 7 jours sur 7 pour intervenir en urgence. Quel que soit votre problème - clés perdues, portière bloquée, clé cassée - nous avons la solution.",
      "Notre service d'urgence couvre toute la région de Liège et ses environs. Nous nous déplaçons rapidement avec tout le matériel nécessaire pour résoudre votre problème sur place. Pas besoin de faire remorquer votre véhicule !",
      "Avec plusieurs années d'expérience et un équipement professionnel de dernière génération, nous traitons tous les cas d'urgence avec réactivité et efficacité. Notre objectif : vous remettre sur la route le plus rapidement possible."
    ],
    icon: 'AlertCircle',
    keywords: ['dépannage serrurerie auto Liège', 'urgence 24h', 'serrurier nuit', 'intervention rapide voiture', 'dépannage weekend'],
    process: [
      {
        step: 1,
        title: 'Appelez en urgence',
        description: 'Contactez-nous 24h/24 par téléphone ou WhatsApp. Nous répondons immédiatement et évaluons votre situation.'
      },
      {
        step: 2,
        title: 'Intervention express',
        description: 'Nous partons immédiatement vers votre position avec notre équipement complet. Arrivée en moins de 30 minutes.'
      },
      {
        step: 3,
        title: 'Problème résolu',
        description: 'Nous résolvons votre problème sur place avec le matériel adapté. Vous repartez rapidement et en toute sécurité.'
      }
    ],
    relatedServices: ['ouverture-portiere', 'reproduction-cles']
  },
  {
    id: '4',
    slug: 'reparation-serrures',
    title: 'Réparation de Serrures',
    shortDescription: 'Réparation et remplacement de serrures de portières et de coffres défectueuses.',
    fullDescription: [
      "Votre serrure de portière ou de coffre est défectueuse ? Elle se bloque, ne ferme plus correctement ou refuse de s'ouvrir ? Nous diagnostiquons et réparons tous types de serrures automobiles, quelle que soit la marque de votre véhicule.",
      "Grâce à notre expertise et nos pièces de qualité, nous réparons ou remplaçons les serrures défaillantes rapidement. Nous travaillons avec des composants adaptés à votre véhicule pour garantir une réparation durable et fiable.",
      "Pas besoin de vous rendre au garage ou chez le concessionnaire. Nous intervenons directement sur place, chez vous ou sur votre lieu de travail à Liège. Vous économisez du temps et de l'argent avec un résultat professionnel garanti."
    ],
    icon: 'Settings',
    keywords: ['réparation serrure voiture', 'changer serrure auto Liège', 'serrure portière bloquée', 'réparation serrure coffre', 'serrure défectueuse'],
    process: [
      {
        step: 1,
        title: 'Diagnostic téléphonique',
        description: 'Décrivez-nous le problème de votre serrure. Nous vous expliquons la réparation nécessaire et le tarif.'
      },
      {
        step: 2,
        title: 'Intervention sur place',
        description: 'Nous venons avec les outils et pièces nécessaires. Nous examinons la serrure et confirmons le diagnostic.'
      },
      {
        step: 3,
        title: 'Réparation complète',
        description: 'Nous réparons ou remplaçons la serrure défectueuse. Votre véhicule fonctionne parfaitement, garanti.'
      }
    ],
    relatedServices: ['depannage-urgence', 'ouverture-portiere']
  },
  {
    id: '5',
    slug: 'programmation-cles',
    title: 'Programmation de Clés Électroniques',
    shortDescription: 'Programmation de clés électroniques et télécommandes pour toutes marques de véhicules.',
    fullDescription: [
      "Les véhicules modernes utilisent des clés électroniques sophistiquées avec transpondeur. Ces clés doivent être programmées pour communiquer avec votre véhicule. Nous proposons un service professionnel de programmation de clés pour toutes les marques automobiles.",
      "Que vous ayez acheté une clé vierge ou que vous souhaitiez ajouter une nouvelle clé à votre véhicule, nous disposons des équipements de diagnostic et de programmation nécessaires. Nous programmons les clés à transpondeur, les clés à puce et les télécommandes.",
      "Notre service est beaucoup plus rapide et économique que celui des concessionnaires. Nous nous déplaçons directement chez vous à Liège avec notre matériel professionnel et programmons votre clé en quelques minutes. Simple, rapide et garanti."
    ],
    icon: 'Cpu',
    keywords: ['programmation clé électronique', 'clé codée', 'télécommande auto', 'programmation transpondeur Liège', 'clé à puce'],
    process: [
      {
        step: 1,
        title: 'Vérification de compatibilité',
        description: 'Vous nous indiquez la marque et le modèle de votre véhicule. Nous confirmons que nous pouvons programmer votre clé.'
      },
      {
        step: 2,
        title: 'Intervention avec matériel pro',
        description: 'Nous nous déplaçons avec notre équipement de diagnostic et de programmation. Nous nous connectons à votre véhicule.'
      },
      {
        step: 3,
        title: 'Clé programmée et testée',
        description: 'Nous programmons votre clé électronique et testons toutes les fonctions. Elle est parfaitement opérationnelle.'
      }
    ],
    relatedServices: ['reproduction-cles', 'reparation-serrures']
  },
  {
    id: '6',
    slug: 'extraction-cles',
    title: 'Extraction de Clés Cassées',
    shortDescription: 'Extraction de clés cassées dans le contacteur ou la serrure sans endommager votre véhicule.',
    fullDescription: [
      "Votre clé s'est cassée dans le contacteur ou la serrure de votre véhicule ? C'est une situation délicate qui nécessite une intervention professionnelle. Nous extrayons les clés cassées sans endommager le mécanisme de votre serrure ou contacteur.",
      "Grâce à nos outils spécialisés et notre savoir-faire, nous retirons le morceau de clé coincé en toute sécurité. Contrairement aux tentatives amateur avec des pinces ou autres outils inadaptés, notre technique préserve l'intégrité de votre serrure.",
      "Après l'extraction, nous pouvons immédiatement vous fabriquer une nouvelle clé sur place. Vous n'avez pas besoin de faire remorquer votre véhicule ou de remplacer toute la serrure. Intervention rapide partout à Liège."
    ],
    icon: 'Wrench',
    keywords: ['clé cassée serrure', 'extraction clé', 'clé coincée Liège', 'clé cassée contacteur', 'retirer clé cassée'],
    process: [
      {
        step: 1,
        title: 'Évaluation de la situation',
        description: 'Vous nous expliquez où la clé est cassée. Nous vous conseillons sur la marche à suivre et vous donnons un prix.'
      },
      {
        step: 2,
        title: 'Extraction professionnelle',
        description: 'Nous venons avec nos outils d\'extraction spécialisés. Nous retirons le morceau de clé sans abîmer la serrure.'
      },
      {
        step: 3,
        title: 'Nouvelle clé sur place',
        description: 'Nous extrayons la clé cassée et vous fabriquons une nouvelle clé immédiatement. Problème résolu définitivement.'
      }
    ],
    relatedServices: ['reproduction-cles', 'reparation-serrures']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getRelatedServices = (currentSlug: string): Service[] => {
  const currentService = getServiceBySlug(currentSlug);
  if (!currentService || !currentService.relatedServices) return [];
  
  return currentService.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined);
};
