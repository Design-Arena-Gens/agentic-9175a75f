/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.maxmuller.com',
      },
    ],
  },
};

export default nextConfig;

