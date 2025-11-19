export interface Property {
  id: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  carSpaces: number;
  description: string;
  imageUrl: string;
  category: string; // e.g., "Best 4 Bedroom Sale"
  soldDate: string;
}

export interface MarketStat {
  label: string;
  value: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}