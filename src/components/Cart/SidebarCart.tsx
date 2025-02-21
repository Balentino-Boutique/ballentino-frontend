"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

interface SidebarCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarCart = ({ isOpen, onClose }: SidebarCartProps) => {
  const { state, dispatch } = useCart();

  const removeItem = (id: string, size: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, size },
    });
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, size, quantity },
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-melodrama text-black">
                  Shopping Cart
                </h2>
                <button
                  onClick={onClose}
                  className="text-2xl text-black hover:text-accent transition-colors"
                >
                  ×
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-600 font-melodrama">
                    Your cart is empty
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {state.items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="flex gap-4"
                      >
                        <div className="relative w-24 h-32">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            quality={100}
                            sizes="300px"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-melodrama text-black">
                            {item.product.name}
                          </h3>
                          <p className="text-accent font-melodrama">
                            ₦{item.product.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            Size: {item.size}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="w-8 h-8 border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="w-8 h-8 border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="text-xl text-black hover:text-accent transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 border-t bg-gray-50">
                    <div className="flex justify-between mb-4">
                      <span className="font-melodrama text-black">Total</span>
                      <span className="font-melodrama text-black">
                        ₦{state.total.toLocaleString()}
                      </span>
                    </div>
                    <Link
                      href="/checkout"
                      className="flex items-center justify-center w-full bg-black text-white py-3 rounded-md font-melodrama hover:bg-gray-800 transition-colors duration-300"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarCart;
