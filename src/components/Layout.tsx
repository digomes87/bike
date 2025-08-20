import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  headerClassName?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title,
  description,
  keywords,
  image,
  url,
  type,
  headerClassName = ''
}) => {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
      />
      
      <Header className={headerClassName} />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;