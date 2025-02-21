import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-melodrama text-2xl mb-4">Balentino</h3>
          <p className="text-gray-300 text-sm">Redefining luxury fashion with timeless elegance and contemporary style.</p>
        </div>
        
        <div>
          <h4 className="font-melodrama text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-melodrama text-lg mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/shipping">Shipping Information</Link></li>
            <li><Link href="/returns">Returns & Exchanges</Link></li>
            <li><Link href="/size-guide">Size Guide</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-melodrama text-lg mb-4">Connect With Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="https://instagram.com/balentino">Instagram</Link></li>
            <li><Link href="https://facebook.com/balentino">Facebook</Link></li>
            <li><Link href="https://twitter.com/balentino">Twitter</Link></li>
            <li><Link href="https://pinterest.com/balentino">Pinterest</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/20">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Balentino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 