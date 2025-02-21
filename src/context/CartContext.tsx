'use client';

import React, { createContext, useContext, useReducer, useState } from 'react';
import { CartItem, Product } from '../types';
import SidebarCart from '@/components/Cart/SidebarCart';
import Notification from '@/components/Notification/Notification';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  showNotification: (message: string, type: 'success' | 'error') => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => 
          item.product.id === action.payload.product.id && 
          item.size === action.payload.size
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.product.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.product.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { product: action.payload.product, quantity: 1, size: action.payload.size }],
        total: state.total + action.payload.product.price,
      };
    }

    case 'REMOVE_FROM_CART': {
      const itemToRemove = state.items.find(
        (item) => 
          item.product.id === action.payload.id && 
          item.size === action.payload.size
      );
      return {
        ...state,
        items: state.items.filter(
          (item) => 
            !(item.product.id === action.payload.id && item.size === action.payload.size)
        ),
        total: state.total - (itemToRemove ? itemToRemove.product.price * itemToRemove.quantity : 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.items.reduce((acc, item) => {
          const quantity = 
            item.product.id === action.payload.id && item.size === action.payload.size
              ? action.payload.quantity 
              : item.quantity;
          return acc + item.product.price * quantity;
        }, 0),
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState({
    message: '',
    type: 'success' as const,
    isVisible: false
  });

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type, isVisible: true });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, isCartOpen, setIsCartOpen, showNotification }}>
      {children}
      <SidebarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 