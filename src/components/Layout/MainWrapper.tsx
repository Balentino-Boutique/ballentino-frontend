'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24">
      {children}
    </div>
  );
} 