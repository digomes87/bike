import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  especificacoes: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    especificacoes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Message sent successfully! We will contact you soon.');
      setFormData({ nome: '', email: '', telefone: '', especificacoes: '' });
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Contact - Get in Touch with Bikcraft"
      description="Contact us for quotes, questions or information about our custom bicycles. We are ready to serve you."
      keywords="contact, quote, questions, information, bikcraft, phone, email, address"
      url="/contato"
      type="website"
    >
      <section className="introducao-interna interna-contato">
        <div className="container">
          <h1>Contact</h1>
          <p>get your questions answered with us</p>
        </div>
      </section>

      <section className="contato container">
        <form 
          id="form-orcamento" 
          className="contato-form grid-8"
          onSubmit={handleSubmit}
        >
          <label htmlFor="nome">Name</label>
          <input 
            type="text" 
            id="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <label htmlFor="telefone">Phone</label>
          <input 
            type="tel" 
            id="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
          
          <label htmlFor="especificacoes">Specifications</label>
          <textarea 
            id="especificacoes"
            value={formData.especificacoes}
            onChange={handleInputChange}
            rows={5}
          ></textarea>
          
          <button 
            type="submit" 
            className="btn btn-preto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          
          {submitMessage && (
            <p className="submit-message">{submitMessage}</p>
          )}
        </form>
        
        <div className="contato-dados grid-8">
          <h3>Contact Info</h3>
          <span>WhatsApp: +55 41 995-062-619</span>
          <span>Diego.Gomes87@gmail.com</span>
          <span>Toledo - PR</span>
          
          <h3>Build your Bikcraft</h3>
          <p>Choose the specifications:</p>
          <ul>
            <li>- Colors</li>
            <li>- Style</li>
            <li>- Measurements</li>
            <li>- Accessories</li>
            <li>- And Others</li>
          </ul>
        </div>
        
        <div className="grid-16">
          <Image 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=940&q=80" 
              alt="Modern Bike Workshop Location" 
              width={940} 
              height={340}
            />
        </div>
      </section>
    </Layout>
  );
};

export default Contato;