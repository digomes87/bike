/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Configurações para GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/bike' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bike/' : '',
  
  // Configuração de imagens para exportação estática
  images: {
    unoptimized: true,
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