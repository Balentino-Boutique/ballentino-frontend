'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import SearchBar from '@/components/Search/SearchBar';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'men' | 'women' | null>(null);
  const { setIsCartOpen, state } = useCart();

  const categories = {
    men: {
      clothing: [
        { name: 'T-Shirts & Polo Shirts', href: '/shop?category=men&type=t-shirts' },
        { name: 'Hoodies & Sweatshirts', href: '/shop?category=men&type=hoodies' },
        { name: 'Pants & Trousers', href: '/shop?category=men&type=pants' },
        { name: 'Jackets', href: '/shop?category=men&type=jackets' },
      ],
      shoes: [
        { name: 'Sneakers', href: '/shop?category=men&type=shoes' },
        { name: 'Loafers & Lace-up Shoes', href: '/shop?category=men&type=shoes' },
      ],
      accessories: [
        { name: 'Belts', href: '/shop?category=men&type=accessories' },
        { name: 'Wallets & Card Holders', href: '/shop?category=men&type=accessories' },
        { name: 'Sunglasses', href: '/shop?category=men&type=accessories' },
      ],
      bags: [
        { name: 'All Bags', href: '/shop?category=men&type=bags' },
      ],
    },
    women: {
      clothing: [
        { name: 'Dresses', href: '/shop?category=women&type=dresses' },
        { name: 'T-Shirts', href: '/shop?category=women&type=t-shirts' },
        { name: 'Pants', href: '/shop?category=women&type=pants' },
      ],
      accessories: [
        { name: 'Jewelry', href: '/shop?category=women&type=accessories' },
        { name: 'Scarves', href: '/shop?category=women&type=accessories' },
        { name: 'Sunglasses', href: '/shop?category=women&type=accessories' },
      ],
      bags: [
        { name: 'All Bags', href: '/shop?category=women&type=bags' },
      ],
    },
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile Left - Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/whats-new" className="hover:text-accent transition-colors">
              WHAT'S NEW
            </Link>
            
            {/* Men's Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('men')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>MEN</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'men' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-[800px] bg-white text-black shadow-xl grid grid-cols-4 gap-8 p-8"
                  >
                    <div>
                      <Link 
                        href="/shop?category=men" 
                        className="block font-melodrama text-xl mb-6 hover:text-accent"
                      >
                        All Men's
                      </Link>
                      <h3 className="font-melodrama mb-4">CLOTHING</h3>
                      <ul className="space-y-2">
                        {categories.men.clothing.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-melodrama mb-4">SHOES</h3>
                      <ul className="space-y-2">
                        {categories.men.shoes.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-melodrama mb-4">ACCESSORIES</h3>
                      <ul className="space-y-2">
                        {categories.men.accessories.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-melodrama mb-4">BAGS</h3>
                      <ul className="space-y-2">
                        {categories.men.bags.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Women's Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('women')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>WOMEN</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'women' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-[800px] bg-white text-black shadow-xl grid grid-cols-4 gap-8 p-8"
                  >
                    <div>
                      <Link 
                        href="/shop?category=women" 
                        className="block font-melodrama text-xl mb-6 hover:text-accent"
                      >
                        All Women's
                      </Link>
                      <h3 className="font-melodrama mb-4">CLOTHING</h3>
                      <ul className="space-y-2">
                        {categories.women.clothing.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-melodrama mb-4">ACCESSORIES</h3>
                      <ul className="space-y-2">
                        {categories.women.accessories.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-melodrama mb-4">BAGS</h3>
                      <ul className="space-y-2">
                        {categories.women.bags.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="hover:text-accent">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/shop?type=perfumes" className="hover:text-accent transition-colors">
              PERFUMES
            </Link>
          </div>

          {/* Center - Brand Name */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="text-xl font-garamond tracking-wider">
              BALLENTINO
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <Link href="/account" className="hidden md:block">
              <UserIcon className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:text-accent transition-colors"
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Search Bar */}
              <div className="mb-6">
                <SearchBar />
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                <Link 
                  href="/whats-new" 
                  className="block text-lg font-melodrama hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WHAT'S NEW
                </Link>

                {/* Mobile Men's Section */}
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'men' ? null : 'men')}
                    className="flex items-center justify-between w-full text-lg font-melodrama"
                  >
                    <span>MEN</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${activeDropdown === 'men' ? 'rotate-180' : ''}`}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-3"
                      >
                        {Object.entries(categories.men).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h3 className="font-melodrama text-accent">{category.toUpperCase()}</h3>
                            <div className="space-y-2 pl-4">
                              {items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-gray-300 hover:text-accent transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Women's Section */}
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'women' ? null : 'women')}
                    className="flex items-center justify-between w-full text-lg font-melodrama"
                  >
                    <span>WOMEN</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${activeDropdown === 'women' ? 'rotate-180' : ''}`}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-3"
                      >
                        {Object.entries(categories.women).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h3 className="font-melodrama text-accent">{category.toUpperCase()}</h3>
                            <div className="space-y-2 pl-4">
                              {items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-gray-300 hover:text-accent transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/shop?type=perfumes" 
                  className="block text-lg font-melodrama hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PERFUMES
                </Link>

                <Link 
                  href="/account" 
                  className="block text-lg font-melodrama hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ACCOUNT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 