import type { Metadata } from "next";
import { Poppins, EB_Garamond } from "next/font/google";
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

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-garamond',
});

const whisper = localFont({
  src: '../fonts/WhisperRegular.ttf',
  variable: '--font-whisper',
});

export const metadata: Metadata = {
  title: "Ballentino | Luxury Fashion & Accessories",
  description: "Discover luxury fashion, accessories and more at Ballentino. Shop the latest collections of premium quality clothing and accessories.",
  keywords: "Ballentino, luxury fashion, designer clothing, accessories, Nigerian fashion",
  openGraph: {
    title: "Ballentino | Luxury Fashion & Accessories",
    description: "Discover luxury fashion, accessories and more at Ballentino",
    type: "website",
    locale: "en_US",
    siteName: "Ballentino",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ebGaramond.variable} ${whisper.variable}`}>
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
