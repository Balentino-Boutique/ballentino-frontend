'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const ImageGrid = ({ images, className = "" }: ImageGridProps) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-[3/4] overflow-hidden rounded-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid; 