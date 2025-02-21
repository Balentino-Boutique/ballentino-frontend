import { Product } from '../types';

// Single consolidated products array
export const products: Product[] = [
  {
    id: 'new-1',
    name: 'Urban Street Style',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Modern urban streetwear for the fashion-forward',
    category: 'men',
    type: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'white'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-2',
    name: 'Modern Elegance',
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Elegant modern fashion piece',
    category: 'women',
    type: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['black', 'gray'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-3',
    name: 'Premium Collection',
    price: 63000,
    images: [
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ],
    description: 'Premium luxury streetwear collection',
    category: 'men',
    type: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'gray'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-4',
    name: 'Signature Series',
    price: 58000,
    images: [
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      'https://plus.unsplash.com/premium_photo-1713821676452-5f13dcda6744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Signature collection for the bold and stylish',
    category: 'women',
    type: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['black', 'white'],
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'new-5',
    name: 'Classic Edition',
    price: 49000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Timeless classic pieces for any wardrobe',
    category: 'men',
    type: 'pants',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'brown'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-6',
    name: 'Limited Collection',
    price: 75000,
    images: [
      'https://images.unsplash.com/photo-1657364891013-8324e4db9dc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ],
    description: 'Limited edition designer pieces',
    category: 'women',
    type: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['gold', 'silver'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-7',
    name: 'Winter Collection',
    price: 68000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ],
    description: 'Warm and stylish winter wear',
    category: 'men',
    type: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'gray'],
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'new-8',
    name: 'Urban Luxe',
    price: 55000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Luxury urban streetwear collection',
    category: 'men',
    type: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'white'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-9',
    name: 'Designer Series',
    price: 82000,
    images: [
      'https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1713821676452-5f13dcda6744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Designer collection for the fashion-forward',
    category: 'women',
    type: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['black', 'red'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'new-10',
    name: 'Premium Edition',
    price: 71000,
    images: [
      'https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1669688173849-dea83ce86284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    ],
    description: 'Premium edition luxury wear',
    category: 'men',
    type: 'shoes',
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['black', 'brown'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'p-1',
    name: 'Leather Weekend Bag',
    price: 95000,
    images: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww'
    ],
    description: 'Premium leather weekend bag for the modern traveler',
    category: 'men',
    type: 'bags',
    sizes: ['ONE SIZE'],
    colors: ['brown', 'black'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-2',
    name: 'Classic Chronograph Watch',
    price: 150000,
    images: [
      'https://images.unsplash.com/photo-1622434641406-a158123450f9',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9'
    ],
    description: 'Elegant chronograph watch with leather strap',
    category: 'men',
    type: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['silver', 'gold'],
    inStock: false,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-3',
    name: 'Designer Tote Bag',
    price: 78000,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e'
    ],
    description: 'Spacious designer tote bag for everyday use',
    category: 'women',
    type: 'bags',
    sizes: ['ONE SIZE'],
    colors: ['black', 'beige'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-4',
    name: 'Pearl Necklace Set',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338'
    ],
    description: 'Elegant pearl necklace and earring set',
    category: 'women',
    type: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['pearl', 'gold'],
    inStock: true,
    featured: false,
    newArrival: false
  },
  {
    id: 'p-5',
    name: 'Premium Leather Belt',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1631160246898-58192f971b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYXRoZXIlMjBiZWx0fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1631160246898-58192f971b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYXRoZXIlMjBiZWx0fGVufDB8fDB8fHww'
    ],
    description: 'Premium leather belt with classic buckle',
    category: 'men',
    type: 'accessories',
    sizes: ['32', '34', '36', '38', '40'],
    colors: ['brown', 'black'],
    inStock: true,
    featured: false,
    newArrival: false
  },
  {
    id: 'p-6',
    name: 'Designer Clutch',
    price: 62000,
    images: [
      'https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWduZXIlMjBjbHV0Y2h8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3'
    ],
    description: 'Elegant evening clutch with chain strap',
    category: 'women',
    type: 'bags',
    sizes: ['ONE SIZE'],
    colors: ['gold', 'silver'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-7',
    name: 'Leather Loafers',
    price: 89000,
    images: [
      'https://plus.unsplash.com/premium_photo-1705352059915-971c8c90624e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvYWZlcnN8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1705352059915-971c8c90624e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvYWZlcnN8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Classic leather loafers for the modern gentleman',
    category: 'men',
    type: 'shoes',
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['black', 'brown'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-8',
    name: 'Designer Sunglasses',
    price: 42000,
    images: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4'
    ],
    description: 'Luxury designer sunglasses',
    category: 'men',
    type: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['black', 'gold'],
    inStock: true,
    featured: false,
    newArrival: false
  },
  {
    id: 'p-9',
    name: 'Evening Gown',
    price: 125000,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8'
    ],
    description: 'Elegant evening gown for special occasions',
    category: 'women',
    type: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['black', 'red'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'p-10',
    name: 'Silk Scarf',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e',
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e'
    ],
    description: 'Luxury silk scarf with designer print',
    category: 'women',
    type: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['multicolor'],
    inStock: true,
    featured: false,
    newArrival: false
  },
  // {
  //   id: 'p-7',
  //   name: 'Smart Watch',
  //   price: 185000,
  //   images: [
  //     'https://images.unsplash.com/photo-1617043786394-ae546534f0f7',
  //     'https://images.unsplash.com/photo-1616928231139-96aca73c1766'
  //   ],
  //   description: 'Premium smartwatch with health features',
  //   category: 'men',
  //   type: 'accessories',
  //   sizes: ['ONE SIZE'],
  //   colors: ['black', 'silver'],
  //   inStock: false,
  //   featured: true,
  //   newArrival: false
  // }
]; 