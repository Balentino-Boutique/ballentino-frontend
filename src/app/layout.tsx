import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import MainWrapper from "@/components/Layout/MainWrapper";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const melodrama = localFont({
  src: [
    {
      path: '../fonts/MelodramaMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/MelodramaSemibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-melodrama',
});

const whisper = localFont({
  src: '../fonts/WhisperRegular.ttf',
  variable: '--font-whisper',
});

export const metadata: Metadata = {
  title: "Balentino | Luxury Fashion & Accessories",
  description: "Discover luxury fashion, accessories and more at Balentino. Shop the latest collections of premium quality clothing and accessories.",
  keywords: "Balentino, luxury fashion, designer clothing, accessories, Nigerian fashion",
  openGraph: {
    title: "Balentino | Luxury Fashion & Accessories",
    description: "Discover luxury fashion, accessories and more at Balentino",
    type: "website",
    locale: "en_US",
    siteName: "Balentino",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${melodrama.variable} ${whisper.variable}`}>
        <CartProvider>
          <Navbar />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
