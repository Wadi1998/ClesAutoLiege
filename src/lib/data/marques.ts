export interface Marque {
  id: string;
  name: string;
  logo?: string;
  alt: string;
}

export const marques: Marque[] = [
  { id: '1', name: 'Audi', alt: 'Service serrurerie Audi Liège' },
  { id: '2', name: 'BMW', alt: 'Service serrurerie BMW Liège' },
  { id: '3', name: 'Mercedes-Benz', alt: 'Service serrurerie Mercedes Liège' },
  { id: '4', name: 'Volkswagen', alt: 'Service serrurerie Volkswagen Liège' },
  { id: '5', name: 'Renault', alt: 'Service serrurerie Renault Liège' },
  { id: '6', name: 'Peugeot', alt: 'Service serrurerie Peugeot Liège' },
  { id: '7', name: 'Citroën', alt: 'Service serrurerie Citroën Liège' },
  { id: '8', name: 'Ford', alt: 'Service serrurerie Ford Liège' },
  { id: '9', name: 'Opel', alt: 'Service serrurerie Opel Liège' },
  { id: '10', name: 'Fiat', alt: 'Service serrurerie Fiat Liège' },
  { id: '11', name: 'Toyota', alt: 'Service serrurerie Toyota Liège' },
  { id: '12', name: 'Honda', alt: 'Service serrurerie Honda Liège' },
  { id: '13', name: 'Nissan', alt: 'Service serrurerie Nissan Liège' },
  { id: '14', name: 'Hyundai', alt: 'Service serrurerie Hyundai Liège' },
  { id: '15', name: 'Kia', alt: 'Service serrurerie Kia Liège' },
  { id: '16', name: 'Seat', alt: 'Service serrurerie Seat Liège' },
  { id: '17', name: 'Skoda', alt: 'Service serrurerie Skoda Liège' },
  { id: '18', name: 'Volvo', alt: 'Service serrurerie Volvo Liège' },
  { id: '19', name: 'Porsche', alt: 'Service serrurerie Porsche Liège' },
  { id: '20', name: 'Tesla', alt: 'Service serrurerie Tesla Liège' },
  { id: '21', name: 'Mini', alt: 'Service serrurerie Mini Liège' },
  { id: '22', name: 'Alfa Romeo', alt: 'Service serrurerie Alfa Romeo Liège' },
  { id: '23', name: 'Jeep', alt: 'Service serrurerie Jeep Liège' },
  { id: '24', name: 'Mazda', alt: 'Service serrurerie Mazda Liège' },
  { id: '25', name: 'Mitsubishi', alt: 'Service serrurerie Mitsubishi Liège' },
  { id: '26', name: 'Suzuki', alt: 'Service serrurerie Suzuki Liège' },
  { id: '27', name: 'Dacia', alt: 'Service serrurerie Dacia Liège' },
  { id: '28', name: 'Land Rover', alt: 'Service serrurerie Land Rover Liège' },
  { id: '29', name: 'Jaguar', alt: 'Service serrurerie Jaguar Liège' },
  { id: '30', name: 'Bentley', alt: 'Service serrurerie Bentley Liège' },
  { id: '31', name: 'Aston Martin', alt: 'Service serrurerie Aston Martin Liège' },
  { id: '32', name: 'Ferrari', alt: 'Service serrurerie Ferrari Liège' },
  { id: '33', name: 'Lamborghini', alt: 'Service serrurerie Lamborghini Liège' },
  { id: '34', name: 'Maserati', alt: 'Service serrurerie Maserati Liège' },
  { id: '35', name: 'Lexus', alt: 'Service serrurerie Lexus Liège' },
  { id: '36', name: 'Infiniti', alt: 'Service serrurerie Infiniti Liège' },
  { id: '37', name: 'Subaru', alt: 'Service serrurerie Subaru Liège' },
  { id: '38', name: 'Chevrolet', alt: 'Service serrurerie Chevrolet Liège' },
  { id: '39', name: 'Dodge', alt: 'Service serrurerie Dodge Liège' },
  { id: '40', name: 'Chrysler', alt: 'Service serrurerie Chrysler Liège' },
  { id: '41', name: 'Cadillac', alt: 'Service serrurerie Cadillac Liège' },
  { id: '42', name: 'Smart', alt: 'Service serrurerie Smart Liège' },
  { id: '43', name: 'DS Automobiles', alt: 'Service serrurerie DS Liège' },
  { id: '44', name: 'Lancia', alt: 'Service serrurerie Lancia Liège' },
  { id: '45', name: 'Saab', alt: 'Service serrurerie Saab Liège' },
  { id: '46', name: 'Isuzu', alt: 'Service serrurerie Isuzu Liège' },
  { id: '47', name: 'SsangYong', alt: 'Service serrurerie SsangYong Liège' },
  { id: '48', name: 'MG', alt: 'Service serrurerie MG Liège' },
  { id: '49', name: 'Cupra', alt: 'Service serrurerie Cupra Liège' },
  { id: '50', name: 'Genesis', alt: 'Service serrurerie Genesis Liège' },
];

// Fonction pour obtenir les marques en ordre aléatoire pour le carousel
export const getShuffledMarques = (): Marque[] => {
  return [...marques].sort(() => Math.random() - 0.5);
};

// Fonction pour dupliquer les marques pour un carousel infini
export const getCarouselMarques = (): Marque[] => {
  // Dupliquer 3 fois pour assurer la continuité du carousel
  return [...marques, ...marques, ...marques];
};
