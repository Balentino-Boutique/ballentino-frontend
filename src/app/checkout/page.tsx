'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type CheckoutStep = 'details' | 'shipping' | 'payment' | 'review';

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state: cartState, dispatch, showNotification } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('details');
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [paymentType, setPaymentType] = useState<'transfer' | 'card'>('transfer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  const steps = [
    { id: 'details', name: 'Customer Details' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'payment', name: 'Payment' },
    { id: 'review', name: 'Review' }
  ];

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('shipping');
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleOrderComplete = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Create form data to send to backend
      const formData = new FormData();
      
      // Add customer details
      formData.append('email', customerDetails.email);
      formData.append('first_name', customerDetails.firstName);
      formData.append('last_name', customerDetails.lastName);
      formData.append('payment_type', paymentType);
      
      // Add shipping details as JSON
      const shippingDetails = {
        address: customerDetails.address,
        city: customerDetails.city,
        state: customerDetails.state,
        zipCode: customerDetails.zipCode
      };
      formData.append('shipping', JSON.stringify(shippingDetails));
      
      // Add products
      cartState.items.forEach((item, index) => {
        formData.append(`product[${index}][product_id]`, item.product.id);
        formData.append(`product[${index}][product_name]`, item.product.name);
        formData.append(`product[${index}][quantity]`, item.quantity.toString());
        formData.append(`product[${index}][price]`, item.product.price.toString());
      });
      
      // Add receipt file if payment type is transfer
      if (paymentType === 'transfer' && receiptFile) {
        formData.append('receipt', receiptFile);
      }
      
      // Send to backend
      const response = await fetch('https://prod.ballentinostore.com/orders', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
      
      // Clear cart and redirect to success page
      dispatch({ type: 'CLEAR_CART' });
      router.push('/checkout/success');
    } catch (error) {
      console.error('Error creating order:', error);
      showNotification('There was an error processing your order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalAmount = cartState.items.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );

  // Update input styling
  const inputStyle = "w-full bg-gray-900 border border-gray-800 rounded-md px-3 md:px-4 py-2 text-white font-melodrama text-sm md:text-base focus:outline-none focus:border-accent";

  // Update button styling
  const buttonStyle = "w-full bg-white text-black py-2.5 md:py-3 rounded-md font-melodrama text-sm md:text-base hover:bg-gray-100 transition-colors";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Progress Steps - Two lines on mobile */}
        <div className="mb-8 md:mb-12">
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full text-sm md:text-base
                  ${currentStep === step.id ? 'bg-accent' : 'bg-gray-800'}
                `}>
                  {index + 1}
                </div>
                <span className="ml-2 font-melodrama text-sm md:text-base">{step.name}</span>
                {index < steps.length - 1 && index % 2 !== 1 && (
                  <div className="hidden md:block w-16 h-[1px] bg-gray-800 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Stack on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {/* Order Summary - Not sticky */}
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
            <h2 className="text-lg md:text-xl font-melodrama mb-4 md:mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartState.items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-3 md:gap-4">
                  <div className="relative w-20 h-28 md:w-24 md:h-32">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                      quality={100}
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-melodrama text-base md:text-lg">{item.product.name}</h3>
                    <div className="text-gray-300 space-y-1 mt-2 text-sm md:text-base">
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p className="text-accent font-melodrama">₦{item.product.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 mt-4 md:mt-6 pt-4 md:pt-6 text-sm md:text-base">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₦{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₦2,500</span>
              </div>
              <div className="flex justify-between font-melodrama text-base md:text-lg mt-4">
                <span>Total</span>
                <span>₦{(totalAmount + 2500).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-8">
            {currentStep === 'details' && (
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-melodrama mb-4 md:mb-6">Customer Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className={inputStyle}
                    value={customerDetails.firstName}
                    onChange={(e) => setCustomerDetails({...customerDetails, firstName: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className={inputStyle}
                    value={customerDetails.lastName}
                    onChange={(e) => setCustomerDetails({...customerDetails, lastName: e.target.value})}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className={inputStyle}
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className={inputStyle}
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                />
                <button type="submit" className={buttonStyle}>
                  Continue to Shipping
                </button>
              </form>
            )}

            {currentStep === 'shipping' && (
              <form onSubmit={handleShippingSubmit} className="space-y-4">
                <h2 className="text-2xl font-melodrama mb-6">Shipping Address</h2>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className={inputStyle}
                  value={customerDetails.address}
                  onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className={inputStyle}
                    value={customerDetails.city}
                    onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    required
                    className={inputStyle}
                    value={customerDetails.state}
                    onChange={(e) => setCustomerDetails({...customerDetails, state: e.target.value})}
                  />
                </div>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  required
                  className={inputStyle}
                  value={customerDetails.zipCode}
                  onChange={(e) => setCustomerDetails({...customerDetails, zipCode: e.target.value})}
                />
                <button type="submit" className={buttonStyle}>
                  Continue to Payment
                </button>
              </form>
            )}

            {currentStep === 'payment' && (
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <h2 className="text-2xl font-melodrama mb-6">Payment</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-melodrama mb-3">Payment Method</h3>
                    <div className="flex flex-col space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentType"
                          value="transfer"
                          checked={paymentType === 'transfer'}
                          onChange={() => setPaymentType('transfer')}
                          className="form-radio h-5 w-5 text-accent"
                        />
                        <span>Bank Transfer</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentType"
                          value="card"
                          checked={paymentType === 'card'}
                          onChange={() => setPaymentType('card')}
                          className="form-radio h-5 w-5 text-accent"
                        />
                        <span>Card Payment</span>
                      </label>
                    </div>
                  </div>
                  
                  {paymentType === 'transfer' && (
                    <div className="space-y-3 bg-gray-900 p-4 rounded-md">
                      <h4 className="font-melodrama">Bank Transfer Details</h4>
                      <p className="text-sm text-gray-300">
                        Please transfer the total amount to the following account:
                      </p>
                      <div className="text-sm space-y-1">
                        <p><span className="text-gray-400">Bank:</span> First Bank</p>
                        <p><span className="text-gray-400">Account Name:</span> Ballentino Store</p>
                        <p><span className="text-gray-400">Account Number:</span> 1234567890</p>
                        <p><span className="text-gray-400">Amount:</span> ₦{(totalAmount + 2500).toLocaleString()}</p>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm mb-2">Upload Payment Receipt</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          required
                          className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-melodrama file:bg-gray-800 file:text-white hover:file:bg-gray-700"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <button type="submit" className={buttonStyle}>
                  {paymentType === 'transfer' ? 'Continue to Review' : 'Proceed to Payment Gateway'}
                </button>
              </form>
            )}

            {currentStep === 'review' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-melodrama mb-6">Order Review</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="font-melodrama mb-2">Customer Details</h3>
                    <p>{customerDetails.firstName} {customerDetails.lastName}</p>
                    <p>{customerDetails.email}</p>
                    <p>{customerDetails.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-melodrama mb-2">Shipping Address</h3>
                    <p>{customerDetails.address}</p>
                    <p>{customerDetails.city}, {customerDetails.state} {customerDetails.zipCode}</p>
                  </div>
                  <div>
                    <h3 className="font-melodrama mb-2">Payment Method</h3>
                    <p>{paymentType === 'transfer' ? 'Bank Transfer' : 'Card Payment'}</p>
                    {paymentType === 'transfer' && receiptFile && (
                      <p className="text-sm mt-1">Receipt uploaded: {receiptFile.name}</p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={handleOrderComplete}
                  disabled={isSubmitting}
                  className={`${buttonStyle} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Order'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 