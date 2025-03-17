'use client';

import Image from "next/image";
import Link from "next/link";
import { getProducts, fallbackProducts } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from 'framer-motion';
import PreLoader from '@/components/PreLoader';
import Hero from '@/components/Hero/Hero';
import ImageGrid from '@/components/ImageGrid/ImageGrid';
import { useRef, useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from "@/types";

const fashionImages = [
  {
    src: "https://images.unsplash.com/photo-1602488243711-ffe80e9ec18e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    alt: "Urban style"
  },
  {
    src: "https://www.zttw.store/cdn/shop/files/IMG_6261.jpg?v=1733756261&width=850",
    alt: "Fashion collection"
  },
  {
    src: "https://www.zttw.store/cdn/shop/files/IMG_6262.jpg?v=1733756249&width=1440",
    alt: "Premium fashion look"
  },
  {
    src: "https://images.unsplash.com/photo-1603208636259-4bf3d6589c63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww",
    alt: "Premium fashion look"
  }
];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { dispatch, showNotification, setIsCartOpen } = useCart();
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const newArrivalsProducts = products.filter(product => product.newArrival);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300 * 4; // Scroll 4 items at a time (300px each)
      const scrollPosition = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount 
        : sliderRef.current.scrollLeft + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="site-wrapper">
      <PreLoader />
      
      <Hero />

      {/* New Arrivals */}
      <section className="py-16 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-melodrama">
              New Arrivals
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
          >
            {newArrivalsProducts.map((product) => (
              <div key={product.id} className="interactive-element group min-w-[300px] w-[300px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:opacity-0"
                    sizes="300px"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <Image
                    src={product.images[1]}
                    alt={`${product.name} alternate view`}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="300px"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  {/* Quick Shop Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-4">
                    {/* Quick Add Instructions */}
                    <p className="text-white text-center font-melodrama mb-2">
                      Select size to add to cart
                    </p>
                    
                    {/* Size Selection */}
                    <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: 'ADD_TO_CART',
                              payload: {
                                product: {
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  images: product.images,
                                  description: '',
                                  category: 'men',
                                  type: 't-shirts',
                                  sizes: ['S', 'M', 'L', 'XL'],
                                  colors: ['black', 'white'],
                                  inStock: true
                                },
                                size: size,
                              }
                            });
                            showNotification(`Added ${product.name} (Size ${size}) to cart`, 'success');
                            setIsCartOpen(true);
                          }}
                          className="w-10 h-10 bg-white text-black font-melodrama 
                            hover:bg-accent hover:text-white transition-colors duration-300 
                            flex items-center justify-center relative group/size"
                        >
                          {size}
                          {/* Tooltip */}
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                            bg-white text-black text-xs py-1 px-2 rounded opacity-0 
                            group-hover/size:opacity-100 whitespace-nowrap pointer-events-none
                            transition-opacity duration-200">
                            Add to cart (Size {size})
                          </span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 mt-2">
                      {/* View Details Button */}
                      <Link 
                        href={`/product/${product.id}`}
                        className="text-white bg-black/50 px-4 py-2 rounded hover:bg-black 
                          transition-colors duration-300 font-melodrama text-sm"
                      >
                        View Full Details →
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="mt-4 space-y-2">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-melodrama group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center">
                    <p className="text-accent font-melodrama">
                      ₦{product.price.toLocaleString()}
                    </p>
                    {/* Color Options */}
                    <div className="flex gap-2">
                      <button className="w-4 h-4 rounded-full bg-black hover:ring-2 ring-offset-2 ring-black transition-all duration-300" />
                      <button className="w-4 h-4 rounded-full bg-gray-400 hover:ring-2 ring-offset-2 ring-black transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-melodrama text-4xl md:text-5xl text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fashionImages.map((image, index) => (
            <div key={index} className="interactive-element group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-melodrama mb-4 text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    {index === 2 ? "Women's Collection" : "Men's Collection"}
                  </h3>
                  <div className="flex items-center space-x-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <Link 
                      href={index === 2 ? "/women" : "/men"}
                      className="inline-flex items-center space-x-2 text-lg font-melodrama text-white hover:text-accent transition-colors"
                    >
                      <span>Shop Now</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >→</motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Styles */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-black text-white">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-melodrama">
          Trending Styles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="relative h-[600px] overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww"
                alt="Men's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 66vw"
                quality={100}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={(e) => {
                  console.error('Error loading image:', e);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-melodrama mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Men's Collection</h3>
                <Link 
                  href="/men"
                  className="inline-flex items-center space-x-2 text-lg font-melodrama transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 hover:text-accent"
                  onError={(e) => {
                    console.error('Error loading link:', e);
                  }}
                >
                  <span>Shop Men</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >→</motion.span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-[600px] overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww"
                alt="Women's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={100}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={(e) => {
                  console.error('Error loading image:', e);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-melodrama mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Women's Collection</h3>
                <Link 
                  href="/women"
                  className="inline-flex items-center space-x-2 text-lg font-melodrama transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 hover:text-accent"
                  onError={(e) => {
                    console.error('Error loading link:', e);
                  }}
                >
                  <span>Shop Women</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >→</motion.span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl mb-6 font-melodrama"
          >
            Join Our Newsletter
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 font-melodrama"
          >
            Stay updated with our latest collections and exclusive offers.
          </motion.p>
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 h-[50px] border border-gray-300 focus:outline-none focus:border-primary transition-all duration-300 font-melodrama"
            />
            <button 
              type="submit" 
              className="btn-primary bg-black text-white h-[50px] px-6 font-melodrama group flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300"
            >
              <span>Subscribe</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </motion.form>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
