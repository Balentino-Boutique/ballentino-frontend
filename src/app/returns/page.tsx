export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Returns & Exchanges
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Our hassle-free return and exchange policy
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-4">Return Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We accept returns within 14 days of delivery. Items must be unworn, 
                unwashed, and with all original tags attached.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Items must be in original condition</li>
                <li>Original packaging must be intact</li>
                <li>Proof of purchase is required</li>
                <li>Return shipping costs are the responsibility of the customer</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-4">Exchange Process</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                To initiate an exchange, please contact our customer service team with your 
                order number and the item you wish to exchange.
              </p>
              <p>
                Exchanges are subject to stock availability. If your desired item is not in stock, 
                we will process a return instead.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 