export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: 'intervention' | 'vehicule' | 'materiel' | 'resultat';
  alt: string;
  placeholder: string; // Description pour placeholder jusqu'à ajout de vraies photos
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Ouverture de portière Mercedes',
    description: 'Intervention rapide sur Mercedes classe C - Ouverture non destructive',
    category: 'intervention',
    alt: 'Ouverture portière Mercedes à Liège',
    placeholder: '🚗 Photo: Intervention ouverture portière Mercedes sans dommage'
  },
  {
    id: '2',
    title: 'Reproduction clé BMW',
    description: 'Duplication et programmation de clé transpondeur BMW',
    category: 'resultat',
    alt: 'Clé BMW programmée à Liège',
    placeholder: '🔑 Photo: Clé BMW neuve avec télécommande programmée'
  },
  {
    id: '3',
    title: 'Matériel professionnel',
    description: 'Équipement de diagnostic et programmation dernière génération',
    category: 'materiel',
    alt: 'Matériel serrurier auto professionnel',
    placeholder: '🔧 Photo: Équipement professionnel de programmation'
  },
  {
    id: '4',
    title: 'Intervention Audi',
    description: 'Dépannage sur Audi A4 - Clés perdues, nouvelle clé fabriquée sur place',
    category: 'intervention',
    alt: 'Intervention Audi à Herstal',
    placeholder: '🚙 Photo: Intervention sur Audi A4 à Herstal'
  },
  {
    id: '5',
    title: 'Extraction clé cassée',
    description: 'Extraction de clé cassée dans serrure Renault',
    category: 'intervention',
    alt: 'Extraction clé cassée Renault',
    placeholder: '🔨 Photo: Extraction clé cassée sans dommage'
  },
  {
    id: '6',
    title: 'Clé transpondeur VW',
    description: 'Clé codée Volkswagen Golf - Programmation réussie',
    category: 'resultat',
    alt: 'Clé Volkswagen programmée',
    placeholder: '🔑 Photo: Clé VW avec transpondeur programmé'
  },
  {
    id: '7',
    title: 'Véhicule premium',
    description: 'Intervention sur véhicule de luxe à Liège centre',
    category: 'vehicule',
    alt: 'Service serrurerie voiture de luxe',
    placeholder: '🏎️ Photo: Intervention sur véhicule premium'
  },
  {
    id: '8',
    title: 'Outils spécialisés',
    description: 'Malette complète d\'outils pour toutes marques',
    category: 'materiel',
    alt: 'Outils serrurier automobile',
    placeholder: '🧰 Photo: Malette d\'outils professionnels'
  },
  {
    id: '9',
    title: 'Peugeot 208',
    description: 'Ouverture portière Peugeot 208 à Seraing',
    category: 'vehicule',
    alt: 'Dépannage Peugeot 208',
    placeholder: '🚗 Photo: Peugeot 208 après intervention'
  },
  {
    id: '10',
    title: 'Réparation serrure',
    description: 'Réparation de mécanisme de serrure défectueux',
    category: 'intervention',
    alt: 'Réparation serrure voiture',
    placeholder: '🔧 Photo: Réparation mécanisme de serrure'
  },
  {
    id: '11',
    title: 'Tesla Model 3',
    description: 'Programmation clé Tesla - Technologie de pointe',
    category: 'vehicule',
    alt: 'Service Tesla à Liège',
    placeholder: '⚡ Photo: Intervention Tesla Model 3'
  },
  {
    id: '12',
    title: 'Clés multiples',
    description: 'Collection de clés reproduites - Toutes marques',
    category: 'resultat',
    alt: 'Reproduction clés toutes marques',
    placeholder: '🔑 Photo: Diverses clés reproduites avec succès'
  }
];

export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
  return galleryImages.filter(img => img.category === category);
};

export const getFeaturedImages = (limit: number = 6): GalleryImage[] => {
  return galleryImages.slice(0, limit);
};

export const categories = [
  { value: 'tous', label: 'Tous', count: galleryImages.length },
  { value: 'intervention', label: 'Interventions', count: getImagesByCategory('intervention').length },
  { value: 'vehicule', label: 'Véhicules', count: getImagesByCategory('vehicule').length },
  { value: 'materiel', label: 'Matériel', count: getImagesByCategory('materiel').length },
  { value: 'resultat', label: 'Résultats', count: getImagesByCategory('resultat').length },
];
