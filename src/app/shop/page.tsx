'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/Shop/ProductGrid';
import FilterBar from '@/components/Shop/FilterBar';
import CustomDropdown from '@/components/Shop/CustomDropdown';
import PriceRangeSlider from '@/components/Shop/PriceRangeSlider';
import { FilterState, Product, ProductCategory, ProductType } from '@/types';
import { products } from '@/data/products';
import { FunnelIcon } from '@heroicons/react/24/outline';

// Add type for any
type AnyEvent = MouseEvent | TouchEvent;

// Create a component for the shop content
function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    type: 'all',
    priceRange: [0, 1000000],
    colors: [],
    sizes: [],
    sortBy: 'newest'
  });

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Popular', value: 'popular' }
  ];

  // Define the menu items with exact ProductType values
  const menCategories: ProductType[] = ['t-shirts', 'hoodies', 'pants', 'shoes', 'bags', 'accessories'];
  const womenCategories: ProductType[] = ['dresses', 't-shirts', 'pants', 'bags', 'accessories'];

  // Inside your component, filter products based on current filters
  const filteredProducts = products.filter(product => {
    if (filters.newArrival && !product.newArrival) return false;
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.type !== 'all' && product.type !== filters.type) return false;
    return true;
  });

  useEffect(() => {
    const category = searchParams.get('category');
    const newArrival = searchParams.get('newArrival');
    
    if (category && (category === 'men' || category === 'women')) {
      setFilters(prev => ({ ...prev, category: category as ProductCategory }));
    }
    
    if (newArrival === 'true') {
      setFilters(prev => ({ ...prev, newArrival: true }));
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - More responsive padding */}
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          {filters.category === 'all' ? 'All Products' : 
            filters.category === 'men' ? 'Men\'s Collection' : 'Women\'s Collection'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover our curated collection of premium fashion pieces designed for style and comfort.
        </p>
      </div>

      {/* Filter Bar - Mobile optimized */}
      <div className="sticky top-16 md:top-20 bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            {/* Categories - Scrollable on mobile */}
            <div className="flex gap-6 overflow-x-auto hide-scrollbar whitespace-nowrap pb-2 md:pb-0">
              <button
                onClick={() => setFilters({ ...filters, category: 'all' })}
                className={`text-base md:text-lg font-melodrama transition-colors flex-shrink-0 ${
                  filters.category === 'all' ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setFilters({ ...filters, category: 'men' })}
                className={`text-base md:text-lg font-melodrama transition-colors flex-shrink-0 ${
                  filters.category === 'men' ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                Men
              </button>
              <button
                onClick={() => setFilters({ ...filters, category: 'women' })}
                className={`text-base md:text-lg font-melodrama transition-colors flex-shrink-0 ${
                  filters.category === 'women' ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setFilters({ ...filters, newArrival: !filters.newArrival })}
                className={`text-base md:text-lg font-melodrama transition-colors flex-shrink-0 ${
                  filters.newArrival ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                New Arrivals
              </button>
            </div>

            {/* Sort and Filter - Stack on mobile */}
            <div className="flex items-center justify-between md:justify-end gap-4">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-gray-300 font-melodrama text-sm md:text-base">
                  {filteredProducts.length} products
                </span>
                <CustomDropdown
                  value={filters.sortBy}
                  onChange={(value) => setFilters(prev => ({ ...prev, sortBy: value as any }))}
                  options={sortOptions}
                />
              </div>
              
              <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 border border-gray-700 rounded-md hover:border-white transition-colors font-melodrama text-sm md:text-base"
              >
                <FunnelIcon className="w-4 h-4" />
                <span className="hidden md:inline">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Menu - Full screen on mobile */}
      {isFilterMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60]">
          <div className="absolute right-0 top-0 h-full w-full md:w-80 bg-black border-l border-gray-800 p-4 md:p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-melodrama">Filters</h3>
              <button 
                onClick={() => setIsFilterMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Filter Categories - Better spacing on mobile */}
            <div className="space-y-8">
              {/* Men's Categories */}
              <div className="mb-6">
                <h4 className="font-melodrama mb-4">Men</h4>
                <div className="space-y-3">
                  {menCategories.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFilters({ ...filters, category: 'men', type });
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-2 py-2 hover:text-accent transition-colors"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Women's Categories */}
              <div className="mb-6">
                <h4 className="font-melodrama mb-4">Women</h4>
                <div className="space-y-3">
                  {womenCategories.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFilters({ ...filters, category: 'women', type });
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-2 py-2 hover:text-accent transition-colors"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-melodrama mb-4">Price Range</h4>
                <PriceRangeSlider
                  value={filters.priceRange}
                  onChange={(range) => setFilters({ ...filters, priceRange: range })}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid - Responsive grid */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

// Main shop page component with Suspense
export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-melodrama">Loading...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
} 