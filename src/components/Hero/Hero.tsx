'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
        <div className="relative h-full">
          <Image
            src="https://media.vogue.co.uk/photos/6540f18f4a337c624df26bf8/16:9/w_1500,h_844,c_limit/000186680003_RGB.jpg"
            alt="Fashion model"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
          />
        </div>
        <div className="relative h-full hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=1000&auto=format&fit=crop&q=100"
            alt="Fashion model"
            fill
            className="object-cover"
            sizes="50vw"
            quality={100}
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-melodrama text-6xl md:text-8xl text-white mb-6"
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Discover luxury streetwear that defines the new era of fashion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link 
              href="/shop"
              className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              href="/collections"
              className="border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              View Collections
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 