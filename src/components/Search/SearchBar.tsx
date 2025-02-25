'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

type SearchSuggestion = {
  type: 'product' | 'category' | 'type';
  text: string;
  url: string;
};

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const getSuggestions = async () => {
      if (searchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      const searchTermLower = searchTerm.toLowerCase();
      const newSuggestions: SearchSuggestion[] = [];

      // Search through products
      const matchingProducts = products
        .filter(product => 
          product.name.toLowerCase().includes(searchTermLower) ||
          product.type.toLowerCase().includes(searchTermLower)
        )
        .slice(0, 3)
        .map(product => ({
          type: 'product' as const,
          text: product.name,
          url: `/product/${product.id}`
        }));

      // Add matching categories
      const categories = ['men', 'women'];
      const matchingCategories = categories
        .filter(category => category.includes(searchTermLower))
        .map(category => ({
          type: 'category' as const,
          text: `${category.charAt(0).toUpperCase()}${category.slice(1)}'s Collection`,
          url: `/shop?category=${category}`
        }));

      // Add matching product types
      const types = ['t-shirts', 'hoodies', 'pants', 'dresses', 'accessories'];
      const matchingTypes = types
        .filter(type => type.includes(searchTermLower))
        .map(type => ({
          type: 'type' as const,
          text: `${type.charAt(0).toUpperCase()}${type.slice(1)}`,
          url: `/shop?type=${type}`
        }));

      newSuggestions.push(...matchingProducts, ...matchingCategories, ...matchingTypes);
      setSuggestions(newSuggestions);
      setIsLoading(false);
    };

    const debounceTimer = setTimeout(getSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSearch = (suggestion?: SearchSuggestion) => {
    if (suggestion) {
      router.push(suggestion.url);
    } else if (searchTerm) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:text-accent transition-colors"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-screen max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search products..."
                  className="w-full bg-transparent focus:outline-none font-garamond text-lg"
                  autoFocus
                />
              </div>

              <div className="mt-4">
                {isLoading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                  </div>
                ) : suggestions.length > 0 ? (
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(suggestion)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg flex items-center gap-3"
                      >
                        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                        <span className="font-garamond">{suggestion.text}</span>
                      </button>
                    ))}
                  </div>
                ) : searchTerm.length > 0 ? (
                  <p className="text-center text-gray-500 py-4 font-garamond">
                    No results found
                  </p>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 