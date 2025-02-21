'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['WHAT\'S NEW', 'MEN', 'WOMEN', 'WHO WE ARE'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative group hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-2xl font-melodrama tracking-wider">
              BALENTINO
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/account">
              <UserIcon className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBagIcon className="h-5 w-5" />
              {state.items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                >
                  {state.items.length}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingBagIcon className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/whats-new"
                className="block px-3 py-2 text-base font-medium hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                WHAT'S NEW
              </Link>
              <Link
                href="/men"
                className="block px-3 py-2 text-base font-medium hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                MEN
              </Link>
              <Link
                href="/women"
                className="block px-3 py-2 text-base font-medium hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                WOMEN
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                WHO WE ARE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 