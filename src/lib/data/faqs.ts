export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// FAQ Globale (Page d'accueil)
export const globalFAQs: FAQ[] = [
  {
    id: 'g1',
    question: 'Vous intervenez vraiment 24h/24 ?',
    answer: 'Oui, absolument ! Nous sommes disponibles jour et nuit, 7 jours sur 7, weekends et jours fériés inclus. Les urgences de serrurerie automobile ne respectent pas les horaires de bureau, c\'est pourquoi nous restons joignables à toute heure pour vous dépanner rapidement.',
    category: 'general'
  },
  {
    id: 'g2',
    question: 'Combien de temps pour arriver ?',
    answer: 'En moyenne, nous arrivons en moins de 30 minutes dans la région de Liège et ses environs immédiats. Le temps exact dépend de votre localisation et du trafic, mais nous faisons toujours notre maximum pour intervenir le plus rapidement possible.',
    category: 'general'
  },
  {
    id: 'g3',
    question: 'Quelles marques de voitures prenez-vous en charge ?',
    answer: 'Nous prenons en charge toutes les marques automobiles : Audi, BMW, Mercedes, Volkswagen, Renault, Peugeot, Citroën, Ford, Opel, Tesla, et bien d\'autres. Notre équipement professionnel nous permet de travailler sur tous types de véhicules, des plus classiques aux plus récents.',
    category: 'general'
  },
  {
    id: 'g4',
    question: 'Comment se passe le paiement ?',
    answer: 'Le paiement se fait après l\'intervention, une fois que vous êtes satisfait du service. Nous acceptons le cash et le Bancontact. Nous vous donnons le prix exact par téléphone avant notre intervention, pas de surprise ni de frais cachés.',
    category: 'payment'
  },
  {
    id: 'g5',
    question: 'Offrez-vous une garantie sur vos interventions ?',
    answer: 'Oui, toutes nos interventions sont garanties satisfaction. Si vous rencontrez le moindre problème avec une clé que nous avons fabriquée ou une réparation que nous avons effectuée, nous revenons gratuitement pour corriger la situation. Votre tranquillité d\'esprit est notre priorité.',
    category: 'general'
  },
  {
    id: 'g6',
    question: 'Puis-je avoir un devis par téléphone ?',
    answer: 'Absolument ! Appelez-nous et décrivez votre situation : marque du véhicule, type de problème, votre localisation. Nous vous donnons immédiatement un devis clair et transparent par téléphone, sans engagement de votre part.',
    category: 'payment'
  },
  {
    id: 'g7',
    question: 'Que faire si ma clé est cassée dans la serrure ?',
    answer: 'Surtout, ne forcez pas et n\'essayez pas de retirer le morceau avec des pinces ! Cela risque d\'endommager définitivement la serrure. Appelez-nous immédiatement, nous disposons de l\'équipement spécialisé pour extraire les clés cassées sans abîmer votre véhicule.',
    category: 'emergency'
  },
  {
    id: 'g8',
    question: 'Travaillez-vous avec les assurances ?',
    answer: 'Oui, nous pouvons établir une facture détaillée pour votre compagnie d\'assurance si votre contrat couvre ce type de dépannage. N\'hésitez pas à nous le signaler lors de notre premier contact, nous vous fournirons tous les documents nécessaires.',
    category: 'payment'
  }
];

// FAQ par service
export const serviceFAQs: { [key: string]: FAQ[] } = {
  'reproduction-cles': [
    {
      id: 'rc1',
      question: 'Combien coûte une duplication de clé ?',
      answer: 'Le prix varie selon le type de clé (classique, transpondeur, télécommande) et la marque du véhicule. Appelez-nous en nous précisant votre modèle de voiture, nous vous donnerons un tarif exact immédiatement. Nos prix sont généralement 30 à 50% moins chers que chez les concessionnaires.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc2',
      question: 'Pouvez-vous dupliquer une clé transpondeur ?',
      answer: 'Oui, parfaitement ! Nous disposons de tout l\'équipement nécessaire pour dupliquer et programmer les clés à transpondeur (clés avec puce électronique). Nous pouvons créer une copie fonctionnelle même pour les véhicules récents avec système de démarrage électronique.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc3',
      question: 'Faut-il apporter le véhicule ?',
      answer: 'Non, ce n\'est pas nécessaire ! Nous nous déplaçons directement chez vous ou sur votre lieu de travail avec tout notre matériel. Nous fabriquons et programmons la clé sur place. C\'est beaucoup plus pratique pour vous.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc4',
      question: 'Combien de temps pour faire une clé ?',
      answer: 'Une fois sur place, nous fabriquons votre clé en 10 à 20 minutes selon le type. Les clés classiques sont très rapides, les clés à transpondeur nécessitent quelques minutes de programmation supplémentaires. Dans tous les cas, vous repartez avec une clé fonctionnelle le jour même.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc5',
      question: 'Gardez-vous une copie de ma clé ?',
      answer: 'Absolument pas. Nous ne gardons aucune copie ni aucun code de vos clés. Votre sécurité et votre confidentialité sont primordiales. Une fois la clé fabriquée et remise, nous n\'avons aucune trace de votre code.',
      category: 'reproduction-cles'
    }
  ],
  'ouverture-portiere': [
    {
      id: 'op1',
      question: 'Allez-vous abîmer ma voiture ?',
      answer: 'Non, jamais ! Nous utilisons exclusivement des techniques professionnelles non destructives. Notre équipement spécialisé nous permet d\'ouvrir votre véhicule sans aucune rayure, sans casser de vitre ni endommager les joints. Votre voiture reste en parfait état.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op2',
      question: 'Combien de temps pour ouvrir une portière ?',
      answer: 'Une fois sur place, l\'ouverture prend généralement entre 5 et 15 minutes selon le modèle du véhicule et le type de serrure. Certains véhicules récents avec systèmes antivol sophistiqués peuvent prendre un peu plus de temps, mais nous vous tenons informé.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op3',
      question: 'Que faire si mes clés sont dans le coffre ?',
      answer: 'Pas de problème ! Nous pouvons également ouvrir le coffre de votre véhicule avec nos techniques professionnelles. L\'accès au coffre est parfois même plus simple que l\'ouverture d\'une portière. Appelez-nous, nous avons la solution.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op4',
      question: 'Intervenez-vous pour tous types de véhicules ?',
      answer: 'Oui, nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, camionnettes, SUV, véhicules de luxe, etc. Quelle que soit la marque ou le modèle, nous avons l\'expérience et l\'équipement pour ouvrir votre véhicule en toute sécurité.',
      category: 'ouverture-portiere'
    }
  ],
  'depannage-urgence': [
    {
      id: 'du1',
      question: 'Quelle est votre zone d\'intervention en urgence ?',
      answer: 'Nous intervenons dans toute la région de Liège : Liège centre, Herstal, Seraing, Ans, Flémalle, Grâce-Hollogne, Chaudfontaine, et toute la périphérie. Pour les urgences, nous pouvons également nous déplacer un peu plus loin selon les situations.',
      category: 'depannage-urgence'
    },
    {
      id: 'du2',
      question: 'Avez-vous tout le matériel sur place ?',
      answer: 'Oui, notre véhicule d\'intervention est équipé de tout le matériel professionnel nécessaire : outils d\'ouverture, machines à clés, équipement de programmation, pièces de rechange courantes. Nous pouvons résoudre la plupart des problèmes directement sur place.',
      category: 'depannage-urgence'
    },
    {
      id: 'du3',
      question: 'Y a-t-il un supplément pour les interventions de nuit ?',
      answer: 'Pour les interventions entre 20h et 7h, un léger supplément s\'applique pour couvrir la disponibilité 24/7. Mais nous vous annonçons clairement le tarif au téléphone avant de nous déplacer, pas de surprise. En cas d\'urgence, chaque minute compte !',
      category: 'depannage-urgence'
    },
    {
      id: 'du4',
      question: 'Puis-je payer après l\'intervention ?',
      answer: 'Oui, le paiement se fait toujours après l\'intervention, une fois que tout est résolu et que vous êtes satisfait. Nous acceptons le cash et le Bancontact. En urgence, votre priorité est de récupérer l\'accès à votre véhicule, on règle les détails après.',
      category: 'depannage-urgence'
    }
  ],
  'reparation-serrures': [
    {
      id: 'rs1',
      question: 'Comment savoir si ma serrure est réparable ?',
      answer: 'Décrivez-nous les symptômes par téléphone : la serrure se bloque, fait du bruit, ne ferme plus correctement ? Nous pourrons vous dire si c\'est réparable ou s\'il faut remplacer le mécanisme. Dans la majorité des cas, une réparation est possible et plus économique.',
      category: 'reparation-serrures'
    },
    {
      id: 'rs2',
      question: 'Utilisez-vous des pièces d\'origine ?',
      answer: 'Nous utilisons des pièces de qualité équivalente ou supérieure aux pièces d\'origine. Selon les cas et votre budget, nous pouvons également nous procurer des pièces constructeur. Notre objectif est de vous garantir une réparation durable au meilleur rapport qualité-prix.',
      category: 'reparation-serrures'
    },
    {
      id: 'rs3',
      question: 'Combien de temps dure une réparation ?',
      answer: 'Une réparation de serrure prend généralement entre 30 minutes et 1 heure selon la complexité. Les cas simples (lubrification, ajustement) sont très rapides. Les remplacements de mécanisme complet peuvent prendre un peu plus de temps mais restent réalisables le jour même.',
      category: 'reparation-serrures'
    }
  ],
  'programmation-cles': [
    {
      id: 'pc1',
      question: 'Quelles marques de clés programmez-vous ?',
      answer: 'Nous programmons les clés électroniques de toutes les marques : Volkswagen, Audi, BMW, Mercedes, Renault, Peugeot, Citroën, Ford, Opel, Toyota, Nissan, etc. Notre équipement de diagnostic professionnel est compatible avec pratiquement tous les véhicules modernes.',
      category: 'programmation-cles'
    },
    {
      id: 'pc2',
      question: 'Dois-je aller chez le concessionnaire ?',
      answer: 'Non, plus besoin ! Nous pouvons programmer votre clé directement chez vous, c\'est beaucoup plus rapide et économique. Les concessionnaires facturent souvent 2 à 3 fois plus cher et vous obligent à prendre rendez-vous et laisser votre véhicule.',
      category: 'programmation-cles'
    },
    {
      id: 'pc3',
      question: 'La programmation est-elle définitive ?',
      answer: 'Oui, une fois la clé programmée, elle fonctionne de manière permanente avec votre véhicule. La programmation ne s\'efface pas et ne nécessite pas de "recharge". Votre clé reste fonctionnelle tant que la pile de la télécommande est bonne.',
      category: 'programmation-cles'
    }
  ],
  'extraction-cles': [
    {
      id: 'ec1',
      question: 'Ma serrure sera-t-elle endommagée ?',
      answer: 'Non, nous utilisons des outils d\'extraction spécialisés qui permettent de retirer le morceau de clé sans abîmer le mécanisme de la serrure. C\'est précisément pour éviter les dommages qu\'il est important de faire appel à un professionnel plutôt que de forcer avec des outils inadaptés.',
      category: 'extraction-cles'
    },
    {
      id: 'ec2',
      question: 'Que faire si ma clé est cassée dans le contacteur ?',
      answer: 'Ne touchez à rien et ne tentez pas de démarrer ! Appelez-nous immédiatement. Nous disposons des outils spécifiques pour extraire la clé du contacteur sans endommager le mécanisme de démarrage. Forcer pourrait causer des dégâts importants et coûteux.',
      category: 'extraction-cles'
    },
    {
      id: 'ec3',
      question: 'Pouvez-vous la remplacer immédiatement ?',
      answer: 'Oui ! Une fois la clé cassée extraite, nous pouvons vous fabriquer une nouvelle clé sur place immédiatement. Vous n\'avez pas besoin de faire remorquer votre véhicule ni d\'attendre plusieurs jours. Nous résolvons tout le problème en une seule intervention.',
      category: 'extraction-cles'
    }
  ]
};

export const getFAQsByCategory = (category: string): FAQ[] => {
  return serviceFAQs[category] || [];
};

export const getAllFAQs = (): FAQ[] => {
  const allServiceFAQs = Object.values(serviceFAQs).flat();
  return [...globalFAQs, ...allServiceFAQs];
};
