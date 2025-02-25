import Image from 'next/image';
import Link from 'next/link';
import { 
  XMarkIcon, 
  PhoneIcon,
  ChatBubbleLeftIcon,
  UserIcon
} from '@heroicons/react/24/outline';

// Update the social icons to use heroicons
const socialIcons = [
  {
    Icon: XMarkIcon,
    href: "https://twitter.com/ballentino",
    label: "Twitter"
  },
  {
    Icon: PhoneIcon,
    href: "https://wa.me/yournumber",
    label: "WhatsApp"
  },
  {
    Icon: ChatBubbleLeftIcon,
    href: "https://instagram.com/ballentino",
    label: "Instagram"
  },
  {
    Icon: UserIcon,
    href: "https://facebook.com/ballentino",
    label: "Facebook"
  }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row items-center mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h3 className="font-melodrama text-lg mb-4">About Ballentino</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Ballentino stands at the intersection of luxury and contemporary fashion. 
              Founded with a vision to redefine modern elegance, we curate collections 
              that blend timeless sophistication with cutting-edge design. Our commitment 
              to quality craftsmanship and sustainable practices ensures that each piece 
              not only looks exceptional but is built to last.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From our signature men's and women's collections to our exclusive perfume 
              line, every Ballentino product tells a story of dedication to excellence 
              and attention to detail. We believe in creating more than just fashion – 
              we create experiences that elevate your personal style.
            </p>
          </div>

          <div>
            <h3 className="font-melodrama text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-gray-400 hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link href="/whats-new" className="text-gray-400 hover:text-accent transition-colors">What's New</Link></li>
              <li><Link href="/shop?category=men" className="text-gray-400 hover:text-accent transition-colors">Men's Collection</Link></li>
              <li><Link href="/shop?category=women" className="text-gray-400 hover:text-accent transition-colors">Women's Collection</Link></li>
              <li><Link href="/shop?type=perfumes" className="text-gray-400 hover:text-accent transition-colors">Perfumes</Link></li>
              <li><Link href="/size-guide" className="text-gray-400 hover:text-accent transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="font-melodrama text-lg mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact Us</Link></li>
                <li><Link href="/shipping" className="text-gray-400 hover:text-accent transition-colors">Shipping Information</Link></li>
                <li><Link href="/returns" className="text-gray-400 hover:text-accent transition-colors">Returns & Exchanges</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-accent transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-melodrama text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <Link 
                    key={label}
                    href={href} 
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  >
                    <span className="w-5 h-5">
                      <Icon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Ballentino. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 