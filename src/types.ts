export type Language = 'ru' | 'ka' | 'en';

export type ProductCategory = 'all' | 'dried_fruits' | 'fruit_teas' | 'gift_sets';

export interface Product {
  id: string;
  name: {
    ru: string;
    ka: string;
    en: string;
  };
  georgianName: string; // Original Georgian script name (e.g. კარალოკი, ჩირი)
  category: 'dried_fruits' | 'fruit_teas' | 'gift_sets';
  price: number; // in GEL (₾)
  weight: string; // e.g. "250 г", "100 г"
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
  flavorNotes: {
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
