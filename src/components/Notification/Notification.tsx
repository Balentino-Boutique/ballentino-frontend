'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Notification = ({ message, type, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-24 right-4 z-50"
        >
          <div className={`
            px-6 py-4 rounded-lg shadow-lg font-melodrama
            ${type === 'success' 
              ? 'bg-black text-white border-l-4 border-accent' 
              : 'bg-red-600 text-white border-l-4 border-red-800'}
          `}>
            <div className="flex items-center gap-3">
              {type === 'success' ? (
                <span className="text-2xl text-accent">✓</span>
              ) : (
                <span className="text-2xl">×</span>
              )}
              <div>
                <p className="font-medium">{message}</p>
                {type === 'success' && (
                  <p className="text-sm opacity-90 mt-1">
                    Click the cart icon to view or checkout
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification; 