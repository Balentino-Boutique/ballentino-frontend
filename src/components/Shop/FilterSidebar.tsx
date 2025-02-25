'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FilterState, ProductType, ProductCategory } from '@/types';
import PriceRangeSlider from './PriceRangeSlider';

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }: FilterSidebarProps) {
  // Define categories with correct typing
  const categories: (ProductCategory | 'all')[] = ['all', 'men', 'women'];
  
  // Update the menu items with perfumes
  const menCategories: ProductType[] = [
    't-shirts', 
    'hoodies', 
    'pants', 
    'shoes', 
    'bags', 
    'accessories',
    'perfumes'  // Added perfumes
  ];

  const womenCategories: ProductType[] = [
    'dresses', 
    't-shirts', 
    'pants', 
    'bags', 
    'accessories',
    'perfumes'  // Added perfumes
  ];

  const productTypes: ProductType[] = [
    't-shirts', 'pants', 'hoodies', 'dresses', 'bags', 'accessories', 'shoes', 'perfumes'
  ];

  const colors = ['black', 'white', 'gray', 'brown', 'blue', 'red'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        className={`fixed left-0 top-0 h-full w-80 bg-white z-50 p-6 overflow-y-auto
          md:sticky md:top-24 md:transform-none md:z-0 md:block md:w-64
          ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-melodrama">Filters</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="font-melodrama mb-4">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={filters.category === category}
                  onChange={() => setFilters({ ...filters, category: category })}
                  className="form-radio text-accent"
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Product Type Filter */}
        <div className="mb-8">
          <h3 className="font-melodrama mb-4">Product Type</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={filters.type === 'all'}
                onChange={() => setFilters({ ...filters, type: 'all' })}
                className="form-radio text-accent"
              />
              <span>All Types</span>
            </label>
            {productTypes.map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={filters.type === type}
                  onChange={() => setFilters({ ...filters, type })}
                  className="form-radio text-accent"
                />
                <span className="capitalize">{type.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-8">
          <h3 className="font-melodrama mb-4">Price Range</h3>
          <PriceRangeSlider
            value={filters.priceRange}
            onChange={(range) => setFilters({ ...filters, priceRange: range })}
          />
        </div>

        {/* Color Filter */}
        <div className="mb-8">
          <h3 className="font-melodrama mb-4">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  const newColors = filters.colors.includes(color)
                    ? filters.colors.filter(c => c !== color)
                    : [...filters.colors, color];
                  setFilters({ ...filters, colors: newColors });
                }}
                className={`w-8 h-8 rounded-full border-2 ${
                  filters.colors.includes(color) ? 'border-accent' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-8">
          <h3 className="font-melodrama mb-4">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  const newSizes = filters.sizes.includes(size)
                    ? filters.sizes.filter(s => s !== size)
                    : [...filters.sizes, size];
                  setFilters({ ...filters, sizes: newSizes });
                }}
                className={`w-10 h-10 border ${
                  filters.sizes.includes(size)
                    ? 'bg-black text-white'
                    : 'border-black text-black hover:bg-black hover:text-white'
                } transition-colors`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => setFilters({
            category: 'all',
            type: 'all',
            priceRange: [0, 1000000],
            colors: [],
            sizes: [],
            sortBy: 'newest'
          })}
          className="w-full py-2 border border-black hover:bg-black hover:text-white transition-colors"
        >
          Clear All Filters
        </button>
      </motion.div>
    </>
  );
} 