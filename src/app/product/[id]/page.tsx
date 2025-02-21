'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { newArrivals } from '@/data/products';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductPage() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch } = useCart();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Find product from your data
  const product = newArrivals.find(p => p.id === params.id);

  if (!product) return <div>Product not found</div>;

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images,
          description: '',
          category: ''
        },
        size: selectedSize,
      }
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300 * 4; // Scroll 4 items at a time
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
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-[600px] overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
               sizes="300px"
              className="object-cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-40 overflow-hidden rounded-lg ${
                  selectedImage === index ? 'ring-2 ring-accent' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                   sizes="300px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-melodrama mb-4">{product.name}</h1>
            <p className="text-2xl text-accent font-melodrama">
              ₦{product.price.toLocaleString()}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-melodrama mb-4">Select Size</h3>
            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border-2 flex items-center justify-center font-melodrama transition-all duration-300
                    ${selectedSize === size 
                      ? 'border-accent bg-accent text-white' 
                      : 'border-black hover:border-accent'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-melodrama mb-4">Select Color</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedColor('black')}
                className={`w-8 h-8 rounded-full bg-black ${
                  selectedColor === 'black' ? 'ring-2 ring-offset-2 ring-black' : ''
                }`}
              />
              <button
                onClick={() => setSelectedColor('gray')}
                className={`w-8 h-8 rounded-full bg-gray-400 ${
                  selectedColor === 'gray' ? 'ring-2 ring-offset-2 ring-black' : ''
                }`}
              />
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-melodrama mb-4">Quantity</h3>
            <div className="flex items-center gap-4 border border-black w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
              >
                -
              </button>
              <span className="font-melodrama w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full bg-black text-white py-4 font-melodrama hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            Add to Cart
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button>

          {/* Product Details */}
          <div className="space-y-4 pt-8 border-t">
            <h3 className="text-lg font-melodrama">Product Details</h3>
            <p className="text-white">
              Elevate your style with our premium collection. Made with the finest materials
              for ultimate comfort and lasting quality.
            </p>
            <ul className="space-y-2 text-white">
              <li>• Premium quality fabric</li>
              <li>• Comfortable fit</li>
              <li>• Easy care instructions</li>
              <li>• Designed for everyday wear</li>
            </ul>
          </div>
        </div>
      </div>

      {/* More Like This Section */}
      <section className="py-16 overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-melodrama">
              Explore More Like This
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
            {newArrivals.map((product) => (
              <div key={product.id} className="interactive-element group min-w-[300px] w-[300px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:opacity-0"
                    sizes="300px"
                    quality={100}
                    priority
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
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  {/* Quick Shop Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-4">
                    {/* Size Selection */}
                    <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className="w-10 h-10 bg-white text-black font-melodrama hover:bg-accent hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button className="bg-accent text-white px-6 py-3 font-melodrama hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 group/btn">
                      Add to Cart
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                    
                    {/* Quick View Button */}
                    <Link 
                      href={`/product/${product.id}`}
                      className="text-white underline-offset-4 hover:underline font-melodrama mt-2"
                    >
                      Quick View
                    </Link>
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
    </div>
  );
} 