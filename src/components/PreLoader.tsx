'use client';

import { motion } from 'framer-motion';

const PreLoader = () => {
  const letters = "BALENTINO".split("");
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-4xl md:text-6xl text-white font-melodrama"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default PreLoader; 