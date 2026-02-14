export interface Commune {
  id: string;
  slug: string;
  name: string;
  postalCode: string;
  description: string;
  specificInfo?: string;
  interventionTime: string; // Temps d'intervention moyen
  serviceArea: string; // Zone de service
}

export const communes: Commune[] = [
  {
    id: '1',
    slug: 'liege',
    name: 'Liège',
    postalCode: '4000',
    description: 'Serrurier automobile à Liège centre. Intervention rapide dans tous les quartiers : Outremeuse, Guillemins, Saint-Lambert, Féronstrée, Jonfosse, etc.',
    specificInfo: 'Basé au cœur de Liège, j\'interviens en moins de 15 minutes dans le centre-ville.',
    interventionTime: '10-15 minutes',
    serviceArea: 'Centre-ville et périphérie immédiate'
  },
  {
    id: '2',
    slug: 'herstal',
    name: 'Herstal',
    postalCode: '4040',
    description: 'Serrurier automobile à Herstal. Service de serrurerie auto 24h/24 pour reproduction de clés, ouverture de portière et dépannage d\'urgence.',
    specificInfo: 'Intervention rapide à Herstal, que vous soyez à la zone industrielle, au centre-ville ou dans les quartiers résidentiels.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Herstal et environs immédiats'
  },
  {
    id: '3',
    slug: 'seraing',
    name: 'Seraing',
    postalCode: '4100',
    description: 'Serrurier automobile à Seraing. Dépannage 24h/24 pour tous vos problèmes de clés de voiture : clés perdues, enfermées, cassées.',
    specificInfo: 'Je couvre toute la commune de Seraing : Boncelles, Jemeppe, Ougrée, et tous les quartiers.',
    interventionTime: '15-25 minutes',
    serviceArea: 'Seraing et entités'
  },
  {
    id: '4',
    slug: 'ans',
    name: 'Ans',
    postalCode: '4430',
    description: 'Serrurier automobile à Ans. Expert en reproduction de clés, programmation de clés électroniques et ouverture de véhicules.',
    specificInfo: 'Service rapide à Ans et Alleur. Disponible 24h/24 pour vos urgences de serrurerie automobile.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Ans, Alleur et alentours'
  },
  {
    id: '5',
    slug: 'flemalle',
    name: 'Flémalle',
    postalCode: '4400',
    description: 'Serrurier automobile à Flémalle. Intervention rapide pour ouverture de portière, reproduction de clés et réparation de serrures auto.',
    specificInfo: 'Je dessers Flémalle-Haute, Flémalle-Grande, Mons-lez-Liège et tous les villages de l\'entité.',
    interventionTime: '20-25 minutes',
    serviceArea: 'Flémalle et toutes les entités'
  },
  {
    id: '6',
    slug: 'grace-hollogne',
    name: 'Grâce-Hollogne',
    postalCode: '4460',
    description: 'Serrurier automobile à Grâce-Hollogne. Service 24h/24 près de l\'aéroport de Liège pour tous vos problèmes de clés de voiture.',
    specificInfo: 'Intervention rapide à Grâce-Hollogne, Bierset, Hollogne-aux-Pierres et Velroux. Proche de l\'aéroport.',
    interventionTime: '20-25 minutes',
    serviceArea: 'Grâce-Hollogne et aéroport'
  },
  {
    id: '7',
    slug: 'chaudfontaine',
    name: 'Chaudfontaine',
    postalCode: '4050',
    description: 'Serrurier automobile à Chaudfontaine. Expert en serrurerie auto : clés perdues, ouverture de portière, programmation de clés.',
    specificInfo: 'Service disponible à Chaudfontaine, Vaux-sous-Chèvremont, Beaufays et Embourg.',
    interventionTime: '20-30 minutes',
    serviceArea: 'Chaudfontaine et entités'
  },
  {
    id: '8',
    slug: 'ougree',
    name: 'Ougrée',
    postalCode: '4102',
    description: 'Serrurier automobile à Ougrée. Dépannage urgent pour clés de voiture enfermées, cassées ou perdues. Disponible 24h/24.',
    specificInfo: 'Intervention rapide à Ougrée et dans les quartiers environnants de Seraing.',
    interventionTime: '15-25 minutes',
    serviceArea: 'Ougrée et environs'
  },
  {
    id: '9',
    slug: 'angleur',
    name: 'Angleur',
    postalCode: '4031',
    description: 'Serrurier automobile à Angleur. Service professionnel de reproduction de clés, ouverture de véhicules et réparation de serrures auto.',
    specificInfo: 'Je couvre Angleur, Sart-Tilman et les quartiers de Liège Est.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Angleur et Liège Est'
  },
  {
    id: '10',
    slug: 'bressoux',
    name: 'Bressoux',
    postalCode: '4020',
    description: 'Serrurier automobile à Bressoux. Intervention rapide 24h/24 pour tous vos problèmes de serrurerie automobile.',
    specificInfo: 'Service disponible à Bressoux, Droixhe et les quartiers nord de Liège.',
    interventionTime: '10-15 minutes',
    serviceArea: 'Bressoux et Liège Nord'
  },
  {
    id: '11',
    slug: 'grivegnee',
    name: 'Grivegnée',
    postalCode: '4030',
    description: 'Serrurier automobile à Grivegnée. Expert en duplication de clés, programmation de clés électroniques et dépannage d\'urgence.',
    specificInfo: 'Intervention rapide à Grivegnée et les quartiers est de Liège.',
    interventionTime: '10-15 minutes',
    serviceArea: 'Grivegnée et alentours'
  },
  {
    id: '12',
    slug: 'beyne-heusay',
    name: 'Beyne-Heusay',
    postalCode: '4610',
    description: 'Serrurier automobile à Beyne-Heusay. Service complet de serrurerie auto : clés, serrures, dépannage 24h/24.',
    specificInfo: 'Je dessers Beyne-Heusay, Queue-du-Bois et Bellaire avec des délais d\'intervention courts.',
    interventionTime: '20-25 minutes',
    serviceArea: 'Beyne-Heusay et entités'
  },
  {
    id: '13',
    slug: 'saint-nicolas',
    name: 'Saint-Nicolas',
    postalCode: '4420',
    description: 'Serrurier automobile à Saint-Nicolas. Dépannage urgent et reproduction de clés pour tous types de véhicules.',
    specificInfo: 'Intervention rapide à Saint-Nicolas, Montegnée et Tilleur.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Saint-Nicolas et environs'
  },
  {
    id: '14',
    slug: 'jupille',
    name: 'Jupille',
    postalCode: '4020',
    description: 'Serrurier automobile à Jupille. Service 24h/24 pour ouverture de portière, reproduction de clés et programmation de clés électroniques.',
    specificInfo: 'Intervention rapide à Jupille-sur-Meuse et les quartiers avoisinants.',
    interventionTime: '10-15 minutes',
    serviceArea: 'Jupille et environs'
  },
  {
    id: '15',
    slug: 'wandre',
    name: 'Wandre',
    postalCode: '4020',
    description: 'Serrurier automobile à Wandre. Expert en serrurerie auto disponible 24h/24 pour tous vos problèmes de clés de voiture.',
    specificInfo: 'Service disponible à Wandre, Rocourt et les quartiers nord de Liège.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Wandre et environs'
  },
  {
    id: '16',
    slug: 'vottem',
    name: 'Vottem',
    postalCode: '4041',
    description: 'Serrurier automobile à Vottem. Dépannage rapide 24h/24 pour reproduction de clés, ouverture de véhicules et réparation de serrures auto.',
    specificInfo: 'Intervention rapide à Vottem et les communes environnantes d\'Herstal.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Vottem et environs'
  },
  {
    id: '17',
    slug: 'rocourt',
    name: 'Rocourt',
    postalCode: '4000',
    description: 'Serrurier automobile à Rocourt. Service professionnel de serrurerie auto : clés perdues, ouverture de portière, programmation de clés.',
    specificInfo: 'Je couvre Rocourt et les quartiers périphériques de Liège avec des délais courts.',
    interventionTime: '15-20 minutes',
    serviceArea: 'Rocourt et environs'
  },
  {
    id: '18',
    slug: 'glain',
    name: 'Glain',
    postalCode: '4000',
    description: 'Serrurier automobile à Glain. Intervention rapide pour tous types de dépannage automobile : clés, serrures, ouverture de véhicules.',
    specificInfo: 'Service disponible à Glain et les quartiers ouest de Liège.',
    interventionTime: '10-15 minutes',
    serviceArea: 'Glain et environs'
  }
];

export const getCommuneBySlug = (slug: string): Commune | undefined => {
  return communes.find(commune => commune.slug === slug);
};

export const getAllCommunesSlugs = (): string[] => {
  return communes.map(commune => commune.slug);
};

export const getCommunesByProximity = (currentSlug: string): Commune[] => {
  // Retourne 3 communes proches (à personnaliser selon la géographie réelle)
  const proximityMap: { [key: string]: string[] } = {
    'liege': ['herstal', 'ans', 'grivegnee'],
    'herstal': ['liege', 'saint-nicolas', 'vottem'],
    'seraing': ['ougree', 'flemalle', 'liege'],
    'ans': ['herstal', 'liege', 'saint-nicolas'],
    'flemalle': ['seraing', 'ougree', 'ans'],
    'grace-hollogne': ['ans', 'liege', 'beyne-heusay'],
    'chaudfontaine': ['angleur', 'beyne-heusay', 'liege'],
    'ougree': ['seraing', 'flemalle', 'liege'],
    'angleur': ['liege', 'chaudfontaine', 'grivegnee'],
    'bressoux': ['liege', 'jupille', 'wandre'],
    'grivegnee': ['liege', 'angleur', 'beyne-heusay'],
    'beyne-heusay': ['grivegnee', 'chaudfontaine', 'liege'],
    'saint-nicolas': ['herstal', 'ans', 'liege'],
    'jupille': ['bressoux', 'wandre', 'liege'],
    'wandre': ['bressoux', 'jupille', 'rocourt'],
    'vottem': ['herstal', 'saint-nicolas', 'liege'],
    'rocourt': ['wandre', 'liege', 'glain'],
    'glain': ['liege', 'rocourt', 'ans']
  };

  const nearbySlugs = proximityMap[currentSlug] || [];
  return nearbySlugs
    .map(slug => getCommuneBySlug(slug))
    .filter((commune): commune is Commune => commune !== undefined);
};
