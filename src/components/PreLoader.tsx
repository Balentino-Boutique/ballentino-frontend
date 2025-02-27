"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  const letters = "Ballentino".split("");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/ballentino.png"
          alt="Ballentino Logo"
          width={220}
          height={220}
          className="animate-pulse"
          priority
        />
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-4xl md:text-6xl text-white font-garamond uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
