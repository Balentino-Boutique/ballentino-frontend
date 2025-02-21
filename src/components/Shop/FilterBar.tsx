'use client';

import { FilterState, ProductType } from '@/types';
import PriceRangeSlider from './PriceRangeSlider';

interface FilterBarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

const productTypes: ProductType[] = [
  't-shirts', 'pants', 'hoodies', 'dresses', 'bags', 'accessories', 'shoes'
];

const colors = ['black', 'white', 'gray', 'brown', 'blue', 'red'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="py-4 flex flex-wrap gap-6 items-center text-white">
      {/* Category Filter */}
      <div className="flex gap-4">
        {['all', 'men', 'women'].map((category) => (
          <button
            key={category}
            onClick={() => setFilters({ ...filters, category })}
            className={`px-4 py-2 rounded-full border transition-colors ${
              filters.category === category
                ? 'bg-white text-black border-white'
                : 'border-gray-700 hover:border-white'
            }`}
          >
            <span className="capitalize">{category}</span>
          </button>
        ))}
      </div>

      {/* Type Filter */}
      <div className="flex gap-2 flex-wrap">
        {productTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilters({ ...filters, type })}
            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
              filters.type === type
                ? 'bg-white text-black border-white'
                : 'border-gray-700 hover:border-white'
            }`}
          >
            {type.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Size Filter */}
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => {
              const newSizes = filters.sizes.includes(size)
                ? filters.sizes.filter(s => s !== size)
                : [...filters.sizes, size];
              setFilters({ ...filters, sizes: newSizes });
            }}
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm ${
              filters.sizes.includes(size)
                ? 'bg-white text-black border-white'
                : 'border-gray-700 hover:border-white'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Color Filter */}
      <div className="flex gap-2">
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
              filters.colors.includes(color) ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Price Range */}
      <div className="w-64">
        <PriceRangeSlider
          value={filters.priceRange}
          onChange={(range) => setFilters({ ...filters, priceRange: range })}
        />
      </div>
    </div>
  );
} 