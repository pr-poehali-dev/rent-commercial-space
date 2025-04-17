
export type PropertyType = 'office' | 'retail' | 'other';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  area: number; // площадь в м²
  price: number; // цена за м² в месяц
  address: string;
  metroStation?: string;
  walkingDistance?: number; // время до метро в минутах
  description: string;
  features: string[];
  images: string[];
}

export interface FilterOptions {
  type?: PropertyType;
  minArea?: number;
  maxArea?: number;
  minPrice?: number;
  maxPrice?: number;
  metroStation?: string;
}
