import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Bikcraft - Bicicletas Feitas a Mão',
  description = 'A Bikcraft é uma empresa especializada em bicicletas customizadas feitas à mão. Oferecemos qualidade, design e performance em cada produto.',
  keywords = 'bicicletas, customizadas, feitas à mão, qualidade, design, performance, bikcraft',
  image = '/bikcraft.svg',
  url = 'https://bikcraft.vercel.app',
  type = 'website',
  siteName = 'Bikcraft',
  locale = 'pt_BR',
  author = 'Bikcraft Team',
}) => {
  const fullTitle = title.includes('Bikcraft') ? title : `${title} | Bikcraft`;
  const fullUrl = url.startsWith('http') ? url : `https://bikcraft.vercel.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://bikcraft.vercel.app${image}`;

  return (
    <Head>
      {/* Título da página */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicas */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preconnect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Schema.org para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            description: description,
            url: fullUrl,
            logo: fullImage,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+55-21-9999-9999',
              contactType: 'customer service',
              areaServed: 'BR',
              availableLanguage: 'Portuguese',
            },
            sameAs: [
              'https://www.facebook.com/bikcraft',
              'https://www.instagram.com/bikcraft',
              'https://www.twitter.com/bikcraft',
            ],
          }),
        }}
      />
    </Head>
  );
};

export default SEO;