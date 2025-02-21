'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function CollectionsPage() {
  const collections = [
    {
      title: "Men's Collection",
      image: "https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww",
      link: "/shop?category=men"
    },
    {
      title: "Women's Collection",
      image: "https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww",
      link: "/shop?category=women"
    },
    {
      title: "New Arrivals",
      image: "https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww",
      link: "/shop?newArrival=true"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Our Collections
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Explore our curated collections of premium fashion
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              href={collection.link} 
              key={index}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-melodrama text-white">
                  {collection.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 