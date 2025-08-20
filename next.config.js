/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/portifolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/produto.html',
        destination: '/produtos',
        permanent: true,
      },
      {
        source: '/sobre.html',
        destination: '/sobre',
        permanent: true,
      },
      {
        source: '/contato.html',
        destination: '/contato',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;