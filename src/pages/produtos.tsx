import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const Produtos: React.FC = () => {
  return (
    <Layout
      title="Products - Custom Bikcraft Bicycles"
      description="Discover our complete line of bicycles: Leisure, Sport and Retro. Each model is carefully designed and handcrafted with the finest materials."
      keywords="bicycles, products, leisure, sport, retro, custom, quote, bikcraft"
      url="/produtos"
      type="website"
    >
      <section className="introducao-interna interna-produtos">
        <div className="container">
          <h1>Products</h1>
          <p>discover all our products</p>
        </div>
      </section>

      <section className="container produto-item">
        <div className="grid-11">
          <Image 
            src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80" 
            alt="Modern City Leisure Bicycle" 
            width={540} 
            height={380}
          />
          <h2>Leisure</h2>
        </div>
        <div className="grid-5 produto-icone">
          <Image 
            src="/produtos/passeio.svg" 
            alt="Leisure Icon" 
            width={200} 
            height={200}
          />
        </div>
        <div className="grid-8">
          <Image 
            src="https://images.unsplash.com/photo-1517654443271-21d6b2c6b5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=380&q=80" 
            alt="Urban Leisure Bike Detail" 
            width={380} 
            height={280}
          />
        </div>
        <div className="grid-8 produto-info">
          <p>
            Perfect for city rides and recreational cycling. Our leisure bikes combine comfort 
            and style, featuring ergonomic design and smooth performance for everyday adventures.
          </p>
          <ul>
            <li>Comfort</li>
            <li>Speed</li>
            <li>Design</li>
            <li>Versatility</li>
          </ul>
        </div>
      </section>

      <section className="container produto-item">
        <div className="grid-11">
          <Image 
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80" 
            alt="Professional Sport Racing Bicycle" 
            width={540} 
            height={380}
          />
          <h2>Sport</h2>
        </div>
        <div className="grid-5 produto-icone">
          <Image 
            src="/produtos/esporte.svg" 
            alt="Sport Icon" 
            width={200} 
            height={200}
          />
        </div>
        <div className="grid-8">
          <Image 
            src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=380&q=80" 
            alt="High Performance Sport Bike" 
            width={380} 
            height={280}
          />
        </div>
        <div className="grid-8 produto-info">
          <p>
            Built for performance and competition. Our sport bikes feature lightweight frames, 
            aerodynamic design, and precision engineering for serious cyclists and athletes.
          </p>
          <ul>
            <li>Competition</li>
            <li>Speed</li>
            <li>Design</li>
            <li>Resistance</li>
          </ul>
        </div>
      </section>

      <section className="container produto-item">
        <div className="grid-11">
          <Image 
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80" 
            alt="Classic Vintage Retro Bicycle" 
            width={540} 
            height={380}
          />
          <h2>Retro</h2>
        </div>
        <div className="grid-5 produto-icone">
          <Image 
            src="/produtos/retro.svg" 
            alt="Retro Icon" 
            width={200} 
            height={200}
          />
        </div>
        <div className="grid-8">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=380&q=80" 
            alt="Vintage Style Bicycle Detail" 
            width={380} 
            height={280}
          />
        </div>
        <div className="grid-8 produto-info">
          <p>
            Classic style meets modern functionality. Our retro bikes capture the timeless 
            elegance of vintage cycling with contemporary materials and reliable performance.
          </p>
          <ul>
            <li>Comfort</li>
            <li>Speed</li>
            <li>Design</li>
            <li>Versatility</li>
          </ul>
        </div>
      </section>

      <section className="orcamento">
        <div className="container">
          <h2 className="subtitle-branco">Quote</h2>
          <form className="orcamento-form">
            <div className="grid-8">
              <label htmlFor="nome">Name</label>
              <input type="text" id="nome" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="telefone">Phone</label>
              <input type="tel" id="telefone" />
              <label htmlFor="espec">Specifications</label>
              <textarea id="espec"></textarea>
            </div>
            <div className="grid-8 orcamento-detalhes">
              <h3>Bikcraft Classic</h3>
              <ul>
                <li>Form</li>
                <li>Stainless Steel</li>
                <li>Resistant</li>
                <li>Retro</li>
                <li>Natural</li>
                <li>Fast</li>
                <li>Compact</li>
                <li>5 Colors</li>
                <li>2 Year Warranty</li>
              </ul>
              <p>$2500</p>
            </div>
            <div className="grid-16">
              <button type="submit" className="btn btn-primary">Request Quote</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;