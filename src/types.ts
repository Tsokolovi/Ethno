export type Language = 'ru' | 'ka' | 'en';

export type ProductCategory = 'all' | 'dried_fruits' | 'fruit_teas' | 'gift_sets';

export interface Product {
  id: string;
  name: {
    ru: string;
    ka: string;
    en: string;
  };
  georgianName: string;
  category: Exclude<ProductCategory, 'all'>; // гарантирует соответствие с ProductCategory
  price: number; // in GEL (₾)
  weight: string;
  image: string;
  badge?: {
    ru: string;
    ka: string;
    en: string;
  };
  region: {
    ru: string;
    ka: string;
    en: string;
  };
  elevation: string;
  description: {
    ru: string;
    ka: string;
    en: string;
  };
  ingredients: {
    ru: string;
    ka: string;
    en: string;
  };
  flavorNotes?: { // Сделано опциональным (?), чтобы не ломать сборку при отсутствии нот
    ru: string[];
    ka: string[];
    en: string[];
  };
  ecoTags: string[];
  harvestSeason: string;
  brewingGuide?: {
    temp: string;
    time: string;
    ratio: string;
  };
  nutritionalInfo?: {
    calories: number;
    sugarAdded: string;
    naturalCarbs: string;
    fiber: string;
  };
}

export interface RegionInfo {
  id: string;
  name: {
    ru: string;
    ka: string;
    en: string;
  };
  georgianTitle: string;
  elevation: string;
  climate: {
    ru: string;
    ka: string;
    en: string;
  };
  keyHarvests: {
    ru: string;
    ka: string;
    en: string;
  }[];
  description: {
    ru: string;
    ka: string;
    en: string;
  };
  sunDays: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
