import Image from 'next/image';
import Layout from '../components/Layout';

const Sobre: React.FC = () => {
  return (
    <Layout
      title="About - Bikcraft History and Values"
      description="Learn about Bikcraft's history, our mission, vision and values. We are specialists in high-quality handcrafted bicycles since our foundation."
      keywords="about bikcraft, history, mission, vision, values, handcrafted bicycles, quality"
      url="/sobre"
      type="website"
      headerClassName=""
    >
      <section className="interna interna-sobre">
        <div className="container">
          <h1>About</h1>
          <p>Learn more about BikeCraft</p>
        </div>
      </section>

      <section className="missao-sobre container">
        <div className="grid-10">
          <h2 className="subtitulo-interno">History, Mission and Vision</h2>
          <p>
            Founded with a passion for cycling excellence, Bikcraft has been crafting premium bicycles 
            for over a decade. Our journey began with a simple vision: to create bikes that combine 
            traditional craftsmanship with modern innovation, delivering unparalleled performance and style.
          </p>
          <p>
            We believe that every cyclist deserves a bike that's perfectly tailored to their needs. 
            That's why we focus on custom builds, premium materials, and meticulous attention to detail 
            in every frame we create.
          </p>
        </div>
        <div className="grid-6">
          <h2 className="subtitulo-interno">Values</h2>
          <ul>
            <li>Quality in Process</li>
            <li>Customer Focus</li>
            <li>Fun & Enjoyment</li>
            <li>Nature Preservation</li>
          </ul>
        </div>
        <div className="grid-16">
          <Image 
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=940&q=80" 
              alt="Professional Bicycle Workshop" 
              width={940} 
              height={400}
            />
        </div>
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
              Our bikes are built to last, using premium materials and time-tested construction 
              techniques. Every frame undergoes rigorous testing to ensure it can handle years 
              of intensive use while maintaining peak performance.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Design</h3>
            <p>
              We combine aesthetic excellence with functional innovation. Our design team creates 
              bikes that not only perform exceptionally but also turn heads with their stunning 
              visual appeal and ergonomic comfort.
            </p>
          </li>
          <li className="grid-1-3">
            <h3>Sustainability</h3>
            <p>
              Environmental responsibility is at the core of our manufacturing process. We use 
              eco-friendly materials and sustainable practices to minimize our carbon footprint 
              while creating bikes that promote green transportation.
            </p>
          </li>
        </ul>
      </section>


    </Layout>
  );
};

export default Sobre;