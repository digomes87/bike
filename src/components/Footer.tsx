import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="grid-8 footer-historia">
            <h3>Our Story</h3>
            <p>
              Founded with a passion for cycling excellence, Bikcraft combines traditional 
              craftsmanship with modern innovation. Each bicycle is meticulously handcrafted 
              to deliver unparalleled performance and style, creating the perfect ride for 
              every cycling enthusiast.
            </p>
          </div>
          <div className="grid-4 footer-contato">
            <h3>Contact</h3>
            <ul>
              <li>WhatsApp: +55 41 995-062-619</li>
              <li>contact@bikcraft.com</li>
              <li>Toledo, PR - Brazil</li>
            </ul>
          </div>
          <div className="grid-4 footer-rede">
            <h3>Social Media</h3>
            <ul>
              <li>
                <Link href="#">
                  <img 
                    src="/redes-sociais/facebook.svg" 
                    alt="Facebook" 
                    width={32} 
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img 
                    src="/redes-sociais/instagram.svg" 
                    alt="Instagram" 
                    width={32} 
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/devdiegogo" target="_blank">
                  <img 
                    src="/redes-sociais/twitter.svg" 
                    alt="Twitter" 
                    width={32} 
                    height={32}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <p className="grid-16">All Rights Reserved © 2024 Bikcraft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;