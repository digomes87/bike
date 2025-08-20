/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Otimização de imagens
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Configurações experimentais
  experimental: {
    // optimizeCss: true, // Removido temporariamente devido a problemas de dependência
  },
  
  // Configurações de build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configurações de performance
  poweredByHeader: false,
  
  // Redirecionamentos para URLs antigas
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
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