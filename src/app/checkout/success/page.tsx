'use client';

import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <CheckCircleIcon className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-3xl font-melodrama mb-4">Order Successful!</h1>
        <p className="text-gray-300 mb-8">
          Thank you for your purchase. We'll send you an email with your order details shortly.
        </p>
        <div className="space-y-4">
          <Link 
            href="/shop" 
            className="block w-full bg-accent py-3 rounded-md font-melodrama"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/" 
            className="block w-full border border-accent text-accent py-3 rounded-md font-melodrama"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 