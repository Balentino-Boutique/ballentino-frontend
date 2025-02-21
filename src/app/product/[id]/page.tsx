'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { newArrivals } from '@/data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch } = useCart();

  // Find product from your data
  const product = newArrivals.find(p => p.id === params.id);

  if (!product) return <div>Product not found</div>;

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
      }
    });
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
              className="object-cover"
              quality={100}
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
            <p className="text-gray-600">
              Elevate your style with our premium collection. Made with the finest materials
              for ultimate comfort and lasting quality.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Premium quality fabric</li>
              <li>• Comfortable fit</li>
              <li>• Easy care instructions</li>
              <li>• Designed for everyday wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 