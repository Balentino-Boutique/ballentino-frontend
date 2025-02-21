'use client';

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from 'framer-motion';
import PreLoader from '@/components/PreLoader';

export default function Home() {
  return (
    <div className="w-full">
      <PreLoader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="text-center z-10 pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.h1 
                className="font-melodrama text-4xl md:text-6xl leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                Elevate Your Style
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl font-light text-white max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                Discover the finest in African luxury fashion
              </motion.p>
              <motion.div 
                className="flex gap-4 mt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.1 }}
              >
                <Link 
                  href="/shop" 
                  className="btn-primary bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300 text-sm font-medium"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/collections" 
                  className="btn-secondary border text-white border-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
                >
                  View Collections
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Centered Image */}
          <motion.div 
            className="relative h-[500px] w-[80%] max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1607629002375-fdbed0be4402"
              alt="Fashion Model"
              fill
              className="object-cover object-center rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Dresses", "Accessories", "Footwear"].map((category) => (
            <div key={category} className="relative h-[400px] group overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-${category.toLowerCase()}`}
                alt={category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="text-white text-2xl hover:underline"
                >
                  {category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-accent">₦{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Join Our Newsletter</h2>
          <p className="mb-8">Stay updated with our latest collections and exclusive offers.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
