import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? 'menu-ativo' : '';
  };

  return (
    <header className={`header ${className}`}>
      <div className="container">
        <Link href="/" className="grid-4">
          <Image 
            src="/bikcraft.svg" 
            alt="Bikcraft" 
            width={150} 
            height={50}
            priority
          />
        </Link>
        <nav className="grid-12 header-menu">
          <ul>
            <li>
              <Link href="/sobre" className={isActive('/sobre')}>
                About
              </Link>
            </li>
            <li>
              <Link href="/produtos" className={isActive('/produtos')}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={isActive('/portfolio')}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contato" className={isActive('/contato')}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;