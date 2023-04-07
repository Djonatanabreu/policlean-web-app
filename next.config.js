/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fretefacil.tray.com.br',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
