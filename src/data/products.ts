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

export const newArrivals = [
  {
    id: 'new-1',
    name: 'Urban Street Style',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-2',
    name: 'Modern Elegance',
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-3',
    name: 'Premium Collection',
    price: 63000,
    images: [
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ]
  },
  {
    id: 'new-4',
    name: 'Signature Series',
    price: 58000,
    images: [
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      'https://plus.unsplash.com/premium_photo-1713821676452-5f13dcda6744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-5',
    name: 'Classic Edition',
    price: 49000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-6',
    name: 'Limited Collection',
    price: 75000,
    images: [
      'https://images.unsplash.com/photo-1657364891013-8324e4db9dc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ]
  },
  {
    id: 'new-7',
    name: 'Winter Collection',
    price: 68000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ]
  },
  {
    id: 'new-8',
    name: 'Urban Luxe',
    price: 55000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-9',
    name: 'Designer Series',
    price: 82000,
    images: [
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1713821676452-5f13dcda6744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ]
  },
  {
    id: 'new-10',
    name: 'Premium Edition',
    price: 71000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ]
  }
]; 