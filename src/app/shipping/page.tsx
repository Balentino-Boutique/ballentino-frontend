export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Shipping Information
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Everything you need to know about our shipping process
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-4">Delivery Options</h2>
            <div className="space-y-4 text-gray-300">
              <div className="border border-gray-800 p-4 rounded-lg">
                <h3 className="font-melodrama mb-2">Standard Shipping</h3>
                <p>5-7 business days • ₦2,500</p>
              </div>
              <div className="border border-gray-800 p-4 rounded-lg">
                <h3 className="font-melodrama mb-2">Express Shipping</h3>
                <p>2-3 business days • ₦5,000</p>
              </div>
              <div className="border border-gray-800 p-4 rounded-lg">
                <h3 className="font-melodrama mb-2">Next Day Delivery</h3>
                <p>Next business day • ₦8,000</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-4">Shipping Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Orders are processed and shipped Monday through Friday, excluding holidays. 
                Please note that orders placed after 2 PM WAT will be processed the next business day.
              </p>
              <p>
                All orders are shipped with tracking information, which will be sent to your email 
                once your order is dispatched.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 