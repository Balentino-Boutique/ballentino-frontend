import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center mb-8">
          <Image
            src="/images/ballentino.png"
            alt="Ballentino Logo"
            width={100}
            height={100}
            className="mb-2"
          />
          <span className="text-xl font-garamond tracking-wider uppercase">
            Ballentino
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:ml-8">
          <div>
            <h3 className="font-melodrama text-lg mb-4">About Us</h3>
            <p className="text-gray-400">
              Luxury fashion and perfumes for the discerning customer.
            </p>
          </div>
          <div>
            <h3 className="font-melodrama text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-accent">Shop</Link></li>
              <li><Link href="/whats-new" className="hover:text-accent">What's New</Link></li>
              <li><Link href="/shop?type=perfumes" className="hover:text-accent">Perfumes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-melodrama text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-accent">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-accent">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-melodrama text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add your social media icons/links here */}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ballentino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 