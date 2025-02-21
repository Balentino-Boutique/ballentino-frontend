'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen pt-24"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
} 