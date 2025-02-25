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
import { motion, AnimatePresence } from 'framer-motion';

// Add type for any
type AnyEvent = MouseEvent | TouchEvent;

// Add at the top with other type imports
type CategoryItem = {
  name: string;
  type: 'all' | ProductType;
};

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

  const [activeDropdown, setActiveDropdown] = useState<'men' | 'women' | null>(null);

  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Popular', value: 'popular' }
  ];

  // Update the categories definition
  const categories: Record<'men' | 'women', CategoryItem[]> = {
    men: [
      { name: 'All Men\'s', type: 'all' },
      { name: 'T-Shirts & Polo Shirts', type: 't-shirts' },
      { name: 'Hoodies & Sweatshirts', type: 'hoodies' },
      { name: 'Pants & Trousers', type: 'pants' },
      { name: 'Shoes', type: 'shoes' },
      { name: 'Accessories', type: 'accessories' },
      { name: 'Bags', type: 'bags' },
      { name: 'Perfumes', type: 'perfumes' },
    ],
    women: [
      { name: 'All Women\'s', type: 'all' },
      { name: 'Dresses', type: 'dresses' },
      { name: 'T-Shirts', type: 't-shirts' },
      { name: 'Pants', type: 'pants' },
      { name: 'Accessories', type: 'accessories' },
      { name: 'Bags', type: 'bags' },
      { name: 'Perfumes', type: 'perfumes' },
    ]
  };

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

  const clearFilters = () => {
    setFilters({
      category: 'all',
      type: 'all',
      priceRange: [0, 1000000],
      colors: [],
      sizes: [],
      sortBy: 'newest'
    });
    setActiveDropdown(null);
  };

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

      {/* Updated Filter Bar */}
      <div className="sticky top-16 md:top-20 bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            {/* Categories with Dropdowns */}
            <div className="flex gap-6 items-center">
              <button
                onClick={() => {
                  setFilters({ ...filters, category: 'all', type: 'all' });
                  setActiveDropdown(null);
                }}
                className={`text-base md:text-lg font-melodrama transition-colors ${
                  filters.category === 'all' ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                All Products
              </button>

              {/* Men's Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'men' ? null : 'men')}
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown('men')}
                  onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                  className={`text-base md:text-lg font-melodrama transition-colors flex items-center gap-2 ${
                    filters.category === 'men' ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  Men
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'men' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'men' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-md overflow-hidden z-50"
                      onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown('men')}
                      onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {categories.men.map((item) => (
                          <button
                            key={item.type}
                            onClick={() => {
                              setFilters({ ...filters, category: 'men', type: item.type });
                              setActiveDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                              filters.category === 'men' && filters.type === item.type ? 'text-accent' : ''
                            }`}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Women's Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'women' ? null : 'women')}
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown('women')}
                  onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                  className={`text-base md:text-lg font-melodrama transition-colors flex items-center gap-2 ${
                    filters.category === 'women' ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  Women
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'women' ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'women' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-md overflow-hidden z-50"
                      onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown('women')}
                      onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {categories.women.map((item) => (
                          <button
                            key={item.type}
                            onClick={() => {
                              setFilters({ ...filters, category: 'women', type: item.type });
                              setActiveDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                              filters.category === 'women' && filters.type === item.type ? 'text-accent' : ''
                            }`}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Clear Filters Button */}
              {(filters.category !== 'all' || filters.type !== 'all') && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={clearFilters}
                  className="text-sm px-3 py-1 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors"
                >
                  Clear Filters
                </motion.button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-melodrama text-sm md:text-base">
                {filteredProducts.length} products
              </span>
              <CustomDropdown
                value={filters.sortBy}
                onChange={(value) => setFilters(prev => ({ ...prev, sortBy: value as any }))}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
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