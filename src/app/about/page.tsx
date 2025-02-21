import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Who We Are
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Crafting luxury fashion experiences since 2024
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-melodrama text-accent">Our Story</h2>
            <p className="text-gray-300">
              We are passionate about delivering premium fashion that combines elegance with contemporary style. 
              Our curated collections represent the pinnacle of modern luxury fashion.
            </p>
            <h2 className="text-2xl md:text-3xl font-melodrama text-accent pt-6">Our Vision</h2>
            <p className="text-gray-300">
              To redefine luxury fashion by creating timeless pieces that inspire confidence and elegance in our customers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww"
                alt="Our collection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwZmFzaGlvbiUyMGJyYW5kfGVufDB8fDB8fHww"
                alt="Fashion showcase"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 