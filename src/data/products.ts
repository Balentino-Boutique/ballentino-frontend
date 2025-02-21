import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black Dress',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c957',
    ],
    description: 'Elegant black dress perfect for any occasion',
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Ankara Print Jumpsuit',
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ed',
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ee',
    ],
    description: 'Modern African print jumpsuit with contemporary styling',
    category: 'jumpsuits',
    sizes: ['S', 'M', 'L'],
  },
  // Add more products as needed
]; 