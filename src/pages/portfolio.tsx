import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const Portfolio: React.FC = () => {
  return (
    <Layout
      title="Portfolio - Bikcraft Projects and Works"
      description="Discover our portfolio with the best custom bicycle projects and testimonials from satisfied customers with our products."
      keywords="portfolio, projects, works, custom bicycles, testimonials, customers, bikcraft"
      url="/portfolio"
      type="website"
    >
      <section className="introducao-interna interna-portfolio">
        <div className="container">
          <h1>Portfolio</h1>
          <p>discover our projects</p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '60px' }}>
        <blockquote className="quote-externo">
          <p>
            "Cycling has always been my passion, what the Bikcraft team did was 
            intensify my love for this activity. I recommend it to everyone I love."
          </p>
          <cite>Barbara Moss</cite>
        </blockquote>
      </section>

      <section className="portfolio">
        <div className="container">
          <ul className="portfolio-list">
            <li className="grid-8">
              <div className="portfolio-item">
                <Image 
                  src="https://images.unsplash.com/photo-1544191696-15693072e0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=460&q=80" 
                  alt="Vintage Retro Bicycle" 
                  width={460} 
                  height={340}
                />
                <div className="portfolio-info">
                  <h3>Retro Bicycle</h3>
                  <p>Classic project with vintage design and high-quality materials.</p>
                </div>
              </div>
            </li>
            
            <li className="grid-8">
              <div className="portfolio-item">
                <Image 
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=460&q=80" 
                  alt="City Leisure Bicycle" 
                  width={460} 
                  height={340}
                />
                <div className="portfolio-info">
                  <h3>Leisure Bicycle</h3>
                  <p>Ideal for urban rides with unique comfort and style.</p>
                </div>
              </div>
            </li>
            
            <li className="grid-16">
              <div className="portfolio-item">
                <Image 
                  src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=940&q=80" 
                  alt="Sport Racing Bicycle" 
                  width={940} 
                  height={340}
                />
                <div className="portfolio-info">
                  <h3>Sport Bicycle</h3>
                  <p>Performance and speed for the most demanding cyclists.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '60px' }}>
        <blockquote className="quote-externo">
          <p>
            "Nothing better than a Bikcraft in my life, my cycling has never 
            been the same. Now I'm Bikcraft forever."
          </p>
          <cite>Jhony Rato</cite>
        </blockquote>
      </section>

      <section className="qualidade container">
        <h2 className="subtitle">Quality</h2>
        <Image 
          src="/bikcraft-qualidade.svg" 
          alt="Bikcraft Quality" 
          width={300} 
          height={300}
        />
        <ul className="qualidade-list">
          <li className="grid-1-3">
            <h3>Durability</h3>
            <p>
              Built to last with premium materials and rigorous testing. Our bicycles 
              withstand the test of time and intensive use.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Design</h3>
            <p>
              Innovative and elegant design that combines aesthetics with functionality. 
              Each bicycle is a work of art on wheels.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Sustainability</h3>
            <p>
              Committed to the environment with sustainable practices and eco-friendly 
              materials. Cycling for a better future.
            </p>
          </li>
        </ul>
        
        <div className="call-to-action">
          <p>Learn more about our story</p>
          <Link href="/sobre" className="btn btn-black">
            About
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;