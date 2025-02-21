export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
} 