'use client';

import { products } from '@/data/products';
import ProductGrid from '@/components/Shop/ProductGrid';

export default function WhatsNewPage() {
  const newProducts = products.filter(product => product.newArrival);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          What's New
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover our latest arrivals and trending pieces from our newest collections.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid products={newProducts} />
      </div>
    </div>
  );
} 