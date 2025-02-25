export type ProductCategory = 'men' | 'women';
export type ProductType = 
  | 't-shirts' 
  | 'pants' 
  | 'hoodies' 
  | 'dresses' 
  | 'bags' 
  | 'accessories'
  | 'shoes'
  | 'perfumes';

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: ProductCategory;
  type: ProductType;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
}

export interface FilterState {
  category: ProductCategory | 'all';
  type: ProductType | 'all';
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'popular';
  newArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

// Update CartAction types to match our implementation
export type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: string; quantity: number } }
  | { type: 'CLEAR_CART' }; 