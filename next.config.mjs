/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.vogue.co.uk',
      'theglossarymagazine.com',
      'www.insidehook.com',
      'www.zttw.store',
      'encrypted-tbn0.gstatic.com',
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.vogue.co.uk',
        port: '',
        pathname: '/**',
      }
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig; 