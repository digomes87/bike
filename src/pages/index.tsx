import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useSimpleSlide } from '../hooks/useSimpleSlide';
import { useSimpleAnime } from '../hooks/useSimpleAnime';

const Home: React.FC = () => {
  const slideContainer = useSimpleSlide({ time: 4000 });
  
  // Inicializar animações de scroll
  useSimpleAnime({ offset: 0.6 });
  
  useEffect(() => {
    // Executar verificação inicial das animações
    const event = new Event('scroll');
    window.dispatchEvent(event);
  }, []);

  return (
    <Layout
      title="Bikcraft - Handcrafted Bicycles"
      description="Bikcraft is a company specialized in custom handcrafted bicycles. We offer quality, design and performance in every product."
      keywords="bicycles, custom, handcrafted, quality, design, performance, bikcraft, home"
      url="/"
      type="website"
    >
      <section className="introdution">
        <div className="container">
          <h1 data-anime="500">Handcrafted Bicycles</h1>
          <section ref={slideContainer.containerRef as React.RefObject<HTMLElement>} className="quote-externo">
            <blockquote>
              <p data-anime="1000">
                "Have nothing in your house that you do not know to be useful or believe to be beautiful"
              </p>
              <cite>William Morris</cite>
            </blockquote>
            <blockquote>
              <p>"There is nothing more pleasurable than cycling outdoors and feeling the freedom."</p>
              <cite>BIKCRAFT TEAM</cite>
            </blockquote>
            <blockquote>
              <p>"The bicycle is the most efficient invention ever created by man."</p>
              <cite>BILL STRICKLAND</cite>
            </blockquote>
          </section>
          <Link href="/produtos" className="btn">
            Get Quote
          </Link>
        </div>
      </section>

      <section className="products container">
        <h2 className="subtitle">Products</h2>
        <ul className="products-list">
          <li className="grid-1-3">
            <div className="products-list-img">
              <img 
                src="/produtos/passeio.svg" 
                alt="Bike Passeio" 
                width={150} 
                height={150}
              />
            </div>
            <h3>Leisure</h3>
            <p>Perfect for city rides and comfortable journeys</p>
          </li>

          <li className="grid-1-3">
            <div className="products-list-img">
              <img 
                src="/produtos/esporte.svg" 
                alt="Bike Esporte" 
                width={150} 
                height={150}
              />
            </div>
            <h3>Sport</h3>
            <p>High performance bikes for competitive cycling</p>
          </li>

          <li className="grid-1-3">
            <div className="products-list-img">
              <img 
                src="/produtos/retro.svg" 
                alt="Bike Retro" 
                width={150} 
                height={150}
              />
            </div>
            <h3>Retro</h3>
            <p>Classic design with modern technology</p>
          </li>
        </ul>
        <div className="call-to-action">
          <p>Click here to see product details</p>
          <Link href="/produtos" className="btn btn-primary">
            Products
          </Link>
        </div>
      </section>

      <section className="portifolio">
        <div className="container">
          <h2 className="subtitle">Portfolio</h2>
          <ul className="portfolio-list">
            <li className="grid-8">
              <img 
                src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=460&q=80" 
                alt="Vintage Retro Bicycle" 
                width={460} 
                height={340}
              />
            </li>
            <li className="grid-8">
              <img 
                src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=460&q=80" 
                alt="City Leisure Bicycle" 
                width={460} 
                height={340}
              />
            </li>
            <li className="grid-16">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=940&q=80" 
                alt="High Performance Sport Bike" 
                width={940} 
                height={600}
              />
            </li>
          </ul>
          <div className="call-to-action">
            <p>Click here to see our work</p>
            <Link href="/portfolio" className="btn">
              Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="qualidade container">
        <h2 className="subtitle">Quality</h2>
        <img 
          src="/bikcraft-qualidade.svg" 
          alt="Qualidade Bike" 
          width={300} 
          height={300}
        />
        <ul className="qualidade-list">
          <li className="grid-1-3">
            <h3>Durability</h3>
            <p>
              Built to last with premium materials and expert craftsmanship. 
              Every component is carefully selected for maximum longevity.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Design</h3>
            <p>
              Elegant aesthetics meet functional engineering. 
              Each bike is a perfect balance of form and performance.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Sustainability</h3>
            <p>
              Eco-friendly materials and sustainable manufacturing processes. 
              Building bikes that respect our planet.
            </p>
          </li>
        </ul>
        <div className="call-to-action">
          <p>Learn more about our commitment to quality</p>
          <Link href="/sobre" className="btn btn-secondary">
            About Us
          </Link>
        </div>
      </section>

      <section className="quebra">
        <blockquote className="quote-externo container">
          <p>"Have nothing in your house that you do not know to be useful or believe to be beautiful"</p>
          <cite>William Morris</cite>
        </blockquote>
      </section>
    </Layout>
  );
};

export default Home;